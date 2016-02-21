var express = require('express');
var jade = require('jade');

var app = express();

app.set('view engine', 'jade');
app.get('/home', function(request, response) {
	response.render(process.argv[3], { date: new Date().toDateString() });
});
app.listen(process.argv[2]);