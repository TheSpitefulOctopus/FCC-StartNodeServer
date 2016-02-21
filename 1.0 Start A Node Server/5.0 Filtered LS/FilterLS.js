
var fs = require('fs');
var path = require('path');

var file = '';
var filedir = fs.readdir(process.argv[2], function (err, filenames) {
    if (err) {
        console.log('There was an error retrieving your data');
    } else {
        for (file in filenames) {
            if (path.extname(filenames[file]).substring(1) === process.argv[3]) {
                console.log(filenames[file]);
            }
        }
    }
});