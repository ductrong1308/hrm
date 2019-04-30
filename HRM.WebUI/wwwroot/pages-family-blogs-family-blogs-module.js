(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-family-blogs-family-blogs-module"],{

/***/ "./app/pages/family-blogs/family-blogs.component.css":
/*!***********************************************************!*\
  !*** ./app/pages/family-blogs/family-blogs.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL3BhZ2VzL2ZhbWlseS1ibG9ncy9mYW1pbHktYmxvZ3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./app/pages/family-blogs/family-blogs.component.html":
/*!************************************************************!*\
  !*** ./app/pages/family-blogs/family-blogs.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  family-blogs works!\n</p>\n"

/***/ }),

/***/ "./app/pages/family-blogs/family-blogs.component.ts":
/*!**********************************************************!*\
  !*** ./app/pages/family-blogs/family-blogs.component.ts ***!
  \**********************************************************/
/*! exports provided: FamilyBlogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyBlogsComponent", function() { return FamilyBlogsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var FamilyBlogsComponent = /** @class */ (function () {
    function FamilyBlogsComponent() {
    }
    FamilyBlogsComponent.prototype.ngOnInit = function () {
    };
    FamilyBlogsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-family-blogs',
            template: __webpack_require__(/*! ./family-blogs.component.html */ "./app/pages/family-blogs/family-blogs.component.html"),
            styles: [__webpack_require__(/*! ./family-blogs.component.css */ "./app/pages/family-blogs/family-blogs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FamilyBlogsComponent);
    return FamilyBlogsComponent;
}());



/***/ }),

/***/ "./app/pages/family-blogs/family-blogs.module.ts":
/*!*******************************************************!*\
  !*** ./app/pages/family-blogs/family-blogs.module.ts ***!
  \*******************************************************/
/*! exports provided: FamilyBlogsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyBlogsModule", function() { return FamilyBlogsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _family_blogs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./family-blogs.component */ "./app/pages/family-blogs/family-blogs.component.ts");





var FamilyBlogs_Route = [{ path: '', component: _family_blogs_component__WEBPACK_IMPORTED_MODULE_4__["FamilyBlogsComponent"] }];
var FamilyBlogsModule = /** @class */ (function () {
    function FamilyBlogsModule() {
    }
    FamilyBlogsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_family_blogs_component__WEBPACK_IMPORTED_MODULE_4__["FamilyBlogsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(FamilyBlogs_Route)
            ]
        })
    ], FamilyBlogsModule);
    return FamilyBlogsModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-family-blogs-family-blogs-module.js.map