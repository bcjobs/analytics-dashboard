var globSync   = require('glob').sync;

function usingProxy() {
    return !!process.argv.filter(function (arg) {
        return arg.indexOf('--proxy') === 0;
    }).length;
}

module.exports = function(app) {
  var mocks      = globSync('./mocks/**/*.js', { cwd: __dirname }).map(require);
  var proxies    = globSync('./proxies/**/*.js', { cwd: __dirname }).map(require);

  if (usingProxy()) {
    proxies.forEach(function(route) { route(app); });
    return;
  }

  // Log proxy requests
  var morgan  = require('morgan');
  app.use(morgan('dev'));

  mocks.forEach(function(route) { route(app); });
  proxies.forEach(function(route) { route(app); });
};
