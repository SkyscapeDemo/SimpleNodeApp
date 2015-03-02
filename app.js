var hello = 'Hello from the Wonderfujl Skyscape Cloud'

var http = require('http');
var port = (process.env.VCAP_APP_PORT || 8192);
var host = (process.env.VCAP_APP_HOST || 'localhost');
http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type' : 'text/html'});
  res.write('<h1>' + hello + '</h1>\n');
  res.write('<h2>Port = ' + port + '</h2>\n');
  res.end('\n');
}).listen(port, host);
