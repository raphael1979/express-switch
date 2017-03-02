var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var fs = require('fs');
var datajson = require("./data/blog.json");

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

app.use(express.static("public"));

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.post('/post', function(req,res){
	fs.readFile(datajson,"utf8",function(err, data){
		if(err){
			console.log(err);
		}

		var dataparsed=JSON.parse(data);
		dataparsed.articles.push(req.body);
		var datastring=JSON.stringify(dataparsed, null, 2);
		fs.writeFile(datajson, datastring, function(err){
			if(err){
				console.log(err);
			}
		});

	});
	res.redirect('/');
});

app.get('/formulaire', function(req, res) {
	res.sendFile(path.join(__dirname, '/public/formulaire.html'));
});

app.get('/data', function(req, res) {
	res.send(datajson);
});

app.listen(1337, function(){
	console.log('ca marche')
});





// write you're code here Good Luck