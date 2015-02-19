var http = require('http');
var port = (process.env.VCAP_APP_PORT || 8192);
var host = (process.env.VCAP_APP_HOST || 'localhost');
//var port = 8192;
//var host = 'localhost';
http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type' : 'text/html'});
  res.write('<h1>Hello from the Skyscape Cloud</h1>\n');
  res.write('<h2>Host = ' + host + '</h2>\n');
  res.write('<h2>Port = ' + port + '</h2>\n');
  res.end('\n');
}).listen(port, host);
