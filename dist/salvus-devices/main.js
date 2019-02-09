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

module.exports = "\r\n.centralize {\r\n    display: flex;\r\n    align-items: center;\r\n    vertical-align: middle;\r\n    justify-content: center;\r\n    height: 100px;\r\n}\r\n\r\n\r\n.no-devices {\r\n    height: 100vh;\r\n    display: flex;\r\n    vertical-align: middle;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.no-devices h1 {\r\n    font-family: 'Roboto', sans-serif;\r\n    font-weight: 300;\r\n    font-size: 50px;\r\n    color: white;\r\n    margin: 0 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGFBQWE7QUFDakI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY2VudHJhbGl6ZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcblxyXG4ubm8tZGV2aWNlcyB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uby1kZXZpY2VzIGgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDAgMTVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\r\n  <div *ngFor=\"let device of devices\" class=\"centralize col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12\">\r\n\r\n\r\n    <app-salvus-devices [device]=\"device\">\r\n\r\n\r\n    </app-salvus-devices>\r\n\r\n\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n<div class=\"no-devices\" *ngIf=\"!devices || devices.length <= 0\">\r\n\r\n\r\n  <h1>\r\n\r\n    Nenhum dispositivo cadastrado no sistema\r\n\r\n  </h1>\r\n\r\n\r\n</div>"

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
/* harmony import */ var _components_salvus_devices_salvus_devices_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/salvus-devices/salvus-devices.component */ "./src/app/components/salvus-devices/salvus-devices.component.ts");
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
                _components_salvus_devices_salvus_devices_component__WEBPACK_IMPORTED_MODULE_4__["SalvusDevicesComponent"]
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

/***/ "./src/app/components/salvus-devices/salvus-devices.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/salvus-devices/salvus-devices.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    border:solid 0.5px #666666\t;\r\n    background-color: #AAAAAA;\r\n    width:250px;\r\n    height:350px;\r\n    margin:0 auto;\r\n    margin-top:15px;\r\n    border-radius:25px;\r\n    box-shadow:5px 4px 2px #696969;\r\n  }\r\n  \r\n  .monitor{\r\n    border:solid 1px #666666;\r\n    background-color:white;\r\n    width:220px;\r\n    height:255px;\r\n    margin:0 auto;\r\n    margin-top:7px;\r\n    border-radius:25px;\r\n    background-color:#f5f5f5;\r\n  }\r\n  \r\n  .homebutton{\r\n    border:solid 1px #666666;\r\n    margin: 0 auto;\r\n    width:40px;\r\n    height:40px;\r\n    border-radius:100px;\r\n    margin-top:8px; \r\n    background-color:#808080;\r\n    box-shadow:0px 0px 0px  #dcdcdc inset;\r\n  }\r\n  \r\n  .incamera{\r\n  　border:solid 1px #111111;\r\n    height:15px;\r\n    width:15px;\r\n    margin: 0 auto;\r\n    margin-top:10px;\r\n    position:relative;\r\n    right:50px;\r\n    background-color:#333333;\r\n    border-radius:100px;\r\n  }\r\n  \r\n  .incamera2{\r\n  　border:solid 1px #444444;\r\n    background-color:#cccccc;\r\n    height:5px;\r\n    width:5px;\r\n    margin: 0 auto;\r\n    margin-top:1px;\r\n    position:relative;\r\n    top:4px; \r\n    border-radius:100px;\r\n  }\r\n  \r\n  .mic{\r\n    border:solid 1px #666666;\r\n    height:10px;\r\n    width:55px;\r\n    position:relative;\r\n    left:25px;\r\n    bottom:2px;\r\n    border-radius:50px;\r\n    background-color:#777777;\r\n  }\r\n  \r\n  .monitor {\r\n      text-align: center;\r\n  }\r\n  \r\n  img {\r\n      width: 75%;\r\n      padding: 10px;\r\n  }\r\n  \r\n  h1 {\r\n    padding: 11px;\r\n  }\r\n  \r\n  a {\r\n    color: black;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  h1 {\r\n      font-size: 200%;\r\n  }\r\n  \r\n  p {\r\n    font-size: 150%;\r\n  }\r\n  \r\n  .last-temperature {\r\n    height: 61%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    vertical-align: middle;\r\n    font-size: 520%;\r\n  }\r\n  \r\n  .deg-symbol\r\n   {\r\n    font-size: 30px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zYWx2dXMtZGV2aWNlcy9zYWx2dXMtZGV2aWNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztJQUNkLGtCQUFrQjtJQUNsQix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIsY0FBYztJQUNkLFVBQVU7SUFDVixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIscUNBQXFDO0VBQ3ZDOztFQUVBO0VBQ0EseUJBQXlCO0lBQ3ZCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLHdCQUF3QjtJQUN4QixtQkFBbUI7RUFDckI7O0VBRUE7RUFDQSx5QkFBeUI7SUFDdkIsd0JBQXdCO0lBQ3hCLFVBQVU7SUFDVixTQUFTO0lBQ1QsY0FBYztJQUNkLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsT0FBTztJQUNQLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQix3QkFBd0I7RUFDMUI7O0VBRUE7TUFDSSxrQkFBa0I7RUFDdEI7O0VBRUE7TUFDSSxVQUFVO01BQ1YsYUFBYTtFQUNqQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFlBQVk7SUFDWixxQkFBcUI7RUFDdkI7O0VBRUE7TUFDSSxlQUFlO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsZUFBZTtFQUNqQjs7RUFFQTs7SUFFRSxlQUFlO0VBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zYWx2dXMtZGV2aWNlcy9zYWx2dXMtZGV2aWNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIGJvcmRlcjpzb2xpZCAwLjVweCAjNjY2NjY2XHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUFBQUFBO1xyXG4gICAgd2lkdGg6MjUwcHg7XHJcbiAgICBoZWlnaHQ6MzUwcHg7XHJcbiAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDoxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czoyNXB4O1xyXG4gICAgYm94LXNoYWRvdzo1cHggNHB4IDJweCAjNjk2OTY5O1xyXG4gIH1cclxuICBcclxuICAubW9uaXRvcntcclxuICAgIGJvcmRlcjpzb2xpZCAxcHggIzY2NjY2NjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICB3aWR0aDoyMjBweDtcclxuICAgIGhlaWdodDoyNTVweDtcclxuICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOjdweDtcclxuICAgIGJvcmRlci1yYWRpdXM6MjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtcclxuICB9XHJcbiAgXHJcbiAgLmhvbWVidXR0b257XHJcbiAgICBib3JkZXI6c29saWQgMXB4ICM2NjY2NjY7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOjQwcHg7XHJcbiAgICBoZWlnaHQ6NDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6MTAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOjhweDsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM4MDgwODA7XHJcbiAgICBib3gtc2hhZG93OjBweCAwcHggMHB4ICAjZGNkY2RjIGluc2V0O1xyXG4gIH1cclxuICBcclxuICAuaW5jYW1lcmF7XHJcbiAg44CAYm9yZGVyOnNvbGlkIDFweCAjMTExMTExO1xyXG4gICAgaGVpZ2h0OjE1cHg7XHJcbiAgICB3aWR0aDoxNXB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHJpZ2h0OjUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzMzMzMzM7XHJcbiAgICBib3JkZXItcmFkaXVzOjEwMHB4O1xyXG4gIH1cclxuICBcclxuICAuaW5jYW1lcmEye1xyXG4gIOOAgGJvcmRlcjpzb2xpZCAxcHggIzQ0NDQ0NDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2NjY2NjYztcclxuICAgIGhlaWdodDo1cHg7XHJcbiAgICB3aWR0aDo1cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi10b3A6MXB4O1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB0b3A6NHB4OyBcclxuICAgIGJvcmRlci1yYWRpdXM6MTAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5taWN7XHJcbiAgICBib3JkZXI6c29saWQgMXB4ICM2NjY2NjY7XHJcbiAgICBoZWlnaHQ6MTBweDtcclxuICAgIHdpZHRoOjU1cHg7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIGxlZnQ6MjVweDtcclxuICAgIGJvdHRvbToycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM3Nzc3Nzc7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb25pdG9yIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIHBhZGRpbmc6IDExcHg7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgICAgZm9udC1zaXplOiAyMDAlO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDE1MCU7XHJcbiAgfVxyXG5cclxuICAubGFzdC10ZW1wZXJhdHVyZSB7XHJcbiAgICBoZWlnaHQ6IDYxJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgZm9udC1zaXplOiA1MjAlO1xyXG4gIH1cclxuXHJcbiAgLmRlZy1zeW1ib2xcclxuICAge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/salvus-devices/salvus-devices.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/salvus-devices/salvus-devices.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"incamera\">\n    <div class=\"incamera2\">\n      <div class=\"mic\">\n      </div>\n    </div>\n  </div>\n\n  <div class=\"monitor\">\n\n\n    <h1> <a [href]=\"getUrl()\" target=\"_blank\"> Cliente {{ device.environment.clientId }} </a> </h1>\n\n    <p> {{ device.environment?.title }} </p>\n    <p> Dispositivo {{ device.id }} </p>\n\n    <div class=\"last-temperature\">\n      <ng2-odometer [format]=\"'d'\" [number]=\"deviceMessage?.temperature\"></ng2-odometer><span class=\"deg-symbol\">&deg;</span>\n    </div>\n\n    <div class=\"logo\">\n      <img src=\"../../../assets/salvus-logo.PNG\" alt=\"\">\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/salvus-devices/salvus-devices.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/salvus-devices/salvus-devices.component.ts ***!
  \***********************************************************************/
/*! exports provided: SalvusDevicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalvusDevicesComponent", function() { return SalvusDevicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/websocket.service */ "./src/app/services/websocket.service.ts");




var SalvusDevicesComponent = /** @class */ (function () {
    function SalvusDevicesComponent(webSocket) {
        this.webSocket = webSocket;
        this.dashboardUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].DASHBOARD_URL;
    }
    SalvusDevicesComponent.prototype.ngOnInit = function () {
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
        }, 20000);
    };
    SalvusDevicesComponent.prototype.emit = function () {
        this.deviceMessage = {
            temperature: Math.ceil(Math.random() * (30 - 15) + 15),
            deviceId: this.device.id,
            createdAt: new Date()
        };
        this.webSocket.messageEmitter.next(this.deviceMessage);
    };
    SalvusDevicesComponent.prototype.getUrl = function () {
        return this.dashboardUrl + "/home/clients/show/" + this.device.environment.clientId;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SalvusDevicesComponent.prototype, "device", void 0);
    SalvusDevicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-salvus-devices',
            template: __webpack_require__(/*! ./salvus-devices.component.html */ "./src/app/components/salvus-devices/salvus-devices.component.html"),
            styles: [__webpack_require__(/*! ./salvus-devices.component.css */ "./src/app/components/salvus-devices/salvus-devices.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebSocketService"]])
    ], SalvusDevicesComponent);
    return SalvusDevicesComponent;
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
    API_URL: 'https://salvusserver.herokuapp.com',
    DASHBOARD_URL: 'https://salvusdashboard.herokuapp.com/#'
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

module.exports = __webpack_require__(/*! C:\Users\umber\Desktop\SALVUS\salvus-devices\src\main.ts */"./src/main.ts");


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