var express     = require('express');
    bodyParser  = require('body-parser'),
    cors        = require('cors');

var server      = express();
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(bodyParser.json());
    server.use(cors());

var mineria = require('./mineria/index.js');

server.get('/chaira', function(req, res){
	mineria.chaira.login(req.query.user, req.query.password, function(param1, param2, param3){
		console.log(param1);
		console.log(param2);
		console.log(param3);
		res.json("Todo bien");
	});
});


server.listen(7070, function(){
    console.log('Servidor corriendo');
});