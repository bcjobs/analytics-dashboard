var express = require('express');
var path = require('path');
var request = require('request');

var app = express();

app.get('/api/v1.0/reports/outline', function(req, res, next) {
  request.get('http://analytics.bcjobs.ca/api/v1.0/reports/outline').pipe(res);
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
