'use strict';

const express = require('express');
const server = express();

const internalErrorHandler = require('./error-handlers/500.js');
const notFoundHandler = require('./error-handlers/404.js');
const loggerMiddleware = require('./middleware/logger.js');

const foodRoutes = require('./routes/foods.js');
const clothesRoutes = require('./routes/clothes.js');
// const clothesRoutes = require('./routes/clothes.js');


server.use(express.json());
server.use(loggerMiddleware);

server.use(foodRoutes);
// server.use(clothesRoutes);

server.get('/test', (req, res) => {
  res.status(200).send("server is live")
})








server.use('*', notFoundHandler);
server.use(internalErrorHandler);

module.exports = {
  server,
  start: port => {
    server.listen(port, () => console.log(`server started on ${port}`));
  }
}