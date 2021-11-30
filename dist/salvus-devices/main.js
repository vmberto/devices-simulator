(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n    margin: 2.5%;\n    display: flex;\n    gap: 20px;\n    flex-direction: row;\n    flex-wrap: wrap;\n}\n\n@media (max-width: 800px) {\n    .row {\n        flex-direction: column;\n    }\n}\n\n.no-devices {\n    height: 100vh;\n    display: flex;\n    vertical-align: middle;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n}\n\n.no-devices h1 {\n    font-family: 'Roboto', sans-serif;\n    font-weight: 300;\n    font-size: 50px;\n    color: white;\n    margin: 0 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO0lBQzFCO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFlBQVk7SUFDWixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcbiAgICBtYXJnaW46IDIuNSU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDIwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIC5yb3cge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbn1cblxuLm5vLWRldmljZXMge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubm8tZGV2aWNlcyBoMSB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDAgMTVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"devices && devices.length > 0\">\n\n  <div *ngFor=\"let device of devices\">\n\n\n    <app-device [device]=\"device\">\n\n\n    </app-device>\n\n\n  </div>\n\n</div>\n\n<div class=\"no-devices\" *ngIf=\"!devices || devices.length <= 0\">\n\n\n  <h1>\n\n    Nenhum dispositivo cadastrado no sistema\n\n  </h1>\n\n\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_device_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/device.service */ "./src/app/services/device.service.ts");
/* harmony import */ var _services_websocket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/websocket.service */ "./src/app/services/websocket.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(deviceService, webSocket) {
        this.deviceService = deviceService;
        this.webSocket = webSocket;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.deviceService.getAllDevices().subscribe(function (res) {
            _this.devices = res.data;
        });
        this.webSocket.addedDeviceEvent.subscribe(function (eventDevice) {
            _this.devices.push(eventDevice);
        });
        this.webSocket.deletedDeviceEvent.subscribe(function (environmentDeviceId) {
            var index = _this.devices.findIndex(function (device) { return device.id === environmentDeviceId; });
            _this.devices.splice(index, 1);
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_device_service__WEBPACK_IMPORTED_MODULE_2__["DeviceService"],
            _services_websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebSocketService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_device_device_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/device/device.component */ "./src/app/components/device/device.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng2_odometer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-odometer */ "./node_modules/ng2-odometer/dist/index.js");
/* harmony import */ var ng2_odometer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_odometer__WEBPACK_IMPORTED_MODULE_6__);







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_device_device_component__WEBPACK_IMPORTED_MODULE_4__["DeviceComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                ng2_odometer__WEBPACK_IMPORTED_MODULE_6__["Ng2OdometerModule"].forRoot(),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/device/device.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/device/device.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    border:solid 0.5px #696969\t;\n    background-color: #696969;\n    width:250px;\n    height:350px;\n    margin:0 auto;\n    border-radius:25px;\n    box-shadow:5px 4px 2px #696969;\n  }\n  \n  .monitor{\n    border:solid 1px #AAAAAA;\n    background-color:#AAAAAA;\n    width:220px;\n    height:255px;\n    margin:0 auto;\n    margin-top:7px;\n    border-radius:25px;\n    background-color:#f5f5f5;\n  }\n  \n  .homebutton{\n    border:solid 1px #666666;\n    margin: 0 auto;\n    width:40px;\n    height:40px;\n    border-radius:100px;\n    margin-top:8px; \n    background-color:#808080;\n    box-shadow:0px 0px 0px  #dcdcdc inset;\n  }\n  \n  .incamera{\n  　border:solid 1px #111111;\n    height:15px;\n    width:15px;\n    margin: 0 auto;\n    margin-top:10px;\n    position:relative;\n    right:50px;\n    background-color:#333333;\n    border-radius:100px;\n  }\n  \n  .incamera2{\n  　border:solid 1px #444444;\n    background-color:#cccccc;\n    height:5px;\n    width:5px;\n    margin: 0 auto;\n    margin-top:1px;\n    position:relative;\n    top:4px; \n    border-radius:100px;\n  }\n  \n  .mic{\n    border:solid 1px #666666;\n    height:10px;\n    width:55px;\n    position:relative;\n    left:25px;\n    bottom:2px;\n    border-radius:50px;\n    background-color:#777777;\n  }\n  \n  .monitor {\n      text-align: center;\n  }\n  \n  img {\n      width: 50%;\n      padding-top: 5px;\n  }\n  \n  h1 {\n    padding: 11px;\n    font-size: 24px;\n  }\n  \n  a {\n    color: black;\n    text-decoration: none;\n  }\n  \n  p {\n    font-size: 150%;\n  }\n  \n  .last-temperature {\n    height: 61%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    vertical-align: middle;\n    font-size: 4em;\n  }\n  \n  .deg-symbol\n   {\n    font-size: 30px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXZpY2UvZGV2aWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLHFDQUFxQztFQUN2Qzs7RUFFQTtFQUNBLHlCQUF5QjtJQUN2QixXQUFXO0lBQ1gsVUFBVTtJQUNWLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVix3QkFBd0I7SUFDeEIsbUJBQW1CO0VBQ3JCOztFQUVBO0VBQ0EseUJBQXlCO0lBQ3ZCLHdCQUF3QjtJQUN4QixVQUFVO0lBQ1YsU0FBUztJQUNULGNBQWM7SUFDZCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLE9BQU87SUFDUCxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsU0FBUztJQUNULFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsd0JBQXdCO0VBQzFCOztFQUVBO01BQ0ksa0JBQWtCO0VBQ3RCOztFQUVBO01BQ0ksVUFBVTtNQUNWLGdCQUFnQjtFQUNwQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGNBQWM7RUFDaEI7O0VBRUE7O0lBRUUsZUFBZTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGV2aWNlL2RldmljZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgICBib3JkZXI6c29saWQgMC41cHggIzY5Njk2OVx0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2OTY5Njk7XG4gICAgd2lkdGg6MjUwcHg7XG4gICAgaGVpZ2h0OjM1MHB4O1xuICAgIG1hcmdpbjowIGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czoyNXB4O1xuICAgIGJveC1zaGFkb3c6NXB4IDRweCAycHggIzY5Njk2OTtcbiAgfVxuICBcbiAgLm1vbml0b3J7XG4gICAgYm9yZGVyOnNvbGlkIDFweCAjQUFBQUFBO1xuICAgIGJhY2tncm91bmQtY29sb3I6I0FBQUFBQTtcbiAgICB3aWR0aDoyMjBweDtcbiAgICBoZWlnaHQ6MjU1cHg7XG4gICAgbWFyZ2luOjAgYXV0bztcbiAgICBtYXJnaW4tdG9wOjdweDtcbiAgICBib3JkZXItcmFkaXVzOjI1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O1xuICB9XG4gIFxuICAuaG9tZWJ1dHRvbntcbiAgICBib3JkZXI6c29saWQgMXB4ICM2NjY2NjY7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6NDBweDtcbiAgICBoZWlnaHQ6NDBweDtcbiAgICBib3JkZXItcmFkaXVzOjEwMHB4O1xuICAgIG1hcmdpbi10b3A6OHB4OyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM4MDgwODA7XG4gICAgYm94LXNoYWRvdzowcHggMHB4IDBweCAgI2RjZGNkYyBpbnNldDtcbiAgfVxuICBcbiAgLmluY2FtZXJhe1xuICDjgIBib3JkZXI6c29saWQgMXB4ICMxMTExMTE7XG4gICAgaGVpZ2h0OjE1cHg7XG4gICAgd2lkdGg6MTVweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXJnaW4tdG9wOjEwcHg7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgcmlnaHQ6NTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzMzMzMzM7XG4gICAgYm9yZGVyLXJhZGl1czoxMDBweDtcbiAgfVxuICBcbiAgLmluY2FtZXJhMntcbiAg44CAYm9yZGVyOnNvbGlkIDFweCAjNDQ0NDQ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6I2NjY2NjYztcbiAgICBoZWlnaHQ6NXB4O1xuICAgIHdpZHRoOjVweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXJnaW4tdG9wOjFweDtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICB0b3A6NHB4OyBcbiAgICBib3JkZXItcmFkaXVzOjEwMHB4O1xuICB9XG4gIFxuICAubWlje1xuICAgIGJvcmRlcjpzb2xpZCAxcHggIzY2NjY2NjtcbiAgICBoZWlnaHQ6MTBweDtcbiAgICB3aWR0aDo1NXB4O1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIGxlZnQ6MjVweDtcbiAgICBib3R0b206MnB4O1xuICAgIGJvcmRlci1yYWRpdXM6NTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM3Nzc3Nzc7XG4gIH1cbiAgXG4gIC5tb25pdG9yIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIGltZyB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgfVxuXG4gIGgxIHtcbiAgICBwYWRkaW5nOiAxMXB4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuXG4gIGEge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICBwIHtcbiAgICBmb250LXNpemU6IDE1MCU7XG4gIH1cblxuICAubGFzdC10ZW1wZXJhdHVyZSB7XG4gICAgaGVpZ2h0OiA2MSU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgZm9udC1zaXplOiA0ZW07XG4gIH1cblxuICAuZGVnLXN5bWJvbFxuICAge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/device/device.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/device/device.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"incamera\">\n    <div class=\"incamera2\">\n      <div class=\"mic\">\n      </div>\n    </div>\n  </div>\n\n  <div class=\"monitor\">\n\n\n    <h1> <a [href]=\"getUrl()\" target=\"_blank\">  {{ device.environment?.client?.name.slice(0, 11) }} </a> </h1>\n\n    <p> {{ device.environment?.title }} </p>\n    <p> Dispositivo {{ device.id }} </p>\n\n    <div class=\"last-temperature\">\n      <ng2-odometer [format]=\"'d'\" [number]=\"deviceMessage?.temperature\"></ng2-odometer><span class=\"deg-symbol\">&deg;</span>\n    </div>\n\n    <div class=\"logo\">\n      <img src=\"assets/logo.png\" alt=\"\">\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/device/device.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/device/device.component.ts ***!
  \*******************************************************/
/*! exports provided: DeviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceComponent", function() { return DeviceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/websocket.service */ "./src/app/services/websocket.service.ts");




var DeviceComponent = /** @class */ (function () {
    function DeviceComponent(webSocket) {
        this.webSocket = webSocket;
        this.dashboardUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].DASHBOARD_URL;
    }
    DeviceComponent.prototype.ngOnInit = function () {
        var _this = this;
        var temperature = 0;
        if (this.device.messages && this.device.messages[0]) {
            temperature = this.device.messages[0].temperature;
        }
        this.deviceMessage = {
            temperature: temperature,
            deviceId: this.device.id,
            createdAt: new Date()
        };
        setInterval(function () {
            _this.emit();
        }, this.device.updateTime || 5000);
    };
    DeviceComponent.prototype.emit = function () {
        this.deviceMessage = {
            temperature: Math.ceil(Math.random() * (30 - 15) + 15),
            deviceId: this.device.id,
            createdAt: new Date()
        };
        this.webSocket.messageEmitter.next(this.deviceMessage);
    };
    DeviceComponent.prototype.getUrl = function () {
        return this.dashboardUrl + "/home/clients/show/" + this.device.environment.clientId;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DeviceComponent.prototype, "device", void 0);
    DeviceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-device',
            template: __webpack_require__(/*! ./device.component.html */ "./src/app/components/device/device.component.html"),
            styles: [__webpack_require__(/*! ./device.component.css */ "./src/app/components/device/device.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebSocketService"]])
    ], DeviceComponent);
    return DeviceComponent;
}());



/***/ }),

/***/ "./src/app/services/device.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/device.service.ts ***!
  \********************************************/
/*! exports provided: DeviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceService", function() { return DeviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var DeviceService = /** @class */ (function () {
    function DeviceService(http) {
        this.http = http;
    }
    DeviceService.prototype.getAllDevices = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ1bWJlcnRvYmFycm9zZkBnbWFpbC5jb20iLCJpYXQiOjE1NDk0MTk3NjF9.rcQ_-XwQPDoMVotI5hMhEnyEKU7-Nup77Nb065hj4Ng');
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + "/api/devices", { headers: headers });
    };
    DeviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DeviceService);
    return DeviceService;
}());



/***/ }),

/***/ "./src/app/services/websocket.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/websocket.service.ts ***!
  \***********************************************/
/*! exports provided: WebSocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSocketService", function() { return WebSocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var WebSocketService = /** @class */ (function () {
    function WebSocketService() {
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL;
        this.addedDeviceEvent = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.deletedDeviceEvent = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.messageEmitter = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        var token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ1bWJlcnRvYmFycm9zZkBnbWFpbC5jb20iLCJpYXQiOjE1NDk2MzE4NjJ9.gG8ZC4AIv4tzr_e8WokIL1KmTXrL9SHMriAGYFH4V60';
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3___default.a.connect(this.url, {
            query: { token: token }
        });
        this.emittedEvents();
        this.receivedEvents();
    }
    WebSocketService.prototype.emittedEvents = function () {
        var _this = this;
        this.messageEmitter
            .subscribe(function (message) {
            _this.socket.emit('message-sent', message);
        });
    };
    WebSocketService.prototype.receivedEvents = function () {
        var _this = this;
        this.socket.on('add-device', function (device) {
            _this.addedDeviceEvent.next(device);
        });
        this.socket.on('delete-device', function (device) {
            _this.deletedDeviceEvent.next(device);
        });
    };
    WebSocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WebSocketService);
    return WebSocketService;
}());



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
var environment = {
    production: false,
    API_URL: 'https://devices-service.herokuapp.com',
    DASHBOARD_URL: 'https://devices-dashboard.herokuapp.com/#',
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/umberto/Documents/sd/devices-simulator/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map