const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
ора
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/contact', (req, res) => {
  res.render('contact', { message: null });
});

app.post('/submit-form', (req, res) => {

  const success = true; 
  if (success) {
    res.render('contact', { message: { type: 'success', text: 'Ваше сообщение успешно отправлено!' } });
  } else {
    res.render('contact', { message: { type: 'error', text: 'Ошибка при отправке сообщения. Пожалуйста, попробуйте снова.' } });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
