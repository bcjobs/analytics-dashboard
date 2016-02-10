var express = require('express');
module.exports = function (app) {
  var USERS = [
    {
      'id': 2,
      'firstName': 'Jakub',
      'lastName': 'Sedlacek',
      'email': 'sedlacek.jakub@gmail.com',
      'lastLoginAt': '2015-12-28T11:40:25.707',
      'createdAt': '2015-12-08T12:23:40.297',
      'updatedAt': '2015-12-08T12:23:40.327',
      'roles': [
        'Admin'
      ]
    },
    {
      'id': 3,
      'firstName': 'Johnny',
      'lastName': 'Oshika',
      'email': 'johnnyoshika@gmail.com',
      'lastLoginAt': '2016-02-09T22:39:23.377',
      'createdAt': '2015-12-09T07:00:32.113',
      'updatedAt': '2015-12-09T07:01:23.92',
      'roles': [
        'Admin'
      ]
    },
    {
      'id': 4,
      'firstName': 'Ryan',
      'lastName': 'St. Germaine',
      'email': 'ryan@bcjobs.ca',
      'lastLoginAt': '2016-01-28T20:47:01.067',
      'createdAt': '2015-12-09T07:24:00.28',
      'updatedAt': '2015-12-09T07:24:00.313',
      'roles': [
        'Admin'
      ]
    },
    {
      'id': 5,
      'firstName': 'Maxim',
      'lastName': 'Gubin',
      'email': 'maxim.gubin@mail.ru',
      'lastLoginAt': null,
      'createdAt': '2015-12-14T18:00:54.673',
      'updatedAt': '2015-12-14T18:00:54.717',
      'roles': [
        'Admin'
      ]
    },
    {
      'id': 6,
      'firstName': 'Greg',
      'lastName': 'Caws',
      'email': 'gcaws@bcic.ca',
      'lastLoginAt': null,
      'createdAt': '2016-01-11T22:19:17.13',
      'updatedAt': '2016-01-12T12:14:27.693',
      'roles': [
        'Admin'
      ]
    },
    {
      'id': 7,
      'firstName': 'Dean',
      'lastName': 'Prelazzi',
      'email': 'dean@bcic.ca',
      'lastLoginAt': null,
      'createdAt': '2016-01-11T22:19:57.673',
      'updatedAt': '2016-01-11T22:19:57.673',
      'roles': [
        'Admin'
      ]
    },
    {
      'id': 8,
      'firstName': 'Jasmine',
      'lastName': 'Tiang',
      'email': 'jasmine@bcjobs.ca',
      'lastLoginAt': '2016-01-19T01:01:52.563',
      'createdAt': '2016-01-18T14:29:32.413',
      'updatedAt': '2016-01-18T15:42:48.827',
      'roles': [
        'Admin'
      ]
    },
    {
      'id': 9,
      'firstName': 'Bhavani',
      'lastName': 'E',
      'email': 'bhavani@botcode.com',
      'lastLoginAt': '2016-01-23T07:10:01.133',
      'createdAt': '2016-01-22T07:47:35.92',
      'updatedAt': '2016-01-22T07:47:35.953',
      'roles': [
        'Admin'
      ]
    }
  ];


  router = express.Router();
  router.get('/', function (req, res) {
    res.send(USERS)

  });
  app.use('/api/v1.0/users', router);
};
