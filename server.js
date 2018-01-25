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

var tables = [
	{
		name: 'test',
		phonenumber: '440-123-4567',
		email: 'test@test.com',
		unique: 'test1234'
	}
];
var waitlist = [
{
		name: 'testwait',
		phonenumber: '440-123-4567',
		email: 'test@test.com',
		unique: 'test1234wait'
	}
];

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/tables', function(req,res) {
	res.sendFile(path.join(__dirname, 'tables.html'));
});

app.get('/reserve', function(req,res){
	res.sendFile(path.join(__dirname, 'reservations.html'));
});

app.get('/API/tables', function(req,res){
// display tables reserv and waitlist as an array of JSONs
res.json(tables);
});

app.get('/API/waitlist', function(req,res){
// display tables reserv and waitlist as an array of JSONs
res.json(waitlist);
});

app.post('/API/add', function(req,res){
// add to tables array or waitlist array
// using body parser - req.body
//turn req/body to a usable variable
var reservation = req.body;

//if tables.length is equal to or greater than 5, push to waitlist array
if (tables.length >= 5){

waitlist.push(req.body);

}else{//if less than 5, push to tables array

	tables.push(req.body);
}
console.log(tables);
});

app.post('/API/clear', function(req,res){
// clear arrays and reset
	tables = [];
	waitlist = [];
});


//Starts the server to begin listening
app.listen(PORT, function(){

	console.log("App listening on PORT" + PORT);
});
