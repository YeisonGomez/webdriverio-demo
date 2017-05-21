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

module.exports.loginChaira = function(user, password, callback) {
    console.log(user);
    //phantomjs.run('--webdriver=4444').then(function(program) {
        client
            .init().catch(function(err){
                console.log(err);
                console.log("Problema al ejecutar chromedriver");
            })
            .url('https://chaira.udla.edu.co/Chaira/Logon.aspx')
            .setValue('#txt_usuario', user)
            .addValue('#txt_password', password)
            .click("#btn_ingresar").then(function() {
                console.log("Login....");
                validLogin(function(res) {
                    console.log(res);
                    callback(res, client, program);
                });
            });
    //});
};

//PROPIAS
var time = 0;
var validLogin = function(callback) {
    time++;
    console.log("Wait....");
    client.pause(2000)
        .getUrl().then(function(url) {
            if (url == "https://chaira.udla.edu.co/Chaira/Logon.aspx" && time < 10) {
                client.getAttribute('#txt_password', 'value').then(function(res) { //Usuario invalido
                    if (res === "") {
                        client.isExisting('//div[@class="sa-icon sa-warning pulseWarning"]').then(function(passwordInvalid) { //Contraseña invalida
                            if (passwordInvalid) {
                                callback("La contraseña es incorrecta");
                            } else {
                                callback("El usuario es incorrecto");
                            }
                        });
                    } else {
                        client.isExisting('//div[@class="sa-icon sa-warning pulseWarning"]').then(function(passwordInvalid) { //Contraseña invalida
                            if (passwordInvalid) {
                                callback("La contraseña es incorrecta");
                            } else {
                                return validLogin(callback);
                            }
                        });
                    }
                });
            } else if (time >= 10) {
                callback("La conexión con el servidor ha superado el tiempo de espera máximo.");
            } else {
                callback("user valid");
            }
        });
}
