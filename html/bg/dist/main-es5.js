function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <nav class=\"nav nav-pills nav-fill\" style=\"margin-bottom: 1rem;\">\r\n  <li routerLinkActive=\"rutaActiva\"><a class=\"coso-btn\" routerLink=\"/ejemplo\">\r\n  Ejemplos</a></li>\r\n  <li routerLinkActive=\"rutaActiva\"><a class=\"coso-btn\" routerLink=\"/contacto\">Contacto</a></li>\r\n</nav>\r\n -->\r\n <!-- <h1>\r\n\t {{disagreed}}\r\n </h1> -->\r\n\r\n\r\n <!-- antes de 29/03 -->\r\n <div class=\"container-fluid\">\r\n   <div class=\"row\">\r\n     <div [ngClass]=\"{'col-9': toggle, 'col-12': !toggle}\" style=\"padding: 0px;min-height: 100vh;\">\r\n        <router-outlet></router-outlet>   \r\n     </div>\r\n     <button [ngClass]=\"{'oculto': toggle, 'btn-bitacora-open': !toggle}\" (click)=\"change()\"><img src=\"https://simuladormission.aden.org/tq/assets/img/btn-bitacora-open.png\" alt=\"\"></button>     \r\n     <div [ngClass]=\"{'old col-3 notepad': toggle, 'new': !toggle}\" class=\"old\">\r\n       <div class=\"row\" style=\"background: white;min-height: 45px;\">\r\n        <button class=\"btn-bitacora-close\" (click)=\"change()\"><img src=\"https://simuladormission.aden.org/tq/assets/img/btn-bitacora-close.png\" alt=\"\"></button>\r\n      </div>\r\n         <div class=\"row\"><div class=\"col-12 top-notepad\"></div></div>\r\n         <div class=\"row\"><div class=\"col-12\">\r\n           <iframe style=\"min-height: 100vh;overflow-x: hidden;\" src=\"https://docs.google.com/forms/d/e/1FAIpQLSdGkhNS9cyLT_1MJBhxtK372112YmKwBUKzDBbswwJZ7ydwjA/viewform?embedded=true\" width=\"100%\" height=\"300px\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\"><h2 style=\"color:white;padding-top:1rem;\">LA BITACORA SE ESTÁ CARGANDO...</h2></iframe>\r\n         </div></div>\r\n       </div>\r\n   </div>   \r\n </div>\r\n <!-- 29/03 -->\r\n <!-- <div class=\"container-fluid\">\r\n  <app-header></app-header>\r\n  <div class=\"row\">\r\n    <div class=\"col-9\" style=\"padding: 0px;\">\r\n      <router-outlet></router-outlet>   \r\n    </div>\r\n    <div class=\"col-3\" style=\"padding: 0px;background: #000000a6;\">\r\n      <iframe style=\"min-height: 100vh;border-left:1px solid #fff;\" src=\"https://docs.google.com/forms/d/e/1FAIpQLSdGkhNS9cyLT_1MJBhxtK372112YmKwBUKzDBbswwJZ7ydwjA/viewform?embedded=true\" width=\"100%\" height=\"300px\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\"><h2 style=\"color:white;padding-top:1rem;\">LA BITACORA SE ESTÁ CARGANDO...</h2></iframe>\r\n    </div>\r\n  </div>   \r\n</div> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/creatividad/creatividad.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/creatividad/creatividad.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCreatividadCreatividadComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n\t<app-header></app-header>\r\n<div class=\"row\">\t\r\n<div class=\"col-12 contenido\">\r\n<div class=\"row\">\r\n\t<div class=\"col-10 contenedor-consigna load-left2right-1\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col 10 progreso\"></div>\r\n\t\t</div>\r\n\t\t<div class=\"row segundo\">\r\n\t\t\t<div class=\"col-10\" style=\"margin-left: auto;margin-right:auto;\">\r\n\t\t\t\t<h3 class=\"daynumber\">DÍA {{daynumber}}</h3>\r\n\t\t\t\t<h3 class=\"titulo\">Creatividad</h3>\r\n\t\t\t\t<p class=\"texto-interno\">Una de las habilidades requeridas para formar parte de esta misión es la creatividad. Habilidad muy buscada en los lideres y que debe desarrollarse. Este es el momento de demostrar que están preparados para esta misión. La tarea es individual. Por favor completen de a una consigna.</p>\r\n\t\t\t\t<ol>\r\n                    <li class=\"texto-interno\">Cada uno de ustedes, integrantes de este equipo deberán escribir su nombre y apellido completo.</li>\r\n                    <li class=\"texto-interno\">Con las letras de su nombre y apellido deberán armar nuevas palabras intercambiandolas de lugar y sin agregar ninguna nueva letra.</li>\r\n                    <li class=\"texto-interno\">Ahora deberán subrayar la palabra más larga de las que escribieron, y la mas corta.</li>\r\n                    <li class=\"texto-interno\">Ahora subrayen una palabra más, la que les parezca más extraña de todas las que escribieron.</li>\r\n                    <li class=\"texto-interno\">Ahora deberán escribir una oración que tenga sentido y que incluya esas tres palabras.</li>\r\n                    <li class=\"texto-interno\">Ahora escriba una nueva oración que tenga sentido, que incluya a esas tres palabras y que no tenga relación con la frase anterior.</li>\r\n                    <li class=\"texto-interno\">Ahora comparta con uno de sus compañeros estas oraciónes y escuche las de él.</li>\r\n                    <li class=\"texto-interno\">Con la idea de sus oraciones y la idea de las de su compañero, tendrán 3 minutos para armar un cuento.</li>\r\n                    <li class=\"texto-interno\">Terminado el cuento leanselo a sus compañeros restantes. Y escuchen el de ellos.</li>\r\n                    <p class=\"texto-interno\">¡Vieron que la creatividad debe ser trabajada!</p>\r\n                    <li class=\"texto-interno\">Con la idea del cuento de ellos y la idea del cuento de ustedes, tienen 10 minutos para armar un poema. El mismo debe tener por lo menos 4 versos.</li>\r\n                    <li class=\"texto-interno\">Escriban el verso en la Bitácora, y en las respuestas.</li>\r\n                </ol>\r\n\t\t\t</div>\r\n            <div class=\"col-10 completar\">\r\n                <h4><strong>CONSIGNA:</strong> Escriban el verso en la Bitácora, y en las respuestas.</h4>\r\n                <textarea class=\"form-control\" cols=\"30\" rows=\"10\"></textarea>\t\t\t\t\t\r\n                         <br/><span style=\"color: rgb(95, 95, 95)\">* El botón se  habilitará una vez que hayas colocado el valor correcto.</span>\r\n                          <br/><span style=\"color: rgb(151, 36, 36)\">¡NO OLVIDES COMPLETAR TU BITÁCORA CON ESTE VALOR TAMBIÉN!</span>\r\n                <br/><button type=\"button\" routerLink=\"/chmoney3\" class=\"btn btn-primary btn-lg btn-block\">ACEPTAR</button>\r\n                      </div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n</div><!-- col-10 -->\r\n</div>\r\n<!-- <button (click)=\"sendMessageToParent(messageToSendC)\">Send to Parent</button> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/day1/day1.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/day1/day1.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDay1Day1ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n\t<app-header></app-header>\r\n<div class=\"row\">\t\r\n<div class=\"col-12 contenido\">\r\n<div class=\"row\">\r\n\t<div class=\"col-10 contenedor-consigna load-left2right-1\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col 10 progreso\"></div>\r\n\t\t</div>\r\n\t\t<div class=\"row segundo\">\r\n\t\t\t<div class=\"col-10\" style=\"margin-left: auto;margin-right:auto;\">\r\n\t\t\t\t<h3 class=\"daynumber\">DÍA {{daynumber}}</h3>\r\n\t\t\t\t<h3 class=\"titulo\">Encuentran una bolsa con 100.000 PESOS</h3>\r\n\t\t\t\t<p class=\"texto-interno\">Este dinero debería ser suficiente para poder atravesar todo el terreno. Pero quizás necesite otras\r\n\t\t\t\t\tmonedas. En caso de cambiar divisas trate de negociar de la mejor manera posible para guardar lo\r\n\t\t\t\t\tnecesario para cumplir la misión. Si otro equipo busca cotización pueden cambiar el dinero pero\r\n\t\t\t\t\trecuerden que se les va a pedir su rendición al finalizar la misión.</p>\r\n\t\t\t\t<p class=\"texto-interno\">Para ello deben buscar la mejor cotización en estos momentos en su comparativa con el dólar\r\n\t\t\t\t\testadounidense y colocar ese monto en la casilla de respuestas.</p>\r\n\t\t\t\t<p class=\"texto-interno\">El monto debe surgir de promediar las cotizaciones de diferentes casas de cambio mundial. Al colocar el\r\n\t\t\t\t\tmonto recuerde utilizar cuatro decimales. El monto debe ser exacto, pero de haber error lo sabrán al\r\n\t\t\t\t\tfinalizar la misión.</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-10 completar\">\r\n\t\t\t\t<h4><strong>CONSIGNA:</strong> Averigua el valor en dólares. Y luego completa el valor que averiguaste.</h4>\r\n\t\t\t\t<span style=\"color:black\">100.000 Pesos = </span>\r\n\t\t\t\t<input class=\"form-control\" placeholder=\"Escribe aquí...\" [(ngModel)]=\"value\" type=\"name\" name=\"valor\"><span style=\"color:black;\">Dólares</span>\r\n\t\t\t\t\t<br><button type=\"button\" [routerLink]=\"valor<value ? ['/r4dar'] : []\" [ngClass]=\"{'disabled': valor>value}\" name=\"\" id=\"\" class=\"btn btn-primary btn-lg btn-block\">ACEPTAR</button>\t\t\r\n\t\t\t\t\t<br/><span style=\"color: rgb(95, 95, 95)\">* El botón se  habilitará una vez que hayas colocado el valor correcto.</span>\r\n\t\t\t\t\t<br/><span style=\"color: rgb(151, 36, 36)\">¡NO OLVIDES COMPLETAR TU BITÁCORA CON ESTE VALOR TAMBIÉN!</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n</div><!-- col-10 -->\r\n</div>\r\n<!-- <button (click)=\"sendMessageToParent(messageToSendC)\">Send to Parent</button> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/day10/day10.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/day10/day10.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDay10Day10ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n\t<app-header></app-header>\r\n<div class=\"row\">\r\n\t<div class=\"col-12 contenido\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-10 contenedor-consigna load-left2right-1\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col 10 progreso\"></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row segundo\">\r\n\t\t\t\t<div class=\"col-10\" style=\"margin-left: auto;margin-right:auto;\">\r\n\t\t\t\t\t<h3 class=\"daynumber\">DÍA {{daynumber}}</h3>\r\n                    <h3 class=\"titulo\">Cambio de dinero</h3>\r\n                    <p class=\"texto-interno\">Es momento de utilizar el dinero encontrado. Pero debe ser canjeado por: <strong>COLONES</strong></p>\r\n\t\t\t\t\t<p class=\"texto-interno\">Es el momento de cambiar el dinero encontrado. Para ello el contador del equipo deberá tomar una fotografía del Código que figura en el ícono del Banco, y salir a la sala principal. Ahí deberá buscar entre los integrantes de los otros equipos a quien tenga la moneda que ustedes necesitan y leer el código con la aplicación descargada. Una vez obtenido la clave, deberá regresar a su grupo pequeño.</p>\r\n\t\t\t\t\t<p class=\"texto-interno\">Mientras el contador se acerca a la ciudad para conseguir cambiar el dinero, ustedes deberán pasar desapercibidos. Para ello les enviamos este crucigrama sobre liderazgo. Jueguen tranquilos hasta la llegada del contador. El equipo que más puntos reuna tendrá un premio especial. Por cada respuesta correcta el juego sumará puntajes. Por cada pista de letra solicitada se les descontará inmediatamente un punto. Por cada pista de palabra completa solicitada se les descontarán 10 puntos. Para pasar deben superar los 50 puntos y colocar el puntaje final junto con la clave que traiga el contador en las respuestas y en la bitácora.</p>\r\n\t\t\t\t\t<p>(Aguarden un momento mientras se carga)</p>\r\n\t\t\t\t\t<iframe width=\"795\" height=\"690\" frameborder=\"0\" src=\"https://es.educaplay.com/juego/5674352-adventurer_mission.html\"></iframe>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"col-10 completar\">\r\n\t\t\t\t\t<h4><strong>CONSIGNA:</strong> Busca el grupo que tenga la moneda seleccionada y pídele que te muestre el código que figura en su icono de \"banco\" en la parte superior de su menú. Además, debes anotar el puntaje obtenido en la bitácora.</h4>\r\n                    <input class=\"form-control\" placeholder=\"Escribe aquí...\" [(ngModel)]=\"value\" type=\"name\" name=\"valor\"> \r\n\t\t\t\t    <br/><span style=\"color: rgb(95, 95, 95)\">* El botón se  habilitará una vez que hayas colocado el valor correcto.</span>\r\n\t\t\t\t\t<br/><span style=\"color: rgb(151, 36, 36)\">¡NO OLVIDES COMPLETAR TU BITÁCORA CON ESTE VALOR TAMBIÉN!</span>\r\n\t\t\t\t   <br/><button type=\"button\" [routerLink]=\"valor==value ? ['/aldea'] : []\" [ngClass]=\"{'disabled': valor!=value}\" name=\"\" id=\"\" class=\"btn btn-primary btn-lg btn-block\">ACEPTAR</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t</div>\r\n</div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/day13/day13.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/day13/day13.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDay13Day13ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n\t<app-header></app-header>\r\n<div class=\"row\">\r\n\t<div class=\"col-12 contenido\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-10 contenedor-consigna load-left2right-1\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col 10 progreso\"></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row segundo\">\r\n\t\t\t\t<div class=\"col-10\" style=\"margin-left: auto;margin-right:auto;\">\r\n\t\t\t\t\t<h3 class=\"daynumber\">DÍA {{daynumber}}</h3>\r\n                    <h3 class=\"titulo\">Aldea</h3>\r\n\t\t\t\t\t<p class=\"texto-interno\">Han llegado a una aldea, habitada por nativos del lugar.\r\n\t\t\t\t\t\tLuego de pasar la noche allí, el chaman les plantea un enigma:\r\n\t\t\t\t\t\tLa edad de la madre del chaman más la edad de su hija menor suma en total 66 años.\r\n\t\t\t\t\t\tLa edad de la madre del chaman coincide con la edad invertida de la hija menor\r\n\t\t\t\t\t\tPara ser reconocida como hija del chaman de la aldea debes ser mayor de edad.\r\n\t\t\t\t\t\t¿Qué edad tienen ambas?</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-10 completar\">\r\n\t\t\t\t\t<h4><strong>CONSIGNA:</strong> Calcula e ingresa las edades:</h4>\t\t\t\t\r\n\t\t\t\t\t<span>Edad Madre:</span><input placeholder=\"Escribe aquí...\" class=\"form-control\" (input)=\"edad()\" [(ngModel)]=\"input1\" type=\"name\" name=\"valorM\">\r\n\t\t\t\t\t<span style=\"margin-left: 2rem;;\">Edad Hija:</span><input placeholder=\"Escribe aquí...\" class=\"form-control\" (input)=\"edad()\" [(ngModel)]=\"input2\" type=\"name\" name=\"valorH\"><br>\r\n\t\t\t\t\t\t<button style=\"margin-top:2rem;\" type=\"button\" [routerLink]=\"acertado ? ['/s4lv4j3'] : []\" [ngClass]=\"{'disabled': !acertado}\" name=\"\" id=\"\" class=\"btn btn-primary btn-lg btn-block\">ACEPTAR</button>\r\n\t\t\t\t\t<br/><span style=\"color: rgb(95, 95, 95)\">* El botón se  habilitará una vez que hayas colocado el valor correcto.</span>\r\n\t\t\t\t\t<br/><span style=\"color: rgb(151, 36, 36)\">¡NO OLVIDES COMPLETAR TU BITÁCORA CON ESTE VALOR TAMBIÉN!</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t</div>\r\n</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/day14/day14.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/day14/day14.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDay14Day14ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n\t<app-header></app-header>\r\n<div class=\"row\">\r\n\t<div class=\"col-12 contenido\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-10 contenedor-consigna load-left2right-1\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col 10 progreso\"></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row segundo\">\r\n\t\t\t\t<div class=\"col-10\" style=\"margin-left: auto;margin-right:auto;\">\r\n\t\t\t\t\t<h3 class=\"daynumber\">DÍA {{daynumber}}</h3>\r\n                    <h3 class=\"titulo\">ENIGMA</h3>\r\n\t\t\t\t\t<p class=\"texto-interno\">A lo largo del recorrido han ido respondiendo a las consignas presentadas.</p>\r\n\t\t\t\t\t<p class=\"texto-interno\">El equipo se encuentra en el lugar exacto en donde un dron piensa realizar disparos. La encrucijada es válida ya que ahí mismo se encuentra el CRIPTEX que contiene la clave final para dar a conocer los documentos que están buscando.</p>\r\n\t\t\t\t\t<p class=\"texto-interno\">Es momento de enviar la bitácora con sus datos completos y ocultarla.</p>\r\n\t\t\t\t\t<p class=\"texto-interno\">Solo resta abrir el Cerrojo que nos dará la clave.</p>\r\n\t\t\t\t\t<p class=\"texto-interno\">Tienen 15 minutos para poder hacerlo.</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-10 completar\">\r\n\t\t\t\t\t<!-- <span style=\"color: rgb(151, 36, 36)\">¡Puedes enviar tu bitacora!</span> -->\r\n\t\t\t\t\t<br/><button type=\"button\" routerLink=\"/day14a\" name=\"\" id=\"\" class=\"btn btn-primary btn-lg btn-block\">CONTINUAR</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t</div>\r\n</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/day14a/day14a.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/day14a/day14a.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDay14aDay14aComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n<video autoplay muted loop oncanplay=\"this.play()\" onloadedmetadata=\"this.muted = true\" id=\"myVideo\">\r\n\t<source src=\"./assets/videos/bg-inicio-loop.mp4\" type=\"video/mp4\">\r\n</video>\r\n<div class=\"row\">\r\n\t<div class=\"col-md-12 botones\">\r\n\t\t<button class=\"btn-play\" [routerLink]=\"['/day14b']\"><img src=\"./assets/img/control/btn-info.png\"></button>\r\n\t\t<button class=\"btn-play\" [routerLink]=\"['/day14c']\"><img src=\"./assets/img/control/btn-play.png\"></button>\r\n\t</div>\r\n</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/day14b/day14b.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/day14b/day14b.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDay14bDay14bComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n<video autoplay muted loop oncanplay=\"this.play()\" onloadedmetadata=\"this.muted = true\" id=\"myVideo\">\r\n\t<source src=\"./assets/videos/info-tutorial.mp4\" type=\"video/mp4\">\r\n</video>\r\n<div class=\"row\">\r\n\t<div class=\"col-md-6 contenido\">\r\n\t\t<h3 class=\"titulo\">TUTORIAL</h3>\r\n\t\t<p class=\"texto-interno\">Responde correctamente a las preguntas seleccionando entre las 3 opciones que se presentarán.</p>\r\n\t\t<p class=\"texto-interno\">Estás a muy poco de finalizar!</p>\r\n\t</div>\r\n\t<div class=\"col-md-12 botones\">\r\n\t\t<button class=\"btn-play\" [routerLink]=\"['/day14c']\"><img src=\"./assets/img/control/btn-play.png\"></button>\r\n\t\t<!-- <button class=\"btn-play\" [routerLink]=\"['/day14c0']\"><img src=\"./assets/img/control/btn-play.png\"></button> -->\r\n\t</div>\r\n</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/day14c/day14c.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/day14c/day14c.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDay14cDay14cComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n<video autoplay muted loop oncanplay=\"this.play()\" onloadedmetadata=\"this.muted = true\" id=\"myVideo\">\r\n\t<source src=\"./assets/videos/s1.mp4\" type=\"video/mp4\">\r\n</video>\r\n<div class=\"row\">\r\n\t<div class=\"col-md-6 entorno-pregunta\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-12\">\r\n\t\t\t<h4 class=\"titulo\">\r\n\t\t\t\tEquipo de trabajo: según Jon Katzenbach y Douglas Smith (1996), es:\r\n\t\t\t</h4> \r\n\t\t\t<hr style=\"width: 50%;text-align:center;margin-left:auto;margin-right:auto;\">\r\n\t\t\t<button class=\"opciones\" [routerLink]=\"['/day14']\"><p class=\"texto-interno\">Un número exacto de personas que entendiéndose y trabajando juntas duplican sus capacidades.</p></button>\t\r\n\t\t\t<button class=\"opciones\" [routerLink]=\"['/day14d']\"><p class=\"texto-interno\">Un pequeño número de personas con habilidades complementarias, comprometidas con un propósito, un conjunto de metas de desempeño y un enfoque común.</p></button>\r\n\t\t\t<button class=\"opciones\" [routerLink]=\"['/day14']\"><p class=\"texto-interno\">El conjunto de empleados de una organización que comparten tareas en común y tienen el mismo objetivo para alcanzar, anualmente.</p></button>\r\n\t\t</div>\r\n\t</div>\r\n\t</div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/day14c0/day14c0.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/day14c0/day14c0.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDay14c0Day14c0ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n<video autoplay muted oncanplay=\"this.play()\" onloadedmetadata=\"this.muted = true\" id=\"myVideo\" on-ended=\"videoFin()\">\r\n    <source src=\"./assets/videos/s0.mp4\" type=\"video/mp4\">\r\n</video>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/day14d/day14d.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/day14d/day14d.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDay14dDay14dComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n<video autoplay muted oncanplay=\"this.play()\" onloadedmetadata=\"this.muted = true\" id=\"myVideo\" on-ended=\"videoFin()\">\r\n\t<source src=\"./assets/videos/s1a.mp4\" type=\"video/mp4\">\r\n</video>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/day14e/day14e.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/day14e/day14e.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDay14eDay14eComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n<video autoplay muted oncanplay=\"this.play()\" onloadedmetadata=\"this.muted = true\" id=\"myVideo\" on-ended=\"videoFin()\">\r\n\t<source src=\"./assets/videos/s1b.mp4\" type=\"video/mp4\">\r\n</video>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/day14f/day14f.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/day14f/day14f.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDay14fDay14fComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n<video autoplay muted loop oncanplay=\"this.play()\" onloadedmetadata=\"this.muted = true\" id=\"myVideo\">\r\n\t<source src=\"./assets/videos/e1.mp4\" type=\"video/mp4\">\r\n</video>\r\n<div class=\"row\">\r\n\t<div class=\"col-md-6 entorno-pregunta\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-12\">\r\n\t\t\t<h4 class=\"titulo\">\r\n\t\t\t\tLos equipos funcionan de modo interdependiente y, por lo tanto, es imprescindible:\r\n\t\t\t</h4> \r\n\t\t\t<hr style=\"width: 50%;text-align:center;margin-left:auto;margin-right:auto;\">\r\n\t\t\t<button class=\"opciones\" [routerLink]=\"['/day14c']\"><p class=\"texto-interno\">Lograr que todos marchen al mismo tiempo y con capacidades similares en búsqueda de la mejor comunicación.</p></button>\t\r\n\t\t\t<button class=\"opciones\" [routerLink]=\"['/day14g']\"><p class=\"texto-interno\">Animar a sus miembros a superar su propio desempeño y crear momentos y espacios que les permitan realizarse personal y profesionalmente.</p></button>\t\r\n\t\t\t<button class=\"opciones\" [routerLink]=\"['/day14c']\"><p class=\"texto-interno\">Desarrollar esa interdependencia de la manera más útil para la organización y permitir que cada puesto sea ocupado por el mejor empleado.</p></button>\t\r\n\t\t</div>\r\n\t</div>\r\n\t</div>\r\n</div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/day14f0/day14f0.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/day14f0/day14f0.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDay14f0Day14f0ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n<video autoplay muted oncanplay=\"this.play()\" onloadedmetadata=\"this.muted = true\" id=\"myVideo\" on-ended=\"videoFin()\">\r\n    <source src=\"./assets/videos/e0.mp4\" type=\"video/mp4\">\r\n</video>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/day14g/day14g.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/day14g/day14g.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDay14gDay14gComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n<video autoplay muted oncanplay=\"this.play()\" onloadedmetadata=\"this.muted = true\" id=\"myVideo\" on-ended=\"videoFin()\">\r\n\t<source src=\"./assets/videos/e2.mp4\" type=\"video/mp4\">\r\n</video>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/day14h/day14h.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/day14h/day14h.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDay14hDay14hComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n<video autoplay muted oncanplay=\"this.play()\" onloadedmetadata=\"this.muted = true\" id=\"myVideo\" on-ended=\"videoFin()\">\r\n\t<source src=\"./assets/videos/e3.mp4\" type=\"video/mp4\">\r\n</video>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/day14i/day14i.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/day14i/day14i.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDay14iDay14iComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n<video autoplay muted loop oncanplay=\"this.play()\" onloadedmetadata=\"this.muted = true\" id=\"myVideo\">\r\n\t<source src=\"./assets/videos/l1.mp4\" type=\"video/mp4\">\r\n</video>\r\n<div class=\"row\">\r\n\t<div class=\"col-md-6 entorno-pregunta\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-12\">\r\n\t\t\t<h4 class=\"titulo\">\r\n\t\t\t\tEl desempeño de un equipo se relaciona íntimamente con los conocimientos y, por tal motivo, es de suma importancia hacer hincapié en:\r\n\t\t\t</h4> \r\n\t\t\t<hr style=\"width: 50%;text-align:center;margin-left:auto;margin-right:auto;\">\r\n\t\t\t<button class=\"opciones\" [routerLink]=\"['/day14j']\"><p class=\"texto-interno\">Cómo obtenerlos, mejorarlos y trasmitirlos. Los líderes que prestan atención a su propia conducción y escuchan a sus compañeros aprenden a desenvolverse mejor en su rol.</p></button>\t\r\n\t\t\t<button class=\"opciones\" [routerLink]=\"['/day14c']\"><p class=\"texto-interno\">La formación gradual, complementaria y específica de cada uno de los miembros del equipo de acuerdo con el rol específico de cada uno.</p></button>\t\r\n\t\t\t<button class=\"opciones\" [routerLink]=\"['/day14c']\"><p class=\"texto-interno\">La formación inicial y específica al rol que cada uno de los integrantes ocupe dentro del equipo con certificación probatoria sobre dicha formación.</p></button>\t\r\n\t\t</div>\r\n\t</div>\r\n\t</div>\r\n</div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/day14i0/day14i0.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/day14i0/day14i0.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDay14i0Day14i0ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n<video autoplay muted oncanplay=\"this.play()\" onloadedmetadata=\"this.muted = true\" id=\"myVideo\" on-ended=\"videoFin()\">\r\n    <source src=\"./assets/videos/l0.mp4\" type=\"video/mp4\">\r\n</video>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/day14j/day14j.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/day14j/day14j.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDay14jDay14jComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n<video autoplay muted oncanplay=\"this.play()\" onloadedmetadata=\"this.muted = true\" id=\"myVideo\" on-ended=\"videoFin()\">\r\n\t<source src=\"./assets/videos/l2.mp4\" type=\"video/mp4\">\r\n</video>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/day14k/day14k.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/day14k/day14k.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDay14kDay14kComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n<video autoplay muted oncanplay=\"this.play()\" onloadedmetadata=\"this.muted = true\" id=\"myVideo\" on-ended=\"videoFin()\">\r\n\t<source src=\"./assets/videos/l3.mp4\" type=\"video/mp4\">\r\n</video>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/day14l/day14l.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/day14l/day14l.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDay14lDay14lComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n<video autoplay muted loop oncanplay=\"this.play()\" onloadedmetadata=\"this.muted = true\" id=\"myVideo\">\r\n\t<source src=\"./assets/videos/v1.mp4\" type=\"video/mp4\">\r\n</video>\r\n<div class=\"row\">\r\n\t<div class=\"col-md-6 entorno-pregunta\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-12\">\r\n\t\t\t<h4 class=\"titulo\">\r\n\t\t\t\tDentro de un equipo de trabajo, se entiende por conflicto a:\r\n\t\t\t</h4> \r\n\t\t\t<hr style=\"width: 50%;text-align:center;margin-left:auto;margin-right:auto;\">\r\n\t\t\t<button class=\"opciones\" [routerLink]=\"['/day14m']\"><p class=\"texto-interno\">La manifestación de opiniones, posiciones, intereses y motivaciones que se contraponen o son excluyentes entre sí.</p></button>\t\r\n\t\t\t<button class=\"opciones\" [routerLink]=\"['/day14c']\"><p class=\"texto-interno\">La aparición asociada a un elemento fundamental de todo equipo: la existencia de roles complementarios e interdependientes y sus intereses.</p></button>\t\r\n\t\t\t<button class=\"opciones\" [routerLink]=\"['/day14c']\"><p class=\"texto-interno\">La oposición de fuerzas contrarias en busca del liderazgo dentro del equipo.</p></button>\r\n\t\t</div>\r\n\t</div>\r\n\t</div>\r\n</div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/day14l0/day14l0.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/day14l0/day14l0.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDay14l0Day14l0ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n<video autoplay muted oncanplay=\"this.play()\" onloadedmetadata=\"this.muted = true\" id=\"myVideo\" on-ended=\"videoFin()\">\r\n    <source src=\"./assets/videos/v0.mp4\" type=\"video/mp4\">\r\n</video>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/day14m/day14m.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/day14m/day14m.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDay14mDay14mComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n<video autoplay muted oncanplay=\"this.play()\" onloadedmetadata=\"this.muted = true\" id=\"myVideo\" on-ended=\"videoFin()\">\r\n\t<source src=\"./assets/videos/v2.mp4\" type=\"video/mp4\">\r\n</video>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/day14n/day14n.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/day14n/day14n.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDay14nDay14nComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n<video autoplay muted oncanplay=\"this.play()\" onloadedmetadata=\"this.muted = true\" id=\"myVideo\" on-ended=\"videoFin()\">\r\n\t<source src=\"./assets/videos/v3.mp4\" type=\"video/mp4\">\r\n</video>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/day14o/day14o.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/day14o/day14o.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDay14oDay14oComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n<video autoplay muted loop oncanplay=\"this.play()\" onloadedmetadata=\"this.muted = true\" id=\"myVideo\">\r\n\t<source src=\"./assets/videos/a1.mp4\" type=\"video/mp4\">\r\n</video>\r\n<div class=\"row\">\r\n\t<div class=\"col-md-6 entorno-pregunta\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-12\">\r\n\t\t\t<h4 class=\"titulo\">\r\n\t\t\t\tSegún Stephen Robbins y Timothy Judge (2009), los equipos virtuales son aquellos que:\r\n\t\t\t</h4> \r\n\t\t\t<hr style=\"width: 50%;text-align:center;margin-left:auto;margin-right:auto;\">\r\n\t\t\t<button class=\"opciones\" [routerLink]=\"['/day14c']\"><p class=\"texto-interno\">Se ubican en diferentes espacios de trabajo a la misma hora, o en diferentes horarios de trabajo en similar espacio.</p></button>\t\r\n\t\t\t<button class=\"opciones\" [routerLink]=\"['/day14c']\"><p class=\"texto-interno\">Ubicándose en diferentes espacios físicos mantienen una comunicación constante en tiempo real.</p></button>\t\r\n\t\t\t<button class=\"opciones\" [routerLink]=\"['/day14p']\"><p class=\"texto-interno\">Utilizan la tecnología para vincular a sus miembros, físicamente dispersos, con el fin de alcanzar una meta en común.</p></button>\t\r\n\t\t</div>\r\n\t</div>\r\n\t</div>\r\n</div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/day14o0/day14o0.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/day14o0/day14o0.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDay14o0Day14o0ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n<video autoplay muted oncanplay=\"this.play()\" onloadedmetadata=\"this.muted = true\" id=\"myVideo\" on-ended=\"videoFin()\">\r\n    <source src=\"./assets/videos/a0.mp4\" type=\"video/mp4\">\r\n</video>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/day14p/day14p.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/day14p/day14p.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDay14pDay14pComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n<video autoplay muted oncanplay=\"this.play()\" onloadedmetadata=\"this.muted = true\" id=\"myVideo\" on-ended=\"videoFin()\">\r\n\t<source src=\"./assets/videos/a2.mp4\" type=\"video/mp4\">\r\n</video>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/day14q/day14q.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/day14q/day14q.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDay14qDay14qComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n<video autoplay muted oncanplay=\"this.play()\" onloadedmetadata=\"this.muted = true\" id=\"myVideo\" on-ended=\"videoFin()\">\r\n\t<source src=\"./assets/videos/a3.mp4\" type=\"video/mp4\">\r\n</video>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/day14r/day14r.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/day14r/day14r.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDay14rDay14rComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n<video autoplay muted oncanplay=\"this.play()\" onloadedmetadata=\"this.muted = true\" id=\"myVideo\" on-ended=\"videoFin()\">\r\n\t<source src=\"./assets/videos/finalizado.mp4\" type=\"video/mp4\">\r\n</video>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/day3/day3.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/day3/day3.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDay3Day3ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n\t<app-header></app-header>\r\n<div class=\"row\">\r\n\t<div class=\"col-12 contenido\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-10 contenedor-consigna load-left2right-1\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col 10 progreso\"></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row segundo\">\r\n\t\t\t\t<div class=\"col-10\" style=\"margin-left: auto;margin-right:auto;\">\r\n\t\t\t\t\t<h3 class=\"daynumber\">DÍA {{daynumber}}</h3>\r\n\t\t\t\t\t<h3 class=\"titulo\">Nuestro Radar los ha perdido</h3>\r\n\t\t\t\t\t<p class=\"texto-interno\">Eso puede ser fatal para la misión.</p>\r\n\t\t\t\t\t<p class=\"texto-interno\">También para el equipo pero se lo considera daño colateral.</p>\r\n\t\t\t\t\t<p class=\"texto-interno\">Por favor si desean continuar en la misión, reestablezcan su ubicación por coordenadas y reingresenla al sistema.</p>\r\n                    <p class=\"texto-interno\">La última ubicación registrada fue: 8°09'21.0\"N 77°41'26.4\"W. Estamos seguros que alguien en el equipo encontrará la forma de ubicar el nombre de la ciudad en la que están y escribirla en el casillero. De haber error, el programa les dejará continuar la misión pero al finalizar la misma se les descontarán <strong>U$S 200 por persona</strong>.</p>\r\n                    <p class=\"texto-interno\">Tómense el tiempo necesario para asegurarse que ese es el nombre correcto de la ciudad que deberán colocar.</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-10 completar\">\r\n\t\t\t\t\t<h4><strong>CONSIGNA:</strong> Busca el nombre del lugar e ingrésalo a continuación.</h4>\r\n\t\t\t\t\t<input class=\"form-control\" (input)=\"upperCase($event.target.value)\" [(ngModel)]=\"value\" type=\"name\" name=\"valor\">\r\n\t\t\t\t    <br/><span style=\"color: rgb(95, 95, 95)\">* El botón se  habilitará una vez que hayas colocado el valor correcto.</span>\r\n\t\t\t\t\t  <br/><span style=\"color: rgb(151, 36, 36)\">¡NO OLVIDES COMPLETAR TU BITÁCORA CON ESTE VALOR TAMBIÉN!</span>\r\n\t\t\t\t    <br/><button type=\"button\" [routerLink]=\"acertado ? ['/estrategia'] : []\" [ngClass]=\"{'disabled': !acertado}\" name=\"\" id=\"\" class=\"btn btn-primary btn-lg btn-block\">ACEPTAR</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t</div>\r\n</div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/day4/day4.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/day4/day4.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDay4Day4ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n\t<app-header></app-header>\r\n<div class=\"row\">\r\n\t<div class=\"col-12 contenido\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-10 contenedor-consigna load-left2right-1\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col 10 progreso\"></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row segundo\">\r\n\t\t\t\t<div class=\"col-10\" style=\"margin-left: auto;margin-right:auto;\">\r\n\t\t\t\t\t<h3 class=\"daynumber\">DÍA {{daynumber}}</h3>\r\n\t\t\t\t\t<h3 class=\"titulo\">Montaña</h3>\r\n\t\t\t\t\t<p class=\"texto-interno\">Los vientos en la montaña donde se encuentran ahora, superan los 40 Kxh. La zona es prácticamente inaccesible y los cadáveres encontrados en el camino, dan cuenta de ello. No hay porteadores y se debe cargar 35 kgs de equipo y viveres por persona.</p>\r\n          <p class=\"texto-interno\">Hubo que esperar dos días debido al paso de drones que buscan nuestra ubicación.</p>\r\n          <p class=\"texto-interno\">Lo empinado de la montaña y la humedad que crea espacios resbaladizos, dificultan la escarpada.</p>\r\n          <p class=\"texto-interno\">Cada uno debe arrastrar el equipo amarrado al arnes de seguridad y el morral con la carga personal.</p>\r\n          <p class=\"texto-interno\">Planifiquen la mejor estrategia para transitar la zona. Tienen 15 minutos.</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-10 completar\">\r\n          <h4><strong>CONSIGNA:</strong> Escriban la estrategia con la que continuarán, no menos de 20 palabras.</h4>\r\n          <h3 style=\"color: #000;font-weight:bold;text-align: center;\">Nuestra estrategia:</h3>\r\n          <textarea class=\"form-control\" cols=\"30\" rows=\"10\"></textarea>\t\t\t\t\t\r\n\t\t\t\t   <br/><span style=\"color: rgb(95, 95, 95)\">* El botón se  habilitará una vez que hayas colocado el valor correcto.</span>\r\n\t\t\t\t\t<br/><span style=\"color: rgb(151, 36, 36)\">¡NO OLVIDES COMPLETAR TU BITÁCORA CON ESTE VALOR TAMBIÉN!</span>\r\n          <br/><button type=\"button\" routerLink=\"/cre4t1vidad\" class=\"btn btn-primary btn-lg btn-block\">ACEPTAR</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t</div>\r\n</div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/day7/day7.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/day7/day7.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDay7Day7ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n\t<app-header></app-header>\r\n<div class=\"row\">\r\n\t<div class=\"col-12 contenido\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-10 contenedor-consigna load-left2right-1\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col 10 progreso\"></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row segundo\">\r\n\t\t\t\t<div class=\"col-10\" style=\"margin-left: auto;margin-right:auto;\">\r\n\t\t\t\t\t<h3 class=\"daynumber\">DÍA {{daynumber}}</h3>\r\n\t\t\t\t\t<h3 class=\"titulo\">Nuestro Radar los ha perdido</h3>\r\n\t\t\t\t\t<p class=\"texto-interno\">No sabemos el nombre de la actual ciudad. Solo sabemos que su última localización fue 6°43'11.9\"N 75°54'31.4\"W y de ahí caminaron durante 1 hora 30 minutos por ruta normal y encontraron una división de caminos. Hasta ahí completaron 5,9 Kilómetros de recorrido y tomaron una senda hacia el noreste. Cerca de donde se encuentran puede haber un puente colgante.</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-10 completar\">\r\n\t\t\t\t\t<h4><strong>CONSIGNA:</strong> Busca el nombre del lugar e ingrésalo.</h4>\r\n\t\t\t\t\t<input class=\"form-control\" placeholder=\"Escribe aquí...\" (input)=\"upperCase($event.target.value)\" [(ngModel)]=\"value\" type=\"name\" name=\"valor\">\r\n\t\t\t\t   <br/><span style=\"color: rgb(95, 95, 95)\">* El botón se  habilitará una vez que hayas colocado el valor correcto.</span>\r\n\t\t\t\t\t<br/><span style=\"color: rgb(151, 36, 36)\">¡NO OLVIDES COMPLETAR TU BITÁCORA CON ESTE VALOR TAMBIÉN!</span>\r\n\t\t\t\t   <br/><button type=\"button\" [routerLink]=\"acertado ? ['/fuego'] : []\" [ngClass]=\"{'disabled': !acertado}\" name=\"\" id=\"\" class=\"btn btn-primary btn-lg btn-block\">ACEPTAR</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t</div>\r\n</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/day8/day8.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/day8/day8.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDay8Day8ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n\t<app-header></app-header>\r\n<div class=\"row\">\r\n\t<div class=\"col-12 contenido\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-10 contenedor-consigna load-left2right-1\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col 10 progreso\"></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row segundo\">\r\n\t\t\t\t<div class=\"col-10\" style=\"margin-left: auto;margin-right:auto;\">\r\n\t\t\t\t\t<h3 class=\"daynumber\">DÍA {{daynumber}}</h3>\r\n                    <h3 class=\"titulo\">¡Fuego!</h3>\r\n                    <p class=\"texto-interno\">¡¡La fogata de anoche pudo haber quedado encendida!!</p>\r\n\t\t\t\t\t<p class=\"texto-interno\">Un descuido así puede provocar que los misiles los ubiquen rapidamente.</p>\r\n\t\t\t\t\t<p class=\"texto-interno\">No pueden permitirse esos errores. De volver a ocurrir cortaremos contacto con ustedes y quedarán varados ahí.</p>\r\n\t\t\t\t\t<p class=\"texto-interno\">Deben solucionar esa situación. Decidan su actitud.</p>                    \r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-10 completar\">\r\n\t\t\t\t\t<h4><strong>CONSIGNA: </strong> Escojan una opción para continuar:</h4>\r\n\t\t\t\t\t<br/><span style=\"color: rgb(151, 36, 36)\">¡NO OLVIDES COMPLETAR TU BITÁCORA CON TU DECISIÓN!</span>\r\n\t\t\t\t\t <button type=\"button\" routerLink=\"/fuegoa\" name=\"\" id=\"\" class=\"btn btn-primary btn-lg btn-block\">1.Enviamos a alguien y perdemos un día. (En este caso deberán informar que su respuesta es esperar y no accionar hasta dentro de 10 minutos)</button>\r\n                    <button type=\"button\" routerLink=\"/selva\" name=\"\" id=\"\" class=\"btn btn-primary btn-lg btn-block\">2. Seguimos avanzando rápido para que no nos descubran (En este caso deberán informarlo y pasarán directamente salteando una consigna)</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t</div>\r\n</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/day8a/day8a.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/day8a/day8a.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDay8aDay8aComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n  <app-header></app-header>\r\n   <div class=\"row\">\r\n\t\t <div class=\"col-8 contenido\">\r\n\t\t\t<div class=\"row primero\">\r\n\t\t\t\t<h3>¡Fuego!</h3>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row segundo\">\r\n\t\t\t\t<div class=\"col-12\">\r\n\t\t\t\t\t<p>ELEGISTE ESPERAR!</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row margin-1\">\r\n\t\t\t\t<div class=\"col-12\">\r\n\t\t\t\t\t<hr style=\"width: 50%;text-align: center;\">\r\n\t\t\t\t\t<h4><strong>CONSIGNA: </strong>Aguarde 10 minutos para continuar</h4>\r\n\t\t\t\t\t<span style=\"margin-top:2rem;\">El botón aparecerá cuando el tiempo se cumpla.</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row margin-2\">\r\n\t\t\t\t<div class=\"col-12 completar btn-action\">\r\n\t\t\t\t\t\t<button type=\"button\" routerLink=\"/selva\" name=\"\" id=\"\" class=\"btn btn-primary btn-lg btn-block\">CONTINUAR</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t</div> \r\n\t\t </div>\r\n\t </div>\r\n\t \r\n\t\r\n\t\r\n</div>\r\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/encuentro/encuentro.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/encuentro/encuentro.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEncuentroEncuentroComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n\t<app-header></app-header>\r\n<div class=\"row\">\t\r\n<div class=\"col-12 contenido\">\r\n<div class=\"row\">\r\n\t<div class=\"col-10 contenedor-consigna load-left2right-1\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col 10 progreso\"></div>\r\n\t\t</div>\r\n\t\t<div class=\"row segundo\">\r\n\t\t\t<div class=\"col-10\" style=\"margin-left: auto;margin-right:auto;\">\r\n\t\t\t\t<h3 class=\"daynumber\">DÍA {{daynumber}}</h3>\r\n\t\t\t\t<h3 class=\"titulo\">Encuentro</h3>\r\n                <p class=\"texto-interno\">En medio de la selva y por medio de los binoculares alcanzan a ver un campamento con por lo menos tres personas. Al acercarse logran identificar a uno de ellos como integrante del servicio contrario quien tiene tomado como rehenes a dos personas. Una de ellas logran ver es una mujer que parece nativa del lugar y se encuentra en estado de embarazo avanzado. La otra persona, si bien tiene barba de varios días parece ser un colaborador de nuestra agencia desaparecido hace varios meses. Si bien ambos están maniatados, se encuentran al cuidado de una única persona por lo que puede ser fácil la liberación. El espía contrario se encuentra trabajando en su portatil tratando de fijar un punto para la evacuación. Vuestra misión cambia temporalmente.</p>\r\n                <p class=\"texto-interno\">Ustedes deberán</p>\r\n                <ol style=\"text-align: left;margin-left: 2rem;\">\r\n                    <li class=\"texto-interno\">Rescatar a nuestro colaborador.</li>\r\n                    <li class=\"texto-interno\">Detener al espía contrario.</li>\r\n                    <li class=\"texto-interno\">Poner a salvo a la mujer. </li>\r\n                </ol>\r\n                <p class=\"texto-interno\">Uno de ustedes se encuentra en un bote cerca de la posición. El bote tiene resistencia solo para trasladar 2 personas río abajo hasta el pueblo más cercano donde hay personal nuestro.</p>\r\n                <p class=\"texto-interno\">Consigna a resolver: Una vez sometido el agresor, a cuál de las personas subirán a la nave?</p>\r\n\t\t\t</div>\r\n            <div class=\"col-10 completar\">\r\n                <h4><strong>CONSIGNA:</strong> Escriban su respuesta en la Bitácora, y a continuación.</h4>\r\n                <textarea class=\"form-control\" cols=\"30\" rows=\"10\"></textarea>\t\t\t\t\t\r\n                         <br/><span style=\"color: rgb(95, 95, 95)\">* El botón se  habilitará una vez que hayas colocado el valor correcto.</span>\r\n                          <br/><span style=\"color: rgb(151, 36, 36)\">¡NO OLVIDES COMPLETAR TU BITÁCORA CON ESTE VALOR TAMBIÉN!</span>\r\n                <br/><button type=\"button\" routerLink=\"/s0p4\" class=\"btn btn-primary btn-lg btn-block\">ACEPTAR</button>\r\n                      </div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n</div><!-- col-10 -->\r\n</div>\r\n<!-- <button (click)=\"sendMessageToParent(messageToSendC)\">Send to Parent</button> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/fin4liz4d0/fin4liz4d0.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fin4liz4d0/fin4liz4d0.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFin4liz4d0Fin4liz4d0ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div class=\"container-fluid\">\r\n\t<div class=\"bg\"></div>\r\n\t<video autoplay muted loop oncanplay=\"this.play()\" onloadedmetadata=\"this.muted = true\" id=\"myVideo\">\r\n\t\t<source src=\"./assets/videos/final-loop.mp4\" type=\"video/mp4\">\r\n\t</video>\r\n</div> -->\r\n<div class=\"container-fluid\">\r\n\t<app-header></app-header>\r\n<div class=\"row\">\r\n\t<div class=\"col-12 contenido\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-10 contenedor-consigna load-left2right-1\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col 10 progreso\"></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row segundo\">\r\n\t\t\t\t<div class=\"col-10\" style=\"margin-left: auto;margin-right:auto;\">\r\n\t\t\t\t\t<h3 class=\"daynumber\">¡FELICITACIONES!</h3>\r\n\t\t\t\t\t<h3 class=\"titulo\" >Han finalizado el simulador correctamente.</h3>\r\n\t\t\t\t\t<video autoplay muted loop oncanplay=\"this.play()\" onloadedmetadata=\"this.muted = true\" id=\"myVideo\">\r\n\t\t\t\t\t\t<source src=\"./assets/videos/final-loop.mp4\" type=\"video/mp4\">\r\n\t\t\t\t\t</video>\r\n\t\t\t\t\t<p class=\"texto-interno\">Mientras esperan a su instructor, les agradeceríamos completar la siguiente encuesta:</p>\r\n\t\t\t\t\t<iframe src=\"https://docs.google.com/forms/d/e/1FAIpQLSdb2cXVPk9ASlJq9w2EOUz-qA9S_T8a_8ew7U4hZT4nPSCmdQ/viewform?embedded=true\" width=\"100%\" height=\"700\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\">Cargando…</iframe>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t</div>\r\n</div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row header load-top2bottom-1\" style=\"padding-top: 0px;color:#000\">\r\n    <div class=\"col-3\">\r\n       <h3 style=\"padding-top:0.5rem;\">{{nombregrupo}}</h3>\r\n    </div>\r\n    <div class=\"col-6 botonera-principal\">\r\n       <!--button class=\"btn-nav hvr-float\"> \r\n           <img class=\"calendar-bg\" src=\"./assets/img/calendar.png\" alt=\"ADEN\">\r\n           <h3>{{childData}}</h3>\r\n           <h3>LA FUNCION DICE {{message}}</h3>\r\n           <span style=\"padding: 1rem; color:hotpink;\" (messageEvent)=\"receiveMessage($event)\">{{message}}</span>\r\n       </button-->\r\n       <!-- <button class=\"btn-nav hvr-float\" (click)=\"zappar.show()\"><img src=\"./assets/img/btn-zappar.png\"></button>\r\n       <button class=\"btn-nav hvr-float\" (click)=\"bank.show()\"><img src=\"./assets/img/btn-bank.png\"></button>\r\n       <button class=\"btn-nav hvr-float\" (click)=\"panic.show()\"><img src=\"./assets/img/btn-panic.png\"></button>\r\n       <a href=\"https://forms.gle/CpmCYj6HYCvmJWJR6\" target=\"_blank\"><button class=\"btn-nav hvr-float\"><img src=\"./assets/img/btn-bitacora.png\"></button></a>\r\n       <button class=\"btn-nav hvr-float\" (click)=\"mail.show()\"><img src=\"./assets/img/btn-mail.png\"></button>\r\n       <button class=\"btn-nav hvr-float\" (click)=\"info.show()\"><img src=\"./assets/img/btn-pregunta.png\"></button> -->\r\n       <div class=\"row\">\r\n          <div class=\"col\">\r\n             <button class=\"btn-nav hvr-float\" (click)=\"zappar.show()\"><img src=\"./assets/img/btn-zappar.png\"></button>\r\n          </div>\r\n          <div class=\"col\">\r\n             <button class=\"btn-nav hvr-float\" (click)=\"bank.show()\"><img src=\"./assets/img/btn-bank.png\"></button>\r\n          </div>\r\n          <div class=\"col\">\r\n             <button class=\"btn-nav hvr-float\" (click)=\"panic.show()\"><img src=\"./assets/img/btn-panic.png\"></button>\r\n          </div>\r\n          <div class=\"col\">\r\n             <button class=\"btn-nav hvr-float\" (click)=\"mail.show()\"><img src=\"./assets/img/btn-mail.png\"></button>\r\n          </div>\r\n          <div class=\"col\">\r\n             <button class=\"btn-nav hvr-float\" (click)=\"info.show()\"><img src=\"./assets/img/btn-pregunta.png\"></button>\r\n          </div>\r\n       </div>\r\n    </div>\r\n    <div class=\"col-3 marca\" style=\"padding-top:0.5rem;\">\r\n       <h5>{{nombresimulador}}</h5>\r\n       <img src=\"./assets/img/logo-aden.png\" alt=\"ADEN\">\r\n    </div>\r\n</div>\r\n<!-- ZAPPAR -->\r\n<div bsModal #zappar=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\"\r\nrole=\"dialog\" aria-labelledby=\"dialog-sizes-name1\">\r\n<div class=\"modal-dialog modal-lg\">\r\n<div class=\"modal-content\">\r\n<div class=\"modal-header\">\r\n<h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">ZAPPAR</h4>\r\n<button type=\"button\" class=\"close pull-right\" (click)=\"zappar.hide()\" aria-label=\"Close\">\r\n <span aria-hidden=\"true\">&times;</span>\r\n</button>\r\n</div>\r\n<div class=\"modal-body\">\r\n<img src=\"assets/img/zappar.jpg\" alt=\"Zappar\">\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n<!-- BANCO  -->\r\n<div bsModal #bank=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\"\r\nrole=\"dialog\" aria-labelledby=\"dialog-sizes-name1\">\r\n<div class=\"modal-dialog modal-lg\">\r\n<div class=\"modal-content\">\r\n<div class=\"modal-header\">\r\n<h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">BANCO</h4>\r\n<button type=\"button\" class=\"close pull-right\" (click)=\"bank.hide()\" aria-label=\"Close\">\r\n <span aria-hidden=\"true\">&times;</span>\r\n</button>\r\n</div>\r\n<div class=\"modal-body\">\r\n <span>El siguiente código le permitirá avanzar a otros equipos y te solicitarán escanearlo. Puedes elegir no colaborar, pero ten en cuenta: tú también podrías necesitar del banco de otro grupo en algún momento.</span>\r\n <span>El contador debe tener una foto de este código para cuando deba interambiar información con los contadores de otros equipos.</span>\r\n <img src=\"assets/img/bank.jpg\" alt=\"Zappar\">\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n<!-- PANIC  -->\r\n<div bsModal #panic=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\"\r\nrole=\"dialog\" aria-labelledby=\"dialog-sizes-name1\">\r\n<div class=\"modal-dialog modal-lg\">\r\n<div class=\"modal-content\">\r\n<div class=\"modal-header\">\r\n<h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">¡BOTÓN DE PÁNICO!</h4>\r\n<button type=\"button\" class=\"close pull-right\" (click)=\"panic.hide()\" aria-label=\"Close\">\r\n <span aria-hidden=\"true\">&times;</span>\r\n</button>\r\n</div>\r\n<div class=\"modal-body\">\r\n <span>Si necesitas ayuda, puedes volver a la sala principal con tu instructor.</span>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n<!-- MAIL  -->\r\n<div bsModal #mail=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\"\r\nrole=\"dialog\" aria-labelledby=\"dialog-sizes-name1\">\r\n<div class=\"modal-dialog modal-lg\">\r\n<div class=\"modal-content\">\r\n<div class=\"modal-header\">\r\n<h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">CONTACTO CON EMBAJADA</h4>\r\n<button type=\"button\" class=\"close pull-right\" (click)=\"mail.hide()\" aria-label=\"Close\">\r\n <span aria-hidden=\"true\">&times;</span>\r\n</button>\r\n</div>\r\n<div class=\"modal-body\">\r\n <span>No pierdas este mail, ya que en su momento deberás escribirle a la Embajada!</span><br>\r\n <i class=\"fas fa-mail-bulk\" style=\"color:black\"></i> <span>adventurermission@aden.org</span>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n<!-- INFO  -->\r\n<div bsModal #info=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\"\r\nrole=\"dialog\" aria-labelledby=\"dialog-sizes-name1\">\r\n<div class=\"modal-dialog modal-lg\">\r\n<div class=\"modal-content\">\r\n<div class=\"modal-header\">\r\n<h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">INFORMACIÓN</h4>\r\n<button type=\"button\" class=\"close pull-right\" (click)=\"info.hide()\" aria-label=\"Close\">\r\n <span aria-hidden=\"true\">&times;</span>\r\n</button>\r\n</div>\r\n<div class=\"modal-body\">\r\n<div class=\"col-12\">\r\n   <ul>\r\n   <li><span class=\"texto-interno\">No se precipiten en las decisiones, escuchen todas las opiniones, revean antes de enviar.</span></li>\r\n   <li><span class=\"texto-interno\">La respuesta solicitada, y vuelvanse a plantear la posibilidad de estar errados.</span></li>\r\n   <li><span class=\"texto-interno\">No corremos contra el tiempo. REPETIMOS: No es una carrera.</span></li>\r\n</ul>  \r\n<p class=\"texto-interno\">Para lograr completar la misión deben trabajar en equipo, obteniendo lo mejor de cada uno y sumado al resto de los integrantes. Esperamos de ustedes lealtad, trabajo en equipo y entrega a la causa.</p>\r\n<p class=\"texto-interno\">Si quieren leer la información inicial, lo pueden hacer desde el siguiente botón:</p>\r\n<a target=\"_blank\" class=\"btn-primary\" href=\"https://simuladormission.aden.org\">INFORMACIÓN INICIAL</a>\r\n</div> \r\n</div>\r\n</div>\r\n</div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/inicio/inicio.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inicio/inicio.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInicioInicioComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n   <div class=\"row\">\r\n       <div class=\"col-12\" style=\"text-align: center;color:white;margin-top:2rem;\">\r\n        <img style=\"margin-top:3rem\" src=\"assets/img/logo-aden.png\" alt=\"\">\r\n        <br/>\r\n        <br/>\r\n           <h2>¡BIENVENIDOS!</h2>\r\n           <h3>ADVENTURER MISSION</h3>\r\n           <h1 class=\"equipo-inicio\" style=\"border-top: 2px solid #ffffffc4;\">EQUIPO {{nombregrupo}}</h1><br/>\r\n       </div>\r\n   </div>\r\n   <div class=\"row\" style=\"text-align: center;margin-top:3rem;bottom:0\">\r\n    <div class=\"col-8\" style=\"padding: 1rem;margin-left: auto;margin-right: auto;\">\r\n        <p>Inicien la bitácora, completando los datos iniciales antes de comenzar la partida.</p><br>\r\n        <p>A lo largo del juego tendrán que completar su bitácora para poder garantizar su participación.</p>\r\n        <p>Lleven la bitácora a la par de lo días según vayan pasando, ya que deberán completarla según el día en que se encuentren.</p>\r\n        <button class=\"btn-ready\" [routerLink]=\"['/dinero3']\" >\r\n            <h4>¡ESTAMOS LISTOS!</h4>\r\n        </button>\r\n    </div>\r\n   </div>\r\n\r\n   </div>\r\n   ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/salvaje/salvaje.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/salvaje/salvaje.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSalvajeSalvajeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n\t<app-header></app-header>\r\n<div class=\"row\">\t\r\n<div class=\"col-12 contenido\">\r\n<div class=\"row\">\r\n\t<div class=\"col-10 contenedor-consigna load-left2right-1\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col 10 progreso\"></div>\r\n\t\t</div>\r\n\t\t<div class=\"row segundo\">\r\n\t\t\t<div class=\"col-10\" style=\"margin-left: auto;margin-right:auto;\">\r\n\t\t\t\t<h3 class=\"daynumber\">DÍA {{daynumber}}</h3>\r\n\t\t\t\t<h3 class=\"titulo\">Creencias</h3>\r\n\t\t\t\t<p class=\"texto-interno\">Se encuentran transitando una zona cultural y socialmente prohibida. Esto es zonas de reserva en las cuales no se pueden realizar actividades de caza, pesca, recolección, siembra, talas de árboles, no encender fuego, pues son considerados lugares habitados por los creadores tal como por ejemplo, cementerios, rios, montañas, lagos, lagunas, quebradas y manglares. Consigna: Evaluen las alternativas con el menor costo, menor tiempo y menor impacto en el área. La decisión dependerá de la información disponible y la orientación al riesgo que tenga el equipo.</p>\r\n\t\t\t</div>\r\n            <div class=\"col-10 completar\">\r\n                <h4><strong>CONSIGNA:</strong> Escriban su respuesta en la Bitácora, y en las respuestas.</h4>\r\n                <textarea class=\"form-control\" cols=\"30\" rows=\"10\"></textarea>\t\t\t\t\t\r\n                         <br/><span style=\"color: rgb(95, 95, 95)\">* El botón se  habilitará una vez que hayas colocado el valor correcto.</span>\r\n                          <br/><span style=\"color: rgb(151, 36, 36)\">¡NO OLVIDES COMPLETAR TU BITÁCORA CON ESTE VALOR TAMBIÉN!</span>\r\n                <br/><button type=\"button\" routerLink=\"/3ncuentr0\" class=\"btn btn-primary btn-lg btn-block\">ACEPTAR</button>\r\n                      </div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n</div><!-- col-10 -->\r\n</div>\r\n<!-- <button (click)=\"sendMessageToParent(messageToSendC)\">Send to Parent</button> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sopa/sopa.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sopa/sopa.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSopaSopaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n\t<app-header></app-header>\r\n<div class=\"row\">\t\r\n<div class=\"col-12 contenido\">\r\n<div class=\"row\">\r\n\t<div class=\"col-10 contenedor-consigna load-left2right-1\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col 10 progreso\"></div>\r\n\t\t</div>\r\n\t\t<div class=\"row segundo\">\r\n\t\t\t<div class=\"col-10\" style=\"margin-left: auto;margin-right:auto;\">\r\n\t\t\t\t<h3 class=\"daynumber\">DÍA {{daynumber}}</h3>\r\n\t\t\t\t<h3 class=\"titulo\">Sopa de Letras</h3>\r\n\t\t\t\t<p class=\"texto-interno\">Venimos transitando por senderos complicados y tomando decisiones importantes. Que buen momento para un mensaje oculto. Debajo encontrarán una sopa de letras. Ahí escondidas encontrarán 15 palabras relacionadas al liderazgo. Uno de ustedes puede ser bueno para este tipo de juegos.</p>\r\n\t\t\t\t<p class=\"texto-interno\">Búsquenlas, encuentrenlas y escriban las iniciales de las 15 palabras halladas en orden alfabético el espacio de respuestas. En la bitácora deberán escribir las 15 palabras.</p>\r\n\t\t\t\t<p class=\"texto-interno\">Tiene 7 minutos a partir del momento de abrir el juego.</p>\r\n\t\t\t\t<p>(Aguarden un momento mientras se carga)</p>\r\n\t\t\t\t<iframe width=\"795\" height=\"690\" frameborder=\"0\" src=\"https://es.educaplay.com/juego/5674022-sopas.html\"></iframe>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-10 completar\">\r\n\t\t\t\t<h4><strong>CONSIGNA:</strong> Completa con todas las iniciales de las palabras encontradas en orden alfabético.</h4>\r\n\t\t\t\t<input class=\"form-control\" (input)=\"upperCase($event.target.value)\" [(ngModel)]=\"value\" type=\"name\" name=\"valor\">\r\n\t\t\t\t    <br/><span style=\"color: rgb(95, 95, 95)\">* El botón se  habilitará una vez que hayas colocado el valor correcto.</span>\r\n\t\t\t\t\t  <br/><span style=\"color: rgb(151, 36, 36)\">¡NO OLVIDES COMPLETAR TU BITÁCORA CON ESTE VALOR TAMBIÉN!</span>\r\n\t\t\t\t    <br/><button type=\"button\" [routerLink]=\"acertado ? ['/rad4r'] : []\" [ngClass]=\"{'disabled': !acertado}\" name=\"\" id=\"\" class=\"btn btn-primary btn-lg btn-block\">ACEPTAR</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./inicio/inicio.component */
    "./src/app/inicio/inicio.component.ts");
    /* harmony import */


    var _day1_day1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./day1/day1.component */
    "./src/app/day1/day1.component.ts");
    /* harmony import */


    var _day3_day3_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./day3/day3.component */
    "./src/app/day3/day3.component.ts");
    /* harmony import */


    var _day4_day4_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./day4/day4.component */
    "./src/app/day4/day4.component.ts");
    /* harmony import */


    var _day7_day7_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./day7/day7.component */
    "./src/app/day7/day7.component.ts");
    /* harmony import */


    var _day8_day8_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./day8/day8.component */
    "./src/app/day8/day8.component.ts");
    /* harmony import */


    var _day8a_day8a_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./day8a/day8a.component */
    "./src/app/day8a/day8a.component.ts");
    /* harmony import */


    var _day10_day10_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./day10/day10.component */
    "./src/app/day10/day10.component.ts");
    /* harmony import */


    var _day13_day13_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./day13/day13.component */
    "./src/app/day13/day13.component.ts");
    /* harmony import */


    var _day14_day14_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./day14/day14.component */
    "./src/app/day14/day14.component.ts");
    /* harmony import */


    var _day14a_day14a_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./day14a/day14a.component */
    "./src/app/day14a/day14a.component.ts");
    /* harmony import */


    var _day14b_day14b_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./day14b/day14b.component */
    "./src/app/day14b/day14b.component.ts");
    /* harmony import */


    var _day14c_day14c_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./day14c/day14c.component */
    "./src/app/day14c/day14c.component.ts");
    /* harmony import */


    var _day14d_day14d_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./day14d/day14d.component */
    "./src/app/day14d/day14d.component.ts");
    /* harmony import */


    var _day14e_day14e_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./day14e/day14e.component */
    "./src/app/day14e/day14e.component.ts");
    /* harmony import */


    var _day14f_day14f_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./day14f/day14f.component */
    "./src/app/day14f/day14f.component.ts");
    /* harmony import */


    var _day14g_day14g_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./day14g/day14g.component */
    "./src/app/day14g/day14g.component.ts");
    /* harmony import */


    var _day14h_day14h_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./day14h/day14h.component */
    "./src/app/day14h/day14h.component.ts");
    /* harmony import */


    var _day14i_day14i_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./day14i/day14i.component */
    "./src/app/day14i/day14i.component.ts");
    /* harmony import */


    var _day14j_day14j_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./day14j/day14j.component */
    "./src/app/day14j/day14j.component.ts");
    /* harmony import */


    var _day14k_day14k_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./day14k/day14k.component */
    "./src/app/day14k/day14k.component.ts");
    /* harmony import */


    var _day14l_day14l_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./day14l/day14l.component */
    "./src/app/day14l/day14l.component.ts");
    /* harmony import */


    var _day14m_day14m_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./day14m/day14m.component */
    "./src/app/day14m/day14m.component.ts");
    /* harmony import */


    var _day14n_day14n_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./day14n/day14n.component */
    "./src/app/day14n/day14n.component.ts");
    /* harmony import */


    var _day14o_day14o_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./day14o/day14o.component */
    "./src/app/day14o/day14o.component.ts");
    /* harmony import */


    var _day14p_day14p_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./day14p/day14p.component */
    "./src/app/day14p/day14p.component.ts");
    /* harmony import */


    var _day14q_day14q_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./day14q/day14q.component */
    "./src/app/day14q/day14q.component.ts");
    /* harmony import */


    var _day14r_day14r_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./day14r/day14r.component */
    "./src/app/day14r/day14r.component.ts");
    /* harmony import */


    var _day14c0_day14c0_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./day14c0/day14c0.component */
    "./src/app/day14c0/day14c0.component.ts");
    /* harmony import */


    var _day14f0_day14f0_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./day14f0/day14f0.component */
    "./src/app/day14f0/day14f0.component.ts");
    /* harmony import */


    var _day14i0_day14i0_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./day14i0/day14i0.component */
    "./src/app/day14i0/day14i0.component.ts");
    /* harmony import */


    var _day14l0_day14l0_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./day14l0/day14l0.component */
    "./src/app/day14l0/day14l0.component.ts");
    /* harmony import */


    var _day14o0_day14o0_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./day14o0/day14o0.component */
    "./src/app/day14o0/day14o0.component.ts");
    /* harmony import */


    var _fin4liz4d0_fin4liz4d0_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./fin4liz4d0/fin4liz4d0.component */
    "./src/app/fin4liz4d0/fin4liz4d0.component.ts");
    /* harmony import */


    var _creatividad_creatividad_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./creatividad/creatividad.component */
    "./src/app/creatividad/creatividad.component.ts");
    /* harmony import */


    var _encuentro_encuentro_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./encuentro/encuentro.component */
    "./src/app/encuentro/encuentro.component.ts");
    /* harmony import */


    var _salvaje_salvaje_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./salvaje/salvaje.component */
    "./src/app/salvaje/salvaje.component.ts");
    /* harmony import */


    var _sopa_sopa_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./sopa/sopa.component */
    "./src/app/sopa/sopa.component.ts");

    var routes = [{
      path: '',
      pathMatch: 'full',
      redirectTo: '/inicio'
    }, {
      path: 'inicio',
      component: _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__["InicioComponent"]
    }, {
      path: 'dinero3',
      component: _day1_day1_component__WEBPACK_IMPORTED_MODULE_4__["Day1Component"]
    }, {
      path: 'r4dar',
      component: _day3_day3_component__WEBPACK_IMPORTED_MODULE_5__["Day3Component"]
    }, {
      path: 'estrategia',
      component: _day4_day4_component__WEBPACK_IMPORTED_MODULE_6__["Day4Component"]
    }, {
      path: 'rad4r',
      component: _day7_day7_component__WEBPACK_IMPORTED_MODULE_7__["Day7Component"]
    }, {
      path: 'fuego',
      component: _day8_day8_component__WEBPACK_IMPORTED_MODULE_8__["Day8Component"]
    }, {
      path: 'fuegoa',
      component: _day8a_day8a_component__WEBPACK_IMPORTED_MODULE_9__["Day8aComponent"]
    }, {
      path: 'chmoney3',
      component: _day10_day10_component__WEBPACK_IMPORTED_MODULE_10__["Day10Component"]
    }, {
      path: 'aldea',
      component: _day13_day13_component__WEBPACK_IMPORTED_MODULE_11__["Day13Component"]
    }, {
      path: 'selva',
      component: _day14_day14_component__WEBPACK_IMPORTED_MODULE_12__["Day14Component"]
    }, {
      path: 'day14a',
      component: _day14a_day14a_component__WEBPACK_IMPORTED_MODULE_13__["Day14aComponent"]
    }, {
      path: 'day14b',
      component: _day14b_day14b_component__WEBPACK_IMPORTED_MODULE_14__["Day14bComponent"]
    }, {
      path: 'day14c',
      component: _day14c_day14c_component__WEBPACK_IMPORTED_MODULE_15__["Day14cComponent"]
    }, {
      path: 'day14d',
      component: _day14d_day14d_component__WEBPACK_IMPORTED_MODULE_16__["Day14dComponent"]
    }, {
      path: 'day14e',
      component: _day14e_day14e_component__WEBPACK_IMPORTED_MODULE_17__["Day14eComponent"]
    }, {
      path: 'day14f',
      component: _day14f_day14f_component__WEBPACK_IMPORTED_MODULE_18__["Day14fComponent"]
    }, {
      path: 'day14g',
      component: _day14g_day14g_component__WEBPACK_IMPORTED_MODULE_19__["Day14gComponent"]
    }, {
      path: 'day14h',
      component: _day14h_day14h_component__WEBPACK_IMPORTED_MODULE_20__["Day14hComponent"]
    }, {
      path: 'day14i',
      component: _day14i_day14i_component__WEBPACK_IMPORTED_MODULE_21__["Day14iComponent"]
    }, {
      path: 'day14j',
      component: _day14j_day14j_component__WEBPACK_IMPORTED_MODULE_22__["Day14jComponent"]
    }, {
      path: 'day14k',
      component: _day14k_day14k_component__WEBPACK_IMPORTED_MODULE_23__["Day14kComponent"]
    }, {
      path: 'day14l',
      component: _day14l_day14l_component__WEBPACK_IMPORTED_MODULE_24__["Day14lComponent"]
    }, {
      path: 'day14m',
      component: _day14m_day14m_component__WEBPACK_IMPORTED_MODULE_25__["Day14mComponent"]
    }, {
      path: 'day14n',
      component: _day14n_day14n_component__WEBPACK_IMPORTED_MODULE_26__["Day14nComponent"]
    }, {
      path: 'day14o',
      component: _day14o_day14o_component__WEBPACK_IMPORTED_MODULE_27__["Day14oComponent"]
    }, {
      path: 'day14p',
      component: _day14p_day14p_component__WEBPACK_IMPORTED_MODULE_28__["Day14pComponent"]
    }, {
      path: 'day14q',
      component: _day14q_day14q_component__WEBPACK_IMPORTED_MODULE_29__["Day14qComponent"]
    }, {
      path: 'day14r',
      component: _day14r_day14r_component__WEBPACK_IMPORTED_MODULE_30__["Day14rComponent"]
    }, {
      path: 'day14c0',
      component: _day14c0_day14c0_component__WEBPACK_IMPORTED_MODULE_31__["Day14c0Component"]
    }, {
      path: 'day14f0',
      component: _day14f0_day14f0_component__WEBPACK_IMPORTED_MODULE_32__["Day14f0Component"]
    }, {
      path: 'day14i0',
      component: _day14i0_day14i0_component__WEBPACK_IMPORTED_MODULE_33__["Day14i0Component"]
    }, {
      path: 'day14l0',
      component: _day14l0_day14l0_component__WEBPACK_IMPORTED_MODULE_34__["Day14l0Component"]
    }, {
      path: 'day14o0',
      component: _day14o0_day14o0_component__WEBPACK_IMPORTED_MODULE_35__["Day14o0Component"]
    }, {
      path: 'fin4liz4d0',
      component: _fin4liz4d0_fin4liz4d0_component__WEBPACK_IMPORTED_MODULE_36__["Fin4liz4d0Component"]
    }, {
      path: 's0p4',
      component: _sopa_sopa_component__WEBPACK_IMPORTED_MODULE_40__["SopaComponent"]
    }, {
      path: 's4lv4j3',
      component: _salvaje_salvaje_component__WEBPACK_IMPORTED_MODULE_39__["SalvajeComponent"]
    }, {
      path: '3ncuentr0',
      component: _encuentro_encuentro_component__WEBPACK_IMPORTED_MODULE_38__["EncuentroComponent"]
    }, {
      path: 'cre4t1vidad',
      component: _creatividad_creatividad_component__WEBPACK_IMPORTED_MODULE_37__["CreatividadComponent"]
    }, {
      path: '**',
      redirectTo: '/inicio'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        useHash: true
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*.coso-btn{\r\n\tborder: 2px solid black;\r\n\tcolor: #000;\r\n\tmargin: 2rem;\r\n}\r\n.rutaActiva{\r\n\tbackground-color: green;\r\n\tcolor: #fff;\r\n\tmargin: 2rem;\r\n}*/\r\n\r\n/*  #myVideo {\r\n      position: fixed;\r\n      right: 0;\r\n      bottom: 0;\r\n      min-width: 100%;\r\n      min-height: 100%;\r\n}*/\r\n\r\nbody{background-color: #000;}\r\n\r\n.notepad{\r\n\tbox-shadow: 0px 0px 8px 8px #000;\r\n\tborder-radius: 6px;\r\n\tborder-top-left-radius: 0px;\r\n\tbackground-color: white;\r\n\tbackground-image: url('block.jpg');\r\n\tbackground-repeat: repeat;\r\n}\r\n\r\n.top-notepad{\r\n\tbackground-color: #fff;\r\n\tbackground-image: url('bitacora-anillo-top.png');\r\n\tbackground-repeat: repeat-x;\r\n\tbackground-position-x: 0;\r\n\tmin-height: 50px;\r\n}\r\n\r\n.old{display:block}\r\n\r\n.new{display: none;}\r\n\r\n.btn-bitacora-close{\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\tright: 0;\r\n\ttext-decoration: none;\r\n\tbackground: none;\r\n\tborder: none;\r\n\topacity: 0.8;\r\n}\r\n\r\n.btn-bitacora-close:hover{\r\n\topacity: 1;\r\n}\r\n\r\n.btn-bitacora-close img{\r\n\twidth: 45px;\r\n}\r\n\r\n.btn-bitacora-open{\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\tright: 0;\r\n\ttop: 60px;\r\n\ttext-decoration: none;\r\n\tbackground: none;\r\n\tborder: none;\r\n\topacity: 0.8;\r\n}\r\n\r\n.btn-bitacora-open:hover{\r\n\topacity: 1;\r\n}\r\n\r\n.btn-bitacora-open img{\r\n\twidth: 88px;\r\n}\r\n\r\n.oculto{display:none;}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztFQVNFOztBQUVGOzs7Ozs7RUFNRTs7QUFFRixLQUFLLHNCQUFzQixDQUFDOztBQUM1QjtDQUNDLGdDQUFnQztDQUNoQyxrQkFBa0I7Q0FDbEIsMkJBQTJCO0NBQzNCLHVCQUF1QjtDQUN2QixrQ0FBOEM7Q0FDOUMseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLGdEQUE0RDtDQUM1RCwyQkFBMkI7Q0FDM0Isd0JBQXdCO0NBQ3hCLGdCQUFnQjtBQUNqQjs7QUFFQSxLQUFLLGFBQWE7O0FBQ2xCLEtBQUssYUFBYSxDQUFDOztBQUVuQjtDQUNDLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLHFCQUFxQjtDQUNyQixnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLFlBQVk7QUFDYjs7QUFDQTtDQUNDLFVBQVU7QUFDWDs7QUFDQTtDQUNDLFdBQVc7QUFDWjs7QUFDQTtDQUNDLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLFNBQVM7Q0FDVCxxQkFBcUI7Q0FDckIsZ0JBQWdCO0NBQ2hCLFlBQVk7Q0FDWixZQUFZO0FBQ2I7O0FBQ0E7Q0FDQyxVQUFVO0FBQ1g7O0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7O0FBQ0EsUUFBUSxZQUFZLENBQUMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLmNvc28tYnRue1xyXG5cdGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG5cdGNvbG9yOiAjMDAwO1xyXG5cdG1hcmdpbjogMnJlbTtcclxufVxyXG4ucnV0YUFjdGl2YXtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRtYXJnaW46IDJyZW07XHJcbn0qL1xyXG5cclxuLyogICNteVZpZGVvIHtcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbn0qL1xyXG5cclxuYm9keXtiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO31cclxuLm5vdGVwYWR7XHJcblx0Ym94LXNoYWRvdzogMHB4IDBweCA4cHggOHB4ICMwMDA7XHJcblx0Ym9yZGVyLXJhZGl1czogNnB4O1xyXG5cdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2ltZy9ibG9jay5qcGcpO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XHJcbn1cclxuXHJcbi50b3Atbm90ZXBhZHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvaW1nL2JpdGFjb3JhLWFuaWxsby10b3AucG5nKTtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbi14OiAwO1xyXG5cdG1pbi1oZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5vbGR7ZGlzcGxheTpibG9ja31cclxuLm5ld3tkaXNwbGF5OiBub25lO31cclxuXHJcbi5idG4tYml0YWNvcmEtY2xvc2V7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRiYWNrZ3JvdW5kOiBub25lO1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRvcGFjaXR5OiAwLjg7XHJcbn1cclxuLmJ0bi1iaXRhY29yYS1jbG9zZTpob3ZlcntcclxuXHRvcGFjaXR5OiAxO1xyXG59XHJcbi5idG4tYml0YWNvcmEtY2xvc2UgaW1ne1xyXG5cdHdpZHRoOiA0NXB4O1xyXG59XHJcbi5idG4tYml0YWNvcmEtb3BlbntcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0cmlnaHQ6IDA7XHJcblx0dG9wOiA2MHB4O1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRiYWNrZ3JvdW5kOiBub25lO1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRvcGFjaXR5OiAwLjg7XHJcbn1cclxuLmJ0bi1iaXRhY29yYS1vcGVuOmhvdmVye1xyXG5cdG9wYWNpdHk6IDE7XHJcbn1cclxuLmJ0bi1iaXRhY29yYS1vcGVuIGltZ3tcclxuXHR3aWR0aDogODhweDtcclxufVxyXG4ub2N1bHRve2Rpc3BsYXk6bm9uZTt9XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.toggle = true; // agreed = 0;
        // messageToSendP: string = '';
        // receivedChildMessage: string;
        // voters = ['Narco', 'Celeritas', 'Bombasto'];
        // @Input() receivedParentMessage: string;
        // onVoted(agreed: boolean) {
        //   console.log('llego');
        // }
        // childData:string;
        // parentMethod(data){
        //   this.childData= data;
        // }
        // getMessage(message: string) {
        //   console.log('Llego el mensaje');
        //   this.receivedChildMessage = message;
        // }
      }

      _createClass(AppComponent, [{
        key: "receiveMessage",
        value: function receiveMessage($event) {
          this.message = $event;
        }
      }, {
        key: "change",
        value: function change() {
          this.toggle = !this.toggle;
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      // template: '<h1>HOLA {{message}}</h1><br><app-header (messageEvent)="receiveMessage($event)"></app-header>',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./inicio/inicio.component */
    "./src/app/inicio/inicio.component.ts");
    /* harmony import */


    var _day1_day1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./day1/day1.component */
    "./src/app/day1/day1.component.ts");
    /* harmony import */


    var _day3_day3_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./day3/day3.component */
    "./src/app/day3/day3.component.ts");
    /* harmony import */


    var _day4_day4_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./day4/day4.component */
    "./src/app/day4/day4.component.ts");
    /* harmony import */


    var _day7_day7_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./day7/day7.component */
    "./src/app/day7/day7.component.ts");
    /* harmony import */


    var _day8_day8_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./day8/day8.component */
    "./src/app/day8/day8.component.ts");
    /* harmony import */


    var _day8a_day8a_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./day8a/day8a.component */
    "./src/app/day8a/day8a.component.ts");
    /* harmony import */


    var _day10_day10_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./day10/day10.component */
    "./src/app/day10/day10.component.ts");
    /* harmony import */


    var _day13_day13_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./day13/day13.component */
    "./src/app/day13/day13.component.ts");
    /* harmony import */


    var _day14_day14_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./day14/day14.component */
    "./src/app/day14/day14.component.ts");
    /* harmony import */


    var _day14a_day14a_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./day14a/day14a.component */
    "./src/app/day14a/day14a.component.ts");
    /* harmony import */


    var _day14b_day14b_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./day14b/day14b.component */
    "./src/app/day14b/day14b.component.ts");
    /* harmony import */


    var _day14c_day14c_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./day14c/day14c.component */
    "./src/app/day14c/day14c.component.ts");
    /* harmony import */


    var _day14d_day14d_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./day14d/day14d.component */
    "./src/app/day14d/day14d.component.ts");
    /* harmony import */


    var _day14e_day14e_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./day14e/day14e.component */
    "./src/app/day14e/day14e.component.ts");
    /* harmony import */


    var _day14f_day14f_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./day14f/day14f.component */
    "./src/app/day14f/day14f.component.ts");
    /* harmony import */


    var _day14g_day14g_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./day14g/day14g.component */
    "./src/app/day14g/day14g.component.ts");
    /* harmony import */


    var _day14h_day14h_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./day14h/day14h.component */
    "./src/app/day14h/day14h.component.ts");
    /* harmony import */


    var _day14i_day14i_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./day14i/day14i.component */
    "./src/app/day14i/day14i.component.ts");
    /* harmony import */


    var _day14j_day14j_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./day14j/day14j.component */
    "./src/app/day14j/day14j.component.ts");
    /* harmony import */


    var _day14k_day14k_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./day14k/day14k.component */
    "./src/app/day14k/day14k.component.ts");
    /* harmony import */


    var _day14l_day14l_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./day14l/day14l.component */
    "./src/app/day14l/day14l.component.ts");
    /* harmony import */


    var _day14m_day14m_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./day14m/day14m.component */
    "./src/app/day14m/day14m.component.ts");
    /* harmony import */


    var _day14n_day14n_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./day14n/day14n.component */
    "./src/app/day14n/day14n.component.ts");
    /* harmony import */


    var _day14o_day14o_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./day14o/day14o.component */
    "./src/app/day14o/day14o.component.ts");
    /* harmony import */


    var _day14p_day14p_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./day14p/day14p.component */
    "./src/app/day14p/day14p.component.ts");
    /* harmony import */


    var _day14q_day14q_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./day14q/day14q.component */
    "./src/app/day14q/day14q.component.ts");
    /* harmony import */


    var _day14r_day14r_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./day14r/day14r.component */
    "./src/app/day14r/day14r.component.ts");
    /* harmony import */


    var _day14c0_day14c0_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./day14c0/day14c0.component */
    "./src/app/day14c0/day14c0.component.ts");
    /* harmony import */


    var _day14f0_day14f0_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./day14f0/day14f0.component */
    "./src/app/day14f0/day14f0.component.ts");
    /* harmony import */


    var _day14i0_day14i0_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./day14i0/day14i0.component */
    "./src/app/day14i0/day14i0.component.ts");
    /* harmony import */


    var _day14l0_day14l0_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./day14l0/day14l0.component */
    "./src/app/day14l0/day14l0.component.ts");
    /* harmony import */


    var _day14o0_day14o0_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./day14o0/day14o0.component */
    "./src/app/day14o0/day14o0.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _fin4liz4d0_fin4liz4d0_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./fin4liz4d0/fin4liz4d0.component */
    "./src/app/fin4liz4d0/fin4liz4d0.component.ts");
    /* harmony import */


    var _creatividad_creatividad_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./creatividad/creatividad.component */
    "./src/app/creatividad/creatividad.component.ts");
    /* harmony import */


    var _encuentro_encuentro_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./encuentro/encuentro.component */
    "./src/app/encuentro/encuentro.component.ts");
    /* harmony import */


    var _salvaje_salvaje_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./salvaje/salvaje.component */
    "./src/app/salvaje/salvaje.component.ts");
    /* harmony import */


    var _sopa_sopa_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./sopa/sopa.component */
    "./src/app/sopa/sopa.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_5__["InicioComponent"], _day1_day1_component__WEBPACK_IMPORTED_MODULE_6__["Day1Component"], _day3_day3_component__WEBPACK_IMPORTED_MODULE_7__["Day3Component"], _day4_day4_component__WEBPACK_IMPORTED_MODULE_8__["Day4Component"], _day7_day7_component__WEBPACK_IMPORTED_MODULE_9__["Day7Component"], _day8_day8_component__WEBPACK_IMPORTED_MODULE_10__["Day8Component"], _day8a_day8a_component__WEBPACK_IMPORTED_MODULE_11__["Day8aComponent"], _day10_day10_component__WEBPACK_IMPORTED_MODULE_12__["Day10Component"], _day13_day13_component__WEBPACK_IMPORTED_MODULE_13__["Day13Component"], _day14_day14_component__WEBPACK_IMPORTED_MODULE_14__["Day14Component"], _day14a_day14a_component__WEBPACK_IMPORTED_MODULE_15__["Day14aComponent"], _day14b_day14b_component__WEBPACK_IMPORTED_MODULE_16__["Day14bComponent"], _day14c_day14c_component__WEBPACK_IMPORTED_MODULE_17__["Day14cComponent"], _day14d_day14d_component__WEBPACK_IMPORTED_MODULE_18__["Day14dComponent"], _day14e_day14e_component__WEBPACK_IMPORTED_MODULE_19__["Day14eComponent"], _day14f_day14f_component__WEBPACK_IMPORTED_MODULE_20__["Day14fComponent"], _day14g_day14g_component__WEBPACK_IMPORTED_MODULE_21__["Day14gComponent"], _day14h_day14h_component__WEBPACK_IMPORTED_MODULE_22__["Day14hComponent"], _day14i_day14i_component__WEBPACK_IMPORTED_MODULE_23__["Day14iComponent"], _day14j_day14j_component__WEBPACK_IMPORTED_MODULE_24__["Day14jComponent"], _day14k_day14k_component__WEBPACK_IMPORTED_MODULE_25__["Day14kComponent"], _day14l_day14l_component__WEBPACK_IMPORTED_MODULE_26__["Day14lComponent"], _day14m_day14m_component__WEBPACK_IMPORTED_MODULE_27__["Day14mComponent"], _day14n_day14n_component__WEBPACK_IMPORTED_MODULE_28__["Day14nComponent"], _day14o_day14o_component__WEBPACK_IMPORTED_MODULE_29__["Day14oComponent"], _day14p_day14p_component__WEBPACK_IMPORTED_MODULE_30__["Day14pComponent"], _day14q_day14q_component__WEBPACK_IMPORTED_MODULE_31__["Day14qComponent"], _day14r_day14r_component__WEBPACK_IMPORTED_MODULE_32__["Day14rComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_41__["HeaderComponent"], _day14c0_day14c0_component__WEBPACK_IMPORTED_MODULE_33__["Day14c0Component"], _day14f0_day14f0_component__WEBPACK_IMPORTED_MODULE_34__["Day14f0Component"], _day14i0_day14i0_component__WEBPACK_IMPORTED_MODULE_35__["Day14i0Component"], _day14l0_day14l0_component__WEBPACK_IMPORTED_MODULE_36__["Day14l0Component"], _day14o0_day14o0_component__WEBPACK_IMPORTED_MODULE_37__["Day14o0Component"], _fin4liz4d0_fin4liz4d0_component__WEBPACK_IMPORTED_MODULE_42__["Fin4liz4d0Component"], _creatividad_creatividad_component__WEBPACK_IMPORTED_MODULE_43__["CreatividadComponent"], _encuentro_encuentro_component__WEBPACK_IMPORTED_MODULE_44__["EncuentroComponent"], _salvaje_salvaje_component__WEBPACK_IMPORTED_MODULE_45__["SalvajeComponent"], _sopa_sopa_component__WEBPACK_IMPORTED_MODULE_46__["SopaComponent"]],
      imports: [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_40__["ModalModule"].forRoot(), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_38__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_39__["BrowserAnimationsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/creatividad/creatividad.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/creatividad/creatividad.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCreatividadCreatividadComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".freebirdFormviewerViewCenteredContent{\r\n    max-width: 100vw !important;\r\n  }\r\n  #myVideo {\r\n    position: fixed;\r\n    right: 0;\r\n    top: -85px;\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    z-index: -20;\r\n  }\r\n  .container-fluid{\r\n    overflow: hidden;\r\n    color:#fff\r\n  }\r\n  .form-control{\r\n    width: 200px;\r\n    display: inline;\r\n  }\r\n  /*BTN*/\r\n  .btn-primary{\r\n    /* width: 120px; */\r\n    display: inline;\r\n    margin-left: 20px;\r\n    \r\n    background-color:#0c1b21;\r\n    border-color:#000;\r\n  }\r\n  .btn-primary.disabled{\r\n    background-color:#0c1b21;\r\n    border-color:#000;\r\n  }\r\n  .container-fluid{\r\n    background-image: url('1.jpg');\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    background-repeat: no-repeat;\r\n    min-height: 100vh;\r\n    background-position-x: right;\r\n  }\r\n  .progreso{\r\n    background-image: url('progreso-1.png');\r\n    background-position-x: center;\r\n    min-height: 180px;\r\n    background-position-y: bottom;\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n  }\r\n  li{\r\n    margin-bottom: 13px;\r\n    font-size: 16pt;\r\n    text-align: left;\r\n  }\r\n  .form-control{\r\n    width: 80%;\r\n    /* margin-top: 130px; */\r\n    display: block;\r\n    border: 2px solid #868686;\r\n    background: #ffffffa1;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRpdmlkYWQvY3JlYXRpdmlkYWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsZUFBZTtJQUNmLFFBQVE7SUFDUixVQUFVO0lBQ1YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQjtFQUNGO0VBQ0E7SUFDRSxZQUFZO0lBQ1osZUFBZTtFQUNqQjtFQUNBLE1BQU07RUFDTjtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCOztJQUVqQix3QkFBd0I7SUFDeEIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSx3QkFBd0I7SUFDeEIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSw4QkFBNkM7SUFDN0Msc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLDRCQUE0QjtFQUM5QjtFQUVBO0lBQ0UsdUNBQXdEO0lBQ3hELDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1Qix3QkFBd0I7RUFDMUI7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCO0VBRUE7SUFDRSxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGl2aWRhZC9jcmVhdGl2aWRhZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZyZWViaXJkRm9ybXZpZXdlclZpZXdDZW50ZXJlZENvbnRlbnR7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICNteVZpZGVvIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAtODVweDtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAtMjA7XHJcbiAgfVxyXG4gIC5jb250YWluZXItZmx1aWR7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgY29sb3I6I2ZmZlxyXG4gIH1cclxuICAuZm9ybS1jb250cm9se1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gIH1cclxuICAvKkJUTiovXHJcbiAgLmJ0bi1wcmltYXJ5e1xyXG4gICAgLyogd2lkdGg6IDEyMHB4OyAqL1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzBjMWIyMTtcclxuICAgIGJvcmRlci1jb2xvcjojMDAwO1xyXG4gIH1cclxuICAuYnRuLXByaW1hcnkuZGlzYWJsZWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwYzFiMjE7XHJcbiAgICBib3JkZXItY29sb3I6IzAwMDtcclxuICB9XHJcbiAgLmNvbnRhaW5lci1mbHVpZHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1nLzEuanBnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiByaWdodDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2dyZXNve1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvMS9wcm9ncmVzby0xLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDE4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBib3R0b207XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIH1cclxuXHJcbiAgbGl7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxM3B4O1xyXG4gICAgZm9udC1zaXplOiAxNnB0O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcblxyXG4gIC5mb3JtLWNvbnRyb2x7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgLyogbWFyZ2luLXRvcDogMTMwcHg7ICovXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM4Njg2ODY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmYTE7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/creatividad/creatividad.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/creatividad/creatividad.component.ts ***!
    \******************************************************/

  /*! exports provided: CreatividadComponent */

  /***/
  function srcAppCreatividadCreatividadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreatividadComponent", function () {
      return CreatividadComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CreatividadComponent = function CreatividadComponent() {
      _classCallCheck(this, CreatividadComponent);

      this.nombregrupo = 'Buhágana';
      this.nombresimulador = 'Adventurer Mission | ';
      this.daynumber = '4';
    };

    CreatividadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-creatividad',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./creatividad.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/creatividad/creatividad.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./creatividad.component.css */
      "./src/app/creatividad/creatividad.component.css")).default]
    })], CreatividadComponent);
    /***/
  },

  /***/
  "./src/app/day1/day1.component.css":
  /*!*****************************************!*\
    !*** ./src/app/day1/day1.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppDay1Day1ComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".freebirdFormviewerViewCenteredContent{\r\n  max-width: 100vw !important;\r\n}\r\n#myVideo {\r\n  position: fixed;\r\n  right: 0;\r\n  top: -85px;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  z-index: -20;\r\n}\r\n.container-fluid{\r\n  overflow: hidden;\r\n  color:#fff\r\n}\r\n.form-control{\r\n  width: 200px;\r\n  display: inline;\r\n}\r\n/*BTN*/\r\n.btn-primary{\r\n  /* width: 80%; */\r\n  display: inline;\r\n  margin-left: 20px;\r\n  background-color:#0c1b21;\r\n  border-color:#000;\r\n}\r\n.btn-primary.disabled{\r\n  background-color:#0c1b21;\r\n  border-color:#000;\r\n}\r\n.container-fluid{\r\n  background-image: url('1.jpg');\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  background-repeat: no-repeat;\r\n  min-height: 100vh;\r\n  background-position-x: right;\r\n}\r\n.progreso{\r\n  background-image: url('progreso-1.png');\r\n  background-position-x: center;\r\n  min-height: 180px;\r\n  background-position-y: bottom;\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF5MS9kYXkxLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGVBQWU7RUFDZixRQUFRO0VBQ1IsVUFBVTtFQUNWLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEI7QUFDRjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQSxNQUFNO0FBQ047RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSw4QkFBNkM7RUFDN0Msc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtBQUM5QjtBQUVBO0VBQ0UsdUNBQXdEO0VBQ3hELDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLDRCQUE0QjtFQUM1Qix3QkFBd0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9kYXkxL2RheTEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mcmVlYmlyZEZvcm12aWV3ZXJWaWV3Q2VudGVyZWRDb250ZW50e1xyXG4gIG1heC13aWR0aDogMTAwdncgIWltcG9ydGFudDtcclxufVxyXG4jbXlWaWRlbyB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogLTg1cHg7XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogLTIwO1xyXG59XHJcbi5jb250YWluZXItZmx1aWR7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBjb2xvcjojZmZmXHJcbn1cclxuLmZvcm0tY29udHJvbHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcbi8qQlROKi9cclxuLmJ0bi1wcmltYXJ5e1xyXG4gIC8qIHdpZHRoOiA4MCU7ICovXHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzBjMWIyMTtcclxuICBib3JkZXItY29sb3I6IzAwMDtcclxufVxyXG4uYnRuLXByaW1hcnkuZGlzYWJsZWR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMGMxYjIxO1xyXG4gIGJvcmRlci1jb2xvcjojMDAwO1xyXG59XHJcbi5jb250YWluZXItZmx1aWR7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvMS5qcGcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogcmlnaHQ7XHJcbn1cclxuXHJcbi5wcm9ncmVzb3tcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy8xL3Byb2dyZXNvLTEucG5nKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiAxODBweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGJvdHRvbTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/day1/day1.component.ts":
  /*!****************************************!*\
    !*** ./src/app/day1/day1.component.ts ***!
    \****************************************/

  /*! exports provided: Day1Component */

  /***/
  function srcAppDay1Day1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Day1Component", function () {
      return Day1Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Day1Component =
    /*#__PURE__*/
    function () {
      function Day1Component() {
        _classCallCheck(this, Day1Component);

        this.nombregrupo = 'Buhágana';
        this.nombresimulador = 'Adventurer Mission | ';
        this.daynumber = '1'; //valor:number;

        this.valor = 0;
        this.messageToEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(Day1Component, [{
        key: "openModal",
        value: function openModal(template) {
          this.modalRef = this.modalService.show(template);
        }
      }, {
        key: "sendMessageToParent",
        value: function sendMessageToParent(message) {
          console.log('asd');
          this.messageToEmit.emit(message);
        }
      }]);

      return Day1Component;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Day1Component.prototype, "receivedParentMessage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Day1Component.prototype, "messageToEmit", void 0);
    Day1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-day1',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./day1.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/day1/day1.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./day1.component.css */
      "./src/app/day1/day1.component.css")).default]
    })], Day1Component);
    /***/
  },

  /***/
  "./src/app/day10/day10.component.css":
  /*!*******************************************!*\
    !*** ./src/app/day10/day10.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppDay10Day10ComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container-fluid{\r\n  overflow: hidden;\r\n  color:#fff\r\n}\r\n/*BTN*/\r\n.btn-primary{\r\n  /* width: 120px; */\r\n  display: inline;\r\n  margin-left: 20px;\r\n  background-color:#0c1b21;\r\n  border-color:#000;\r\n}\r\n.btn-primary.disabled{\r\n  background-color:#0c1b21;\r\n  border-color:#000;\r\n}\r\n.form-control{\r\n  width: 200px;\r\n  display: inline;\r\n}\r\n/* /BTN*/\r\n.container-fluid{\r\n  background-image: url('1.jpg');\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  background-repeat: no-repeat;\r\n  min-height: 100vh;\r\n  background-position-x: right;\r\n}\r\n.progreso{\r\n  background-image: url('progreso-10.png');\r\n  background-position-x: center;\r\n  min-height: 180px;\r\n  background-position-y: bottom;\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF5MTAvZGF5MTAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQjtBQUNGO0FBQ0EsTUFBTTtBQUNOO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQSxRQUFRO0FBQ1I7RUFDRSw4QkFBNkM7RUFDN0Msc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0Usd0NBQXlEO0VBQ3pELDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLDRCQUE0QjtFQUM1Qix3QkFBd0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9kYXkxMC9kYXkxMC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGNvbG9yOiNmZmZcclxufVxyXG4vKkJUTiovXHJcbi5idG4tcHJpbWFyeXtcclxuICAvKiB3aWR0aDogMTIwcHg7ICovXHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzBjMWIyMTtcclxuICBib3JkZXItY29sb3I6IzAwMDtcclxufVxyXG4uYnRuLXByaW1hcnkuZGlzYWJsZWR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMGMxYjIxO1xyXG4gIGJvcmRlci1jb2xvcjojMDAwO1xyXG59XHJcbi5mb3JtLWNvbnRyb2x7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG4vKiAvQlROKi9cclxuLmNvbnRhaW5lci1mbHVpZHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy8xLmpwZyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiByaWdodDtcclxufVxyXG4ucHJvZ3Jlc297XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvMS9wcm9ncmVzby0xMC5wbmcpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDE4MHB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogYm90dG9tO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/day10/day10.component.ts":
  /*!******************************************!*\
    !*** ./src/app/day10/day10.component.ts ***!
    \******************************************/

  /*! exports provided: Day10Component */

  /***/
  function srcAppDay10Day10ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Day10Component", function () {
      return Day10Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");

    var Day10Component =
    /*#__PURE__*/
    function () {
      function Day10Component(modalService) {
        _classCallCheck(this, Day10Component);

        this.modalService = modalService;
        this.nombregrupo = 'Buhágana';
        this.nombresimulador = 'Adventurer Mission | ';
        this.daynumber = '5'; //valor:number;

        this.valor = 'D0L4R35';
      }

      _createClass(Day10Component, [{
        key: "openModal",
        value: function openModal(template) {
          this.modalRef = this.modalService.show(template);
        }
      }]);

      return Day10Component;
    }();

    Day10Component.ctorParameters = function () {
      return [{
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
      }];
    };

    Day10Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-day10',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./day10.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/day10/day10.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./day10.component.css */
      "./src/app/day10/day10.component.css")).default]
    })], Day10Component);
    /***/
  },

  /***/
  "./src/app/day13/day13.component.css":
  /*!*******************************************!*\
    !*** ./src/app/day13/day13.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppDay13Day13ComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#myVideo {\r\n  position: fixed;\r\n  right: 0;\r\n  top: -85px;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  z-index: -20;\r\n}\r\n.container-fluid{\r\n  overflow: hidden;\r\n  color:rgb(78, 65, 65);\r\n}\r\n/*BTN*/\r\n.btn-primary{\r\n  /* width: 120px; */\r\n  display: inline;\r\n  margin-left: 20px;\r\n  background-color:#0c1b21;\r\n  border-color:#000;\r\n}\r\n.btn-primary.disabled{\r\n  background-color:#0c1b21;\r\n  border-color:#000;\r\n}\r\n.form-control{\r\n  width: 200px;\r\n  display: inline;\r\n}\r\n.completar{\r\n  text-align: center;\r\n}\r\n/* /BTN*/\r\n.container-fluid{\r\n  background-image: url('1.jpg');\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  background-repeat: no-repeat;\r\n  min-height: 100vh;\r\n  background-position-x: right;\r\n}\r\n.progreso{\r\n  background-image: url('progreso-11.png');\r\n  background-position-x: center;\r\n  min-height: 180px;\r\n  background-position-y: bottom;\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF5MTMvZGF5MTMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixRQUFRO0VBQ1IsVUFBVTtFQUNWLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCO0FBQ0EsTUFBTTtBQUNOO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBLFFBQVE7QUFDUjtFQUNFLDhCQUE2QztFQUM3QyxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QixpQkFBaUI7RUFDakIsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSx3Q0FBeUQ7RUFDekQsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2RheTEzL2RheTEzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbXlWaWRlbyB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogLTg1cHg7XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogLTIwO1xyXG59XHJcbi5jb250YWluZXItZmx1aWR7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBjb2xvcjpyZ2IoNzgsIDY1LCA2NSk7XHJcbn1cclxuLypCVE4qL1xyXG4uYnRuLXByaW1hcnl7XHJcbiAgLyogd2lkdGg6IDEyMHB4OyAqL1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMwYzFiMjE7XHJcbiAgYm9yZGVyLWNvbG9yOiMwMDA7XHJcbn1cclxuLmJ0bi1wcmltYXJ5LmRpc2FibGVke1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzBjMWIyMTtcclxuICBib3JkZXItY29sb3I6IzAwMDtcclxufVxyXG4uZm9ybS1jb250cm9se1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuLmNvbXBsZXRhcntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLyogL0JUTiovXHJcbi5jb250YWluZXItZmx1aWR7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvMS5qcGcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogcmlnaHQ7XHJcbn1cclxuLnByb2dyZXNve1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1nLzEvcHJvZ3Jlc28tMTEucG5nKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiAxODBweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGJvdHRvbTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/day13/day13.component.ts":
  /*!******************************************!*\
    !*** ./src/app/day13/day13.component.ts ***!
    \******************************************/

  /*! exports provided: Day13Component */

  /***/
  function srcAppDay13Day13ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Day13Component", function () {
      return Day13Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");

    var Day13Component =
    /*#__PURE__*/
    function () {
      function Day13Component(modalService) {
        _classCallCheck(this, Day13Component);

        this.modalService = modalService;
        this.nombregrupo = 'Buhágana';
        this.nombresimulador = 'Adventurer Mission | ';
        this.daynumber = '6'; //valor:number;

        this.valorM = 42;
        this.valorH = 24;
        this.acertado = false;
      }

      _createClass(Day13Component, [{
        key: "edad",
        value: function edad() {
          if (this.input1 == this.valorM && this.input2 == this.valorH) {
            this.acertado = true;
          } else {
            this.acertado = false;
          }
        }
      }, {
        key: "openModal",
        value: function openModal(template) {
          this.modalRef = this.modalService.show(template);
        }
      }]);

      return Day13Component;
    }();

    Day13Component.ctorParameters = function () {
      return [{
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
      }];
    };

    Day13Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-day13',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./day13.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/day13/day13.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./day13.component.css */
      "./src/app/day13/day13.component.css")).default]
    })], Day13Component);
    /***/
  },

  /***/
  "./src/app/day14/day14.component.css":
  /*!*******************************************!*\
    !*** ./src/app/day14/day14.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppDay14Day14ComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n/*BTN*/\r\n.btn-primary{\r\n  /* width: 150px; */\r\n  display: inline;\r\n  margin-left: 20px;\r\n  background-color:#0c1b21;\r\n  border-color:#000;\r\n}\r\n.btn-primary.disabled{\r\n  background-color:#0c1b21;\r\n  border-color:#000;\r\n}\r\n.form-control{\r\n  width: 250px;\r\n  display: inline;\r\n}\r\n/* /BTN*/\r\n.container-fluid{\r\n  background-image: url('1.jpg');\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  background-repeat: no-repeat;\r\n  min-height: 100vh;\r\n  background-position-x: right;\r\n}\r\n.progreso{\r\n  background-image: url('progreso-12.png');\r\n  background-position-x: center;\r\n  min-height: 180px;\r\n  background-position-y: bottom;\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF5MTQvZGF5MTQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsTUFBTTtBQUNOO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQSxRQUFRO0FBRVI7RUFDRSw4QkFBNkM7RUFDN0Msc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0Usd0NBQXlEO0VBQ3pELDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLDRCQUE0QjtFQUM1Qix3QkFBd0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9kYXkxNC9kYXkxNC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qQlROKi9cclxuLmJ0bi1wcmltYXJ5e1xyXG4gIC8qIHdpZHRoOiAxNTBweDsgKi9cclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMGMxYjIxO1xyXG4gIGJvcmRlci1jb2xvcjojMDAwO1xyXG59XHJcbi5idG4tcHJpbWFyeS5kaXNhYmxlZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMwYzFiMjE7XHJcbiAgYm9yZGVyLWNvbG9yOiMwMDA7XHJcbn1cclxuLmZvcm0tY29udHJvbHtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcbi8qIC9CVE4qL1xyXG5cclxuLmNvbnRhaW5lci1mbHVpZHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy8xLmpwZyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiByaWdodDtcclxufVxyXG4ucHJvZ3Jlc297XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvMS9wcm9ncmVzby0xMi5wbmcpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDE4MHB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogYm90dG9tO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/day14/day14.component.ts":
  /*!******************************************!*\
    !*** ./src/app/day14/day14.component.ts ***!
    \******************************************/

  /*! exports provided: Day14Component */

  /***/
  function srcAppDay14Day14ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Day14Component", function () {
      return Day14Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");

    var Day14Component =
    /*#__PURE__*/
    function () {
      function Day14Component(modalService) {
        _classCallCheck(this, Day14Component);

        this.modalService = modalService;
        this.nombregrupo = 'Buhágana';
        this.nombresimulador = 'Adventurer Mission | ';
        this.daynumber = '12'; //valor:number;

        this.valor = 150;
      }

      _createClass(Day14Component, [{
        key: "openModal",
        value: function openModal(template) {
          this.modalRef = this.modalService.show(template);
        }
      }]);

      return Day14Component;
    }();

    Day14Component.ctorParameters = function () {
      return [{
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
      }];
    };

    Day14Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-day14',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./day14.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/day14/day14.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./day14.component.css */
      "./src/app/day14/day14.component.css")).default]
    })], Day14Component);
    /***/
  },

  /***/
  "./src/app/day14a/day14a.component.css":
  /*!*********************************************!*\
    !*** ./src/app/day14a/day14a.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDay14aDay14aComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#myVideo {\r\n  position: fixed;\r\n  right: 0;\r\n  top: -20px;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  z-index: -20;\r\n}\r\n.container-fluid{\r\n  overflow: hidden;\r\n}\r\n.btn-play{\r\n  background:none;\r\n  border:none;\r\n  opacity: 0.7;\r\n}\r\n.btn-play img{\r\n  width: 100px;\r\n}\r\n.btn-play:hover{\r\n  background:none;\r\n  border:none;\r\n  opacity: 1;\r\n}\r\n.botones{\r\n  text-align: right;\r\n  position: absolute;\r\n  right:2rem;\r\n  bottom:2rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF5MTRhL2RheTE0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixVQUFVO0VBQ1YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVO0FBQ1o7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2RheTE0YS9kYXkxNGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNteVZpZGVvIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAtMjBweDtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAtMjA7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5idG4tcGxheXtcclxuICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcbi5idG4tcGxheSBpbWd7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcbi5idG4tcGxheTpob3ZlcntcclxuICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4uYm90b25lc3tcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6MnJlbTtcclxuICBib3R0b206MnJlbTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/day14a/day14a.component.ts":
  /*!********************************************!*\
    !*** ./src/app/day14a/day14a.component.ts ***!
    \********************************************/

  /*! exports provided: Day14aComponent */

  /***/
  function srcAppDay14aDay14aComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Day14aComponent", function () {
      return Day14aComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Day14aComponent = function Day14aComponent() {
      _classCallCheck(this, Day14aComponent);

      this.nombregrupo = 'Buhágana';
      this.nombresimulador = 'Adventurer Mission | ';
      this.daynumber = '12'; //valor:number;

      this.valor = 150;
    };

    Day14aComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-day14a',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./day14a.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/day14a/day14a.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./day14a.component.css */
      "./src/app/day14a/day14a.component.css")).default]
    })], Day14aComponent);
    /***/
  },

  /***/
  "./src/app/day14b/day14b.component.css":
  /*!*********************************************!*\
    !*** ./src/app/day14b/day14b.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDay14bDay14bComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#myVideo {\r\n  position: fixed;\r\n  right: 0;\r\n  bottom: 0;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  z-index: -20;\r\n}\r\n.container-fluid{\r\n  overflow: hidden;\r\n}\r\n.btn-play{\r\n  background:none;\r\n  border:none;\r\n  opacity: 0.7;\r\n}\r\n.btn-play img{\r\n  width: 100px;\r\n}\r\n.btn-play:hover{\r\n  background:none;\r\n  border:none;\r\n  opacity: 1;\r\n}\r\n.botones{\r\n  text-align: right;\r\n  position: absolute;\r\n  right:2rem;\r\n  bottom:2rem;\r\n}\r\n.contenido{\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 100px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF5MTRiL2RheTE0Yi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVO0FBQ1o7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9kYXkxNGIvZGF5MTRiLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbXlWaWRlbyB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAtMjA7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5idG4tcGxheXtcclxuICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcbi5idG4tcGxheSBpbWd7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcbi5idG4tcGxheTpob3ZlcntcclxuICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4uYm90b25lc3tcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6MnJlbTtcclxuICBib3R0b206MnJlbTtcclxufVxyXG4uY29udGVuaWRve1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/day14b/day14b.component.ts":
  /*!********************************************!*\
    !*** ./src/app/day14b/day14b.component.ts ***!
    \********************************************/

  /*! exports provided: Day14bComponent */

  /***/
  function srcAppDay14bDay14bComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Day14bComponent", function () {
      return Day14bComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Day14bComponent = function Day14bComponent() {
      _classCallCheck(this, Day14bComponent);

      this.nombregrupo = 'Buhágana';
      this.nombresimulador = 'Adventurer Mission | ';
      this.daynumber = '12'; //valor:number;

      this.valor = 150;
    };

    Day14bComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-day14b',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./day14b.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/day14b/day14b.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./day14b.component.css */
      "./src/app/day14b/day14b.component.css")).default]
    })], Day14bComponent);
    /***/
  },

  /***/
  "./src/app/day14c/day14c.component.css":
  /*!*********************************************!*\
    !*** ./src/app/day14c/day14c.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDay14cDay14cComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#myVideo {\r\n  position: fixed;\r\n  right: 0;\r\n  top: -40px;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  z-index: -20;\r\n}\r\n.container-fluid{\r\n  overflow: hidden;\r\n}\r\n.btn-play{\r\n  background:none;\r\n  border:none;\r\n  opacity: 0.7;\r\n}\r\n.btn-play img{\r\n  width: 100px;\r\n}\r\n.btn-play:hover{\r\n  background:none;\r\n  border:none;\r\n  opacity: 1;\r\n}\r\n.botones{\r\n  text-align: right;\r\n  position: absolute;\r\n  right:2rem;\r\n  bottom:2rem;\r\n}\r\n/*.coso-btn{\r\n  border: 2px solid black;\r\n  color: #000;\r\n  margin: 2rem;\r\n}\r\n.rutaActiva{\r\n  background-color: green;\r\n  color: #fff;\r\n  margin: 2rem;\r\n}*/\r\n/*  #myVideo {\r\n      position: fixed;\r\n      right: 0;\r\n      bottom: 0;\r\n      min-width: 100%;\r\n      min-height: 100%;\r\n}*/\r\n.entorno-pregunta{\r\n  padding-top: 4rem;\r\n  z-index: 40;\r\n  padding-bottom: 2rem;\r\n}\r\n.opciones{\r\n  /* border: 1px solid #000; */\r\n  border-radius: 5px;\r\n  background:none;\r\n  margin-top: 20px;\r\n  border:none;\r\n}\r\n/* .opciones:hover{\r\n  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.349);\r\n} */\r\n.texto-interno{\r\n  color: #80541b\r\n}\r\n.texto-interno:hover{\r\n  color: #000;\r\n  border-left: 1px solid #80541b;\r\n}\r\n/*ANIMACIONES*/\r\n.entorno-pregunta {\r\n  margin-top: 25px;\r\n  font-size: 21px;\r\n  text-align: center;\r\n\r\n  -webkit-animation: fadein 5s; /* Safari, Chrome and Opera > 12.1 */ /* Firefox < 16 */ /* Internet Explorer */ /* Opera < 12.1 */\r\n          animation: fadein 5s;\r\n}\r\n@keyframes fadein {\r\n  from { opacity: 0; }\r\n  to   { opacity: 1; }\r\n}\r\n/* Firefox < 16 */\r\n/* Safari, Chrome and Opera > 12.1 */\r\n@-webkit-keyframes fadein {\r\n  from { opacity: 0; }\r\n  to   { opacity: 1; }\r\n}\r\n/* Internet Explorer */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF5MTRjL2RheTE0Yy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixVQUFVO0VBQ1YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVO0FBQ1o7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUVBOzs7Ozs7Ozs7RUFTRTtBQUVGOzs7Ozs7RUFNRTtBQUNGO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7QUFDQTs7R0FFRztBQUVIO0VBQ0U7QUFDRjtBQUNBO0VBQ0UsV0FBVztFQUNYLDhCQUE4QjtBQUNoQztBQUVBLGNBQWM7QUFDZDtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCOztFQUVsQiw0QkFBNEIsRUFBRSxvQ0FBb0MsRUFDcEMsaUJBQWlCLEVBQ2pCLHNCQUFzQixFQUN0QixpQkFBaUI7VUFDdkMsb0JBQW9CO0FBQzlCO0FBRUE7RUFDRSxPQUFPLFVBQVUsRUFBRTtFQUNuQixPQUFPLFVBQVUsRUFBRTtBQUNyQjtBQUVBLGlCQUFpQjtBQU1qQixvQ0FBb0M7QUFDcEM7RUFDRSxPQUFPLFVBQVUsRUFBRTtFQUNuQixPQUFPLFVBQVUsRUFBRTtBQUNyQjtBQUVBLHNCQUFzQiIsImZpbGUiOiJzcmMvYXBwL2RheTE0Yy9kYXkxNGMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNteVZpZGVvIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAtNDBweDtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAtMjA7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5idG4tcGxheXtcclxuICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcbi5idG4tcGxheSBpbWd7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcbi5idG4tcGxheTpob3ZlcntcclxuICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4uYm90b25lc3tcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6MnJlbTtcclxuICBib3R0b206MnJlbTtcclxufVxyXG5cclxuLyouY29zby1idG57XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgbWFyZ2luOiAycmVtO1xyXG59XHJcbi5ydXRhQWN0aXZhe1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbjogMnJlbTtcclxufSovXHJcblxyXG4vKiAgI215VmlkZW8ge1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgbWluLWhlaWdodDogMTAwJTtcclxufSovXHJcbi5lbnRvcm5vLXByZWd1bnRhe1xyXG4gIHBhZGRpbmctdG9wOiA0cmVtO1xyXG4gIHotaW5kZXg6IDQwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4ub3BjaW9uZXN7XHJcbiAgLyogYm9yZGVyOiAxcHggc29saWQgIzAwMDsgKi9cclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZDpub25lO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbn1cclxuLyogLm9wY2lvbmVzOmhvdmVye1xyXG4gIGJveC1zaGFkb3c6IDRweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4zNDkpO1xyXG59ICovXHJcblxyXG4udGV4dG8taW50ZXJub3tcclxuICBjb2xvcjogIzgwNTQxYlxyXG59XHJcbi50ZXh0by1pbnRlcm5vOmhvdmVye1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzgwNTQxYjtcclxufVxyXG5cclxuLypBTklNQUNJT05FUyovXHJcbi5lbnRvcm5vLXByZWd1bnRhIHtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIGZvbnQtc2l6ZTogMjFweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gNXM7IC8qIFNhZmFyaSwgQ2hyb21lIGFuZCBPcGVyYSA+IDEyLjEgKi9cclxuICAgICAtbW96LWFuaW1hdGlvbjogZmFkZWluIDVzOyAvKiBGaXJlZm94IDwgMTYgKi9cclxuICAgICAgLW1zLWFuaW1hdGlvbjogZmFkZWluIDVzOyAvKiBJbnRlcm5ldCBFeHBsb3JlciAqL1xyXG4gICAgICAgLW8tYW5pbWF0aW9uOiBmYWRlaW4gNXM7IC8qIE9wZXJhIDwgMTIuMSAqL1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBmYWRlaW4gNXM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZWluIHtcclxuICBmcm9tIHsgb3BhY2l0eTogMDsgfVxyXG4gIHRvICAgeyBvcGFjaXR5OiAxOyB9XHJcbn1cclxuXHJcbi8qIEZpcmVmb3ggPCAxNiAqL1xyXG5ALW1vei1rZXlmcmFtZXMgZmFkZWluIHtcclxuICBmcm9tIHsgb3BhY2l0eTogMDsgfVxyXG4gIHRvICAgeyBvcGFjaXR5OiAxOyB9XHJcbn1cclxuXHJcbi8qIFNhZmFyaSwgQ2hyb21lIGFuZCBPcGVyYSA+IDEyLjEgKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVpbiB7XHJcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cclxuICB0byAgIHsgb3BhY2l0eTogMTsgfVxyXG59XHJcblxyXG4vKiBJbnRlcm5ldCBFeHBsb3JlciAqL1xyXG5ALW1zLWtleWZyYW1lcyBmYWRlaW4ge1xyXG4gIGZyb20geyBvcGFjaXR5OiAwOyB9XHJcbiAgdG8gICB7IG9wYWNpdHk6IDE7IH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/day14c/day14c.component.ts":
  /*!********************************************!*\
    !*** ./src/app/day14c/day14c.component.ts ***!
    \********************************************/

  /*! exports provided: Day14cComponent */

  /***/
  function srcAppDay14cDay14cComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Day14cComponent", function () {
      return Day14cComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Day14cComponent = function Day14cComponent() {
      _classCallCheck(this, Day14cComponent);

      this.nombregrupo = 'Buhágana';
      this.nombresimulador = 'Adventurer Mission | ';
      this.daynumber = '14'; //valor:number;

      this.valor = 150;
    };

    Day14cComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-day14c',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./day14c.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/day14c/day14c.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./day14c.component.css */
      "./src/app/day14c/day14c.component.css")).default]
    })], Day14cComponent);
    /***/
  },

  /***/
  "./src/app/day14c0/day14c0.component.css":
  /*!***********************************************!*\
    !*** ./src/app/day14c0/day14c0.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDay14c0Day14c0ComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#myVideo {\r\n    position: fixed;\r\n    right: 0;\r\n    top: -40px;\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    z-index: -20;\r\n  }\r\n  .container-fluid{\r\n    overflow: hidden;\r\n  }\r\n  .btn-play{\r\n    background:none;\r\n    border:none;\r\n    opacity: 0.7;\r\n  }\r\n  .btn-play img{\r\n    width: 100px;\r\n  }\r\n  .btn-play:hover{\r\n    background:none;\r\n    border:none;\r\n    opacity: 1;\r\n  }\r\n  .botones{\r\n    text-align: right;\r\n    position: absolute;\r\n    right:2rem;\r\n    bottom:2rem;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF5MTRjMC9kYXkxNGMwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFVBQVU7SUFDVixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsV0FBVztJQUNYLFVBQVU7RUFDWjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvZGF5MTRjMC9kYXkxNGMwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbXlWaWRlbyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogLTQwcHg7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogLTIwO1xyXG4gIH1cclxuICAuY29udGFpbmVyLWZsdWlke1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgLmJ0bi1wbGF5e1xyXG4gICAgYmFja2dyb3VuZDpub25lO1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgfVxyXG4gIC5idG4tcGxheSBpbWd7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgfVxyXG4gIC5idG4tcGxheTpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6bm9uZTtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgLmJvdG9uZXN7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OjJyZW07XHJcbiAgICBib3R0b206MnJlbTtcclxuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/day14c0/day14c0.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/day14c0/day14c0.component.ts ***!
    \**********************************************/

  /*! exports provided: Day14c0Component */

  /***/
  function srcAppDay14c0Day14c0ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Day14c0Component", function () {
      return Day14c0Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Day14c0Component =
    /*#__PURE__*/
    function () {
      function Day14c0Component(router) {
        _classCallCheck(this, Day14c0Component);

        this.router = router;
      }

      _createClass(Day14c0Component, [{
        key: "videoFin",
        value: function videoFin() {
          console.log("termino el video");
          this.router.navigateByUrl('/day14c');
        }
      }]);

      return Day14c0Component;
    }();

    Day14c0Component.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    Day14c0Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-day14c0',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./day14c0.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/day14c0/day14c0.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./day14c0.component.css */
      "./src/app/day14c0/day14c0.component.css")).default]
    })], Day14c0Component);
    /***/
  },

  /***/
  "./src/app/day14d/day14d.component.css":
  /*!*********************************************!*\
    !*** ./src/app/day14d/day14d.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDay14dDay14dComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#myVideo {\r\n  position: fixed;\r\n  right: 0;\r\n  top: -40px;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  z-index: -20;\r\n}\r\n.container-fluid{\r\n  overflow: hidden;\r\n}\r\n.btn-play{\r\n  background:none;\r\n  border:none;\r\n  opacity: 0.7;\r\n}\r\n.btn-play img{\r\n  width: 100px;\r\n}\r\n.btn-play:hover{\r\n  background:none;\r\n  border:none;\r\n  opacity: 1;\r\n}\r\n.botones{\r\n  text-align: right;\r\n  position: absolute;\r\n  right:2rem;\r\n  bottom:2rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF5MTRkL2RheTE0ZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixVQUFVO0VBQ1YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVO0FBQ1o7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2RheTE0ZC9kYXkxNGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNteVZpZGVvIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAtNDBweDtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAtMjA7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5idG4tcGxheXtcclxuICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcbi5idG4tcGxheSBpbWd7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcbi5idG4tcGxheTpob3ZlcntcclxuICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4uYm90b25lc3tcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6MnJlbTtcclxuICBib3R0b206MnJlbTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/day14d/day14d.component.ts":
  /*!********************************************!*\
    !*** ./src/app/day14d/day14d.component.ts ***!
    \********************************************/

  /*! exports provided: Day14dComponent */

  /***/
  function srcAppDay14dDay14dComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Day14dComponent", function () {
      return Day14dComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Day14dComponent =
    /*#__PURE__*/
    function () {
      function Day14dComponent(router) {
        _classCallCheck(this, Day14dComponent);

        this.router = router;
        this.nombregrupo = 'Ngäbe-Buglé';
        this.nombresimulador = 'Adventurer Mission | ';
        this.daynumber = '14'; //valor:number;

        this.valor = 150;
      }

      _createClass(Day14dComponent, [{
        key: "videoFin",
        value: function videoFin() {
          console.log("termino el video");
          this.router.navigateByUrl('/day14e');
        }
      }]);

      return Day14dComponent;
    }();

    Day14dComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    Day14dComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-day14d',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./day14d.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/day14d/day14d.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./day14d.component.css */
      "./src/app/day14d/day14d.component.css")).default]
    })], Day14dComponent);
    /***/
  },

  /***/
  "./src/app/day14e/day14e.component.css":
  /*!*********************************************!*\
    !*** ./src/app/day14e/day14e.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDay14eDay14eComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#myVideo {\r\n  position: fixed;\r\n  right: 0;\r\n  top: -40px;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  z-index: -20;\r\n}\r\n.container-fluid{\r\n  overflow: hidden;\r\n}\r\n.btn-play{\r\n  background:none;\r\n  border:none;\r\n  opacity: 0.7;\r\n}\r\n.btn-play img{\r\n  width: 100px;\r\n}\r\n.btn-play:hover{\r\n  background:none;\r\n  border:none;\r\n  opacity: 1;\r\n}\r\n.botones{\r\n  text-align: right;\r\n  position: absolute;\r\n  right:2rem;\r\n  bottom:2rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF5MTRlL2RheTE0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixVQUFVO0VBQ1YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVO0FBQ1o7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2RheTE0ZS9kYXkxNGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNteVZpZGVvIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAtNDBweDtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAtMjA7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5idG4tcGxheXtcclxuICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcbi5idG4tcGxheSBpbWd7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcbi5idG4tcGxheTpob3ZlcntcclxuICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4uYm90b25lc3tcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6MnJlbTtcclxuICBib3R0b206MnJlbTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/day14e/day14e.component.ts":
  /*!********************************************!*\
    !*** ./src/app/day14e/day14e.component.ts ***!
    \********************************************/

  /*! exports provided: Day14eComponent */

  /***/
  function srcAppDay14eDay14eComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Day14eComponent", function () {
      return Day14eComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Day14eComponent =
    /*#__PURE__*/
    function () {
      function Day14eComponent(router) {
        _classCallCheck(this, Day14eComponent);

        this.router = router;
        this.nombregrupo = 'Ngäbe-Buglé';
        this.nombresimulador = 'Adventurer Mission | ';
        this.daynumber = '14'; //valor:number;

        this.valor = 150;
      }

      _createClass(Day14eComponent, [{
        key: "videoFin",
        value: function videoFin() {
          console.log("termino el video");
          this.router.navigateByUrl('/day14f');
        }
      }]);

      return Day14eComponent;
    }();

    Day14eComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    Day14eComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-day14e',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./day14e.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/day14e/day14e.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./day14e.component.css */
      "./src/app/day14e/day14e.component.css")).default]
    })], Day14eComponent);
    /***/
  },

  /***/
  "./src/app/day14f/day14f.component.css":
  /*!*********************************************!*\
    !*** ./src/app/day14f/day14f.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDay14fDay14fComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#myVideo {\r\n  position: fixed;\r\n  right: 0;\r\n  top:-40px;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  z-index: -20;\r\n}\r\n.container-fluid{\r\n  overflow: hidden;\r\n}\r\n.btn-play{\r\n  background:none;\r\n  border:none;\r\n  opacity: 0.7;\r\n}\r\n.btn-play img{\r\n  width: 100px;\r\n}\r\n.btn-play:hover{\r\n  background:none;\r\n  border:none;\r\n  opacity: 1;\r\n}\r\n.botones{\r\n  text-align: right;\r\n  position: absolute;\r\n  right:2rem;\r\n  bottom:2rem;\r\n}\r\n/*.coso-btn{\r\n  border: 2px solid black;\r\n  color: #000;\r\n  margin: 2rem;\r\n}\r\n.rutaActiva{\r\n  background-color: green;\r\n  color: #fff;\r\n  margin: 2rem;\r\n}*/\r\n/*  #myVideo {\r\n      position: fixed;\r\n      right: 0;\r\n      bottom: 0;\r\n      min-width: 100%;\r\n      min-height: 100%;\r\n}*/\r\n.entorno-pregunta{\r\n  padding-top: 4rem;\r\n  z-index: 40;\r\n  padding-bottom: 2rem;\r\n}\r\n.opciones{\r\n  /* border: 1px solid #000; */\r\n  border-radius: 5px;\r\n  background:none;\r\n  margin-top: 20px;\r\n  border:none;\r\n}\r\n/* .opciones:hover{\r\n  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.349);\r\n} */\r\n.texto-interno{\r\n  color: #80541b\r\n}\r\n.texto-interno:hover{\r\n  color: #000;\r\n  border-left: 1px solid #80541b;\r\n}\r\n/*ANIMACIONES*/\r\n.entorno-pregunta {\r\n  margin-top: 25px;\r\n  font-size: 21px;\r\n  text-align: center;\r\n\r\n  -webkit-animation: fadein 5s; /* Safari, Chrome and Opera > 12.1 */ /* Firefox < 16 */ /* Internet Explorer */ /* Opera < 12.1 */\r\n          animation: fadein 5s;\r\n}\r\n@keyframes fadein {\r\n  from { opacity: 0; }\r\n  to   { opacity: 1; }\r\n}\r\n/* Firefox < 16 */\r\n/* Safari, Chrome and Opera > 12.1 */\r\n@-webkit-keyframes fadein {\r\n  from { opacity: 0; }\r\n  to   { opacity: 1; }\r\n}\r\n/* Internet Explorer */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF5MTRmL2RheTE0Zi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVO0FBQ1o7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUVBOzs7Ozs7Ozs7RUFTRTtBQUVGOzs7Ozs7RUFNRTtBQUNGO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7QUFDQTs7R0FFRztBQUVIO0VBQ0U7QUFDRjtBQUNBO0VBQ0UsV0FBVztFQUNYLDhCQUE4QjtBQUNoQztBQUVBLGNBQWM7QUFDZDtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCOztFQUVsQiw0QkFBNEIsRUFBRSxvQ0FBb0MsRUFDcEMsaUJBQWlCLEVBQ2pCLHNCQUFzQixFQUN0QixpQkFBaUI7VUFDdkMsb0JBQW9CO0FBQzlCO0FBRUE7RUFDRSxPQUFPLFVBQVUsRUFBRTtFQUNuQixPQUFPLFVBQVUsRUFBRTtBQUNyQjtBQUVBLGlCQUFpQjtBQU1qQixvQ0FBb0M7QUFDcEM7RUFDRSxPQUFPLFVBQVUsRUFBRTtFQUNuQixPQUFPLFVBQVUsRUFBRTtBQUNyQjtBQUVBLHNCQUFzQiIsImZpbGUiOiJzcmMvYXBwL2RheTE0Zi9kYXkxNGYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNteVZpZGVvIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOi00MHB4O1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IC0yMDtcclxufVxyXG4uY29udGFpbmVyLWZsdWlke1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmJ0bi1wbGF5e1xyXG4gIGJhY2tncm91bmQ6bm9uZTtcclxuICBib3JkZXI6bm9uZTtcclxuICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuLmJ0bi1wbGF5IGltZ3tcclxuICB3aWR0aDogMTAwcHg7XHJcbn1cclxuLmJ0bi1wbGF5OmhvdmVye1xyXG4gIGJhY2tncm91bmQ6bm9uZTtcclxuICBib3JkZXI6bm9uZTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi5ib3RvbmVze1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDoycmVtO1xyXG4gIGJvdHRvbToycmVtO1xyXG59XHJcblxyXG4vKi5jb3NvLWJ0bntcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICBjb2xvcjogIzAwMDtcclxuICBtYXJnaW46IDJyZW07XHJcbn1cclxuLnJ1dGFBY3RpdmF7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luOiAycmVtO1xyXG59Ki9cclxuXHJcbi8qICAjbXlWaWRlbyB7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59Ki9cclxuLmVudG9ybm8tcHJlZ3VudGF7XHJcbiAgcGFkZGluZy10b3A6IDRyZW07XHJcbiAgei1pbmRleDogNDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XHJcbn1cclxuLm9wY2lvbmVze1xyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7ICovXHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQ6bm9uZTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGJvcmRlcjpub25lO1xyXG59XHJcbi8qIC5vcGNpb25lczpob3ZlcntcclxuICBib3gtc2hhZG93OiA0cHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMzQ5KTtcclxufSAqL1xyXG5cclxuLnRleHRvLWludGVybm97XHJcbiAgY29sb3I6ICM4MDU0MWJcclxufVxyXG4udGV4dG8taW50ZXJubzpob3ZlcntcclxuICBjb2xvcjogIzAwMDtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM4MDU0MWI7XHJcbn1cclxuXHJcbi8qQU5JTUFDSU9ORVMqL1xyXG4uZW50b3Juby1wcmVndW50YSB7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxuICBmb250LXNpemU6IDIxcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDVzOyAvKiBTYWZhcmksIENocm9tZSBhbmQgT3BlcmEgPiAxMi4xICovXHJcbiAgICAgLW1vei1hbmltYXRpb246IGZhZGVpbiA1czsgLyogRmlyZWZveCA8IDE2ICovXHJcbiAgICAgIC1tcy1hbmltYXRpb246IGZhZGVpbiA1czsgLyogSW50ZXJuZXQgRXhwbG9yZXIgKi9cclxuICAgICAgIC1vLWFuaW1hdGlvbjogZmFkZWluIDVzOyAvKiBPcGVyYSA8IDEyLjEgKi9cclxuICAgICAgICAgIGFuaW1hdGlvbjogZmFkZWluIDVzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XHJcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cclxuICB0byAgIHsgb3BhY2l0eTogMTsgfVxyXG59XHJcblxyXG4vKiBGaXJlZm94IDwgMTYgKi9cclxuQC1tb3ota2V5ZnJhbWVzIGZhZGVpbiB7XHJcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cclxuICB0byAgIHsgb3BhY2l0eTogMTsgfVxyXG59XHJcblxyXG4vKiBTYWZhcmksIENocm9tZSBhbmQgT3BlcmEgPiAxMi4xICovXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW4ge1xyXG4gIGZyb20geyBvcGFjaXR5OiAwOyB9XHJcbiAgdG8gICB7IG9wYWNpdHk6IDE7IH1cclxufVxyXG5cclxuLyogSW50ZXJuZXQgRXhwbG9yZXIgKi9cclxuQC1tcy1rZXlmcmFtZXMgZmFkZWluIHtcclxuICBmcm9tIHsgb3BhY2l0eTogMDsgfVxyXG4gIHRvICAgeyBvcGFjaXR5OiAxOyB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/day14f/day14f.component.ts":
  /*!********************************************!*\
    !*** ./src/app/day14f/day14f.component.ts ***!
    \********************************************/

  /*! exports provided: Day14fComponent */

  /***/
  function srcAppDay14fDay14fComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Day14fComponent", function () {
      return Day14fComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Day14fComponent = function Day14fComponent() {
      _classCallCheck(this, Day14fComponent);

      this.nombregrupo = 'Ngäbe-Buglé';
      this.nombresimulador = 'Adventurer Mission | ';
      this.daynumber = '14'; //valor:number;

      this.valor = 150;
    };

    Day14fComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-day14f',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./day14f.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/day14f/day14f.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./day14f.component.css */
      "./src/app/day14f/day14f.component.css")).default]
    })], Day14fComponent);
    /***/
  },

  /***/
  "./src/app/day14f0/day14f0.component.css":
  /*!***********************************************!*\
    !*** ./src/app/day14f0/day14f0.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDay14f0Day14f0ComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#myVideo {\r\n    position: fixed;\r\n    right: 0;\r\n    top: -40px;\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    z-index: -20;\r\n  }\r\n  .container-fluid{\r\n    overflow: hidden;\r\n  }\r\n  .btn-play{\r\n    background:none;\r\n    border:none;\r\n    opacity: 0.7;\r\n  }\r\n  .btn-play img{\r\n    width: 100px;\r\n  }\r\n  .btn-play:hover{\r\n    background:none;\r\n    border:none;\r\n    opacity: 1;\r\n  }\r\n  .botones{\r\n    text-align: right;\r\n    position: absolute;\r\n    right:2rem;\r\n    bottom:2rem;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF5MTRmMC9kYXkxNGYwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFVBQVU7SUFDVixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsV0FBVztJQUNYLFVBQVU7RUFDWjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvZGF5MTRmMC9kYXkxNGYwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbXlWaWRlbyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogLTQwcHg7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogLTIwO1xyXG4gIH1cclxuICAuY29udGFpbmVyLWZsdWlke1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgLmJ0bi1wbGF5e1xyXG4gICAgYmFja2dyb3VuZDpub25lO1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgfVxyXG4gIC5idG4tcGxheSBpbWd7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgfVxyXG4gIC5idG4tcGxheTpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6bm9uZTtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgLmJvdG9uZXN7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OjJyZW07XHJcbiAgICBib3R0b206MnJlbTtcclxuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/day14f0/day14f0.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/day14f0/day14f0.component.ts ***!
    \**********************************************/

  /*! exports provided: Day14f0Component */

  /***/
  function srcAppDay14f0Day14f0ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Day14f0Component", function () {
      return Day14f0Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Day14f0Component =
    /*#__PURE__*/
    function () {
      function Day14f0Component(router) {
        _classCallCheck(this, Day14f0Component);

        this.router = router;
      }

      _createClass(Day14f0Component, [{
        key: "videoFin",
        value: function videoFin() {
          console.log("termino el video");
          this.router.navigateByUrl('/day14f');
        }
      }]);

      return Day14f0Component;
    }();

    Day14f0Component.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    Day14f0Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-day14f0',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./day14f0.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/day14f0/day14f0.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./day14f0.component.css */
      "./src/app/day14f0/day14f0.component.css")).default]
    })], Day14f0Component);
    /***/
  },

  /***/
  "./src/app/day14g/day14g.component.css":
  /*!*********************************************!*\
    !*** ./src/app/day14g/day14g.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDay14gDay14gComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#myVideo {\r\n  position: fixed;\r\n  right: 0;\r\n  top: -40px;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  z-index: -20;\r\n}\r\n.container-fluid{\r\n  overflow: hidden;\r\n}\r\n.btn-play{\r\n  background:none;\r\n  border:none;\r\n  opacity: 0.7;\r\n}\r\n.btn-play img{\r\n  width: 100px;\r\n}\r\n.btn-play:hover{\r\n  background:none;\r\n  border:none;\r\n  opacity: 1;\r\n}\r\n.botones{\r\n  text-align: right;\r\n  position: absolute;\r\n  right:2rem;\r\n  bottom:2rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF5MTRnL2RheTE0Zy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixVQUFVO0VBQ1YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVO0FBQ1o7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2RheTE0Zy9kYXkxNGcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNteVZpZGVvIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAtNDBweDtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAtMjA7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5idG4tcGxheXtcclxuICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcbi5idG4tcGxheSBpbWd7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcbi5idG4tcGxheTpob3ZlcntcclxuICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4uYm90b25lc3tcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6MnJlbTtcclxuICBib3R0b206MnJlbTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/day14g/day14g.component.ts":
  /*!********************************************!*\
    !*** ./src/app/day14g/day14g.component.ts ***!
    \********************************************/

  /*! exports provided: Day14gComponent */

  /***/
  function srcAppDay14gDay14gComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Day14gComponent", function () {
      return Day14gComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Day14gComponent =
    /*#__PURE__*/
    function () {
      function Day14gComponent(router) {
        _classCallCheck(this, Day14gComponent);

        this.router = router;
        this.nombregrupo = 'Ngäbe-Buglé';
        this.nombresimulador = 'Adventurer Mission | ';
        this.daynumber = '14'; //valor:number;

        this.valor = 150;
      }

      _createClass(Day14gComponent, [{
        key: "videoFin",
        value: function videoFin() {
          console.log("termino el video");
          this.router.navigateByUrl('/day14h');
        }
      }]);

      return Day14gComponent;
    }();

    Day14gComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    Day14gComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-day14g',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./day14g.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/day14g/day14g.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./day14g.component.css */
      "./src/app/day14g/day14g.component.css")).default]
    })], Day14gComponent);
    /***/
  },

  /***/
  "./src/app/day14h/day14h.component.css":
  /*!*********************************************!*\
    !*** ./src/app/day14h/day14h.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDay14hDay14hComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#myVideo {\r\n  position: fixed;\r\n  right: 0;\r\n  top: -40px;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  z-index: -20;\r\n}\r\n.container-fluid{\r\n  overflow: hidden;\r\n}\r\n.btn-play{\r\n  background:none;\r\n  border:none;\r\n  opacity: 0.7;\r\n}\r\n.btn-play img{\r\n  width: 100px;\r\n}\r\n.btn-play:hover{\r\n  background:none;\r\n  border:none;\r\n  opacity: 1;\r\n}\r\n.botones{\r\n  text-align: right;\r\n  position: absolute;\r\n  right:2rem;\r\n  bottom:2rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF5MTRoL2RheTE0aC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixVQUFVO0VBQ1YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVO0FBQ1o7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2RheTE0aC9kYXkxNGguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNteVZpZGVvIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAtNDBweDtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAtMjA7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5idG4tcGxheXtcclxuICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcbi5idG4tcGxheSBpbWd7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcbi5idG4tcGxheTpob3ZlcntcclxuICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4uYm90b25lc3tcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6MnJlbTtcclxuICBib3R0b206MnJlbTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/day14h/day14h.component.ts":
  /*!********************************************!*\
    !*** ./src/app/day14h/day14h.component.ts ***!
    \********************************************/

  /*! exports provided: Day14hComponent */

  /***/
  function srcAppDay14hDay14hComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Day14hComponent", function () {
      return Day14hComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Day14hComponent =
    /*#__PURE__*/
    function () {
      function Day14hComponent(router) {
        _classCallCheck(this, Day14hComponent);

        this.router = router;
        this.nombregrupo = 'Ngäbe-Buglé';
        this.nombresimulador = 'Adventurer Mission | ';
        this.daynumber = '14'; //valor:number;

        this.valor = 150;
      }

      _createClass(Day14hComponent, [{
        key: "videoFin",
        value: function videoFin() {
          console.log("termino el video");
          this.router.navigateByUrl('/day14i');
        }
      }]);

      return Day14hComponent;
    }();

    Day14hComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    Day14hComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-day14h',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./day14h.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/day14h/day14h.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./day14h.component.css */
      "./src/app/day14h/day14h.component.css")).default]
    })], Day14hComponent);
    /***/
  },

  /***/
  "./src/app/day14i/day14i.component.css":
  /*!*********************************************!*\
    !*** ./src/app/day14i/day14i.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDay14iDay14iComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#myVideo {\r\n  position: fixed;\r\n  right: 0;\r\n  top:-40px;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  z-index: -20;\r\n}\r\n.container-fluid{\r\n  overflow: hidden;\r\n}\r\n.btn-play{\r\n  background:none;\r\n  border:none;\r\n  opacity: 0.7;\r\n}\r\n.btn-play img{\r\n  width: 100px;\r\n}\r\n.btn-play:hover{\r\n  background:none;\r\n  border:none;\r\n  opacity: 1;\r\n}\r\n.botones{\r\n  text-align: right;\r\n  position: absolute;\r\n  right:2rem;\r\n  bottom:2rem;\r\n}\r\n/*.coso-btn{\r\n  border: 2px solid black;\r\n  color: #000;\r\n  margin: 2rem;\r\n}\r\n.rutaActiva{\r\n  background-color: green;\r\n  color: #fff;\r\n  margin: 2rem;\r\n}*/\r\n/*  #myVideo {\r\n      position: fixed;\r\n      right: 0;\r\n      bottom: 0;\r\n      min-width: 100%;\r\n      min-height: 100%;\r\n}*/\r\n.entorno-pregunta{\r\n  padding-top: 4rem;\r\n  z-index: 40;\r\n  padding-bottom: 2rem;\r\n}\r\n.opciones{\r\n  /* border: 1px solid #000; */\r\n  border-radius: 5px;\r\n  background:none;\r\n  margin-top: 20px;\r\n  border:none;\r\n}\r\n/* .opciones:hover{\r\n  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.349);\r\n} */\r\n.texto-interno{\r\n  color: #80541b\r\n}\r\n.texto-interno:hover{\r\n  color: #000;\r\n  border-left: 1px solid #80541b;\r\n}\r\n/*ANIMACIONES*/\r\n.entorno-pregunta {\r\n  margin-top: 25px;\r\n  font-size: 21px;\r\n  text-align: center;\r\n\r\n  -webkit-animation: fadein 5s; /* Safari, Chrome and Opera > 12.1 */ /* Firefox < 16 */ /* Internet Explorer */ /* Opera < 12.1 */\r\n          animation: fadein 5s;\r\n}\r\n@keyframes fadein {\r\n  from { opacity: 0; }\r\n  to   { opacity: 1; }\r\n}\r\n/* Firefox < 16 */\r\n/* Safari, Chrome and Opera > 12.1 */\r\n@-webkit-keyframes fadein {\r\n  from { opacity: 0; }\r\n  to   { opacity: 1; }\r\n}\r\n/* Internet Explorer */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF5MTRpL2RheTE0aS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVO0FBQ1o7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUVBOzs7Ozs7Ozs7RUFTRTtBQUVGOzs7Ozs7RUFNRTtBQUNGO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7QUFDQTs7R0FFRztBQUVIO0VBQ0U7QUFDRjtBQUNBO0VBQ0UsV0FBVztFQUNYLDhCQUE4QjtBQUNoQztBQUVBLGNBQWM7QUFDZDtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCOztFQUVsQiw0QkFBNEIsRUFBRSxvQ0FBb0MsRUFDcEMsaUJBQWlCLEVBQ2pCLHNCQUFzQixFQUN0QixpQkFBaUI7VUFDdkMsb0JBQW9CO0FBQzlCO0FBRUE7RUFDRSxPQUFPLFVBQVUsRUFBRTtFQUNuQixPQUFPLFVBQVUsRUFBRTtBQUNyQjtBQUVBLGlCQUFpQjtBQU1qQixvQ0FBb0M7QUFDcEM7RUFDRSxPQUFPLFVBQVUsRUFBRTtFQUNuQixPQUFPLFVBQVUsRUFBRTtBQUNyQjtBQUVBLHNCQUFzQiIsImZpbGUiOiJzcmMvYXBwL2RheTE0aS9kYXkxNGkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNteVZpZGVvIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOi00MHB4O1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IC0yMDtcclxufVxyXG4uY29udGFpbmVyLWZsdWlke1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmJ0bi1wbGF5e1xyXG4gIGJhY2tncm91bmQ6bm9uZTtcclxuICBib3JkZXI6bm9uZTtcclxuICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuLmJ0bi1wbGF5IGltZ3tcclxuICB3aWR0aDogMTAwcHg7XHJcbn1cclxuLmJ0bi1wbGF5OmhvdmVye1xyXG4gIGJhY2tncm91bmQ6bm9uZTtcclxuICBib3JkZXI6bm9uZTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi5ib3RvbmVze1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDoycmVtO1xyXG4gIGJvdHRvbToycmVtO1xyXG59XHJcblxyXG4vKi5jb3NvLWJ0bntcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICBjb2xvcjogIzAwMDtcclxuICBtYXJnaW46IDJyZW07XHJcbn1cclxuLnJ1dGFBY3RpdmF7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luOiAycmVtO1xyXG59Ki9cclxuXHJcbi8qICAjbXlWaWRlbyB7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59Ki9cclxuLmVudG9ybm8tcHJlZ3VudGF7XHJcbiAgcGFkZGluZy10b3A6IDRyZW07XHJcbiAgei1pbmRleDogNDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi5vcGNpb25lc3tcclxuICAvKiBib3JkZXI6IDFweCBzb2xpZCAjMDAwOyAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBib3JkZXI6bm9uZTtcclxufVxyXG4vKiAub3BjaW9uZXM6aG92ZXJ7XHJcbiAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjM0OSk7XHJcbn0gKi9cclxuXHJcbi50ZXh0by1pbnRlcm5ve1xyXG4gIGNvbG9yOiAjODA1NDFiXHJcbn1cclxuLnRleHRvLWludGVybm86aG92ZXJ7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjODA1NDFiO1xyXG59XHJcblxyXG4vKkFOSU1BQ0lPTkVTKi9cclxuLmVudG9ybm8tcHJlZ3VudGEge1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgZm9udC1zaXplOiAyMXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiA1czsgLyogU2FmYXJpLCBDaHJvbWUgYW5kIE9wZXJhID4gMTIuMSAqL1xyXG4gICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlaW4gNXM7IC8qIEZpcmVmb3ggPCAxNiAqL1xyXG4gICAgICAtbXMtYW5pbWF0aW9uOiBmYWRlaW4gNXM7IC8qIEludGVybmV0IEV4cGxvcmVyICovXHJcbiAgICAgICAtby1hbmltYXRpb246IGZhZGVpbiA1czsgLyogT3BlcmEgPCAxMi4xICovXHJcbiAgICAgICAgICBhbmltYXRpb246IGZhZGVpbiA1cztcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlaW4ge1xyXG4gIGZyb20geyBvcGFjaXR5OiAwOyB9XHJcbiAgdG8gICB7IG9wYWNpdHk6IDE7IH1cclxufVxyXG5cclxuLyogRmlyZWZveCA8IDE2ICovXHJcbkAtbW96LWtleWZyYW1lcyBmYWRlaW4ge1xyXG4gIGZyb20geyBvcGFjaXR5OiAwOyB9XHJcbiAgdG8gICB7IG9wYWNpdHk6IDE7IH1cclxufVxyXG5cclxuLyogU2FmYXJpLCBDaHJvbWUgYW5kIE9wZXJhID4gMTIuMSAqL1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHtcclxuICBmcm9tIHsgb3BhY2l0eTogMDsgfVxyXG4gIHRvICAgeyBvcGFjaXR5OiAxOyB9XHJcbn1cclxuXHJcbi8qIEludGVybmV0IEV4cGxvcmVyICovXHJcbkAtbXMta2V5ZnJhbWVzIGZhZGVpbiB7XHJcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cclxuICB0byAgIHsgb3BhY2l0eTogMTsgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/day14i/day14i.component.ts":
  /*!********************************************!*\
    !*** ./src/app/day14i/day14i.component.ts ***!
    \********************************************/

  /*! exports provided: Day14iComponent */

  /***/
  function srcAppDay14iDay14iComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Day14iComponent", function () {
      return Day14iComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Day14iComponent = function Day14iComponent() {
      _classCallCheck(this, Day14iComponent);

      this.nombregrupo = 'Ngäbe-Buglé';
      this.nombresimulador = 'Adventurer Mission | ';
      this.daynumber = '14'; //valor:number;

      this.valor = 150;
    };

    Day14iComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-day14i',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./day14i.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/day14i/day14i.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./day14i.component.css */
      "./src/app/day14i/day14i.component.css")).default]
    })], Day14iComponent);
    /***/
  },

  /***/
  "./src/app/day14i0/day14i0.component.css":
  /*!***********************************************!*\
    !*** ./src/app/day14i0/day14i0.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDay14i0Day14i0ComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#myVideo {\r\n    position: fixed;\r\n    right: 0;\r\n    top: -40px;\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    z-index: -20;\r\n  }\r\n  .container-fluid{\r\n    overflow: hidden;\r\n  }\r\n  .btn-play{\r\n    background:none;\r\n    border:none;\r\n    opacity: 0.7;\r\n  }\r\n  .btn-play img{\r\n    width: 100px;\r\n  }\r\n  .btn-play:hover{\r\n    background:none;\r\n    border:none;\r\n    opacity: 1;\r\n  }\r\n  .botones{\r\n    text-align: right;\r\n    position: absolute;\r\n    right:2rem;\r\n    bottom:2rem;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF5MTRpMC9kYXkxNGkwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFVBQVU7SUFDVixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsV0FBVztJQUNYLFVBQVU7RUFDWjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvZGF5MTRpMC9kYXkxNGkwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbXlWaWRlbyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogLTQwcHg7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogLTIwO1xyXG4gIH1cclxuICAuY29udGFpbmVyLWZsdWlke1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgLmJ0bi1wbGF5e1xyXG4gICAgYmFja2dyb3VuZDpub25lO1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgfVxyXG4gIC5idG4tcGxheSBpbWd7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgfVxyXG4gIC5idG4tcGxheTpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6bm9uZTtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgLmJvdG9uZXN7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OjJyZW07XHJcbiAgICBib3R0b206MnJlbTtcclxuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/day14i0/day14i0.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/day14i0/day14i0.component.ts ***!
    \**********************************************/

  /*! exports provided: Day14i0Component */

  /***/
  function srcAppDay14i0Day14i0ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Day14i0Component", function () {
      return Day14i0Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Day14i0Component =
    /*#__PURE__*/
    function () {
      function Day14i0Component(router) {
        _classCallCheck(this, Day14i0Component);

        this.router = router;
      }

      _createClass(Day14i0Component, [{
        key: "videoFin",
        value: function videoFin() {
          console.log("termino el video");
          this.router.navigateByUrl('/day14i');
        }
      }]);

      return Day14i0Component;
    }();

    Day14i0Component.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    Day14i0Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-day14i0',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./day14i0.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/day14i0/day14i0.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./day14i0.component.css */
      "./src/app/day14i0/day14i0.component.css")).default]
    })], Day14i0Component);
    /***/
  },

  /***/
  "./src/app/day14j/day14j.component.css":
  /*!*********************************************!*\
    !*** ./src/app/day14j/day14j.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDay14jDay14jComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#myVideo {\r\n  position: fixed;\r\n  right: 0;\r\n  top: -40px;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  z-index: -20;\r\n}\r\n.container-fluid{\r\n  overflow: hidden;\r\n}\r\n.btn-play{\r\n  background:none;\r\n  border:none;\r\n  opacity: 0.7;\r\n}\r\n.btn-play img{\r\n  width: 100px;\r\n}\r\n.btn-play:hover{\r\n  background:none;\r\n  border:none;\r\n  opacity: 1;\r\n}\r\n.botones{\r\n  text-align: right;\r\n  position: absolute;\r\n  right:2rem;\r\n  bottom:2rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF5MTRqL2RheTE0ai5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixVQUFVO0VBQ1YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVO0FBQ1o7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2RheTE0ai9kYXkxNGouY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNteVZpZGVvIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAtNDBweDtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAtMjA7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5idG4tcGxheXtcclxuICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcbi5idG4tcGxheSBpbWd7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcbi5idG4tcGxheTpob3ZlcntcclxuICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4uYm90b25lc3tcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6MnJlbTtcclxuICBib3R0b206MnJlbTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/day14j/day14j.component.ts":
  /*!********************************************!*\
    !*** ./src/app/day14j/day14j.component.ts ***!
    \********************************************/

  /*! exports provided: Day14jComponent */

  /***/
  function srcAppDay14jDay14jComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Day14jComponent", function () {
      return Day14jComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Day14jComponent =
    /*#__PURE__*/
    function () {
      function Day14jComponent(router) {
        _classCallCheck(this, Day14jComponent);

        this.router = router;
        this.nombregrupo = 'Ngäbe-Buglé';
        this.nombresimulador = 'Adventurer Mission | ';
        this.daynumber = '14'; //valor:number;

        this.valor = 150;
      }

      _createClass(Day14jComponent, [{
        key: "videoFin",
        value: function videoFin() {
          console.log("termino el video");
          this.router.navigateByUrl('/day14k');
        }
      }]);

      return Day14jComponent;
    }();

    Day14jComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    Day14jComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-day14j',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./day14j.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/day14j/day14j.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./day14j.component.css */
      "./src/app/day14j/day14j.component.css")).default]
    })], Day14jComponent);
    /***/
  },

  /***/
  "./src/app/day14k/day14k.component.css":
  /*!*********************************************!*\
    !*** ./src/app/day14k/day14k.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDay14kDay14kComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#myVideo {\r\n  position: fixed;\r\n  right: 0;\r\n  top: -40px;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  z-index: -20;\r\n}\r\n.container-fluid{\r\n  overflow: hidden;\r\n}\r\n.btn-play{\r\n  background:none;\r\n  border:none;\r\n  opacity: 0.7;\r\n}\r\n.btn-play img{\r\n  width: 100px;\r\n}\r\n.btn-play:hover{\r\n  background:none;\r\n  border:none;\r\n  opacity: 1;\r\n}\r\n.botones{\r\n  text-align: right;\r\n  position: absolute;\r\n  right:2rem;\r\n  bottom:2rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF5MTRrL2RheTE0ay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixVQUFVO0VBQ1YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVO0FBQ1o7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2RheTE0ay9kYXkxNGsuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNteVZpZGVvIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAtNDBweDtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAtMjA7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5idG4tcGxheXtcclxuICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcbi5idG4tcGxheSBpbWd7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcbi5idG4tcGxheTpob3ZlcntcclxuICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4uYm90b25lc3tcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6MnJlbTtcclxuICBib3R0b206MnJlbTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/day14k/day14k.component.ts":
  /*!********************************************!*\
    !*** ./src/app/day14k/day14k.component.ts ***!
    \********************************************/

  /*! exports provided: Day14kComponent */

  /***/
  function srcAppDay14kDay14kComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Day14kComponent", function () {
      return Day14kComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Day14kComponent =
    /*#__PURE__*/
    function () {
      function Day14kComponent(router) {
        _classCallCheck(this, Day14kComponent);

        this.router = router;
        this.nombregrupo = 'Ngäbe-Buglé';
        this.nombresimulador = 'Adventurer Mission | ';
        this.daynumber = '14'; //valor:number;

        this.valor = 150;
      }

      _createClass(Day14kComponent, [{
        key: "videoFin",
        value: function videoFin() {
          console.log("termino el video");
          this.router.navigateByUrl('/day14l');
        }
      }]);

      return Day14kComponent;
    }();

    Day14kComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    Day14kComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-day14k',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./day14k.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/day14k/day14k.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./day14k.component.css */
      "./src/app/day14k/day14k.component.css")).default]
    })], Day14kComponent);
    /***/
  },

  /***/
  "./src/app/day14l/day14l.component.css":
  /*!*********************************************!*\
    !*** ./src/app/day14l/day14l.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDay14lDay14lComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#myVideo {\r\n  position: fixed;\r\n  right: 0;\r\n  top:-40px;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  z-index: -20;\r\n}\r\n.container-fluid{\r\n  overflow: hidden;\r\n}\r\n.btn-play{\r\n  background:none;\r\n  border:none;\r\n  opacity: 0.7;\r\n}\r\n.btn-play img{\r\n  width: 100px;\r\n}\r\n.btn-play:hover{\r\n  background:none;\r\n  border:none;\r\n  opacity: 1;\r\n}\r\n.botones{\r\n  text-align: right;\r\n  position: absolute;\r\n  right:2rem;\r\n  bottom:2rem;\r\n}\r\n/*.coso-btn{\r\n  border: 2px solid black;\r\n  color: #000;\r\n  margin: 2rem;\r\n}\r\n.rutaActiva{\r\n  background-color: green;\r\n  color: #fff;\r\n  margin: 2rem;\r\n}*/\r\n/*  #myVideo {\r\n      position: fixed;\r\n      right: 0;\r\n      bottom: 0;\r\n      min-width: 100%;\r\n      min-height: 100%;\r\n}*/\r\n.entorno-pregunta{\r\n  padding-top: 4rem;\r\n  z-index: 40;\r\n  padding-bottom: 2rem;\r\n}\r\n.opciones{\r\n  /* border: 1px solid #000; */\r\n  border-radius: 5px;\r\n  background:none;\r\n  margin-top: 20px;\r\n  border:none;\r\n}\r\n/* .opciones:hover{\r\n  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.349);\r\n} */\r\n.texto-interno{\r\n  color: #80541b\r\n}\r\n.texto-interno:hover{\r\n  color: #000;\r\n  border-left: 1px solid #80541b;\r\n}\r\n/*ANIMACIONES*/\r\n.entorno-pregunta {\r\n  margin-top: 25px;\r\n  font-size: 21px;\r\n  text-align: center;\r\n\r\n  -webkit-animation: fadein 5s; /* Safari, Chrome and Opera > 12.1 */ /* Firefox < 16 */ /* Internet Explorer */ /* Opera < 12.1 */\r\n          animation: fadein 5s;\r\n}\r\n@keyframes fadein {\r\n  from { opacity: 0; }\r\n  to   { opacity: 1; }\r\n}\r\n/* Firefox < 16 */\r\n/* Safari, Chrome and Opera > 12.1 */\r\n@-webkit-keyframes fadein {\r\n  from { opacity: 0; }\r\n  to   { opacity: 1; }\r\n}\r\n/* Internet Explorer */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF5MTRsL2RheTE0bC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVO0FBQ1o7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUVBOzs7Ozs7Ozs7RUFTRTtBQUVGOzs7Ozs7RUFNRTtBQUNGO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7QUFDQTs7R0FFRztBQUVIO0VBQ0U7QUFDRjtBQUNBO0VBQ0UsV0FBVztFQUNYLDhCQUE4QjtBQUNoQztBQUVBLGNBQWM7QUFDZDtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCOztFQUVsQiw0QkFBNEIsRUFBRSxvQ0FBb0MsRUFDcEMsaUJBQWlCLEVBQ2pCLHNCQUFzQixFQUN0QixpQkFBaUI7VUFDdkMsb0JBQW9CO0FBQzlCO0FBRUE7RUFDRSxPQUFPLFVBQVUsRUFBRTtFQUNuQixPQUFPLFVBQVUsRUFBRTtBQUNyQjtBQUVBLGlCQUFpQjtBQU1qQixvQ0FBb0M7QUFDcEM7RUFDRSxPQUFPLFVBQVUsRUFBRTtFQUNuQixPQUFPLFVBQVUsRUFBRTtBQUNyQjtBQUVBLHNCQUFzQiIsImZpbGUiOiJzcmMvYXBwL2RheTE0bC9kYXkxNGwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNteVZpZGVvIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOi00MHB4O1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IC0yMDtcclxufVxyXG4uY29udGFpbmVyLWZsdWlke1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmJ0bi1wbGF5e1xyXG4gIGJhY2tncm91bmQ6bm9uZTtcclxuICBib3JkZXI6bm9uZTtcclxuICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuLmJ0bi1wbGF5IGltZ3tcclxuICB3aWR0aDogMTAwcHg7XHJcbn1cclxuLmJ0bi1wbGF5OmhvdmVye1xyXG4gIGJhY2tncm91bmQ6bm9uZTtcclxuICBib3JkZXI6bm9uZTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi5ib3RvbmVze1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDoycmVtO1xyXG4gIGJvdHRvbToycmVtO1xyXG59XHJcblxyXG4vKi5jb3NvLWJ0bntcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICBjb2xvcjogIzAwMDtcclxuICBtYXJnaW46IDJyZW07XHJcbn1cclxuLnJ1dGFBY3RpdmF7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luOiAycmVtO1xyXG59Ki9cclxuXHJcbi8qICAjbXlWaWRlbyB7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59Ki9cclxuLmVudG9ybm8tcHJlZ3VudGF7XHJcbiAgcGFkZGluZy10b3A6IDRyZW07XHJcbiAgei1pbmRleDogNDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi5vcGNpb25lc3tcclxuICAvKiBib3JkZXI6IDFweCBzb2xpZCAjMDAwOyAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBib3JkZXI6bm9uZTtcclxufVxyXG4vKiAub3BjaW9uZXM6aG92ZXJ7XHJcbiAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjM0OSk7XHJcbn0gKi9cclxuXHJcbi50ZXh0by1pbnRlcm5ve1xyXG4gIGNvbG9yOiAjODA1NDFiXHJcbn1cclxuLnRleHRvLWludGVybm86aG92ZXJ7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjODA1NDFiO1xyXG59XHJcblxyXG4vKkFOSU1BQ0lPTkVTKi9cclxuLmVudG9ybm8tcHJlZ3VudGEge1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgZm9udC1zaXplOiAyMXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiA1czsgLyogU2FmYXJpLCBDaHJvbWUgYW5kIE9wZXJhID4gMTIuMSAqL1xyXG4gICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlaW4gNXM7IC8qIEZpcmVmb3ggPCAxNiAqL1xyXG4gICAgICAtbXMtYW5pbWF0aW9uOiBmYWRlaW4gNXM7IC8qIEludGVybmV0IEV4cGxvcmVyICovXHJcbiAgICAgICAtby1hbmltYXRpb246IGZhZGVpbiA1czsgLyogT3BlcmEgPCAxMi4xICovXHJcbiAgICAgICAgICBhbmltYXRpb246IGZhZGVpbiA1cztcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlaW4ge1xyXG4gIGZyb20geyBvcGFjaXR5OiAwOyB9XHJcbiAgdG8gICB7IG9wYWNpdHk6IDE7IH1cclxufVxyXG5cclxuLyogRmlyZWZveCA8IDE2ICovXHJcbkAtbW96LWtleWZyYW1lcyBmYWRlaW4ge1xyXG4gIGZyb20geyBvcGFjaXR5OiAwOyB9XHJcbiAgdG8gICB7IG9wYWNpdHk6IDE7IH1cclxufVxyXG5cclxuLyogU2FmYXJpLCBDaHJvbWUgYW5kIE9wZXJhID4gMTIuMSAqL1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHtcclxuICBmcm9tIHsgb3BhY2l0eTogMDsgfVxyXG4gIHRvICAgeyBvcGFjaXR5OiAxOyB9XHJcbn1cclxuXHJcbi8qIEludGVybmV0IEV4cGxvcmVyICovXHJcbkAtbXMta2V5ZnJhbWVzIGZhZGVpbiB7XHJcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cclxuICB0byAgIHsgb3BhY2l0eTogMTsgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/day14l/day14l.component.ts":
  /*!********************************************!*\
    !*** ./src/app/day14l/day14l.component.ts ***!
    \********************************************/

  /*! exports provided: Day14lComponent */

  /***/
  function srcAppDay14lDay14lComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Day14lComponent", function () {
      return Day14lComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Day14lComponent = function Day14lComponent() {
      _classCallCheck(this, Day14lComponent);

      this.nombregrupo = 'Ngäbe-Buglé';
      this.nombresimulador = 'Adventurer Mission | ';
      this.daynumber = '14'; //valor:number;

      this.valor = 150;
    };

    Day14lComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-day14l',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./day14l.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/day14l/day14l.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./day14l.component.css */
      "./src/app/day14l/day14l.component.css")).default]
    })], Day14lComponent);
    /***/
  },

  /***/
  "./src/app/day14l0/day14l0.component.css":
  /*!***********************************************!*\
    !*** ./src/app/day14l0/day14l0.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDay14l0Day14l0ComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#myVideo {\r\n    position: fixed;\r\n    right: 0;\r\n    top: -40px;\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    z-index: -20;\r\n  }\r\n  .container-fluid{\r\n    overflow: hidden;\r\n  }\r\n  .btn-play{\r\n    background:none;\r\n    border:none;\r\n    opacity: 0.7;\r\n  }\r\n  .btn-play img{\r\n    width: 100px;\r\n  }\r\n  .btn-play:hover{\r\n    background:none;\r\n    border:none;\r\n    opacity: 1;\r\n  }\r\n  .botones{\r\n    text-align: right;\r\n    position: absolute;\r\n    right:2rem;\r\n    bottom:2rem;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF5MTRsMC9kYXkxNGwwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFVBQVU7SUFDVixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsV0FBVztJQUNYLFVBQVU7RUFDWjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvZGF5MTRsMC9kYXkxNGwwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbXlWaWRlbyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogLTQwcHg7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogLTIwO1xyXG4gIH1cclxuICAuY29udGFpbmVyLWZsdWlke1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgLmJ0bi1wbGF5e1xyXG4gICAgYmFja2dyb3VuZDpub25lO1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgfVxyXG4gIC5idG4tcGxheSBpbWd7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgfVxyXG4gIC5idG4tcGxheTpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6bm9uZTtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgLmJvdG9uZXN7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OjJyZW07XHJcbiAgICBib3R0b206MnJlbTtcclxuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/day14l0/day14l0.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/day14l0/day14l0.component.ts ***!
    \**********************************************/

  /*! exports provided: Day14l0Component */

  /***/
  function srcAppDay14l0Day14l0ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Day14l0Component", function () {
      return Day14l0Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Day14l0Component =
    /*#__PURE__*/
    function () {
      function Day14l0Component(router) {
        _classCallCheck(this, Day14l0Component);

        this.router = router;
      }

      _createClass(Day14l0Component, [{
        key: "videoFin",
        value: function videoFin() {
          console.log("termino el video");
          this.router.navigateByUrl('/day14l');
        }
      }]);

      return Day14l0Component;
    }();

    Day14l0Component.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    Day14l0Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-day14l0',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./day14l0.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/day14l0/day14l0.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./day14l0.component.css */
      "./src/app/day14l0/day14l0.component.css")).default]
    })], Day14l0Component);
    /***/
  },

  /***/
  "./src/app/day14m/day14m.component.css":
  /*!*********************************************!*\
    !*** ./src/app/day14m/day14m.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDay14mDay14mComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#myVideo {\r\n  position: fixed;\r\n  right: 0;\r\n  top: -40px;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  z-index: -20;\r\n}\r\n.container-fluid{\r\n  overflow: hidden;\r\n}\r\n.btn-play{\r\n  background:none;\r\n  border:none;\r\n  opacity: 0.7;\r\n}\r\n.btn-play img{\r\n  width: 100px;\r\n}\r\n.btn-play:hover{\r\n  background:none;\r\n  border:none;\r\n  opacity: 1;\r\n}\r\n.botones{\r\n  text-align: right;\r\n  position: absolute;\r\n  right:2rem;\r\n  bottom:2rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF5MTRtL2RheTE0bS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixVQUFVO0VBQ1YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVO0FBQ1o7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2RheTE0bS9kYXkxNG0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNteVZpZGVvIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAtNDBweDtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAtMjA7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5idG4tcGxheXtcclxuICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcbi5idG4tcGxheSBpbWd7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcbi5idG4tcGxheTpob3ZlcntcclxuICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4uYm90b25lc3tcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6MnJlbTtcclxuICBib3R0b206MnJlbTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/day14m/day14m.component.ts":
  /*!********************************************!*\
    !*** ./src/app/day14m/day14m.component.ts ***!
    \********************************************/

  /*! exports provided: Day14mComponent */

  /***/
  function srcAppDay14mDay14mComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Day14mComponent", function () {
      return Day14mComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Day14mComponent =
    /*#__PURE__*/
    function () {
      function Day14mComponent(router) {
        _classCallCheck(this, Day14mComponent);

        this.router = router;
        this.nombregrupo = 'Ngäbe-Buglé';
        this.nombresimulador = 'Adventurer Mission | ';
        this.daynumber = '14'; //valor:number;

        this.valor = 150;
      }

      _createClass(Day14mComponent, [{
        key: "videoFin",
        value: function videoFin() {
          console.log("termino el video");
          this.router.navigateByUrl('/day14n');
        }
      }]);

      return Day14mComponent;
    }();

    Day14mComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    Day14mComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-day14m',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./day14m.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/day14m/day14m.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./day14m.component.css */
      "./src/app/day14m/day14m.component.css")).default]
    })], Day14mComponent);
    /***/
  },

  /***/
  "./src/app/day14n/day14n.component.css":
  /*!*********************************************!*\
    !*** ./src/app/day14n/day14n.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDay14nDay14nComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#myVideo {\r\n  position: fixed;\r\n  right: 0;\r\n  top: -40px;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  z-index: -20;\r\n}\r\n.container-fluid{\r\n  overflow: hidden;\r\n}\r\n.btn-play{\r\n  background:none;\r\n  border:none;\r\n  opacity: 0.7;\r\n}\r\n.btn-play img{\r\n  width: 100px;\r\n}\r\n.btn-play:hover{\r\n  background:none;\r\n  border:none;\r\n  opacity: 1;\r\n}\r\n.botones{\r\n  text-align: right;\r\n  position: absolute;\r\n  right:2rem;\r\n  bottom:2rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF5MTRuL2RheTE0bi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixVQUFVO0VBQ1YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVO0FBQ1o7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2RheTE0bi9kYXkxNG4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNteVZpZGVvIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAtNDBweDtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAtMjA7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5idG4tcGxheXtcclxuICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcbi5idG4tcGxheSBpbWd7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcbi5idG4tcGxheTpob3ZlcntcclxuICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4uYm90b25lc3tcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6MnJlbTtcclxuICBib3R0b206MnJlbTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/day14n/day14n.component.ts":
  /*!********************************************!*\
    !*** ./src/app/day14n/day14n.component.ts ***!
    \********************************************/

  /*! exports provided: Day14nComponent */

  /***/
  function srcAppDay14nDay14nComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Day14nComponent", function () {
      return Day14nComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Day14nComponent =
    /*#__PURE__*/
    function () {
      function Day14nComponent(router) {
        _classCallCheck(this, Day14nComponent);

        this.router = router;
        this.nombregrupo = 'Ngäbe-Buglé';
        this.nombresimulador = 'Adventurer Mission | ';
        this.daynumber = '14'; //valor:number;

        this.valor = 150;
      }

      _createClass(Day14nComponent, [{
        key: "videoFin",
        value: function videoFin() {
          console.log("termino el video");
          this.router.navigateByUrl('/day14o');
        }
      }]);

      return Day14nComponent;
    }();

    Day14nComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    Day14nComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-day14n',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./day14n.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/day14n/day14n.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./day14n.component.css */
      "./src/app/day14n/day14n.component.css")).default]
    })], Day14nComponent);
    /***/
  },

  /***/
  "./src/app/day14o/day14o.component.css":
  /*!*********************************************!*\
    !*** ./src/app/day14o/day14o.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDay14oDay14oComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#myVideo {\r\n  position: fixed;\r\n  right: 0;\r\n  top: -40px;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  z-index: -20;\r\n}\r\n.container-fluid{\r\n  overflow: hidden;\r\n}\r\n.btn-play{\r\n  background:none;\r\n  border:none;\r\n  opacity: 0.7;\r\n}\r\n.btn-play img{\r\n  width: 100px;\r\n}\r\n.btn-play:hover{\r\n  background:none;\r\n  border:none;\r\n  opacity: 1;\r\n}\r\n.botones{\r\n  text-align: right;\r\n  position: absolute;\r\n  right:2rem;\r\n  bottom:2rem;\r\n}\r\n/*.coso-btn{\r\n  border: 2px solid black;\r\n  color: #000;\r\n  margin: 2rem;\r\n}\r\n.rutaActiva{\r\n  background-color: green;\r\n  color: #fff;\r\n  margin: 2rem;\r\n}*/\r\n/*  #myVideo {\r\n      position: fixed;\r\n      right: 0;\r\n      bottom: 0;\r\n      min-width: 100%;\r\n      min-height: 100%;\r\n}*/\r\n.entorno-pregunta{\r\n  padding-top: 4rem;\r\n  z-index: 40;\r\n  padding-bottom: 2rem;\r\n}\r\n.opciones{\r\n  /* border: 1px solid #000; */\r\n  border-radius: 5px;\r\n  background:none;\r\n  margin-top: 20px;\r\n  border:none;\r\n}\r\n/* .opciones:hover{\r\n  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.349);\r\n} */\r\n.texto-interno{\r\n  color: #80541b\r\n}\r\n.texto-interno:hover{\r\n  color: #000;\r\n  border-left: 1px solid #80541b;\r\n}\r\n/*ANIMACIONES*/\r\n.entorno-pregunta {\r\n  margin-top: 25px;\r\n  font-size: 21px;\r\n  text-align: center;\r\n\r\n  -webkit-animation: fadein 5s; /* Safari, Chrome and Opera > 12.1 */ /* Firefox < 16 */ /* Internet Explorer */ /* Opera < 12.1 */\r\n          animation: fadein 5s;\r\n}\r\n@keyframes fadein {\r\n  from { opacity: 0; }\r\n  to   { opacity: 1; }\r\n}\r\n/* Firefox < 16 */\r\n/* Safari, Chrome and Opera > 12.1 */\r\n@-webkit-keyframes fadein {\r\n  from { opacity: 0; }\r\n  to   { opacity: 1; }\r\n}\r\n/* Internet Explorer */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF5MTRvL2RheTE0by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixVQUFVO0VBQ1YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVO0FBQ1o7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUVBOzs7Ozs7Ozs7RUFTRTtBQUVGOzs7Ozs7RUFNRTtBQUNGO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7QUFDQTs7R0FFRztBQUVIO0VBQ0U7QUFDRjtBQUNBO0VBQ0UsV0FBVztFQUNYLDhCQUE4QjtBQUNoQztBQUVBLGNBQWM7QUFDZDtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCOztFQUVsQiw0QkFBNEIsRUFBRSxvQ0FBb0MsRUFDcEMsaUJBQWlCLEVBQ2pCLHNCQUFzQixFQUN0QixpQkFBaUI7VUFDdkMsb0JBQW9CO0FBQzlCO0FBRUE7RUFDRSxPQUFPLFVBQVUsRUFBRTtFQUNuQixPQUFPLFVBQVUsRUFBRTtBQUNyQjtBQUVBLGlCQUFpQjtBQU1qQixvQ0FBb0M7QUFDcEM7RUFDRSxPQUFPLFVBQVUsRUFBRTtFQUNuQixPQUFPLFVBQVUsRUFBRTtBQUNyQjtBQUVBLHNCQUFzQiIsImZpbGUiOiJzcmMvYXBwL2RheTE0by9kYXkxNG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNteVZpZGVvIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAtNDBweDtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAtMjA7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5idG4tcGxheXtcclxuICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcbi5idG4tcGxheSBpbWd7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcbi5idG4tcGxheTpob3ZlcntcclxuICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4uYm90b25lc3tcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6MnJlbTtcclxuICBib3R0b206MnJlbTtcclxufVxyXG5cclxuLyouY29zby1idG57XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgbWFyZ2luOiAycmVtO1xyXG59XHJcbi5ydXRhQWN0aXZhe1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbjogMnJlbTtcclxufSovXHJcblxyXG4vKiAgI215VmlkZW8ge1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgbWluLWhlaWdodDogMTAwJTtcclxufSovXHJcbi5lbnRvcm5vLXByZWd1bnRhe1xyXG4gIHBhZGRpbmctdG9wOiA0cmVtO1xyXG4gIHotaW5kZXg6IDQwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xyXG59XHJcbi5vcGNpb25lc3tcclxuICAvKiBib3JkZXI6IDFweCBzb2xpZCAjMDAwOyAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBib3JkZXI6bm9uZTtcclxufVxyXG4vKiAub3BjaW9uZXM6aG92ZXJ7XHJcbiAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjM0OSk7XHJcbn0gKi9cclxuXHJcbi50ZXh0by1pbnRlcm5ve1xyXG4gIGNvbG9yOiAjODA1NDFiXHJcbn1cclxuLnRleHRvLWludGVybm86aG92ZXJ7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjODA1NDFiO1xyXG59XHJcblxyXG4vKkFOSU1BQ0lPTkVTKi9cclxuLmVudG9ybm8tcHJlZ3VudGEge1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgZm9udC1zaXplOiAyMXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiA1czsgLyogU2FmYXJpLCBDaHJvbWUgYW5kIE9wZXJhID4gMTIuMSAqL1xyXG4gICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlaW4gNXM7IC8qIEZpcmVmb3ggPCAxNiAqL1xyXG4gICAgICAtbXMtYW5pbWF0aW9uOiBmYWRlaW4gNXM7IC8qIEludGVybmV0IEV4cGxvcmVyICovXHJcbiAgICAgICAtby1hbmltYXRpb246IGZhZGVpbiA1czsgLyogT3BlcmEgPCAxMi4xICovXHJcbiAgICAgICAgICBhbmltYXRpb246IGZhZGVpbiA1cztcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlaW4ge1xyXG4gIGZyb20geyBvcGFjaXR5OiAwOyB9XHJcbiAgdG8gICB7IG9wYWNpdHk6IDE7IH1cclxufVxyXG5cclxuLyogRmlyZWZveCA8IDE2ICovXHJcbkAtbW96LWtleWZyYW1lcyBmYWRlaW4ge1xyXG4gIGZyb20geyBvcGFjaXR5OiAwOyB9XHJcbiAgdG8gICB7IG9wYWNpdHk6IDE7IH1cclxufVxyXG5cclxuLyogU2FmYXJpLCBDaHJvbWUgYW5kIE9wZXJhID4gMTIuMSAqL1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHtcclxuICBmcm9tIHsgb3BhY2l0eTogMDsgfVxyXG4gIHRvICAgeyBvcGFjaXR5OiAxOyB9XHJcbn1cclxuXHJcbi8qIEludGVybmV0IEV4cGxvcmVyICovXHJcbkAtbXMta2V5ZnJhbWVzIGZhZGVpbiB7XHJcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cclxuICB0byAgIHsgb3BhY2l0eTogMTsgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/day14o/day14o.component.ts":
  /*!********************************************!*\
    !*** ./src/app/day14o/day14o.component.ts ***!
    \********************************************/

  /*! exports provided: Day14oComponent */

  /***/
  function srcAppDay14oDay14oComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Day14oComponent", function () {
      return Day14oComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Day14oComponent = function Day14oComponent() {
      _classCallCheck(this, Day14oComponent);

      this.nombregrupo = 'Ngäbe-Buglé';
      this.nombresimulador = 'Adventurer Mission | ';
      this.daynumber = '14'; //valor:number;

      this.valor = 150;
    };

    Day14oComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-day14o',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./day14o.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/day14o/day14o.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./day14o.component.css */
      "./src/app/day14o/day14o.component.css")).default]
    })], Day14oComponent);
    /***/
  },

  /***/
  "./src/app/day14o0/day14o0.component.css":
  /*!***********************************************!*\
    !*** ./src/app/day14o0/day14o0.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDay14o0Day14o0ComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#myVideo {\r\n    position: fixed;\r\n    right: 0;\r\n    top: -40px;\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    z-index: -20;\r\n  }\r\n  .container-fluid{\r\n    overflow: hidden;\r\n  }\r\n  .btn-play{\r\n    background:none;\r\n    border:none;\r\n    opacity: 0.7;\r\n  }\r\n  .btn-play img{\r\n    width: 100px;\r\n  }\r\n  .btn-play:hover{\r\n    background:none;\r\n    border:none;\r\n    opacity: 1;\r\n  }\r\n  .botones{\r\n    text-align: right;\r\n    position: absolute;\r\n    right:2rem;\r\n    bottom:2rem;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF5MTRvMC9kYXkxNG8wLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFVBQVU7SUFDVixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsV0FBVztJQUNYLFVBQVU7RUFDWjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvZGF5MTRvMC9kYXkxNG8wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbXlWaWRlbyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogLTQwcHg7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogLTIwO1xyXG4gIH1cclxuICAuY29udGFpbmVyLWZsdWlke1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgLmJ0bi1wbGF5e1xyXG4gICAgYmFja2dyb3VuZDpub25lO1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgfVxyXG4gIC5idG4tcGxheSBpbWd7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgfVxyXG4gIC5idG4tcGxheTpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6bm9uZTtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgLmJvdG9uZXN7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OjJyZW07XHJcbiAgICBib3R0b206MnJlbTtcclxuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/day14o0/day14o0.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/day14o0/day14o0.component.ts ***!
    \**********************************************/

  /*! exports provided: Day14o0Component */

  /***/
  function srcAppDay14o0Day14o0ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Day14o0Component", function () {
      return Day14o0Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Day14o0Component =
    /*#__PURE__*/
    function () {
      function Day14o0Component(router) {
        _classCallCheck(this, Day14o0Component);

        this.router = router;
      }

      _createClass(Day14o0Component, [{
        key: "videoFin",
        value: function videoFin() {
          console.log("termino el video");
          this.router.navigateByUrl('/day14o');
        }
      }]);

      return Day14o0Component;
    }();

    Day14o0Component.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    Day14o0Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-day14o0',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./day14o0.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/day14o0/day14o0.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./day14o0.component.css */
      "./src/app/day14o0/day14o0.component.css")).default]
    })], Day14o0Component);
    /***/
  },

  /***/
  "./src/app/day14p/day14p.component.css":
  /*!*********************************************!*\
    !*** ./src/app/day14p/day14p.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDay14pDay14pComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#myVideo {\r\n  position: fixed;\r\n  right: 0;\r\n  top: -40px;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  z-index: -20;\r\n}\r\n.container-fluid{\r\n  overflow: hidden;\r\n}\r\n.btn-play{\r\n  background:none;\r\n  border:none;\r\n  opacity: 0.7;\r\n}\r\n.btn-play img{\r\n  width: 100px;\r\n}\r\n.btn-play:hover{\r\n  background:none;\r\n  border:none;\r\n  opacity: 1;\r\n}\r\n.botones{\r\n  text-align: right;\r\n  position: absolute;\r\n  right:2rem;\r\n  bottom:2rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF5MTRwL2RheTE0cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixVQUFVO0VBQ1YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVO0FBQ1o7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2RheTE0cC9kYXkxNHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNteVZpZGVvIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAtNDBweDtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAtMjA7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5idG4tcGxheXtcclxuICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcbi5idG4tcGxheSBpbWd7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcbi5idG4tcGxheTpob3ZlcntcclxuICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4uYm90b25lc3tcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6MnJlbTtcclxuICBib3R0b206MnJlbTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/day14p/day14p.component.ts":
  /*!********************************************!*\
    !*** ./src/app/day14p/day14p.component.ts ***!
    \********************************************/

  /*! exports provided: Day14pComponent */

  /***/
  function srcAppDay14pDay14pComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Day14pComponent", function () {
      return Day14pComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Day14pComponent =
    /*#__PURE__*/
    function () {
      function Day14pComponent(router) {
        _classCallCheck(this, Day14pComponent);

        this.router = router;
        this.nombregrupo = 'Ngäbe-Buglé';
        this.nombresimulador = 'Adventurer Mission | ';
        this.daynumber = '14'; //valor:number;

        this.valor = 150;
      }

      _createClass(Day14pComponent, [{
        key: "videoFin",
        value: function videoFin() {
          console.log("termino el video");
          this.router.navigateByUrl('/day14q');
        }
      }]);

      return Day14pComponent;
    }();

    Day14pComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    Day14pComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-day14p',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./day14p.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/day14p/day14p.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./day14p.component.css */
      "./src/app/day14p/day14p.component.css")).default]
    })], Day14pComponent);
    /***/
  },

  /***/
  "./src/app/day14q/day14q.component.css":
  /*!*********************************************!*\
    !*** ./src/app/day14q/day14q.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDay14qDay14qComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#myVideo {\r\n  position: fixed;\r\n  right: 0;\r\n  top: -40px;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  z-index: -20;\r\n}\r\n.container-fluid{\r\n  overflow: hidden;\r\n}\r\n.btn-play{\r\n  background:none;\r\n  border:none;\r\n  opacity: 0.7;\r\n}\r\n.btn-play img{\r\n  width: 100px;\r\n}\r\n.btn-play:hover{\r\n  background:none;\r\n  border:none;\r\n  opacity: 1;\r\n}\r\n.botones{\r\n  text-align: right;\r\n  position: absolute;\r\n  right:2rem;\r\n  bottom:2rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF5MTRxL2RheTE0cS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixVQUFVO0VBQ1YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVO0FBQ1o7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2RheTE0cS9kYXkxNHEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNteVZpZGVvIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAtNDBweDtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAtMjA7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5idG4tcGxheXtcclxuICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcbi5idG4tcGxheSBpbWd7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcbi5idG4tcGxheTpob3ZlcntcclxuICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4uYm90b25lc3tcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6MnJlbTtcclxuICBib3R0b206MnJlbTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/day14q/day14q.component.ts":
  /*!********************************************!*\
    !*** ./src/app/day14q/day14q.component.ts ***!
    \********************************************/

  /*! exports provided: Day14qComponent */

  /***/
  function srcAppDay14qDay14qComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Day14qComponent", function () {
      return Day14qComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Day14qComponent =
    /*#__PURE__*/
    function () {
      function Day14qComponent(router) {
        _classCallCheck(this, Day14qComponent);

        this.router = router;
        this.nombregrupo = 'Tacurana';
        this.nombresimulador = 'Adventurer Mission | ';
        this.daynumber = '14'; //valor:number;

        this.valor = 150;
      }

      _createClass(Day14qComponent, [{
        key: "videoFin",
        value: function videoFin() {
          console.log("termino el video");
          this.router.navigateByUrl('/day14r');
        }
      }]);

      return Day14qComponent;
    }();

    Day14qComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    Day14qComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-day14q',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./day14q.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/day14q/day14q.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./day14q.component.css */
      "./src/app/day14q/day14q.component.css")).default]
    })], Day14qComponent);
    /***/
  },

  /***/
  "./src/app/day14r/day14r.component.css":
  /*!*********************************************!*\
    !*** ./src/app/day14r/day14r.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDay14rDay14rComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#myVideo {\r\n  position: fixed;\r\n  right: 0;\r\n  top: -40px;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  z-index: -20;\r\n}\r\n.container-fluid{\r\n  overflow: hidden;\r\n}\r\n.btn-play{\r\n  background:none;\r\n  border:none;\r\n  opacity: 0.7;\r\n}\r\n.btn-play img{\r\n  width: 100px;\r\n}\r\n.btn-play:hover{\r\n  background:none;\r\n  border:none;\r\n  opacity: 1;\r\n}\r\n.botones{\r\n  text-align: right;\r\n  position: absolute;\r\n  right:2rem;\r\n  bottom:2rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF5MTRyL2RheTE0ci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixVQUFVO0VBQ1YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVO0FBQ1o7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2RheTE0ci9kYXkxNHIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNteVZpZGVvIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAtNDBweDtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAtMjA7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5idG4tcGxheXtcclxuICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcbi5idG4tcGxheSBpbWd7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcbi5idG4tcGxheTpob3ZlcntcclxuICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4uYm90b25lc3tcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6MnJlbTtcclxuICBib3R0b206MnJlbTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/day14r/day14r.component.ts":
  /*!********************************************!*\
    !*** ./src/app/day14r/day14r.component.ts ***!
    \********************************************/

  /*! exports provided: Day14rComponent */

  /***/
  function srcAppDay14rDay14rComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Day14rComponent", function () {
      return Day14rComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Day14rComponent =
    /*#__PURE__*/
    function () {
      function Day14rComponent(router) {
        _classCallCheck(this, Day14rComponent);

        this.router = router;
        this.nombregrupo = 'Buhágana';
        this.nombresimulador = 'Adventurer Mission | ';
        this.daynumber = '14'; //valor:number;

        this.valor = 150;
      }

      _createClass(Day14rComponent, [{
        key: "videoFin",
        value: function videoFin() {
          console.log("termino el video");
          this.router.navigateByUrl('/fin4liz4d0');
        }
      }]);

      return Day14rComponent;
    }();

    Day14rComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    Day14rComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-day14r',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./day14r.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/day14r/day14r.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./day14r.component.css */
      "./src/app/day14r/day14r.component.css")).default]
    })], Day14rComponent);
    /***/
  },

  /***/
  "./src/app/day3/day3.component.css":
  /*!*****************************************!*\
    !*** ./src/app/day3/day3.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppDay3Day3ComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container-fluid{\r\n  overflow: hidden;\r\n  color:#fff\r\n}\r\n\r\n/*BTN*/\r\n\r\n.btn-primary{\r\n  /* width:120px; */\r\n  display: inline;\r\n  margin-left: 20px;\r\n  background-color:#0c1b21;\r\n  border-color:#000;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 1rem;;\r\n}\r\n\r\n.btn-primary.disabled{\r\n  background-color:#0c1b21;\r\n  border-color:#000;\r\n}\r\n\r\n.form-control{\r\n  width: 80%;\r\n  /* margin-top: 130px; */\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  height: 50px;\r\n  border: 2px solid#000;\r\n  background:#bb8a57;\r\n  color:#fff;\r\n}\r\n\r\n/* /BTN*/\r\n\r\n.container-fluid{\r\n  background-image: url('1.jpg');\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  background-repeat: no-repeat;\r\n  min-height: 100vh;\r\n  background-position-x: right;\r\n}\r\n\r\n.progreso{\r\n  background-image: url('progreso-3.png');\r\n  background-position-x: center;\r\n  min-height: 180px;\r\n  background-position-y: bottom;\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n}\r\n\r\n/* \r\n.map{\r\n  background-image: url(/assets/img/map.jpg);\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  width: 80%;\r\n  height: 400px;\r\n  margin-left: auto;\r\n  margin-right: auto; \r\n  margin-top: 4rem;\r\n  padding-top: 2rem;\r\n}\r\n.map h3{\r\n  margin-top: 4rem;\r\n  padding-top: 20px;\r\n  color: #4d3505;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF5My9kYXkzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEI7QUFDRjs7QUFFQSxNQUFNOztBQUNOO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQSxRQUFROztBQUdSO0VBQ0UsOEJBQTZDO0VBQzdDLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLGlCQUFpQjtFQUNqQiw0QkFBNEI7QUFDOUI7O0FBQ0E7RUFDRSx1Q0FBd0Q7RUFDeEQsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLHdCQUF3QjtBQUMxQjs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7OztHQWdCRyIsImZpbGUiOiJzcmMvYXBwL2RheTMvZGF5My5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGNvbG9yOiNmZmZcclxufVxyXG5cclxuLypCVE4qL1xyXG4uYnRuLXByaW1hcnl7XHJcbiAgLyogd2lkdGg6MTIwcHg7ICovXHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzBjMWIyMTtcclxuICBib3JkZXItY29sb3I6IzAwMDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMXJlbTs7XHJcbn1cclxuLmJ0bi1wcmltYXJ5LmRpc2FibGVke1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzBjMWIyMTtcclxuICBib3JkZXItY29sb3I6IzAwMDtcclxufVxyXG4uZm9ybS1jb250cm9se1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgLyogbWFyZ2luLXRvcDogMTMwcHg7ICovXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCMwMDA7XHJcbiAgYmFja2dyb3VuZDojYmI4YTU3O1xyXG4gIGNvbG9yOiNmZmY7XHJcbn1cclxuXHJcbi8qIC9CVE4qL1xyXG4gXHJcblxyXG4uY29udGFpbmVyLWZsdWlke1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1nLzEuanBnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IHJpZ2h0O1xyXG59XHJcbi5wcm9ncmVzb3tcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy8xL3Byb2dyZXNvLTMucG5nKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiAxODBweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGJvdHRvbTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufVxyXG5cclxuXHJcblxyXG4vKiBcclxuLm1hcHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvbWFwLmpwZyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87IFxyXG4gIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgcGFkZGluZy10b3A6IDJyZW07XHJcbn1cclxuLm1hcCBoM3tcclxuICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIGNvbG9yOiAjNGQzNTA1O1xyXG59ICovIl19 */";
    /***/
  },

  /***/
  "./src/app/day3/day3.component.ts":
  /*!****************************************!*\
    !*** ./src/app/day3/day3.component.ts ***!
    \****************************************/

  /*! exports provided: Day3Component */

  /***/
  function srcAppDay3Day3ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Day3Component", function () {
      return Day3Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");

    var Day3Component =
    /*#__PURE__*/
    function () {
      function Day3Component(modalService) {
        _classCallCheck(this, Day3Component);

        this.modalService = modalService;
        this.nombregrupo = 'Buhágana';
        this.nombresimulador = 'Adventurer Mission | ';
        this.daynumber = '2'; //valor:number;

        this.valor = 'YAVIZA';
        this.acertado = false;
      }

      _createClass(Day3Component, [{
        key: "upperCase",
        value: function upperCase(input) {
          if (input.toUpperCase() == this.valor) {
            this.acertado = true;
          } else {
            this.acertado = false;
          }
        }
      }, {
        key: "openModal",
        value: function openModal(template) {
          this.modalRef = this.modalService.show(template);
        }
      }]);

      return Day3Component;
    }();

    Day3Component.ctorParameters = function () {
      return [{
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
      }];
    };

    Day3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-day3',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./day3.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/day3/day3.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./day3.component.css */
      "./src/app/day3/day3.component.css")).default]
    })], Day3Component);
    /***/
  },

  /***/
  "./src/app/day4/day4.component.css":
  /*!*****************************************!*\
    !*** ./src/app/day4/day4.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppDay4Day4ComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container-fluid{\r\n  overflow: hidden;\r\n  color:#fff\r\n}\r\n\r\n/*BTN*/\r\n\r\n.btn-primary{\r\n  /* width: 80%; */\r\n  display: inline;\r\n  margin-left: 20px;\r\n  background-color:#0c1b21;\r\n  border-color:#000;\r\n}\r\n\r\n.btn-primary.disabled{\r\n  background-color:#0c1b21;\r\n  border-color:#000;\r\n}\r\n\r\n.form-control{\r\n  width: 80%;\r\n  /* margin-top: 130px; */\r\n  display: block;\r\n  border: 2px solid #868686;\r\n  background: #ffffffa1;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.patente{\r\n  z-index: 3;\r\n  display: block;\r\n}\r\n\r\n/* /BTN*/\r\n\r\n.container-fluid{\r\n  background-image: url('1.jpg');\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  background-repeat: no-repeat;\r\n  min-height: 100vh;\r\n  background-position-x: right;\r\n}\r\n\r\n.progreso{\r\n  background-image: url('progreso-4.png');\r\n  background-position-x: center;\r\n  min-height: 180px;\r\n  background-position-y: bottom;\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n}\r\n\r\n/* .estrategia{\r\n  border: 1px solid #000;\r\n  border-radius: 5px;\r\n  padding-bottom: 1rem;\r\n  margin-left: auto;\r\n  margin-right: auto; \r\n  margin-top: 4rem;\r\n  padding-top: 2rem;\r\n}\r\n.estrategia h3{\r\n  margin-top: 1rem;\r\n  color: #000;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF5NC9kYXk0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEI7QUFDRjs7QUFFQSxNQUFNOztBQUNOO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsY0FBYztBQUNoQjs7QUFDQSxRQUFROztBQUdSO0VBQ0UsOEJBQTZDO0VBQzdDLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLGlCQUFpQjtFQUNqQiw0QkFBNEI7QUFDOUI7O0FBQ0E7RUFDRSx1Q0FBd0Q7RUFDeEQsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLHdCQUF3QjtBQUMxQjs7QUFFQTs7Ozs7Ozs7Ozs7O0dBWUciLCJmaWxlIjoic3JjL2FwcC9kYXk0L2RheTQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWR7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBjb2xvcjojZmZmXHJcbn1cclxuXHJcbi8qQlROKi9cclxuLmJ0bi1wcmltYXJ5e1xyXG4gIC8qIHdpZHRoOiA4MCU7ICovXHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzBjMWIyMTtcclxuICBib3JkZXItY29sb3I6IzAwMDtcclxufVxyXG4uYnRuLXByaW1hcnkuZGlzYWJsZWR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMGMxYjIxO1xyXG4gIGJvcmRlci1jb2xvcjojMDAwO1xyXG59XHJcbi5mb3JtLWNvbnRyb2x7XHJcbiAgd2lkdGg6IDgwJTtcclxuICAvKiBtYXJnaW4tdG9wOiAxMzBweDsgKi9cclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXI6IDJweCBzb2xpZCAjODY4Njg2O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmZhMTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuLnBhdGVudGV7XHJcbiAgei1pbmRleDogMztcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4vKiAvQlROKi9cclxuXHJcblxyXG4uY29udGFpbmVyLWZsdWlke1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1nLzEuanBnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IHJpZ2h0O1xyXG59XHJcbi5wcm9ncmVzb3tcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy8xL3Byb2dyZXNvLTQucG5nKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiAxODBweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGJvdHRvbTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufVxyXG5cclxuLyogLmVzdHJhdGVnaWF7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvOyBcclxuICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gIHBhZGRpbmctdG9wOiAycmVtO1xyXG59XHJcbi5lc3RyYXRlZ2lhIGgze1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgY29sb3I6ICMwMDA7XHJcbn0gKi8iXX0= */";
    /***/
  },

  /***/
  "./src/app/day4/day4.component.ts":
  /*!****************************************!*\
    !*** ./src/app/day4/day4.component.ts ***!
    \****************************************/

  /*! exports provided: Day4Component */

  /***/
  function srcAppDay4Day4ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Day4Component", function () {
      return Day4Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");

    var Day4Component =
    /*#__PURE__*/
    function () {
      function Day4Component(modalService) {
        _classCallCheck(this, Day4Component);

        this.modalService = modalService;
        this.nombregrupo = 'Buhágana';
        this.nombresimulador = 'Adventurer Mission | ';
        this.daynumber = '3';
      }

      _createClass(Day4Component, [{
        key: "openModal",
        value: function openModal(template) {
          this.modalRef = this.modalService.show(template);
        }
      }]);

      return Day4Component;
    }();

    Day4Component.ctorParameters = function () {
      return [{
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
      }];
    };

    Day4Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-day4',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./day4.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/day4/day4.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./day4.component.css */
      "./src/app/day4/day4.component.css")).default]
    })], Day4Component);
    /***/
  },

  /***/
  "./src/app/day7/day7.component.css":
  /*!*****************************************!*\
    !*** ./src/app/day7/day7.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppDay7Day7ComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container-fluid{\r\n  overflow: hidden;\r\n  color:#fff\r\n}\r\n/*BTN*/\r\n.btn-primary{\r\n  /* width:120px; */\r\n  display: inline;\r\n  margin-left: 20px;\r\n  background-color:#0c1b21;\r\n  border-color:#000;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 1rem;;\r\n}\r\n.btn-primary.disabled{\r\n  background-color:#0c1b21;\r\n  border-color:#000;\r\n}\r\n.form-control{\r\n  width: 80%;\r\n  /* margin-top: 130px; */\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  height: 50px;\r\n  border: 2px solid#000;\r\n  background:#bb8a57;\r\n  color:#fff;\r\n}\r\n/* /BTN*/\r\n/*  \r\n.map{\r\n  background-image: url(/assets/img/map.jpg);\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  width: 80%;\r\n  height: 400px;\r\n  margin-left: auto;\r\n  margin-right: auto; \r\n  margin-top: 4rem;\r\n  padding-top: 2rem;\r\n}\r\n.map h3{\r\n  margin-top: 4rem;\r\n  padding-top: 20px;\r\n  color: #4d3505;\r\n} */\r\n.container-fluid{\r\n  background-image: url('1.jpg');\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  background-repeat: no-repeat;\r\n  min-height: 100vh;\r\n  background-position-x: right;\r\n}\r\n.progreso{\r\n  background-image: url('progreso-7.png');\r\n  background-position-x: center;\r\n  min-height: 180px;\r\n  background-position-y: bottom;\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n}\r\n::-webkit-input-placeholder{color:white}\r\n::-moz-placeholder{color:white}\r\n::-ms-input-placeholder{color:white}\r\n::placeholder{color:white}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF5Ny9kYXk3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEI7QUFDRjtBQUNBLE1BQU07QUFDTjtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBQ0EsUUFBUTtBQUNSOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JHO0FBRUg7RUFDRSw4QkFBNkM7RUFDN0Msc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsdUNBQXdEO0VBQ3hELDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLDRCQUE0QjtFQUM1Qix3QkFBd0I7QUFDMUI7QUFDQSw0QkFBYyxXQUFXO0FBQXpCLG1CQUFjLFdBQVc7QUFBekIsd0JBQWMsV0FBVztBQUF6QixjQUFjLFdBQVciLCJmaWxlIjoic3JjL2FwcC9kYXk3L2RheTcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWR7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBjb2xvcjojZmZmXHJcbn1cclxuLypCVE4qL1xyXG4uYnRuLXByaW1hcnl7XHJcbiAgLyogd2lkdGg6MTIwcHg7ICovXHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzBjMWIyMTtcclxuICBib3JkZXItY29sb3I6IzAwMDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMXJlbTs7XHJcbn1cclxuLmJ0bi1wcmltYXJ5LmRpc2FibGVke1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzBjMWIyMTtcclxuICBib3JkZXItY29sb3I6IzAwMDtcclxufVxyXG4uZm9ybS1jb250cm9se1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgLyogbWFyZ2luLXRvcDogMTMwcHg7ICovXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCMwMDA7XHJcbiAgYmFja2dyb3VuZDojYmI4YTU3O1xyXG4gIGNvbG9yOiNmZmY7XHJcbn1cclxuLyogL0JUTiovXHJcbi8qICBcclxuLm1hcHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvbWFwLmpwZyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87IFxyXG4gIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgcGFkZGluZy10b3A6IDJyZW07XHJcbn1cclxuLm1hcCBoM3tcclxuICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIGNvbG9yOiAjNGQzNTA1O1xyXG59ICovXHJcblxyXG4uY29udGFpbmVyLWZsdWlke1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1nLzEuanBnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IHJpZ2h0O1xyXG59XHJcbi5wcm9ncmVzb3tcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy8xL3Byb2dyZXNvLTcucG5nKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiAxODBweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGJvdHRvbTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufVxyXG46OnBsYWNlaG9sZGVye2NvbG9yOndoaXRlfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/day7/day7.component.ts":
  /*!****************************************!*\
    !*** ./src/app/day7/day7.component.ts ***!
    \****************************************/

  /*! exports provided: Day7Component */

  /***/
  function srcAppDay7Day7ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Day7Component", function () {
      return Day7Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");

    var Day7Component =
    /*#__PURE__*/
    function () {
      function Day7Component(modalService) {
        _classCallCheck(this, Day7Component);

        this.modalService = modalService;
        this.nombregrupo = 'Buhágana';
        this.nombresimulador = 'Adventurer Mission | ';
        this.daynumber = '10'; //valor:number;

        this.valor = 'ANGELINA';
        this.acertado = false;
      }

      _createClass(Day7Component, [{
        key: "upperCase",
        value: function upperCase(input) {
          if (input.toUpperCase() == this.valor) {
            this.acertado = true;
          } else {
            this.acertado = false;
          }
        }
      }, {
        key: "openModal",
        value: function openModal(template) {
          this.modalRef = this.modalService.show(template);
        }
      }]);

      return Day7Component;
    }();

    Day7Component.ctorParameters = function () {
      return [{
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
      }];
    };

    Day7Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-day7',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./day7.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/day7/day7.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./day7.component.css */
      "./src/app/day7/day7.component.css")).default]
    })], Day7Component);
    /***/
  },

  /***/
  "./src/app/day8/day8.component.css":
  /*!*****************************************!*\
    !*** ./src/app/day8/day8.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppDay8Day8ComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container-fluid{\r\n  overflow: hidden;\r\n  color:#fff\r\n}\r\n\r\n/*BTN*/\r\n\r\n.btn-primary{\r\n  width: 100%;\r\n  margin-left: 20px;\r\n  background-color:#161617;\r\n  border-color: orange;\r\n}\r\n\r\n.form-control{\r\n  display: inline;\r\n}\r\n\r\n/* /BTN*/\r\n\r\n/* .container-fluid{\r\n  background-image: url(/assets/img/08.jpg);\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  background-repeat: no-repeat;\r\n  min-height: 100vh;\r\n}\r\n.primero{\r\n  padding-top: 2rem;\r\n}\r\n.contenido{\r\n  padding:2rem;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 2rem;\r\n  color: #fff;\r\n  background-color:#000000c7;\r\n  border:1px solid orange;\r\n} */\r\n\r\n.container-fluid{\r\n  background-image: url('08.jpg');\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  background-repeat: no-repeat;\r\n  min-height: 100vh;\r\n  background-position-x: right;\r\n}\r\n\r\n.progreso{\r\n  background-image: url('progreso-8.png');\r\n  background-position-x: center;\r\n  min-height: 180px;\r\n  background-position-y: bottom;\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF5OC9kYXk4LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEI7QUFDRjs7QUFFQSxNQUFNOztBQUNOO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQSxRQUFROztBQUVSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQkc7O0FBRUg7RUFDRSwrQkFBOEM7RUFDOUMsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtBQUM5Qjs7QUFDQTtFQUNFLHVDQUF3RDtFQUN4RCw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsd0JBQXdCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvZGF5OC9kYXk4LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlke1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgY29sb3I6I2ZmZlxyXG59XHJcblxyXG4vKkJUTiovXHJcbi5idG4tcHJpbWFyeXtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMxNjE2MTc7XHJcbiAgYm9yZGVyLWNvbG9yOiBvcmFuZ2U7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2x7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcbi8qIC9CVE4qL1xyXG5cclxuLyogLmNvbnRhaW5lci1mbHVpZHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvMDguanBnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG4ucHJpbWVyb3tcclxuICBwYWRkaW5nLXRvcDogMnJlbTtcclxufVxyXG4uY29udGVuaWRve1xyXG4gIHBhZGRpbmc6MnJlbTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDAwMDBjNztcclxuICBib3JkZXI6MXB4IHNvbGlkIG9yYW5nZTtcclxufSAqL1xyXG5cclxuLmNvbnRhaW5lci1mbHVpZHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy8wOC5qcGcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogcmlnaHQ7XHJcbn1cclxuLnByb2dyZXNve1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1nLzEvcHJvZ3Jlc28tOC5wbmcpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDE4MHB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogYm90dG9tO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/day8/day8.component.ts":
  /*!****************************************!*\
    !*** ./src/app/day8/day8.component.ts ***!
    \****************************************/

  /*! exports provided: Day8Component */

  /***/
  function srcAppDay8Day8ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Day8Component", function () {
      return Day8Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");

    var Day8Component =
    /*#__PURE__*/
    function () {
      function Day8Component(modalService) {
        _classCallCheck(this, Day8Component);

        this.modalService = modalService;
        this.nombregrupo = 'Buhágana';
        this.nombresimulador = 'Adventurer Mission | ';
        this.daynumber = '11'; //valor:number;

        this.valor = 150;
      }

      _createClass(Day8Component, [{
        key: "openModal",
        value: function openModal(template) {
          this.modalRef = this.modalService.show(template);
        }
      }]);

      return Day8Component;
    }();

    Day8Component.ctorParameters = function () {
      return [{
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
      }];
    };

    Day8Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-day8',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./day8.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/day8/day8.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./day8.component.css */
      "./src/app/day8/day8.component.css")).default]
    })], Day8Component);
    /***/
  },

  /***/
  "./src/app/day8a/day8a.component.css":
  /*!*******************************************!*\
    !*** ./src/app/day8a/day8a.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppDay8aDay8aComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#myVideo {\r\n  position: fixed;\r\n  right: 0;\r\n  top: -85px;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  z-index: -20;\r\n}\r\n.container-fluid{\r\n  overflow: hidden;\r\n  color:#fff\r\n}\r\np{\r\n  font-size: 13.5pt;\r\n  color:#fff;\r\n}\r\n.consigna{background:#fffc;color:black;padding: 1rem;border-radius: 10px;text-align: center;border-left: 8px solid #9cbc03;}\r\n/*BTN*/\r\n.btn-primary{\r\n  width: 100%;\r\n  margin-left: 20px;\r\n  background-color:#161617;\r\n  border-color: orange;\r\n  cursor: initial;\r\n}\r\n.form-control{\r\n  display: inline;\r\n}\r\n/* /BTN*/\r\n.container-fluid{\r\n  background-image: url('08.jpg');\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  background-repeat: no-repeat;\r\n  min-height: 100vh;\r\n}\r\n.primero{\r\n  padding-top: 2rem;\r\n}\r\n.contenido{\r\n  padding:2rem;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 2rem;\r\n  color: #fff;\r\n  background-color:#000000c7;\r\n  border:1px solid orange;\r\n}\r\n.btn-action {\r\n  animation: fadeIn ease 750s;\r\n  -webkit-animation: fadeIn ease 750s;\r\n  -moz-animation: fadeIn ease 750s;\r\n  -o-animation: fadeIn ease 750s;\r\n  -ms-animation: fadeIn ease 750s;\r\n}\r\n@keyframes fadeIn {\r\n  0% {\r\n    opacity:0;\r\n  }\r\n  100% {\r\n    opacity:1;\r\n  }\r\n}\r\n@-webkit-keyframes fadeIn {\r\n  0% {\r\n    opacity:0;\r\n  }\r\n  100% {\r\n    opacity:1;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF5OGEvZGF5OGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixRQUFRO0VBQ1IsVUFBVTtFQUNWLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEI7QUFDRjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjtBQUNBLFVBQVUsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyw4QkFBOEIsQ0FBQztBQUMzSCxNQUFNO0FBQ047RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBLFFBQVE7QUFFUjtFQUNFLCtCQUE4QztFQUM5QyxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIsdUJBQXVCO0FBQ3pCO0FBR0E7RUFDRSwyQkFBMkI7RUFDM0IsbUNBQW1DO0VBQ25DLGdDQUFnQztFQUNoQyw4QkFBOEI7RUFDOUIsK0JBQStCO0FBQ2pDO0FBRUE7RUFDRTtJQUNFLFNBQVM7RUFDWDtFQUNBO0lBQ0UsU0FBUztFQUNYO0FBQ0Y7QUFXQTtFQUNFO0lBQ0UsU0FBUztFQUNYO0VBQ0E7SUFDRSxTQUFTO0VBQ1g7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2RheThhL2RheThhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbXlWaWRlbyB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogLTg1cHg7XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogLTIwO1xyXG59XHJcbi5jb250YWluZXItZmx1aWR7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBjb2xvcjojZmZmXHJcbn1cclxucHtcclxuICBmb250LXNpemU6IDEzLjVwdDtcclxuICBjb2xvcjojZmZmO1xyXG59XHJcbi5jb25zaWduYXtiYWNrZ3JvdW5kOiNmZmZjO2NvbG9yOmJsYWNrO3BhZGRpbmc6IDFyZW07Ym9yZGVyLXJhZGl1czogMTBweDt0ZXh0LWFsaWduOiBjZW50ZXI7Ym9yZGVyLWxlZnQ6IDhweCBzb2xpZCAjOWNiYzAzO31cclxuLypCVE4qL1xyXG4uYnRuLXByaW1hcnl7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMTYxNjE3O1xyXG4gIGJvcmRlci1jb2xvcjogb3JhbmdlO1xyXG4gIGN1cnNvcjogaW5pdGlhbDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbHtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuLyogL0JUTiovXHJcblxyXG4uY29udGFpbmVyLWZsdWlke1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1nLzA4LmpwZyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuLnByaW1lcm97XHJcbiAgcGFkZGluZy10b3A6IDJyZW07XHJcbn1cclxuLmNvbnRlbmlkb3tcclxuICBwYWRkaW5nOjJyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMDAwMDAwYzc7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCBvcmFuZ2U7XHJcbn1cclxuXHJcblxyXG4uYnRuLWFjdGlvbiB7XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW4gZWFzZSA3NTBzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gZWFzZSA3NTBzO1xyXG4gIC1tb3otYW5pbWF0aW9uOiBmYWRlSW4gZWFzZSA3NTBzO1xyXG4gIC1vLWFuaW1hdGlvbjogZmFkZUluIGVhc2UgNzUwcztcclxuICAtbXMtYW5pbWF0aW9uOiBmYWRlSW4gZWFzZSA3NTBzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTowO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6MTtcclxuICB9XHJcbn1cclxuXHJcbkAtbW96LWtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6MDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OjE7XHJcbiAgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OjA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eToxO1xyXG4gIH1cclxufVxyXG5cclxuQC1vLWtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6MDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OjE7XHJcbiAgfVxyXG59XHJcblxyXG5ALW1zLWtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6MDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OjE7XHJcbn1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/day8a/day8a.component.ts":
  /*!******************************************!*\
    !*** ./src/app/day8a/day8a.component.ts ***!
    \******************************************/

  /*! exports provided: Day8aComponent */

  /***/
  function srcAppDay8aDay8aComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Day8aComponent", function () {
      return Day8aComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");

    var Day8aComponent =
    /*#__PURE__*/
    function () {
      function Day8aComponent(modalService) {
        _classCallCheck(this, Day8aComponent);

        this.modalService = modalService;
        this.nombregrupo = 'Buhágana';
        this.nombresimulador = 'Adventurer Mission | ';
        this.daynumber = '11'; //valor:number;

        this.valor = 150;
      }

      _createClass(Day8aComponent, [{
        key: "openModal",
        value: function openModal(template) {
          this.modalRef = this.modalService.show(template);
        }
      }]);

      return Day8aComponent;
    }();

    Day8aComponent.ctorParameters = function () {
      return [{
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
      }];
    };

    Day8aComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-day8a',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./day8a.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/day8a/day8a.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./day8a.component.css */
      "./src/app/day8a/day8a.component.css")).default]
    })], Day8aComponent);
    /***/
  },

  /***/
  "./src/app/encuentro/encuentro.component.css":
  /*!***************************************************!*\
    !*** ./src/app/encuentro/encuentro.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEncuentroEncuentroComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".freebirdFormviewerViewCenteredContent{\r\n    max-width: 100vw !important;\r\n  }\r\n  #myVideo {\r\n    position: fixed;\r\n    right: 0;\r\n    top: -85px;\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    z-index: -20;\r\n  }\r\n  .container-fluid{\r\n    overflow: hidden;\r\n    color:#fff\r\n  }\r\n  .form-control{\r\n    width: 200px;\r\n    display: inline;\r\n  }\r\n  /*BTN*/\r\n  .btn-primary{\r\n    /* width: 120px; */\r\n    display: inline;\r\n    margin-left: 20px;\r\n    \r\n    background-color:#0c1b21;\r\n    border-color:#000;\r\n  }\r\n  .btn-primary.disabled{\r\n    background-color:#0c1b21;\r\n    border-color:#000;\r\n  }\r\n  .container-fluid{\r\n    background-image: url('1.jpg');\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    background-repeat: no-repeat;\r\n    min-height: 100vh;\r\n    background-position-x: right;\r\n  }\r\n  .progreso{\r\n    background-image: url('progreso-1.png');\r\n    background-position-x: center;\r\n    min-height: 180px;\r\n    background-position-y: bottom;\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n  }\r\n  .form-control{\r\n    width: 80%;\r\n    /* margin-top: 130px; */\r\n    display: block;\r\n    border: 2px solid #868686;\r\n    background: #ffffffa1;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW5jdWVudHJvL2VuY3VlbnRyby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFVBQVU7SUFDVixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCO0VBQ0Y7RUFDQTtJQUNFLFlBQVk7SUFDWixlQUFlO0VBQ2pCO0VBQ0EsTUFBTTtFQUNOO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7O0lBRWpCLHdCQUF3QjtJQUN4QixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLHdCQUF3QjtJQUN4QixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLDhCQUE2QztJQUM3QyxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsNEJBQTRCO0VBQzlCO0VBRUE7SUFDRSx1Q0FBd0Q7SUFDeEQsNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZW5jdWVudHJvL2VuY3VlbnRyby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZyZWViaXJkRm9ybXZpZXdlclZpZXdDZW50ZXJlZENvbnRlbnR7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICNteVZpZGVvIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAtODVweDtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAtMjA7XHJcbiAgfVxyXG4gIC5jb250YWluZXItZmx1aWR7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgY29sb3I6I2ZmZlxyXG4gIH1cclxuICAuZm9ybS1jb250cm9se1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gIH1cclxuICAvKkJUTiovXHJcbiAgLmJ0bi1wcmltYXJ5e1xyXG4gICAgLyogd2lkdGg6IDEyMHB4OyAqL1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzBjMWIyMTtcclxuICAgIGJvcmRlci1jb2xvcjojMDAwO1xyXG4gIH1cclxuICAuYnRuLXByaW1hcnkuZGlzYWJsZWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwYzFiMjE7XHJcbiAgICBib3JkZXItY29sb3I6IzAwMDtcclxuICB9XHJcbiAgLmNvbnRhaW5lci1mbHVpZHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1nLzEuanBnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiByaWdodDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2dyZXNve1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvMS9wcm9ncmVzby0xLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDE4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBib3R0b207XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIH1cclxuICAuZm9ybS1jb250cm9se1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIC8qIG1hcmdpbi10b3A6IDEzMHB4OyAqL1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjODY4Njg2O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZmExO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/encuentro/encuentro.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/encuentro/encuentro.component.ts ***!
    \**************************************************/

  /*! exports provided: EncuentroComponent */

  /***/
  function srcAppEncuentroEncuentroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EncuentroComponent", function () {
      return EncuentroComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EncuentroComponent = function EncuentroComponent() {
      _classCallCheck(this, EncuentroComponent);

      this.nombregrupo = 'Buhágana';
      this.nombresimulador = 'Adventurer Mission | ';
      this.daynumber = '8';
    };

    EncuentroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-encuentro',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./encuentro.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/encuentro/encuentro.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./encuentro.component.css */
      "./src/app/encuentro/encuentro.component.css")).default]
    })], EncuentroComponent);
    /***/
  },

  /***/
  "./src/app/fin4liz4d0/fin4liz4d0.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/fin4liz4d0/fin4liz4d0.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFin4liz4d0Fin4liz4d0ComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* #myVideo {\r\n  position: fixed;\r\n  right: 0;\r\n  top: -40px;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  z-index: -20;\r\n} */\r\n\r\n/* #myVideo {\r\n  top: 11rem;\r\n  width: 100%;\r\n  height: 58%;\r\n  z-index: -20;\r\n  rotate: 9deg;\r\n} */\r\n\r\n#myVideo {\r\n  width: 100%;\r\n  margin-top: 40px;\r\n  box-shadow: 7px 6px 11px #00000061;\r\n  border-bottom-left-radius: 10px;\r\n  border-bottom-right-radius: 10px;\r\n  transform: rotate(6deg);\r\n  -moz-transform: rotate(6deg);\r\n  -ms-transform: rotate(6deg);\r\n  -o-transform: rotate(6deg);\r\n  -webkit-transform: rotate(6deg);\r\n}\r\n\r\n.container-fluid{\r\n  overflow: hidden;\r\n  color:#fff;\r\n  padding: 0px;\r\n}\r\n\r\n/* .bg{\r\n  z-index: -25;\r\n  background-color: teal;\r\n  width: 100%;\r\n  height: 100vh;\r\n  position: fixed;\r\n} */\r\n\r\n/* /BTN*/\r\n\r\n.container-fluid{\r\n  background-image: url('1.jpg');\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  background-repeat: no-repeat;\r\n  min-height: 100vh;\r\n  background-position-x: right;\r\n}\r\n\r\n.texto-interno{\r\n  margin-top:30px;\r\n}\r\n\r\n.daynumber{\r\n  margin-top:20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmluNGxpejRkMC9maW40bGl6NGQwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7R0FPRzs7QUFFSDs7Ozs7O0dBTUc7O0FBQ0g7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtDQUFrQztFQUNsQywrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLHVCQUF1QjtFQUN2Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLDBCQUEwQjtFQUMxQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTs7Ozs7O0dBTUc7O0FBQ0gsUUFBUTs7QUFDUjtFQUNFLDhCQUE2QztFQUM3QyxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QixpQkFBaUI7RUFDakIsNEJBQTRCO0FBQzlCOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9maW40bGl6NGQwL2ZpbjRsaXo0ZDAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICNteVZpZGVvIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAtNDBweDtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAtMjA7XHJcbn0gKi9cclxuXHJcbi8qICNteVZpZGVvIHtcclxuICB0b3A6IDExcmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTglO1xyXG4gIHotaW5kZXg6IC0yMDtcclxuICByb3RhdGU6IDlkZWc7XHJcbn0gKi9cclxuI215VmlkZW8ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgYm94LXNoYWRvdzogN3B4IDZweCAxMXB4ICMwMDAwMDA2MTtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDZkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNmRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDZkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDZkZWcpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNmRlZyk7XHJcbn1cclxuXHJcbi5jb250YWluZXItZmx1aWR7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBjb2xvcjojZmZmO1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLyogLmJne1xyXG4gIHotaW5kZXg6IC0yNTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG59ICovXHJcbi8qIC9CVE4qL1xyXG4uY29udGFpbmVyLWZsdWlke1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1nLzEuanBnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IHJpZ2h0O1xyXG59XHJcbi50ZXh0by1pbnRlcm5ve1xyXG4gIG1hcmdpbi10b3A6MzBweDtcclxufVxyXG4uZGF5bnVtYmVye1xyXG4gIG1hcmdpbi10b3A6MjBweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/fin4liz4d0/fin4liz4d0.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/fin4liz4d0/fin4liz4d0.component.ts ***!
    \****************************************************/

  /*! exports provided: Fin4liz4d0Component */

  /***/
  function srcAppFin4liz4d0Fin4liz4d0ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Fin4liz4d0Component", function () {
      return Fin4liz4d0Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Fin4liz4d0Component =
    /*#__PURE__*/
    function () {
      function Fin4liz4d0Component() {
        _classCallCheck(this, Fin4liz4d0Component);
      }

      _createClass(Fin4liz4d0Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Fin4liz4d0Component;
    }();

    Fin4liz4d0Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fin4liz4d0',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fin4liz4d0.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/fin4liz4d0/fin4liz4d0.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fin4liz4d0.component.css */
      "./src/app/fin4liz4d0/fin4liz4d0.component.css")).default]
    })], Fin4liz4d0Component);
    /***/
  },

  /***/
  "./src/app/header/header.component.css":
  /*!*********************************************!*\
    !*** ./src/app/header/header.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".botonera-principal{\r\n    /* background: #fdcc60; */\r\n    /* background: #ff8e2a; */\r\n    background: #000000c7;\r\n    border-bottom-left-radius: 20px;\r\n    border-bottom-right-radius: 20px;\r\n    border: 5px solid #fff;\r\n    border-top: 0px;\r\n    padding-top: 1rem;\r\n    box-shadow: 5px 5px 10px #000000bd;\r\n    z-index: 1;\r\n    color: #000;\r\n}\r\n\r\n.header{color:black !important}\r\n\r\n.modal-title{color:black}\r\n\r\nspan{color:black}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsK0JBQStCO0lBQy9CLGdDQUFnQztJQUNoQyxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQ0FBa0M7SUFDbEMsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQSxRQUFRLHNCQUFzQjs7QUFFOUIsYUFBYSxXQUFXOztBQUN4QixLQUFLLFdBQVciLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm90b25lcmEtcHJpbmNpcGFse1xyXG4gICAgLyogYmFja2dyb3VuZDogI2ZkY2M2MDsgKi9cclxuICAgIC8qIGJhY2tncm91bmQ6ICNmZjhlMmE7ICovXHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwYzc7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjZmZmO1xyXG4gICAgYm9yZGVyLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggIzAwMDAwMGJkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4uaGVhZGVye2NvbG9yOmJsYWNrICFpbXBvcnRhbnR9XHJcblxyXG4ubW9kYWwtdGl0bGV7Y29sb3I6YmxhY2t9XHJcbnNwYW57Y29sb3I6YmxhY2t9Il19 */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);

        this.nombregrupo = 'Buhágana';
        this.nombresimulador = 'Adventurer Mission | ';
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "receiveMessage",
        value: function receiveMessage($event) {
          this.message = $event;
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/header/header.component.css")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/inicio/inicio.component.css":
  /*!*********************************************!*\
    !*** ./src/app/inicio/inicio.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppInicioInicioComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container-fluid{\r\n  background-image: url('00.jpg');\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  height: 100%;\r\n  background-position-y: -190px;\r\n  background-color: #00121c;\r\n}\r\n.btn-play{\r\n  background:none;\r\n  border:none;\r\n  opacity: 0.7;\r\n}\r\n.btn-play img{\r\n  width: 100px;\r\n}\r\n.btn-play:hover{\r\n  background:none;\r\n  border:none;\r\n  opacity: 1;\r\n}\r\n.botones{\r\n  text-align: right;\r\n  position: absolute;\r\n  right:2rem;\r\n  bottom:2rem;\r\n}\r\n.btn-ready{\r\n  width: 100%;\r\n  min-height: 100px;\r\n  border-radius: 5px;\r\n  background: #000000c7;\r\n  color: white;\r\n  border: 1px solid white;\r\n  opacity: 0.7;\r\n}\r\n.btn-ready:hover{\r\n    opacity: 1;\r\n}\r\n.btn-ready h4{\r\n  text-align: center;\r\n  color: white;\r\n}\r\n.equipo-inicio{\r\n  text-align: center;\r\n  border-radius: 6px;  \r\n  text-transform: uppercase;\r\n  margin-top: 1rem;\r\n  display: inline-block;\r\n  padding: 1rem;\r\n  font-weight: bold;\r\n}\r\np{\r\n  color:white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5pY2lvL2luaWNpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQThDO0VBQzlDLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLDZCQUE2QjtFQUM3Qix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsVUFBVTtBQUNaO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2luaWNpby9pbmljaW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWR7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvMDAuanBnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogLTE5MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDEyMWM7XHJcbn1cclxuLmJ0bi1wbGF5e1xyXG4gIGJhY2tncm91bmQ6bm9uZTtcclxuICBib3JkZXI6bm9uZTtcclxuICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuLmJ0bi1wbGF5IGltZ3tcclxuICB3aWR0aDogMTAwcHg7XHJcbn1cclxuLmJ0bi1wbGF5OmhvdmVye1xyXG4gIGJhY2tncm91bmQ6bm9uZTtcclxuICBib3JkZXI6bm9uZTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi5ib3RvbmVze1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDoycmVtO1xyXG4gIGJvdHRvbToycmVtO1xyXG59XHJcbi5idG4tcmVhZHl7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQ6ICMwMDAwMDBjNztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcbi5idG4tcmVhZHk6aG92ZXJ7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uYnRuLXJlYWR5IGg0e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5lcXVpcG8taW5pY2lve1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7ICBcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxucHtcclxuICBjb2xvcjp3aGl0ZTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/inicio/inicio.component.ts":
  /*!********************************************!*\
    !*** ./src/app/inicio/inicio.component.ts ***!
    \********************************************/

  /*! exports provided: InicioComponent */

  /***/
  function srcAppInicioInicioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InicioComponent", function () {
      return InicioComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var InicioComponent = function InicioComponent() {
      _classCallCheck(this, InicioComponent);

      this.nombregrupo = 'Buhágana';
      this.nombresimulador = 'ADEN Adventurer Mission | ';
    };

    InicioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inicio',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./inicio.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/inicio/inicio.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./inicio.component.css */
      "./src/app/inicio/inicio.component.css")).default]
    })], InicioComponent);
    /***/
  },

  /***/
  "./src/app/salvaje/salvaje.component.css":
  /*!***********************************************!*\
    !*** ./src/app/salvaje/salvaje.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSalvajeSalvajeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".freebirdFormviewerViewCenteredContent{\r\n    max-width: 100vw !important;\r\n  }\r\n  #myVideo {\r\n    position: fixed;\r\n    right: 0;\r\n    top: -85px;\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    z-index: -20;\r\n  }\r\n  .container-fluid{\r\n    overflow: hidden;\r\n    color:#fff\r\n  }\r\n  .form-control{\r\n    width: 200px;\r\n    display: inline;\r\n  }\r\n  /*BTN*/\r\n  .btn-primary{\r\n    /* width: 120px; */\r\n    display: inline;\r\n    margin-left: 20px;\r\n    \r\n    background-color:#0c1b21;\r\n    border-color:#000;\r\n  }\r\n  .btn-primary.disabled{\r\n    background-color:#0c1b21;\r\n    border-color:#000;\r\n  }\r\n  .container-fluid{\r\n    background-image: url('1.jpg');\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    background-repeat: no-repeat;\r\n    min-height: 100vh;\r\n    background-position-x: right;\r\n  }\r\n  .progreso{\r\n    background-image: url('progreso-1.png');\r\n    background-position-x: center;\r\n    min-height: 180px;\r\n    background-position-y: bottom;\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n  }\r\n  .form-control{\r\n    width: 80%;\r\n    /* margin-top: 130px; */\r\n    display: block;\r\n    border: 2px solid #868686;\r\n    background: #ffffffa1;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2FsdmFqZS9zYWx2YWplLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLGVBQWU7SUFDZixRQUFRO0lBQ1IsVUFBVTtJQUNWLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEI7RUFDRjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGVBQWU7RUFDakI7RUFDQSxNQUFNO0VBQ047SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjs7SUFFakIsd0JBQXdCO0lBQ3hCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0Usd0JBQXdCO0lBQ3hCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsOEJBQTZDO0lBQzdDLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLGlCQUFpQjtJQUNqQiw0QkFBNEI7RUFDOUI7RUFFQTtJQUNFLHVDQUF3RDtJQUN4RCw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEIiLCJmaWxlIjoic3JjL2FwcC9zYWx2YWplL3NhbHZhamUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mcmVlYmlyZEZvcm12aWV3ZXJWaWV3Q2VudGVyZWRDb250ZW50e1xyXG4gICAgbWF4LXdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAjbXlWaWRlbyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogLTg1cHg7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogLTIwO1xyXG4gIH1cclxuICAuY29udGFpbmVyLWZsdWlke1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGNvbG9yOiNmZmZcclxuICB9XHJcbiAgLmZvcm0tY29udHJvbHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICB9XHJcbiAgLypCVE4qL1xyXG4gIC5idG4tcHJpbWFyeXtcclxuICAgIC8qIHdpZHRoOiAxMjBweDsgKi9cclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwYzFiMjE7XHJcbiAgICBib3JkZXItY29sb3I6IzAwMDtcclxuICB9XHJcbiAgLmJ0bi1wcmltYXJ5LmRpc2FibGVke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMGMxYjIxO1xyXG4gICAgYm9yZGVyLWNvbG9yOiMwMDA7XHJcbiAgfVxyXG4gIC5jb250YWluZXItZmx1aWR7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy8xLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogcmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9ncmVzb3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1nLzEvcHJvZ3Jlc28tMS5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiAxODBweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogYm90dG9tO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICB9XHJcbiAgLmZvcm0tY29udHJvbHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICAvKiBtYXJnaW4tdG9wOiAxMzBweDsgKi9cclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzg2ODY4NjtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmZhMTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/salvaje/salvaje.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/salvaje/salvaje.component.ts ***!
    \**********************************************/

  /*! exports provided: SalvajeComponent */

  /***/
  function srcAppSalvajeSalvajeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SalvajeComponent", function () {
      return SalvajeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SalvajeComponent = function SalvajeComponent() {
      _classCallCheck(this, SalvajeComponent);

      this.nombregrupo = 'Buhágana';
      this.nombresimulador = 'Adventurer Mission | ';
      this.daynumber = '7';
    };

    SalvajeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-salvaje',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./salvaje.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/salvaje/salvaje.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./salvaje.component.css */
      "./src/app/salvaje/salvaje.component.css")).default]
    })], SalvajeComponent);
    /***/
  },

  /***/
  "./src/app/sopa/sopa.component.css":
  /*!*****************************************!*\
    !*** ./src/app/sopa/sopa.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppSopaSopaComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".freebirdFormviewerViewCenteredContent{\r\n    max-width: 100vw !important;\r\n  }\r\n  #myVideo {\r\n    position: fixed;\r\n    right: 0;\r\n    top: -85px;\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    z-index: -20;\r\n  }\r\n  .container-fluid{\r\n    overflow: hidden;\r\n    color:#fff\r\n  }\r\n  .form-control{\r\n    width: 200px;\r\n    display: inline;\r\n  }\r\n  /*BTN*/\r\n  .btn-primary{\r\n    /* width: 120px; */\r\n    display: inline;\r\n    margin-left: 20px;\r\n    \r\n    background-color:#0c1b21;\r\n    border-color:#000;\r\n  }\r\n  .btn-primary.disabled{\r\n    background-color:#0c1b21;\r\n    border-color:#000;\r\n  }\r\n  .container-fluid{\r\n    background-image: url('1.jpg');\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    background-repeat: no-repeat;\r\n    min-height: 100vh;\r\n    background-position-x: right;\r\n  }\r\n  .progreso{\r\n    background-image: url('progreso-1.png');\r\n    background-position-x: center;\r\n    min-height: 180px;\r\n    background-position-y: bottom;\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29wYS9zb3BhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLGVBQWU7SUFDZixRQUFRO0lBQ1IsVUFBVTtJQUNWLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEI7RUFDRjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGVBQWU7RUFDakI7RUFDQSxNQUFNO0VBQ047SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjs7SUFFakIsd0JBQXdCO0lBQ3hCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0Usd0JBQXdCO0lBQ3hCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsOEJBQTZDO0lBQzdDLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLGlCQUFpQjtJQUNqQiw0QkFBNEI7RUFDOUI7RUFFQTtJQUNFLHVDQUF3RDtJQUN4RCw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsd0JBQXdCO0VBQzFCIiwiZmlsZSI6InNyYy9hcHAvc29wYS9zb3BhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnJlZWJpcmRGb3Jtdmlld2VyVmlld0NlbnRlcmVkQ29udGVudHtcclxuICAgIG1heC13aWR0aDogMTAwdncgIWltcG9ydGFudDtcclxuICB9XHJcbiAgI215VmlkZW8ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IC04NXB4O1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IC0yMDtcclxuICB9XHJcbiAgLmNvbnRhaW5lci1mbHVpZHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBjb2xvcjojZmZmXHJcbiAgfVxyXG4gIC5mb3JtLWNvbnRyb2x7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgfVxyXG4gIC8qQlROKi9cclxuICAuYnRuLXByaW1hcnl7XHJcbiAgICAvKiB3aWR0aDogMTIwcHg7ICovXHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMGMxYjIxO1xyXG4gICAgYm9yZGVyLWNvbG9yOiMwMDA7XHJcbiAgfVxyXG4gIC5idG4tcHJpbWFyeS5kaXNhYmxlZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzBjMWIyMTtcclxuICAgIGJvcmRlci1jb2xvcjojMDAwO1xyXG4gIH1cclxuICAuY29udGFpbmVyLWZsdWlke1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvMS5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IHJpZ2h0O1xyXG4gIH1cclxuICBcclxuICAucHJvZ3Jlc297XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy8xL3Byb2dyZXNvLTEucG5nKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogY2VudGVyO1xyXG4gICAgbWluLWhlaWdodDogMTgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGJvdHRvbTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/sopa/sopa.component.ts":
  /*!****************************************!*\
    !*** ./src/app/sopa/sopa.component.ts ***!
    \****************************************/

  /*! exports provided: SopaComponent */

  /***/
  function srcAppSopaSopaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SopaComponent", function () {
      return SopaComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");

    var SopaComponent =
    /*#__PURE__*/
    function () {
      function SopaComponent(modalService) {
        _classCallCheck(this, SopaComponent);

        this.modalService = modalService;
        this.nombregrupo = 'Buhágana';
        this.nombresimulador = 'Adventurer Mission | ';
        this.daynumber = '9';
        this.valor = 'CCDEEHHLOPPRRRV';
        this.acertado = false;
      }

      _createClass(SopaComponent, [{
        key: "upperCase",
        value: function upperCase(input) {
          if (input.toUpperCase() == this.valor) {
            this.acertado = true;
          } else {
            this.acertado = false;
          }
        }
      }, {
        key: "openModal",
        value: function openModal(template) {
          this.modalRef = this.modalService.show(template);
        }
      }]);

      return SopaComponent;
    }();

    SopaComponent.ctorParameters = function () {
      return [{
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
      }];
    };

    SopaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sopa',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sopa.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sopa/sopa.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sopa.component.css */
      "./src/app/sopa/sopa.component.css")).default]
    })], SopaComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\neo\SIMULADOR MISSION\jueves-g5\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map