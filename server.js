var express     = require('express');
    bodyParser  = require('body-parser'),
    cors        = require('cors');

var server      = express();
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(bodyParser.json());
    server.use(cors());

var mineria = require('./mineria/index.js');

server.get('/chaira', function(req, res){
	mineria.chaira.login(req.query.user, req.query.password, req.query.browser, function(param1){
		console.log(param1);
		res.json(param1);
	});
});

server.get('/google', function(req, res){
	mineria.google.buscar(req.query.q, req.query.browser, function(param1){
		console.log("Resultado");
		console.log(param1);
		res.json(param1);
	});
});


server.listen(7070, function(){
    console.log('Servidor corriendo');
});