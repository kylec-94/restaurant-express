//require packages

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//turn 'express' into an easier variable to handle

var app = express();

var PORT = 3000;

//Set up the server to handle data parsing 
app.use(bodyParser.urlencoded({ extended: false }));


app.use(bodyParser.json());




//Starts the server to begin listening
app.listen(PORT, function(){

	console.log("App listening on PORT" + PORT);
});