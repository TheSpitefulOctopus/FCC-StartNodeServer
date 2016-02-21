
var fs = require('fs');

var file = fs.readFile(process.argv[2], function(err, data) {
    if (err) {
        console.log('There was an error retrieving your data');
    } else {
        var count = data.toString().split('\n');
        console.log(count.length -1);
    }
});