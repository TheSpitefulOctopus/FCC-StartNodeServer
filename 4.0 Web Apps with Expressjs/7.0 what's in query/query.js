var express = require('express');

var app = express();
app.get('/search', function(request, response) {
	var query = request.query;
	response.send(query);
});
app.listen(process.argv[2]);