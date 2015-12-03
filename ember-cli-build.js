/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var path = require('path');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  app.import(path.join(app.bowerDirectory, 'chartist/dist/chartist.min.css'));

  app.import(path.join(app.bowerDirectory, 'bootstrap/dist/js/bootstrap.min.js'));

  app.import(path.join(app.bowerDirectory, 'typeahead.js/dist/typeahead.bundle.min.js'));

  return app.toTree();
};
