var chaira = require('./chaira.js');
var google = require('./google.js');

module.exports.chaira = {
	login: chaira.loginChaira
};

module.exports.google = {
	buscar: google.buscar
};