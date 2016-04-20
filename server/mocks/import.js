var express = require('express');
var _ = require('lodash');
var imports = require('./fixtures/imports');

module.exports = function (app) {
  router = express.Router();
  router.get('/', function (req, res) {
      res.status(200).send(imports[0]);
  });
  app.use('/api/v1.0/reports/ads', router);
};
