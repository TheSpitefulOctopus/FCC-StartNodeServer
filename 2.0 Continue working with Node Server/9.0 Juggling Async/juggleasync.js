/*require, process, console*/
(function () {
    'use strict';
    var http = require('http');
    var bl = require('bl');

    var urls = [];
    var count = 0;

    for (var i = 2; i < process.argv.length; i++) {
        urls.push(process.argv[i]);
    }

    urls.forEach(data);

    function data(url, index) {
        http.get(url, function(response){
            var result = '';
           response.pipe(bl(function (err, data) {
                if (err) {
                    return console.log('There was an error: ', err);
                } else {
                    urls[index] = data.toString();
                    count++;
                }
                if(count === urls.length) {
                    for(var i = 0; i < urls.length; i++){
                        console.log(urls[i]);
                    }
                }
            }));
        });
    }
}());