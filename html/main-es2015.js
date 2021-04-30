(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inicio/inicio.component */ "./src/app/inicio/inicio.component.ts");
/* harmony import */ var _instrucciones_instrucciones_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instrucciones/instrucciones.component */ "./src/app/instrucciones/instrucciones.component.ts");
/* harmony import */ var _juegoderoles_juegoderoles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./juegoderoles/juegoderoles.component */ "./src/app/juegoderoles/juegoderoles.component.ts");
/* harmony import */ var _recorrid0_recorrid0_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recorrid0/recorrid0.component */ "./src/app/recorrid0/recorrid0.component.ts");








const routes = [
    { path: '', pathMatch: 'full', redirectTo: '/inicio' },
    {
        path: 'inicio',
        component: _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_2__["InicioComponent"],
    },
    {
        path: 'instrucciones',
        component: _instrucciones_instrucciones_component__WEBPACK_IMPORTED_MODULE_3__["InstruccionesComponent"],
    },
    {
        path: 'recorrid0',
        component: _recorrid0_recorrid0_component__WEBPACK_IMPORTED_MODULE_5__["Recorrid0Component"],
    },
    {
        path: 'juegoderoles',
        component: _juegoderoles_juegoderoles_component__WEBPACK_IMPORTED_MODULE_4__["JuegoderolesComponent"],
    },
    { path: '**', redirectTo: '/inicio' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"], useHash: true })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"], useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.toggle = true;
    }
    receiveMessage($event) {
        this.message = $event;
    }
    change() {
        this.toggle = !this.toggle;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "container-fluid"], [1, "row"], [1, "col-12", 2, "padding", "0px", "min-height", "100vh"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["body[_ngcontent-%COMP%]{background-color: #000;}\r\n.notepad[_ngcontent-%COMP%]{\r\n\tbox-shadow: 0px 0px 8px 8px #000;\r\n\tborder-radius: 6px;\r\n\tborder-top-left-radius: 0px;\r\n\tbackground-color: white;\r\n\tbackground-image: url('block.jpg');\r\n\tbackground-repeat: repeat;\r\n}\r\n.top-notepad[_ngcontent-%COMP%]{\r\n\tbackground-color: #fff;\r\n\tbackground-image: url('bitacora-anillo-top.png');\r\n\tbackground-repeat: repeat-x;\r\n\tbackground-position-x: 0;\r\n\tmin-height: 50px;\r\n}\r\n.old[_ngcontent-%COMP%]{display:block}\r\n.new[_ngcontent-%COMP%]{display: none;}\r\n.btn-bitacora-close[_ngcontent-%COMP%]{\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\tright: 0;\r\n\ttext-decoration: none;\r\n\tbackground: none;\r\n\tborder: none;\r\n\topacity: 0.8;\r\n}\r\n.btn-bitacora-close[_ngcontent-%COMP%]:hover{\r\n\topacity: 1;\r\n}\r\n.btn-bitacora-close[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n\twidth: 45px;\r\n}\r\n.btn-bitacora-open[_ngcontent-%COMP%]{\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\tright: 0;\r\n\ttop: 60px;\r\n\ttext-decoration: none;\r\n\tbackground: none;\r\n\tborder: none;\r\n\topacity: 0.8;\r\n}\r\n.btn-bitacora-open[_ngcontent-%COMP%]:hover{\r\n\topacity: 1;\r\n}\r\n.btn-bitacora-open[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n\twidth: 88px;\r\n}\r\n.oculto[_ngcontent-%COMP%]{display:none;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsS0FBSyxzQkFBc0IsQ0FBQztBQUM1QjtDQUNDLGdDQUFnQztDQUNoQyxrQkFBa0I7Q0FDbEIsMkJBQTJCO0NBQzNCLHVCQUF1QjtDQUN2QixrQ0FBOEM7Q0FDOUMseUJBQXlCO0FBQzFCO0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsZ0RBQTREO0NBQzVELDJCQUEyQjtDQUMzQix3QkFBd0I7Q0FDeEIsZ0JBQWdCO0FBQ2pCO0FBRUEsS0FBSyxhQUFhO0FBQ2xCLEtBQUssYUFBYSxDQUFDO0FBRW5CO0NBQ0MsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IscUJBQXFCO0NBQ3JCLGdCQUFnQjtDQUNoQixZQUFZO0NBQ1osWUFBWTtBQUNiO0FBQ0E7Q0FDQyxVQUFVO0FBQ1g7QUFDQTtDQUNDLFdBQVc7QUFDWjtBQUNBO0NBQ0MsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsU0FBUztDQUNULHFCQUFxQjtDQUNyQixnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLFlBQVk7QUFDYjtBQUNBO0NBQ0MsVUFBVTtBQUNYO0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7QUFDQSxRQUFRLFlBQVksQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO31cclxuLm5vdGVwYWR7XHJcblx0Ym94LXNoYWRvdzogMHB4IDBweCA4cHggOHB4ICMwMDA7XHJcblx0Ym9yZGVyLXJhZGl1czogNnB4O1xyXG5cdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2ltZy9ibG9jay5qcGcpO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XHJcbn1cclxuXHJcbi50b3Atbm90ZXBhZHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvaW1nL2JpdGFjb3JhLWFuaWxsby10b3AucG5nKTtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbi14OiAwO1xyXG5cdG1pbi1oZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5vbGR7ZGlzcGxheTpibG9ja31cclxuLm5ld3tkaXNwbGF5OiBub25lO31cclxuXHJcbi5idG4tYml0YWNvcmEtY2xvc2V7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRiYWNrZ3JvdW5kOiBub25lO1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRvcGFjaXR5OiAwLjg7XHJcbn1cclxuLmJ0bi1iaXRhY29yYS1jbG9zZTpob3ZlcntcclxuXHRvcGFjaXR5OiAxO1xyXG59XHJcbi5idG4tYml0YWNvcmEtY2xvc2UgaW1ne1xyXG5cdHdpZHRoOiA0NXB4O1xyXG59XHJcbi5idG4tYml0YWNvcmEtb3BlbntcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0cmlnaHQ6IDA7XHJcblx0dG9wOiA2MHB4O1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRiYWNrZ3JvdW5kOiBub25lO1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRvcGFjaXR5OiAwLjg7XHJcbn1cclxuLmJ0bi1iaXRhY29yYS1vcGVuOmhvdmVye1xyXG5cdG9wYWNpdHk6IDE7XHJcbn1cclxuLmJ0bi1iaXRhY29yYS1vcGVuIGltZ3tcclxuXHR3aWR0aDogODhweDtcclxufVxyXG4ub2N1bHRve2Rpc3BsYXk6bm9uZTt9XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                // template: '<h1>HOLA {{message}}</h1><br><app-header (messageEvent)="receiveMessage($event)"></app-header>',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inicio/inicio.component */ "./src/app/inicio/inicio.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _instrucciones_instrucciones_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./instrucciones/instrucciones.component */ "./src/app/instrucciones/instrucciones.component.ts");
/* harmony import */ var _juegoderoles_juegoderoles_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./juegoderoles/juegoderoles.component */ "./src/app/juegoderoles/juegoderoles.component.ts");
/* harmony import */ var _recorrid0_recorrid0_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./recorrid0/recorrid0.component */ "./src/app/recorrid0/recorrid0.component.ts");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_4__["InicioComponent"],
        _instrucciones_instrucciones_component__WEBPACK_IMPORTED_MODULE_7__["InstruccionesComponent"],
        _juegoderoles_juegoderoles_component__WEBPACK_IMPORTED_MODULE_8__["JuegoderolesComponent"],
        _recorrid0_recorrid0_component__WEBPACK_IMPORTED_MODULE_9__["Recorrid0Component"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_4__["InicioComponent"],
                    _instrucciones_instrucciones_component__WEBPACK_IMPORTED_MODULE_7__["InstruccionesComponent"],
                    _juegoderoles_juegoderoles_component__WEBPACK_IMPORTED_MODULE_8__["JuegoderolesComponent"],
                    _recorrid0_recorrid0_component__WEBPACK_IMPORTED_MODULE_9__["Recorrid0Component"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/inicio/inicio.component.ts":
/*!********************************************!*\
  !*** ./src/app/inicio/inicio.component.ts ***!
  \********************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/instrucciones"]; };
class InicioComponent {
    constructor() {
        this.nombresimulador = 'ADEN Adventurer Mission | ';
    }
}
InicioComponent.ɵfac = function InicioComponent_Factory(t) { return new (t || InicioComponent)(); };
InicioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InicioComponent, selectors: [["app-inicio"]], decls: 15, vars: 2, consts: [[1, "container-fluid"], [1, "row"], [1, "col-12", 2, "text-align", "center", "color", "white", "margin-top", "2rem"], ["src", "assets/img/logo-aden.png", "alt", "", 2, "margin-top", "3rem"], [1, "equipo-inicio", 2, "border-top", "2px solid #ffffffc4"], [1, "row", 2, "text-align", "center", "margin-top", "3rem", "bottom", "0"], [1, "col-4", 2, "padding", "1rem", "margin-left", "auto", "margin-right", "auto"], [1, "btn-comun", 3, "routerLink"]], template: function InicioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00A1BIENVENIDOS!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "ADVENTURER MISSION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "CONTINUAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["#myVideo[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  right: 0;\r\n  top: -85px;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  z-index: -20;\r\n}\r\n.container-fluid[_ngcontent-%COMP%]{\r\n  background-image: url('00.jpg');\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  background-repeat: no-repeat;\r\n  height: 100vh;\r\n  background-position-y: -200px;\r\n  background-color: #00121c;\r\n}\r\n.btn-play[_ngcontent-%COMP%]{\r\n  background:none;\r\n  border:none;\r\n  opacity: 0.7;\r\n}\r\n.btn-play[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 100px;\r\n}\r\n.btn-play[_ngcontent-%COMP%]:hover{\r\n  background:none;\r\n  border:none;\r\n  opacity: 1;\r\n}\r\n.botones[_ngcontent-%COMP%]{\r\n  text-align: right;\r\n  position: absolute;\r\n  right:2rem;\r\n  bottom:2rem;\r\n}\r\n.btn-comun[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  min-height: 100px;\r\n  border-radius: 5px;\r\n  background: #000000c7;\r\n  color: white;\r\n  border: 1px solid white;\r\n  opacity: 0.7;\r\n}\r\n.btn-comun[_ngcontent-%COMP%]:hover{\r\n    opacity: 1;\r\n}\r\n.btn-comun[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  color: white;\r\n}\r\n.equipo-inicio[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  border-radius: 6px;  \r\n  text-transform: uppercase;\r\n  margin-top: 1rem;\r\n  display: inline-block;\r\n  padding: 1rem;\r\n  font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5pY2lvL2luaWNpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixVQUFVO0VBQ1YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLCtCQUE4QztFQUM5QyxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVO0FBQ1o7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2luaWNpby9pbmljaW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNteVZpZGVvIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAtODVweDtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAtMjA7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy8wMC5qcGcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAtMjAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMTIxYztcclxufVxyXG4uYnRuLXBsYXl7XHJcbiAgYmFja2dyb3VuZDpub25lO1xyXG4gIGJvcmRlcjpub25lO1xyXG4gIG9wYWNpdHk6IDAuNztcclxufVxyXG4uYnRuLXBsYXkgaW1ne1xyXG4gIHdpZHRoOiAxMDBweDtcclxufVxyXG4uYnRuLXBsYXk6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZDpub25lO1xyXG4gIGJvcmRlcjpub25lO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuLmJvdG9uZXN7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OjJyZW07XHJcbiAgYm90dG9tOjJyZW07XHJcbn1cclxuLmJ0bi1jb211bntcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZDogIzAwMDAwMGM3O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuLmJ0bi1jb211bjpob3ZlcntcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5idG4tY29tdW4gaDR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmVxdWlwby1pbmljaW97XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDsgIFxyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InicioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-inicio',
                templateUrl: './inicio.component.html',
                styleUrls: ['./inicio.component.css'],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/instrucciones/instrucciones.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/instrucciones/instrucciones.component.ts ***!
  \**********************************************************/
/*! exports provided: InstruccionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstruccionesComponent", function() { return InstruccionesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class InstruccionesComponent {
    constructor() {
        this.nombregrupo = 'Ngäbe-Buglé';
        this.nombresimulador = 'Adventurer Mission | ';
        //valor:number;
        this.valor = 150;
    }
    ngOnInit() {
    }
}
InstruccionesComponent.ɵfac = function InstruccionesComponent_Factory(t) { return new (t || InstruccionesComponent)(); };
InstruccionesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InstruccionesComponent, selectors: [["app-instrucciones"]], decls: 75, vars: 0, consts: [[1, "container-fluid"], [1, "row"], [1, "col-12", "contenido"], [1, "col-10", "contenedor-consigna", "load-left2right-1"], [1, "col", "10", "progreso"], [1, "row", "segundo"], [1, "col-10", 2, "margin-left", "auto", "margin-right", "auto"], [1, "titulo"], [1, "texto-interno"], [1, "col-12", "completar"], [1, "col-4"], [1, "col-10", "completar"], ["routerLink", "/juegoderoles", 1, "col-10", "btn-iniciar", "load-left2right-1"]], template: function InstruccionesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Bienvenidos al Simulador ADVENTURER MISSION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "En este juego ustedes formar\u00E1n equipos al azar. Ocupar\u00E1n roles en esos equipos y tomaran decisiones de acuerdo al rol. En algun momento deber\u00E1n trabajar en las salas peque\u00F1as. A las que deber\u00E1n llamar por el nombre que les toque al grupo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "En otros momentos deber\u00E1n pasar al la sala grande. Uno de ustedes compartira pantalla en la sala peque\u00F1a. No puede ser el Contador del equipo. Otro de ustedes deber\u00E1 usar el celular y alguna app para leer c\u00F3digos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Todo depender\u00E1 de las decisiones que tomen. Estas pueden ser:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "DECISIONES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "DE ADAPTACI\u00D3N");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Las decisiones de adaptaci\u00F3n se refieren a las elecciones que se hacen ante una combinaci\u00F3n de factores que se salen un poco de lo habitual y que tratan de abordar situaciones emergentes. De all\u00ED que implican una mejora o modificaci\u00F3n de las rutinas habituales.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "DECISIONES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "INNOVADORAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Las decisiones innovadoras se basan en el descubrimiento, la identificaci\u00F3n y el diagn\u00F3stico de problemas inusuales y ambiguos y/o el desarrollo de soluciones alternativas \u00FAnicas o creativas. Por su naturaleza, estas decisiones entra\u00F1an una ruptura con el pasado y casi nunca se presentan en secuencia l\u00F3gica y ordenada.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "DECISIONES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "SITUACIONALES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Normalmente, se basan en informaci\u00F3n que cambia a gran velocidad. Es m\u00E1s, tal vez se tomen antes de que los problemas hayan sido definidos y entendidos a fondo. Por lo tanto, para que las personas tomen decisiones efectivas deben poner especial atenci\u00F3n en definir correctamente los problemas y en reconocer que las primeras acciones afectan de forma ostensible las decisiones posteriores.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Deben repartirse 4 cargos principales: Uno de ustedes ocupar\u00E1 el rol del ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "director log\u00EDstico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, ". \u00C9ste ser\u00E1 el encargado de darle respuesta a las consignas que incluyan c\u00E1lculos precisos. Su formaci\u00F3n acad\u00E9mica pasa por el \u00E1rea de las matem\u00E1ticas y la ingenier\u00EDa. Sus estudios y su experiencia lo han posicionado como quien manteniendo la mente fr\u00EDa puede tomar decisiones importantes en momentos claves de la misi\u00F3n, sin dejarse llevar por lo emocional.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Otro de ustedes ser\u00E1 el ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "director de operaciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, ". \u00C9ste ser\u00E1 el encargado de manejar las consignas que hablen de ubicaciones y planimetr\u00EDa. Sus estudios del terreno y su experiencia en situaciones extremas le posibilitar\u00E1n accionar sin tener que consultar ni consensuar con el resto del equipo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "El tercer puesto ser\u00E1 el de ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Director General");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, ". Este ser\u00E1 el encargado de tomar las decisiones que incluyan lo emocional y el cuidado del equipo. Su formaci\u00F3n de grado pasa por los Recursos Humanos y el liderazgo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Si existe una cuarta persona deber\u00E1 encargarse de completar la bit\u00E1cora y manejar el dinero que vayan encontrando para poder regularlo hasta alcanzar la misi\u00F3n. De no existir una cuarta persona este cargo caer\u00E1 en el Director de Operaciones.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "No se precipiten en las decisiones, escuchen todas las opiniones, revean antes de enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "la respuesta solicitada, y vuelvanse a plantear la posibilidad de estar errados.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "No corremos contra el tiempo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "REPETIMOS: No es una carrera.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Para lograr completar la misi\u00F3n deben trabajar en equipo, obteniendo lo mejor de cada uno y sumado al resto de los integrantes. Les daremos 10 minutos para que se presenten y den cuenta de sus mejores habilidades. Luego de ello deber\u00E1n repartirse los cargos de acuerdo a esas habilidades. Cada uno tendr\u00E1 que resolver consignas diferentes. Esperamos de ustedes lealtad, trabajo en equipo y entrega a la causa.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Una vez repartidos, les pedimos que se identifiquen renombrando su imagen en ZOOM (Director General - Nombre)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Reci\u00E9n despues de eso podr\u00E1n iniciar el recorrido.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "CONTINUAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".header[_ngcontent-%COMP%]{\r\n  height: 80px;\r\n  padding-top: 10px;\r\n  background-color: #0c1b21;\r\n  border-bottom: 1px solid #fff;;\r\n}\r\n.header[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%]{\r\n  padding-top: 10px;\r\n}\r\n.header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n}\r\n.marca[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n  display: inline;\r\n}\r\n.marca[_ngcontent-%COMP%]{\r\n  text-align: right;\r\n  padding-top: 20px !important;\r\n}\r\n.marca[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 100px;\r\n  margin-top: -5px;\r\n}\r\n.calendario[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n}\r\n.calendar-bg[_ngcontent-%COMP%]{\r\n  z-index: 3;\r\n  width: 57px;\r\n}\r\n.calendario[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n  z-index: 6;\r\n  margin-top: -35px;\r\n}\r\n\r\n.container-fluid[_ngcontent-%COMP%]{\r\n  background-image: url('00.jpg');\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  background-repeat: no-repeat;\r\n}\r\n.primero[_ngcontent-%COMP%]{\r\n  padding-top: 10px;\r\n  text-align: right;\r\n}\r\n.primero[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n  margin-left: auto;\r\n  text-decoration: none;\r\n}\r\n.primero[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  list-style-type: none;\r\n  margin-top: 20px;\r\n}\r\n.primero[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  background-color: #fff;\r\n  color: #000;\r\n  padding: 5px;\r\n}\r\n.segundo[_ngcontent-%COMP%]{\r\n  margin-top: 2rem;\r\n}\r\n.descripcion[_ngcontent-%COMP%]{\r\n  border: 2px solid #fff;\r\n  padding: 20px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n.descripcion[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n color: #000;\r\n position: absolute;\r\n top: -47px;\r\n left: 69px;\r\n background: #fff;\r\n padding: 5px;\r\n}\r\n.descripcion[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  color: #fff;\r\n}\r\n.tercero[_ngcontent-%COMP%]{\r\n  text-align: left;\r\n}\r\n.tercero[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n  margin-right: auto;\r\n  text-decoration: none;\r\n  padding-left: 0px;\r\n}\r\n.tercero[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  list-style-type: none;\r\n  margin-top: 20px;\r\n}\r\n.tercero[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  background-color: #fff;\r\n  color: #000;\r\n  padding: 5px;\r\n}\r\n.cuarto[_ngcontent-%COMP%]{\r\n  margin-top: 2rem;\r\n}\r\n.cuarto[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  padding: 10px;\r\n  text-align: center;\r\n  color: #fff;\r\n  border: 1px solid #fff;\r\n}\r\n.btn-inicio[_ngcontent-%COMP%]{\r\n  text-decoration: none;\r\n  padding: 10px;\r\n  margin: 20px;\r\n  border: 1px solid #fff;\r\n  color: #fff;\r\n  background:none;\r\n}\r\n.btn-inicio[_ngcontent-%COMP%]:hover{\r\n  text-decoration: none;\r\n  padding: 10px;\r\n  margin: 20px;\r\n  border: 1px solid #fff;\r\n  color: #fff;\r\n  background:#fff4;\r\n}\r\n\r\n\r\n\r\n.hvr-outline-out[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\r\n}\r\n.hvr-outline-out[_ngcontent-%COMP%]:before {\r\n  content: '';\r\n  position: absolute;\r\n  border: #e1e1e1 solid 4px;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  transition-duration: 0.3s;\r\n  transition-property: top, right, bottom, left;\r\n}\r\n.hvr-outline-out[_ngcontent-%COMP%]:hover:before, .hvr-outline-out[_ngcontent-%COMP%]:focus:before, .hvr-outline-out[_ngcontent-%COMP%]:active:before {\r\n  top: -8px;\r\n  right: -8px;\r\n  bottom: -8px;\r\n  left: -8px;\r\n}\r\n.lis-1[_ngcontent-%COMP%]{\r\n  -webkit-animation-duration: 2s;\r\n          animation-duration: 2s;\r\n  -webkit-animation-name: slidein;\r\n          animation-name: slidein;\r\n}\r\n.lis-2[_ngcontent-%COMP%]{\r\n  -webkit-animation-duration: 2s;\r\n          animation-duration: 2s;\r\n  -webkit-animation-name: slidein;\r\n          animation-name: slidein;\r\n  animation-delay: 8ms;\r\n  -moz-animation-delay: 8ms;\r\n  -webkit-animation-delay: 8ms;\r\n  -o-animation-delay: 8ms;\r\n}\r\n.lis-3[_ngcontent-%COMP%]{\r\n  -webkit-animation-duration: 2s;\r\n          animation-duration: 2s;\r\n  -webkit-animation-name: slidein;\r\n          animation-name: slidein;\r\n  animation-delay: 15ms;\r\n  -moz-animation-delay: 15ms;\r\n  -webkit-animation-delay: 15ms;\r\n  -o-animation-delay: 15ms;\r\n}\r\n@-webkit-keyframes slidein {\r\n  0% {\r\n      transform: translateX(+100%);\r\n  }\r\n  100% {\r\n      transform: translateX(0);\r\n  }\r\n}\r\n@keyframes slidein {\r\n  0% {\r\n      transform: translateX(+100%);\r\n  }\r\n  100% {\r\n      transform: translateX(0);\r\n  }\r\n}\r\n.descripcion[_ngcontent-%COMP%]{\r\n  -webkit-animation-duration: 3s;\r\n          animation-duration: 3s;\r\n  -webkit-animation-name: fadeIn;\r\n          animation-name: fadeIn;\r\n}\r\n.cuarto[_ngcontent-%COMP%]{\r\n  -webkit-animation-duration: 3s;\r\n          animation-duration: 3s;\r\n  -webkit-animation-name: fadeIn;\r\n          animation-name: fadeIn;\r\n}\r\n@-webkit-keyframes fadeIn{\r\n  0%{\r\n    opacity: 0;\r\n  }\r\n  100%{\r\n    opacity: 100;\r\n  }\r\n}\r\n@keyframes fadeIn{\r\n  0%{\r\n    opacity: 0;\r\n  }\r\n  100%{\r\n    opacity: 100;\r\n  }\r\n}\r\n.list-1[_ngcontent-%COMP%]{\r\n  -webkit-animation-duration: 2s;\r\n          animation-duration: 2s;\r\n  -webkit-animation-name: slideIn2;\r\n          animation-name: slideIn2;\r\n}\r\n.list-2[_ngcontent-%COMP%]{\r\n  -webkit-animation-duration: 3s;\r\n          animation-duration: 3s;\r\n  -webkit-animation-name: slideIn2;\r\n          animation-name: slideIn2;\r\n  animation-delay: 8ms;\r\n  -moz-animation-delay: 8ms;\r\n  -webkit-animation-delay: 8ms;\r\n  -o-animation-delay: 8ms;\r\n}\r\n.list-3[_ngcontent-%COMP%]{\r\n  -webkit-animation-duration: 4s;\r\n          animation-duration: 4s;\r\n  -webkit-animation-name: slideIn2;\r\n          animation-name: slideIn2;\r\n  animation-delay: 15ms;\r\n  -moz-animation-delay: 15ms;\r\n  -webkit-animation-delay: 15ms;\r\n  -o-animation-delay: 15ms;\r\n}\r\n@-webkit-keyframes slideIn2 {\r\n  0% {\r\n      transform: translateX(-100%);\r\n  }\r\n  100% {\r\n      transform: translateX(0);\r\n  }\r\n}\r\n@keyframes slideIn2 {\r\n  0% {\r\n      transform: translateX(-100%);\r\n  }\r\n  100% {\r\n      transform: translateX(0);\r\n  }\r\n}\r\n.titulo[_ngcontent-%COMP%]{\r\n  background: #554d43;\r\n  color: white;\r\n  padding: 5px 0px;\r\n}\r\n.texto-interno[_ngcontent-%COMP%]{\r\n  font-size: 18pt;\r\n  color: #000;\r\n}\r\n.btn-iniciar[_ngcontent-%COMP%]{\r\n  padding: 1rem;margin-top: 1rem;margin-left: auto;margin-right: auto;background: #554d43;border: none;color: white;border-radius: 3px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zdHJ1Y2Npb25lcy9pbnN0cnVjY2lvbmVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUJBQXFCO0FBQ3JCO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQiw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7QUFDQSx1QkFBdUI7QUFNdkI7RUFDRSwrQkFBOEM7RUFDOUMsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1Qiw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUVBO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsVUFBVTtDQUNWLGdCQUFnQjtDQUNoQixZQUFZO0FBQ2I7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7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WSxDQUFDLGtCQUFrQjtBQUN0SSIsImZpbGUiOiJzcmMvYXBwL2luc3RydWNjaW9uZXMvaW5zdHJ1Y2Npb25lcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypIRUFERVIgWSBTVVMgQ09TQVMqL1xyXG4uaGVhZGVye1xyXG4gIGhlaWdodDogODBweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMxYjIxO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmOztcclxufVxyXG4uaGVhZGVyIC5jb2wtbWQtNHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG4uaGVhZGVyIGgze1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5tYXJjYSBoNXtcclxuICBjb2xvcjogI2ZmZjtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuLm1hcmNhe1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXJjYSBpbWd7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIG1hcmdpbi10b3A6IC01cHg7XHJcbn1cclxuLmNhbGVuZGFyaW97XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jYWxlbmRhci1iZ3tcclxuICB6LWluZGV4OiAzO1xyXG4gIHdpZHRoOiA1N3B4O1xyXG59XHJcbi5jYWxlbmRhcmlvIGgze1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHotaW5kZXg6IDY7XHJcbiAgbWFyZ2luLXRvcDogLTM1cHg7XHJcbn1cclxuLyogL0hFQURFUiBZIFNVUyBDT1NBUyovXHJcblxyXG5cclxuXHJcblxyXG5cclxuLmNvbnRhaW5lci1mbHVpZHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy8wMC5qcGcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4ucHJpbWVyb3tcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnByaW1lcm8gdWx7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5wcmltZXJvIHVsIGxpe1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5wcmltZXJvIHVsIGxpIHNwYW57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBjb2xvcjogIzAwMDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLnNlZ3VuZG97XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG4uZGVzY3JpcGNpb257XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuLmRlc2NyaXBjaW9uIHNwYW57XHJcbiBjb2xvcjogIzAwMDtcclxuIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuIHRvcDogLTQ3cHg7XHJcbiBsZWZ0OiA2OXB4O1xyXG4gYmFja2dyb3VuZDogI2ZmZjtcclxuIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmRlc2NyaXBjaW9uIHB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4udGVyY2Vyb3tcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4udGVyY2VybyB1bHtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG59XHJcbi50ZXJjZXJvIHVsIGxpe1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi50ZXJjZXJvIHVsIGxpIHNwYW57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBjb2xvcjogIzAwMDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5jdWFydG97XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG5cclxuLmN1YXJ0byBkaXZ7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbn1cclxuXHJcbi5idG4taW5pY2lve1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6bm9uZTtcclxufVxyXG5cclxuLmJ0bi1pbmljaW86aG92ZXJ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDojZmZmNDtcclxufVxyXG4vKiBcclxuLnByaW1lcm8gdWwgbGkgc3BhbiB7XHJcbiAgYm94LXNoYWRvdzogNXB4IDEwcHg7XHJcbn1cclxuLnByaW1lcm8gdWwgbGkgc3BhbiB7XHJcbiAgYm94LXNoYWRvdzogNXB4IDEwcHggMjBweCAjZmZmO1xyXG59ICovXHJcbi8qQU5JTUFDSU9ORVMqL1xyXG5cclxuLyogT3V0bGluZSBPdXQgKi9cclxuLmh2ci1vdXRsaW5lLW91dCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDFweCkgdHJhbnNsYXRlWigwKTtcclxuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDFweCkgdHJhbnNsYXRlWigwKTtcclxuICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5odnItb3V0bGluZS1vdXQ6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyOiAjZTFlMWUxIHNvbGlkIDRweDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiB0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQ7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0O1xyXG59XHJcbi5odnItb3V0bGluZS1vdXQ6aG92ZXI6YmVmb3JlLCAuaHZyLW91dGxpbmUtb3V0OmZvY3VzOmJlZm9yZSwgLmh2ci1vdXRsaW5lLW91dDphY3RpdmU6YmVmb3JlIHtcclxuICB0b3A6IC04cHg7XHJcbiAgcmlnaHQ6IC04cHg7XHJcbiAgYm90dG9tOiAtOHB4O1xyXG4gIGxlZnQ6IC04cHg7XHJcbn1cclxuXHJcbi5saXMtMXtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZWluO1xyXG59XHJcblxyXG4ubGlzLTJ7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICBhbmltYXRpb24tbmFtZTogc2xpZGVpbjtcclxuICBhbmltYXRpb24tZGVsYXk6IDhtcztcclxuICAtbW96LWFuaW1hdGlvbi1kZWxheTogOG1zO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA4bXM7XHJcbiAgLW8tYW5pbWF0aW9uLWRlbGF5OiA4bXM7XHJcbn1cclxuXHJcbi5saXMtM3tcclxuICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZWluO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMTVtcztcclxuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMTVtcztcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTVtcztcclxuICAtby1hbmltYXRpb24tZGVsYXk6IDE1bXM7XHJcbn1cclxuQGtleWZyYW1lcyBzbGlkZWluIHtcclxuICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgrMTAwJSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgfVxyXG59XHJcblxyXG4uZGVzY3JpcGNpb257XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcclxuICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xyXG59XHJcbi5jdWFydG97XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcclxuICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbntcclxuICAwJXtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDEwMCV7XHJcbiAgICBvcGFjaXR5OiAxMDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubGlzdC0xe1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW4yO1xyXG59XHJcblxyXG4ubGlzdC0ye1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW4yO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogOG1zO1xyXG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiA4bXM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDhtcztcclxuICAtby1hbmltYXRpb24tZGVsYXk6IDhtcztcclxufVxyXG5cclxuLmxpc3QtM3tcclxuICBhbmltYXRpb24tZHVyYXRpb246IDRzO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZUluMjtcclxuICBhbmltYXRpb24tZGVsYXk6IDE1bXM7XHJcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDE1bXM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDE1bXM7XHJcbiAgLW8tYW5pbWF0aW9uLWRlbGF5OiAxNW1zO1xyXG59XHJcbkBrZXlmcmFtZXMgc2xpZGVJbjIge1xyXG4gIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICB9XHJcbn1cclxuXHJcbi50aXR1bG97XHJcbiAgYmFja2dyb3VuZDogIzU1NGQ0MztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogNXB4IDBweDtcclxufVxyXG5cclxuLnRleHRvLWludGVybm97XHJcbiAgZm9udC1zaXplOiAxOHB0O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4uYnRuLWluaWNpYXJ7XHJcbiAgcGFkZGluZzogMXJlbTttYXJnaW4tdG9wOiAxcmVtO21hcmdpbi1sZWZ0OiBhdXRvO21hcmdpbi1yaWdodDogYXV0bztiYWNrZ3JvdW5kOiAjNTU0ZDQzO2JvcmRlcjogbm9uZTtjb2xvcjogd2hpdGU7Ym9yZGVyLXJhZGl1czogM3B4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InstruccionesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-instrucciones',
                templateUrl: './instrucciones.component.html',
                styleUrls: ['./instrucciones.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/juegoderoles/juegoderoles.component.ts":
/*!********************************************************!*\
  !*** ./src/app/juegoderoles/juegoderoles.component.ts ***!
  \********************************************************/
/*! exports provided: JuegoderolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoderolesComponent", function() { return JuegoderolesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/recorrid0"]; };
class JuegoderolesComponent {
    constructor() {
        this.nombregrupo = 'Ngäbe-Buglé';
    }
    ngOnInit() {
    }
}
JuegoderolesComponent.ɵfac = function JuegoderolesComponent_Factory(t) { return new (t || JuegoderolesComponent)(); };
JuegoderolesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JuegoderolesComponent, selectors: [["app-juegoderoles"]], decls: 95, vars: 3, consts: [[1, "container-fluid"], [1, "row"], [1, "col-12", 2, "text-align", "center", "color", "white", "margin-top", "2rem"], ["src", "assets/img/logo-aden.png", "alt", "", 2, "margin-top", "3rem"], [1, "equipo-inicio", 2, "border-top", "2px solid #ffffffc4"], [1, "row", 2, "text-align", "center", "margin-top", "3rem", "bottom", "0"], [1, "col-8", "texto", 2, "padding", "1rem 3rem", "margin-right", "auto", "margin-left", "auto"], [1, "col-12", 2, "text-align", "center"], ["src", "https://docs.google.com/forms/d/e/1FAIpQLSd32bYmlUiBQrqWBMuw02VdlUIU4bDsXaHFy0_-fOR7sHSQQQ/viewform?embedded=true", "width", "90%", "height", "800", "frameborder", "0", "marginheight", "0", "marginwidth", "0"], [1, "col-10", 2, "margin", "3rem 0px 3rem", "text-align", "center", "margin-left", "auto", "margin-right", "auto"], [1, "btn-volver", 3, "routerLink"], [2, "color", "black"]], template: function JuegoderolesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ADVENTURER MISSION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u00BFQu\u00E9 es un juego de rol?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "El juego de rol es una actividad que se realiza principalmente con la imaginaci\u00F3n. Es completamente interpretativo, es decir, todos los participantes deben meterse en el papel de un personaje descripto y ficticio con habilidades similares o no, a las que usted posee. Por ejemplo, en este juego \u201CAdventurer Mission\u201D en particular se requiere que los participantes interpreten 4 roles espec\u00EDficos dentro del grupo de tareas que tendr\u00E1 asignada una misi\u00F3n. La din\u00E1mica de los juegos de rol es muy similar a la de los principales juegos de la infancia como \u201Cpolic\u00EDas y ladrones\u201D, \u201Cpap\u00E1 y mam\u00E1\u201D o \u201Cindios y vaqueros\u201D, s\u00F3lo que en el rol se elaboran m\u00E1s las caracter\u00EDsticas espec\u00EDficas de los personajes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Todas esas caracter\u00EDsticas estar\u00E1n detalladas en las hojas del personaje.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u00BFQu\u00E9 es una hoja de personaje? La hoja de personaje contiene toda la informaci\u00F3n referente a las caracter\u00EDsticas del avatar de un jugador, incluyendo habilidades mentales y f\u00EDsicas, as\u00ED como descripci\u00F3n del personaje, puntuaci\u00F3n y notas de importancia. La hoja de personaje var\u00EDa de juego a juego. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "CONSTRUCCI\u00D3N DE PERSONAJES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Los personajes son la base del juego, ellos son los avatares de los jugadores en el mundo imaginario donde se desarrollan las acciones. Antes que cualquier otra actividad, cada participante de la sesi\u00F3n debe crear su propio personaje, el cual deber\u00E1 interpretar durante todo el juego. Para crearlo se deben seguir los siguientes pasos:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Elegir la profesi\u00F3n del personaje.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Asignar el temperamento del personaje. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Asignar las caracter\u00EDsticas individuales. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Asignarle un rol en el equipo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "ELECCI\u00D3N DE PROFESIONES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Cada personaje debe tener un trasfondo, un pasado que marcar\u00E1 la base de su comportamiento y habilidades durante el juego.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "En Adventurer Mission, los jugadores deben escoger una profesi\u00F3n cercana a su \u00E1rea de estudio y de acuerdo con el test realizado como inicio de la clase.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Hay Cuatro posibles profesiones a escoger:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "INGENIERO:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Los ingenieros son la fuerza pensante del grupo, son excelentes en lo estrat\u00E9gico, pero les gusta pasar desapercibidos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "COMERCIALES:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Estos son la fuerza de ataque del grupo, son excelentes en el combate, pero tienen problemas para pasar desapercibidos. Conoce las artes del disfraz, del enga\u00F1o, experto en trampas y son maestros en las artes de la distracci\u00F3n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "ABOGADO:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " El abogado es el recolector de informaci\u00F3n por excelencia, experto en seguir rastros y personas, ingresar en edificios vigilados sin ser descubierto y es pr\u00E1cticamente imposible de seguir.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "CONTADOR:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Este es quien maneja las finanzas, los c\u00E1lculos de tiempo, las estad\u00EDsticas y el recuento de v\u00EDveres.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "ASIGNACI\u00D3N DEL TEMPERAMENTO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Dentro del trasfondo del personaje, tambi\u00E9n debe existir un temperamento que ha marcado su \u201Cvida\u201D y determina de alguna manera las habilidades y defectos del presente. Los jugadores, as\u00ED como en la vida real, no tendr\u00E1n la oportunidad de elegir el temperamento que definir\u00E1 a su personaje dentro del juego. Se asignar\u00E1 un temperamento al azar. Uno de los de la mesa se encargar\u00E1 de mezclar despu\u00E9s de cada elecci\u00F3n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Dependiendo del n\u00FAmero sacado se asignar\u00E1 alguno de los siguientes caracteres:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Sangu\u00EDneo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Anal\u00EDtico y calculador, se mantiene apacible incluso en las situaciones de mayor tensi\u00F3n. No sucumbe ante pr\u00E1cticamente ninguna provocaci\u00F3n. Nunca se lanzar\u00E1 de primero al combate, prefiere recoger la mayor cantidad de informaci\u00F3n antes de actuar. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Col\u00E9rico:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Impulsivo y muy emocional. Reacciona ante las situaciones sin estrategia previa y suele dejar que sus impulsos marquen la gu\u00EDa de sus acciones. Sucumbe ante la menor provocaci\u00F3n y reflexiona despu\u00E9s de actuar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Flem\u00E1tico:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Fr\u00EDo y calculador. Siempre est\u00E1 esperando la mejor oportunidad para su mayor provecho, poco les importa la vida ajena. Cuando sus habilidades no le son suficientes, enga\u00F1a, hace trampa y utiliza a cualquiera con tal de lograr sus objetivos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Melanc\u00F3lico:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Reflexivo y muy emocional. Sus convicciones son las que marcan su actuar. Respetuoso y apegado a la ley, siempre intentar\u00E1 hacerla cumplir por todos los medios. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "ASIGNACI\u00D3N DE CARACTER\u00CDSTICAS INDIVIDUALES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Las caracter\u00EDsticas que se colocar\u00E1n a continuaci\u00F3n son el equivalente a las capacidades f\u00EDsicas del personaje dentro del juego, y ser\u00E1n colocadas por cada participante desde sus caracter\u00EDsticas propias aportadas al personaje.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Y estas ser\u00E1n utilizadas para interactuar con el entorno y con los otros equipos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "iframe", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Cargando\u2026");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "CONTINUAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("EQUIPO ", ctx.nombregrupo, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["#myVideo[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    right: 0;\r\n    top: -85px;\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    z-index: -20;\r\n  }\r\n  .container-fluid[_ngcontent-%COMP%]{\r\n    background-color: #00121c;\r\n  }\r\n  .btn-play[_ngcontent-%COMP%]{\r\n    background:none;\r\n    border:none;\r\n    opacity: 0.7;\r\n}\r\n  .btn-play[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 100px;\r\n}\r\n  .btn-play[_ngcontent-%COMP%]:hover{\r\n    background:none;\r\n    border:none;\r\n    opacity: 1;\r\n}\r\n  .botones[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n    position: absolute;\r\n    right:2rem;\r\n    bottom:2rem;\r\n}\r\n  .btn-comun[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    min-height: 100px;\r\n    border-radius: 5px;\r\n    background: #740404c7;\r\n    color: white;\r\n    border: 1px solid white;\r\n    opacity: 1;\r\n  }\r\n  .btn-comun[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    color: white;\r\n  }\r\n  .texto[_ngcontent-%COMP%]{\r\n    color:white;\r\n    text-align: left;\r\n}\r\n  .btn-volver[_ngcontent-%COMP%]{\r\n    background-color:gray;\r\n    padding: 0px;\r\n    width: 100%;\r\n    color:black;\r\n    text-align: center;\r\n    border: 1px solid #fff;\r\n    border-radius: 6px;\r\n    opacity: 1;\r\n    margin-top: 5px;\r\n}\r\n  .btn-volver[_ngcontent-%COMP%]:hover{\r\n    opacity: 1;\r\n}\r\n  .equipo-inicio[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    border-radius: 6px;  \r\n    text-transform: uppercase;\r\n    margin-top: 1rem;\r\n    display: inline-block;\r\n    padding: 1rem;\r\n    font-weight: bold;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvanVlZ29kZXJvbGVzL2p1ZWdvZGVyb2xlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixVQUFVO0lBQ1YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNGO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0VBQ0E7SUFDSSxZQUFZO0FBQ2hCO0VBQ0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFVBQVU7QUFDZDtFQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztBQUNmO0VBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixVQUFVO0VBQ1o7RUFHQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2Q7RUFFRjtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7RUFDQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZUFBZTtBQUNuQjtFQUNBO0lBQ0ksVUFBVTtBQUNkO0VBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixpQkFBaUI7RUFDbkIiLCJmaWxlIjoic3JjL2FwcC9qdWVnb2Rlcm9sZXMvanVlZ29kZXJvbGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbXlWaWRlbyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogLTg1cHg7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogLTIwO1xyXG4gIH1cclxuICAuY29udGFpbmVyLWZsdWlke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMTIxYztcclxuICB9XHJcbi5idG4tcGxheXtcclxuICAgIGJhY2tncm91bmQ6bm9uZTtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG59XHJcbi5idG4tcGxheSBpbWd7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbn1cclxuLmJ0bi1wbGF5OmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDpub25lO1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcbi5ib3RvbmVze1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDoycmVtO1xyXG4gICAgYm90dG9tOjJyZW07XHJcbn1cclxuLmJ0bi1jb211bntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNzQwNDA0Yzc7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICBcclxuICAuYnRuLWNvbXVuIGg0e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbi50ZXh0b3tcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uYnRuLXZvbHZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6Z3JheTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4uYnRuLXZvbHZlcjpob3ZlcntcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5lcXVpcG8taW5pY2lve1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4OyAgXHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JuegoderolesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-juegoderoles',
                templateUrl: './juegoderoles.component.html',
                styleUrls: ['./juegoderoles.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/recorrid0/recorrid0.component.ts":
/*!**************************************************!*\
  !*** ./src/app/recorrid0/recorrid0.component.ts ***!
  \**************************************************/
/*! exports provided: Recorrid0Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recorrid0Component", function() { return Recorrid0Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class Recorrid0Component {
    constructor() { }
    ngOnInit() {
    }
}
Recorrid0Component.ɵfac = function Recorrid0Component_Factory(t) { return new (t || Recorrid0Component)(); };
Recorrid0Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Recorrid0Component, selectors: [["app-recorrid0"]], decls: 39, vars: 0, consts: [[1, "container-fluid"], [1, "row"], [1, "col-8", 2, "margin-left", "auto", "margin-right", "auto", "padding", "1rem", "border", "1px solid #fff", "border-radius", "5px", "color", "#fff", "text-align", "center", "font-size", "13pt", "margin-top", "1rem", "margin-bottom", "1rem"], [1, "col-12", 2, "margin-left", "auto", "margin-right", "auto"], ["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "0", 1, "active"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "1"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "2"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "3"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "4"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "assets/img/recorrido/r-0.jpg", "alt", "0", 1, "d-block", "w-100"], [1, "carousel-item"], ["src", "assets/img/recorrido/r-1.jpg", "alt", "1", 1, "d-block", "w-100"], ["src", "assets/img/recorrido/r-2.jpg", "alt", "2", 1, "d-block", "w-100"], ["src", "assets/img/recorrido/r-3.jpg", "alt", "3", 1, "d-block", "w-100"], ["src", "assets/img/recorrido/r-4.jpg", "alt", "4", 1, "d-block", "w-100"], ["src", "assets/img/recorrido/r-5.jpg", "alt", "5", 1, "d-block", "w-100"], ["src", "assets/img/recorrido/r-6.jpg", "alt", "6", 1, "d-block", "w-100"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "col-8", 2, "margin-left", "auto", "margin-right", "auto", "background", "#ff0", "border-radius", "7px", "margin-top", "1rem", "text-align", "center"]], template: function Recorrid0Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "A continuaci\u00F3n te mostramos c\u00F3mo est\u00E1 conformada la plataforma, su interfaz. Una vez que hayan finalizado, deber\u00E1n aguardar por el nuevo link para su equipo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ol", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Anterior");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Siguiente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Aguarden por instrucciones.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".header[_ngcontent-%COMP%]{\r\n    height: 80px;\r\n    padding-top: 10px;\r\n    background-color: #0c1b21;\r\n    border-bottom: 1px solid #fff;;\r\n  }\r\n.header[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%]{\r\n    padding-top: 10px;\r\n  }\r\n.header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n  }\r\n.marca[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n    display: inline;\r\n  }\r\n.marca[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n    padding-top: 20px !important;\r\n  }\r\n.marca[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 100px;\r\n    margin-top: -5px;\r\n  }\r\n.calendario[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n  }\r\n.calendar-bg[_ngcontent-%COMP%]{\r\n    z-index: 3;\r\n    width: 57px;\r\n  }\r\n.calendario[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n    z-index: 6;\r\n    margin-top: -35px;\r\n  }\r\n\r\n.container-fluid[_ngcontent-%COMP%]{\r\n    \r\n    min-height: 100vh;\r\n  }\r\n.primero[_ngcontent-%COMP%]{\r\n    padding-top: 10px;\r\n    text-align: right;\r\n  }\r\n.primero[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    margin-left: auto;\r\n    text-decoration: none;\r\n  }\r\n.primero[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    list-style-type: none;\r\n    margin-top: 20px;\r\n  }\r\n.primero[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    background-color: #fff;\r\n    color: #000;\r\n    padding: 5px;\r\n  }\r\n.segundo[_ngcontent-%COMP%]{\r\n    margin-top: 2rem;\r\n  }\r\n.descripcion[_ngcontent-%COMP%]{\r\n    border: 2px solid #fff;\r\n    padding: 20px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n  }\r\n.descripcion[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n   color: #000;\r\n   position: absolute;\r\n   top: -47px;\r\n   left: 69px;\r\n   background: #fff;\r\n   padding: 5px;\r\n  }\r\n.descripcion[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    color: #fff;\r\n  }\r\n.tercero[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n  }\r\n.tercero[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    margin-right: auto;\r\n    text-decoration: none;\r\n    padding-left: 0px;\r\n  }\r\n.tercero[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    list-style-type: none;\r\n    margin-top: 20px;\r\n  }\r\n.tercero[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    background-color: #fff;\r\n    color: #000;\r\n    padding: 5px;\r\n  }\r\n.cuarto[_ngcontent-%COMP%]{\r\n    margin-top: 2rem;\r\n  }\r\n.cuarto[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding: 10px;\r\n    text-align: center;\r\n    color: #fff;\r\n    border: 1px solid #fff;\r\n  }\r\n.btn-inicio[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    padding: 10px;\r\n    margin: 20px;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n    background:none;\r\n  }\r\n.btn-inicio[_ngcontent-%COMP%]:hover{\r\n    text-decoration: none;\r\n    padding: 10px;\r\n    margin: 20px;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n    background:#fff4;\r\n  }\r\n\r\n\r\n\r\n.hvr-outline-out[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    transform: perspective(1px) translateZ(0);\r\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n    position: relative;\r\n  }\r\n.hvr-outline-out[_ngcontent-%COMP%]:before {\r\n    content: '';\r\n    position: absolute;\r\n    border: #e1e1e1 solid 4px;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    transition-duration: 0.3s;\r\n    transition-property: top, right, bottom, left;\r\n  }\r\n.hvr-outline-out[_ngcontent-%COMP%]:hover:before, .hvr-outline-out[_ngcontent-%COMP%]:focus:before, .hvr-outline-out[_ngcontent-%COMP%]:active:before {\r\n    top: -8px;\r\n    right: -8px;\r\n    bottom: -8px;\r\n    left: -8px;\r\n  }\r\n.lis-1[_ngcontent-%COMP%]{\r\n    -webkit-animation-duration: 2s;\r\n            animation-duration: 2s;\r\n    -webkit-animation-name: slidein;\r\n            animation-name: slidein;\r\n  }\r\n.lis-2[_ngcontent-%COMP%]{\r\n    -webkit-animation-duration: 2s;\r\n            animation-duration: 2s;\r\n    -webkit-animation-name: slidein;\r\n            animation-name: slidein;\r\n    animation-delay: 8ms;\r\n    -moz-animation-delay: 8ms;\r\n    -webkit-animation-delay: 8ms;\r\n    -o-animation-delay: 8ms;\r\n  }\r\n.lis-3[_ngcontent-%COMP%]{\r\n    -webkit-animation-duration: 2s;\r\n            animation-duration: 2s;\r\n    -webkit-animation-name: slidein;\r\n            animation-name: slidein;\r\n    animation-delay: 15ms;\r\n    -moz-animation-delay: 15ms;\r\n    -webkit-animation-delay: 15ms;\r\n    -o-animation-delay: 15ms;\r\n  }\r\n@-webkit-keyframes slidein {\r\n    0% {\r\n        transform: translateX(+100%);\r\n    }\r\n    100% {\r\n        transform: translateX(0);\r\n    }\r\n  }\r\n@keyframes slidein {\r\n    0% {\r\n        transform: translateX(+100%);\r\n    }\r\n    100% {\r\n        transform: translateX(0);\r\n    }\r\n  }\r\n.descripcion[_ngcontent-%COMP%]{\r\n    -webkit-animation-duration: 3s;\r\n            animation-duration: 3s;\r\n    -webkit-animation-name: fadeIn;\r\n            animation-name: fadeIn;\r\n  }\r\n.cuarto[_ngcontent-%COMP%]{\r\n    -webkit-animation-duration: 3s;\r\n            animation-duration: 3s;\r\n    -webkit-animation-name: fadeIn;\r\n            animation-name: fadeIn;\r\n  }\r\n@-webkit-keyframes fadeIn{\r\n    0%{\r\n      opacity: 0;\r\n    }\r\n    100%{\r\n      opacity: 100;\r\n    }\r\n  }\r\n@keyframes fadeIn{\r\n    0%{\r\n      opacity: 0;\r\n    }\r\n    100%{\r\n      opacity: 100;\r\n    }\r\n  }\r\n.list-1[_ngcontent-%COMP%]{\r\n    -webkit-animation-duration: 2s;\r\n            animation-duration: 2s;\r\n    -webkit-animation-name: slideIn2;\r\n            animation-name: slideIn2;\r\n  }\r\n.list-2[_ngcontent-%COMP%]{\r\n    -webkit-animation-duration: 3s;\r\n            animation-duration: 3s;\r\n    -webkit-animation-name: slideIn2;\r\n            animation-name: slideIn2;\r\n    animation-delay: 8ms;\r\n    -moz-animation-delay: 8ms;\r\n    -webkit-animation-delay: 8ms;\r\n    -o-animation-delay: 8ms;\r\n  }\r\n.list-3[_ngcontent-%COMP%]{\r\n    -webkit-animation-duration: 4s;\r\n            animation-duration: 4s;\r\n    -webkit-animation-name: slideIn2;\r\n            animation-name: slideIn2;\r\n    animation-delay: 15ms;\r\n    -moz-animation-delay: 15ms;\r\n    -webkit-animation-delay: 15ms;\r\n    -o-animation-delay: 15ms;\r\n  }\r\n@-webkit-keyframes slideIn2 {\r\n    0% {\r\n        transform: translateX(-100%);\r\n    }\r\n    100% {\r\n        transform: translateX(0);\r\n    }\r\n  }\r\n@keyframes slideIn2 {\r\n    0% {\r\n        transform: translateX(-100%);\r\n    }\r\n    100% {\r\n        transform: translateX(0);\r\n    }\r\n  }\r\n.titulo[_ngcontent-%COMP%]{\r\n    background: #554d43;\r\n    color: white;\r\n    padding: 5px 0px;\r\n  }\r\n.texto-interno[_ngcontent-%COMP%]{\r\n    font-size: 18pt;\r\n    color: #000;\r\n  }\r\n.btn-iniciar[_ngcontent-%COMP%]{\r\n    padding: 1rem;\r\n    margin-top: 1rem;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    background: #4a0000;\r\n    color: white;\r\n    border-radius: 3px;\r\n    font-weight: bold;\r\n    border: 2px solid #9b2400;\r\n  }\r\n.carousel[_ngcontent-%COMP%]   .carousel-control-prev-icon[_ngcontent-%COMP%]{\r\n    background-image: url('arrow_left.svg');\r\n    width: 45px;\r\n    height: 45px;\r\n  }\r\n.carousel[_ngcontent-%COMP%]   .carousel-control-next-icon[_ngcontent-%COMP%]{\r\n    background-image: url('arrow_right.svg');\r\n    width: 45px;\r\n    height: 45px;\r\n  }\r\n.carousel-control-next[_ngcontent-%COMP%]:focus, .carousel-control-next[_ngcontent-%COMP%]:hover, .carousel-control-prev[_ngcontent-%COMP%]:focus, .carousel-control-prev[_ngcontent-%COMP%]:hover{\r\n    background: #ef995e4a;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjb3JyaWQwL3JlY29ycmlkMC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFCQUFxQjtBQUNyQjtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLDZCQUE2QjtFQUMvQjtBQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDQTtJQUNFLFdBQVc7SUFDWCxlQUFlO0VBQ2pCO0FBQ0E7SUFDRSxpQkFBaUI7SUFDakIsNEJBQTRCO0VBQzlCO0FBRUE7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLFVBQVU7SUFDVixXQUFXO0VBQ2I7QUFDQTtJQUNFLFdBQVc7SUFDWCxVQUFVO0lBQ1YsaUJBQWlCO0VBQ25CO0FBQ0EsdUJBQXVCO0FBRXZCO0lBQ0U7OzttQ0FHK0I7SUFDL0IsaUJBQWlCO0VBQ25CO0FBRUE7SUFDRSxpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25CO0FBRUE7SUFDRSxpQkFBaUI7SUFDakIscUJBQXFCO0VBQ3ZCO0FBQ0E7SUFDRSxxQkFBcUI7SUFDckIsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7RUFDZDtBQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7QUFFQTtHQUNDLFdBQVc7R0FDWCxrQkFBa0I7R0FDbEIsVUFBVTtHQUNWLFVBQVU7R0FDVixnQkFBZ0I7R0FDaEIsWUFBWTtFQUNiO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztFQUNiO0FBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsaUJBQWlCO0VBQ25CO0FBQ0E7SUFDRSxxQkFBcUI7SUFDckIsZ0JBQWdCO0VB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QjtFQUMzQjtBQUVBO0lBQ0UsdUNBQTBEO0lBQzFELFdBQVc7SUFDWCxZQUFZO0VBQ2Q7QUFFQTtJQUNFLHdDQUEyRDtJQUMzRCxXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBRUE7SUFDRSxxQkFBcUI7RUFDdkIiLCJmaWxlIjoic3JjL2FwcC9yZWNvcnJpZDAvcmVjb3JyaWQwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKkhFQURFUiBZIFNVUyBDT1NBUyovXHJcbi5oZWFkZXJ7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYzFiMjE7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjs7XHJcbiAgfVxyXG4gIC5oZWFkZXIgLmNvbC1tZC00e1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIC5oZWFkZXIgaDN7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgLm1hcmNhIGg1e1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgfVxyXG4gIC5tYXJjYXtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLm1hcmNhIGltZ3tcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgfVxyXG4gIC5jYWxlbmRhcmlve1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuY2FsZW5kYXItYmd7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgd2lkdGg6IDU3cHg7XHJcbiAgfVxyXG4gIC5jYWxlbmRhcmlvIGgze1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB6LWluZGV4OiA2O1xyXG4gICAgbWFyZ2luLXRvcDogLTM1cHg7XHJcbiAgfVxyXG4gIC8qIC9IRUFERVIgWSBTVVMgQ09TQVMqL1xyXG4gIFxyXG4gIC5jb250YWluZXItZmx1aWR7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9yZWNvcnJpZG8vci0wLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7ICovXHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcbiAgXHJcbiAgLnByaW1lcm97XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuICBcclxuICAucHJpbWVybyB1bHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICAucHJpbWVybyB1bCBsaXtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIC5wcmltZXJvIHVsIGxpIHNwYW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG4gIC5zZWd1bmRve1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICB9XHJcbiAgLmRlc2NyaXBjaW9ue1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLmRlc2NyaXBjaW9uIHNwYW57XHJcbiAgIGNvbG9yOiAjMDAwO1xyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIHRvcDogLTQ3cHg7XHJcbiAgIGxlZnQ6IDY5cHg7XHJcbiAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLmRlc2NyaXBjaW9uIHB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgLnRlcmNlcm97XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICBcclxuICAudGVyY2VybyB1bHtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIH1cclxuICAudGVyY2VybyB1bCBsaXtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIC50ZXJjZXJvIHVsIGxpIHNwYW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdWFydG97XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIH1cclxuICBcclxuICAuY3VhcnRvIGRpdntcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1pbmljaW97XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDpub25lO1xyXG4gIH1cclxuICBcclxuICAuYnRuLWluaWNpbzpob3ZlcntcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiNmZmY0O1xyXG4gIH1cclxuICAvKiBcclxuICAucHJpbWVybyB1bCBsaSBzcGFuIHtcclxuICAgIGJveC1zaGFkb3c6IDVweCAxMHB4O1xyXG4gIH1cclxuICAucHJpbWVybyB1bCBsaSBzcGFuIHtcclxuICAgIGJveC1zaGFkb3c6IDVweCAxMHB4IDIwcHggI2ZmZjtcclxuICB9ICovXHJcbiAgLypBTklNQUNJT05FUyovXHJcbiAgXHJcbiAgLyogT3V0bGluZSBPdXQgKi9cclxuICAuaHZyLW91dGxpbmUtb3V0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMXB4KSB0cmFuc2xhdGVaKDApO1xyXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxcHgpIHRyYW5zbGF0ZVooMCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIC5odnItb3V0bGluZS1vdXQ6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyOiAjZTFlMWUxIHNvbGlkIDRweDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdDtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdDtcclxuICB9XHJcbiAgLmh2ci1vdXRsaW5lLW91dDpob3ZlcjpiZWZvcmUsIC5odnItb3V0bGluZS1vdXQ6Zm9jdXM6YmVmb3JlLCAuaHZyLW91dGxpbmUtb3V0OmFjdGl2ZTpiZWZvcmUge1xyXG4gICAgdG9wOiAtOHB4O1xyXG4gICAgcmlnaHQ6IC04cHg7XHJcbiAgICBib3R0b206IC04cHg7XHJcbiAgICBsZWZ0OiAtOHB4O1xyXG4gIH1cclxuICBcclxuICAubGlzLTF7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlaW47XHJcbiAgfVxyXG4gIFxyXG4gIC5saXMtMntcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGVpbjtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogOG1zO1xyXG4gICAgLW1vei1hbmltYXRpb24tZGVsYXk6IDhtcztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA4bXM7XHJcbiAgICAtby1hbmltYXRpb24tZGVsYXk6IDhtcztcclxuICB9XHJcbiAgXHJcbiAgLmxpcy0ze1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZWluO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxNW1zO1xyXG4gICAgLW1vei1hbmltYXRpb24tZGVsYXk6IDE1bXM7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTVtcztcclxuICAgIC1vLWFuaW1hdGlvbi1kZWxheTogMTVtcztcclxuICB9XHJcbiAgQGtleWZyYW1lcyBzbGlkZWluIHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoKzEwMCUpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuZGVzY3JpcGNpb257XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcclxuICB9XHJcbiAgLmN1YXJ0b3tcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XHJcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGZhZGVJbntcclxuICAgIDAle1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgMTAwJXtcclxuICAgICAgb3BhY2l0eTogMTAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAubGlzdC0xe1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZUluMjtcclxuICB9XHJcbiAgXHJcbiAgLmxpc3QtMntcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XHJcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGVJbjI7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDhtcztcclxuICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiA4bXM7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogOG1zO1xyXG4gICAgLW8tYW5pbWF0aW9uLWRlbGF5OiA4bXM7XHJcbiAgfVxyXG4gIFxyXG4gIC5saXN0LTN7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDRzO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW4yO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxNW1zO1xyXG4gICAgLW1vei1hbmltYXRpb24tZGVsYXk6IDE1bXM7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTVtcztcclxuICAgIC1vLWFuaW1hdGlvbi1kZWxheTogMTVtcztcclxuICB9XHJcbiAgQGtleWZyYW1lcyBzbGlkZUluMiB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnRpdHVsb3tcclxuICAgIGJhY2tncm91bmQ6ICM1NTRkNDM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xyXG4gIH1cclxuICBcclxuICAudGV4dG8taW50ZXJub3tcclxuICAgIGZvbnQtc2l6ZTogMThwdDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gIH1cclxuICBcclxuICAuYnRuLWluaWNpYXJ7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogIzRhMDAwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzliMjQwMDtcclxuICB9XHJcblxyXG4gIC5jYXJvdXNlbCAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb257XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9zdmcvYXJyb3dfbGVmdC5zdmcpO1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgfVxyXG5cclxuICAuY2Fyb3VzZWwgLmNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29ue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvc3ZnL2Fycm93X3JpZ2h0LnN2Zyk7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICB9XHJcblxyXG4gIC5jYXJvdXNlbC1jb250cm9sLW5leHQ6Zm9jdXMsIC5jYXJvdXNlbC1jb250cm9sLW5leHQ6aG92ZXIsIC5jYXJvdXNlbC1jb250cm9sLXByZXY6Zm9jdXMsIC5jYXJvdXNlbC1jb250cm9sLXByZXY6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWY5OTVlNGE7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Recorrid0Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-recorrid0',
                templateUrl: './recorrid0.component.html',
                styleUrls: ['./recorrid0.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Noe\Documents\SIMULADOR DARIEN\TODO GIT\pagina-comun-a-todos\simuladordarien\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map