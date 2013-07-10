var express = require('express');
var fs = require('fs');



var buffer;
fs.readFile('index.html', 'utf8', function(err, data){
    if(err){
	return console.log(err);
    }
    console.log(data);
    buffer = new Buffer(data, "utf-8");
});


var app = express.createServer(express.logger());


app.get('/', function(request, response) {
    response.send(buffer.toString("utf-8", 0));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});