var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy');

var app = express();

var proxy = httpProxy.createProxyServer({
  changeOrigin: true,
  target: 'http://analytics.bcjobs.ca'
});

app.get('/api/v1.0/reports/outline', function(req, res, next) {
  proxy.web(req, res);
});

app.use('/assets', express.static(__dirname + '/dist/assets'));
app.use('/images', express.static(__dirname + '/dist/images'));

app.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

var port = process.env.PORT || 4200;
app.listen(port, function() {
  console.log("Listening on " + port);
});
