var express = require('express');
var httpProxy = require('http-proxy');
var path = require('path');

var app = express();
var proxy = httpProxy.createProxyServer({changeOrigin: true});

app.use('/api', function(req, res, next) {
  proxy.web(req, res, { target: 'http://analytics.bcjobs.ca/api' });
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
