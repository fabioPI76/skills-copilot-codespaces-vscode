// Create web server
// Create a web server that listens on port 3000 and serves the comments.json file

// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "application/json"});
  fs.readFile('comments.json', function(err, data) {
    response.end(data);
  });
});

// Listen on port 3000, IP defaults to
