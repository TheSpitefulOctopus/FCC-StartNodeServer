/*global require, console, process*/
(function () {
    'use strict';
    
    var bl = require('bl'), http = require('http');
    
    http.get(process.argv[2], function (response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                return console.log('There was an error: ', err);
            } else {
                console.log(data.length);
                console.log(data.toString());
            }
        }));
    });
    
}());