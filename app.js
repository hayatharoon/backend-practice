const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const routes = require('./routes');
require('./models');

function init() {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(morgan('dev'));
  app.use('/api', routes);
  return app;
}

module.exports = init();
