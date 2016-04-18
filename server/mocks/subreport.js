var express = require('express');
var _ = require('lodash');
var subreports = require('./fixtures/subreport');

module.exports = function (app) {
  router = express.Router();

  router.get('/', function (req, res) {
    console.log(req.query.trend);
    if(req.query.trend === 'Title'){
      res.status(200).send(subreports[0]);
    } else if (req.query.trend === 'Skill'){
      res.status(200).send(subreports[1]);
    } else if (req.query.trend === 'Company'){
      res.status(200).send(subreports[2]);
    } else {
      res.status(500).send({
        message: 'Unexpected error! We\'ll try to fix this as soon as we can.',
        code: 'InvalidOperation'
      });
    }
  });


  app.use('/api/v1.0/reports/trends/subreports', router);
};
