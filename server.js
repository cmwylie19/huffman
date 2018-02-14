var express = require('express');
var app = new express();

app.use(express.static(__dirname + '/media'));
app.use(express.static(__dirname + '/media/js'));
app.use(express.static(__dirname + '/media/css'));


app.listen(3000);
