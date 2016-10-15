var express = require('express');
var bodyParser = require('body-parser');
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.get('/form', function(req, res){
	res.render('form')
});
app.get('/actors-actresses', function(req, res){
	res.render('actorsactresses')
});
app.get('/roles', function(req, res){
	res.render('roles')
});
app.get('/create-role', function(req, res){
	res.render('createrole')
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:"application/vnd.api+json"}));
app.listen(PORT, function(){
	console.log("App listening on PORT " + PORT);
});
console.log(module.exports)