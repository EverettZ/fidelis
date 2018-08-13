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

/***/ "./src/app/main/app-routing.module.ts":
/*!********************************************!*\
  !*** ./src/app/main/app-routing.module.ts ***!
  \********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/alerts/alerts.component */ "./src/app/main/components/alerts/alerts.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'alerts',
        component: _components_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_2__["AlertsComponent"]
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'alerts'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/main/app.component.html":
/*!*****************************************!*\
  !*** ./src/app/main/app.component.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container app-root\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/main/app.component.scss":
/*!*****************************************!*\
  !*** ./src/app/main/app.component.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ {\n  font-family: \"DIN Next\", \"Helvetica Neue\", \"Helvetica\", \"Roboto\", \"Arial\", \"Lucida Sans\", \"Lucida Grande\", \"Lucida Sans Unicode\", sans-serif;\n  font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));\n  line-height: calc(1.8em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300))); }\n\n.app-root {\n  background: #ededed;\n  background: linear-gradient(135deg, #ededed 0%, white 100%);\n  height: 100vh; }\n"

/***/ }),

/***/ "./src/app/main/app.component.ts":
/*!***************************************!*\
  !*** ./src/app/main/app.component.ts ***!
  \***************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fidelisui-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/main/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/main/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/main/app.module.ts":
/*!************************************!*\
  !*** ./src/app/main/app.module.ts ***!
  \************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/main/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/main/app.component.ts");
/* harmony import */ var _pipes_alerts_filter_alerts_filter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/alerts-filter/alerts-filter.pipe */ "./src/app/main/pipes/alerts-filter/alerts-filter.pipe.ts");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _services_mock_in_memory_data_service_ts_in_memory_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/mock/in-memory-data.service.ts/in-memory-data.service */ "./src/app/main/services/mock/in-memory-data.service.ts/in-memory-data.service.ts");
/* harmony import */ var _components_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/alerts/alerts.component */ "./src/app/main/components/alerts/alerts.component.ts");
/* harmony import */ var _components_alerts_filter_alerts_filter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/alerts-filter/alerts-filter.component */ "./src/app/main/components/alerts-filter/alerts-filter.component.ts");
/* harmony import */ var _components_alert_box_alert_box_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/alert-box/alert-box.component */ "./src/app/main/components/alert-box/alert-box.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _pipes_alerts_filter_alerts_filter_pipe__WEBPACK_IMPORTED_MODULE_5__["AlertsFilterPipe"],
                _components_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_8__["AlertsComponent"],
                _components_alerts_filter_alerts_filter_component__WEBPACK_IMPORTED_MODULE_9__["AlertsFilterComponent"],
                _components_alert_box_alert_box_component__WEBPACK_IMPORTED_MODULE_10__["AlertBoxComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
                // and returns simulated server responses.
                // Remove it when a real server is ready to receive requests.
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_6__["HttpClientInMemoryWebApiModule"].forRoot(_services_mock_in_memory_data_service_ts_in_memory_data_service__WEBPACK_IMPORTED_MODULE_7__["InMemoryDataService"], { dataEncapsulation: false })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/main/components/alert-box/alert-box.component.html":
/*!********************************************************************!*\
  !*** ./src/app/main/components/alert-box/alert-box.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box mb-3\">\n  <div class=\"box-header p-3\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n          <h4 class=\"d-inline-block text-start\">\n            {{alertGroup.title}}\n          </h4>\n      </div>\n    </div>\n  </div>\n  <div class=\"box-content p-3\">\n    <div class=\"box-content-row text-underline\" *ngFor=\"let field of alertGroup.fields\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <a [routerLink]=\"['/alerts']\" [queryParams]=\"field.param\" queryParamsHandling=\"merge\">\n            <div class=\"row align-items-center justify-content-between mt-2\">\n              <div class=\"col-8 text-left text-truncate\">\n                <h5 class=\"d-inline-block\">{{field.name}}</h5>\n              </div>\n              <div class=\"col-4 text-right\">\n                <h5 class=\"d-inline-block\">{{field.count}}</h5>\n              </div>\n            </div>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/main/components/alert-box/alert-box.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/main/components/alert-box/alert-box.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  border: 4px solid black;\n  border-radius: 6px; }\n  .box-header {\n    background: #d9d9d9;\n    border-bottom: 3px solid black; }\n  .box-content-row {\n    border-bottom: 1px solid black; }\n"

/***/ }),

/***/ "./src/app/main/components/alert-box/alert-box.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/main/components/alert-box/alert-box.component.ts ***!
  \******************************************************************/
/*! exports provided: AlertBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertBoxComponent", function() { return AlertBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertBoxComponent = /** @class */ (function () {
    function AlertBoxComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    Object.defineProperty(AlertBoxComponent.prototype, "alertGroup", {
        get: function () {
            return this.alertGroupValue;
        },
        set: function (val) {
            var _this = this;
            this.alertGroupTotal = 0;
            this.alertGroupTitleKey = val.title.replace(' ', '');
            this.alertGroupValue = val;
            this.alertGroupValue.fields
                .forEach(function (element) {
                if (element.param === undefined) {
                    element.param = {};
                }
                element.param[_this.alertGroupTitleKey] = element.name;
                _this.alertGroupTotal += element.count;
            });
        },
        enumerable: true,
        configurable: true
    });
    AlertBoxComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('alertGroup'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], AlertBoxComponent.prototype, "alertGroup", null);
    AlertBoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fidelisui-alert-box',
            template: __webpack_require__(/*! ./alert-box.component.html */ "./src/app/main/components/alert-box/alert-box.component.html"),
            styles: [__webpack_require__(/*! ./alert-box.component.scss */ "./src/app/main/components/alert-box/alert-box.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], AlertBoxComponent);
    return AlertBoxComponent;
}());



/***/ }),

/***/ "./src/app/main/components/alerts-filter/alerts-filter.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/main/components/alerts-filter/alerts-filter.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-2 pt-3 pb-0 row justify-content-between\">\n    <div class=\"text-start col\">\n        <h3>Fidelis</h3>\n    </div>\n    <div class=\"col text-right\">\n        <h5 class=\"mb-0\"><em>Count</em> {{numAlerts}}</h5>\n    </div>\n</div>\n<div class=\"p-2 row align-items-center justify-content-between nowrap\">\n    <div *ngIf=\"!filters.length; else filtering\" class=\"col-9\">\n        <h5>Click one of the fields below to filter the content</h5>\n    </div>\n    <ng-template #filtering>\n        <div class=\"col-sm-7 col-md-8 col-lg-10 text-start\">\n            <span *ngFor=\"let filter of filters\" class=\"mr-1 badge badge-pill badge-primary\">{{filter.type}} = {{filter.value}}</span>\n        </div>\n        <div class=\"col-sm-5 col-md-4 col-lg-2\">\n            <button type=\"button\" class=\"float-right btn btn-sm btn-outline-primary\" (click)=\"reset()\">Reset</button>\n        </div>\n    </ng-template>\n</div>"

/***/ }),

/***/ "./src/app/main/components/alerts-filter/alerts-filter.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/main/components/alerts-filter/alerts-filter.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  background: #d9d9d9; }\n"

/***/ }),

/***/ "./src/app/main/components/alerts-filter/alerts-filter.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main/components/alerts-filter/alerts-filter.component.ts ***!
  \**************************************************************************/
/*! exports provided: AlertsFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsFilterComponent", function() { return AlertsFilterComponent; });
/* harmony import */ var _services_alerts_alerts_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/alerts/alerts.service */ "./src/app/main/services/alerts/alerts.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertsFilterComponent = /** @class */ (function () {
    function AlertsFilterComponent(router, activatedRoute, _alerts) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this._alerts = _alerts;
        this.filters = [];
    }
    Object.defineProperty(AlertsFilterComponent.prototype, "numAlerts", {
        get: function () {
            return this._alerts.getNumAlerts();
        },
        enumerable: true,
        configurable: true
    });
    AlertsFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        var params = {};
        this.routeWatchSub = this.activatedRoute.queryParams
            .subscribe(function (queries) {
            _this.filters = Object.keys(queries)
                .map(function (key) {
                return { type: key, value: [queries[key]] };
            });
        });
    };
    AlertsFilterComponent.prototype.ngOnDestroy = function () {
        if (this.routeWatchSub && !this.routeWatchSub.closed) {
            this.routeWatchSub.unsubscribe();
        }
    };
    AlertsFilterComponent.prototype.reset = function () {
        this.router.navigate(['alerts']);
    };
    AlertsFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'fidelisui-alerts-filter',
            template: __webpack_require__(/*! ./alerts-filter.component.html */ "./src/app/main/components/alerts-filter/alerts-filter.component.html"),
            styles: [__webpack_require__(/*! ./alerts-filter.component.scss */ "./src/app/main/components/alerts-filter/alerts-filter.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_alerts_alerts_service__WEBPACK_IMPORTED_MODULE_0__["AlertsService"]])
    ], AlertsFilterComponent);
    return AlertsFilterComponent;
}());



/***/ }),

/***/ "./src/app/main/components/alerts/alerts.component.html":
/*!**************************************************************!*\
  !*** ./src/app/main/components/alerts/alerts.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"(alerts$ | async) as alerts; else loading;\">\n  <div *ngIf=\"alerts.length; else empty;\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <fidelisui-alerts-filter></fidelisui-alerts-filter>\n      </div>\n    </div>\n    <div class=\"row mt-3\">\n      <div class=\"col-sm-12 col-md-6 col-lg-4\"  *ngFor=\"let alertGroup of alerts | alertsFilter:filters;\">\n        <fidelisui-alert-box [alertGroup]=\"alertGroup\"></fidelisui-alert-box>\n      </div>\n    </div>\n  </div>\n  <ng-template #empty>\n    <pre>No alerts found</pre>\n  </ng-template>\n</div>\n<ng-template #loading>\n  <pre>Loading alerts</pre>\n</ng-template>"

/***/ }),

/***/ "./src/app/main/components/alerts/alerts.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/main/components/alerts/alerts.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/components/alerts/alerts.component.ts":
/*!************************************************************!*\
  !*** ./src/app/main/components/alerts/alerts.component.ts ***!
  \************************************************************/
/*! exports provided: AlertsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsComponent", function() { return AlertsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_alerts_alerts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/alerts/alerts.service */ "./src/app/main/services/alerts/alerts.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlertsComponent = /** @class */ (function () {
    function AlertsComponent(_alert, activatedRoute, router) {
        this._alert = _alert;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this._alerts$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    AlertsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alerts$ = this._alerts$;
        this.getAlerts();
        this.routeWatchSub = this.activatedRoute.queryParams
            .subscribe(function (queries) {
            if (Object.keys(queries).length > 0) {
                _this.filters = queries;
            }
            else {
                _this.filters = undefined;
            }
        });
    };
    AlertsComponent.prototype.ngOnDestroy = function () {
        if (this.routeWatchSub && !this.routeWatchSub.closed) {
            this.routeWatchSub.unsubscribe();
        }
        if (this.getAlertsSub && !this.getAlertsSub.closed) {
            this.getAlertsSub.unsubscribe();
        }
    };
    AlertsComponent.prototype.getAlerts = function () {
        var _this = this;
        this.getAlertsSub = this._alert.getAlerts()
            .subscribe(function (alerts) {
            _this._alerts$.next(alerts);
        });
    };
    AlertsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fidelisui-alerts',
            template: __webpack_require__(/*! ./alerts.component.html */ "./src/app/main/components/alerts/alerts.component.html"),
            styles: [__webpack_require__(/*! ./alerts.component.scss */ "./src/app/main/components/alerts/alerts.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_alerts_alerts_service__WEBPACK_IMPORTED_MODULE_1__["AlertsService"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AlertsComponent);
    return AlertsComponent;
}());



/***/ }),

/***/ "./src/app/main/pipes/alerts-filter/alerts-filter.pipe.ts":
/*!****************************************************************!*\
  !*** ./src/app/main/pipes/alerts-filter/alerts-filter.pipe.ts ***!
  \****************************************************************/
/*! exports provided: AlertsFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsFilterPipe", function() { return AlertsFilterPipe; });
/* harmony import */ var _services_alerts_alerts_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/alerts/alerts.service */ "./src/app/main/services/alerts/alerts.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BASE_GROUPS = [
    {
        title: 'Severity',
        fields: []
    },
    {
        title: 'Client IP',
        fields: []
    },
    {
        title: 'Protocol',
        fields: []
    },
    {
        title: 'Client Country',
        fields: []
    }
];
var AlertsFilterPipe = /** @class */ (function () {
    function AlertsFilterPipe(_alerts) {
        this._alerts = _alerts;
    }
    AlertsFilterPipe.prototype.transform = function (alerts, args) {
        if (alerts === void 0) { alerts = []; }
        var result = {};
        this.initializeResultMap(result);
        var count = 0;
        var _loop_1 = function (index) {
            var element = alerts[index];
            var includeElement = true;
            if (args !== undefined && args !== {}) {
                Object.keys(args)
                    .forEach(function (key) {
                    if (args[key].indexOf(element[key]) < 0) {
                        includeElement = false;
                    }
                });
            }
            if (includeElement) {
                count++;
                this_1.mapItem(result, element);
            }
        };
        var this_1 = this;
        for (var index = 0; index < alerts.length; index++) {
            _loop_1(index);
        }
        // Convert to array
        var arrayResult = this.convertToArray(result);
        this._alerts.setNumAlerts(count);
        return arrayResult;
    };
    AlertsFilterPipe.prototype.initializeResultMap = function (result) {
        BASE_GROUPS
            .forEach(function (group) {
            var groupKey = group.title.replace(' ', '');
            result[groupKey] = {};
        });
        return result;
    };
    AlertsFilterPipe.prototype.convertToArray = function (result) {
        return BASE_GROUPS
            .map(function (group) {
            var groupKey = group.title.replace(' ', '');
            var fields = Object.keys(result[groupKey])
                .map(function (fieldKey) {
                return { name: fieldKey, count: result[groupKey][fieldKey] };
            });
            return { title: group.title, fields: fields };
        });
    };
    AlertsFilterPipe.prototype.mapItem = function (result, element) {
        BASE_GROUPS
            .forEach(function (group) {
            var groupKey = group.title.replace(' ', '');
            if (result[groupKey][element[groupKey]] === undefined) {
                result[groupKey][element[groupKey]] = 0;
            }
            result[groupKey][element[groupKey]]++;
        });
        return result;
    };
    AlertsFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'alertsFilter'
        }),
        __metadata("design:paramtypes", [_services_alerts_alerts_service__WEBPACK_IMPORTED_MODULE_0__["AlertsService"]])
    ], AlertsFilterPipe);
    return AlertsFilterPipe;
}());



/***/ }),

/***/ "./src/app/main/services/alerts/alerts.service.ts":
/*!********************************************************!*\
  !*** ./src/app/main/services/alerts/alerts.service.ts ***!
  \********************************************************/
/*! exports provided: AlertsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsService", function() { return AlertsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlertsService = /** @class */ (function () {
    function AlertsService(http) {
        this.http = http;
        this.url = 'api/alerts';
        this.currNumAlerts = 0;
    }
    AlertsService.prototype.getAlerts = function () {
        return this.http.get(this.url)
            .pipe(this.logArray('getAlerts'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getAlerts', [])));
    };
    AlertsService.prototype.getAlert = function (id) {
        var _this = this;
        var url = this.url + "/" + id;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.log("fetched Alert id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("getAlert id=" + id)));
    };
    AlertsService.prototype.log = function (message) {
        console.log("AlertsService: " + message);
    };
    AlertsService.prototype.logArray = function (operation) {
        if (operation === void 0) { operation = 'operation'; }
        return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (value) {
            console.group(operation);
            console.log(typeof value);
            console.log("Length: " + value.length);
            console.dir(value);
            console.groupEnd();
        });
    };
    AlertsService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(operation, typeof result, result);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    AlertsService.prototype.setNumAlerts = function (val) {
        this.currNumAlerts = val;
    };
    AlertsService.prototype.getNumAlerts = function () {
        return this.currNumAlerts;
    };
    AlertsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AlertsService);
    return AlertsService;
}());



/***/ }),

/***/ "./src/app/main/services/mock/in-memory-data.service.ts/in-memory-data.service.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/main/services/mock/in-memory-data.service.ts/in-memory-data.service.ts ***!
  \****************************************************************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var alerts = [
            {
                'AlertId': 24859,
                'AlertTime': '2018-02-26 07:59:22',
                'Severity': 'Low',
                'ClientIP': '155.175.121.134',
                'ServerIP': '154.224.236.156',
                'Protocol': 'SMTP',
                'ClientCountry': 'Canada'
            },
            {
                'AlertId': 24860,
                'AlertTime': '2018-02-21 15:28:26',
                'Severity': 'Medium',
                'ClientIP': '66.78.200.140',
                'ServerIP': '142.6.126.64',
                'Protocol': 'HTTP',
                'ClientCountry': 'Germany'
            },
            {
                'AlertId': 24861,
                'AlertTime': '2018-02-20 19:17:57',
                'Severity': 'High',
                'ClientIP': '155.175.121.134',
                'ServerIP': '231.122.227.147',
                'Protocol': 'FTP',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24862,
                'AlertTime': '2018-02-18 11:29:43',
                'Severity': 'Low',
                'ClientIP': '155.175.121.134',
                'ServerIP': '162.105.152.139',
                'Protocol': 'FTP',
                'ClientCountry': 'Canada'
            },
            {
                'AlertId': 24863,
                'AlertTime': '2018-02-17 16:47:09',
                'Severity': 'High',
                'ClientIP': '43.172.24.178',
                'ServerIP': '184.52.101.138',
                'Protocol': 'TLS',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24864,
                'AlertTime': '2018-02-09 10:51:38',
                'Severity': 'Medium',
                'ClientIP': '155.175.121.134',
                'ServerIP': '12.5.249.179',
                'Protocol': 'HTTP',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24865,
                'AlertTime': '2018-02-01 20:43:10',
                'Severity': 'Low',
                'ClientIP': '43.172.24.178',
                'ServerIP': '80.166.230.197',
                'Protocol': 'HTTP',
                'ClientCountry': 'Germany'
            },
            {
                'AlertId': 24866,
                'AlertTime': '2018-01-30 05:20:17',
                'Severity': 'Low',
                'ClientIP': '155.175.121.134',
                'ServerIP': '69.171.16.232',
                'Protocol': 'FTP',
                'ClientCountry': 'Canada'
            },
            {
                'AlertId': 24867,
                'AlertTime': '2018-01-23 09:07:40',
                'Severity': 'Medium',
                'ClientIP': '155.175.121.134',
                'ServerIP': '156.241.238.11',
                'Protocol': 'TLS',
                'ClientCountry': 'Canada'
            },
            {
                'AlertId': 24868,
                'AlertTime': '2018-01-15 06:16:57',
                'Severity': 'Medium',
                'ClientIP': '155.175.121.134',
                'ServerIP': '243.176.102.88',
                'Protocol': 'TLS',
                'ClientCountry': 'Australia'
            },
            {
                'AlertId': 24869,
                'AlertTime': '2018-01-13 17:46:22',
                'Severity': 'Medium',
                'ClientIP': '43.172.24.178',
                'ServerIP': '91.154.122.64',
                'Protocol': 'SMTP',
                'ClientCountry': 'Canada'
            },
            {
                'AlertId': 24870,
                'AlertTime': '2018-01-11 09:53:54',
                'Severity': 'High',
                'ClientIP': '66.78.200.140',
                'ServerIP': '28.240.44.245',
                'Protocol': 'SMTP',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24871,
                'AlertTime': '2018-01-06 04:33:27',
                'Severity': 'Medium',
                'ClientIP': '66.78.200.140',
                'ServerIP': '73.39.0.56',
                'Protocol': 'TLS',
                'ClientCountry': 'Australia'
            },
            {
                'AlertId': 24872,
                'AlertTime': '2018-01-05 19:59:17',
                'Severity': 'Low',
                'ClientIP': '43.172.24.178',
                'ServerIP': '152.212.144.120',
                'Protocol': 'TLS',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24873,
                'AlertTime': '2018-01-05 13:43:58',
                'Severity': 'High',
                'ClientIP': '66.78.200.140',
                'ServerIP': '249.5.74.192',
                'Protocol': 'FTP',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24874,
                'AlertTime': '2018-01-04 20:21:18',
                'Severity': 'Medium',
                'ClientIP': '155.175.121.134',
                'ServerIP': '38.61.75.244',
                'Protocol': 'FTP',
                'ClientCountry': 'Canada'
            },
            {
                'AlertId': 24875,
                'AlertTime': '2017-12-30 23:18:24',
                'Severity': 'Medium',
                'ClientIP': '43.172.24.178',
                'ServerIP': '22.245.243.16',
                'Protocol': 'FTP',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24876,
                'AlertTime': '2017-12-19 23:58:13',
                'Severity': 'High',
                'ClientIP': '43.172.24.178',
                'ServerIP': '78.196.99.103',
                'Protocol': 'SMTP',
                'ClientCountry': 'Canada'
            },
            {
                'AlertId': 24877,
                'AlertTime': '2017-12-12 14:39:46',
                'Severity': 'Low',
                'ClientIP': '66.78.200.140',
                'ServerIP': '104.4.25.222',
                'Protocol': 'HTTP',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24878,
                'AlertTime': '2017-12-11 14:45:49',
                'Severity': 'Medium',
                'ClientIP': '66.78.200.140',
                'ServerIP': '52.173.108.207',
                'Protocol': 'HTTP',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24879,
                'AlertTime': '2017-12-08 15:18:57',
                'Severity': 'High',
                'ClientIP': '66.78.200.140',
                'ServerIP': '12.35.230.237',
                'Protocol': 'FTP',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24880,
                'AlertTime': '2017-12-03 23:50:44',
                'Severity': 'High',
                'ClientIP': '43.172.24.178',
                'ServerIP': '219.50.54.170',
                'Protocol': 'FTP',
                'ClientCountry': 'Germany'
            },
            {
                'AlertId': 24881,
                'AlertTime': '2017-12-01 11:10:53',
                'Severity': 'Medium',
                'ClientIP': '66.78.200.140',
                'ServerIP': '30.131.100.38',
                'Protocol': 'TLS',
                'ClientCountry': 'Canada'
            },
            {
                'AlertId': 24882,
                'AlertTime': '2017-11-29 17:21:25',
                'Severity': 'High',
                'ClientIP': '155.175.121.134',
                'ServerIP': '179.77.4.41',
                'Protocol': 'TLS',
                'ClientCountry': 'Canada'
            },
            {
                'AlertId': 24883,
                'AlertTime': '2017-11-28 14:20:01',
                'Severity': 'Low',
                'ClientIP': '66.78.200.140',
                'ServerIP': '5.98.26.88',
                'Protocol': 'TLS',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24884,
                'AlertTime': '2017-11-22 18:37:15',
                'Severity': 'High',
                'ClientIP': '155.175.121.134',
                'ServerIP': '252.233.75.92',
                'Protocol': 'FTP',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24885,
                'AlertTime': '2017-11-19 15:37:23',
                'Severity': 'Low',
                'ClientIP': '155.175.121.134',
                'ServerIP': '86.143.224.133',
                'Protocol': 'FTP',
                'ClientCountry': 'Canada'
            },
            {
                'AlertId': 24886,
                'AlertTime': '2017-11-18 04:24:42',
                'Severity': 'Medium',
                'ClientIP': '43.172.24.178',
                'ServerIP': '230.137.125.37',
                'Protocol': 'SMTP',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24887,
                'AlertTime': '2017-11-15 08:51:19',
                'Severity': 'High',
                'ClientIP': '66.78.200.140',
                'ServerIP': '241.10.111.63',
                'Protocol': 'FTP',
                'ClientCountry': 'Canada'
            },
            {
                'AlertId': 24888,
                'AlertTime': '2017-11-14 19:12:05',
                'Severity': 'Low',
                'ClientIP': '43.172.24.178',
                'ServerIP': '133.117.204.100',
                'Protocol': 'FTP',
                'ClientCountry': 'Germany'
            },
            {
                'AlertId': 24889,
                'AlertTime': '2017-11-03 21:45:53',
                'Severity': 'Low',
                'ClientIP': '43.172.24.178',
                'ServerIP': '90.129.58.11',
                'Protocol': 'SMTP',
                'ClientCountry': 'Canada'
            },
            {
                'AlertId': 24890,
                'AlertTime': '2017-10-28 20:22:21',
                'Severity': 'Low',
                'ClientIP': '66.78.200.140',
                'ServerIP': '136.48.99.193',
                'Protocol': 'SMTP',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24891,
                'AlertTime': '2017-10-25 14:33:12',
                'Severity': 'Low',
                'ClientIP': '66.78.200.140',
                'ServerIP': '230.98.254.50',
                'Protocol': 'SMTP',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24892,
                'AlertTime': '2017-10-23 08:34:39',
                'Severity': 'Low',
                'ClientIP': '66.78.200.140',
                'ServerIP': '84.68.112.128',
                'Protocol': 'TLS',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24893,
                'AlertTime': '2017-10-11 06:24:40',
                'Severity': 'Low',
                'ClientIP': '155.175.121.134',
                'ServerIP': '48.112.219.141',
                'Protocol': 'TLS',
                'ClientCountry': 'Canada'
            },
            {
                'AlertId': 24894,
                'AlertTime': '2017-10-10 05:33:09',
                'Severity': 'Medium',
                'ClientIP': '155.175.121.134',
                'ServerIP': '19.34.79.140',
                'Protocol': 'FTP',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24895,
                'AlertTime': '2017-10-05 07:18:47',
                'Severity': 'Low',
                'ClientIP': '43.172.24.178',
                'ServerIP': '253.245.51.227',
                'Protocol': 'FTP',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24896,
                'AlertTime': '2017-10-01 14:47:57',
                'Severity': 'High',
                'ClientIP': '43.172.24.178',
                'ServerIP': '161.125.194.135',
                'Protocol': 'HTTP',
                'ClientCountry': 'Germany'
            },
            {
                'AlertId': 24897,
                'AlertTime': '2017-09-22 04:20:38',
                'Severity': 'Low',
                'ClientIP': '155.175.121.134',
                'ServerIP': '176.37.239.39',
                'Protocol': 'SMTP',
                'ClientCountry': 'Canada'
            },
            {
                'AlertId': 24898,
                'AlertTime': '2017-09-19 17:24:23',
                'Severity': 'High',
                'ClientIP': '43.172.24.178',
                'ServerIP': '217.15.94.117',
                'Protocol': 'SMTP',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24899,
                'AlertTime': '2017-09-18 02:28:32',
                'Severity': 'Medium',
                'ClientIP': '66.78.200.140',
                'ServerIP': '173.157.77.90',
                'Protocol': 'FTP',
                'ClientCountry': 'Canada'
            },
            {
                'AlertId': 24900,
                'AlertTime': '2017-09-17 07:47:46',
                'Severity': 'Low',
                'ClientIP': '66.78.200.140',
                'ServerIP': '79.229.181.121',
                'Protocol': 'SMTP',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24901,
                'AlertTime': '2017-09-15 05:48:41',
                'Severity': 'High',
                'ClientIP': '66.78.200.140',
                'ServerIP': '150.51.123.10',
                'Protocol': 'HTTP',
                'ClientCountry': 'Germany'
            },
            {
                'AlertId': 24902,
                'AlertTime': '2017-09-14 03:30:00',
                'Severity': 'Low',
                'ClientIP': '43.172.24.178',
                'ServerIP': '244.157.216.121',
                'Protocol': 'SMTP',
                'ClientCountry': 'Canada'
            },
            {
                'AlertId': 24903,
                'AlertTime': '2017-09-07 02:27:37',
                'Severity': 'Medium',
                'ClientIP': '155.175.121.134',
                'ServerIP': '0.134.161.79',
                'Protocol': 'FTP',
                'ClientCountry': 'Canada'
            },
            {
                'AlertId': 24904,
                'AlertTime': '2017-09-06 08:04:17',
                'Severity': 'Medium',
                'ClientIP': '66.78.200.140',
                'ServerIP': '106.173.47.247',
                'Protocol': 'SMTP',
                'ClientCountry': 'Australia'
            },
            {
                'AlertId': 24905,
                'AlertTime': '2017-09-01 18:40:23',
                'Severity': 'Low',
                'ClientIP': '43.172.24.178',
                'ServerIP': '191.76.169.255',
                'Protocol': 'HTTP',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24906,
                'AlertTime': '2017-08-30 22:10:30',
                'Severity': 'High',
                'ClientIP': '155.175.121.134',
                'ServerIP': '240.143.31.185',
                'Protocol': 'FTP',
                'ClientCountry': 'Canada'
            },
            {
                'AlertId': 24907,
                'AlertTime': '2017-08-27 15:52:34',
                'Severity': 'High',
                'ClientIP': '66.78.200.140',
                'ServerIP': '101.190.131.178',
                'Protocol': 'HTTP',
                'ClientCountry': 'Germany'
            },
            {
                'AlertId': 24908,
                'AlertTime': '2017-08-27 10:20:40',
                'Severity': 'Low',
                'ClientIP': '43.172.24.178',
                'ServerIP': '164.218.114.86',
                'Protocol': 'FTP',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24909,
                'AlertTime': '2017-08-24 12:05:06',
                'Severity': 'High',
                'ClientIP': '43.172.24.178',
                'ServerIP': '213.15.242.63',
                'Protocol': 'TLS',
                'ClientCountry': 'Canada'
            },
            {
                'AlertId': 24910,
                'AlertTime': '2017-08-21 01:43:33',
                'Severity': 'Low',
                'ClientIP': '43.172.24.178',
                'ServerIP': '130.217.149.97',
                'Protocol': 'TLS',
                'ClientCountry': 'Canada'
            },
            {
                'AlertId': 24911,
                'AlertTime': '2017-08-19 23:38:08',
                'Severity': 'Medium',
                'ClientIP': '66.78.200.140',
                'ServerIP': '176.41.159.162',
                'Protocol': 'FTP',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24912,
                'AlertTime': '2017-08-15 23:11:46',
                'Severity': 'High',
                'ClientIP': '66.78.200.140',
                'ServerIP': '119.255.47.68',
                'Protocol': 'FTP',
                'ClientCountry': 'Canada'
            },
            {
                'AlertId': 24913,
                'AlertTime': '2017-08-15 12:50:02',
                'Severity': 'High',
                'ClientIP': '43.172.24.178',
                'ServerIP': '154.250.136.82',
                'Protocol': 'HTTP',
                'ClientCountry': 'Canada'
            },
            {
                'AlertId': 24914,
                'AlertTime': '2017-08-15 09:05:28',
                'Severity': 'Low',
                'ClientIP': '43.172.24.178',
                'ServerIP': '5.29.5.74',
                'Protocol': 'SMTP',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24915,
                'AlertTime': '2017-08-10 20:27:56',
                'Severity': 'High',
                'ClientIP': '155.175.121.134',
                'ServerIP': '190.220.240.149',
                'Protocol': 'TLS',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24916,
                'AlertTime': '2017-08-07 20:22:37',
                'Severity': 'High',
                'ClientIP': '66.78.200.140',
                'ServerIP': '62.28.204.46',
                'Protocol': 'HTTP',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24917,
                'AlertTime': '2017-08-05 16:59:03',
                'Severity': 'Medium',
                'ClientIP': '43.172.24.178',
                'ServerIP': '83.44.232.252',
                'Protocol': 'TLS',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24918,
                'AlertTime': '2017-08-05 02:02:04',
                'Severity': 'High',
                'ClientIP': '155.175.121.134',
                'ServerIP': '200.9.104.109',
                'Protocol': 'TLS',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24919,
                'AlertTime': '2017-08-02 10:45:00',
                'Severity': 'Low',
                'ClientIP': '43.172.24.178',
                'ServerIP': '160.5.169.174',
                'Protocol': 'SMTP',
                'ClientCountry': 'Canada'
            },
            {
                'AlertId': 24920,
                'AlertTime': '2017-08-01 11:08:31',
                'Severity': 'Medium',
                'ClientIP': '66.78.200.140',
                'ServerIP': '203.206.197.156',
                'Protocol': 'SMTP',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24921,
                'AlertTime': '2017-07-28 15:42:07',
                'Severity': 'High',
                'ClientIP': '66.78.200.140',
                'ServerIP': '63.129.200.243',
                'Protocol': 'SMTP',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24922,
                'AlertTime': '2017-07-25 01:50:24',
                'Severity': 'Low',
                'ClientIP': '155.175.121.134',
                'ServerIP': '125.248.86.231',
                'Protocol': 'SMTP',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24923,
                'AlertTime': '2017-07-24 07:43:23',
                'Severity': 'Low',
                'ClientIP': '66.78.200.140',
                'ServerIP': '23.178.128.206',
                'Protocol': 'HTTP',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24924,
                'AlertTime': '2017-07-11 16:40:58',
                'Severity': 'Low',
                'ClientIP': '43.172.24.178',
                'ServerIP': '146.210.155.110',
                'Protocol': 'SMTP',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24925,
                'AlertTime': '2017-07-09 05:32:40',
                'Severity': 'Low',
                'ClientIP': '43.172.24.178',
                'ServerIP': '120.254.190.164',
                'Protocol': 'TLS',
                'ClientCountry': 'Germany'
            },
            {
                'AlertId': 24926,
                'AlertTime': '2017-07-05 13:32:16',
                'Severity': 'Medium',
                'ClientIP': '155.175.121.134',
                'ServerIP': '29.190.129.162',
                'Protocol': 'HTTP',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24927,
                'AlertTime': '2017-06-30 05:34:12',
                'Severity': 'High',
                'ClientIP': '66.78.200.140',
                'ServerIP': '197.56.42.251',
                'Protocol': 'HTTP',
                'ClientCountry': 'Canada'
            },
            {
                'AlertId': 24928,
                'AlertTime': '2017-06-29 20:52:49',
                'Severity': 'High',
                'ClientIP': '155.175.121.134',
                'ServerIP': '255.157.225.215',
                'Protocol': 'TLS',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24929,
                'AlertTime': '2017-06-20 20:10:17',
                'Severity': 'Medium',
                'ClientIP': '43.172.24.178',
                'ServerIP': '153.8.21.105',
                'Protocol': 'TLS',
                'ClientCountry': 'Canada'
            },
            {
                'AlertId': 24930,
                'AlertTime': '2017-06-19 04:39:16',
                'Severity': 'High',
                'ClientIP': '43.172.24.178',
                'ServerIP': '237.101.238.128',
                'Protocol': 'TLS',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24931,
                'AlertTime': '2017-06-18 22:21:30',
                'Severity': 'Medium',
                'ClientIP': '43.172.24.178',
                'ServerIP': '152.254.142.136',
                'Protocol': 'FTP',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24932,
                'AlertTime': '2017-06-18 13:20:35',
                'Severity': 'High',
                'ClientIP': '66.78.200.140',
                'ServerIP': '158.81.16.91',
                'Protocol': 'HTTP',
                'ClientCountry': 'Canada'
            },
            {
                'AlertId': 24933,
                'AlertTime': '2017-06-15 08:05:22',
                'Severity': 'Medium',
                'ClientIP': '43.172.24.178',
                'ServerIP': '233.16.89.62',
                'Protocol': 'HTTP',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24934,
                'AlertTime': '2017-06-07 19:42:28',
                'Severity': 'High',
                'ClientIP': '66.78.200.140',
                'ServerIP': '27.58.41.62',
                'Protocol': 'HTTP',
                'ClientCountry': 'Canada'
            },
            {
                'AlertId': 24935,
                'AlertTime': '2017-06-06 11:58:44',
                'Severity': 'Low',
                'ClientIP': '43.172.24.178',
                'ServerIP': '134.246.22.66',
                'Protocol': 'HTTP',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24936,
                'AlertTime': '2017-06-04 15:04:45',
                'Severity': 'Medium',
                'ClientIP': '155.175.121.134',
                'ServerIP': '93.48.233.225',
                'Protocol': 'SMTP',
                'ClientCountry': 'Canada'
            },
            {
                'AlertId': 24937,
                'AlertTime': '2017-05-31 00:06:50',
                'Severity': 'High',
                'ClientIP': '43.172.24.178',
                'ServerIP': '135.87.182.1',
                'Protocol': 'TLS',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24938,
                'AlertTime': '2017-05-27 18:16:19',
                'Severity': 'High',
                'ClientIP': '66.78.200.140',
                'ServerIP': '84.34.192.87',
                'Protocol': 'TLS',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24939,
                'AlertTime': '2017-05-27 11:32:30',
                'Severity': 'Medium',
                'ClientIP': '66.78.200.140',
                'ServerIP': '110.117.213.175',
                'Protocol': 'FTP',
                'ClientCountry': 'Germany'
            },
            {
                'AlertId': 24940,
                'AlertTime': '2017-05-27 00:02:10',
                'Severity': 'Low',
                'ClientIP': '155.175.121.134',
                'ServerIP': '234.13.144.164',
                'Protocol': 'HTTP',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24941,
                'AlertTime': '2017-05-22 03:43:46',
                'Severity': 'High',
                'ClientIP': '66.78.200.140',
                'ServerIP': '36.90.255.211',
                'Protocol': 'TLS',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24942,
                'AlertTime': '2017-05-21 01:31:08',
                'Severity': 'Low',
                'ClientIP': '66.78.200.140',
                'ServerIP': '146.43.162.243',
                'Protocol': 'FTP',
                'ClientCountry': 'Canada'
            },
            {
                'AlertId': 24943,
                'AlertTime': '2017-05-17 15:37:57',
                'Severity': 'Low',
                'ClientIP': '43.172.24.178',
                'ServerIP': '104.62.233.72',
                'Protocol': 'HTTP',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24944,
                'AlertTime': '2017-05-13 03:35:34',
                'Severity': 'Low',
                'ClientIP': '43.172.24.178',
                'ServerIP': '64.249.97.176',
                'Protocol': 'HTTP',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24945,
                'AlertTime': '2017-04-24 22:31:46',
                'Severity': 'Medium',
                'ClientIP': '43.172.24.178',
                'ServerIP': '53.198.10.201',
                'Protocol': 'HTTP',
                'ClientCountry': 'Canada'
            },
            {
                'AlertId': 24946,
                'AlertTime': '2017-04-21 05:21:06',
                'Severity': 'Low',
                'ClientIP': '66.78.200.140',
                'ServerIP': '64.125.162.115',
                'Protocol': 'FTP',
                'ClientCountry': 'Canada'
            },
            {
                'AlertId': 24947,
                'AlertTime': '2017-04-20 02:11:58',
                'Severity': 'Medium',
                'ClientIP': '66.78.200.140',
                'ServerIP': '44.127.13.36',
                'Protocol': 'TLS',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24948,
                'AlertTime': '2017-04-03 06:36:50',
                'Severity': 'High',
                'ClientIP': '43.172.24.178',
                'ServerIP': '20.191.122.251',
                'Protocol': 'HTTP',
                'ClientCountry': 'Canada'
            },
            {
                'AlertId': 24949,
                'AlertTime': '2017-04-02 15:41:40',
                'Severity': 'High',
                'ClientIP': '66.78.200.140',
                'ServerIP': '21.140.103.32',
                'Protocol': 'HTTP',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24950,
                'AlertTime': '2017-03-31 19:56:53',
                'Severity': 'Medium',
                'ClientIP': '43.172.24.178',
                'ServerIP': '212.32.127.26',
                'Protocol': 'TLS',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24951,
                'AlertTime': '2017-03-28 00:30:53',
                'Severity': 'Low',
                'ClientIP': '43.172.24.178',
                'ServerIP': '135.51.115.15',
                'Protocol': 'SMTP',
                'ClientCountry': 'Canada'
            },
            {
                'AlertId': 24952,
                'AlertTime': '2017-03-23 03:31:12',
                'Severity': 'Low',
                'ClientIP': '155.175.121.134',
                'ServerIP': '162.200.157.71',
                'Protocol': 'FTP',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24953,
                'AlertTime': '2017-03-22 10:00:52',
                'Severity': 'Low',
                'ClientIP': '43.172.24.178',
                'ServerIP': '170.74.151.55',
                'Protocol': 'TLS',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24954,
                'AlertTime': '2017-03-19 09:30:31',
                'Severity': 'Medium',
                'ClientIP': '66.78.200.140',
                'ServerIP': '158.23.89.250',
                'Protocol': 'FTP',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24955,
                'AlertTime': '2017-03-18 07:41:10',
                'Severity': 'High',
                'ClientIP': '66.78.200.140',
                'ServerIP': '213.188.151.109',
                'Protocol': 'SMTP',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24956,
                'AlertTime': '2017-03-15 01:29:29',
                'Severity': 'Low',
                'ClientIP': '155.175.121.134',
                'ServerIP': '88.116.2.62',
                'Protocol': 'HTTP',
                'ClientCountry': 'United States'
            },
            {
                'AlertId': 24957,
                'AlertTime': '2017-03-10 01:02:11',
                'Severity': 'Medium',
                'ClientIP': '97.28.36.120',
                'ServerIP': '250.97.71.15',
                'Protocol': 'HTTP',
                'ClientCountry': 'Canada'
            },
            {
                'AlertId': 24958,
                'AlertTime': '2017-03-06 23:04:48',
                'Severity': 'Low',
                'ClientIP': '155.175.121.134',
                'ServerIP': '75.148.198.81',
                'Protocol': 'HTTP',
                'ClientCountry': 'United States'
            }
        ];
        return { alerts: alerts };
    };
    return InMemoryDataService;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_main_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/main/app.module */ "./src/app/main/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_main_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/paul.zettersten/Projects/fidelis/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map