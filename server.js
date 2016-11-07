var express = require('express');

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// app.get('/', function(req, res){
// 	res.send('hello');
// })

app.use(function(req, res, next){
	console.log(req.headers['x-forwarded-proto'])
	if(req.headers['x-forwarded-proto'] === 'https'){
		res.redirect('http://' + req.hostname + req.url);
		
	} else {
		next();
	}
});

app.listen(PORT, function(){
	console.log('the magic happens on port: ' + PORT);
});