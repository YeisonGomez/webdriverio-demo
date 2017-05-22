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

## Ejecución #

Abrir el navegador web y acceder a la siguiente dirección:

#### `http://localhost:7070/google?q=webdriverio&browser=phantom`

 ##### Parametros

| Parametro                | Descripción
| ------------------------ | ---------------------------------------------------------------------------------------
| **q**                    | Parametro que se quiere buscar.
| **browser** *(opcional)* | Seleccionar el navegador donde se ejecutara (phantom, chrome).

##### Retorna

- Lista solo las URL's que el buscador de google devuelve

#### `http://localhost:7070/chaira?user=p.prueba&password=123&browser=chrome`

| Parametro                | Descripción
| ------------------------ | ---------------------------------------------------------------------------------------
| **user**                 | Usuario Chairá.
| **password**             | Contraseña Chairá.
| **browser** *(opcional)* | Seleccionar el navegador donde se ejecutara (phantom, chrome).

##### Retorna

- Un string donde verifica si el usuario es correcto.

# Contribuir #
Realiza un Fork de este proyecto y contribuye. **[git](http://rogerdudler.github.io/git-guide/index.es.html)**