var express = require('express');
var _ = require('lodash');
var accounts = require('./fixtures/accounts');

module.exports = function (app) {
  router = express.Router();

  router.get('/', function (req, res) {
      res.status(200).send(accounts);
  });

  app.use('/api/v1.0/accounts', router);
};
