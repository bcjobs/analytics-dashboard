var express = require('express');
var _ = require('lodash');
var users = require('./fixtures/users');

module.exports = function (app) {
  router = express.Router();

  router.post('/', function (req, res) {
    var user = _.find(users, { email: req.body.email });
    if (user) {
      res.cookie('user', user.id); // id for lou
      res.status(204).end();
    }
    else {
      res.status(422).send({
        message: 'Incorrect email',
        code: 'email'
      });
    }
  });

  router.delete('/', function (req, res) {
    res.cookie('user', null);
    res.send();
  });

  app.use('/api/v1.0/authentication/login', router);
};
