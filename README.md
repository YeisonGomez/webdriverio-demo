# Bot para la plataforma Chaira #

-  [Instalación](#instalación)
-  [Ejecución](#ejecución)
-  [Contribuir](#contribuir)

## Instalación #


```bash
$ git clone https://github.com/YeisonGomez/webdriverio-demo.git
$ cd webdriverio-demo
$ npm install
$ npm start
...
Servidor corriendo
```

Para el uso de Chrome ejecutar en otra pestaña de terminal:

```bash
$ ./chromedriver --url-base=/wd/hub --port=4444
```

Para el uso de PhantomJS instalar:

```bash
$ npm install -g phantomjs
```

Abrir el navegador web y acceder a la siguiente dirección:

 - http://localhost:7070/google?q=webdriverio&browser=phantom
 - http://localhost:7070/chaira?user=p.prueba&password=123&browser=chrome

El parametro **browser** es opcional, por defecto se ejecuta con Chrome.
Donde **p.prueba** es el nombre de usuario, y **123** es la contraseña correspondiente a la cuenta de [Chaira](https://chaira.udla.edu.co/Chaira/Logon.aspx).


# Contribuir #
Realiza un Fork de este proyecto y contribuye. **[git](http://rogerdudler.github.io/git-guide/index.es.html)**