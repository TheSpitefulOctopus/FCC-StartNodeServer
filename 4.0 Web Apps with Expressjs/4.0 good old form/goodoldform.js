var express = require('express');
var bodyparser = require('body-parser');

var app = express();
app.post('/form', function(request, response) {
	var string = request.body.str;
	response.end(string.split('').reverse().join(''));
});
app.listen(process.argv[2]);