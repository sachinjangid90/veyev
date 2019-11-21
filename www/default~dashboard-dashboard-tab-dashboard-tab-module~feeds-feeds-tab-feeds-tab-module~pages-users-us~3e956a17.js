(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-tab-dashboard-tab-module~feeds-feeds-tab-feeds-tab-module~pages-users-us~3e956a17"],{

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons class=\"headerClass\" slot=\"start\">\n        <div [routerLink]=\"['/']\">\n          <ion-img src=\"assets/image/m-logo.png\"></ion-img>\n        </div>\n      </ion-buttons>\n      <div class=\"outlineDiv\">\n        <div class=\"inlineDiv\">\n          <ion-searchbar class=\"search\"></ion-searchbar>\n        </div>\n        <select class=\"ionDropdown\">\n          <option>Video</option>\n          <option>Image</option>\n          <option>Profile</option>\n        </select>\n      </div>\n      <ion-buttons slot=\"primary\" class=\"login\">\n        <div>\n           \n\n          <ion-img  [routerLink]=\"['/login']\"\n            src=\"assets/image/login.png\"\n          ></ion-img>\n        </div>\n      </ion-buttons>\n    </ion-toolbar>\n  \n    <section class=\"toolbarBg\">\n      <ion-grid>\n        <ion-row class=\"nenuIcon\">\n          <ion-col class=\"ion-text-center\">\n            <div>\n               \n              <ion-img  [routerLink]=\"['/feeds']\" routerLinkActive=\"active\" src=\"assets/image/rss.png\"></ion-img>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div>\n              <ion-img src=\"assets/image/notification.png\"></ion-img>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div class=\"dropImg\" >        \n              <div (click)=\"settingDropdown()\">\n                    <ion-icon name=\"arrow-dropdown\" slot=\"end\"></ion-icon>\n  \n                    <ion-img src=\"assets/image/settings.png\"></ion-img>\n                </div>\n              <!-- <select>\n                <option><ion-button class=\"firstOpt\"></ion-button></option> \n                <option (onClick)=\"changePassword()\"><ion-button   >Password</ion-button></option>\n                <option><ion-button  value=\"ar\">Logout</ion-button></option>\n              </select> -->\n              <ion-card class=\"dropDown\" [ngClass]=\"{dropDownCss: display}\">\n               \n                  \n                <ion-list [routerLink]=\"['/changePassword']\"  (click)=\"hiddenDiv()\">\n                  \n                  <ion-item>\n                      <ion-img src=\"assets/image/key.png\" slot=\"start\"></ion-img>\n                      <h6>Change Password</h6></ion-item>\n                </ion-list>\n                <ion-list (click)=\"hiddenDiv()\">\n                    \n                  <ion-item>\n                      <ion-img src=\"assets/image/logout.png\" slot=\"start\"></ion-img>\n                      <h6>Logout</h6></ion-item>\n                </ion-list>\n              </ion-card>\n             \n            </div>\n          </ion-col>\n          <ion-col>\n            <div>\n             \n              <ion-img  src=\"assets/image/user.png\"  [routerLink]=\"['/users/profile']\" routerLinkActive=\"active\"></ion-img>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </section>\n  </ion-header>"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  padding: 2px 0 4px 0 !important; }\n  ion-header ion-toolbar .login {\n    border: 1px solid #ff0000;\n    background: #d9544f;\n    height: 42px;\n    margin-right: 5px; }\n  ion-header ion-toolbar .login div ion-img {\n      width: 42px;\n      padding: 3px 7px 0; }\n  ion-header ion-toolbar .headerClass {\n    width: 38px; }\n  ion-header ion-searchbar {\n  --background:transparent!important;\n  padding: 0 !important; }\n  ion-header .ionDropdown {\n  border-left: 1px solid #ccc;\n  background: transparent;\n  float: right;\n  border: none;\n  margin-top: 11px; }\n  ion-header .ionDropdown:focus {\n    outline: none !important; }\n  .nenuIcon ion-col div ion-img {\n  width: 20px;\n  margin: 0 auto; }\n  .firstOpt {\n  display: none; }\n  .nenuIcon ion-col {\n  padding: 0; }\n  .toolbarBg {\n  background: #ecefec;\n  padding: 10px 0 5px 0; }\n  .outlineDiv {\n  --padding-start: 0px!important;\n  border: 1px solid #ccc;\n  margin: 0 7px 0 1px;\n  border-radius: 3px;\n  overflow: hidden; }\n  .inlineDiv {\n  width: calc(100% - 70px);\n  float: left; }\n  .sc-ion-searchbar-ios-h {\n  height: 40px; }\n  .sc-ion-searchbar-md {\n  padding-right: 0 !important; }\n  .dropImg {\n  width: 45px;\n  margin: 0 auto; }\n  .dropImg select {\n  background: transparent;\n  width: 21px;\n  float: right;\n  border: none; }\n  .dropImg select:focus {\n  outline: none; }\n  .dropImg ion-img {\n  float: left; }\n  .dropDown {\n  position: absolute;\n  padding: 2px;\n  z-index: 9;\n  width: 200px;\n  right: 10px;\n  top: 13px; }\n  .dropDown ion-list {\n  padding: 0; }\n  .dropDown ion-list ion-item ion-img {\n  margin-right: 5px;\n  width: 15px; }\n  .dropDownCss {\n  display: none; }\n  .dropDown ion-list h6 {\n  margin: 0; }\n  .active {\n  border-bottom: 2px solid #ff0000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvRDpcXHNhY2hpblxcdmV5ZXYvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsK0JBQTZCLEVBQUE7RUFGckM7SUFJWSx5QkFBeUI7SUFDekIsbUJBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUIsRUFBQTtFQVA3QjtNQVVvQixXQUFXO01BQ1gsa0JBQWtCLEVBQUE7RUFYdEM7SUFnQlksV0FBVyxFQUFBO0VBaEJ2QjtFQW9CUSxrQ0FBYTtFQUNULHFCQUFvQixFQUFBO0VBckJoQztFQXdCUSwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWUsRUFBQTtFQTVCdkI7SUE4Qlksd0JBQXVCLEVBQUE7RUFJbkM7RUFDSSxXQUFXO0VBQ1gsY0FBYSxFQUFBO0VBRWpCO0VBQ0ksYUFBYSxFQUFBO0VBRWpCO0VBQ0ksVUFBVSxFQUFBO0VBRWQ7RUFDSSxtQkFBbUI7RUFDbkIscUJBQW9CLEVBQUE7RUFFeEI7RUFDSSw4QkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7RUFFcEI7RUFDSSx3QkFBd0I7RUFDeEIsV0FBVyxFQUFBO0VBRWY7RUFDSSxZQUFZLEVBQUE7RUFFaEI7RUFDSSwyQkFBMEIsRUFBQTtFQUU5QjtFQUNJLFdBQVc7RUFDWCxjQUFjLEVBQUE7RUFHbEI7RUFDSSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZLEVBQUE7RUFFaEI7RUFDSSxhQUFhLEVBQUE7RUFFakI7RUFDSSxXQUFXLEVBQUE7RUFFZjtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0VBQ1gsU0FBUyxFQUFBO0VBRWI7RUFDTSxVQUFTLEVBQUE7RUFFZDtFQUNHLGlCQUFnQjtFQUNoQixXQUFXLEVBQUE7RUFFZDtFQUNJLGFBQWEsRUFBQTtFQUVsQjtFQUNJLFNBQVMsRUFBQTtFQUViO0VBQ0ksZ0NBQWdDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xuICAgIGlvbi10b29sYmFye1xuICAgICAgICBwYWRkaW5nOjJweCAwIDRweCAwIWltcG9ydGFudDtcbiAgICAgICAgLmxvZ2luIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjAwMDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiNkOTU0NGY7XG4gICAgICAgICAgICBoZWlnaHQ6IDQycHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIGRpdntcbiAgICAgICAgICAgICAgICBpb24taW1ne1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDJweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogM3B4IDdweCAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuaGVhZGVyQ2xhc3Mge1xuICAgICAgICAgICAgd2lkdGg6IDM4cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW9uLXNlYXJjaGJhcntcbiAgICAgICAgLS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50IWltcG9ydGFudDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuaW9uRHJvcGRvd257XG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2NjYztcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBtYXJnaW4tdG9wOjExcHg7XG4gICAgICAgICY6Zm9jdXN7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH0gIFxufVxuLm5lbnVJY29uIGlvbi1jb2wgZGl2IGlvbi1pbWcge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIG1hcmdpbjowIGF1dG87XG59XG4uZmlyc3RPcHR7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5uZW51SWNvbiBpb24tY29se1xuICAgIHBhZGRpbmc6IDA7XG59XG4udG9vbGJhckJne1xuICAgIGJhY2tncm91bmQ6ICNlY2VmZWM7XG4gICAgcGFkZGluZzoxMHB4IDAgNXB4IDA7XG59XG4ub3V0bGluZURpdntcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweCFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBtYXJnaW46IDAgN3B4IDAgMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmlubGluZURpdiB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDcwcHgpO1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuLnNjLWlvbi1zZWFyY2hiYXItaW9zLWgge1xuICAgIGhlaWdodDogNDBweDtcbn1cbi5zYy1pb24tc2VhcmNoYmFyLW1kIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwIWltcG9ydGFudDtcbn1cbi5kcm9wSW1nIHtcbiAgICB3aWR0aDogNDVweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAvLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kcm9wSW1nIHNlbGVjdHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB3aWR0aDogMjFweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgYm9yZGVyOiBub25lO1xufVxuLmRyb3BJbWcgc2VsZWN0OmZvY3Vze1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG4uZHJvcEltZyBpb24taW1ne1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuLmRyb3BEb3duIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIHotaW5kZXg6IDk7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHRvcDogMTNweDtcbn1cbi5kcm9wRG93biBpb24tbGlzdHtcbiAgICAgIHBhZGRpbmc6MDtcbiB9XG4gLmRyb3BEb3duIGlvbi1saXN0IGlvbi1pdGVtIGlvbi1pbWd7XG4gICAgbWFyZ2luLXJpZ2h0OjVweDtcbiAgICB3aWR0aDogMTVweDtcbn1cbiAuZHJvcERvd25Dc3N7XG4gICAgIGRpc3BsYXk6IG5vbmU7XG4gfVxuLmRyb3BEb3duIGlvbi1saXN0IGg2e1xuICAgIG1hcmdpbjogMDtcbn1cbi5hY3RpdmV7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZjAwMDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.display = true;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.settingDropdown = function () {
        this.display = !this.display;
    };
    HeaderComponent.prototype.hiddenDiv = function () {
        this.display = !this.display;
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/header/header.module.ts ***!
  \****************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]
            ],
            entryComponents: [],
            providers: [],
            declarations: [
                _header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ],
        })
    ], HeaderModule);
    return HeaderModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~dashboard-dashboard-tab-dashboard-tab-module~feeds-feeds-tab-feeds-tab-module~pages-users-us~3e956a17.js.map