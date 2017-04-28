var express = require('express');
var app = express();
var PORT = 3000;
var middleware = require('./middleware.js');

app.use(middleware.logger);
//app.use(middleware.requireAuthentication);

// app.get('/', function (req, res) {
// 	res.send('hi express');
// });

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('this is about us');
})

app.use(express.static(__dirname + '/public'));

//console.log('directory is: ' + __dirname);

app.listen(PORT, function () {
	console.log('Express server started on: ' + PORT + '!');
});