var express = require('express');
var _ = require('lodash');

module.exports = function(app) {
  var rulesRouter = express.Router();

  var RULES = [
    {
      id: '123',
      terms: ["Sr. Developer", "Developer II"],
      action: "replace",
      replaceWith: "Senior Developer"
    },
    {
      id: '124',
      terms: ["C# Developer"],
      action: "replace",
      replaceWith: ".NET Developer"
    }
  ];

  rulesRouter.get('/', function(req, res) {
    res.send(RULES);
  });

  rulesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  rulesRouter.get('/:id', function(req, res) {
    res.send(_.find(RULES, {id: req.params.id}));
  });

  rulesRouter.put('/:id', function(req, res) {
    res.send({
      'rules': {
        id: req.params.id
      }
    });
  });

  rulesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/v1.0/rules', rulesRouter);
};
