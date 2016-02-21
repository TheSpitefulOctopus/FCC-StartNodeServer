var express = require('express');
var crypto = require('crypto');

var app = express();
app.put('/message/:id', function(request, response) {
	var id = request.params.id;
	var hash = crypto.createHash('sha1').update(new Date().toDateString() + id).digest('hex');
	response.end(hash);
});
app.liste(process.argv[2]);