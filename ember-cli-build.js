/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var path = require('path');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  app.import(path.join(app.bowerDirectory, 'chartist/dist/chartist.min.css'));
  app.import(path.join(app.bowerDirectory, 'tether-tooltip/dist/css/tooltip-theme-arrows.css'));

  return app.toTree();
};
