var express = require('express');

module.exports = function (app) {
  router = express.Router();
  var USER = {
        'id': 3,
        'firstName': 'Lou',
        'lastName': 'Ferrigno',
        'email': 'lou@email.com',
        'lastLoginAt': '2016-02-09T23:06:02.053',
        'createdAt': '2015-12-09T07:00:32.113',
        'updatedAt': '2015-12-09T07:01:23.92',
        'roles': [
          'Admin'
        ]
      };
  router.get('/', function (req, res) {
    if (req.cookies.user == USER.id) {
      res.send(USER);
    } else {
      res.status(401).send({
        errors: {base: ['Not logged in']}
      })
    }


  });
  app.use('/api/v1.0/users/me', router);
};
