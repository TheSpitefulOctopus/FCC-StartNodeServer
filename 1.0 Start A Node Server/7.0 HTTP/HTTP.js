/*global require, process, console*/
(function () {
    'use strict';
    
    var http = require('http');
    
    http.get(process.argv[2], function (response) {
        response.on('data', function (data) {
            return console.log(data.toString());
        });
    });
    
}());