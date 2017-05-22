var webdriverio = require('webdriverio');
var phantomjs = require('phantomjs-prebuilt');
var options = {
    host: "localhost",
    port: 4444,
    desiredCapabilities: { browserName: "chrome" }
};

var client = undefined;

module.exports.buscar = function(param, b, callback) {
    console.log('Buscando: ' + param);
    options.desiredCapabilities.browserName = (b)? b : 'chrome';
    client = webdriverio.remote(options);
    if (b == 'phantom') {
        phantomjs.run('--webdriver=4444').then(function(program) {
            goSearch(param, callback);
        });
    } else {
        goSearch(param, callback);
    }
};

function goSearch(param, callback) {
    client
        .init().catch(function(err) {
            console.log(err);
            console.log("Problema al ejecutar chromedriver");
        })
        .url('https://www.google.com.co')
        .setValue('*[name="q"]', param)
        .click('*[name="btnG"]')
        .then(function() {
            console.log("Buscando....");
        })
        .pause(2000)
        .elements('//h3[@class="r"]//a')
        .then(function(e) {
            //console.log(e);
            getUrlResult(e.value, 0, [], function(urls) {
                client.end();
                callback(urls);
            });
        })
}

function getUrlResult(array, i, save, callback) {
    if (i < array.length) {
        client.elementIdAttribute(array[i].ELEMENT, 'href')
            .then(function(d) {
                //console.log(d);
                save.push(d.value);
                getUrlResult(array, i + 1, save, callback);
            })
            .catch(function(err) {
                console.log(err);
            })
    } else {
        callback(save);
    }
}
