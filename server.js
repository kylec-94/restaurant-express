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


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/tables', function(req,res) {
	res.sendFile(path.join(__dirname, 'tables.html'));
});

app.get('/reservations', function(req,res){
	res.sendFile(path.join(__dirname, 'reservations.html'));
});



//Starts the server to begin listening
app.listen(PORT, function(){

	console.log("App listening on PORT" + PORT);
});