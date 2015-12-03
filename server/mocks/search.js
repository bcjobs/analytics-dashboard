var express = require('express');

module.exports = function(app) {
  var searchRouter = express.Router();

  searchRouter.get('/', function(req, res) {
    res.send(['.NET Developer', 'VB.NET Developer', 'C# Developer']);
  });

  app.use('/api/v1.0/search', searchRouter);
};
