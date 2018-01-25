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

app.get('/table', function(req,res) {
	res.sendFile(path.join(__dirname, 'table.html'));
});

app.get('/reserve', function(req,res){
	res.sendFile(path.join(__dirname, 'reserve.html'));
});



//Starts the server to begin listening
app.listen(PORT, function(){

	console.log("App listening on PORT" + PORT);
});