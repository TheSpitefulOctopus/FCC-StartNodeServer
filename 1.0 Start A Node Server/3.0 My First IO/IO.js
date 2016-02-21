
var fs = require('fs');

var file = fs.readFileSync(process.argv[2]);
var file = file.toString();

var count = file.split('\n');

console.log(count.length -1);