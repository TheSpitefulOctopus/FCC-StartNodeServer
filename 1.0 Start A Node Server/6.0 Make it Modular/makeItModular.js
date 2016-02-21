/*global require, process, console*/
(function () {
    'use strict';
    var filterFunction = require('./myModule'), directory = process.argv[2], filter = process.argv[3];

    filterFunction(directory, filter, function (err, filenames) {
        if (err) {
            return console.log('There was an error: ', err);
        } else {
            filenames.forEach(function (file) {
                console.log(file);
            });
        }
    });
    
}());