var http = require('http');
var url = require('url');

http.createServer(function (request, response) {
	var urlObj = url.parse(request.url, true), pathname = urlObj.pathname, strtime = urlObj.query.iso, result;

	if(pathname === '/api/unixtime') {
		result = getUnixTimeStamp(strtime);
	} else if( pathname === '/api/parsetime') {
		result = getTimeObj(strtime);
	}

	if(result) {
		response.writeHead(200, {'Content-Type': 'application/json'});
		response.end(JSON.stringify(result));
	} else {
		response.writeHead(404);
		response.end();
	}
}).listen(process.argv[2]);

function getUnixTimeStamp(strtime) {
	return {
		unixtime: getTimestamp(strtime);
	};
}

function getTimestamp(strtime) {
	return Date.parse(strtime);
}

function getTimeObj(strtime) {
	var date = new Date(getTimestamp(strtime));
	return {
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds()
	};
}