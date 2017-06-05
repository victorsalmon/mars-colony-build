webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlienService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlienService = (function () {
    function AlienService(http) {
        this.http = http;
        this.URL_ALIENS = 'https://red-wdp-api.herokuapp.com/api/mars/aliens';
    }
    AlienService.prototype.getData = function () {
        return this.http.get(this.URL_ALIENS)
            .map(this.extractAliens);
    };
    AlienService.prototype.extractAliens = function (res) {
        var aliens = res.json();
        return aliens.aliens;
    };
    return AlienService;
}());
AlienService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], AlienService);

var _a;
//# sourceMappingURL=alien.service.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColonistService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ColonistService = (function () {
    function ColonistService(http) {
        this.http = http;
        this.URL_COLONISTS = 'https://red-wdp-api.herokuapp.com/api/mars/colonists';
    }
    ColonistService.prototype.postData = function (colonist) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.URL_COLONISTS, { colonist: colonist }, options)
            .map(this.extractData);
    };
    ColonistService.prototype.extractData = function (res) {
        var colonist = res.json();
        return colonist;
    };
    return ColonistService;
}());
ColonistService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ColonistService);

var _a;
//# sourceMappingURL=colonist.service.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncountersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import 'rxjs/add/operator/catch';

var EncountersService = (function () {
    function EncountersService(http) {
        this.http = http;
        this.URL_ENCOUNTERS = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';
    }
    EncountersService.prototype.getData = function () {
        return this.http.get(this.URL_ENCOUNTERS)
            .map(this.extractEncounters);
    };
    EncountersService.prototype.extractEncounters = function (res) {
        var encounters = res.json();
        return encounters;
    };
    return EncountersService;
}());
EncountersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], EncountersService);

var _a;
//# sourceMappingURL=encounters.service.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterService = (function () {
    function RegisterService(http) {
        this.http = http;
        this.URL_JOBS = 'https://red-wdp-api.herokuapp.com/api/mars/jobs';
    }
    RegisterService.prototype.getData = function () {
        return this.http.get(this.URL_JOBS)
            .map(this.extractJobs);
    };
    RegisterService.prototype.extractJobs = function (res) {
        var jobs = res.json();
        return jobs.jobs;
    };
    return RegisterService;
}());
RegisterService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], RegisterService);

var _a;
//# sourceMappingURL=register.service.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportService = (function () {
    function ReportService(http) {
        this.http = http;
        this.URL_REPORT = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';
    }
    ReportService.prototype.postData = function (encounter) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.URL_REPORT, { encounter: encounter }, options)
            .map(this.extractData);
    };
    ReportService.prototype.extractData = function (res) {
        var report = res.json();
        return report;
    };
    return ReportService;
}());
ReportService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ReportService);

var _a;
//# sourceMappingURL=report.service.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "a {\n  color: white;\n  text-decoration: none;\n  margin-right: 17%; }\n\n.app-wrap {\n  background: black; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "li p {\n  margin-bottom: 1rem; }\n\nli span {\n  display: block; }\n\na {\n  text-decoration: none; }\n\nh1, h2, .report {\n  text-align: center;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 100;\n  text-align: center; }\n\nh1 {\n  font-size: 2rem;\n  padding-top: 2.5rem; }\n\nh2 {\n  padding-bottom: 1.5rem; }\n\nli {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 100; }\n  li p {\n    font-size: 1.2rem; }\n\n.encounters-page {\n  background: white; }\n\n.report {\n  background: black;\n  bottom: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 25vh;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: fixed;\n  width: 100%; }\n  .report a {\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n    color: white;\n    font-size: 2rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, ".home-wrap {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(237, 67, 67, 0.7)), url(" + __webpack_require__(200) + ");\n  background-position-x: 47%;\n  background-position-y: 33%;\n  font-size: 18px;\n  height: 100vh; }\n\nh1, h2 {\n  color: white;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 100;\n  text-align: center; }\n\nh1 {\n  font-size: 2.5rem;\n  padding-top: 12vh;\n  text-transform: uppercase; }\n\nh2 {\n  font-size: 2rem;\n  padding-top: 35vh; }\n\nmain {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.animate {\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-name: pulse;\n          animation-name: pulse;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  background: rgba(237, 237, 237, 0.2);\n  border-radius: 50%;\n  height: 75px;\n  margin-top: 25vh;\n  opacity: 0.4;\n  width: 75px;\n  box-shadow: 0 0 0 25px rgba(255, 255, 255, 0.1), 0 0 0 50px rgba(255, 255, 255, 0.1), 0 0 0 75px rgba(255, 255, 255, 0.1); }\n\n@-webkit-keyframes pulse {\n  0% {\n    box-shadow: 0 0 0 25px rgba(255, 255, 255, 0.4), 0 0 0 50px rgba(255, 255, 255, 0.4), 0 0 0 75px rgba(255, 255, 255, 0.4);\n    opacity: 0; }\n  33% {\n    box-shadow: 0 0 0 25px rgba(255, 255, 255, 0.3), 0 0 0 50px rgba(255, 255, 255, 0.2), 0 0 0 75px rgba(255, 255, 255, 0);\n    opacity: 0.1; }\n  66% {\n    box-shadow: 0 0 0 25px rgba(255, 255, 255, 0.02), 0 0 0 50px rgba(255, 255, 255, 0), 0 0 0 75px rgba(255, 255, 255, 0);\n    opacity: 0.2; }\n  100% {\n    box-shadow: 0 0 0 25px rgba(255, 255, 255, 0), 0 0 0 50px rgba(255, 255, 255, 0), 0 0 0 75px rgba(255, 255, 255, 0);\n    opacity: 0.3; } }\n\n@keyframes pulse {\n  0% {\n    box-shadow: 0 0 0 25px rgba(255, 255, 255, 0.4), 0 0 0 50px rgba(255, 255, 255, 0.4), 0 0 0 75px rgba(255, 255, 255, 0.4);\n    opacity: 0; }\n  33% {\n    box-shadow: 0 0 0 25px rgba(255, 255, 255, 0.3), 0 0 0 50px rgba(255, 255, 255, 0.2), 0 0 0 75px rgba(255, 255, 255, 0);\n    opacity: 0.1; }\n  66% {\n    box-shadow: 0 0 0 25px rgba(255, 255, 255, 0.02), 0 0 0 50px rgba(255, 255, 255, 0), 0 0 0 75px rgba(255, 255, 255, 0);\n    opacity: 0.2; }\n  100% {\n    box-shadow: 0 0 0 25px rgba(255, 255, 255, 0), 0 0 0 50px rgba(255, 255, 255, 0), 0 0 0 75px rgba(255, 255, 255, 0);\n    opacity: 0.3; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  background: black;\n  height: 100vh;\n  width: 100%; }\n\nh1, .check-in {\n  color: white;\n  font-family: 'Roboto', sans-serif;\n  font-size: 2rem;\n  font-weight: 100;\n  text-align: center;\n  text-decoration: none; }\n\n.flex-wrap {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\nselect option, input, select, input::-webkit-input-placeholder {\n  background: black;\n  border: none;\n  color: #ed4343; }\n\nselect option, input, select, input:-ms-input-placeholder {\n  background: black;\n  border: none;\n  color: #ed4343; }\n\nselect option, input, select, input::placeholder {\n  background: black;\n  border: none;\n  color: #ed4343; }\n\nh1 {\n  padding-top: 3vh; }\n\n.check-in {\n  background: black;\n  border: none;\n  margin-top: 30vh; }\n  .check-in:focus {\n    border: none; }\n\nselect {\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n\nselect::-ms-expand {\n  display: none; }\n\nfieldset {\n  color: #ed4343;\n  margin-top: 1.5rem; }\n  fieldset input, fieldset select {\n    border-bottom: 1px solid white;\n    display: block;\n    font-size: 1.2rem;\n    height: 2rem;\n    margin: 0.9rem 5%;\n    padding-left: 0.5rem;\n    margin-bottom: 1.7rem;\n    width: 90%; }\n    fieldset input:focus, fieldset select:focus {\n      outline: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, ".report-wrap {\n  background: black;\n  height: 100vh;\n  width: 100%; }\n\nh1, h2, .submit-report {\n  color: white;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 100;\n  text-align: center; }\n\nh1, .submit-report {\n  font-size: 2rem;\n  padding-top: 2rem; }\n\nh2 {\n  font-size: 1.2rem;\n  padding-bottom: 2rem; }\n\n.btn-wrap {\n  background: black;\n  bottom: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 42vh;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: fixed;\n  width: 100%; }\n  .btn-wrap .submit-report {\n    font-size: 2rem;\n    text-decoration: none; }\n\nfieldset {\n  color: #ed4343;\n  margin-top: 0.5rem; }\n  fieldset textarea, fieldset select {\n    border-bottom: 1px solid white;\n    display: block;\n    font-size: 1.2rem;\n    height: 2rem;\n    margin: 0.9rem 5%;\n    padding-left: 0.5rem;\n    margin-bottom: 1rem;\n    width: 90%; }\n    fieldset textarea:focus, fieldset select:focus {\n      outline: none; }\n  fieldset .action-taken {\n    background: white;\n    font-size: 1.4rem;\n    height: 12rem; }\n    fieldset .action-taken::-webkit-input-placeholder {\n      background: white; }\n    fieldset .action-taken:-ms-input-placeholder {\n      background: white; }\n    fieldset .action-taken::placeholder {\n      background: white; }\n\nselect option, select, textarea::-webkit-input-placeholder {\n  background: black;\n  border: none;\n  color: #ed4343; }\n\nselect option, select, textarea:-ms-input-placeholder {\n  background: black;\n  border: none;\n  color: #ed4343; }\n\nselect option, select, textarea::placeholder {\n  background: black;\n  border: none;\n  color: #ed4343; }\n\nselect {\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n\nselect::-ms-expand {\n  display: none; }\n\n.submit-report {\n  background: black;\n  border: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

module.exports = "<div class=\"app-wrap\">\n  <a routerLink=\"/\">Home</a>\n  <!--<a routerLink=\"/register\">Register</a>\n  <a routerLink=\"/encounters\">Encounters</a>\n  <a routerLink=\"/report\">Report</a>-->\n  <a routerLink=\"/blog\">Blog</a>\n</div>\n  <router-outlet></router-outlet>"

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

module.exports = "<p>\n  blog works!\n</p>\n"

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

module.exports = "<div class=\"encounters-page\">\r\n  <!--List of Encounters-->\r\n  <div class=\"warning\">\r\n    <h1> Recent Encounters </h1>\r\n    <a routerLink=\"/report\">\r\n      <h2> See an Alien? Report it! </h2>\r\n    </a>\r\n    <button (click)=\"sortList($event)\" class=\"sort-list\"></button>\r\n  </div>\r\n  <div class=\"list\">\r\n    <ul>\r\n      <li *ngFor=\"let encounter of listEncounters\">\r\n        <p><span>{{ encounter.date }} - {{ encounter.atype }}</span>\r\n        {{ encounter.action }}</p>\r\n      </li>\r\n    </ul>\r\n\r\n    <div class=\"report\">\r\n      <a routerLink=\"/report\" class=\"\">Report an Encounter!</a>  \r\n    </div>\r\n  \r\n  \r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

module.exports = "<div class=\"home-wrap\">\n  <header>\n    <h1>Mars Colony 1</h1>\n  </header>\n  <main>\n    <a routerLink=\"/register\">\n      <div class=\"animate\"></div>\n    </a>\n  </main>\n  <footer>\n    <h2>Tap circle to enter</h2>  \n  </footer>\n</div>"

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <h1>Register</h1>\r\n  <form [formGroup]=\"this.registerForm\" (ngSubmit)=\"postColonist($event)\">\r\n    <fieldset>\r\n      <input type=\"text\" placeholder=\"Name\" formControlName=\"colName\" required/>\r\n      <input type=\"number\" placeholder=\"Age\" formControlName=\"colAge\" required/>\r\n      <select formControlName=\"colJob\" required>\r\n        <option [value]=\"NO_JOB_SELECTED\" selected>Select occupation</option>\r\n        <option *ngFor=\"let job of listJobs\" [value]=\"job.id\">\r\n          {{job.name}}\r\n        </option>\r\n      </select>\r\n    </fieldset>\r\n    <div class=\"flex-wrap\">\r\n      <button [disabled]=\"registerForm.invalid\" class=\"check-in\" type=\"submit\">Check in</button>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

module.exports = "<div class=\"report-wrap\">\r\n  <h1>Report an Encounter</h1>\r\n  <h2>Safety on Mars is your repsonsibility</h2>\r\n  <form class=\"report-form\" [formGroup]=\"this.reportForm\" (ngSubmit)=\"postReport($event)\">\r\n    <fieldset>\r\n      <select formControlName=\"repAtype\" required>\r\n        <option [value]=\"NO_SELECTION\" selected>Select an alien type</option>\r\n        <option *ngFor=\"let alien of listAliens\" [value]=\"alien.id\">\r\n          {{alien.type}}\r\n        </option>\r\n      </select>\r\n      <textarea class=\"action-taken\" placeholder=\"Action taken\" formControlName=\"repAct\" required></textarea>\r\n    </fieldset>\r\n    <div class=\"btn-wrap\">\r\n      <button [disabled]=\"reportForm.invalid\" class=\"submit-report\" type=\"submit\">Submit Report</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mars-background.6232942afece9c682eb0.jpg";

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(86);


/***/ }),

/***/ 85:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 85;


/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(105);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(165),
        styles: [__webpack_require__(159)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_register_register_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_encounters_encounters_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_report_report_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_blog_blog_component__ = __webpack_require__(95);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




 // Router






var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_7__pages_register_register_component__["a" /* RegisterComponent */] },
    { path: 'encounters', component: __WEBPACK_IMPORTED_MODULE_8__pages_encounters_encounters_component__["a" /* EncountersComponent */] },
    { path: 'report', component: __WEBPACK_IMPORTED_MODULE_9__pages_report_report_component__["a" /* ReportComponent */] },
    { path: 'blog', component: __WEBPACK_IMPORTED_MODULE_9__pages_report_report_component__["a" /* ReportComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__pages_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__pages_encounters_encounters_component__["a" /* EncountersComponent */],
            __WEBPACK_IMPORTED_MODULE_9__pages_report_report_component__["a" /* ReportComponent */],
            __WEBPACK_IMPORTED_MODULE_10__pages_blog_blog_component__["a" /* BlogComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes) // Router
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Colonist; });
var Colonist = (function () {
    function Colonist(name, age, job_id) {
        this.name = name;
        this.age = age;
        this.job_id = job_id;
    }
    return Colonist;
}());

//# sourceMappingURL=colonist.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Report; });
var Report = (function () {
    function Report(atype, date, action, colonist_id) {
        this.atype = atype;
        this.date = date;
        this.action = action;
        this.colonist_id = colonist_id;
    }
    return Report;
}());

//# sourceMappingURL=report.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogComponent = (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    return BlogComponent;
}());
BlogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-blog',
        template: __webpack_require__(166),
        styles: [__webpack_require__(160)]
    }),
    __metadata("design:paramtypes", [])
], BlogComponent);

//# sourceMappingURL=blog.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_encounters_service__ = __webpack_require__(102);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncountersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// List of Encounters
var EncountersComponent = (function () {
    function EncountersComponent(encountersService) {
        this.encountersService = encountersService;
        this.listEncounters = [];
    }
    EncountersComponent.prototype.ngOnInit = function () {
        // this.listEncounters.push(Encounter);
        var _this = this;
        this.encountersService.getData()
            .subscribe(function (encounters) {
            _this.listEncounters = encounters.encounters;
        });
    };
    EncountersComponent.prototype.sortList = function (e) {
        e.preventDefault();
        return;
    };
    return EncountersComponent;
}());
EncountersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-encounters',
        template: __webpack_require__(167),
        styles: [__webpack_require__(161)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_encounters_service__["a" /* EncountersService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_encounters_service__["a" /* EncountersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_encounters_service__["a" /* EncountersService */]) === "function" && _a || Object])
], EncountersComponent);

var _a;
//# sourceMappingURL=encounters.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(168),
        styles: [__webpack_require__(162)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_register_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_colonist__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_colonist_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



 // POST


var cantBe = function (value) {
    return function (control) {
        return control.value === value ? { 'Can\'t be this value': value } : null;
    };
};
var RegisterComponent = (function () {
    function RegisterComponent(registerService, colonistService, formBuilder, router) {
        this.registerService = registerService;
        this.colonistService = colonistService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.listJobs = [];
        this.NO_JOB_SELECTED = 'default';
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.registerForm = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormGroup */]({
            colName: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* Validators */].maxLength(35),
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* Validators */].minLength(2)
            ]),
            colAge: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* Validators */].maxLength(2)
            ]),
            colJob: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormControl */](this.NO_JOB_SELECTED, [cantBe(this.NO_JOB_SELECTED)])
        });
        this.registerService.getData()
            .subscribe(function (jobs) {
            _this.listJobs = jobs;
        });
    };
    RegisterComponent.prototype.postColonist = function (e) {
        var _this = this;
        e.preventDefault();
        var name = this.registerForm.get('colName').value;
        var age = this.registerForm.get('colAge').value;
        var job_id = this.registerForm.get('colJob').value;
        var colonist = new __WEBPACK_IMPORTED_MODULE_3__models_colonist__["a" /* Colonist */](name, age, job_id);
        this.colonistService
            .postData(colonist)
            .subscribe(function (newColonist) {
            localStorage.setItem('colonistIdNum', (newColonist.colonist.id).toString());
            console.log('Successfully posted colonist as colonist number: ', localStorage.getItem('colonistIdNum'));
            _this.router.navigate(['/encounters']);
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__(169),
        styles: [__webpack_require__(163)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_register_service__["a" /* RegisterService */], __WEBPACK_IMPORTED_MODULE_4__services_colonist_service__["a" /* ColonistService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_register_service__["a" /* RegisterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_register_service__["a" /* RegisterService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_colonist_service__["a" /* ColonistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_colonist_service__["a" /* ColonistService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alien_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_report__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_report_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



 //POST


// Report an Encounter
var cantBe = function (value) {
    return function (control) {
        return control.value === value ? { 'Can\'t be this value': value } : null;
    };
};
var ReportComponent = (function () {
    function ReportComponent(alienService, reportService, formBuilder, router) {
        this.alienService = alienService;
        this.reportService = reportService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.listAliens = [];
        this.NO_SELECTION = 'default';
    }
    ReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alienService.getData()
            .subscribe(function (aliens) {
            _this.listAliens = aliens;
        });
        this.reportForm = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormGroup */]({
            repAtype: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormControl */](this.NO_SELECTION, [
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* Validators */].required,
                cantBe(this.NO_SELECTION)
            ]),
            repAct: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* Validators */].required])
        });
    };
    ReportComponent.prototype.postReport = function (e) {
        var _this = this;
        e.preventDefault();
        var alien = this.reportForm.get('repAtype').value;
        var action = this.reportForm.get('repAct').value;
        var day = new Date;
        var dateString = day.getFullYear() + "-" + day.getMonth() + "-" + day.getDate();
        var colonist_id = localStorage.getItem('colonistIdNum');
        var report = new __WEBPACK_IMPORTED_MODULE_3__models_report__["a" /* Report */](alien, dateString, action, colonist_id);
        this.reportService
            .postData(report)
            .subscribe(function (newReport) {
            console.log('Your report has been successfully submitted!', newReport);
            _this.router.navigate(['/encounters']);
        });
    };
    return ReportComponent;
}());
ReportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-report',
        template: __webpack_require__(170),
        styles: [__webpack_require__(164)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_alien_service__["a" /* AlienService */], __WEBPACK_IMPORTED_MODULE_4__services_report_service__["a" /* ReportService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_alien_service__["a" /* AlienService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_alien_service__["a" /* AlienService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_report_service__["a" /* ReportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_report_service__["a" /* ReportService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ReportComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=report.component.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.bundle.js.map