var express = require('express');
var _ = require('lodash');
var users = require('./fixtures/users');

module.exports = function (app) {

  router = express.Router();

  router.get('/', function (req, res) {
    res.send(users);
  });

  router.get('/me', function (req, res) {
    var user = _.find(users, {id: parseInt(req.cookies.user)});
    console.log()
    if (user) {
      res.send(user);
    } else {
      res.status(401).send({
        errors: { base: ['Not logged in'] }
      });
    }
  });

  router.post('/', function (req, res) {
    res.status(201).end();
  });

  router.get('/:id', function (req, res) {
    res.send(_.find(users, { id: req.params.id }));
  });

  router.put('/:id', function (req, res) {
    res.send({
      'users': {
        id: req.params.id
      }
    });
  });

  router.delete('/:id', function (req, res) {
    res.status(204).end();
  });

  app.use('/api/v1.0/users', router);
};
