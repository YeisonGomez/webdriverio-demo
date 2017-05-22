var webdriverio = require('webdriverio');
var phantomjs = require('phantomjs-prebuilt')
var options = {
    desiredCapabilities: {
        host: "localhost",
        port: 4444,
        desiredCapabilities: { browserName: "chrome" }
    }
};
var client = webdriverio.remote(options);

module.exports.buscar = function(param, callback) {
    console.log('Buscando: ' + param);
    //phantomjs.run('--webdriver=4444').then(function(program) {
    client
        .init().catch(function(err) {
            console.log(err);
            console.log("Problema al ejecutar chromedriver");
        })
        .url('https://www.google.com.co')
        .setValue('*[name="q"]','webdriverio')
    	.click('*[name="btnG"]')
    	.then(function() {
            console.log("Buscando....");
        })
    	.pause(1000)
        //.addValue('#txt_password', password)
    //});
};

//document.getElementsByName('q')[0].value = "HOLA"