/*global require, console, module*/
(function () {
    'use strict';
    
    var fs = require('fs'), path = require('path');
    
    module.exports = function (directory, filter, callback) {
        
        fs.readdir(directory, function (err, filenames) {
            if (err) {
                return console.log('There was an error: ', err);
            } else {
                filenames = filenames.filter(function (file) {
                    return path.extname(file) === '.' + filter;
                });
            }
            callback(null, filenames);
        });
    };
    
}());