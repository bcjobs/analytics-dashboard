var proxyPath = '/api';

module.exports = function(app) {

  var argv = require('minimist')(process.argv.slice(2));
  var proxyUrl = argv.proxy;

  var proxy = require('http-proxy').createProxyServer({
    xfwd: true,
    changeOrigin: true
  });

  proxy.on('error', function(err, req) {
    console.error(err, req.url);
  });

  app.use(proxyPath, function(req, res, next){
    // include root path in proxied request
    req.url = proxyPath + req.url;
    req.headers['x-forwarded-host'] = req.get('host');
    proxy.web(req, res, { target: proxyUrl });
  });
};
