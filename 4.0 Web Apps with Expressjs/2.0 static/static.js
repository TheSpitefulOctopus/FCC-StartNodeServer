var express = require('express');
var path = require('path');

app.use(express.static(process.argv[3]));
app.listen(process.argv[2]);