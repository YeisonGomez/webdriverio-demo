var webdriverio = require('webdriverio');
var phantomjs = require('phantomjs-prebuilt');
var options = {
    host: "localhost",
    port: 4444,
    desiredCapabilities: { browserName: "chrome" }
};

var client = undefined;

module.exports.loginChaira = function(user, password, b, callback) {
    console.log(user);
    options.desiredCapabilities.browserName = (b)? b : 'chrome';
    client = webdriverio.remote(options);
    if (b == 'phantom') {
        phantomjs.run('--webdriver=4444').then(function(program) {
            goLogin(user, password, callback);
        });
    } else {
        goLogin(user, password, callback);
    }

};

function goLogin(user, password, callback) {
    client
        .init().catch(function(err) {
            console.log(err);
            console.log("Problema al ejecutar chromedriver");
        })
        .url('https://chaira.udla.edu.co/Chaira/Logon.aspx')
        .setValue('#txt_usuario', user)
        .addValue('#txt_password', password)
        .click("#btn_ingresar").then(function() {
            console.log("Login....");
            validLogin(function(res) {
                client.end();
                callback(res);
            });
        });
}

var time = 0;
var validLogin = function(callback) {
    time++;
    console.log("Esperando....");
    client.pause(1000)
        .getUrl()
        .then(function(url) {
            if (url == "https://chaira.udla.edu.co/Chaira/Logon.aspx" && time < 10) {
                client.getAttribute('#txt_password', 'value').then(function(res) { //Usuario invalido
                    client.isExisting('//div[@class="sa-icon sa-warning pulseWarning"]').then(function(passwordInvalid) { //Contraseña invalida
                        if (passwordInvalid) {
                            callback("La contraseña es incorrecta");
                        } else {
                            if (res === "") {
                                callback("El usuario es incorrecto");
                            } else {
                                return validLogin(callback);
                            }
                        }
                    });
                });
            } else if (time >= 10) {
                callback("La conexión con el servidor ha superado el tiempo de espera máximo.");
            } else {
                callback("Usuario Logeado");
            }
        });
}
