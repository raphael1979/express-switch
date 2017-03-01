var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var fs = require('fs');
var datajson = require("data/crm.json");

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

app.use(express.static("public"));

app.get('/', function(req, res){
	response.sendFile(path.join(__dirname + "public/index.html"));
});

app.get('/formulaire', function(req, res) {
	response.sendFile(path.join(__dirname, 'public/formulaire.html'));
});

app.get('/data', function(req, res) {
	response.send(datajson);
});

app.listen(1337, function(){
	console.log('ca marche')
});





// write you're code here Good Luck