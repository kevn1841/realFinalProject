var express = require('express');
var bodyParser = require('body-parser');
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;
//Serve static content for the app from the "public" directory in the application directory.
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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:"application/vnd.api+json"}));
app.listen(PORT, function(){
	console.log("App listening on PORT " + PORT);
});
console.log(module.exports)