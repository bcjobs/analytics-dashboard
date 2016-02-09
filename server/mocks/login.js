var express = require('express');

module.exports = function(app) {
  router = express.Router();

  router.post('/', function(req, res) {
    if (req.body.email === 'lou@email.com') {
      res.cookie('user', 1) // id for lou
          res.status(204).end();
    }
    else {
      res.status(400).send({
        message: 'Incorrect email',
        code: 'email'
      });
    }
  });

  router.delete('/', function(req, res) {
    res.send();
  });

  app.use('/api/v1.0/authentication/login', router);
};
