const express = require ('express');
const config = require('./config');

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
  res.render('index', {name: 'realoj'});
  next();
});

app.listen(config.port, () => {
  console.info(`Running on ${config.port}`);
});