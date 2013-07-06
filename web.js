var express = require('express');
var fs = fs.require('fs');
var data = fs.readFileSync("index.html");
var dataString = data.toString();
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('hey!!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
