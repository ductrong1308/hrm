(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./+accordion/accordion.module": [
		"./app/+accordion/accordion.module.ts",
		"accordion-accordion-module"
	],
	"./+alert/alert.module": [
		"./app/+alert/alert.module.ts",
		"alert-alert-module"
	],
	"./+boxs/box-default/box-default.module": [
		"./app/+boxs/box-default/box-default.module.ts",
		"boxs-box-default-box-default-module"
	],
	"./+boxs/box-info/box-info.module": [
		"./app/+boxs/box-info/box-info.module.ts",
		"boxs-box-info-box-info-module"
	],
	"./+boxs/box-small/box-small.module": [
		"./app/+boxs/box-small/box-small.module.ts",
		"boxs-box-small-box-small-module"
	],
	"./+dropdown/dropdown.module": [
		"./app/+dropdown/dropdown.module.ts",
		"dropdown-dropdown-module"
	],
	"./+form/input-text/input-text.module": [
		"./app/+form/input-text/input-text.module.ts",
		"form-input-text-input-text-module"
	],
	"./+layout/configuration/configuration.module": [
		"./app/+layout/configuration/configuration.module.ts",
		"layout-configuration-configuration-module"
	],
	"./+layout/content/content.module": [
		"./app/+layout/content/content.module.ts",
		"layout-content-content-module"
	],
	"./+layout/custom/custom.module": [
		"./app/+layout/custom/custom.module.ts",
		"layout-custom-custom-module"
	],
	"./+layout/header/header.module": [
		"./app/+layout/header/header.module.ts",
		"layout-header-header-module"
	],
	"./+layout/sidebar-left/sidebar-left.module": [
		"./app/+layout/sidebar-left/sidebar-left.module.ts",
		"layout-sidebar-left-sidebar-left-module"
	],
	"./+layout/sidebar-right/sidebar-right.module": [
		"./app/+layout/sidebar-right/sidebar-right.module.ts",
		"layout-sidebar-right-sidebar-right-module"
	],
	"./+login/login.module": [
		"./app/+login/login.module.ts",
		"login-login-module"
	],
	"./+register/register.module": [
		"./app/+register/register.module.ts",
		"register-register-module"
	],
	"./+tabs/tabs.module": [
		"./app/+tabs/tabs.module.ts",
		"tabs-tabs-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./app/admin-lte.conf.ts":
/*!*******************************!*\
  !*** ./app/admin-lte.conf.ts ***!
  \*******************************/
/*! exports provided: adminLteConf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminLteConf", function() { return adminLteConf; });
var adminLteConf = {
    skin: 'blue',
    // isSidebarLeftCollapsed: false,
    // isSidebarLeftExpandOnOver: false,
    // isSidebarLeftMouseOver: false,
    // isSidebarLeftMini: true,
    // sidebarRightSkin: 'dark',
    // isSidebarRightCollapsed: true,
    // isSidebarRightOverContent: true,
    // layout: 'normal',
    sidebarLeftMenu: [
        { label: 'MAIN NAVIGATION', separator: true },
        { label: 'Get Started', route: '/', iconClasses: 'fa fa-road', pullRights: [{ text: 'New', classes: 'label pull-right bg-green' }] },
        {
            label: 'Layout', iconClasses: 'fa fa-th-list', children: [
                { label: 'Configuration', route: 'layout/configuration' },
                { label: 'Custom', route: 'layout/custom' },
                { label: 'Header', route: 'layout/header' },
                { label: 'Sidebar Left', route: 'layout/sidebar-left' },
                { label: 'Sidebar Right', route: 'layout/sidebar-right' },
                { label: 'Content', route: 'layout/content' }
            ]
        },
        { label: 'COMPONENTS', separator: true },
        { label: 'Accordion', route: 'accordion', iconClasses: 'fa fa-tasks' },
        { label: 'Alert', route: 'alert', iconClasses: 'fa fa-exclamation-triangle' },
        {
            label: 'Boxs', iconClasses: 'fa fa-files-o', children: [
                { label: 'Default Box', route: 'boxs/box' },
                { label: 'Info Box', route: 'boxs/info-box' },
                { label: 'Small Box', route: 'boxs/small-box' }
            ]
        },
        { label: 'Dropdown', route: 'dropdown', iconClasses: 'fa fa-arrows-v' },
        {
            label: 'Form', iconClasses: 'fa fa-files-o', children: [
                { label: 'Input Text', route: 'form/input-text' }
            ]
        },
        { label: 'Tabs', route: 'tabs', iconClasses: 'fa fa-th' }
    ]
};


/***/ }),

/***/ "./app/app-routing.module.ts":
/*!***********************************!*\
  !*** ./app/app-routing.module.ts ***!
  \***********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./app/home/home.component.ts");
/* harmony import */ var _helpers_url_serializer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/url-serializer */ "./app/helpers/url-serializer.ts");





var routes = [
    {
        path: '', data: { title: 'Home' },
        children: [
            { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
            { path: 'accordion', loadChildren: './+accordion/accordion.module#AccordionModule', data: { title: 'Accordion' } },
            { path: 'alert', loadChildren: './+alert/alert.module#AlertModule', data: { title: 'Alert' } },
            {
                path: 'layout', data: { title: 'Layout' },
                children: [
                    { path: 'configuration', loadChildren: './+layout/configuration/configuration.module#ConfigurationModule', data: { title: 'Configuration' } },
                    { path: 'custom', loadChildren: './+layout/custom/custom.module#CustomModule', data: { title: 'Disable Layout' } },
                    { path: 'content', loadChildren: './+layout/content/content.module#ContentModule', data: { title: 'Content' } },
                    { path: 'header', loadChildren: './+layout/header/header.module#HeaderModule', data: { title: 'Header' } },
                    { path: 'sidebar-left', loadChildren: './+layout/sidebar-left/sidebar-left.module#SidebarLeftModule', data: { title: 'Sidebar Left' } },
                    { path: 'sidebar-right', loadChildren: './+layout/sidebar-right/sidebar-right.module#SidebarRightModule', data: { title: 'Sidebar Right' } },
                ]
            },
            {
                path: 'boxs', data: { title: 'Boxs' },
                children: [
                    { path: 'box', loadChildren: './+boxs/box-default/box-default.module#BoxDefaultModule', data: { title: 'Box' } },
                    { path: 'info-box', loadChildren: './+boxs/box-info/box-info.module#BoxInfoModule', data: { title: 'Info Box' } },
                    { path: 'small-box', loadChildren: './+boxs/box-small/box-small.module#BoxSmallModule', data: { title: 'Small Box' } }
                ]
            },
            { path: 'dropdown', loadChildren: './+dropdown/dropdown.module#DropdownModule', data: { title: 'Dropdown' } },
            { path: 'tabs', loadChildren: './+tabs/tabs.module#TabsModule', data: { title: 'Tabs' } },
            {
                path: 'form', data: { title: 'Form' },
                children: [
                    { path: 'input-text', loadChildren: './+form/input-text/input-text.module#InputTextModule', data: { title: 'Input Text' } }
                ]
            },
            {
                path: 'login', loadChildren: './+login/login.module#LoginModule', data: { customLayout: true }
            },
            {
                path: 'register', loadChildren: './+register/register.module#RegisterModule',
                data: { customLayout: true }
            },
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [
                {
                    provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["UrlSerializer"],
                    useClass: _helpers_url_serializer__WEBPACK_IMPORTED_MODULE_4__["LowerCaseUrlSerializer"]
                }
            ],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./app/app.component.html":
/*!********************************!*\
  !*** ./app/app.component.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mk-layout-wrapper>\r\n\r\n    <!--// Header-->\r\n    <mk-layout-header logoLink=\"/\">\r\n        <!--Logo when left menu is expanded-->\r\n        <mk-layout-header-logo><b>HRM</b></mk-layout-header-logo>\r\n\r\n        <!--Logo when left menu is collapsed-->\r\n        <mk-layout-header-logo-mini><b>HRM</b></mk-layout-header-logo-mini>\r\n\r\n        <!-- Items in header-->\r\n        <app-header-inner></app-header-inner>\r\n    </mk-layout-header>\r\n\r\n    <!--Left Menu-->\r\n    <mk-layout-sidebar-left>\r\n        <app-sidebar-left-inner></app-sidebar-left-inner>\r\n    </mk-layout-sidebar-left>\r\n    <!--Right Menu-->\r\n    <mk-layout-sidebar-right>\r\n        <app-sidebar-right-inner></app-sidebar-right-inner>\r\n    </mk-layout-sidebar-right>\r\n\r\n    <!--Main Content-->\r\n    <mk-layout-content>\r\n        <router-outlet></router-outlet>\r\n    </mk-layout-content>\r\n\r\n    <!--Footer-->\r\n    <mk-layout-footer>\r\n        <mk-layout-footer-left>\r\n            <strong>&copy; 2019</strong>\r\n        </mk-layout-footer-left>\r\n        <mk-layout-footer-right>\r\n            <b>Version</b> 1.0.0\r\n        </mk-layout-footer-right>\r\n    </mk-layout-footer>\r\n\r\n</mk-layout-wrapper>"

/***/ }),

/***/ "./app/app.component.ts":
/*!******************************!*\
  !*** ./app/app.component.ts ***!
  \******************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index */ "./app/components/index.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(layoutService) {
        this.layoutService = layoutService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.layoutService.isCustomLayout.subscribe(function (value) {
            _this.customLayout = value;
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'my-app',
            template: __webpack_require__(/*! ./app.component.html */ "./app/app.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_components_index__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/*!***************************!*\
  !*** ./app/app.module.ts ***!
  \***************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_lte_conf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-lte.conf */ "./app/admin-lte.conf.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./app/app-routing.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "./app/core/core.module.ts");
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/index */ "./app/components/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./app/home/home.component.ts");
/* harmony import */ var angular_loading_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-loading-page */ "../node_modules/angular-loading-page/esm5/angular-loading-page.js");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                _components_index__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"].forRoot(_admin_lte_conf__WEBPACK_IMPORTED_MODULE_3__["adminLteConf"]),
                angular_loading_page__WEBPACK_IMPORTED_MODULE_9__["LoadingPageModule"], angular_loading_page__WEBPACK_IMPORTED_MODULE_9__["MaterialBarModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/components/index.ts":
/*!*********************************!*\
  !*** ./app/components/index.ts ***!
  \*********************************/
/*! exports provided: AccordionModule, AlertModule, BoxModule, BoxInfoModule, BoxSmallModule, BreadcrumbsModule, DropdownModule, InputGroupModule, InputTextModule, TabsModule, LayoutModule, LayoutService, LayoutStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_layout_layout_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/layout/layout.module */ "./app/components/lib/layout/layout.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return _lib_layout_layout_module__WEBPACK_IMPORTED_MODULE_0__["LayoutModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return _lib_layout_layout_module__WEBPACK_IMPORTED_MODULE_0__["LayoutService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutStore", function() { return _lib_layout_layout_module__WEBPACK_IMPORTED_MODULE_0__["LayoutStore"]; });

/* harmony import */ var _lib_accordion_accordion_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/accordion/accordion.module */ "./app/components/lib/accordion/accordion.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionModule", function() { return _lib_accordion_accordion_module__WEBPACK_IMPORTED_MODULE_1__["AccordionModule"]; });

/* harmony import */ var _lib_alert_alert_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/alert/alert.module */ "./app/components/lib/alert/alert.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return _lib_alert_alert_module__WEBPACK_IMPORTED_MODULE_2__["AlertModule"]; });

/* harmony import */ var _lib_box_box_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/box/box.module */ "./app/components/lib/box/box.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoxModule", function() { return _lib_box_box_module__WEBPACK_IMPORTED_MODULE_3__["BoxModule"]; });

/* harmony import */ var _lib_box_info_box_info_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/box-info/box-info.module */ "./app/components/lib/box-info/box-info.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoxInfoModule", function() { return _lib_box_info_box_info_module__WEBPACK_IMPORTED_MODULE_4__["BoxInfoModule"]; });

/* harmony import */ var _lib_box_small_box_small_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/box-small/box-small.module */ "./app/components/lib/box-small/box-small.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoxSmallModule", function() { return _lib_box_small_box_small_module__WEBPACK_IMPORTED_MODULE_5__["BoxSmallModule"]; });

/* harmony import */ var _lib_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/breadcrumbs/breadcrumbs.module */ "./app/components/lib/breadcrumbs/breadcrumbs.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsModule", function() { return _lib_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbsModule"]; });

/* harmony import */ var _lib_dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/dropdown/dropdown.module */ "./app/components/lib/dropdown/dropdown.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownModule", function() { return _lib_dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_7__["DropdownModule"]; });

/* harmony import */ var _lib_form_input_group_input_group_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/form/input-group/input-group.module */ "./app/components/lib/form/input-group/input-group.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputGroupModule", function() { return _lib_form_input_group_input_group_module__WEBPACK_IMPORTED_MODULE_8__["InputGroupModule"]; });

/* harmony import */ var _lib_form_input_text_input_text_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/form/input-text/input-text.module */ "./app/components/lib/form/input-text/input-text.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputTextModule", function() { return _lib_form_input_text_input_text_module__WEBPACK_IMPORTED_MODULE_9__["InputTextModule"]; });

/* harmony import */ var _lib_tabs_tabs_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/tabs/tabs.module */ "./app/components/lib/tabs/tabs.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabsModule", function() { return _lib_tabs_tabs_module__WEBPACK_IMPORTED_MODULE_10__["TabsModule"]; });

/*
 * Public API Surface of angular-admin-lte
 */













/***/ }),

/***/ "./app/components/lib/accordion/accordion.component.html":
/*!***************************************************************!*\
  !*** ./app/components/lib/accordion/accordion.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"styleClass\">\n  <div *ngFor=\"let accordion of accordionComponents\" class=\"panel box\" [mkColor]=\"accordion.borderColor\" mkColorProperty=\"border-top-color\" mkColorPrefix=\"box\">\n    <div [ngClass]=\"accordion.headerStyleClass\" [class.no-border]=\"accordion.isCollapsed && !accordion.isCollapsing\">\n      <h4 class=\"box-title\">\n        <a [mkAccordionToggle]=\"accordion\" href=\"#\" [mkFontColor]=\"accordion.headerStyleColor\" [class.collapsed]=\"accordion.isCollapsed\">\n          {{accordion.header}}\n          <ng-template *ngIf=\"!accordion.header\" [ngTemplateOutlet]=\"accordion.accordionHeaderComponent?.templateRef\"></ng-template>\n        </a>\n      </h4>\n    </div>\n    <div class=\"panel-collapse\" [mkCollapseAnimation]=\"accordion.isCollapsed\" (mkCollapseAnimation.start)=\"collapseStart($event, accordion)\" (mkCollapseAnimation.done)=\"collapseDone($event, accordion)\">\n      <div [ngClass]=\"accordion.contentStyleClass\" [mkFontColor]=\"accordion.contentColor\">\n        <ng-template [ngTemplateOutlet]=\"accordion.contentTemplateRef\"></ng-template>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./app/components/lib/accordion/accordion.component.ts":
/*!*************************************************************!*\
  !*** ./app/components/lib/accordion/accordion.component.ts ***!
  \*************************************************************/
/*! exports provided: AccordionHeaderComponent, AccordionContentComponent, AccordionComponent, AccordionGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionHeaderComponent", function() { return AccordionHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionContentComponent", function() { return AccordionContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionComponent", function() { return AccordionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionGroupComponent", function() { return AccordionGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion.directive */ "./app/components/lib/accordion/accordion.directive.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ "./app/components/lib/helpers.ts");




/*
 *
 */
var AccordionHeaderComponent = /** @class */ (function () {
    function AccordionHeaderComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('templateRef'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], AccordionHeaderComponent.prototype, "templateRef", void 0);
    AccordionHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mk-accordion-header',
            template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
        })
    ], AccordionHeaderComponent);
    return AccordionHeaderComponent;
}());

/*
 *
 */
var AccordionContentComponent = /** @class */ (function () {
    function AccordionContentComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('templateRef'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], AccordionContentComponent.prototype, "templateRef", void 0);
    AccordionContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mk-accordion-content',
            template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
        })
    ], AccordionContentComponent);
    return AccordionContentComponent;
}());

/*
 *
 */
var AccordionComponent = /** @class */ (function () {
    function AccordionComponent() {
        this.contentStyleClass = 'box-body';
        this.headerStyleClass = 'box-header with-border';
    }
    /**
     * @method ngOnInit
     */
    AccordionComponent.prototype.ngOnInit = function () {
        this.headerStyleColor = this.headerColor;
        if (!this.header && !this.accordionHeaderComponent) {
            throw new Error('Attribute "header" OR Component "mk-+accordion-header" is required for component "mk-+accordion"');
        }
        if (this.accordionContentComponent) {
            this.contentTemplateRef = this.accordionContentComponent.templateRef;
        }
        else {
            this.contentTemplateRef = this.templateRef;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AccordionComponent.prototype, "borderColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AccordionComponent.prototype, "contentColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AccordionComponent.prototype, "contentStyleClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AccordionComponent.prototype, "header", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AccordionComponent.prototype, "headerColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AccordionComponent.prototype, "headerColorHover", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AccordionComponent.prototype, "headerStyleClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(AccordionHeaderComponent),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", AccordionHeaderComponent)
    ], AccordionComponent.prototype, "accordionHeaderComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(AccordionContentComponent),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", AccordionContentComponent)
    ], AccordionComponent.prototype, "accordionContentComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('templateRef'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], AccordionComponent.prototype, "templateRef", void 0);
    AccordionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mk-accordion',
            template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
        })
    ], AccordionComponent);
    return AccordionComponent;
}());

/*
 *
 */
var AccordionGroupComponent = /** @class */ (function () {
    /**
     * @method constructor
     * @param changeDetectorRef [description]
     * @param ngZone            [description]
     * @param renderer2         [description]
     */
    function AccordionGroupComponent(changeDetectorRef, ngZone, renderer2) {
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
        this.renderer2 = renderer2;
        this.activeIndex = [0];
        // @TODO change types for listeners to all files
        this.listeners = [];
        // @TODO change types for subscriptions to all files
        this.subscriptions = [];
        this.styleClass = 'box-group';
        this.onCollapseStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onCollapseDone = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AccordionGroupComponent_1 = AccordionGroupComponent;
    Object.defineProperty(AccordionGroupComponent.prototype, "_activeIndex", {
        set: function (value) {
            this.activeIndex = value instanceof Array ? value : [value];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * [headerMouseLeave description]
     * @method headerMouseLeave
     * @param accordion [description]
     */
    AccordionGroupComponent.headerMouseLeave = function (accordion) {
        accordion.headerStyleColor = accordion.headerColor;
    };
    /**
     * [headerMouseEnter description]
     * @method headerMouseEnter
     * @param accordion [description]
     */
    AccordionGroupComponent.headerMouseEnter = function (accordion) {
        if (accordion.headerColorHover) {
            accordion.headerStyleColor = accordion.headerColorHover;
        }
    };
    /**
     * @method ngAfterViewInit
     */
    AccordionGroupComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.setAccordionsIndex();
        this.updateAccordionIsCollapsed();
        this.subscriptions.push(this.accordionComponents.changes.subscribe(function () {
            _this.setAccordionsIndex();
        }));
    };
    /**
     * @method ngAfterViewInit
     */
    AccordionGroupComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.setAccordionsToggle();
        this.subscriptions.push(this.accordionToggleDirectives.changes.subscribe(function () {
            _this.setAccordionsToggle();
        }));
    };
    /**
     * [ngOnChanges description]
     * @method ngOnChanges
     * @param changes [description]
     * @return [description]
     */
    AccordionGroupComponent.prototype.ngOnChanges = function (changes) {
        if (changes._activeIndex.firstChange === false) {
            this.updateAccordionIsCollapsed();
        }
    };
    /**
     * @method ngOnDestroy
     */
    AccordionGroupComponent.prototype.ngOnDestroy = function () {
        Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["removeListeners"])(this.listeners);
        Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["removeSubscriptions"])(this.subscriptions);
    };
    /**
     * [toggleAccordion description]
     * @method toggleAccordion
     * @param event       [description]
     * @param toggleIndex [description]
     */
    AccordionGroupComponent.prototype.toggleAccordion = function (event, toggleIndex) {
        event.preventDefault();
        var indexOf = this.activeIndex['indexOf'](toggleIndex);
        if (indexOf === -1) {
            if (this.isMultiple) {
                this.activeIndex.push(toggleIndex);
            }
            else {
                this.activeIndex = [toggleIndex];
            }
        }
        else {
            if (this.isMultiple) {
                this.activeIndex.splice(indexOf, 1);
            }
            else {
                this.activeIndex = [];
            }
        }
        this.updateAccordionIsCollapsed();
    };
    /**
     * [collapseStart description]
     * @method collapseStart
     * @param event [description]
     * @param accordion [description]
     */
    AccordionGroupComponent.prototype.collapseStart = function (event, accordion) {
        accordion.isCollapsing = true;
        this.onCollapseStart.emit({ animationEvent: event, index: accordion.index });
    };
    /**
     * [collapseDone description]
     * @method collapseDone
     * @param event [description]
     * @param accordion [description]
     */
    AccordionGroupComponent.prototype.collapseDone = function (event, accordion) {
        accordion.isCollapsing = false;
        this.onCollapseDone.emit({ animationEvent: event, index: accordion.index });
    };
    /**
     * [setAccordionsIndex description]
     * @method setAccordionsIndex
     */
    AccordionGroupComponent.prototype.setAccordionsIndex = function () {
        this.accordionComponents.forEach(function (accordion, index) {
            accordion.index = index;
        });
    };
    /**
     * [setAccordionsToggle description]
     * @method setAccordionsToggle
     */
    AccordionGroupComponent.prototype.setAccordionsToggle = function () {
        var _this = this;
        this.listeners = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["removeListeners"])(this.listeners);
        this.ngZone.runOutsideAngular(function () {
            _this.accordionToggleDirectives.forEach(function (accordionToggle) {
                _this.listeners.push(_this.renderer2.listen(accordionToggle.elementRef.nativeElement, 'click', function (event) {
                    _this.toggleAccordion(event, accordionToggle.accordionComponent.index);
                    _this.changeDetectorRef.detectChanges();
                }));
                _this.listeners.push(_this.renderer2.listen(accordionToggle.elementRef.nativeElement, 'mouseenter', function () {
                    AccordionGroupComponent_1.headerMouseEnter(accordionToggle.accordionComponent);
                    _this.changeDetectorRef.detectChanges();
                }));
                _this.listeners.push(_this.renderer2.listen(accordionToggle.elementRef.nativeElement, 'mouseleave', function () {
                    AccordionGroupComponent_1.headerMouseLeave(accordionToggle.accordionComponent);
                    _this.changeDetectorRef.detectChanges();
                }));
            });
        });
    };
    /**
     * [updateAccordionIsCollapsed description]
     * @method updateAccordionIsCollapsed
     */
    AccordionGroupComponent.prototype.updateAccordionIsCollapsed = function () {
        var _this = this;
        this.accordionComponents.forEach(function (accordion, index) {
            accordion.isCollapsed = _this.activeIndex.indexOf(index) === -1;
        });
    };
    var AccordionGroupComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('activeIndex'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], AccordionGroupComponent.prototype, "_activeIndex", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], AccordionGroupComponent.prototype, "isMultiple", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AccordionGroupComponent.prototype, "styleClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AccordionGroupComponent.prototype, "onCollapseStart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AccordionGroupComponent.prototype, "onCollapseDone", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(AccordionComponent),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], AccordionGroupComponent.prototype, "accordionComponents", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_accordion_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionToggleDirective"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], AccordionGroupComponent.prototype, "accordionToggleDirectives", void 0);
    AccordionGroupComponent = AccordionGroupComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mk-accordion-group',
            template: __webpack_require__(/*! ./accordion.component.html */ "./app/components/lib/accordion/accordion.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], AccordionGroupComponent);
    return AccordionGroupComponent;
}());



/***/ }),

/***/ "./app/components/lib/accordion/accordion.directive.ts":
/*!*************************************************************!*\
  !*** ./app/components/lib/accordion/accordion.directive.ts ***!
  \*************************************************************/
/*! exports provided: AccordionToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionToggleDirective", function() { return AccordionToggleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


/*
 *
 */
var AccordionToggleDirective = /** @class */ (function () {
    /**
     * @method constructor
     * @param elementRef [description]
     */
    function AccordionToggleDirective(elementRef) {
        this.elementRef = elementRef;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mkAccordionToggle'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AccordionToggleDirective.prototype, "accordionComponent", void 0);
    AccordionToggleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[mkAccordionToggle]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AccordionToggleDirective);
    return AccordionToggleDirective;
}());



/***/ }),

/***/ "./app/components/lib/accordion/accordion.module.ts":
/*!**********************************************************!*\
  !*** ./app/components/lib/accordion/accordion.module.ts ***!
  \**********************************************************/
/*! exports provided: AccordionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionModule", function() { return AccordionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _animations_animations_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animations/animations.module */ "./app/components/lib/animations/animations.module.ts");
/* harmony import */ var _color_color_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../color/color.module */ "./app/components/lib/color/color.module.ts");
/* harmony import */ var _accordion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accordion.component */ "./app/components/lib/accordion/accordion.component.ts");
/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accordion.directive */ "./app/components/lib/accordion/accordion.directive.ts");







var AccordionModule = /** @class */ (function () {
    function AccordionModule() {
    }
    AccordionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _animations_animations_module__WEBPACK_IMPORTED_MODULE_3__["AnimationsModule"], _color_color_module__WEBPACK_IMPORTED_MODULE_4__["ColorModule"]],
            exports: [_accordion_component__WEBPACK_IMPORTED_MODULE_5__["AccordionHeaderComponent"], _accordion_component__WEBPACK_IMPORTED_MODULE_5__["AccordionContentComponent"], _accordion_component__WEBPACK_IMPORTED_MODULE_5__["AccordionComponent"], _accordion_component__WEBPACK_IMPORTED_MODULE_5__["AccordionGroupComponent"]],
            declarations: [_accordion_directive__WEBPACK_IMPORTED_MODULE_6__["AccordionToggleDirective"], _accordion_component__WEBPACK_IMPORTED_MODULE_5__["AccordionHeaderComponent"],
                _accordion_component__WEBPACK_IMPORTED_MODULE_5__["AccordionContentComponent"], _accordion_component__WEBPACK_IMPORTED_MODULE_5__["AccordionComponent"], _accordion_component__WEBPACK_IMPORTED_MODULE_5__["AccordionGroupComponent"]]
        })
    ], AccordionModule);
    return AccordionModule;
}());



/***/ }),

/***/ "./app/components/lib/alert/alert.component.css":
/*!******************************************************!*\
  !*** ./app/components/lib/alert/alert.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".callout-dismissable,\n.callout-dismissible {\n  padding-right: 35px;\n}\n\n.callout-dismissable .close,\n.callout-dismissible .close {\n    position: relative;\n    top: -2px;\n    right: -21px;\n    color: inherit;\n}\n\n.callout .close {\n  color: #000;\n  opacity: 0.2;\n  filter: alpha(opacity=20);\n}\n\n.callout .icon {\n  margin-right: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY29tcG9uZW50cy9saWIvYWxlcnQvYWxlcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6IkNsaWVudEFwcC9hcHAvY29tcG9uZW50cy9saWIvYWxlcnQvYWxlcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYWxsb3V0LWRpc21pc3NhYmxlLFxuLmNhbGxvdXQtZGlzbWlzc2libGUge1xuICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xufVxuXG4uY2FsbG91dC1kaXNtaXNzYWJsZSAuY2xvc2UsXG4uY2FsbG91dC1kaXNtaXNzaWJsZSAuY2xvc2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0ycHg7XG4gICAgcmlnaHQ6IC0yMXB4O1xuICAgIGNvbG9yOiBpbmhlcml0O1xufVxuXG4uY2FsbG91dCAuY2xvc2Uge1xuICBjb2xvcjogIzAwMDtcbiAgb3BhY2l0eTogMC4yO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MjApO1xufVxuXG4uY2FsbG91dCAuaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./app/components/lib/alert/alert.component.html":
/*!*******************************************************!*\
  !*** ./app/components/lib/alert/alert.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!removed\" [mkCollapseAnimation]=\"remove\" (mkCollapseAnimation.start)=\"collapseStart($event)\" (mkCollapseAnimation.done)=\"collapseDone($event)\">\n  <div [mkColor]=\"backgroundColor\" mkColorProperty=\"background-color\" [mkColorPrefix]=\"type\" [mkFontColor]=\"color\" [ngClass]=\"[styleClass, dismissibleClass, type]\">\n    <button *ngIf=\"isDismissible\" type=\"button\" class=\"close\" #removeButtonElement>&times;</button>\n    <ng-content></ng-content>\n  </div>\n</div>\n"

/***/ }),

/***/ "./app/components/lib/alert/alert.component.ts":
/*!*****************************************************!*\
  !*** ./app/components/lib/alert/alert.component.ts ***!
  \*****************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./app/components/lib/helpers.ts");



/*
 *
 */
var AlertComponent = /** @class */ (function () {
    /**
     * @method constructor
     * @param  changeDetectorRef [description]
     * @param  ngZone            [description]
     * @param  renderer2         [description]
     * @param  viewContainerRef  [description]
     */
    function AlertComponent(changeDetectorRef, ngZone, renderer2, viewContainerRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
        this.renderer2 = renderer2;
        this.viewContainerRef = viewContainerRef;
        this.dismissibleClass = 'alert-dismissible';
        this.isDismissible = true;
        this.remove = false;
        this.type = 'alert';
        this.listeners = [];
        this.backgroundColor = 'danger';
        this.styleClass = '';
        this.onCollapseStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onCollapseDone = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(AlertComponent.prototype, "callout", {
        set: function (value) {
            this.type = value ? 'callout' : 'alert';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertComponent.prototype, "_isDismissible", {
        set: function (value) {
            this.isDismissible = value;
            if (value) {
                this.dismissibleClass = this.type + "-dismissible";
            }
            else {
                this.dismissibleClass = '';
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @method ngOnInit
     */
    AlertComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            if (_this.dismissOnTimeout) {
                setTimeout(function () {
                    if (!_this.changeDetectorRef.destroyed) {
                        _this.remove = true;
                        _this.changeDetectorRef.detectChanges();
                    }
                }, _this.dismissOnTimeout);
            }
            if (_this.removeButtonElement) {
                _this.listeners.push(_this.renderer2.listen(_this.removeButtonElement.nativeElement, 'click', function () {
                    _this.remove = true;
                    _this.changeDetectorRef.detectChanges();
                }));
            }
        });
    };
    /**
     * @method ngOnDesroy
     */
    AlertComponent.prototype.ngOnDestroy = function () {
        Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["removeListeners"])(this.listeners);
    };
    /**
     * [collapseStart description]
     * @method collapseStart
     * @param event [description]
     */
    AlertComponent.prototype.collapseStart = function (event) {
        this.onCollapseStart.emit(event);
    };
    /**
     * [collapseDone description]
     * @method collapseDone
     * @param event [description]
     */
    AlertComponent.prototype.collapseDone = function (event) {
        if (event.toState === '1') {
            this.listeners = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["removeListeners"])(this.listeners);
            this.removed = true;
            this.viewContainerRef.clear();
            this.changeDetectorRef.detectChanges();
        }
        this.onCollapseDone.emit(event);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AlertComponent.prototype, "backgroundColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], AlertComponent.prototype, "callout", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AlertComponent.prototype, "color", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], AlertComponent.prototype, "dismissOnTimeout", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('isDismissible'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], AlertComponent.prototype, "_isDismissible", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AlertComponent.prototype, "styleClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AlertComponent.prototype, "onCollapseStart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AlertComponent.prototype, "onCollapseDone", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('removeButtonElement'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AlertComponent.prototype, "removeButtonElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('containerElementRef', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])
    ], AlertComponent.prototype, "containerElementRef", void 0);
    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mk-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./app/components/lib/alert/alert.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./alert.component.css */ "./app/components/lib/alert/alert.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./app/components/lib/alert/alert.module.ts":
/*!**************************************************!*\
  !*** ./app/components/lib/alert/alert.module.ts ***!
  \**************************************************/
/*! exports provided: AlertModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return AlertModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _animations_animations_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animations/animations.module */ "./app/components/lib/animations/animations.module.ts");
/* harmony import */ var _color_color_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../color/color.module */ "./app/components/lib/color/color.module.ts");
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alert.component */ "./app/components/lib/alert/alert.component.ts");






var AlertModule = /** @class */ (function () {
    function AlertModule() {
    }
    AlertModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _animations_animations_module__WEBPACK_IMPORTED_MODULE_3__["AnimationsModule"], _color_color_module__WEBPACK_IMPORTED_MODULE_4__["ColorModule"]],
            exports: [_alert_component__WEBPACK_IMPORTED_MODULE_5__["AlertComponent"]],
            declarations: [_alert_component__WEBPACK_IMPORTED_MODULE_5__["AlertComponent"]]
        })
    ], AlertModule);
    return AlertModule;
}());



/***/ }),

/***/ "./app/components/lib/animations/animations.directive.ts":
/*!***************************************************************!*\
  !*** ./app/components/lib/animations/animations.directive.ts ***!
  \***************************************************************/
/*! exports provided: CollapseAnimationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseAnimationDirective", function() { return CollapseAnimationDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


/*
 *
 */
var CollapseAnimationDirective = /** @class */ (function () {
    /**
     * @method constructor
     * @param elementRef [description]
     * @param ngZone     [description]
     * @param renderer2  [description]
     */
    function CollapseAnimationDirective(elementRef, ngZone, renderer2) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.renderer2 = renderer2;
        this.firstStart = true;
        this.collapseAnimationDuration = 350;
        this.startEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.doneEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(CollapseAnimationDirective.prototype, "_isCollapsed", {
        set: function (value) {
            this.lastIsCollapsed = this.isCollapsed;
            this.isCollapsed = value;
            if (!this.firstStart) {
                this.emit('start');
                if (value) {
                    this.collapse();
                }
                else if (value === false) {
                    this.unCollapse();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @method ngOnInit
     */
    CollapseAnimationDirective.prototype.ngOnInit = function () {
        if (this.collapseAnimationDuration && this.collapseAnimationDuration !== 350) {
            this.renderer2.setStyle(this.elementRef.nativeElement, 'transition-duration', this.collapseAnimationDuration + "ms");
        }
        if (this.collapseAnimationTiming) {
            this.renderer2.setStyle(this.elementRef.nativeElement, 'transition-timing-function', this.collapseAnimationTiming);
        }
    };
    /**
     * @method ngAfterContentInit
     */
    CollapseAnimationDirective.prototype.ngAfterContentInit = function () {
        this.emit('start');
        if (this.isCollapsed) {
            this.renderer2.setStyle(this.elementRef.nativeElement, 'display', 'none');
            this.renderer2.addClass(this.elementRef.nativeElement, 'collapsing');
        }
        this.emit('done');
        this.firstStart = false;
        this.subscriptions();
    };
    /**
     * [ngOnDestroy description]
     * @method ngOnDestroy
     * @return [description]
     */
    CollapseAnimationDirective.prototype.ngOnDestroy = function () {
        if (this.listener) {
            this.listener();
        }
    };
    /**
     * [subscriptions description]
     * @method subscriptions
     */
    CollapseAnimationDirective.prototype.subscriptions = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            _this.listener = _this.renderer2.listen(_this.elementRef.nativeElement, 'transitionend', function () {
                if (!_this.isCollapsed) {
                    _this.renderer2.removeClass(_this.elementRef.nativeElement, 'un-collapse');
                    _this.renderer2.removeClass(_this.elementRef.nativeElement, 'collapsing');
                }
                else {
                    _this.renderer2.setStyle(_this.elementRef.nativeElement, 'display', 'none');
                }
                requestAnimationFrame(function () {
                    _this.renderer2.removeStyle(_this.elementRef.nativeElement, 'height');
                    _this.emit('done');
                    _this.transitioning = false;
                });
            });
        });
    };
    /**
     * [unCollapse description]
     * @method unCollapse
     */
    CollapseAnimationDirective.prototype.unCollapse = function () {
        this.transitioning = true;
        this.renderer2.addClass(this.elementRef.nativeElement, 'un-collapse');
        this.renderer2.removeStyle(this.elementRef.nativeElement, 'display');
        this.renderer2.setStyle(this.elementRef.nativeElement, 'height', this.elementRef.nativeElement.scrollHeight + "px");
    };
    /**
     * [collapse description]
     * @method collapse
     */
    CollapseAnimationDirective.prototype.collapse = function () {
        var _this = this;
        requestAnimationFrame(function () {
            if (!_this.transitioning) {
                _this.renderer2.setStyle(_this.elementRef.nativeElement, 'height', _this.elementRef.nativeElement.offsetHeight + "px");
                _this.renderer2.addClass(_this.elementRef.nativeElement, 'collapsing');
            }
            _this.transitioning = true;
            requestAnimationFrame(function () {
                _this.renderer2.setStyle(_this.elementRef.nativeElement, 'height', "0px");
            });
        });
    };
    CollapseAnimationDirective.prototype.emit = function (phaseName) {
        var event = {
            element: this.elementRef.nativeElement,
            fromState: this.lastIsCollapsed === undefined ? 'void' : this.lastIsCollapsed ? '1' : '0',
            phaseName: phaseName,
            toState: this.isCollapsed === undefined ? 'void' : this.isCollapsed ? '1' : '0',
            totalTime: this.collapseAnimationDuration,
            triggerName: 'mkCollapseAnimation'
        };
        if (phaseName === 'done') {
            this.doneEventEmitter.emit(event);
        }
        else if (phaseName === 'start') {
            this.startEventEmitter.emit(event);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CollapseAnimationDirective.prototype, "collapseAnimationDuration", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CollapseAnimationDirective.prototype, "collapseAnimationTiming", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mkCollapseAnimation'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], CollapseAnimationDirective.prototype, "_isCollapsed", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('mkCollapseAnimation.start'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CollapseAnimationDirective.prototype, "startEventEmitter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('mkCollapseAnimation.done'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CollapseAnimationDirective.prototype, "doneEventEmitter", void 0);
    CollapseAnimationDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[mkCollapseAnimation]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], CollapseAnimationDirective);
    return CollapseAnimationDirective;
}());



/***/ }),

/***/ "./app/components/lib/animations/animations.module.ts":
/*!************************************************************!*\
  !*** ./app/components/lib/animations/animations.module.ts ***!
  \************************************************************/
/*! exports provided: AnimationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationsModule", function() { return AnimationsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations.directive */ "./app/components/lib/animations/animations.directive.ts");



var AnimationsModule = /** @class */ (function () {
    function AnimationsModule() {
    }
    AnimationsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [_animations_directive__WEBPACK_IMPORTED_MODULE_2__["CollapseAnimationDirective"]],
            declarations: [_animations_directive__WEBPACK_IMPORTED_MODULE_2__["CollapseAnimationDirective"]]
        })
    ], AnimationsModule);
    return AnimationsModule;
}());



/***/ }),

/***/ "./app/components/lib/box-info/box-info.component.css":
/*!************************************************************!*\
  !*** ./app/components/lib/box-info/box-info.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".info-box.bg-color > .info-box-content {\n  color: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY29tcG9uZW50cy9saWIvYm94LWluZm8vYm94LWluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbGliL2JveC1pbmZvL2JveC1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mby1ib3guYmctY29sb3IgPiAuaW5mby1ib3gtY29udGVudCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuIl19 */"

/***/ }),

/***/ "./app/components/lib/box-info/box-info.component.html":
/*!*************************************************************!*\
  !*** ./app/components/lib/box-info/box-info.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"styleClass\" [mkColor]=\"backgroundColor\" mkColorProperty=\"background-color\">\n  <span class=\"info-box-icon\" [mkColor]=\"iconBackgroundColor\" mkColorProperty=\"background-color\">\n    <i [ngClass]=\"iconStyleClass\" [mkFontColor]=\"iconColor\"></i>\n  </span>\n  <div class=\"info-box-content\">\n    <span *ngIf=\"header || boxInfoHeaderDirective\" [ngClass]=\"headerStyleClass\" [mkFontColor]=\"headerColor\">\n      {{header}}\n      <ng-content select=\"mk-box-header\"></ng-content>\n    </span>\n    <span [ngClass]=\"contentStyleClass\" [mkFontColor]=\"contentColor\">\n      <ng-container *ngIf=\"boxInfoHeaderDirective || boxInfoContentDirective || boxInfoFooterDirective; else noDirective\">\n        <ng-content select=\"mk-box-content\"></ng-content>\n      </ng-container>\n      <ng-template #noDirective>\n        <ng-content></ng-content>\n      </ng-template>\n    </span>\n    <div *ngIf=\"progressWidth\" class=\"progress\">\n      <div class=\"progress-bar\" [mkColor]=\"progressBarBg\" mkColorProperty=\"background-color\" [style.width.%]=\"progressWidth\"></div>\n    </div>\n    <span *ngIf=\"footer || boxInfoFooterDirective\" [ngClass]=\"footerStyleClass\" [mkFontColor]=\"footerColor\">\n      {{footer}}\n      <ng-content select=\"mk-box-footer\"></ng-content>\n    </span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./app/components/lib/box-info/box-info.component.ts":
/*!***********************************************************!*\
  !*** ./app/components/lib/box-info/box-info.component.ts ***!
  \***********************************************************/
/*! exports provided: BoxInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxInfoComponent", function() { return BoxInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _box_info_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./box-info.directive */ "./app/components/lib/box-info/box-info.directive.ts");



/*
 *
 */
var BoxInfoComponent = /** @class */ (function () {
    function BoxInfoComponent() {
        this.contentStyleClass = 'info-box-number';
        this.footerStyleClass = 'progress-description';
        this.headerStyleClass = 'info-box-text';
        this.iconColor = '#fff';
        this.iconStyleClass = 'ion ion-bag';
        this.styleClass = 'info-box';
    }
    /**
     * @method ngOnInit
     */
    BoxInfoComponent.prototype.ngOnInit = function () {
        if (!this.backgroundColor) {
            this.progressBarBg = this.iconBackgroundColor;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BoxInfoComponent.prototype, "backgroundColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxInfoComponent.prototype, "contentStyleClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BoxInfoComponent.prototype, "contentColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BoxInfoComponent.prototype, "footer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BoxInfoComponent.prototype, "footerColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxInfoComponent.prototype, "footerStyleClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BoxInfoComponent.prototype, "header", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BoxInfoComponent.prototype, "headerColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxInfoComponent.prototype, "headerStyleClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BoxInfoComponent.prototype, "iconBackgroundColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxInfoComponent.prototype, "iconColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxInfoComponent.prototype, "iconStyleClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], BoxInfoComponent.prototype, "progressWidth", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxInfoComponent.prototype, "styleClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_box_info_directive__WEBPACK_IMPORTED_MODULE_2__["BoxInfoHeaderDirective"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _box_info_directive__WEBPACK_IMPORTED_MODULE_2__["BoxInfoHeaderDirective"])
    ], BoxInfoComponent.prototype, "boxInfoHeaderDirective", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_box_info_directive__WEBPACK_IMPORTED_MODULE_2__["BoxInfoFooterDirective"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _box_info_directive__WEBPACK_IMPORTED_MODULE_2__["BoxInfoFooterDirective"])
    ], BoxInfoComponent.prototype, "boxInfoFooterDirective", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_box_info_directive__WEBPACK_IMPORTED_MODULE_2__["BoxInfoContentDirective"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _box_info_directive__WEBPACK_IMPORTED_MODULE_2__["BoxInfoContentDirective"])
    ], BoxInfoComponent.prototype, "boxInfoContentDirective", void 0);
    BoxInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mk-box-info',
            template: __webpack_require__(/*! ./box-info.component.html */ "./app/components/lib/box-info/box-info.component.html"),
            styles: [__webpack_require__(/*! ./box-info.component.css */ "./app/components/lib/box-info/box-info.component.css")]
        })
    ], BoxInfoComponent);
    return BoxInfoComponent;
}());



/***/ }),

/***/ "./app/components/lib/box-info/box-info.directive.ts":
/*!***********************************************************!*\
  !*** ./app/components/lib/box-info/box-info.directive.ts ***!
  \***********************************************************/
/*! exports provided: BoxInfoContentDirective, BoxInfoFooterDirective, BoxInfoHeaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxInfoContentDirective", function() { return BoxInfoContentDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxInfoFooterDirective", function() { return BoxInfoFooterDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxInfoHeaderDirective", function() { return BoxInfoHeaderDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


/*
 *
 */
var BoxInfoContentDirective = /** @class */ (function () {
    function BoxInfoContentDirective() {
    }
    BoxInfoContentDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            /* tslint:disable-next-line:directive-selector */
            selector: 'mk-box-info-content'
        })
    ], BoxInfoContentDirective);
    return BoxInfoContentDirective;
}());

/*
 *
 */
var BoxInfoFooterDirective = /** @class */ (function () {
    function BoxInfoFooterDirective() {
    }
    BoxInfoFooterDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            /* tslint:disable-next-line:directive-selector */
            selector: 'mk-box-info-footer'
        })
    ], BoxInfoFooterDirective);
    return BoxInfoFooterDirective;
}());

/*
 *
 */
var BoxInfoHeaderDirective = /** @class */ (function () {
    function BoxInfoHeaderDirective() {
    }
    BoxInfoHeaderDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            /* tslint:disable-next-line:directive-selector */
            selector: 'mk-box-info-header'
        })
    ], BoxInfoHeaderDirective);
    return BoxInfoHeaderDirective;
}());



/***/ }),

/***/ "./app/components/lib/box-info/box-info.module.ts":
/*!********************************************************!*\
  !*** ./app/components/lib/box-info/box-info.module.ts ***!
  \********************************************************/
/*! exports provided: BoxInfoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxInfoModule", function() { return BoxInfoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _color_color_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../color/color.module */ "./app/components/lib/color/color.module.ts");
/* harmony import */ var _box_info_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./box-info.directive */ "./app/components/lib/box-info/box-info.directive.ts");
/* harmony import */ var _box_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./box-info.component */ "./app/components/lib/box-info/box-info.component.ts");






var BoxInfoModule = /** @class */ (function () {
    function BoxInfoModule() {
    }
    BoxInfoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _color_color_module__WEBPACK_IMPORTED_MODULE_3__["ColorModule"]],
            exports: [_box_info_component__WEBPACK_IMPORTED_MODULE_5__["BoxInfoComponent"], _box_info_directive__WEBPACK_IMPORTED_MODULE_4__["BoxInfoHeaderDirective"], _box_info_directive__WEBPACK_IMPORTED_MODULE_4__["BoxInfoContentDirective"], _box_info_directive__WEBPACK_IMPORTED_MODULE_4__["BoxInfoFooterDirective"]],
            declarations: [_box_info_component__WEBPACK_IMPORTED_MODULE_5__["BoxInfoComponent"], _box_info_directive__WEBPACK_IMPORTED_MODULE_4__["BoxInfoHeaderDirective"], _box_info_directive__WEBPACK_IMPORTED_MODULE_4__["BoxInfoContentDirective"], _box_info_directive__WEBPACK_IMPORTED_MODULE_4__["BoxInfoFooterDirective"]]
        })
    ], BoxInfoModule);
    return BoxInfoModule;
}());



/***/ }),

/***/ "./app/components/lib/box-small/box-small.component.css":
/*!**************************************************************!*\
  !*** ./app/components/lib/box-small/box-small.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".small-box.bg-color {\n  color: #fff;\n}\n\n/deep/ .small-box-footer:hover {\n  cursor: pointer;\n}\n\n/deep/ .small-box-footer a {\n  color: rgba(255,255,255,0.8);\n}\n\n/deep/ .small-box-footer:hover a{\n  color: rgb(255,255,255);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY29tcG9uZW50cy9saWIvYm94LXNtYWxsL2JveC1zbWFsbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbGliL2JveC1zbWFsbC9ib3gtc21hbGwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbWFsbC1ib3guYmctY29sb3Ige1xuICBjb2xvcjogI2ZmZjtcbn1cblxuL2RlZXAvIC5zbWFsbC1ib3gtZm9vdGVyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vZGVlcC8gLnNtYWxsLWJveC1mb290ZXIgYSB7XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XG59XG5cbi9kZWVwLyAuc21hbGwtYm94LWZvb3Rlcjpob3ZlciBhe1xuICBjb2xvcjogcmdiKDI1NSwyNTUsMjU1KTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./app/components/lib/box-small/box-small.component.html":
/*!***************************************************************!*\
  !*** ./app/components/lib/box-small/box-small.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"styleClass\" [mkColor]=\"backgroundColor\" mkColorProperty=\"background-color\">\n  <div class=\"inner\">\n    <h3 *ngIf=\"header || boxSmallHeaderDirective\" [ngClass]=\"headerStyleClass\" [mkFontColor]=\"headerColor\">\n      {{header}}\n      <ng-content select=\"mk-box-small-header\"></ng-content>\n    </h3>\n    <p [ngClass]=\"contentStyleClass\" [mkFontColor]=\"contentColor\">\n      <ng-container *ngIf=\"boxSmallHeaderDirective || boxSmallContentDirective || boxSmallFooterDirective; else noDirective\">\n        <ng-content select=\"mk-box-small-content\"></ng-content>\n      </ng-container>\n      <ng-template #noDirective>\n        <ng-content></ng-content>\n      </ng-template>\n    </p>\n  </div>\n  <div *ngIf=\"iconStyleClass\" class=\"icon\">\n    <i [ngClass]=\"iconStyleClass\" [mkFontColor]=\"iconColor\"></i>\n  </div>\n  <span *ngIf=\"footer || boxSmallFooterDirective\" [ngClass]=\"footerStyleClass\" [mkFontColor]=\"footerColor\">\n    {{footer}}\n    <ng-content select=\"mk-box-small-footer\"></ng-content>\n  </span>\n</div>\n"

/***/ }),

/***/ "./app/components/lib/box-small/box-small.component.ts":
/*!*************************************************************!*\
  !*** ./app/components/lib/box-small/box-small.component.ts ***!
  \*************************************************************/
/*! exports provided: BoxSmallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxSmallComponent", function() { return BoxSmallComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _box_small_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./box-small.directive */ "./app/components/lib/box-small/box-small.directive.ts");



/*
 *
 */
var BoxSmallComponent = /** @class */ (function () {
    function BoxSmallComponent() {
        this.contentStyleClass = 'small-box-content';
        this.footerStyleClass = 'small-box-footer';
        this.headerStyleClass = 'small-box-header';
        this.iconStyleClass = 'ion ion-bag';
        this.styleClass = 'small-box';
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BoxSmallComponent.prototype, "backgroundColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BoxSmallComponent.prototype, "contentColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxSmallComponent.prototype, "contentStyleClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BoxSmallComponent.prototype, "footer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BoxSmallComponent.prototype, "footerColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxSmallComponent.prototype, "footerStyleClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BoxSmallComponent.prototype, "header", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BoxSmallComponent.prototype, "headerColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxSmallComponent.prototype, "headerStyleClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BoxSmallComponent.prototype, "iconColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxSmallComponent.prototype, "iconStyleClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxSmallComponent.prototype, "styleClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_box_small_directive__WEBPACK_IMPORTED_MODULE_2__["BoxSmallHeaderDirective"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _box_small_directive__WEBPACK_IMPORTED_MODULE_2__["BoxSmallHeaderDirective"])
    ], BoxSmallComponent.prototype, "boxSmallHeaderDirective", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_box_small_directive__WEBPACK_IMPORTED_MODULE_2__["BoxSmallFooterDirective"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _box_small_directive__WEBPACK_IMPORTED_MODULE_2__["BoxSmallFooterDirective"])
    ], BoxSmallComponent.prototype, "boxSmallFooterDirective", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_box_small_directive__WEBPACK_IMPORTED_MODULE_2__["BoxSmallContentDirective"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _box_small_directive__WEBPACK_IMPORTED_MODULE_2__["BoxSmallContentDirective"])
    ], BoxSmallComponent.prototype, "boxSmallContentDirective", void 0);
    BoxSmallComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mk-box-small',
            template: __webpack_require__(/*! ./box-small.component.html */ "./app/components/lib/box-small/box-small.component.html"),
            styles: [__webpack_require__(/*! ./box-small.component.css */ "./app/components/lib/box-small/box-small.component.css")]
        })
    ], BoxSmallComponent);
    return BoxSmallComponent;
}());



/***/ }),

/***/ "./app/components/lib/box-small/box-small.directive.ts":
/*!*************************************************************!*\
  !*** ./app/components/lib/box-small/box-small.directive.ts ***!
  \*************************************************************/
/*! exports provided: BoxSmallFooterDirective, BoxSmallHeaderDirective, BoxSmallContentDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxSmallFooterDirective", function() { return BoxSmallFooterDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxSmallHeaderDirective", function() { return BoxSmallHeaderDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxSmallContentDirective", function() { return BoxSmallContentDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


/*
 *
 */
var BoxSmallFooterDirective = /** @class */ (function () {
    function BoxSmallFooterDirective() {
    }
    BoxSmallFooterDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            /* tslint:disable-next-line:directive-selector */
            selector: 'mk-box-small-footer'
        })
    ], BoxSmallFooterDirective);
    return BoxSmallFooterDirective;
}());

/*
 *
 */
var BoxSmallHeaderDirective = /** @class */ (function () {
    function BoxSmallHeaderDirective() {
    }
    BoxSmallHeaderDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            /* tslint:disable-next-line:directive-selector */
            selector: 'mk-box-small-header'
        })
    ], BoxSmallHeaderDirective);
    return BoxSmallHeaderDirective;
}());

/*
 *
 */
var BoxSmallContentDirective = /** @class */ (function () {
    function BoxSmallContentDirective() {
    }
    BoxSmallContentDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            /* tslint:disable-next-line:directive-selector */
            selector: 'mk-box-small-content'
        })
    ], BoxSmallContentDirective);
    return BoxSmallContentDirective;
}());



/***/ }),

/***/ "./app/components/lib/box-small/box-small.module.ts":
/*!**********************************************************!*\
  !*** ./app/components/lib/box-small/box-small.module.ts ***!
  \**********************************************************/
/*! exports provided: BoxSmallModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxSmallModule", function() { return BoxSmallModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _color_color_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../color/color.module */ "./app/components/lib/color/color.module.ts");
/* harmony import */ var _box_small_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./box-small.directive */ "./app/components/lib/box-small/box-small.directive.ts");
/* harmony import */ var _box_small_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./box-small.component */ "./app/components/lib/box-small/box-small.component.ts");






var BoxSmallModule = /** @class */ (function () {
    function BoxSmallModule() {
    }
    BoxSmallModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _color_color_module__WEBPACK_IMPORTED_MODULE_3__["ColorModule"]],
            exports: [_box_small_component__WEBPACK_IMPORTED_MODULE_5__["BoxSmallComponent"], _box_small_directive__WEBPACK_IMPORTED_MODULE_4__["BoxSmallHeaderDirective"], _box_small_directive__WEBPACK_IMPORTED_MODULE_4__["BoxSmallContentDirective"], _box_small_directive__WEBPACK_IMPORTED_MODULE_4__["BoxSmallFooterDirective"]],
            declarations: [_box_small_component__WEBPACK_IMPORTED_MODULE_5__["BoxSmallComponent"], _box_small_directive__WEBPACK_IMPORTED_MODULE_4__["BoxSmallHeaderDirective"], _box_small_directive__WEBPACK_IMPORTED_MODULE_4__["BoxSmallContentDirective"], _box_small_directive__WEBPACK_IMPORTED_MODULE_4__["BoxSmallFooterDirective"]]
        })
    ], BoxSmallModule);
    return BoxSmallModule;
}());



/***/ }),

/***/ "./app/components/lib/box/box.component.css":
/*!**************************************************!*\
  !*** ./app/components/lib/box/box.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box.collapsed-box .box-body,\n.box.collapsed-box .box-footer {\n  display: inherit;\n}\n\n.box-solid {\n  border: 1px solid;\n}\n\n.box-body {\n  background-color: #fff;\n}\n\n.box.box-solid.bg-color > .box-header {\n  color: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY29tcG9uZW50cy9saWIvYm94L2JveC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbGliL2JveC9ib3guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3guY29sbGFwc2VkLWJveCAuYm94LWJvZHksXG4uYm94LmNvbGxhcHNlZC1ib3ggLmJveC1mb290ZXIge1xuICBkaXNwbGF5OiBpbmhlcml0O1xufVxuXG4uYm94LXNvbGlkIHtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG59XG5cbi5ib3gtYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5ib3guYm94LXNvbGlkLmJnLWNvbG9yID4gLmJveC1oZWFkZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./app/components/lib/box/box.component.html":
/*!***************************************************!*\
  !*** ./app/components/lib/box/box.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!removed\" [mkColor]=\"boxColor\" mkColorProperty=\"border-color\" mkColorPrefix=\"box\" [ngClass]=\"styleClass\" [class.collapsed-box]=\"isCollapsed && !isCollaping\" [class.box-solid]=\"isSolid\" [mkCollapseAnimation]=\"remove\" (mkCollapseAnimation.done)=\"removedDone($event)\">\n  <div *ngIf=\"header || boxHeaderDirective\" [ngClass]=\"headerStyleClass\" [mkColor]=\"boxColor\" [mkColorCondition]=\"isSolid\" mkColorProperty=\"background-color\" [class.with-border]=\"headerBorder\">\n    <h3 class=\"box-title\" [mkFontColor]=\"headerColor\">\n      {{header}}\n      <ng-content select=\"mk-box-header\"></ng-content>\n    </h3>\n    <div class=\"box-tools pull-right\">\n      <ng-content select=\"mk-box-tools\"></ng-content>\n      <button *ngIf=\"isCollapsable\" type=\"button\" [ngClass]=\"buttonsStyleClass\" #toggleButtonElement>\n        <i class=\"fa\" [ngClass]=\"{'fa-plus': isCollapsed, 'fa-minus': !isCollapsed}\"></i>\n      </button>\n      <button *ngIf=\"isRemovable\" type=\"button\" [ngClass]=\"buttonsStyleClass\" #removeButtonElement>\n        <i class=\"fa fa-times\"></i>\n      </button>\n    </div>\n  </div>\n  <div [ngClass]=\"contentStyleClass\" [mkFontColor]=\"contentColor\" [mkCollapseAnimation]=\"isCollapsed\" (mkCollapseAnimation.start)=\"collapseStart($event)\" (mkCollapseAnimation.done)=\"collapseDone($event)\">\n    <div class=\"box-body\">\n      <ng-container *ngIf=\"boxHeaderDirective || boxContentDirective || boxFooterDirective || boxToolsDirective; else noDirective\">\n        <ng-content select=\"mk-box-content\"></ng-content>\n      </ng-container>\n      <ng-template #noDirective>\n        <ng-content></ng-content>\n      </ng-template>\n    </div>\n    <div *ngIf=\"footer || boxFooterDirective\" [ngClass]=\"footerStyleClass\" [mkFontColor]=\"footerColor\">\n      {{footer}}\n      <ng-content select=\"mk-box-footer\"></ng-content>\n    </div>\n  </div>\n  <div *ngIf=\"isLoading\" class=\"overlay\">\n    <i [ngClass]=\"loadingStyleClass\" [mkFontColor]=\"loadingColor\"></i>\n  </div>\n</div>\n"

/***/ }),

/***/ "./app/components/lib/box/box.component.ts":
/*!*************************************************!*\
  !*** ./app/components/lib/box/box.component.ts ***!
  \*************************************************/
/*! exports provided: BoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxComponent", function() { return BoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _box_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./box.directive */ "./app/components/lib/box/box.directive.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ "./app/components/lib/helpers.ts");




/*
 *
 */
var BoxComponent = /** @class */ (function () {
    /**
     * @method constructor
     * @param changeDetectorRef [description]
     * @param ngZone            [description]
     * @param renderer2         [description]
     */
    function BoxComponent(changeDetectorRef, ngZone, renderer2) {
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
        this.renderer2 = renderer2;
        this.remove = false;
        this.listeners = [];
        this.boxColor = 'default';
        this.buttonsStyleClass = 'btn btn-box-tool';
        this.contentStyleClass = 'box-content-wrapper';
        this.footerStyleClass = 'box-footer';
        this.headerBorder = true;
        this.headerStyleClass = 'box-header';
        this.isCollapsable = true;
        this.isCollapsed = false;
        this.isRemovable = true;
        this.isSolid = false;
        this.loadingStyleClass = 'fa fa-refresh fa-spin';
        this.styleClass = 'box';
        this.onCollapseDone = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onCollapseStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * @method ngAfterViewInit
     */
    BoxComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            if (_this.toggleButtonElement) {
                _this.listeners.push(_this.renderer2.listen(_this.toggleButtonElement.nativeElement, 'click', function () {
                    _this.isCollapsed = !_this.isCollapsed;
                    _this.changeDetectorRef.detectChanges();
                }));
            }
            if (_this.removeButtonElement) {
                _this.listeners.push(_this.renderer2.listen(_this.removeButtonElement.nativeElement, 'click', function () {
                    _this.remove = true;
                    _this.changeDetectorRef.detectChanges();
                }));
            }
        });
    };
    /**
     * @method ngOnDestroy
     */
    BoxComponent.prototype.ngOnDestroy = function () {
        Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["removeListeners"])(this.listeners);
    };
    /**
     * [removedDone description]
     * @method removedDone
     * @param event [description]
     */
    BoxComponent.prototype.removedDone = function (event) {
        if (event.toState === '1') {
            this.removed = true;
        }
    };
    /**
     * [collapseStart description]
     * @method collapseStart
     * @param event [description]
     */
    BoxComponent.prototype.collapseStart = function (event) {
        if (event.fromState !== 'void') {
            this.isCollaping = true;
            this.onCollapseStart.emit(event);
        }
    };
    /**
     * [collapseDone description]
     * @method collapseDone
     * @param event [description]
     */
    BoxComponent.prototype.collapseDone = function (event) {
        if (event.fromState !== 'void') {
            this.isCollaping = false;
            this.onCollapseDone.emit(event);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxComponent.prototype, "boxColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxComponent.prototype, "buttonsStyleClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxComponent.prototype, "contentStyleClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BoxComponent.prototype, "contentColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BoxComponent.prototype, "footer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BoxComponent.prototype, "footerColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxComponent.prototype, "footerStyleClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BoxComponent.prototype, "header", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxComponent.prototype, "headerBorder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BoxComponent.prototype, "headerColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxComponent.prototype, "headerStyleClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxComponent.prototype, "isCollapsable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxComponent.prototype, "isCollapsed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], BoxComponent.prototype, "isLoading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxComponent.prototype, "isRemovable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxComponent.prototype, "isSolid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BoxComponent.prototype, "loadingColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxComponent.prototype, "loadingStyleClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxComponent.prototype, "styleClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxComponent.prototype, "onCollapseDone", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxComponent.prototype, "onCollapseStart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_box_directive__WEBPACK_IMPORTED_MODULE_2__["BoxHeaderDirective"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _box_directive__WEBPACK_IMPORTED_MODULE_2__["BoxHeaderDirective"])
    ], BoxComponent.prototype, "boxHeaderDirective", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_box_directive__WEBPACK_IMPORTED_MODULE_2__["BoxFooterDirective"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _box_directive__WEBPACK_IMPORTED_MODULE_2__["BoxFooterDirective"])
    ], BoxComponent.prototype, "boxFooterDirective", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_box_directive__WEBPACK_IMPORTED_MODULE_2__["BoxContentDirective"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _box_directive__WEBPACK_IMPORTED_MODULE_2__["BoxContentDirective"])
    ], BoxComponent.prototype, "boxContentDirective", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_box_directive__WEBPACK_IMPORTED_MODULE_2__["BoxToolsDirective"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _box_directive__WEBPACK_IMPORTED_MODULE_2__["BoxToolsDirective"])
    ], BoxComponent.prototype, "boxToolsDirective", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('toggleButtonElement'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxComponent.prototype, "toggleButtonElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('removeButtonElement'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxComponent.prototype, "removeButtonElement", void 0);
    BoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mk-box',
            template: __webpack_require__(/*! ./box.component.html */ "./app/components/lib/box/box.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./box.component.css */ "./app/components/lib/box/box.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], BoxComponent);
    return BoxComponent;
}());



/***/ }),

/***/ "./app/components/lib/box/box.directive.ts":
/*!*************************************************!*\
  !*** ./app/components/lib/box/box.directive.ts ***!
  \*************************************************/
/*! exports provided: BoxContentDirective, BoxFooterDirective, BoxToolsDirective, BoxHeaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxContentDirective", function() { return BoxContentDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxFooterDirective", function() { return BoxFooterDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxToolsDirective", function() { return BoxToolsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxHeaderDirective", function() { return BoxHeaderDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


/*
 *
 */
var BoxContentDirective = /** @class */ (function () {
    function BoxContentDirective() {
    }
    BoxContentDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            /* tslint:disable-next-line:directive-selector */
            selector: 'mk-box-content'
        })
    ], BoxContentDirective);
    return BoxContentDirective;
}());

/*
 *
 */
var BoxFooterDirective = /** @class */ (function () {
    function BoxFooterDirective() {
    }
    BoxFooterDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            /* tslint:disable-next-line:directive-selector */
            selector: 'mk-box-footer'
        })
    ], BoxFooterDirective);
    return BoxFooterDirective;
}());

/*
 *
 */
var BoxToolsDirective = /** @class */ (function () {
    function BoxToolsDirective() {
    }
    BoxToolsDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            /* tslint:disable-next-line:directive-selector */
            selector: 'mk-box-tools'
        })
    ], BoxToolsDirective);
    return BoxToolsDirective;
}());

/*
 *
 */
var BoxHeaderDirective = /** @class */ (function () {
    function BoxHeaderDirective() {
    }
    BoxHeaderDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            /* tslint:disable-next-line:directive-selector */
            selector: 'mk-box-header'
        })
    ], BoxHeaderDirective);
    return BoxHeaderDirective;
}());



/***/ }),

/***/ "./app/components/lib/box/box.module.ts":
/*!**********************************************!*\
  !*** ./app/components/lib/box/box.module.ts ***!
  \**********************************************/
/*! exports provided: BoxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxModule", function() { return BoxModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _animations_animations_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animations/animations.module */ "./app/components/lib/animations/animations.module.ts");
/* harmony import */ var _color_color_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../color/color.module */ "./app/components/lib/color/color.module.ts");
/* harmony import */ var _box_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./box.directive */ "./app/components/lib/box/box.directive.ts");
/* harmony import */ var _box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./box.component */ "./app/components/lib/box/box.component.ts");







var BoxModule = /** @class */ (function () {
    function BoxModule() {
    }
    BoxModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _animations_animations_module__WEBPACK_IMPORTED_MODULE_3__["AnimationsModule"], _color_color_module__WEBPACK_IMPORTED_MODULE_4__["ColorModule"]],
            exports: [_box_component__WEBPACK_IMPORTED_MODULE_6__["BoxComponent"], _box_directive__WEBPACK_IMPORTED_MODULE_5__["BoxHeaderDirective"], _box_directive__WEBPACK_IMPORTED_MODULE_5__["BoxContentDirective"], _box_directive__WEBPACK_IMPORTED_MODULE_5__["BoxFooterDirective"], _box_directive__WEBPACK_IMPORTED_MODULE_5__["BoxToolsDirective"]],
            declarations: [_box_component__WEBPACK_IMPORTED_MODULE_6__["BoxComponent"], _box_directive__WEBPACK_IMPORTED_MODULE_5__["BoxHeaderDirective"], _box_directive__WEBPACK_IMPORTED_MODULE_5__["BoxContentDirective"], _box_directive__WEBPACK_IMPORTED_MODULE_5__["BoxFooterDirective"], _box_directive__WEBPACK_IMPORTED_MODULE_5__["BoxToolsDirective"]]
        })
    ], BoxModule);
    return BoxModule;
}());



/***/ }),

/***/ "./app/components/lib/breadcrumbs/breadcrumbs.component.css":
/*!******************************************************************!*\
  !*** ./app/components/lib/breadcrumbs/breadcrumbs.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".breadcrumb {\n  float: right;\n  background: transparent;\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 12px;\n  padding: 7px 5px;\n  position: absolute;\n  top: 15px;\n  right: 10px;\n  border-radius: 2px;\n}\n\n.breadcrumb > li > a {\n  color: #444;\n  text-decoration: none;\n  display: inline-block;\n}\n\n.breadcrumb > li > a > .fa,\n.breadcrumb > li > a > .glyphicon,\n.breadcrumb > li > a > .ion {\n  margin-right: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY29tcG9uZW50cy9saWIvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCOztBQUVBOzs7RUFHRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoiQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xpYi9icmVhZGNydW1icy9icmVhZGNydW1icy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJyZWFkY3J1bWIge1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDdweCA1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICByaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uYnJlYWRjcnVtYiA+IGxpID4gYSB7XG4gIGNvbG9yOiAjNDQ0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmJyZWFkY3J1bWIgPiBsaSA+IGEgPiAuZmEsXG4uYnJlYWRjcnVtYiA+IGxpID4gYSA+IC5nbHlwaGljb24sXG4uYnJlYWRjcnVtYiA+IGxpID4gYSA+IC5pb24ge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./app/components/lib/breadcrumbs/breadcrumbs.component.html":
/*!*******************************************************************!*\
  !*** ./app/components/lib/breadcrumbs/breadcrumbs.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\n  <li *ngFor=\"let breadcrumb of breadcrumbs; let first = first; let last = last\" [class.active]=\"last || !breadcrumb.url\">\n    <a *ngIf=\"breadcrumb.url\" [routerLink]=\"breadcrumb.url\">\n      <i *ngIf=\"first\" ngClass=\"{{homeIcon}}\"></i>\n      <ng-template [ngIf]=\"breadcrumb.data.breadcrumbs\">{{breadcrumb.data.breadcrumbs}}</ng-template>\n      <ng-template [ngIf]=\"!breadcrumb.data.breadcrumbs\">{{breadcrumb.data.title}}</ng-template>\n    </a>\n    <ng-template [ngIf]=\"!breadcrumb.url\">\n      <i *ngIf=\"first\" ngClass=\"{{homeIcon}}\"></i>\n      <ng-template [ngIf]=\"breadcrumb.data.breadcrumbs\">{{breadcrumb.data.breadcrumbs}}</ng-template>\n      <ng-template [ngIf]=\"!breadcrumb.data.breadcrumbs\">{{breadcrumb.data.title}}</ng-template>\n    </ng-template>\n  </li>\n</ol>\n"

/***/ }),

/***/ "./app/components/lib/breadcrumbs/breadcrumbs.component.ts":
/*!*****************************************************************!*\
  !*** ./app/components/lib/breadcrumbs/breadcrumbs.component.ts ***!
  \*****************************************************************/
/*! exports provided: BreadcrumbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function() { return BreadcrumbsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/routing.service */ "./app/components/lib/services/routing.service.ts");



/*
 *
 */
var BreadcrumbsComponent = /** @class */ (function () {
    /**
     * @method constructor
     * @param routingService [description]
     * @param changeDetectorRef [description]
     */
    function BreadcrumbsComponent(routingService, changeDetectorRef) {
        this.routingService = routingService;
        this.changeDetectorRef = changeDetectorRef;
        this.homeIcon = 'fa fa-home';
    }
    /**
     * @method ngOnInit
     */
    BreadcrumbsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.routingService.onChange.subscribe(function (value) {
            _this.breadcrumbs = value;
        });
    };
    /**
     * @method ngOnDestroy
     */
    BreadcrumbsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BreadcrumbsComponent.prototype, "homeIcon", void 0);
    BreadcrumbsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mk-breadcrumbs',
            template: __webpack_require__(/*! ./breadcrumbs.component.html */ "./app/components/lib/breadcrumbs/breadcrumbs.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumbs.component.css */ "./app/components/lib/breadcrumbs/breadcrumbs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_routing_service__WEBPACK_IMPORTED_MODULE_2__["RoutingService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], BreadcrumbsComponent);
    return BreadcrumbsComponent;
}());



/***/ }),

/***/ "./app/components/lib/breadcrumbs/breadcrumbs.module.ts":
/*!**************************************************************!*\
  !*** ./app/components/lib/breadcrumbs/breadcrumbs.module.ts ***!
  \**************************************************************/
/*! exports provided: BreadcrumbsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsModule", function() { return BreadcrumbsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./breadcrumbs.component */ "./app/components/lib/breadcrumbs/breadcrumbs.component.ts");





var BreadcrumbsModule = /** @class */ (function () {
    function BreadcrumbsModule() {
    }
    BreadcrumbsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            exports: [_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsComponent"]],
            declarations: [_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsComponent"]]
        })
    ], BreadcrumbsModule);
    return BreadcrumbsModule;
}());



/***/ }),

/***/ "./app/components/lib/color/color.definition.ts":
/*!******************************************************!*\
  !*** ./app/components/lib/color/color.definition.ts ***!
  \******************************************************/
/*! exports provided: colorsAliases, colors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorsAliases", function() { return colorsAliases; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
var colorsAliases = [
    'default',
    'primary',
    'danger',
    'warning',
    'info',
    'success'
];
var colors = {
    'aqua': '#00c0ef',
    'aqua-active': '#00a7d0',
    'black': '#111111',
    'black-active': '#000000',
    'blue': '#0073b7',
    'blue-active': '#005384',
    'fuchsia': '#f012be',
    'fuchsia-active': '#db0ead',
    'green': '#00a65a',
    'green-active': '#008d4c',
    'gray': '#d2d6de',
    'gray-active': '#b5bbc8',
    'gray-light': '#f7f7f7',
    'light-blue': '#3c8dbc',
    'light-blue-active': '#357ca5',
    'lime': '#01ff70',
    'lime-active': '#00e765',
    'maroon': '#d81b60',
    'maroon-active': '#ca195a',
    'navy': '#001f3f',
    'navy-active': '#001a35',
    'olive': '#3d9970',
    'olive-active': '#368763',
    'orange': '#ff851b',
    'orange-active': '#ff7701',
    'purple': '#605ca8',
    'purple-active': '#555299',
    'red': '#dd4b39',
    'red-active': '#d33724',
    'teal': '#39cccc',
    'teal-active': '#30bbbb',
    'yellow': '#f39c12',
    'yellow-active': '#db8b0b',
};


/***/ }),

/***/ "./app/components/lib/color/color.directive.ts":
/*!*****************************************************!*\
  !*** ./app/components/lib/color/color.directive.ts ***!
  \*****************************************************/
/*! exports provided: BackgroundColorDirective, ColorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundColorDirective", function() { return BackgroundColorDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorDirective", function() { return ColorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _color_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color.service */ "./app/components/lib/color/color.service.ts");



var BackgroundColorDirective = /** @class */ (function () {
    /**
     * @method constructor
     * @param elementRef   [description]
     * @param renderer2    [description]
     * @param colorService [description]
     */
    function BackgroundColorDirective(elementRef, renderer2, colorService) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.colorService = colorService;
        this.condition = true;
    }
    Object.defineProperty(BackgroundColorDirective.prototype, "color", {
        set: function (color) {
            this.colorService.setBackgroundColor(color, this.condition, this.property, this.prefix);
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mkColorCondition'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BackgroundColorDirective.prototype, "condition", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mkColorPrefix'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BackgroundColorDirective.prototype, "prefix", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mkColorProperty'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BackgroundColorDirective.prototype, "property", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mkColor'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], BackgroundColorDirective.prototype, "color", null);
    BackgroundColorDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[mkColor]',
            providers: [_color_service__WEBPACK_IMPORTED_MODULE_2__["ColorService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _color_service__WEBPACK_IMPORTED_MODULE_2__["ColorService"]])
    ], BackgroundColorDirective);
    return BackgroundColorDirective;
}());

var ColorDirective = /** @class */ (function () {
    /**
     * @method constructor
     * @param elementRef   [description]
     * @param renderer2    [description]
     * @param colorService [description]
     */
    function ColorDirective(elementRef, renderer2, colorService) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.colorService = colorService;
    }
    Object.defineProperty(ColorDirective.prototype, "color", {
        set: function (color) {
            this.colorService.setFontColor(color);
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mkFontColor'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], ColorDirective.prototype, "color", null);
    ColorDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[mkFontColor]',
            providers: [_color_service__WEBPACK_IMPORTED_MODULE_2__["ColorService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _color_service__WEBPACK_IMPORTED_MODULE_2__["ColorService"]])
    ], ColorDirective);
    return ColorDirective;
}());



/***/ }),

/***/ "./app/components/lib/color/color.module.ts":
/*!**************************************************!*\
  !*** ./app/components/lib/color/color.module.ts ***!
  \**************************************************/
/*! exports provided: ColorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorModule", function() { return ColorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _color_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color.directive */ "./app/components/lib/color/color.directive.ts");



var ColorModule = /** @class */ (function () {
    function ColorModule() {
    }
    ColorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [_color_directive__WEBPACK_IMPORTED_MODULE_2__["BackgroundColorDirective"], _color_directive__WEBPACK_IMPORTED_MODULE_2__["ColorDirective"]],
            declarations: [_color_directive__WEBPACK_IMPORTED_MODULE_2__["BackgroundColorDirective"], _color_directive__WEBPACK_IMPORTED_MODULE_2__["ColorDirective"]]
        })
    ], ColorModule);
    return ColorModule;
}());



/***/ }),

/***/ "./app/components/lib/color/color.service.ts":
/*!***************************************************!*\
  !*** ./app/components/lib/color/color.service.ts ***!
  \***************************************************/
/*! exports provided: ColorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorService", function() { return ColorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _color_definition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color.definition */ "./app/components/lib/color/color.definition.ts");



/*
 *
 */
var ColorService = /** @class */ (function () {
    /**
     * @method constructor
     * @param renderer2 [description]
     * @param elementRef [description]
     */
    function ColorService(renderer2, elementRef) {
        this.renderer2 = renderer2;
        this.elementRef = elementRef;
        // this.init();
        // console.log(this);
    }
    /**
     * [setBackgroundColor description]
     * @method setBackgroundColor
     * @param  color              [description]
     * @param  condition          [description]
     * @param  property           [description]
     * @param  prefix             [description]
     */
    ColorService.prototype.setBackgroundColor = function (color, condition, property, prefix) {
        if (color && condition) {
            this.resetBackgroundColor();
            if (_color_definition__WEBPACK_IMPORTED_MODULE_2__["colors"][color]) {
                this.renderer2.addClass(this.elementRef.nativeElement, 'bg-color');
                this.currentBackgroundStyle = { property: property, color: _color_definition__WEBPACK_IMPORTED_MODULE_2__["colors"][color] };
                this.renderer2.setStyle(this.elementRef.nativeElement, property, _color_definition__WEBPACK_IMPORTED_MODULE_2__["colors"][color]);
            }
            else {
                this.renderer2.removeClass(this.elementRef.nativeElement, 'bg-color');
                if (color.indexOf('#') === 0 || color.indexOf('rgb') === 0) {
                    this.currentBackgroundStyle = { property: property, color: color };
                    this.renderer2.setStyle(this.elementRef.nativeElement, property, color);
                }
                else if (_color_definition__WEBPACK_IMPORTED_MODULE_2__["colorsAliases"].indexOf(color) !== -1) {
                    this.currentBackgroundClass = prefix ? prefix + "-" + color : color;
                    this.renderer2.addClass(this.elementRef.nativeElement, this.currentBackgroundClass);
                }
            }
        }
    };
    /**
     * [resetBackgroundColor description]
     * @method resetBackgroundColor
     */
    ColorService.prototype.resetBackgroundColor = function () {
        if (this.currentBackgroundStyle) {
            this.renderer2.removeStyle(this.elementRef.nativeElement, this.currentBackgroundStyle.property, this.currentBackgroundStyle.color);
        }
        else if (this.currentBackgroundClass) {
            this.renderer2.removeClass(this.elementRef.nativeElement, this.currentBackgroundClass);
        }
    };
    /**
     * [setFontColor description]
     * @method setFontColor
     * @param  color        [description]
     */
    ColorService.prototype.setFontColor = function (color) {
        if (color) {
            this.resetFontColor();
            if (color.startsWith('#') || color.startsWith('rgb')) {
                this.currentFontStyle = color;
                this.renderer2.setStyle(this.elementRef.nativeElement, 'color', color);
            }
            else {
                this.currentFontClass = "text-" + color;
                this.renderer2.addClass(this.elementRef.nativeElement, this.currentFontClass);
            }
        }
    };
    /**
     * [resetFontColor description]
     * @method resetFontColor
     * @return [description]
     */
    ColorService.prototype.resetFontColor = function () {
        if (this.currentFontStyle) {
            this.renderer2.removeStyle(this.elementRef.nativeElement, 'color', this.currentFontStyle);
        }
        else if (this.currentFontClass) {
            this.renderer2.removeClass(this.elementRef.nativeElement, this.currentFontClass);
        }
    };
    ColorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ColorService);
    return ColorService;
}());



/***/ }),

/***/ "./app/components/lib/dropdown/dropdown.component.css":
/*!************************************************************!*\
  !*** ./app/components/lib/dropdown/dropdown.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-menu {\n  display: block;\n}\n\n.dropdown-menu.collapsing:not(.un-collapse) {\n  transition-property: height, padding-top, padding-bottom;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY29tcG9uZW50cy9saWIvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx3REFBd0Q7RUFDeEQsY0FBYztFQUNkLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbGliL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24tbWVudSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZHJvcGRvd24tbWVudS5jb2xsYXBzaW5nOm5vdCgudW4tY29sbGFwc2UpIHtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogaGVpZ2h0LCBwYWRkaW5nLXRvcCwgcGFkZGluZy1ib3R0b207XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./app/components/lib/dropdown/dropdown.component.html":
/*!*************************************************************!*\
  !*** ./app/components/lib/dropdown/dropdown.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #innerTemplate>\n  <ng-container *ngIf=\"this.dropdownToggleComponent && this.dropdownToggleComponent.toggleElement; else noToggleElement\" [ngTemplateOutlet]=\"dropdownToggleComponent.templateRef\"></ng-container>\n  <ng-template #noToggleElement>\n    <button *ngIf=\"toggleText || dropdownToggleComponent\" [mkColor]=\"buttonBackgroudColor\" mkColorProperty=\"background-color\" mkColorPrefix=\"btn\" [ngClass]=\"buttonStyleClass\" #toggleElement>\n      {{toggleText}}\n      <ng-container [ngTemplateOutlet]=\"dropdownToggleComponent?.templateRef\"></ng-container>\n    </button>\n  </ng-template>\n  <ul [ngClass]=\"contentStyleClass\" [mkCollapseAnimation]=\"isCollapsed\" (mkCollapseAnimation.start)=\"collapseStart($event)\" (mkCollapseAnimation.done)=\"collapseDone($event)\">\n    <ng-container *ngIf=\"dropdownMenuComponent; else noDropdownMenuComponent\" [ngTemplateOutlet]=\"dropdownMenuComponent.templateRef\"></ng-container>\n    <ng-template #noDropdownMenuComponent>\n      <ng-content></ng-content>\n    </ng-template>\n  </ul>\n</ng-template>\n\n<div *ngIf=\"isWrapper; else noWrapper\" [ngClass]=\"styleClass\">\n  <ng-container *ngTemplateOutlet=\"innerTemplate\"></ng-container>\n</div>\n\n<ng-template #noWrapper>\n  <ng-container *ngTemplateOutlet=\"innerTemplate\"></ng-container>\n</ng-template>\n"

/***/ }),

/***/ "./app/components/lib/dropdown/dropdown.component.ts":
/*!***********************************************************!*\
  !*** ./app/components/lib/dropdown/dropdown.component.ts ***!
  \***********************************************************/
/*! exports provided: DropdownToggleComponent, DropdownMenuComponent, DropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownToggleComponent", function() { return DropdownToggleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownMenuComponent", function() { return DropdownMenuComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return DropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./app/components/lib/helpers.ts");



/*
 *
 */
var DropdownToggleComponent = /** @class */ (function () {
    function DropdownToggleComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('templateRef'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], DropdownToggleComponent.prototype, "templateRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])('toggleElement'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DropdownToggleComponent.prototype, "toggleElement", void 0);
    DropdownToggleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mk-dropdown-toggle',
            template: '<ng-template #templateRef><ng-content></ng-content></ng-template>',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        })
    ], DropdownToggleComponent);
    return DropdownToggleComponent;
}());

/*
 *
 */
var DropdownMenuComponent = /** @class */ (function () {
    function DropdownMenuComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('templateRef'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], DropdownMenuComponent.prototype, "templateRef", void 0);
    DropdownMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mk-dropdown-menu',
            template: '<ng-template #templateRef><ng-content></ng-content></ng-template>',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        })
    ], DropdownMenuComponent);
    return DropdownMenuComponent;
}());

/*
 *
 */
var DropdownComponent = /** @class */ (function () {
    /**
     * @method constructor
     * @param changeDetectorRef [description]
     * @param elementRef [description]
     * @param ngZone [description]
     * @param renderer2 [description]
     */
    function DropdownComponent(changeDetectorRef, elementRef, ngZone, renderer2) {
        this.changeDetectorRef = changeDetectorRef;
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.renderer2 = renderer2;
        this.listeners = [];
        this.buttonStyleClass = 'btn dropdown-toggle';
        this.buttonBackgroudColor = 'default';
        this.contentStyleClass = 'dropdown-menu';
        this.isCollapsed = true;
        this.isWrapper = true;
        this.styleClass = 'dropdown';
        this.onCollapseStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onCollapseDone = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * @method ngAfterViewInit
     */
    DropdownComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var toggleNativeElement = this.dropdownToggleComponent && this.dropdownToggleComponent.toggleElement ?
            this.dropdownToggleComponent.toggleElement.nativeElement : this.toggleElement ?
            this.toggleElement : this.defaultToggleElement ?
            this.defaultToggleElement.nativeElement : null;
        if (toggleNativeElement) {
            this.ngZone.runOutsideAngular(function () {
                _this.listeners.push(_this.renderer2.listen(toggleNativeElement, 'click', function (event) {
                    _this.toggleDropdown(event);
                    _this.changeDetectorRef.detectChanges();
                }));
            });
        }
    };
    /**
     * @method ngOnDestroy
     */
    DropdownComponent.prototype.ngOnDestroy = function () {
        this.unBindDocumentClickListener();
        Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["removeListeners"])(this.listeners);
    };
    /**
     * [toggle description]
     * @method toggle
     * @param event [description]
     */
    DropdownComponent.prototype.toggleDropdown = function (event) {
        var _this = this;
        event.preventDefault();
        this.isCollapsed = !this.isCollapsed;
        if (!this.isCollapsed) {
            this.ngZone.runOutsideAngular(function () {
                setTimeout(function () {
                    _this.bindDocumentClickListener();
                });
            });
        }
        else {
            this.unBindDocumentClickListener();
        }
    };
    /**
     * [collapseStart description]
     * @method collapseStart
     * @param event [description]
     */
    DropdownComponent.prototype.collapseStart = function (event) {
        this.onCollapseStart.emit(event);
    };
    /**
     * [collapseDone description]
     * @method collapseDone
     * @param event [description]
     */
    DropdownComponent.prototype.collapseDone = function (event) {
        this.onCollapseStart.emit(event);
    };
    /**
     * [bindDocumentClickListener description]
     * @method bindDocumentClickListener
     */
    DropdownComponent.prototype.bindDocumentClickListener = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            _this.documentClickListener = _this.renderer2.listen('document', 'click', function () {
                if (!_this.isCollapsed) {
                    _this.isCollapsed = true;
                    _this.unBindDocumentClickListener();
                    _this.changeDetectorRef.detectChanges();
                }
            });
        });
    };
    /**
     * [unBindDocumentClickListener description]
     * @method unBindDocumentClickListener
     */
    DropdownComponent.prototype.unBindDocumentClickListener = function () {
        if (this.documentClickListener) {
            this.documentClickListener();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownComponent.prototype, "buttonStyleClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownComponent.prototype, "buttonBackgroudColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownComponent.prototype, "contentStyleClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownComponent.prototype, "isCollapsed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownComponent.prototype, "isWrapper", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownComponent.prototype, "styleClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Element)
    ], DropdownComponent.prototype, "toggleElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DropdownComponent.prototype, "toggleText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownComponent.prototype, "onCollapseStart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownComponent.prototype, "onCollapseDone", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(DropdownToggleComponent),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", DropdownToggleComponent)
    ], DropdownComponent.prototype, "dropdownToggleComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(DropdownMenuComponent),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", DropdownMenuComponent)
    ], DropdownComponent.prototype, "dropdownMenuComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('toggleElement'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DropdownComponent.prototype, "defaultToggleElement", void 0);
    DropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mk-dropdown, [mk-dropdown]',
            template: __webpack_require__(/*! ./dropdown.component.html */ "./app/components/lib/dropdown/dropdown.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./dropdown.component.css */ "./app/components/lib/dropdown/dropdown.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], DropdownComponent);
    return DropdownComponent;
}());



/***/ }),

/***/ "./app/components/lib/dropdown/dropdown.module.ts":
/*!********************************************************!*\
  !*** ./app/components/lib/dropdown/dropdown.module.ts ***!
  \********************************************************/
/*! exports provided: DropdownModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownModule", function() { return DropdownModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _animations_animations_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animations/animations.module */ "./app/components/lib/animations/animations.module.ts");
/* harmony import */ var _color_color_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../color/color.module */ "./app/components/lib/color/color.module.ts");
/* harmony import */ var _dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dropdown.component */ "./app/components/lib/dropdown/dropdown.component.ts");






var DropdownModule = /** @class */ (function () {
    function DropdownModule() {
    }
    DropdownModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _animations_animations_module__WEBPACK_IMPORTED_MODULE_3__["AnimationsModule"], _color_color_module__WEBPACK_IMPORTED_MODULE_4__["ColorModule"]],
            exports: [_dropdown_component__WEBPACK_IMPORTED_MODULE_5__["DropdownComponent"], _dropdown_component__WEBPACK_IMPORTED_MODULE_5__["DropdownToggleComponent"], _dropdown_component__WEBPACK_IMPORTED_MODULE_5__["DropdownMenuComponent"]],
            declarations: [_dropdown_component__WEBPACK_IMPORTED_MODULE_5__["DropdownComponent"], _dropdown_component__WEBPACK_IMPORTED_MODULE_5__["DropdownToggleComponent"], _dropdown_component__WEBPACK_IMPORTED_MODULE_5__["DropdownMenuComponent"]]
        })
    ], DropdownModule);
    return DropdownModule;
}());



/***/ }),

/***/ "./app/components/lib/form/input-group/input-group.component.html":
/*!************************************************************************!*\
  !*** ./app/components/lib/form/input-group/input-group.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"wrapperClasses\" [mkColor]=\"currentColor || inputColor\" mkColorPrefix=\"has\">\n  <label *ngIf=\"label || inputGroupLabelDirective\">\n    {{label}}\n    <ng-content select=\"mk-input-group-label\"></ng-content>\n  </label>\n  <div *ngIf=\"addonLeft || inputGroupAddonLeftDirective || addonRight || inputGroupAddonRightDirective; else noAddon\" class=\"input-group\">\n    <span *ngIf=\"addonLeft || inputGroupAddonLeftDirective\" class=\"input-group-addon\">\n      {{addonLeft}}\n      <ng-content select=\"mk-input-group-addon-left\"></ng-content>\n    </span>\n    <ng-content select=\"mk-input-group-content\"></ng-content>\n    <span *ngIf=\"addonRight || inputGroupAddonRightDirective\" class=\"input-group-addon\">\n      {{addonRight}}\n      <ng-content select=\"mk-input-group-addon-right\"></ng-content>\n    </span>\n  </div>\n  <ng-template #noAddon><ng-content select=\"mk-input-group-content\"></ng-content></ng-template>\n</div>\n"

/***/ }),

/***/ "./app/components/lib/form/input-group/input-group.component.ts":
/*!**********************************************************************!*\
  !*** ./app/components/lib/form/input-group/input-group.component.ts ***!
  \**********************************************************************/
/*! exports provided: InputGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputGroupComponent", function() { return InputGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers */ "./app/components/lib/helpers.ts");
/* harmony import */ var _input_group_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input-group.directive */ "./app/components/lib/form/input-group/input-group.directive.ts");
/* harmony import */ var _input_text_input_text_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../input-text/input-text.directive */ "./app/components/lib/form/input-text/input-text.directive.ts");





/*
 *
 */
var InputGroupComponent = /** @class */ (function () {
    function InputGroupComponent() {
        this.subscriptions = [];
        this.inputColor = 'default';
        this.inputErrorColor = 'danger';
        this.inputValidColor = 'success';
        this.wrapperClasses = 'form-group';
    }
    InputGroupComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.subscriptions.push(this.inputTextDirective.onKeyup.subscribe(function (value) {
            if (value.invalid) {
                _this.currentColor = _this.inputErrorColor;
                _this.currentFontColor = _this.inputErrorFontColor;
            }
            else if (!value.invalid) {
                _this.currentColor = _this.inputValidColor;
                _this.currentFontColor = _this.inputValidFontColor;
            }
            else {
                _this.currentColor = _this.inputColor;
                _this.currentFontColor = _this.inputFontColor;
            }
        }));
    };
    InputGroupComponent.prototype.ngOnDestroy = function () {
        Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["removeSubscriptions"])(this.subscriptions);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputGroupComponent.prototype, "addonLeft", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputGroupComponent.prototype, "addonRight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputGroupComponent.prototype, "inputColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputGroupComponent.prototype, "inputFontColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputGroupComponent.prototype, "inputErrorColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputGroupComponent.prototype, "inputErrorFontColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputGroupComponent.prototype, "inputValidColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputGroupComponent.prototype, "inputValidFontColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputGroupComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputGroupComponent.prototype, "wrapperClasses", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_input_group_directive__WEBPACK_IMPORTED_MODULE_3__["InputGroupLabelDirective"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _input_group_directive__WEBPACK_IMPORTED_MODULE_3__["InputGroupLabelDirective"])
    ], InputGroupComponent.prototype, "inputGroupLabelDirective", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_input_group_directive__WEBPACK_IMPORTED_MODULE_3__["InputGroupAddonLeftDirective"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _input_group_directive__WEBPACK_IMPORTED_MODULE_3__["InputGroupAddonLeftDirective"])
    ], InputGroupComponent.prototype, "inputGroupAddonLeftDirective", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_input_group_directive__WEBPACK_IMPORTED_MODULE_3__["InputGroupAddonRightDirective"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _input_group_directive__WEBPACK_IMPORTED_MODULE_3__["InputGroupAddonRightDirective"])
    ], InputGroupComponent.prototype, "inputGroupAddonRightDirective", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_input_group_directive__WEBPACK_IMPORTED_MODULE_3__["InputGroupContentDirective"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _input_group_directive__WEBPACK_IMPORTED_MODULE_3__["InputGroupContentDirective"])
    ], InputGroupComponent.prototype, "inputGroupContentDirective", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_input_text_input_text_directive__WEBPACK_IMPORTED_MODULE_4__["InputTextDirective"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _input_text_input_text_directive__WEBPACK_IMPORTED_MODULE_4__["InputTextDirective"])
    ], InputGroupComponent.prototype, "inputTextDirective", void 0);
    InputGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mk-input-group',
            template: __webpack_require__(/*! ./input-group.component.html */ "./app/components/lib/form/input-group/input-group.component.html")
        })
    ], InputGroupComponent);
    return InputGroupComponent;
}());



/***/ }),

/***/ "./app/components/lib/form/input-group/input-group.directive.ts":
/*!**********************************************************************!*\
  !*** ./app/components/lib/form/input-group/input-group.directive.ts ***!
  \**********************************************************************/
/*! exports provided: InputGroupLabelDirective, InputGroupAddonLeftDirective, InputGroupAddonRightDirective, InputGroupContentDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputGroupLabelDirective", function() { return InputGroupLabelDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputGroupAddonLeftDirective", function() { return InputGroupAddonLeftDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputGroupAddonRightDirective", function() { return InputGroupAddonRightDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputGroupContentDirective", function() { return InputGroupContentDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


/*
 *
 */
var InputGroupLabelDirective = /** @class */ (function () {
    function InputGroupLabelDirective() {
    }
    InputGroupLabelDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            /* tslint:disable-next-line:directive-selector */
            selector: 'mk-input-group-label'
        })
    ], InputGroupLabelDirective);
    return InputGroupLabelDirective;
}());

/*
 *
 */
var InputGroupAddonLeftDirective = /** @class */ (function () {
    function InputGroupAddonLeftDirective() {
    }
    InputGroupAddonLeftDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            /* tslint:disable-next-line:directive-selector */
            selector: 'mk-input-group-addon-left'
        })
    ], InputGroupAddonLeftDirective);
    return InputGroupAddonLeftDirective;
}());

/*
 *
 */
var InputGroupAddonRightDirective = /** @class */ (function () {
    function InputGroupAddonRightDirective() {
    }
    InputGroupAddonRightDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            /* tslint:disable-next-line:directive-selector */
            selector: 'mk-input-group-addon-right'
        })
    ], InputGroupAddonRightDirective);
    return InputGroupAddonRightDirective;
}());

/*
 *
 */
var InputGroupContentDirective = /** @class */ (function () {
    function InputGroupContentDirective() {
    }
    InputGroupContentDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            /* tslint:disable-next-line:directive-selector */
            selector: 'mk-input-group-content'
        })
    ], InputGroupContentDirective);
    return InputGroupContentDirective;
}());



/***/ }),

/***/ "./app/components/lib/form/input-group/input-group.module.ts":
/*!*******************************************************************!*\
  !*** ./app/components/lib/form/input-group/input-group.module.ts ***!
  \*******************************************************************/
/*! exports provided: InputGroupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputGroupModule", function() { return InputGroupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _color_color_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../color/color.module */ "./app/components/lib/color/color.module.ts");
/* harmony import */ var _input_group_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./input-group.component */ "./app/components/lib/form/input-group/input-group.component.ts");
/* harmony import */ var _input_group_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input-group.directive */ "./app/components/lib/form/input-group/input-group.directive.ts");







var InputGroupModule = /** @class */ (function () {
    function InputGroupModule() {
    }
    InputGroupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _color_color_module__WEBPACK_IMPORTED_MODULE_4__["ColorModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            exports: [_input_group_component__WEBPACK_IMPORTED_MODULE_5__["InputGroupComponent"], _input_group_directive__WEBPACK_IMPORTED_MODULE_6__["InputGroupLabelDirective"], _input_group_directive__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddonLeftDirective"],
                _input_group_directive__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddonRightDirective"], _input_group_directive__WEBPACK_IMPORTED_MODULE_6__["InputGroupContentDirective"]],
            declarations: [_input_group_component__WEBPACK_IMPORTED_MODULE_5__["InputGroupComponent"], _input_group_directive__WEBPACK_IMPORTED_MODULE_6__["InputGroupLabelDirective"], _input_group_directive__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddonLeftDirective"],
                _input_group_directive__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddonRightDirective"], _input_group_directive__WEBPACK_IMPORTED_MODULE_6__["InputGroupContentDirective"]]
        })
    ], InputGroupModule);
    return InputGroupModule;
}());



/***/ }),

/***/ "./app/components/lib/form/input-text/input-text.directive.ts":
/*!********************************************************************!*\
  !*** ./app/components/lib/form/input-text/input-text.directive.ts ***!
  \********************************************************************/
/*! exports provided: InputTextDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextDirective", function() { return InputTextDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _color_color_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../color/color.service */ "./app/components/lib/color/color.service.ts");
/* harmony import */ var _services_class_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/class.service */ "./app/components/lib/services/class.service.ts");






// @TODO onFocus Color
var InputTextDirective = /** @class */ (function () {
    /**
     * @method constructor
     * @param  elementRef   [description]
     * @param  renderer2    [description]
     * @param  ngControl    [description]
     * @param  colorService [description]
     * @param  classService [description]
     */
    function InputTextDirective(elementRef, renderer2, ngControl, colorService, classService) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.ngControl = ngControl;
        this.colorService = colorService;
        this.classService = classService;
        this.defaultClass = 'form-control';
        this._onKeyUp = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.onKeyup = this._onKeyUp.asObservable();
    }
    Object.defineProperty(InputTextDirective.prototype, "borderColor", {
        set: function (color) {
            this.colorService.setBackgroundColor(color, true, 'border-color', null);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputTextDirective.prototype, "class", {
        set: function (className) {
            this.isSetClass = true;
            this.classService.applyClasses(className);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputTextDirective.prototype, "color", {
        set: function (color) {
            this.colorService.setFontColor(color);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @method ngOnInit
     */
    InputTextDirective.prototype.ngOnInit = function () {
        if (!this.isSetClass) {
            this.classService.applyClasses(this.defaultClass);
        }
    };
    InputTextDirective.prototype.keyUpListener = function () {
        this._onKeyUp.next(this.ngControl);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], InputTextDirective.prototype, "borderColor", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], InputTextDirective.prototype, "class", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], InputTextDirective.prototype, "color", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keyup'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], InputTextDirective.prototype, "keyUpListener", null);
    InputTextDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[mkInputText]',
            providers: [_color_color_service__WEBPACK_IMPORTED_MODULE_4__["ColorService"], _services_class_service__WEBPACK_IMPORTED_MODULE_5__["ClassService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"],
            _color_color_service__WEBPACK_IMPORTED_MODULE_4__["ColorService"],
            _services_class_service__WEBPACK_IMPORTED_MODULE_5__["ClassService"]])
    ], InputTextDirective);
    return InputTextDirective;
}());



/***/ }),

/***/ "./app/components/lib/form/input-text/input-text.module.ts":
/*!*****************************************************************!*\
  !*** ./app/components/lib/form/input-text/input-text.module.ts ***!
  \*****************************************************************/
/*! exports provided: InputTextModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextModule", function() { return InputTextModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _color_color_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../color/color.module */ "./app/components/lib/color/color.module.ts");
/* harmony import */ var _input_text_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./input-text.directive */ "./app/components/lib/form/input-text/input-text.directive.ts");






var InputTextModule = /** @class */ (function () {
    function InputTextModule() {
    }
    InputTextModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _color_color_module__WEBPACK_IMPORTED_MODULE_4__["ColorModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            exports: [_input_text_directive__WEBPACK_IMPORTED_MODULE_5__["InputTextDirective"]],
            declarations: [_input_text_directive__WEBPACK_IMPORTED_MODULE_5__["InputTextDirective"]]
        })
    ], InputTextModule);
    return InputTextModule;
}());



/***/ }),

/***/ "./app/components/lib/helpers.ts":
/*!***************************************!*\
  !*** ./app/components/lib/helpers.ts ***!
  \***************************************/
/*! exports provided: throttle, removeSubscriptions, removeListeners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeSubscriptions", function() { return removeSubscriptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeListeners", function() { return removeListeners; });
/**
 * [throttle description]
 * @method throttle
 * @param callback [description]
 * @param delay    [description]
 * @return [description]
 */
function throttle(callback, delay) {
    var _this = this;
    var timeout = null;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!timeout) {
            timeout = setTimeout(function () {
                callback.call.apply(callback, [_this].concat(args));
                timeout = null;
            }, delay);
        }
    };
}
/**
 * [removeSubscriptions description]
 * @method removeSubscriptions
 */
function removeSubscriptions(subscriptions) {
    if (subscriptions) {
        subscriptions.forEach(function (subscription) {
            subscription.unsubscribe();
        });
    }
    return [];
}
/**
 * [removeListeners description]
 * @method removeListeners
 */
function removeListeners(listeners) {
    if (listeners) {
        listeners.forEach(function (listener) {
            listener();
        });
    }
    return [];
}


/***/ }),

/***/ "./app/components/lib/layout/content/content.component.css":
/*!*****************************************************************!*\
  !*** ./app/components/lib/layout/content/content.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n}\n\n.content-wrapper {\n     position: relative;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY29tcG9uZW50cy9saWIvbGF5b3V0L2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtLQUNLLGtCQUFrQjtBQUN2QiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbGliL2xheW91dC9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jb250ZW50LXdyYXBwZXIge1xuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4iXX0= */"

/***/ }),

/***/ "./app/components/lib/layout/content/content.component.html":
/*!******************************************************************!*\
  !*** ./app/components/lib/layout/content/content.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" [style.min-height.px]=\"heightStyle\">\n  <div #contentInnerElement class=\"content-inner\">\n    <ng-content select=\"[mk-layout-content-before-header]\"></ng-content>\n    <section *ngIf=\"header || description\" class=\"content-header\">\n      <h1>\n        {{header}}\n        <small *ngIf=\"description\">{{description}}</small>\n      </h1>\n      <mk-breadcrumbs></mk-breadcrumbs>\n    </section>\n    <ng-content select=\"[mk-layout-content-after-header]\"></ng-content>\n    <section class=\"content\">\n      <ng-content></ng-content>\n    </section>\n  </div>\n</div>\n"

/***/ }),

/***/ "./app/components/lib/layout/content/content.component.ts":
/*!****************************************************************!*\
  !*** ./app/components/lib/layout/content/content.component.ts ***!
  \****************************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _layout_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout.store */ "./app/components/lib/layout/layout.store.ts");
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/routing.service */ "./app/components/lib/services/routing.service.ts");
/* harmony import */ var _sidebar_right_sidebar_right_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sidebar-right/sidebar-right.service */ "./app/components/lib/layout/sidebar-right/sidebar-right.service.ts");
/* harmony import */ var _header_header_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../header/header.service */ "./app/components/lib/layout/header/header.service.ts");
/* harmony import */ var _footer_footer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../footer/footer.service */ "./app/components/lib/layout/footer/footer.service.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../helpers */ "./app/components/lib/helpers.ts");










var ContentComponent = /** @class */ (function () {
    /**
     * @method constructor
     * @param layoutStore
     * @param routingService
     * @param titleService
     * @param elementRef
     * @param changeDetectorRef
     * @param sidebarRightService
     * @param headerService
     * @param footerService
     * @param router
     */
    function ContentComponent(layoutStore, routingService, titleService, elementRef, changeDetectorRef, sidebarRightService, headerService, footerService, router) {
        this.layoutStore = layoutStore;
        this.routingService = routingService;
        this.titleService = titleService;
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.sidebarRightService = sidebarRightService;
        this.headerService = headerService;
        this.footerService = footerService;
        this.router = router;
        this.subscriptions = [];
    }
    /**
     * @method ngOnInit
     */
    ContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleTag = this.titleService.getTitle();
        this.subscriptions.push(this.routingService.onChange.subscribe(function (value) {
            if (value && value[value.length - 1]) {
                _this.titleService.setTitle(_this.getTitle(value[value.length - 1].data['title']));
                _this.header = value[value.length - 1].data['title'];
                _this.description = value[value.length - 1].data['description'];
            }
            _this.changeDetectorRef.markForCheck();
        }));
        this.subscriptions.push(this.router.events.subscribe(function (routeEvent) {
            if (routeEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                _this.navigationEnd = false;
            }
            if (routeEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.navigationEnd = true;
                _this.setContentMinHeight();
            }
        }));
        this.subscriptions.push(this.layoutStore.sidebarLeftElementHeight.subscribe(function (value) {
            _this.sidebarLeftHeight = value;
            _this.setContentMinHeight();
        }));
        this.subscriptions.push(this.layoutStore.layout.subscribe(function (value) {
            _this.layout = value;
            _this.setContentMinHeight();
        }));
        this.subscriptions.push(this.layoutStore.windowInnerHeight.subscribe(function (value) {
            _this.windowInnerHeight = value;
            _this.setContentMinHeight();
        }));
        this.heightStyle = this.windowInnerHeight;
    };
    /**
     * @method ngOnDestroy
     */
    ContentComponent.prototype.ngOnDestroy = function () {
        this.subscriptions = Object(_helpers__WEBPACK_IMPORTED_MODULE_9__["removeSubscriptions"])(this.subscriptions);
    };
    Object.defineProperty(ContentComponent.prototype, "scrollHeight", {
        /**
         * [scrollHeight description]
         * @method scrollHeight
         * @return [description]
         */
        get: function () {
            return this.contentInnerElement.nativeElement.scrollHeight;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * [getTitle description]
     * @method getTitle
     * @param title [description]
     * @return [description]
     */
    ContentComponent.prototype.getTitle = function (title) {
        return title ? title + " - " + this.titleTag : this.titleTag;
    };
    /**
     * [setMinHeight description]
     * @method setMinHeight
     */
    ContentComponent.prototype.setContentMinHeight = function () {
        if (this.navigationEnd) {
            var heightStyle = void 0;
            var headerFooterOffsetHeight = this.headerService.offsetHeight + this.footerService.offsetHeight;
            if (this.layout === 'fixed') {
                heightStyle = this.windowInnerHeight - this.footerService.offsetHeight;
            }
            else {
                var sidebarRight = this.sidebarRightService.scrollHeight ?
                    this.sidebarRightService.scrollHeight - this.headerService.offsetHeight : 0;
                heightStyle = Math.max(this.windowInnerHeight - headerFooterOffsetHeight, this.sidebarLeftHeight - this.headerService.offsetHeight, sidebarRight);
            }
            if (heightStyle && heightStyle !== this.heightStyle) {
                if (this.scrollHeight > heightStyle) {
                    heightStyle = null;
                }
                this.heightStyle = heightStyle;
                this.changeDetectorRef.detectChanges();
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contentInnerElement'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ContentComponent.prototype, "contentInnerElement", void 0);
    ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mk-layout-content',
            template: __webpack_require__(/*! ./content.component.html */ "./app/components/lib/layout/content/content.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./content.component.css */ "./app/components/lib/layout/content/content.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_layout_store__WEBPACK_IMPORTED_MODULE_4__["LayoutStore"],
            _services_routing_service__WEBPACK_IMPORTED_MODULE_5__["RoutingService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _sidebar_right_sidebar_right_service__WEBPACK_IMPORTED_MODULE_6__["SidebarRightService"],
            _header_header_service__WEBPACK_IMPORTED_MODULE_7__["HeaderService"],
            _footer_footer_service__WEBPACK_IMPORTED_MODULE_8__["FooterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./app/components/lib/layout/content/content.module.ts":
/*!*************************************************************!*\
  !*** ./app/components/lib/layout/content/content.module.ts ***!
  \*************************************************************/
/*! exports provided: ContentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentModule", function() { return ContentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../breadcrumbs/breadcrumbs.module */ "./app/components/lib/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content.component */ "./app/components/lib/layout/content/content.component.ts");






var ContentModule = /** @class */ (function () {
    function ContentModule() {
    }
    ContentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsModule"]],
            exports: [_content_component__WEBPACK_IMPORTED_MODULE_5__["ContentComponent"]],
            declarations: [_content_component__WEBPACK_IMPORTED_MODULE_5__["ContentComponent"]]
        })
    ], ContentModule);
    return ContentModule;
}());



/***/ }),

/***/ "./app/components/lib/layout/footer/footer.component.css":
/*!***************************************************************!*\
  !*** ./app/components/lib/layout/footer/footer.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY29tcG9uZW50cy9saWIvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoiQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xpYi9sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./app/components/lib/layout/footer/footer.component.html":
/*!****************************************************************!*\
  !*** ./app/components/lib/layout/footer/footer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"main-footer\">\n  <div class=\"pull-right hidden-xs\">\n    <ng-template [ngTemplateOutlet]=\"footerRightComponent?.templateRef\"></ng-template>\n  </div>\n  <ng-template [ngTemplateOutlet]=\"footerLeftComponent?.templateRef\"></ng-template>\n</footer>\n"

/***/ }),

/***/ "./app/components/lib/layout/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./app/components/lib/layout/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterLeftComponent, FooterRightComponent, FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterLeftComponent", function() { return FooterLeftComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterRightComponent", function() { return FooterRightComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _footer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.service */ "./app/components/lib/layout/footer/footer.service.ts");



/**
 * Footer Left
 */
var FooterLeftComponent = /** @class */ (function () {
    function FooterLeftComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('templateRef'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], FooterLeftComponent.prototype, "templateRef", void 0);
    FooterLeftComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mk-layout-footer-left',
            template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
        })
    ], FooterLeftComponent);
    return FooterLeftComponent;
}());

/**
 * Footer Right
 */
var FooterRightComponent = /** @class */ (function () {
    function FooterRightComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('templateRef'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], FooterRightComponent.prototype, "templateRef", void 0);
    FooterRightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mk-layout-footer-right',
            template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
        })
    ], FooterRightComponent);
    return FooterRightComponent;
}());

var FooterComponent = /** @class */ (function () {
    function FooterComponent(elementRef, footerService) {
        this.elementRef = elementRef;
        this.footerService = footerService;
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.footerService.elementRef = this.elementRef;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(FooterLeftComponent),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", FooterLeftComponent)
    ], FooterComponent.prototype, "footerLeftComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(FooterRightComponent),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", FooterRightComponent)
    ], FooterComponent.prototype, "footerRightComponent", void 0);
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mk-layout-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./app/components/lib/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./app/components/lib/layout/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _footer_service__WEBPACK_IMPORTED_MODULE_2__["FooterService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./app/components/lib/layout/footer/footer.module.ts":
/*!***********************************************************!*\
  !*** ./app/components/lib/layout/footer/footer.module.ts ***!
  \***********************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.component */ "./app/components/lib/layout/footer/footer.component.ts");




var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterLeftComponent"], _footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterRightComponent"]],
            declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterLeftComponent"], _footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterRightComponent"]]
        })
    ], FooterModule);
    return FooterModule;
}());



/***/ }),

/***/ "./app/components/lib/layout/footer/footer.service.ts":
/*!************************************************************!*\
  !*** ./app/components/lib/layout/footer/footer.service.ts ***!
  \************************************************************/
/*! exports provided: FooterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterService", function() { return FooterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var FooterService = /** @class */ (function () {
    function FooterService() {
    }
    Object.defineProperty(FooterService.prototype, "offsetHeight", {
        /**
         * [offsetHeight description]
         * @method offsetHeight
         * @return [description]
         */
        get: function () {
            return this.elementRef.nativeElement.offsetHeight;
        },
        enumerable: true,
        configurable: true
    });
    FooterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], FooterService);
    return FooterService;
}());



/***/ }),

/***/ "./app/components/lib/layout/header/header.component.css":
/*!***************************************************************!*\
  !*** ./app/components/lib/layout/header/header.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n}\n\n.sidebar-right-toggle {\n  float: right;\n}\n\n.sidebar-right-toggle a {\n  padding: 15px;\n  display: block;\n  line-height: 20px;\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY29tcG9uZW50cy9saWIvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCIiwiZmlsZSI6IkNsaWVudEFwcC9hcHAvY29tcG9uZW50cy9saWIvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zaWRlYmFyLXJpZ2h0LXRvZ2dsZSB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnNpZGViYXItcmlnaHQtdG9nZ2xlIGEge1xuICBwYWRkaW5nOiAxNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./app/components/lib/layout/header/header.component.html":
/*!****************************************************************!*\
  !*** ./app/components/lib/layout/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header #headerElement class=\"main-header\">\n  <a [routerLink]=\"logoLink\" class=\"logo\">\n    <span class=\"logo-mini\"><ng-template [ngTemplateOutlet]=\"headerLogoMiniComponent?.templateRef\"></ng-template></span>\n    <span class=\"logo-lg\"><ng-template [ngTemplateOutlet]=\"headerLogoComponent?.templateRef\"></ng-template></span>\n  </a>\n  <nav class=\"navbar navbar-static-top\">\n    <a *ngIf=\"isSidebarLeftToggle\" #sidebarLeftToggleElement href=\"#\" class=\"sidebar-toggle\">\n      <span class=\"sr-only\">Toggle navigation</span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n    </a>\n    <div *ngIf=\"isSidebarRightToggle\" class=\"sidebar-right-toggle\">\n      <a #sidebarRightToggleElement href=\"#\"><i class=\"fa fa-gears\"></i></a>\n    </div>\n    <ng-content></ng-content>\n  </nav>\n</header>\n"

/***/ }),

/***/ "./app/components/lib/layout/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./app/components/lib/layout/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderLogoComponent, HeaderLogoMiniComponent, HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderLogoComponent", function() { return HeaderLogoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderLogoMiniComponent", function() { return HeaderLogoMiniComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _layout_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout.store */ "./app/components/lib/layout/layout.store.ts");
/* harmony import */ var _header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.service */ "./app/components/lib/layout/header/header.service.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers */ "./app/components/lib/helpers.ts");





/**
 * Header Logo
 */
var HeaderLogoComponent = /** @class */ (function () {
    function HeaderLogoComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('templateRef'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], HeaderLogoComponent.prototype, "templateRef", void 0);
    HeaderLogoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mk-layout-header-logo',
            template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
        })
    ], HeaderLogoComponent);
    return HeaderLogoComponent;
}());

/**
 * Header Logo Mini
 */
var HeaderLogoMiniComponent = /** @class */ (function () {
    function HeaderLogoMiniComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('templateRef'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], HeaderLogoMiniComponent.prototype, "templateRef", void 0);
    HeaderLogoMiniComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mk-layout-header-logo-mini',
            template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
        })
    ], HeaderLogoMiniComponent);
    return HeaderLogoMiniComponent;
}());

/**
 * Header
 */
var HeaderComponent = /** @class */ (function () {
    /**
     * @method constructor
     * @param layoutStore [description]
     * @param ngZone      [description]
     * @param renderer2   [description]
     * @param elementRef   [description]
     * @param headerService   [description]
     */
    function HeaderComponent(layoutStore, ngZone, renderer2, elementRef, headerService) {
        this.layoutStore = layoutStore;
        this.ngZone = ngZone;
        this.renderer2 = renderer2;
        this.elementRef = elementRef;
        this.headerService = headerService;
        this.listeners = [];
        this.subscriptions = [];
        this.isSidebarLeftToggle = true;
        this.isSidebarRightToggle = true;
        this.logoLink = '/';
    }
    /**
     * @method ngAfterViewInit
     */
    HeaderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.headerService.elementRef = this.headerElement;
        if (this.sidebarLeftToggleElement) {
            this.subscriptions.push(this.layoutStore.isSidebarLeftCollapsed.subscribe(function (value) {
                _this.isSidebarLeftCollapsed = value;
            }));
            this.ngZone.runOutsideAngular(function () {
                _this.listeners.push(_this.renderer2.listen(_this.sidebarLeftToggleElement.nativeElement, 'click', function (event) {
                    event.preventDefault();
                    _this.layoutStore.sidebarLeftCollapsed(!_this.isSidebarLeftCollapsed);
                }));
            });
        }
        if (this.sidebarRightToggleElement) {
            this.subscriptions.push(this.layoutStore.isSidebarRightCollapsed.subscribe(function (value) {
                _this.isSidebarRightCollapsed = value;
            }));
            this.ngZone.runOutsideAngular(function () {
                _this.listeners.push(_this.renderer2.listen(_this.sidebarRightToggleElement.nativeElement, 'click', function (event) {
                    event.preventDefault();
                    _this.layoutStore.sidebarRightCollapsed(!_this.isSidebarRightCollapsed);
                }));
            });
        }
    };
    /**
     * @method ngOnDestroy
     */
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.listeners = Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["removeListeners"])(this.listeners);
        this.subscriptions = Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["removeSubscriptions"])(this.subscriptions);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "isSidebarLeftToggle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "isSidebarRightToggle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "logoLink", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(HeaderLogoComponent),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", HeaderLogoComponent)
    ], HeaderComponent.prototype, "headerLogoComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(HeaderLogoMiniComponent),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", HeaderLogoMiniComponent)
    ], HeaderComponent.prototype, "headerLogoMiniComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('headerElement'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HeaderComponent.prototype, "headerElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidebarLeftToggleElement'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HeaderComponent.prototype, "sidebarLeftToggleElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidebarRightToggleElement'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HeaderComponent.prototype, "sidebarRightToggleElement", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mk-layout-header',
            template: __webpack_require__(/*! ./header.component.html */ "./app/components/lib/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./app/components/lib/layout/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_layout_store__WEBPACK_IMPORTED_MODULE_2__["LayoutStore"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _header_service__WEBPACK_IMPORTED_MODULE_3__["HeaderService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./app/components/lib/layout/header/header.module.ts":
/*!***********************************************************!*\
  !*** ./app/components/lib/layout/header/header.module.ts ***!
  \***********************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header.component */ "./app/components/lib/layout/header/header.component.ts");





var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            exports: [_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderLogoComponent"], _header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderLogoMiniComponent"]],
            declarations: [_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderLogoComponent"], _header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderLogoMiniComponent"]]
        })
    ], HeaderModule);
    return HeaderModule;
}());



/***/ }),

/***/ "./app/components/lib/layout/header/header.service.ts":
/*!************************************************************!*\
  !*** ./app/components/lib/layout/header/header.service.ts ***!
  \************************************************************/
/*! exports provided: HeaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderService", function() { return HeaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var HeaderService = /** @class */ (function () {
    function HeaderService() {
    }
    Object.defineProperty(HeaderService.prototype, "offsetHeight", {
        /**
         * [offsetHeight description]
         * @method offsetHeight
         * @return [description]
         */
        get: function () {
            return this.elementRef.nativeElement.offsetHeight;
        },
        enumerable: true,
        configurable: true
    });
    HeaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], HeaderService);
    return HeaderService;
}());



/***/ }),

/***/ "./app/components/lib/layout/layout.module.ts":
/*!****************************************************!*\
  !*** ./app/components/lib/layout/layout.module.ts ***!
  \****************************************************/
/*! exports provided: LayoutModule, LayoutService, LayoutStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _content_content_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content/content.module */ "./app/components/lib/layout/content/content.module.ts");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.module */ "./app/components/lib/layout/footer/footer.module.ts");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.module */ "./app/components/lib/layout/header/header.module.ts");
/* harmony import */ var _sidebar_left_sidebar_left_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar-left/sidebar-left.module */ "./app/components/lib/layout/sidebar-left/sidebar-left.module.ts");
/* harmony import */ var _sidebar_right_sidebar_right_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidebar-right/sidebar-right.module */ "./app/components/lib/layout/sidebar-right/sidebar-right.module.ts");
/* harmony import */ var _wrapper_wrapper_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./wrapper/wrapper.module */ "./app/components/lib/layout/wrapper/wrapper.module.ts");
/* harmony import */ var _layout_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout.service */ "./app/components/lib/layout/layout.service.ts");
/* harmony import */ var _layout_provider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout.provider */ "./app/components/lib/layout/layout.provider.ts");
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/routing.service */ "./app/components/lib/services/routing.service.ts");
/* harmony import */ var _wrapper_wrapper_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./wrapper/wrapper.service */ "./app/components/lib/layout/wrapper/wrapper.service.ts");
/* harmony import */ var _sidebar_right_sidebar_right_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sidebar-right/sidebar-right.service */ "./app/components/lib/layout/sidebar-right/sidebar-right.service.ts");
/* harmony import */ var _header_header_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./header/header.service */ "./app/components/lib/layout/header/header.service.ts");
/* harmony import */ var _footer_footer_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./footer/footer.service */ "./app/components/lib/layout/footer/footer.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return _layout_service__WEBPACK_IMPORTED_MODULE_10__["LayoutService"]; });

/* harmony import */ var _layout_store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./layout.store */ "./app/components/lib/layout/layout.store.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutStore", function() { return _layout_store__WEBPACK_IMPORTED_MODULE_17__["LayoutStore"]; });


















var LayoutModule = /** @class */ (function () {
    /**
     * @method constructor
     * @param parentModule [description]
     */
    function LayoutModule(parentModule) {
        if (parentModule) {
            throw new Error('LayoutModule is already loaded. Import it in the AppModule only!');
        }
    }
    LayoutModule_1 = LayoutModule;
    /**
     * [forRoot description]
     * @method forRoot
     * @param  layoutConfig [description]
     * @return [description]
     */
    LayoutModule.forRoot = function (layoutConfig) {
        return {
            ngModule: LayoutModule_1,
            providers: Object(_layout_provider__WEBPACK_IMPORTED_MODULE_11__["layoutProvider"])(layoutConfig).concat([_layout_service__WEBPACK_IMPORTED_MODULE_10__["LayoutService"]])
        };
    };
    var LayoutModule_1;
    LayoutModule = LayoutModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            exports: [_content_content_module__WEBPACK_IMPORTED_MODULE_4__["ContentModule"], _footer_footer_module__WEBPACK_IMPORTED_MODULE_5__["FooterModule"], _header_header_module__WEBPACK_IMPORTED_MODULE_6__["HeaderModule"], _sidebar_left_sidebar_left_module__WEBPACK_IMPORTED_MODULE_7__["SidebarLeftModule"], _sidebar_right_sidebar_right_module__WEBPACK_IMPORTED_MODULE_8__["SidebarRightModule"], _wrapper_wrapper_module__WEBPACK_IMPORTED_MODULE_9__["WrapperModule"]],
            providers: [_services_routing_service__WEBPACK_IMPORTED_MODULE_12__["RoutingService"], _wrapper_wrapper_service__WEBPACK_IMPORTED_MODULE_13__["WrapperService"], _sidebar_right_sidebar_right_service__WEBPACK_IMPORTED_MODULE_14__["SidebarRightService"], _header_header_service__WEBPACK_IMPORTED_MODULE_15__["HeaderService"], _footer_footer_service__WEBPACK_IMPORTED_MODULE_16__["FooterService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [LayoutModule])
    ], LayoutModule);
    return LayoutModule;
}());





/***/ }),

/***/ "./app/components/lib/layout/layout.provider.ts":
/*!******************************************************!*\
  !*** ./app/components/lib/layout/layout.provider.ts ***!
  \******************************************************/
/*! exports provided: LayoutConfigToken, layoutStoreFactory, layoutProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutConfigToken", function() { return LayoutConfigToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layoutStoreFactory", function() { return layoutStoreFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layoutProvider", function() { return layoutProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _layout_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.store */ "./app/components/lib/layout/layout.store.ts");


/**
 * [InjectionToken description]
 */
var LayoutConfigToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('layoutConfig');
/**
 * [layoutStoreFactory description]
 */
function layoutStoreFactory(layoutConfig) {
    return new _layout_store__WEBPACK_IMPORTED_MODULE_1__["LayoutStore"](layoutConfig);
}
/**
 * [layoutProviders description]
 */
function layoutProvider(layoutConfig) {
    return [{
            provide: _layout_store__WEBPACK_IMPORTED_MODULE_1__["LayoutStore"],
            useFactory: layoutStoreFactory,
            deps: [LayoutConfigToken]
        }, {
            provide: LayoutConfigToken,
            useValue: layoutConfig
        }
    ];
}


/***/ }),

/***/ "./app/components/lib/layout/layout.service.ts":
/*!*****************************************************!*\
  !*** ./app/components/lib/layout/layout.service.ts ***!
  \*****************************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/routing.service */ "./app/components/lib/services/routing.service.ts");




var LayoutService = /** @class */ (function () {
    /**
     * @method constructor
     * @param routingService [description]
     */
    function LayoutService(routingService) {
        this.routingService = routingService;
        this.isCustomLayout = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this.init();
    }
    /**
     * [init description]
     * @method init
     * @return [description]
     */
    LayoutService.prototype.init = function () {
        var _this = this;
        this.routingService.onChange.subscribe(function (value) {
            if (value && value[value.length - 1]) {
                if (_this.customLayout === undefined || _this.customLayout !== value[value.length - 1].data['disableLayout']) {
                    _this.isCustomLayout.next(!!value[value.length - 1].data['customLayout']);
                }
                _this.customLayout = value[value.length - 1].data['customLayout'];
            }
        });
    };
    LayoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_routing_service__WEBPACK_IMPORTED_MODULE_3__["RoutingService"]])
    ], LayoutService);
    return LayoutService;
}());



/***/ }),

/***/ "./app/components/lib/layout/layout.store.ts":
/*!***************************************************!*\
  !*** ./app/components/lib/layout/layout.store.ts ***!
  \***************************************************/
/*! exports provided: LayoutStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutStore", function() { return LayoutStore; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");


/*
 *
 */
var LayoutStore = /** @class */ (function () {
    /**
     * @method constructor
     * @param layoutConfig [description]
     */
    function LayoutStore(layoutConfig) {
        this.initialLayoutState = {
            isSidebarLeftCollapsed: false,
            isSidebarLeftExpandOnOver: false,
            isSidebarLeftMouseOver: false,
            isSidebarLeftMini: true,
            sidebarRightSkin: 'dark',
            isSidebarRightCollapsed: true,
            isSidebarRightOverContent: true,
            layout: 'normal',
            sidebarLeftMenu: [],
            sidebarLeftMenuActiveUrl: '',
            skin: 'blue'
        };
        if (layoutConfig) {
            this.initialLayoutState = Object.assign(this.initialLayoutState, layoutConfig);
        }
        this._layoutState = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.initialLayoutState);
        this.layoutState = this._layoutState.asObservable();
    }
    Object.defineProperty(LayoutStore.prototype, "windowInnerHeight", {
        /**
         * [windowInnerHeight description]
         * @method windowInnerHeight
         * @return [description]
         */
        get: function () {
            return this.layoutState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('windowInnerHeight'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutStore.prototype, "windowInnerWidth", {
        /**
         * [windowInnerWidth description]
         * @method windowInnerWidth
         * @return [description]
         */
        get: function () {
            return this.layoutState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('windowInnerWidth'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutStore.prototype, "isSidebarLeftCollapsed", {
        /**
         * [isSidebarLeftCollapsed description]
         * @return [description]
         */
        get: function () {
            return this.layoutState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('isSidebarLeftCollapsed'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutStore.prototype, "isSidebarLeftExpandOnOver", {
        /**
         * [isSidebarLeftExpandOnOver description]
         * @method isSidebarLeftExpandOnOver
         * @return [description]
         */
        get: function () {
            return this.layoutState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('isSidebarLeftExpandOnOver'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutStore.prototype, "isSidebarLeftMouseOver", {
        /**
         * [isSidebarLeftMouseOver description]
         * @method isSidebarLeftMouseOver
         * @return [description]
         */
        get: function () {
            return this.layoutState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('isSidebarLeftMouseOver'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutStore.prototype, "isSidebarLeftMini", {
        /**
         * [isSidebarLeftMini description]
         * @method isSidebarLeftMini
         * @return [description]
         */
        get: function () {
            return this.layoutState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('isSidebarLeftMini'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutStore.prototype, "sidebarRightSkin", {
        /**
         * [sidebarRightSkin description]
         * @method sidebarRightSkin
         * @return [description]
         */
        get: function () {
            return this.layoutState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('sidebarRightSkin'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutStore.prototype, "isSidebarRightCollapsed", {
        /**
         * [isSidebarRightCollapsed description]
         * @return [description]
         */
        get: function () {
            return this.layoutState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('isSidebarRightCollapsed'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutStore.prototype, "isSidebarRightOverContent", {
        /**
         * [isSidebarRightOverContent description]
         * @method isSidebarRightOverContent
         * @return [description]
         */
        get: function () {
            return this.layoutState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('isSidebarRightOverContent'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutStore.prototype, "sidebarLeftMenu", {
        /**
         * [sidebarLeftMenu description]
         * @method sidebarLeftMenu
         * @return [description]
         */
        get: function () {
            return this.layoutState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('sidebarLeftMenu'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutStore.prototype, "sidebarLeftMenuActiveUrl", {
        /**
         * [sidebarLeftMenuActiveUrl description]
         * @method sidebarLeftMenuActiveUrl
         * @return [description]
         */
        get: function () {
            return this.layoutState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('sidebarLeftMenuActiveUrl'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutStore.prototype, "sidebarLeftElementHeight", {
        /**
         * [sidebarLeftElementHeight description]
         * @method sidebarLeftElementHeight
         * @return [description]
         */
        get: function () {
            return this.layoutState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('sidebarLeftElementHeight'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutStore.prototype, "layout", {
        /**
         * [layoutType description]
         * @method layoutType
         * @return [description]
         */
        get: function () {
            return this.layoutState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('layout'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutStore.prototype, "skin", {
        /**
         * [skin description]
         * @method skin
         * @return [description]
         */
        get: function () {
            return this.layoutState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('skin'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutStore.prototype, "wrapperClasses", {
        /**
         * [wrapperClasses description]
         * @method wrapperClasses
         * @return [description]
         */
        get: function () {
            return this.layoutState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('wrapperClasses'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
        },
        enumerable: true,
        configurable: true
    });
    /**
     * [sidebarLeftCollapsed description]
     * @method sidebarLeftCollapsed
     * @param value [description]
     */
    LayoutStore.prototype.sidebarLeftCollapsed = function (value) {
        this._layoutState.next(Object.assign(this._layoutState.value, { isSidebarLeftCollapsed: value }));
    };
    /**
     * [sidebarLeftExpandOnOver description]
     * @method sidebarLeftExpandOnOver
     * @param value [description]
     */
    LayoutStore.prototype.sidebarLeftExpandOnOver = function (value) {
        this._layoutState.next(Object.assign(this._layoutState.value, { isSidebarLeftExpandOnOver: value }));
    };
    /**
     * [setSidebarLeftElementHeight description]
     * @method setSidebarLeftElementHeight
     * @param value [description]
     */
    LayoutStore.prototype.setSidebarLeftElementHeight = function (value) {
        this._layoutState.next(Object.assign(this._layoutState.value, { sidebarLeftElementHeight: value }));
    };
    /**
     * [setSidebarRightSkin description]
     * @method setSidebarRightSkin
     * @param value [description]
     */
    LayoutStore.prototype.setSidebarRightSkin = function (value) {
        this._layoutState.next(Object.assign(this._layoutState.value, { sidebarRightSkin: value }));
    };
    /**
     * [sidebarLeftMouseOver description]
     * @method sidebarLeftMouseOver
     * @param value [description]
     */
    LayoutStore.prototype.sidebarLeftMouseOver = function (value) {
        this._layoutState.next(Object.assign(this._layoutState.value, { isSidebarLeftMouseOver: value }));
    };
    /**
     * [sidebarLeftMini description]
     * @method sidebarLeftMini
     * @param value [description]
     */
    LayoutStore.prototype.sidebarLeftMini = function (value) {
        this._layoutState.next(Object.assign(this._layoutState.value, { isSidebarLeftMini: value }));
    };
    /**
     * [sidebarRightCollapsed description]
     * @method sidebarRightCollapsed
     * @param value [description]
     */
    LayoutStore.prototype.sidebarRightCollapsed = function (value) {
        this._layoutState.next(Object.assign(this._layoutState.value, { isSidebarRightCollapsed: value }));
    };
    /**
     * [sidebarRightOverContent description]
     * @method sidebarRightOverContent
     * @param value [description]
     */
    LayoutStore.prototype.sidebarRightOverContent = function (value) {
        this._layoutState.next(Object.assign(this._layoutState.value, { isSidebarRightOverContent: value }));
    };
    /**
     * [setSidebarLeftMenu description]
     * @method setSidebarLeftMenu
     * @param value [description]
     */
    LayoutStore.prototype.setSidebarLeftMenu = function (value) {
        this._layoutState.next(Object.assign(this._layoutState.value, { sidebarLeftMenu: value }));
    };
    /**
     * [setSidebarLeftMenuActiveUrl description]
     * @method setSidebarLeftMenuActiveUrl
     * @param value [description]
     */
    LayoutStore.prototype.setSidebarLeftMenuActiveUrl = function (value) {
        this._layoutState.next(Object.assign(this._layoutState.value, { sidebarLeftMenuActiveUrl: value }));
    };
    /**
     * [setLayout description]
     * @method setLayout
     * @param value [description]
     */
    LayoutStore.prototype.setLayout = function (value) {
        this._layoutState.next(Object.assign(this._layoutState.value, { layout: value }));
    };
    /**
     * [setSkin description]
     * @method setSkin
     * @param value [description]
     */
    LayoutStore.prototype.setSkin = function (value) {
        this._layoutState.next(Object.assign(this._layoutState.value, { skin: value }));
    };
    /**
     * [setWrapperClasses description]
     * @method setWrapperClasses
     * @param value [description]
     */
    LayoutStore.prototype.setWrapperClasses = function (value) {
        this._layoutState.next(Object.assign(this._layoutState.value, { wrapperClasses: value }));
    };
    /**
     * [setWindowInnerHeight description]
     * @method setWindowInnerHeight
     * @param value [description]
     */
    LayoutStore.prototype.setWindowInnerHeight = function (value) {
        this._layoutState.next(Object.assign(this._layoutState.value, { windowInnerHeight: value }));
    };
    /**
     * [setWindowInnerWidth description]
     * @method setWindowInnerWidth
     * @param value [description]
     */
    LayoutStore.prototype.setWindowInnerWidth = function (value) {
        this._layoutState.next(Object.assign(this._layoutState.value, { windowInnerWidth: value }));
    };
    return LayoutStore;
}());



/***/ }),

/***/ "./app/components/lib/layout/sidebar-left/sidebar-left.component.css":
/*!***************************************************************************!*\
  !*** ./app/components/lib/layout/sidebar-left/sidebar-left.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".treeview-menu.collapse {\n  display: none;\n}\n\n.treeview-menu,\n.treeview-menu.collapse.in {\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY29tcG9uZW50cy9saWIvbGF5b3V0L3NpZGViYXItbGVmdC9zaWRlYmFyLWxlZnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCIiwiZmlsZSI6IkNsaWVudEFwcC9hcHAvY29tcG9uZW50cy9saWIvbGF5b3V0L3NpZGViYXItbGVmdC9zaWRlYmFyLWxlZnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmVldmlldy1tZW51LmNvbGxhcHNlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRyZWV2aWV3LW1lbnUsXG4udHJlZXZpZXctbWVudS5jb2xsYXBzZS5pbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */"

/***/ }),

/***/ "./app/components/lib/layout/sidebar-left/sidebar-left.component.html":
/*!****************************************************************************!*\
  !*** ./app/components/lib/layout/sidebar-left/sidebar-left.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"main-sidebar\">\n  <section class=\"sidebar\" #sidebarElement [style.height.px]=\"sidebarHeight\" [style.overflow]=\"sidebarOverflow\">\n    <ng-content></ng-content>\n  \t<ul class=\"sidebar-menu\">\n      <ng-container *ngFor=\"let item of menu\">\n        <ng-container *ngTemplateOutlet=\"sidebarInner; context: {item: item}\"></ng-container>\n      </ng-container>\n  \t</ul>\n  </section>\n</aside>\n\n<ng-template #sidebarInner let-item=\"item\">\n  <li [class.active]=\"item.isActive\" [class.header]=\"item.separator\" [class.menu-open]=\"!item.isCollapsed\">\n    <span *ngIf=\"item.separator\">{{item.label}}</span>\n    <a *ngIf=\"!item.separator && item.route\" [routerLink]=\"item.route\">\n    \t<i [class]=\"getIconClasses(item)\"></i><span>{{item.label}}</span>\n    \t<span *ngIf=\"item.children || item.pullRights\" class=\"pull-right-container\">\n    \t\t<span *ngFor=\"let rightItem of item.pullRights\" class=\"pull-right {{rightItem.classes}}\">{{rightItem.text}}</span>\n    \t  <i *ngIf=\"!item.pullRights\" class=\"fa fa-angle-left pull-right\"></i>\n    \t</span>\n    </a>\n    <a *ngIf=\"!item.separator && !item.route\" href=\"#\" [mkMenuToggle]=\"item\">\n    \t<i [class]=\"getIconClasses(item)\"></i><span>{{item.label}}</span>\n    \t<span *ngIf=\"item.children || item.pullRights\" class=\"pull-right-container\">\n    \t\t<span *ngFor=\"let rightItem of item.pullRights\" class=\"pull-right {{rightItem.classes}}\">{{rightItem.text}}</span>\n    \t  <i *ngIf=\"!item.pullRights\" class=\"fa fa-angle-left pull-right\"></i>\n    \t</span>\n    </a>\n    <ul *ngIf=\"item.children\" [mkCollapseAnimation]=\"item.isCollapsed\" (mkCollapseAnimation.start)=\"visibilityStateStart($event)\" class=\"treeview-menu\">\n      <ng-container *ngFor=\"let item of item.children\">\n        <ng-container *ngTemplateOutlet=\"sidebarInner; context: {item: item}\"></ng-container>\n      </ng-container>\n    </ul>\n  </li>\n</ng-template>\n"

/***/ }),

/***/ "./app/components/lib/layout/sidebar-left/sidebar-left.component.ts":
/*!**************************************************************************!*\
  !*** ./app/components/lib/layout/sidebar-left/sidebar-left.component.ts ***!
  \**************************************************************************/
/*! exports provided: SidebarLeftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarLeftComponent", function() { return SidebarLeftComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/routing.service */ "./app/components/lib/services/routing.service.ts");
/* harmony import */ var _wrapper_wrapper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../wrapper/wrapper.service */ "./app/components/lib/layout/wrapper/wrapper.service.ts");
/* harmony import */ var _header_header_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../header/header.service */ "./app/components/lib/layout/header/header.service.ts");
/* harmony import */ var _layout_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layout.store */ "./app/components/lib/layout/layout.store.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers */ "./app/components/lib/helpers.ts");
/* harmony import */ var _sidebar_left_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidebar-left.directive */ "./app/components/lib/layout/sidebar-left/sidebar-left.directive.ts");









var SidebarLeftComponent = /** @class */ (function () {
    /**
     * @method constructor
     * @param  changeDetectorRef  [description]
     * @param  layoutStore        [description]
     * @param  ngZone             [description]
     * @param  renderer2          [description]
     * @param  router             [description]
     * @param  routingService     [description]
     * @param  wrapperService     [description]
     * @param  headerService      [description]
     */
    function SidebarLeftComponent(changeDetectorRef, layoutStore, ngZone, renderer2, router, routingService, wrapperService, headerService) {
        this.changeDetectorRef = changeDetectorRef;
        this.layoutStore = layoutStore;
        this.ngZone = ngZone;
        this.renderer2 = renderer2;
        this.router = router;
        this.routingService = routingService;
        this.wrapperService = wrapperService;
        this.headerService = headerService;
        this.collapsedItems = [];
        this.activatedItems = [];
        this.toggleListeners = [];
        this.listeners = [];
        this.itemsByIds = {};
        this.runningAnimations = 0;
        this.subscriptions = [];
    }
    /**
     * @method ngOnInit
     */
    SidebarLeftComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.layoutStore.sidebarLeftMenu.subscribe(function (value) {
            _this.menu = value;
            _this.monkeyPatchMenu(_this.menu);
            if (_this.initialized) {
                _this.setMenuListeners(_this.activeUrl);
                _this.setSidebarListeners();
                _this.setMenuTogglesListeners();
            }
            _this.initialized = true;
        }));
        this.subscriptions.push(this.layoutStore.sidebarLeftMenuActiveUrl.subscribe(function (value) {
            _this.activeUrl = value;
            _this.setMenuListeners(value);
        }));
        this.subscriptions.push(this.routingService.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.activeUrl = event.url;
                _this.setMenuListeners(event.url);
            }
        }));
        this.setSidebarListeners();
    };
    /**
     * @method ngAfterViewInit
     */
    SidebarLeftComponent.prototype.ngAfterViewInit = function () {
        this.setMenuTogglesListeners();
        this.checkMenuWithoutChildren();
    };
    /**
     * @method ngOnDestroy
     */
    SidebarLeftComponent.prototype.ngOnDestroy = function () {
        this.subscriptions = Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["removeSubscriptions"])(this.subscriptions);
        this.listeners = Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["removeListeners"])(this.listeners);
        this.toggleListeners = Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["removeListeners"])(this.toggleListeners);
    };
    /**
     * [setSidebarListeners description]
     * @method setSidebarListeners
     */
    SidebarLeftComponent.prototype.setSidebarListeners = function () {
        var _this = this;
        this.subscriptions.push(this.layoutStore.layout.subscribe(function (value) {
            _this.layout = value;
            _this.setSidebarHeight();
        }));
        this.subscriptions.push(this.layoutStore.windowInnerHeight.subscribe(function (value) {
            _this.windowInnerHeight = value;
            _this.setSidebarHeight();
        }));
        this.subscriptions.push(this.layoutStore.sidebarLeftMenu.subscribe(function () {
            _this.changeDetectorRef.detectChanges();
        }));
        this.ngZone.runOutsideAngular(function () {
            _this.listeners.push(_this.renderer2.listen(_this.sidebarElement.nativeElement, 'mouseenter', function () {
                _this.layoutStore.sidebarLeftMouseOver(true);
            }));
            _this.listeners.push(_this.renderer2.listen(_this.sidebarElement.nativeElement, 'mouseleave', function () {
                _this.layoutStore.sidebarLeftMouseOver(false);
            }));
        });
        this.subscriptions.push(this.layoutStore.windowInnerWidth.subscribe(function (value) {
            _this.windowInnerWidth = value;
            if (!_this.isSidebarLeftCollapsed && _this.windowInnerWidth <= 767) {
                _this.layoutStore.sidebarLeftCollapsed(true);
            }
            else if (_this.windowInnerWidth > 767 && _this.isSidebarLeftCollapsed && !_this.isSidebarLeftExpandOnOver) {
                _this.layoutStore.sidebarLeftCollapsed(false);
            }
        }));
        this.subscriptions.push(this.layoutStore.isSidebarLeftMouseOver.subscribe(function (value) {
            _this.isSidebarLeftMouseOver = value;
            if (_this.isSidebarLeftExpandOnOver) {
                _this.layoutStore.sidebarLeftCollapsed(!value);
            }
        }));
        this.subscriptions.push(this.layoutStore.isSidebarLeftExpandOnOver.subscribe(function (value) {
            _this.isSidebarLeftExpandOnOver = value;
            if (_this.windowInnerWidth > 767 && _this.isSidebarLeftCollapsed !== undefined) {
                _this.layoutStore.sidebarLeftCollapsed(value);
            }
        }));
        this.subscriptions.push(this.layoutStore.isSidebarLeftCollapsed.subscribe(function (value) {
            _this.isSidebarLeftCollapsed = value;
            if (_this.windowInnerWidth <= 767) {
                if (value) {
                    _this.renderer2.removeClass(_this.wrapperService.wrapperElementRef.nativeElement, 'sidebar-open');
                }
                else {
                    _this.renderer2.addClass(_this.wrapperService.wrapperElementRef.nativeElement, 'sidebar-open');
                }
            }
            else {
                if (_this.isSidebarLeftExpandOnOver && !_this.isSidebarLeftMouseOver && !value) {
                    _this.layoutStore.sidebarLeftExpandOnOver(false);
                }
                if (value) {
                    _this.renderer2.addClass(_this.wrapperService.wrapperElementRef.nativeElement, 'sidebar-collapse');
                    if (_this.isSidebarLeftExpandOnOver) {
                        _this.renderer2.removeClass(_this.wrapperService.wrapperElementRef.nativeElement, 'sidebar-expanded-on-hover');
                    }
                }
                else {
                    _this.renderer2.removeClass(_this.wrapperService.wrapperElementRef.nativeElement, 'sidebar-collapse');
                    if (_this.isSidebarLeftExpandOnOver) {
                        _this.renderer2.addClass(_this.wrapperService.wrapperElementRef.nativeElement, 'sidebar-expanded-on-hover');
                    }
                }
            }
        }));
        this.subscriptions.push(this.layoutStore.isSidebarLeftMini.subscribe(function (value) {
            if (value) {
                _this.renderer2.addClass(_this.wrapperService.wrapperElementRef.nativeElement, 'sidebar-mini');
            }
            else {
                _this.renderer2.removeClass(_this.wrapperService.wrapperElementRef.nativeElement, 'sidebar-mini');
            }
        }));
    };
    /**
     * [setMenuListeners description]
     * @method setMenuListeners
     */
    SidebarLeftComponent.prototype.setMenuListeners = function (url) {
        if (url === '/') {
            this.activeItems(url);
            this.changeDetectorRef.detectChanges();
        }
        else {
            var primaryOutlet = this.router.parseUrl(url).root.children[_angular_router__WEBPACK_IMPORTED_MODULE_2__["PRIMARY_OUTLET"]];
            if (primaryOutlet) {
                this.activeItems(primaryOutlet.toString());
                this.changeDetectorRef.detectChanges();
            }
        }
        if (this.windowInnerWidth <= 767 || this.isSidebarLeftExpandOnOver) {
            this.layoutStore.sidebarLeftCollapsed(true);
        }
    };
    /**
     * [getIconClasses description]
     * @method getIconClasses
     * @param item [description]
     * @return [description]
     */
    SidebarLeftComponent.prototype.getIconClasses = function (item) {
        if (item.iconClasses || item.iconClasses === '') {
            return item.iconClasses;
        }
        else {
            return 'fa fa-circle-o';
        }
    };
    /**
     * [visibilityStateStart description]
     * @method visibilityStateStart
     * @param event [description]
     */
    SidebarLeftComponent.prototype.visibilityStateStart = function (event) {
        var _this = this;
        this.runningAnimations++;
        this.ngZone.runOutsideAngular(function () {
            setTimeout(function () {
                _this.runningAnimations--;
                if (!_this.runningAnimations) {
                    _this.layoutStore.setSidebarLeftElementHeight(_this.sidebarElement.nativeElement.offsetHeight);
                }
            }, event.totalTime);
        });
    };
    /**
     * [uncollapseItemParents description]
     * @method uncollapseItemParents
     * @param item           [description]
     * @param isActive       [description]
     */
    SidebarLeftComponent.prototype.uncollapseItemParents = function (item, isActive) {
        if (isActive === void 0) { isActive = false; }
        if (isActive) {
            item.isActive = true;
            this.activatedItems.push(item);
        }
        item.isCollapsed = false;
        this.collapsedItems.push(item);
        if (item.parentId) {
            this.uncollapseItemParents(this.itemsByIds[item.parentId], isActive);
        }
    };
    /**
     * [findItemsByUrl description]
     * @method findItemsByUrl
     * @param url   [description]
     * @param items [description]
     * @param returnItems [description]
     * @return [description]
     */
    SidebarLeftComponent.prototype.findItemsByUrl = function (url, items, returnItems) {
        var _this = this;
        if (returnItems === void 0) { returnItems = []; }
        items.forEach(function (item) {
            if (item.route === url) {
                returnItems.push(item);
            }
            else if (item.children) {
                _this.findItemsByUrl(url, item.children, returnItems);
            }
        });
        return returnItems;
    };
    /**
     * [activeItems description]
     * @method activeItems
     * @param url [description]
     */
    SidebarLeftComponent.prototype.activeItems = function (url) {
        var _this = this;
        this.activatedItems.forEach(function (item) {
            item.isActive = false;
        });
        this.activatedItems = [];
        this.collapsedItems.forEach(function (item) {
            item.isActive = false;
            item.isCollapsed = true;
        });
        this.collapsedItems = [];
        var items = this.findItemsByUrl(url, this.menu);
        items.forEach(function (item) {
            item.isActive = true;
            _this.uncollapseItemParents(item, true);
            _this.activatedItems.push(item);
        });
    };
    /**
     * [monkeyPatchMenu description]
     * @method monkeyPatchMenu
     * @param items    [description]
     * @param parentId [description]
     */
    SidebarLeftComponent.prototype.monkeyPatchMenu = function (items, parentId) {
        var _this = this;
        items.forEach(function (item, index) {
            item.id = parentId ? Number(parentId + '' + (index + 1)) : index + 1;
            if (parentId) {
                item.parentId = parentId;
            }
            if (!item.disableCollapse) {
                item.isCollapsed = true;
            }
            item.isActive = false;
            if (parentId || item.children) {
                _this.itemsByIds[item.id] = item;
            }
            if (item.children) {
                _this.monkeyPatchMenu(item.children, item.id);
            }
        });
    };
    /**
     * [setMenuTogglesListeners description]
     * @method setMenuTogglesListeners
     */
    SidebarLeftComponent.prototype.setMenuTogglesListeners = function () {
        var _this = this;
        this.toggleListeners = Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["removeListeners"])(this.toggleListeners);
        this.ngZone.runOutsideAngular(function () {
            _this.sidebarLeftToggleDirectives.forEach(function (menuToggle) {
                _this.toggleListeners.push(_this.renderer2.listen(menuToggle.elementRef.nativeElement, 'click', function (event) {
                    event.preventDefault();
                    if (menuToggle.item.isCollapsed) {
                        _this.collapsedItems.forEach(function (item) {
                            if (!item.disableCollapse) {
                                item.isCollapsed = true;
                            }
                        });
                        _this.collapsedItems = [];
                        _this.uncollapseItemParents(menuToggle.item);
                    }
                    else {
                        menuToggle.item.isCollapsed = !menuToggle.item.isCollapsed;
                    }
                    _this.changeDetectorRef.detectChanges();
                }));
            });
        });
    };
    /**
     * [checkMenuWithoutChildren description]
     * @method checkMenuWithoutChildren
     */
    SidebarLeftComponent.prototype.checkMenuWithoutChildren = function () {
        var _this = this;
        var menuHaveChildren;
        this.menu.forEach(function (item) {
            if (item.children) {
                return menuHaveChildren = true;
            }
        });
        if (!menuHaveChildren) {
            this.ngZone.runOutsideAngular(function () {
                setTimeout(function () {
                    _this.layoutStore.setSidebarLeftElementHeight(_this.sidebarElement.nativeElement.offsetHeight);
                });
            });
        }
    };
    /**
     * [setSidebarHeight description]
     * @method setSidebarHeight
     */
    SidebarLeftComponent.prototype.setSidebarHeight = function () {
        if (this.layout === 'fixed') {
            var height = this.windowInnerHeight - this.headerService.offsetHeight;
            if (height && height !== this.sidebarHeight) {
                this.sidebarHeight = height;
                this.sidebarOverflow = 'auto';
                this.changeDetectorRef.detectChanges();
            }
        }
        else if (this.sidebarHeight) {
            this.sidebarOverflow = this.sidebarHeight = null;
            this.changeDetectorRef.detectChanges();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidebarElement'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SidebarLeftComponent.prototype, "sidebarElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_sidebar_left_directive__WEBPACK_IMPORTED_MODULE_8__["SidebarLeftToggleDirective"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], SidebarLeftComponent.prototype, "sidebarLeftToggleDirectives", void 0);
    SidebarLeftComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mk-layout-sidebar-left',
            template: __webpack_require__(/*! ./sidebar-left.component.html */ "./app/components/lib/layout/sidebar-left/sidebar-left.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./sidebar-left.component.css */ "./app/components/lib/layout/sidebar-left/sidebar-left.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _layout_store__WEBPACK_IMPORTED_MODULE_6__["LayoutStore"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_routing_service__WEBPACK_IMPORTED_MODULE_3__["RoutingService"],
            _wrapper_wrapper_service__WEBPACK_IMPORTED_MODULE_4__["WrapperService"],
            _header_header_service__WEBPACK_IMPORTED_MODULE_5__["HeaderService"]])
    ], SidebarLeftComponent);
    return SidebarLeftComponent;
}());



/***/ }),

/***/ "./app/components/lib/layout/sidebar-left/sidebar-left.directive.ts":
/*!**************************************************************************!*\
  !*** ./app/components/lib/layout/sidebar-left/sidebar-left.directive.ts ***!
  \**************************************************************************/
/*! exports provided: SidebarLeftToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarLeftToggleDirective", function() { return SidebarLeftToggleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


/*
 *
 */
var SidebarLeftToggleDirective = /** @class */ (function () {
    /**
     * @method constructor
     * @param elementRef [description]
     */
    function SidebarLeftToggleDirective(elementRef) {
        this.elementRef = elementRef;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mkMenuToggle'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidebarLeftToggleDirective.prototype, "item", void 0);
    SidebarLeftToggleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[mkMenuToggle]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SidebarLeftToggleDirective);
    return SidebarLeftToggleDirective;
}());



/***/ }),

/***/ "./app/components/lib/layout/sidebar-left/sidebar-left.module.ts":
/*!***********************************************************************!*\
  !*** ./app/components/lib/layout/sidebar-left/sidebar-left.module.ts ***!
  \***********************************************************************/
/*! exports provided: SidebarLeftModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarLeftModule", function() { return SidebarLeftModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _animations_animations_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../animations/animations.module */ "./app/components/lib/animations/animations.module.ts");
/* harmony import */ var _sidebar_left_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar-left.directive */ "./app/components/lib/layout/sidebar-left/sidebar-left.directive.ts");
/* harmony import */ var _sidebar_left_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar-left.component */ "./app/components/lib/layout/sidebar-left/sidebar-left.component.ts");







var SidebarLeftModule = /** @class */ (function () {
    function SidebarLeftModule() {
    }
    SidebarLeftModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _animations_animations_module__WEBPACK_IMPORTED_MODULE_4__["AnimationsModule"]],
            exports: [_sidebar_left_component__WEBPACK_IMPORTED_MODULE_6__["SidebarLeftComponent"]],
            declarations: [_sidebar_left_directive__WEBPACK_IMPORTED_MODULE_5__["SidebarLeftToggleDirective"], _sidebar_left_component__WEBPACK_IMPORTED_MODULE_6__["SidebarLeftComponent"]]
        })
    ], SidebarLeftModule);
    return SidebarLeftModule;
}());



/***/ }),

/***/ "./app/components/lib/layout/sidebar-right/sidebar-right.component.css":
/*!*****************************************************************************!*\
  !*** ./app/components/lib/layout/sidebar-right/sidebar-right.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  height: 100%;\n}\n\n.control-sidebar-bg {\n  z-index: -1;\n}\n\n/deep/ .tab-content {\n  padding: 10px 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY29tcG9uZW50cy9saWIvbGF5b3V0L3NpZGViYXItcmlnaHQvc2lkZWJhci1yaWdodC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbGliL2xheW91dC9zaWRlYmFyLXJpZ2h0L3NpZGViYXItcmlnaHQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRyb2wtc2lkZWJhci1iZyB7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4vZGVlcC8gLnRhYi1jb250ZW50IHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./app/components/lib/layout/sidebar-right/sidebar-right.component.html":
/*!******************************************************************************!*\
  !*** ./app/components/lib/layout/sidebar-right/sidebar-right.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #sidebarContentElement class=\"control-sidebar-content\">\n  <ng-content></ng-content>\n</div>\n<div class=\"control-sidebar-bg\"></div>\n"

/***/ }),

/***/ "./app/components/lib/layout/sidebar-right/sidebar-right.component.ts":
/*!****************************************************************************!*\
  !*** ./app/components/lib/layout/sidebar-right/sidebar-right.component.ts ***!
  \****************************************************************************/
/*! exports provided: SidebarRightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarRightComponent", function() { return SidebarRightComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _wrapper_wrapper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../wrapper/wrapper.service */ "./app/components/lib/layout/wrapper/wrapper.service.ts");
/* harmony import */ var _layout_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout.store */ "./app/components/lib/layout/layout.store.ts");
/* harmony import */ var _sidebar_right_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar-right.service */ "./app/components/lib/layout/sidebar-right/sidebar-right.service.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers */ "./app/components/lib/helpers.ts");






var SidebarRightComponent = /** @class */ (function () {
    function SidebarRightComponent(elementRef, renderer2, layoutStore, sidebarRightService, wrapperService) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.layoutStore = layoutStore;
        this.sidebarRightService = sidebarRightService;
        this.wrapperService = wrapperService;
        this.listeners = [];
        this.subscriptions = [];
    }
    /**
     * @method ngOnInit
     */
    SidebarRightComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.renderer2.addClass(this.elementRef.nativeElement, 'control-sidebar');
        this.subscriptions.push(this.layoutStore.isSidebarRightCollapsed.subscribe(function (value) {
            _this.isSidebarRightCollapsed = value;
            if (!value) {
                _this.renderer2.addClass(_this.elementRef.nativeElement, 'control-sidebar-open');
                if (!_this.isSidebarRightOverContent) {
                    _this.renderer2.addClass(_this.wrapperService.wrapperElementRef.nativeElement, 'control-sidebar-open');
                }
            }
            else {
                _this.renderer2.removeClass(_this.elementRef.nativeElement, 'control-sidebar-open');
                if (!_this.isSidebarRightOverContent) {
                    _this.renderer2.removeClass(_this.wrapperService.wrapperElementRef.nativeElement, 'control-sidebar-open');
                }
            }
        }));
        this.subscriptions.push(this.layoutStore.isSidebarRightOverContent.subscribe(function (value) {
            _this.isSidebarRightOverContent = value;
            if (!_this.isSidebarRightCollapsed) {
                if (value) {
                    _this.renderer2.removeClass(_this.wrapperService.wrapperElementRef.nativeElement, 'control-sidebar-open');
                }
                else {
                    _this.renderer2.addClass(_this.wrapperService.wrapperElementRef.nativeElement, 'control-sidebar-open');
                }
            }
        }));
        this.subscriptions.push(this.layoutStore.sidebarRightSkin.subscribe(function (value) {
            if (_this.skin !== value) {
                _this.renderer2.removeClass(_this.elementRef.nativeElement, "control-sidebar-" + _this.skin);
            }
            _this.skin = value;
            _this.renderer2.addClass(_this.elementRef.nativeElement, "control-sidebar-" + value);
        }));
    };
    /**
     * @method ngAfterViewInit
     */
    SidebarRightComponent.prototype.ngAfterViewInit = function () {
        this.sidebarRightService.elementRef = this.sidebarContentElement;
    };
    /**
     * @method ngOnDestroy
     */
    SidebarRightComponent.prototype.ngOnDestroy = function () {
        this.listeners = Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["removeListeners"])(this.listeners);
        this.subscriptions = Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["removeSubscriptions"])(this.subscriptions);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidebarContentElement'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SidebarRightComponent.prototype, "sidebarContentElement", void 0);
    SidebarRightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mk-layout-sidebar-right',
            template: __webpack_require__(/*! ./sidebar-right.component.html */ "./app/components/lib/layout/sidebar-right/sidebar-right.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./sidebar-right.component.css */ "./app/components/lib/layout/sidebar-right/sidebar-right.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _layout_store__WEBPACK_IMPORTED_MODULE_3__["LayoutStore"],
            _sidebar_right_service__WEBPACK_IMPORTED_MODULE_4__["SidebarRightService"],
            _wrapper_wrapper_service__WEBPACK_IMPORTED_MODULE_2__["WrapperService"]])
    ], SidebarRightComponent);
    return SidebarRightComponent;
}());



/***/ }),

/***/ "./app/components/lib/layout/sidebar-right/sidebar-right.module.ts":
/*!*************************************************************************!*\
  !*** ./app/components/lib/layout/sidebar-right/sidebar-right.module.ts ***!
  \*************************************************************************/
/*! exports provided: SidebarRightModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarRightModule", function() { return SidebarRightModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sidebar_right_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar-right.component */ "./app/components/lib/layout/sidebar-right/sidebar-right.component.ts");




var SidebarRightModule = /** @class */ (function () {
    function SidebarRightModule() {
    }
    SidebarRightModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [_sidebar_right_component__WEBPACK_IMPORTED_MODULE_3__["SidebarRightComponent"]],
            declarations: [_sidebar_right_component__WEBPACK_IMPORTED_MODULE_3__["SidebarRightComponent"]]
        })
    ], SidebarRightModule);
    return SidebarRightModule;
}());



/***/ }),

/***/ "./app/components/lib/layout/sidebar-right/sidebar-right.service.ts":
/*!**************************************************************************!*\
  !*** ./app/components/lib/layout/sidebar-right/sidebar-right.service.ts ***!
  \**************************************************************************/
/*! exports provided: SidebarRightService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarRightService", function() { return SidebarRightService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var SidebarRightService = /** @class */ (function () {
    function SidebarRightService() {
    }
    Object.defineProperty(SidebarRightService.prototype, "scrollHeight", {
        /**
         * [scrollHeight description]
         * @method scrollHeight
         * @return [description]
         */
        get: function () {
            return this.elementRef ? this.elementRef.nativeElement.scrollHeight : null;
        },
        enumerable: true,
        configurable: true
    });
    SidebarRightService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SidebarRightService);
    return SidebarRightService;
}());



/***/ }),

/***/ "./app/components/lib/layout/wrapper/wrapper.component.css":
/*!*****************************************************************!*\
  !*** ./app/components/lib/layout/wrapper/wrapper.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper.overflow {\n  overflow: hidden;\n}\n\n:host {\n  display: block;\n}\n\n:host /deep/ .sidebar-right-toggle > a {\n  color: #fff;\n}\n\n:host.sidebar-mini.sidebar-collapse /deep/ .treeview-menu.collapsing {\n  height: auto !important;\n}\n\n:host /deep/ .sidebar-right-toggle > a:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n\n:host.skin-black /deep/ .sidebar-right-toggle > a,\n:host.skin-black-light /deep/ .sidebar-right-toggle > a {\n  color: #333;\n  border-right-width: 0;\n}\n\n:host.skin-black /deep/ .sidebar-right-toggle > a:hover,\n:host.skin-black-light /deep/ .sidebar-right-toggle > a:hover {\n  background-color: #fff;\n  color: #999;\n}\n\n:host.skin-black /deep/ .sidebar-right-toggle > a {\n  border-left: 1px solid #eee;\n}\n\n:host.skin-black-light /deep/ .sidebar-right-toggle > a {\n  border-left: 1px solid #d2d6de;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY29tcG9uZW50cy9saWIvbGF5b3V0L3dyYXBwZXIvd3JhcHBlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEMiLCJmaWxlIjoiQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xpYi9sYXlvdXQvd3JhcHBlci93cmFwcGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlci5vdmVyZmxvdyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbjpob3N0IC9kZWVwLyAuc2lkZWJhci1yaWdodC10b2dnbGUgPiBhIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbjpob3N0LnNpZGViYXItbWluaS5zaWRlYmFyLWNvbGxhcHNlIC9kZWVwLyAudHJlZXZpZXctbWVudS5jb2xsYXBzaW5nIHtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IC9kZWVwLyAuc2lkZWJhci1yaWdodC10b2dnbGUgPiBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG46aG9zdC5za2luLWJsYWNrIC9kZWVwLyAuc2lkZWJhci1yaWdodC10b2dnbGUgPiBhLFxuOmhvc3Quc2tpbi1ibGFjay1saWdodCAvZGVlcC8gLnNpZGViYXItcmlnaHQtdG9nZ2xlID4gYSB7XG4gIGNvbG9yOiAjMzMzO1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDA7XG59XG5cbjpob3N0LnNraW4tYmxhY2sgL2RlZXAvIC5zaWRlYmFyLXJpZ2h0LXRvZ2dsZSA+IGE6aG92ZXIsXG46aG9zdC5za2luLWJsYWNrLWxpZ2h0IC9kZWVwLyAuc2lkZWJhci1yaWdodC10b2dnbGUgPiBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICM5OTk7XG59XG5cbjpob3N0LnNraW4tYmxhY2sgL2RlZXAvIC5zaWRlYmFyLXJpZ2h0LXRvZ2dsZSA+IGEge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlZWU7XG59XG5cbjpob3N0LnNraW4tYmxhY2stbGlnaHQgL2RlZXAvIC5zaWRlYmFyLXJpZ2h0LXRvZ2dsZSA+IGEge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkMmQ2ZGU7XG59XG4iXX0= */"

/***/ }),

/***/ "./app/components/lib/layout/wrapper/wrapper.component.html":
/*!******************************************************************!*\
  !*** ./app/components/lib/layout/wrapper/wrapper.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper overflow\" [ngClass]=\"classes\">\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "./app/components/lib/layout/wrapper/wrapper.component.ts":
/*!****************************************************************!*\
  !*** ./app/components/lib/layout/wrapper/wrapper.component.ts ***!
  \****************************************************************/
/*! exports provided: WrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapperComponent", function() { return WrapperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers */ "./app/components/lib/helpers.ts");
/* harmony import */ var _layout_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout.store */ "./app/components/lib/layout/layout.store.ts");
/* harmony import */ var _wrapper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wrapper.service */ "./app/components/lib/layout/wrapper/wrapper.service.ts");





var WrapperComponent = /** @class */ (function () {
    function WrapperComponent(elementRef, renderer2, layoutStore, wrapperService, ngZone) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.layoutStore = layoutStore;
        this.wrapperService = wrapperService;
        this.ngZone = ngZone;
        this.listeners = [];
        this.subscriptions = [];
    }
    /**
     * [ngOnInit description]
     * @method ngOnInit
     */
    WrapperComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.layoutStore.setWindowInnerHeight(window.innerHeight);
        this.layoutStore.setWindowInnerWidth(window.innerWidth);
        this.wrapperService.wrapperElementRef = this.elementRef;
        this.subscriptions.push(this.layoutStore.wrapperClasses.subscribe(function (value) {
            _this.classes = value ? value : null;
        }));
        this.ngZone.runOutsideAngular(function () {
            _this.listeners.push(_this.renderer2.listen('window', 'resize', Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["throttle"])(function () {
                _this.layoutStore.setWindowInnerHeight(window.innerHeight);
                _this.layoutStore.setWindowInnerWidth(window.innerWidth);
            }, 250)));
        });
        this.subscriptions.push(this.layoutStore.layout.subscribe(function (value) {
            value === 'fixed' ? _this.renderer2.addClass(_this.elementRef.nativeElement, 'fixed') :
                _this.renderer2.removeClass(_this.elementRef.nativeElement, 'fixed');
            value === 'boxed' ? _this.renderer2.addClass(_this.elementRef.nativeElement, 'layout-boxed') :
                _this.renderer2.removeClass(_this.elementRef.nativeElement, 'layout-boxed');
        }));
        this.subscriptions.push(this.layoutStore.skin.subscribe(function (value) {
            if (value) {
                if (_this.skin && _this.skin !== value) {
                    _this.renderer2.removeClass(_this.elementRef.nativeElement, "skin-" + _this.skin);
                }
                _this.skin = value;
                _this.renderer2.addClass(_this.elementRef.nativeElement, "skin-" + _this.skin);
            }
        }));
    };
    /**
     * @method ngOnDestroy
     */
    WrapperComponent.prototype.ngOnDestroy = function () {
        this.subscriptions = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["removeSubscriptions"])(this.subscriptions);
        this.listeners = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["removeListeners"])(this.listeners);
    };
    WrapperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mk-layout-wrapper',
            template: __webpack_require__(/*! ./wrapper.component.html */ "./app/components/lib/layout/wrapper/wrapper.component.html"),
            styles: [__webpack_require__(/*! ./wrapper.component.css */ "./app/components/lib/layout/wrapper/wrapper.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _layout_store__WEBPACK_IMPORTED_MODULE_3__["LayoutStore"],
            _wrapper_service__WEBPACK_IMPORTED_MODULE_4__["WrapperService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], WrapperComponent);
    return WrapperComponent;
}());



/***/ }),

/***/ "./app/components/lib/layout/wrapper/wrapper.module.ts":
/*!*************************************************************!*\
  !*** ./app/components/lib/layout/wrapper/wrapper.module.ts ***!
  \*************************************************************/
/*! exports provided: WrapperModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapperModule", function() { return WrapperModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _wrapper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wrapper.component */ "./app/components/lib/layout/wrapper/wrapper.component.ts");




var WrapperModule = /** @class */ (function () {
    function WrapperModule() {
    }
    WrapperModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["WrapperComponent"]],
            declarations: [_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["WrapperComponent"]]
        })
    ], WrapperModule);
    return WrapperModule;
}());



/***/ }),

/***/ "./app/components/lib/layout/wrapper/wrapper.service.ts":
/*!**************************************************************!*\
  !*** ./app/components/lib/layout/wrapper/wrapper.service.ts ***!
  \**************************************************************/
/*! exports provided: WrapperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapperService", function() { return WrapperService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var WrapperService = /** @class */ (function () {
    function WrapperService() {
    }
    WrapperService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], WrapperService);
    return WrapperService;
}());



/***/ }),

/***/ "./app/components/lib/services/class.service.ts":
/*!******************************************************!*\
  !*** ./app/components/lib/services/class.service.ts ***!
  \******************************************************/
/*! exports provided: ClassService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassService", function() { return ClassService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


/*
 *
 */
var ClassService = /** @class */ (function () {
    function ClassService(elementRef, renderer2) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.currentClasses = [];
    }
    ClassService.prototype.applyClasses = function (cssClasses) {
        var _this = this;
        if (typeof cssClasses === 'string') {
            cssClasses = cssClasses.split(' ');
        }
        // Remove only classes that are not in cssClasses
        var classesToRemove = this.currentClasses.filter(function (x) { return cssClasses.indexOf(x) === -1; });
        classesToRemove.forEach(function (cssClasse) {
            if (cssClasse) {
                _this.renderer2.removeClass(_this.elementRef.nativeElement, cssClasse);
            }
        });
        // Add only classes that are not in currentClasses
        var classesToAdd = cssClasses.filter(function (x) { return _this.currentClasses.indexOf(x) === -1; });
        classesToAdd.forEach(function (cssClasse) {
            if (cssClasse) {
                _this.renderer2.addClass(_this.elementRef.nativeElement, cssClasse);
            }
        });
        // Update current classes for futur updates
        this.currentClasses = cssClasses.slice();
    };
    ClassService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], ClassService);
    return ClassService;
}());



/***/ }),

/***/ "./app/components/lib/services/routing.service.ts":
/*!********************************************************!*\
  !*** ./app/components/lib/services/routing.service.ts ***!
  \********************************************************/
/*! exports provided: RoutingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingService", function() { return RoutingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");




/*
 *
 */
var RoutingService = /** @class */ (function () {
    /**
     * @method constructor
     * @param router [description]
     */
    function RoutingService(router) {
        this.router = router;
        this.onChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](undefined);
        this.events = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](undefined);
        this.init();
    }
    RoutingService_1 = RoutingService;
    /**
     * [createUrl description]
     * @method createUrl
     * @param route [description]
     * @return [description]
     */
    RoutingService.createUrl = function (route) {
        var url = route.url.map(function (urlSegment) { return urlSegment.toString(); }).join('/');
        return url;
    };
    /**
     * [isChildrenSelfRoute description]
     * @method isChildrenSelfRoute
     * @param route [description]
     * @return [description]
     */
    RoutingService.isChildrenSelfRoute = function (route) {
        route.routeConfig.children.forEach(function (child) {
            if (child.path === '' && (child.component || child.loadChildren)) {
                return true;
            }
        });
        return false;
    };
    /**
     * [createBreadcrumb description]
     * @method createBreadcrumb
     * @param route [description]
     * @param url   [description]
     * @return [description]
     */
    RoutingService.createBreadcrumb = function (route, url) {
        var isUrl = true;
        if (route.children.length !== 0 && route.firstChild.routeConfig.path) {
            if (url !== '/' && !route.routeConfig.loadChildren && !route.routeConfig.component && !RoutingService_1.isChildrenSelfRoute(route)) {
                isUrl = false;
            }
        }
        return {
            data: route.data,
            params: route.params,
            url: isUrl ? url : null
        };
    };
    /**
     * [init description]
     * @method init
     */
    RoutingService.prototype.init = function () {
        var _this = this;
        this.router.events.subscribe(function (routeEvent) {
            // https://github.com/angular/angular/issues/17473: event not fired anymore on load for routed component.
            if (routeEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.events.next(routeEvent);
                var route = _this.router.routerState.root.snapshot, tmpUrl = '', url = '', rootRoot = true;
                var paths = [];
                while (route.children.length) {
                    route = route.firstChild;
                    tmpUrl = "/" + RoutingService_1.createUrl(route);
                    if (route.outlet !== _angular_router__WEBPACK_IMPORTED_MODULE_2__["PRIMARY_OUTLET"] || (!route.routeConfig.path && !rootRoot)) {
                        continue;
                    }
                    rootRoot = false;
                    if (route.params || route.data) {
                        for (var key in route.params) {
                            if (!key) {
                                continue;
                            }
                            if (route.data['title']) {
                                route.data['title'] = route.data['title'].replace(":" + key, route.params[key]);
                                route.data['title'] = route.data['title'].replace(":" + key, route.params[key]);
                            }
                            if (route.data['breadcrumbs']) {
                                route.data['breadcrumbs'] = route.data['breadcrumbs'].replace(":" + key, route.params[key]);
                            }
                            if (route.data['description']) {
                                route.data['description'] = route.data['description'].replace(":" + key, route.params[key]);
                            }
                        }
                    }
                    if (tmpUrl === '/') {
                        paths.push(RoutingService_1.createBreadcrumb(route, tmpUrl));
                    }
                    else {
                        url += tmpUrl;
                        paths.push(RoutingService_1.createBreadcrumb(route, url));
                    }
                }
                _this.onChange.next(paths);
            }
        });
    };
    var RoutingService_1;
    RoutingService = RoutingService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RoutingService);
    return RoutingService;
}());



/***/ }),

/***/ "./app/components/lib/tabs/tabs.component.css":
/*!****************************************************!*\
  !*** ./app/components/lib/tabs/tabs.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-tabs-custom > .nav-tabs > li {\n  border-top-width: 0;\n}\n\n.nav-tabs-custom > .nav-tabs > li.active {\n  border-top-width: 3px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY29tcG9uZW50cy9saWIvdGFicy90YWJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoiQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xpYi90YWJzL3RhYnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtdGFicy1jdXN0b20gPiAubmF2LXRhYnMgPiBsaSB7XG4gIGJvcmRlci10b3Atd2lkdGg6IDA7XG59XG5cbi5uYXYtdGFicy1jdXN0b20gPiAubmF2LXRhYnMgPiBsaS5hY3RpdmUge1xuICBib3JkZXItdG9wLXdpZHRoOiAzcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./app/components/lib/tabs/tabs.component.html":
/*!*****************************************************!*\
  !*** ./app/components/lib/tabs/tabs.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"styleClass\">\n  <ul [ngClass]=\"navStyleClass\" [class.pull-right]=\"header || tabsHeaderComponent\">\n    <li *ngFor=\"let tab of tabs\" [class.active]=\"tab.isActive\" [mkColor]=\"tab.tabColor || tabsColor\" mkColorProperty=\"border-top-color\">\n      <a *ngIf=\"!tab.isDisabled\" [mkTabToggle]=\"tab\" href=\"#\">\n        {{tab.header}}\n        <ng-template *ngIf=\"!tab.header\" [ngTemplateOutlet]=\"tab.tabHeaderComponent?.templateRef\"></ng-template>\n      </a>\n      <ng-template [ngIf]=\"tab.isDisabled\">\n        {{tab.header}}\n        <ng-template *ngIf=\"!tab.header\" [ngTemplateOutlet]=\"tab.tabHeaderComponent.templateRef\"></ng-template>\n      </ng-template>\n    </li>\n    <li *ngIf=\"tabsHeaderComponent || header\" [ngClass]=\"headerStyleClass\">\n      {{header}}\n      <ng-template *ngIf=\"!header\" [ngTemplateOutlet]=\"tabsHeaderComponent.templateRef\"></ng-template>\n    </li>\n  </ul>\n  <div [ngClass]=\"contentStyleClass\">\n    <div *ngFor=\"let tab of tabs\" class=\"tab-pane\" [class.active]=\"tab.isActive\">\n      <ng-template [ngTemplateOutlet]=\"tab.contentTemplateRef\"></ng-template>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./app/components/lib/tabs/tabs.component.ts":
/*!***************************************************!*\
  !*** ./app/components/lib/tabs/tabs.component.ts ***!
  \***************************************************/
/*! exports provided: TabHeaderComponent, TabContentComponent, TabComponent, TabsHeaderComponent, TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabHeaderComponent", function() { return TabHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabContentComponent", function() { return TabContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsHeaderComponent", function() { return TabsHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tabs_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.directive */ "./app/components/lib/tabs/tabs.directive.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ "./app/components/lib/helpers.ts");




// @TODO Vertical tabs
/*
 *
 */
var TabHeaderComponent = /** @class */ (function () {
    function TabHeaderComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('templateRef'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], TabHeaderComponent.prototype, "templateRef", void 0);
    TabHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mk-tab-header',
            template: '<ng-template #templateRef><ng-content></ng-content></ng-template>',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        })
    ], TabHeaderComponent);
    return TabHeaderComponent;
}());

/*
 *
 */
var TabContentComponent = /** @class */ (function () {
    function TabContentComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('templateRef'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], TabContentComponent.prototype, "templateRef", void 0);
    TabContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mk-tab-content',
            template: '<ng-template #templateRef><ng-content></ng-content></ng-template>',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        })
    ], TabContentComponent);
    return TabContentComponent;
}());

/*
 *
 */
var TabComponent = /** @class */ (function () {
    function TabComponent() {
        this.isActive = false;
    }
    /**
     * @method ngOnInit
     */
    TabComponent.prototype.ngOnInit = function () {
        if (this.tabContentComponent) {
            this.contentTemplateRef = this.tabContentComponent.templateRef;
        }
        else {
            this.contentTemplateRef = this.templateRef;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TabComponent.prototype, "header", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], TabComponent.prototype, "isDisabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TabComponent.prototype, "tabColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('templateRef'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], TabComponent.prototype, "templateRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(TabHeaderComponent),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", TabHeaderComponent)
    ], TabComponent.prototype, "tabHeaderComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(TabContentComponent),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", TabContentComponent)
    ], TabComponent.prototype, "tabContentComponent", void 0);
    TabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mk-tab',
            template: '<ng-template #templateRef><ng-content></ng-content></ng-template>',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        })
    ], TabComponent);
    return TabComponent;
}());

/*
 *
 */
var TabsHeaderComponent = /** @class */ (function () {
    function TabsHeaderComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('templateRef'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], TabsHeaderComponent.prototype, "templateRef", void 0);
    TabsHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mk-tabs-header',
            template: '<ng-template #templateRef><ng-content></ng-content></ng-template>',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        })
    ], TabsHeaderComponent);
    return TabsHeaderComponent;
}());

/*
 *
 */
var TabsComponent = /** @class */ (function () {
    /**
     * @method constructor
     * @param changeDetectorRef [description]
     * @param ngZone            [description]
     * @param renderer2         [description]
     */
    function TabsComponent(changeDetectorRef, ngZone, renderer2) {
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
        this.renderer2 = renderer2;
        this.listeners = [];
        this.subscriptions = [];
        this.headerStyleClass = 'header pull-left';
        this.navStyleClass = 'nav nav-tabs';
        this.contentStyleClass = 'tab-content';
        this.styleClass = 'nav-tabs-custom';
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(TabsComponent.prototype, "activeTabIndex", {
        set: function (index) {
            this.activatedTabIndex = index;
            this.changeDetectorRef.detectChanges();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @method ngAfterViewInit
     */
    TabsComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        // Set tab index on load.
        this.setTabIndex();
        // Update tab index if tabs is updated.
        this.subscriptions.push(this.tabs.changes.subscribe(function () {
            _this.setTabIndex();
        }));
        // Open tab on load.
        this.openTabIndex();
    };
    /**
     * @method ngAfterViewInit
     */
    TabsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Set tab toggles on load.
        this.setTabsToggle();
        // Update tab toggles if tabs is updated.
        this.subscriptions.push(this.tabToggleDirectives.changes.subscribe(function () {
            _this.setTabsToggle();
        }));
    };
    /**
     * @method ngOnChanges
     * @param changes [description]
     */
    TabsComponent.prototype.ngOnChanges = function (changes) {
        if (changes.activeTabIndex) {
            this.openTabIndex();
        }
    };
    /**
     * @method ngOnDestroy
     */
    TabsComponent.prototype.ngOnDestroy = function () {
        Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["removeListeners"])(this.listeners);
        Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["removeSubscriptions"])(this.subscriptions);
    };
    /**
     * [toggleTab description]
     * @method toggleTab
     */
    TabsComponent.prototype.openTabIndex = function () {
        var _this = this;
        if (this.tabs) {
            this.tabs.forEach(function (tab) {
                if (_this.activatedTabIndex === tab.index || (_this.activatedTabIndex === undefined && tab.index === 0)) {
                    tab.isActive = true;
                    _this.onOpen.emit({ index: tab.index });
                    _this.changeDetectorRef.detectChanges();
                }
                else if (tab.isActive) {
                    tab.isActive = false;
                    _this.onClose.emit({ index: tab.index });
                    _this.changeDetectorRef.detectChanges();
                }
            });
        }
    };
    /**
     * [openTab description]
     * @method openTab
     * @param event     [description]
     * @param tabToOpen [description]
     */
    TabsComponent.prototype.openTab = function (event, tabToOpen) {
        var _this = this;
        event.preventDefault();
        tabToOpen.isActive = true;
        this.onOpen.emit({ event: event, index: tabToOpen.index });
        this.tabs.forEach(function (tab) {
            if (tab.isActive && tabToOpen !== tab) {
                tab.isActive = false;
                _this.onClose.emit({ event: event, index: tab.index });
            }
        });
    };
    /**
     * [setTabIndex description]
     * @method setTabIndex
     */
    TabsComponent.prototype.setTabIndex = function () {
        this.tabs.forEach(function (tab, index) {
            tab.index = index;
        });
        this.changeDetectorRef.detectChanges();
    };
    /**
     * [setTabsToggle description]
     * @method setTabsToggle
     */
    TabsComponent.prototype.setTabsToggle = function () {
        var _this = this;
        this.listeners = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["removeListeners"])(this.listeners);
        this.ngZone.runOutsideAngular(function () {
            _this.tabToggleDirectives.forEach(function (tabToggle) {
                _this.listeners.push(_this.renderer2.listen(tabToggle.elementRef.nativeElement, 'click', function (event) {
                    _this.openTab(event, tabToggle.tabComponent);
                    _this.changeDetectorRef.detectChanges();
                }));
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], TabsComponent.prototype, "activeTabIndex", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TabsComponent.prototype, "header", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TabsComponent.prototype, "headerStyleClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TabsComponent.prototype, "navStyleClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TabsComponent.prototype, "contentStyleClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TabsComponent.prototype, "styleClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TabsComponent.prototype, "tabsColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TabsComponent.prototype, "onClose", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TabsComponent.prototype, "onOpen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(TabsHeaderComponent),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", TabsHeaderComponent)
    ], TabsComponent.prototype, "tabsHeaderComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(TabComponent),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], TabsComponent.prototype, "tabs", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_tabs_directive__WEBPACK_IMPORTED_MODULE_2__["TabToggleDirective"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], TabsComponent.prototype, "tabToggleDirectives", void 0);
    TabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mk-tabs',
            template: __webpack_require__(/*! ./tabs.component.html */ "./app/components/lib/tabs/tabs.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./tabs.component.css */ "./app/components/lib/tabs/tabs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./app/components/lib/tabs/tabs.directive.ts":
/*!***************************************************!*\
  !*** ./app/components/lib/tabs/tabs.directive.ts ***!
  \***************************************************/
/*! exports provided: TabToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabToggleDirective", function() { return TabToggleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


/*
 *
 */
var TabToggleDirective = /** @class */ (function () {
    /**
     * @method constructor
     * @param elementRef [description]
     */
    function TabToggleDirective(elementRef) {
        this.elementRef = elementRef;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mkTabToggle'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TabToggleDirective.prototype, "tabComponent", void 0);
    TabToggleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[mkTabToggle]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], TabToggleDirective);
    return TabToggleDirective;
}());



/***/ }),

/***/ "./app/components/lib/tabs/tabs.module.ts":
/*!************************************************!*\
  !*** ./app/components/lib/tabs/tabs.module.ts ***!
  \************************************************/
/*! exports provided: TabsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsModule", function() { return TabsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _color_color_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../color/color.module */ "./app/components/lib/color/color.module.ts");
/* harmony import */ var _tabs_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs.directive */ "./app/components/lib/tabs/tabs.directive.ts");
/* harmony import */ var _tabs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.component */ "./app/components/lib/tabs/tabs.component.ts");






var TabsModule = /** @class */ (function () {
    function TabsModule() {
    }
    TabsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _color_color_module__WEBPACK_IMPORTED_MODULE_3__["ColorModule"]],
            exports: [_tabs_component__WEBPACK_IMPORTED_MODULE_5__["TabsComponent"], _tabs_component__WEBPACK_IMPORTED_MODULE_5__["TabsHeaderComponent"], _tabs_component__WEBPACK_IMPORTED_MODULE_5__["TabComponent"], _tabs_component__WEBPACK_IMPORTED_MODULE_5__["TabHeaderComponent"], _tabs_component__WEBPACK_IMPORTED_MODULE_5__["TabContentComponent"]],
            declarations: [_tabs_directive__WEBPACK_IMPORTED_MODULE_4__["TabToggleDirective"], _tabs_component__WEBPACK_IMPORTED_MODULE_5__["TabsComponent"], _tabs_component__WEBPACK_IMPORTED_MODULE_5__["TabsHeaderComponent"], _tabs_component__WEBPACK_IMPORTED_MODULE_5__["TabComponent"], _tabs_component__WEBPACK_IMPORTED_MODULE_5__["TabHeaderComponent"], _tabs_component__WEBPACK_IMPORTED_MODULE_5__["TabContentComponent"]]
        })
    ], TabsModule);
    return TabsModule;
}());



/***/ }),

/***/ "./app/core/core.module.ts":
/*!*********************************!*\
  !*** ./app/core/core.module.ts ***!
  \*********************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/index */ "./app/components/index.ts");
/* harmony import */ var _header_inner_header_inner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header-inner/header-inner.component */ "./app/core/header-inner/header-inner.component.ts");
/* harmony import */ var _sidebar_left_inner_sidebar_left_inner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar-left-inner/sidebar-left-inner.component */ "./app/core/sidebar-left-inner/sidebar-left-inner.component.ts");
/* harmony import */ var _sidebar_right_inner_sidebar_right_inner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidebar-right-inner/sidebar-right-inner.component */ "./app/core/sidebar-right-inner/sidebar-right-inner.component.ts");









var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _components_index__WEBPACK_IMPORTED_MODULE_5__["DropdownModule"],
                _components_index__WEBPACK_IMPORTED_MODULE_5__["TabsModule"],
                _components_index__WEBPACK_IMPORTED_MODULE_5__["BoxModule"]
            ],
            declarations: [_header_inner_header_inner_component__WEBPACK_IMPORTED_MODULE_6__["HeaderInnerComponent"], _sidebar_left_inner_sidebar_left_inner_component__WEBPACK_IMPORTED_MODULE_7__["SidebarLeftInnerComponent"], _sidebar_right_inner_sidebar_right_inner_component__WEBPACK_IMPORTED_MODULE_8__["SidebarRightInnerComponent"]],
            exports: [_components_index__WEBPACK_IMPORTED_MODULE_5__["BoxModule"], _components_index__WEBPACK_IMPORTED_MODULE_5__["TabsModule"], _header_inner_header_inner_component__WEBPACK_IMPORTED_MODULE_6__["HeaderInnerComponent"], _sidebar_left_inner_sidebar_left_inner_component__WEBPACK_IMPORTED_MODULE_7__["SidebarLeftInnerComponent"], _sidebar_right_inner_sidebar_right_inner_component__WEBPACK_IMPORTED_MODULE_8__["SidebarRightInnerComponent"]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./app/core/header-inner/header-inner.component.html":
/*!***********************************************************!*\
  !*** ./app/core/header-inner/header-inner.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-custom-menu\">\n  <ul class=\"nav navbar-nav\">\n    <!-- Messages: style can be found in dropdown.less -->\n    <li mk-dropdown type=\"list\" [isWrapper]=\"false\" class=\"messages-menu\">\n      <mk-dropdown-toggle>\n        <a #toggleElement>\n          <i class=\"fa fa-envelope-o\"></i>\n          <span class=\"label label-success\">4</span>\n        </a>\n      </mk-dropdown-toggle>\n      <mk-dropdown-menu>\n        <li class=\"header\">You have 4 messages</li>\n        <li>\n          <div class=\"slimScrollDiv\" style=\"position: relative; overflow: hidden; width: auto; height: 200px;\"><ul class=\"menu\" style=\"overflow: hidden; width: 100%; height: 200px;\">\n            <li>\n              <a href=\"#\">\n                <div class=\"pull-left\">\n                  <img src=\"assets/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n                </div>\n                <h4>\n                  Support Team\n                  <small><i class=\"fa fa-clock-o\"></i> 5 mins</small>\n                </h4>\n                <p>Why not buy a new awesome theme?</p>\n              </a>\n            </li>\n            <li>\n              <a href=\"#\">\n                <div class=\"pull-left\">\n                  <img src=\"assets/img/user3-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                </div>\n                <h4>\n                  AdminLTE Design Team\n                  <small><i class=\"fa fa-clock-o\"></i> 2 hours</small>\n                </h4>\n                <p>Why not buy a new awesome theme?</p>\n              </a>\n            </li>\n            <li>\n              <a href=\"#\">\n                <div class=\"pull-left\">\n                  <img src=\"assets/img/user4-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                </div>\n                <h4>\n                  Developers\n                  <small><i class=\"fa fa-clock-o\"></i> Today</small>\n                </h4>\n                <p>Why not buy a new awesome theme?</p>\n              </a>\n            </li>\n            <li>\n              <a href=\"#\">\n                <div class=\"pull-left\">\n                  <img src=\"assets/img/user3-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                </div>\n                <h4>\n                  Sales Department\n                  <small><i class=\"fa fa-clock-o\"></i> Yesterday</small>\n                </h4>\n                <p>Why not buy a new awesome theme?</p>\n              </a>\n            </li>\n            <li>\n              <a href=\"#\">\n                <div class=\"pull-left\">\n                  <img src=\"assets/img/user4-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                </div>\n                <h4>\n                  Reviewers\n                  <small><i class=\"fa fa-clock-o\"></i> 2 days</small>\n                </h4>\n                <p>Why not buy a new awesome theme?</p>\n              </a>\n            </li>\n          </ul><div class=\"slimScrollBar\" style=\"width: 3px; position: absolute; top: 0; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px; background: rgb(0, 0, 0);\"></div><div class=\"slimScrollRail\" style=\"width: 3px; height: 100%; position: absolute; top: 0; display: none; border-radius: 7px; opacity: 0.2; z-index: 90; right: 1px; background: rgb(51, 51, 51);\"></div></div>\n        </li>\n        <li class=\"footer\"><a href=\"#\">See All Messages</a></li>\n      </mk-dropdown-menu>\n    </li>\n\n    <li mk-dropdown type=\"list\" [isWrapper]=\"false\" class=\"notifications-menu\">\n      <mk-dropdown-toggle>\n        <a #toggleElement>\n          <i class=\"fa fa-bell-o\"></i>\n          <span class=\"label label-warning\">10</span>\n        </a>\n      </mk-dropdown-toggle>\n      <mk-dropdown-menu>\n        <li class=\"header\">You have 10 notifications</li>\n        <li>\n          <div class=\"slimScrollDiv\" style=\"position: relative; overflow: hidden; width: auto; height: 200px;\"><ul class=\"menu\" style=\"overflow: hidden; width: 100%; height: 200px;\">\n            <li>\n              <a href=\"#\">\n                <i class=\"fa fa-users text-aqua\"></i> 5 new members joined today\n              </a>\n            </li>\n            <li>\n              <a href=\"#\">\n                <i class=\"fa fa-warning text-yellow\"></i> Very long description here that may not fit into the\n                page and may cause design problems\n              </a>\n            </li>\n            <li>\n              <a href=\"#\">\n                <i class=\"fa fa-users text-red\"></i> 5 new members joined\n              </a>\n            </li>\n            <li>\n              <a href=\"#\">\n                <i class=\"fa fa-shopping-cart text-green\"></i> 25 sales made\n              </a>\n            </li>\n            <li>\n              <a href=\"#\">\n                <i class=\"fa fa-user text-light-blue\"></i> You changed your username\n              </a>\n            </li>\n          </ul><div class=\"slimScrollBar\" style=\"width: 3px; position: absolute; top: 0; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px; background: rgb(0, 0, 0);\"></div><div class=\"slimScrollRail\" style=\"width: 3px; height: 100%; position: absolute; top: 0; display: none; border-radius: 7px; opacity: 0.2; z-index: 90; right: 1px; background: rgb(51, 51, 51);\"></div></div>\n        </li>\n        <li class=\"footer\"><a href=\"#\">View all</a></li>\n      </mk-dropdown-menu>\n    </li>\n\n    <li mk-dropdown type=\"list\" [isWrapper]=\"false\" class=\"tasks-menu\">\n      <mk-dropdown-toggle>\n        <a #toggleElement>\n          <i class=\"fa fa-flag-o\"></i>\n          <span class=\"label label-danger\">9</span>\n        </a>\n      </mk-dropdown-toggle>\n      <mk-dropdown-menu>\n        <li class=\"header\">You have 9 tasks</li>\n        <li>\n          <div class=\"slimScrollDiv\" style=\"position: relative; overflow: hidden; width: auto; height: 200px;\"><ul class=\"menu\" style=\"overflow: hidden; width: 100%; height: 200px;\">\n            <li>\n              <a href=\"#\">\n                <h3>\n                  Design some buttons\n                  <small class=\"pull-right\">20%</small>\n                </h3>\n                <div class=\"progress xs\">\n                  <div class=\"progress-bar progress-bar-aqua\" style=\"width: 20%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                    <span class=\"sr-only\">20% Complete</span>\n                  </div>\n                </div>\n              </a>\n            </li>\n\n            <li>\n              <a href=\"#\">\n                <h3>\n                  Create a nice theme\n                  <small class=\"pull-right\">40%</small>\n                </h3>\n                <div class=\"progress xs\">\n                  <div class=\"progress-bar progress-bar-green\" style=\"width: 40%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                    <span class=\"sr-only\">40% Complete</span>\n                  </div>\n                </div>\n              </a>\n            </li>\n            <li>\n              <a href=\"#\">\n                <h3>\n                  Some task I need to do\n                  <small class=\"pull-right\">60%</small>\n                </h3>\n                <div class=\"progress xs\">\n                  <div class=\"progress-bar progress-bar-red\" style=\"width: 60%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                    <span class=\"sr-only\">60% Complete</span>\n                  </div>\n                </div>\n              </a>\n            </li>\n            <li>\n              <a href=\"#\">\n                <h3>\n                  Make beautiful transitions\n                  <small class=\"pull-right\">80%</small>\n                </h3>\n                <div class=\"progress xs\">\n                  <div class=\"progress-bar progress-bar-yellow\" style=\"width: 80%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                    <span class=\"sr-only\">80% Complete</span>\n                  </div>\n                </div>\n              </a>\n            </li>\n          </ul><div class=\"slimScrollBar\" style=\"width: 3px; position: absolute; top: 0; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px; background: rgb(0, 0, 0);\"></div><div class=\"slimScrollRail\" style=\"width: 3px; height: 100%; position: absolute; top: 0; display: none; border-radius: 7px; opacity: 0.2; z-index: 90; right: 1px; background: rgb(51, 51, 51);\"></div></div>\n        </li>\n        <li class=\"footer\">\n          <a href=\"#\">View all tasks</a>\n        </li>\n      </mk-dropdown-menu>\n    </li>\n    <li mk-dropdown type=\"list\" [isWrapper]=\"false\" class=\"user user-menu\">\n      <mk-dropdown-toggle>\n        <a #toggleElement>\n          <img src=\"assets/img/user2-160x160.jpg\" class=\"user-image\" alt=\"User Image\">\n          <span class=\"hidden-xs\">Alexander Pierce</span>\n        </a>\n      </mk-dropdown-toggle>\n      <mk-dropdown-menu>\n        <li class=\"user-header\">\n          <img src=\"assets/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n\n          <p>\n            Alexander Pierce - Web Developer\n            <small>Member since Nov. 2012</small>\n          </p>\n        </li>\n        <li class=\"user-body\">\n          <div class=\"row\">\n            <div class=\"col-xs-4 text-center\">\n              <a href=\"#\">Followers</a>\n            </div>\n            <div class=\"col-xs-4 text-center\">\n              <a href=\"#\">Sales</a>\n            </div>\n            <div class=\"col-xs-4 text-center\">\n              <a href=\"#\">Friends</a>\n            </div>\n          </div>\n        </li>\n        <li class=\"user-footer\">\n          <div class=\"pull-left\">\n            <a href=\"#\" class=\"btn btn-default btn-flat\">Profile</a>\n          </div>\n          <div class=\"pull-right\">\n            <a href=\"#\" class=\"btn btn-default btn-flat\">Sign out</a>\n          </div>\n        </li>\n      </mk-dropdown-menu>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./app/core/header-inner/header-inner.component.ts":
/*!*********************************************************!*\
  !*** ./app/core/header-inner/header-inner.component.ts ***!
  \*********************************************************/
/*! exports provided: HeaderInnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderInnerComponent", function() { return HeaderInnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var HeaderInnerComponent = /** @class */ (function () {
    function HeaderInnerComponent() {
    }
    HeaderInnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header-inner',
            template: __webpack_require__(/*! ./header-inner.component.html */ "./app/core/header-inner/header-inner.component.html")
        })
    ], HeaderInnerComponent);
    return HeaderInnerComponent;
}());



/***/ }),

/***/ "./app/core/sidebar-left-inner/sidebar-left-inner.component.html":
/*!***********************************************************************!*\
  !*** ./app/core/sidebar-left-inner/sidebar-left-inner.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-panel\">\n  <div class=\"pull-left image\">\n    <img src=\"assets/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n  </div>\n  <div class=\"pull-left info\">\n    <p>Alexander Pierce</p>\n    <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online</a>\n  </div>\n</div>\n<form action=\"#\" method=\"get\" class=\"sidebar-form\">\n  <div class=\"input-group\">\n    <input type=\"text\" name=\"q\" class=\"form-control\" placeholder=\"Search...\">\n    <span class=\"input-group-btn\">\n      <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\"><i class=\"fa fa-search\"></i>\n      </button>\n    </span>\n  </div>\n</form>\n"

/***/ }),

/***/ "./app/core/sidebar-left-inner/sidebar-left-inner.component.ts":
/*!*********************************************************************!*\
  !*** ./app/core/sidebar-left-inner/sidebar-left-inner.component.ts ***!
  \*********************************************************************/
/*! exports provided: SidebarLeftInnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarLeftInnerComponent", function() { return SidebarLeftInnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var SidebarLeftInnerComponent = /** @class */ (function () {
    function SidebarLeftInnerComponent() {
    }
    SidebarLeftInnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar-left-inner',
            template: __webpack_require__(/*! ./sidebar-left-inner.component.html */ "./app/core/sidebar-left-inner/sidebar-left-inner.component.html")
        })
    ], SidebarLeftInnerComponent);
    return SidebarLeftInnerComponent;
}());



/***/ }),

/***/ "./app/core/sidebar-right-inner/sidebar-right-inner.component.html":
/*!*************************************************************************!*\
  !*** ./app/core/sidebar-right-inner/sidebar-right-inner.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mk-tabs styleClass=\"sidebar-right-tabs-wrapper\" navStyleClass=\"nav nav-tabs nav-justified control-sidebar-tabs\">\n  <mk-tab>\n    <mk-tab-header>\n      <i class=\"fa fa-wrench\"></i>\n    </mk-tab-header>\n    <mk-tab-content>\n      <div>\n        <h4 class=\"control-sidebar-heading\">Layout Options</h4>\n        <div class=\"form-group\">\n          <label class=\"control-sidebar-subheading\"><input type=\"checkbox\" (change)=\"onLayoutChange($event)\" value=\"fixed\" [checked]=\"layout === 'fixed'\" class=\"pull-right\"> Fixed layout</label>\n          <p>Activate the fixed layout. You can't use fixed and boxed layouts together</p>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-sidebar-subheading\"><input type=\"checkbox\" (change)=\"onLayoutChange($event)\" value=\"boxed\" [checked]=\"layout === 'boxed'\" class=\"pull-right\"> Boxed Layout</label>\n          <p>Activate the boxed layout</p>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-sidebar-subheading\"><input type=\"checkbox\" [checked]=\"isSidebarLeftCollapsed\" #sidebarLeftCollapsedCheckbox (click)=\"layoutStore.sidebarLeftCollapsed(sidebarLeftCollapsedCheckbox.checked)\" class=\"pull-right\"> Toggle Sidebar</label>\n          <p>Toggle the left sidebar's state (open or collapse)</p>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-sidebar-subheading\"><input type=\"checkbox\" [disabled]=\"isSidebarLeftExpandOnOver\" [checked]=\"isSidebarLeftMini\" #sidebarLeftMini (click)=\"layoutStore.sidebarLeftMini(sidebarLeftMini.checked)\" class=\"pull-right\"> Sidebar Left Mini</label>\n          <p>Let the sidebar left collapsed visible</p>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-sidebar-subheading\"><input type=\"checkbox\" [disabled]=\"!isSidebarLeftMini\" [checked]=\"isSidebarLeftExpandOnOver && isSidebarLeftMini\" #sidebarLeftExpandOnOverCheckbox (click)=\"layoutStore.sidebarLeftExpandOnOver(sidebarLeftExpandOnOverCheckbox.checked)\" class=\"pull-right\"> Sidebar Expand on Hover</label>\n          <p>Let the sidebar mini expand on hover</p>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-sidebar-subheading\"><input type=\"checkbox\" #sidebarRightOverContentCheckbox (click)=\"layoutStore.sidebarRightOverContent(!sidebarRightOverContentCheckbox.checked)\" class=\"pull-right\"> Toggle Right Sidebar Slide</label>\n          <p>Toggle between slide over content and push content effects</p>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-sidebar-subheading\"><input type=\"checkbox\" #sidebarRightSkinCheckbox (click)=\"changeSidebarRightSkin(sidebarRightSkinCheckbox.checked)\" class=\"pull-right\"> Toggle Right Sidebar Skin</label>\n          <p>Toggle between dark and light skins for the right sidebar</p>\n        </div>\n        <h4 class=\"control-sidebar-heading\">Skins</h4>\n        <ul class=\"list-unstyled clearfix\">\n          <li style=\"float:left; width: 33.33333%; padding: 5px;\">\n            <a href=\"#\" (click)=\"changeSkin($event, 'blue')\" style=\"display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)\" class=\"clearfix full-opacity-hover\">\n              <div><span style=\"display:block; width: 20%; float: left; height: 7px; background: #367fa9;\"></span><span class=\"bg-light-blue\" style=\"display:block; width: 80%; float: left; height: 7px;\"></span></div>\n              <div><span style=\"display:block; width: 20%; float: left; height: 20px; background: #222d32;\"></span><span style=\"display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;\"></span></div>\n            </a>\n            <p class=\"text-center no-margin\">Blue</p>\n          </li>\n          <li style=\"float:left; width: 33.33333%; padding: 5px;\">\n            <a href=\"#\" (click)=\"changeSkin($event, 'black')\" style=\"display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)\" class=\"clearfix full-opacity-hover\">\n              <div style=\"box-shadow: 0 0 2px rgba(0,0,0,0.1)\" class=\"clearfix\"><span style=\"display:block; width: 20%; float: left; height: 7px; background: #fefefe;\"></span><span style=\"display:block; width: 80%; float: left; height: 7px; background: #fefefe;\"></span></div>\n              <div><span style=\"display:block; width: 20%; float: left; height: 20px; background: #222;\"></span><span style=\"display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;\"></span></div>\n            </a>\n            <p class=\"text-center no-margin\">Black</p>\n          </li>\n          <li style=\"float:left; width: 33.33333%; padding: 5px;\">\n            <a href=\"#\" (click)=\"changeSkin($event, 'purple')\" style=\"display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)\" class=\"clearfix full-opacity-hover\">\n              <div><span style=\"display:block; width: 20%; float: left; height: 7px;\" class=\"bg-purple-active\"></span><span class=\"bg-purple\" style=\"display:block; width: 80%; float: left; height: 7px;\"></span></div>\n              <div><span style=\"display:block; width: 20%; float: left; height: 20px; background: #222d32;\"></span><span style=\"display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;\"></span></div>\n            </a>\n            <p class=\"text-center no-margin\">Purple</p>\n          </li>\n          <li style=\"float:left; width: 33.33333%; padding: 5px;\">\n            <a href=\"#\" (click)=\"changeSkin($event, 'green')\" style=\"display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)\" class=\"clearfix full-opacity-hover\">\n              <div><span style=\"display:block; width: 20%; float: left; height: 7px;\" class=\"bg-green-active\"></span><span class=\"bg-green\" style=\"display:block; width: 80%; float: left; height: 7px;\"></span></div>\n              <div><span style=\"display:block; width: 20%; float: left; height: 20px; background: #222d32;\"></span><span style=\"display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;\"></span></div>\n            </a>\n            <p class=\"text-center no-margin\">Green</p>\n          </li>\n          <li style=\"float:left; width: 33.33333%; padding: 5px;\">\n            <a href=\"#\" (click)=\"changeSkin($event, 'red')\"  style=\"display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)\" class=\"clearfix full-opacity-hover\">\n              <div><span style=\"display:block; width: 20%; float: left; height: 7px;\" class=\"bg-red-active\"></span><span class=\"bg-red\" style=\"display:block; width: 80%; float: left; height: 7px;\"></span></div>\n              <div><span style=\"display:block; width: 20%; float: left; height: 20px; background: #222d32;\"></span><span style=\"display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;\"></span></div>\n            </a>\n            <p class=\"text-center no-margin\">Red</p>\n          </li>\n          <li style=\"float:left; width: 33.33333%; padding: 5px;\">\n            <a href=\"#\" (click)=\"changeSkin($event, 'yellow')\" style=\"display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)\" class=\"clearfix full-opacity-hover\">\n              <div><span style=\"display:block; width: 20%; float: left; height: 7px;\" class=\"bg-yellow-active\"></span><span class=\"bg-yellow\" style=\"display:block; width: 80%; float: left; height: 7px;\"></span></div>\n              <div><span style=\"display:block; width: 20%; float: left; height: 20px; background: #222d32;\"></span><span style=\"display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;\"></span></div>\n            </a>\n            <p class=\"text-center no-margin\">Yellow</p>\n          </li>\n          <li style=\"float:left; width: 33.33333%; padding: 5px;\">\n            <a href=\"#\" (click)=\"changeSkin($event, 'blue-light')\" style=\"display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)\" class=\"clearfix full-opacity-hover\">\n              <div><span style=\"display:block; width: 20%; float: left; height: 7px; background: #367fa9;\"></span><span class=\"bg-light-blue\" style=\"display:block; width: 80%; float: left; height: 7px;\"></span></div>\n              <div><span style=\"display:block; width: 20%; float: left; height: 20px; background: #f9fafc;\"></span><span style=\"display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;\"></span></div>\n            </a>\n            <p class=\"text-center no-margin\" style=\"font-size: 12px\">Blue Light</p>\n          </li>\n          <li style=\"float:left; width: 33.33333%; padding: 5px;\">\n            <a href=\"#\" (click)=\"changeSkin($event, 'black-light')\" style=\"display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)\" class=\"clearfix full-opacity-hover\">\n              <div style=\"box-shadow: 0 0 2px rgba(0,0,0,0.1)\" class=\"clearfix\"><span style=\"display:block; width: 20%; float: left; height: 7px; background: #fefefe;\"></span><span style=\"display:block; width: 80%; float: left; height: 7px; background: #fefefe;\"></span></div>\n              <div><span style=\"display:block; width: 20%; float: left; height: 20px; background: #f9fafc;\"></span><span style=\"display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;\"></span></div>\n            </a>\n            <p class=\"text-center no-margin\" style=\"font-size: 12px\">Black Light</p>\n          </li>\n          <li style=\"float:left; width: 33.33333%; padding: 5px;\">\n            <a href=\"#\" (click)=\"changeSkin($event, 'purple-light')\" style=\"display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)\" class=\"clearfix full-opacity-hover\">\n              <div><span style=\"display:block; width: 20%; float: left; height: 7px;\" class=\"bg-purple-active\"></span><span class=\"bg-purple\" style=\"display:block; width: 80%; float: left; height: 7px;\"></span></div>\n              <div><span style=\"display:block; width: 20%; float: left; height: 20px; background: #f9fafc;\"></span><span style=\"display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;\"></span></div>\n            </a>\n            <p class=\"text-center no-margin\" style=\"font-size: 12px\">Purple Light</p>\n          </li>\n          <li style=\"float:left; width: 33.33333%; padding: 5px;\">\n            <a href=\"#\" (click)=\"changeSkin($event, 'green-light')\" style=\"display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)\" class=\"clearfix full-opacity-hover\">\n              <div><span style=\"display:block; width: 20%; float: left; height: 7px;\" class=\"bg-green-active\"></span><span class=\"bg-green\" style=\"display:block; width: 80%; float: left; height: 7px;\"></span></div>\n              <div><span style=\"display:block; width: 20%; float: left; height: 20px; background: #f9fafc;\"></span><span style=\"display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;\"></span></div>\n            </a>\n            <p class=\"text-center no-margin\" style=\"font-size: 12px\">Green Light</p>\n          </li>\n          <li style=\"float:left; width: 33.33333%; padding: 5px;\">\n            <a href=\"#\" (click)=\"changeSkin($event, 'red-light')\" style=\"display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)\" class=\"clearfix full-opacity-hover\">\n              <div><span style=\"display:block; width: 20%; float: left; height: 7px;\" class=\"bg-red-active\"></span><span class=\"bg-red\" style=\"display:block; width: 80%; float: left; height: 7px;\"></span></div>\n              <div><span style=\"display:block; width: 20%; float: left; height: 20px; background: #f9fafc;\"></span><span style=\"display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;\"></span></div>\n            </a>\n            <p class=\"text-center no-margin\" style=\"font-size: 12px\">Red Light</p>\n          </li>\n          <li style=\"float:left; width: 33.33333%; padding: 5px;\">\n            <a href=\"#\" (click)=\"changeSkin($event, 'yellow-light')\" style=\"display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)\" class=\"clearfix full-opacity-hover\">\n              <div><span style=\"display:block; width: 20%; float: left; height: 7px;\" class=\"bg-yellow-active\"></span><span class=\"bg-yellow\" style=\"display:block; width: 80%; float: left; height: 7px;\"></span></div>\n              <div><span style=\"display:block; width: 20%; float: left; height: 20px; background: #f9fafc;\"></span><span style=\"display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;\"></span></div>\n            </a>\n            <p class=\"text-center no-margin\" style=\"font-size: 12px;\">Yellow Light</p>\n          </li>\n        </ul>\n      </div>\n    </mk-tab-content>\n  </mk-tab>\n  <mk-tab>\n    <mk-tab-header><i class=\"fa fa-home\"></i></mk-tab-header>\n    <mk-tab-content>\n      <h3 class=\"control-sidebar-heading\">Recent Activity</h3>\n      <ul class=\"control-sidebar-menu\">\n        <li>\n          <a href=\"javascript:void(0)\">\n            <i class=\"menu-icon fa fa-birthday-cake bg-red\"></i>\n\n            <div class=\"menu-info\">\n              <h4 class=\"control-sidebar-subheading\">Langdon's Birthday</h4>\n\n              <p>Will be 23 on April 24th</p>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\">\n            <i class=\"menu-icon fa fa-user bg-yellow\"></i>\n\n            <div class=\"menu-info\">\n              <h4 class=\"control-sidebar-subheading\">Frodo Updated His Profile</h4>\n\n              <p>New phone +1(800)555-1234</p>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\">\n            <i class=\"menu-icon fa fa-envelope-o bg-light-blue\"></i>\n\n            <div class=\"menu-info\">\n              <h4 class=\"control-sidebar-subheading\">Nora Joined Mailing List</h4>\n\n              <p>nora@example.com</p>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\">\n            <i class=\"menu-icon fa fa-file-code-o bg-green\"></i>\n\n            <div class=\"menu-info\">\n              <h4 class=\"control-sidebar-subheading\">Cron Job 254 Executed</h4>\n\n              <p>Execution time 5 seconds</p>\n            </div>\n          </a>\n        </li>\n      </ul>\n      <!-- /.control-sidebar-menu -->\n\n      <h3 class=\"control-sidebar-heading\">Tasks Progress</h3>\n      <ul class=\"control-sidebar-menu\">\n        <li>\n          <a href=\"javascript:void(0)\">\n            <h4 class=\"control-sidebar-subheading\">\n              Custom Template Design\n              <span class=\"label label-danger pull-right\">70%</span>\n            </h4>\n\n            <div class=\"progress progress-xxs\">\n              <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%\"></div>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\">\n            <h4 class=\"control-sidebar-subheading\">\n              Update Resume\n              <span class=\"label label-success pull-right\">95%</span>\n            </h4>\n\n            <div class=\"progress progress-xxs\">\n              <div class=\"progress-bar progress-bar-success\" style=\"width: 95%\"></div>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\">\n            <h4 class=\"control-sidebar-subheading\">\n              Laravel Integration\n              <span class=\"label label-warning pull-right\">50%</span>\n            </h4>\n\n            <div class=\"progress progress-xxs\">\n              <div class=\"progress-bar progress-bar-warning\" style=\"width: 50%\"></div>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\">\n            <h4 class=\"control-sidebar-subheading\">\n              Back End Framework\n              <span class=\"label label-primary pull-right\">68%</span>\n            </h4>\n\n            <div class=\"progress progress-xxs\">\n              <div class=\"progress-bar progress-bar-primary\" style=\"width: 68%\"></div>\n            </div>\n          </a>\n        </li>\n      </ul>\n      <!-- /.control-sidebar-menu -->\n    </mk-tab-content>\n  </mk-tab>\n  <mk-tab>\n    <mk-tab-header><i class=\"fa fa-gears\"></i></mk-tab-header>\n    <mk-tab-content>\n      <!-- Settings tab content -->\n      <div class=\"tab-pane\" id=\"control-sidebar-settings-tab\">\n        <form method=\"post\">\n          <h3 class=\"control-sidebar-heading\">General Settings</h3>\n\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Report panel usage\n              <input type=\"checkbox\" class=\"pull-right\" checked>\n            </label>\n\n            <p>\n              Some information about this general settings option\n            </p>\n          </div>\n          <!-- /.form-group -->\n\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Allow mail redirect\n              <input type=\"checkbox\" class=\"pull-right\" checked>\n            </label>\n\n            <p>\n              Other sets of options are available\n            </p>\n          </div>\n          <!-- /.form-group -->\n\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Expose author name in posts\n              <input type=\"checkbox\" class=\"pull-right\" checked>\n            </label>\n\n            <p>\n              Allow the user to show his name in blog posts\n            </p>\n          </div>\n          <!-- /.form-group -->\n\n          <h3 class=\"control-sidebar-heading\">Chat Settings</h3>\n\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Show me as online\n              <input type=\"checkbox\" class=\"pull-right\" checked>\n            </label>\n          </div>\n          <!-- /.form-group -->\n\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Turn off notifications\n              <input type=\"checkbox\" class=\"pull-right\">\n            </label>\n          </div>\n          <!-- /.form-group -->\n\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Delete chat history\n              <a href=\"javascript:void(0)\" class=\"text-red pull-right\"><i class=\"fa fa-trash-o\"></i></a>\n            </label>\n          </div>\n          <!-- /.form-group -->\n        </form>\n      </div>\n    </mk-tab-content>\n  </mk-tab>\n</mk-tabs>\n"

/***/ }),

/***/ "./app/core/sidebar-right-inner/sidebar-right-inner.component.ts":
/*!***********************************************************************!*\
  !*** ./app/core/sidebar-right-inner/sidebar-right-inner.component.ts ***!
  \***********************************************************************/
/*! exports provided: SidebarRightInnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarRightInnerComponent", function() { return SidebarRightInnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/index */ "./app/components/index.ts");



var SidebarRightInnerComponent = /** @class */ (function () {
    function SidebarRightInnerComponent(layoutStore, changeDetectorRef) {
        this.layoutStore = layoutStore;
        this.changeDetectorRef = changeDetectorRef;
        this.subscriptions = [];
    }
    /**
     * [ngOnInit description]
     * @method ngOnInit
     */
    SidebarRightInnerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.layoutStore.isSidebarLeftCollapsed.subscribe(function (value) {
            _this.isSidebarLeftCollapsed = value;
            _this.changeDetectorRef.detectChanges();
        }));
        this.subscriptions.push(this.layoutStore.isSidebarLeftExpandOnOver.subscribe(function (value) {
            _this.isSidebarLeftExpandOnOver = value;
            _this.changeDetectorRef.detectChanges();
        }));
        this.subscriptions.push(this.layoutStore.isSidebarLeftMini.subscribe(function (value) {
            _this.isSidebarLeftMini = value;
            _this.changeDetectorRef.detectChanges();
        }));
    };
    /**
     * @method ngOnDestroy
     */
    SidebarRightInnerComponent.prototype.ngOnDestroy = function () {
        this.removeSubscriptions();
    };
    /**
     * [removeListeners description]
     * @method removeListeners
     */
    SidebarRightInnerComponent.prototype.removeSubscriptions = function () {
        if (this.subscriptions) {
            this.subscriptions.forEach(function (subscription) {
                subscription.unsubscribe();
            });
        }
        this.subscriptions = [];
    };
    /**
     * [onLayoutChange description]
     * @method onLayoutChange
     * @param  {[type]}       event [description]
     */
    SidebarRightInnerComponent.prototype.onLayoutChange = function (event) {
        this.layout = event.target.checked ? event.target.getAttribute('value') : '';
        this.layoutStore.setLayout(this.layout);
    };
    /**
     * [changeSkin description]
     * @method changeSkin
     * @param  {[type]}   event [description]
     * @param  {string}   color [description]
     */
    SidebarRightInnerComponent.prototype.changeSkin = function (event, color) {
        event.preventDefault();
        this.layoutStore.setSkin(color);
    };
    /**
     * [changeSidebarRightSkin description]
     * @method changeSidebarRightSkin
     * @param  {boolean}              value [description]
     */
    SidebarRightInnerComponent.prototype.changeSidebarRightSkin = function (value) {
        if (value) {
            this.layoutStore.setSidebarRightSkin('light');
        }
        else {
            this.layoutStore.setSidebarRightSkin('dark');
        }
    };
    SidebarRightInnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar-right-inner',
            template: __webpack_require__(/*! ./sidebar-right-inner.component.html */ "./app/core/sidebar-right-inner/sidebar-right-inner.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_components_index__WEBPACK_IMPORTED_MODULE_2__["LayoutStore"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], SidebarRightInnerComponent);
    return SidebarRightInnerComponent;
}());



/***/ }),

/***/ "./app/helpers/url-serializer.ts":
/*!***************************************!*\
  !*** ./app/helpers/url-serializer.ts ***!
  \***************************************/
/*! exports provided: LowerCaseUrlSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LowerCaseUrlSerializer", function() { return LowerCaseUrlSerializer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");



var LowerCaseUrlSerializer = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LowerCaseUrlSerializer, _super);
    function LowerCaseUrlSerializer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LowerCaseUrlSerializer.prototype.parse = function (url) {
        // Optional Step: Do some stuff with the url if needed.
        // If you lower it in the optional step 
        // you don't need to use "toLowerCase" 
        // when you pass it down to the next function
        return _super.prototype.parse.call(this, url.toLowerCase());
    };
    LowerCaseUrlSerializer = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], LowerCaseUrlSerializer);
    return LowerCaseUrlSerializer;
}(_angular_router__WEBPACK_IMPORTED_MODULE_1__["DefaultUrlSerializer"]));



/***/ }),

/***/ "./app/home/home.component.css":
/*!*************************************!*\
  !*** ./app/home/home.component.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./app/home/home.component.html":
/*!**************************************!*\
  !*** ./app/home/home.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mk-box header=\"About Angular Admin LTE\" [isCollapsable]=\"false\" [isRemovable]=\"false\">\n  <p>Angular Admin LTE is an implementation of the Admin LTE theme. It comes with native angular components and directive and do not need JS dependencies. It provides a layout module witch comes with components for header, sidebar right & left, footer...</p>\n</mk-box>\n\n<mk-box header=\"Download\" [isCollapsable]=\"false\" [isRemovable]=\"false\">\n  <p>Angular Admin LTE is available at npm, if you have an existing application run the following command to download it to your project.</p>\n  <p>Angular Admin LTE is distributed in commonjs format, a module manager of your choice is required.</p>\n  <pre><code class=\"language-bash\">npm install angular-admin-lte --save</code></pre>\n</mk-box>\n\n<mk-box header=\"Import\" [isCollapsable]=\"false\" [isRemovable]=\"false\">\n  <p>UI components are configured as modules, once Angular Admin LTE is downloaded and configured, modules and apis can be imported from 'angular-loading-page' shorthand in your application code.</p>\n  <pre><code class=\"language-typescript\">import &#123; LayoutModule &#125; from './components/index';    //Loading layout module\nimport &#123; BoxModule &#125; from './components/index';       //Box component</code></pre>\n</mk-box>\n\n<mk-box header=\"Dependencies\" [isCollapsable]=\"false\" [isRemovable]=\"false\">\n  <p>Angular Admin LTE have no JS dependencies but still need Admin LTE and Bootstrap CSS. You can also use FontAwesome and Ionicons as it is used by default in Admin LTE.</p>\n  <pre><code class=\"language-typescript\">\"styles\": [\n  \"node_modules/bootstrap-css-only/css/bootstrap.min.css\",\n  \"node_modules/font-awesome/css/font-awesome.css\", // optional\n  \"node_modules/ionicons/css/ionicons.css\", // optional\n  \"node_modules/admin-lte-css/dist/css/AdminLTE.css\",\n  \"node_modules/admin-lte-css/dist/css/skins/_all-skins.css\"\n]</code></pre>\n</mk-box>\n"

/***/ }),

/***/ "./app/home/home.component.ts":
/*!************************************!*\
  !*** ./app/home/home.component.ts ***!
  \************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismjs */ "../node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_2__);



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    /**
     * @method ngAfterViewInit
     */
    HomeComponent.prototype.ngAfterViewInit = function () {
        prismjs__WEBPACK_IMPORTED_MODULE_2__["highlightAll"]();
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./app/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./environments/environment.ts":
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Trong Mac\Documents\My Files\Works\MyHRM\hrm\HRM.WebUI\ClientApp\main.ts */"./main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map