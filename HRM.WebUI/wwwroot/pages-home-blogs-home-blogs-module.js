(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-blogs-home-blogs-module"],{

/***/ "./app/pages/home-blogs/home-blogs.component.css":
/*!*******************************************************!*\
  !*** ./app/pages/home-blogs/home-blogs.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL3BhZ2VzL2hvbWUtYmxvZ3MvaG9tZS1ibG9ncy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./app/pages/home-blogs/home-blogs.component.html":
/*!********************************************************!*\
  !*** ./app/pages/home-blogs/home-blogs.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home-blogs works!\n</p>\n"

/***/ }),

/***/ "./app/pages/home-blogs/home-blogs.component.ts":
/*!******************************************************!*\
  !*** ./app/pages/home-blogs/home-blogs.component.ts ***!
  \******************************************************/
/*! exports provided: HomeBlogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeBlogsComponent", function() { return HomeBlogsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var HomeBlogsComponent = /** @class */ (function () {
    function HomeBlogsComponent() {
    }
    HomeBlogsComponent.prototype.ngOnInit = function () {
    };
    HomeBlogsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-blogs',
            template: __webpack_require__(/*! ./home-blogs.component.html */ "./app/pages/home-blogs/home-blogs.component.html"),
            styles: [__webpack_require__(/*! ./home-blogs.component.css */ "./app/pages/home-blogs/home-blogs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeBlogsComponent);
    return HomeBlogsComponent;
}());



/***/ }),

/***/ "./app/pages/home-blogs/home-blogs.module.ts":
/*!***************************************************!*\
  !*** ./app/pages/home-blogs/home-blogs.module.ts ***!
  \***************************************************/
/*! exports provided: HomeBlogsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeBlogsModule", function() { return HomeBlogsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_blogs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-blogs.component */ "./app/pages/home-blogs/home-blogs.component.ts");





var HomeBlogs_Route = [{ path: '', component: _home_blogs_component__WEBPACK_IMPORTED_MODULE_4__["HomeBlogsComponent"] }];
var HomeBlogsModule = /** @class */ (function () {
    function HomeBlogsModule() {
    }
    HomeBlogsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_home_blogs_component__WEBPACK_IMPORTED_MODULE_4__["HomeBlogsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(HomeBlogs_Route)
            ],
            providers: []
        })
    ], HomeBlogsModule);
    return HomeBlogsModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-blogs-home-blogs-module.js.map