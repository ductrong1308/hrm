(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-friends-blogs-friends-blogs-module"],{

/***/ "./app/pages/friends-blogs/friends-blogs.component.css":
/*!*************************************************************!*\
  !*** ./app/pages/friends-blogs/friends-blogs.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL3BhZ2VzL2ZyaWVuZHMtYmxvZ3MvZnJpZW5kcy1ibG9ncy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./app/pages/friends-blogs/friends-blogs.component.html":
/*!**************************************************************!*\
  !*** ./app/pages/friends-blogs/friends-blogs.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  friends-blogs works!\n</p>\n"

/***/ }),

/***/ "./app/pages/friends-blogs/friends-blogs.component.ts":
/*!************************************************************!*\
  !*** ./app/pages/friends-blogs/friends-blogs.component.ts ***!
  \************************************************************/
/*! exports provided: FriendsBlogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsBlogsComponent", function() { return FriendsBlogsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var FriendsBlogsComponent = /** @class */ (function () {
    function FriendsBlogsComponent() {
    }
    FriendsBlogsComponent.prototype.ngOnInit = function () {
    };
    FriendsBlogsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-friends-blogs',
            template: __webpack_require__(/*! ./friends-blogs.component.html */ "./app/pages/friends-blogs/friends-blogs.component.html"),
            styles: [__webpack_require__(/*! ./friends-blogs.component.css */ "./app/pages/friends-blogs/friends-blogs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FriendsBlogsComponent);
    return FriendsBlogsComponent;
}());



/***/ }),

/***/ "./app/pages/friends-blogs/friends-blogs.module.ts":
/*!*********************************************************!*\
  !*** ./app/pages/friends-blogs/friends-blogs.module.ts ***!
  \*********************************************************/
/*! exports provided: FriendsBlogsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsBlogsModule", function() { return FriendsBlogsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _friends_blogs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./friends-blogs.component */ "./app/pages/friends-blogs/friends-blogs.component.ts");





var FriendsBlogs_Route = [
    { path: '', component: _friends_blogs_component__WEBPACK_IMPORTED_MODULE_4__["FriendsBlogsComponent"] }
];
var FriendsBlogsModule = /** @class */ (function () {
    function FriendsBlogsModule() {
    }
    FriendsBlogsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_friends_blogs_component__WEBPACK_IMPORTED_MODULE_4__["FriendsBlogsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(FriendsBlogs_Route)
            ]
        })
    ], FriendsBlogsModule);
    return FriendsBlogsModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-friends-blogs-friends-blogs-module.js.map