const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/products', (req, res) => {
  res.render('products', {
    products: [
      {
        image: '/images/product1.jpg',
        name: 'Смартфон 1',
        description: 'Описание смартфона 1.',
        price: 19.99
      },
      {
        image: '/images/product2.jpg',
        name: 'Смартфон 2',
        description: 'Описание смартфона 2.',
        price: 29.99
      },
      {
        image: '/images/product3.jpg',
        name: 'Смартфон 3',
        description: 'Описание смартфона 3.',
        price: 39.99
      }
    ]
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});