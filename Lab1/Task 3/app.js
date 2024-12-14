const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));

let tasks = [
  { id: 1, name: 'Купить молоко', completed: false },
  { id: 2, name: 'Позвонить другу', completed: false },
  { id: 3, name: 'Завершить проект', completed: true }
];

app.get('/todo', (req, res) => {
  res.render('todo', { tasks });
});

app.post('/add-task', (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    name: req.body.task,
    completed: false
  };
  tasks.push(newTask);
  res.redirect('/todo');
});

app.post('/mark-completed', (req, res) => {
  const taskId = parseInt(req.body.taskId, 10);
  const task = tasks.find(t => t.id === taskId);
  if (task) {
    task.completed = !task.completed;
  }
  res.redirect('/todo');
});

app.post('/delete-task', (req, res) => {
  const taskId = parseInt(req.body.taskId, 10);
  tasks = tasks.filter(t => t.id !== taskId);
  res.redirect('/todo');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
