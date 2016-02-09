var express = require('express');

module.exports = function (app) {
  router = express.Router();

  router.post('/', function (req, res) {
    if (req.body.email === 'lou@email.com') {
      res.cookie('user', 3) // id for lou
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
