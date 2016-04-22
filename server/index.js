var globSync   = require('glob').sync;
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')

function usingProxy() {
    return !!process.argv.filter(function (arg) {
        return arg.indexOf('--proxy') === 0;
    }).length;
}

module.exports = function(app) {
  var mocks      = globSync('./mocks/*.js', { cwd: __dirname }).map(require);
  var proxies    = globSync('./proxies/**/*.js', { cwd: __dirname }).map(require);

  if (usingProxy()) {
    proxies.forEach(function(route) { route(app); });
    return;
  }

  // Log proxy requests
  var morgan  = require('morgan');
  app.use(morgan('dev'));

  // Delay to show spinner for subreports
  app.use('/api/v1.0/reports/trends/subreports', function(req, res, next) {
      setTimeout(next, 2000);
  });

  app.use('/api', bodyParser.json());
  app.use(cookieParser());

  mocks.forEach(function(route) { route(app); });
};
