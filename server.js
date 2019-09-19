const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

// Middleware
app.use(express.static(__dirname +  '/public'));
// Definir directorio de parciales
hbs.registerPartials(__dirname + '/views/partials');
// Establecer HBS como motor de templates por default
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'sUPerMan roDrigUEz'
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/data', (req, res) => {
  res.send('Hola data');
});

app.listen(port, () => {
  console.log(`Escuchando peticiones en el puerto ${port}`);
});
