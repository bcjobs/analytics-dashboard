module.exports = function(app) {
  var express = require('express');
  var ruleTypesRouter = express.Router();

  ruleTypesRouter.get('/', function(req, res) {
    // res.status(401).send({message: 'Not logged in', code: 'not_logged'});
    res.send(['Job Title', 'Company Name', 'Skill']);
  });

  app.use('/api/v1.0/ruleTypes', ruleTypesRouter);
};
