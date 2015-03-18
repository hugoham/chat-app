var express = require('express');
var app = express();

var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var host = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

// respond with "Hello World!" on the homepage
app.get('/', function(req, res) {
  res.send('Hello World!');
});

// accept POST request on the homepage
app.post('/', function(req, res) {
  res.send('Got a POST request');
});

// accept PUT request at /user
app.put('/user', function(req, res) {
  res.send('Got a PUT request at /user');
});

// accept DELETE request at /user
app.delete('/user', function(req, res) {
  res.send('Got a DELETE request at /user');
});

var server = app.listen(port, host, function() {
  /*
  var host = server.address().address;
  var port = server.address().port;
  */
  console.log('Example app listening at http://%s:%s', host, port);

});
