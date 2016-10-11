var express = require('express');
var bodyParser = require('body-parser');

var app = express();
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}))

var port = 3000;
app.listen(port);

console.log(module.exports)