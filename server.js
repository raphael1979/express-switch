var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var fs = require('fs');

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

app.use(express.static("public"));

app.get('/', function(req, res){
	response.sendFile(path.join(__dirname + "public/index.html"));
});


app.listen(1337, function(){
	console.log('ca marche')
})



// write you're code here Good Luck