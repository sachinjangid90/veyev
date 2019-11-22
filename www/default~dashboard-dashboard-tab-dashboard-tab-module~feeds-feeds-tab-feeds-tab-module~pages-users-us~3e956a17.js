(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-tab-dashboard-tab-module~feeds-feeds-tab-feeds-tab-module~pages-users-us~3e956a17"],{

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons class=\"headerClass\" slot=\"start\">\n        <div [routerLink]=\"['/']\">\n          <ion-img src=\"assets/image/m-logo.png\"></ion-img>\n        </div>\n      </ion-buttons>\n      <div class=\"outlineDiv\">\n        <div class=\"inlineDiv\">\n          <ion-searchbar class=\"search\"></ion-searchbar>\n        </div>\n        <select class=\"ionDropdown\">\n          <option>Video</option>\n          <option>Image</option>\n          <option>Profile</option>\n        </select>\n      </div>\n      <ion-buttons slot=\"primary\" class=\"login\">\n        <div>\n           \n\n          <ion-img  [routerLink]=\"['/login']\"\n            src=\"assets/image/login.png\"\n          ></ion-img>\n        </div>\n      </ion-buttons>\n    </ion-toolbar>\n  \n    <section class=\"toolbarBg\">\n      <ion-grid>\n        <ion-row class=\"nenuIcon\">\n          <ion-col class=\"ion-text-center\">\n            <div>\n               <ion-img  [routerLink]=\"['/feeds']\" routerLinkActive=\"active\" src=\"assets/image/rss.png\"></ion-img> \n            </div>\n          </ion-col>\n          <ion-col>\n            <div>\n              <ion-img src=\"assets/image/notification.png\"></ion-img>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div class=\"dropImg\" >        \n              <div (click)=\"settingDropdown()\">\n                    <ion-icon name=\"arrow-dropdown\" slot=\"end\"></ion-icon>\n  \n                    <ion-img src=\"assets/image/settings.png\"></ion-img>\n                </div>\n              <!-- <select>\n                <option><ion-button class=\"firstOpt\"></ion-button></option> \n                <option (onClick)=\"changePassword()\"><ion-button   >Password</ion-button></option>\n                <option><ion-button  value=\"ar\">Logout</ion-button></option>\n              </select> -->\n              <ion-card class=\"dropDown\" [ngClass]=\"{dropDownCss: display}\">\n               \n                  \n                <ion-list [routerLink]=\"['/changePassword']\"  (click)=\"hiddenDiv()\">\n                  \n                  <ion-item>\n                      <ion-img src=\"assets/image/key.png\" slot=\"start\"></ion-img>\n                      <h6>Change Password</h6></ion-item>\n                </ion-list>\n                <ion-list (click)=\"hiddenDiv()\">\n                    \n                  <ion-item>\n                      <ion-img src=\"assets/image/logout.png\" slot=\"start\"></ion-img>\n                      <h6>Logout</h6></ion-item>\n                </ion-list>\n              </ion-card>\n             \n            </div>\n          </ion-col>\n          <ion-col>\n            <div>\n             \n              <ion-img  src=\"assets/image/user.png\"  [routerLink]=\"['/users/profile']\" routerLinkActive=\"active\"></ion-img>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </section>\n  </ion-header>"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  padding: 2px 0 4px 0 !important; }\n  ion-header ion-toolbar .login {\n    border: 1px solid #ff0000;\n    background: #d9544f;\n    height: 42px;\n    margin-right: 5px; }\n  ion-header ion-toolbar .login div ion-img {\n      width: 42px;\n      padding: 3px 7px 0; }\n  ion-header ion-toolbar .headerClass {\n    width: 38px; }\n  ion-header ion-searchbar {\n  --background:transparent!important;\n  padding: 0 !important; }\n  ion-header .ionDropdown {\n  border-left: 1px solid #ccc;\n  background: transparent;\n  float: right;\n  border: none;\n  margin-top: 11px; }\n  ion-header .ionDropdown:focus {\n    outline: none !important; }\n  .nenuIcon ion-col div ion-img {\n  width: 20px;\n  margin: 0 auto; }\n  .firstOpt {\n  display: none; }\n  .nenuIcon ion-col {\n  padding: 0; }\n  .toolbarBg {\n  background: #ecefec;\n  padding: 10px 0 5px 0; }\n  .outlineDiv {\n  --padding-start: 0px!important;\n  border: 1px solid #ccc;\n  margin: 0 7px 0 1px;\n  border-radius: 3px;\n  overflow: hidden; }\n  .inlineDiv {\n  width: calc(100% - 70px);\n  float: left; }\n  .sc-ion-searchbar-ios-h {\n  height: 40px; }\n  .sc-ion-searchbar-md {\n  padding-right: 0 !important; }\n  .dropImg {\n  width: 45px;\n  margin: 0 auto; }\n  .dropImg select {\n  background: transparent;\n  width: 21px;\n  float: right;\n  border: none; }\n  .dropImg select:focus {\n  outline: none; }\n  .dropImg ion-img {\n  float: left; }\n  .dropDown {\n  position: absolute;\n  padding: 2px;\n  z-index: 9;\n  width: 200px;\n  right: 10px;\n  top: 13px; }\n  .dropDown ion-list {\n  padding: 0; }\n  .dropDown ion-list ion-item ion-img {\n  margin-right: 5px;\n  width: 15px; }\n  .dropDownCss {\n  display: none; }\n  .dropDown ion-list h6 {\n  margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvRDpcXHNhY2hpblxcdmV5ZXYvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsK0JBQTZCLEVBQUE7RUFGckM7SUFJWSx5QkFBeUI7SUFDekIsbUJBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUIsRUFBQTtFQVA3QjtNQVVvQixXQUFXO01BQ1gsa0JBQWtCLEVBQUE7RUFYdEM7SUFnQlksV0FBVyxFQUFBO0VBaEJ2QjtFQW9CUSxrQ0FBYTtFQUNULHFCQUFvQixFQUFBO0VBckJoQztFQXdCUSwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWUsRUFBQTtFQTVCdkI7SUE4Qlksd0JBQXVCLEVBQUE7RUFJbkM7RUFDSSxXQUFXO0VBQ1gsY0FBYSxFQUFBO0VBRWpCO0VBQ0ksYUFBYSxFQUFBO0VBRWpCO0VBQ0ksVUFBVSxFQUFBO0VBRWQ7RUFDSSxtQkFBbUI7RUFDbkIscUJBQW9CLEVBQUE7RUFFeEI7RUFDSSw4QkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7RUFFcEI7RUFDSSx3QkFBd0I7RUFDeEIsV0FBVyxFQUFBO0VBRWY7RUFDSSxZQUFZLEVBQUE7RUFFaEI7RUFDSSwyQkFBMEIsRUFBQTtFQUU5QjtFQUNJLFdBQVc7RUFDWCxjQUFjLEVBQUE7RUFHbEI7RUFDSSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZLEVBQUE7RUFFaEI7RUFDSSxhQUFhLEVBQUE7RUFFakI7RUFDSSxXQUFXLEVBQUE7RUFFZjtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0VBQ1gsU0FBUyxFQUFBO0VBRWI7RUFDTSxVQUFTLEVBQUE7RUFFZDtFQUNHLGlCQUFnQjtFQUNoQixXQUFXLEVBQUE7RUFFZDtFQUNJLGFBQWEsRUFBQTtFQUVsQjtFQUNJLFNBQVMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XG4gICAgaW9uLXRvb2xiYXJ7XG4gICAgICAgIHBhZGRpbmc6MnB4IDAgNHB4IDAhaW1wb3J0YW50O1xuICAgICAgICAubG9naW4ge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmMDAwMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6I2Q5NTQ0ZjtcbiAgICAgICAgICAgIGhlaWdodDogNDJweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgZGl2e1xuICAgICAgICAgICAgICAgIGlvbi1pbWd7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MnB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggN3B4IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5oZWFkZXJDbGFzcyB7XG4gICAgICAgICAgICB3aWR0aDogMzhweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpb24tc2VhcmNoYmFye1xuICAgICAgICAtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQhaW1wb3J0YW50O1xuICAgICAgICAgICAgcGFkZGluZzogMCFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5pb25Ecm9wZG93bntcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIG1hcmdpbi10b3A6MTFweDtcbiAgICAgICAgJjpmb2N1c3tcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmUhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfSAgXG59XG4ubmVudUljb24gaW9uLWNvbCBkaXYgaW9uLWltZyB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgbWFyZ2luOjAgYXV0bztcbn1cbi5maXJzdE9wdHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLm5lbnVJY29uIGlvbi1jb2x7XG4gICAgcGFkZGluZzogMDtcbn1cbi50b29sYmFyQmd7XG4gICAgYmFja2dyb3VuZDogI2VjZWZlYztcbiAgICBwYWRkaW5nOjEwcHggMCA1cHggMDtcbn1cbi5vdXRsaW5lRGl2e1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4IWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIG1hcmdpbjogMCA3cHggMCAxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4uaW5saW5lRGl2IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNzBweCk7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG4uc2MtaW9uLXNlYXJjaGJhci1pb3MtaCB7XG4gICAgaGVpZ2h0OiA0MHB4O1xufVxuLnNjLWlvbi1zZWFyY2hiYXItbWQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAhaW1wb3J0YW50O1xufVxuLmRyb3BJbWcge1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuIC8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRyb3BJbWcgc2VsZWN0e1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHdpZHRoOiAyMXB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG4uZHJvcEltZyBzZWxlY3Q6Zm9jdXN7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cbi5kcm9wSW1nIGlvbi1pbWd7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG4uZHJvcERvd24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgei1pbmRleDogOTtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiAxM3B4O1xufVxuLmRyb3BEb3duIGlvbi1saXN0e1xuICAgICAgcGFkZGluZzowO1xuIH1cbiAuZHJvcERvd24gaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWltZ3tcbiAgICBtYXJnaW4tcmlnaHQ6NXB4O1xuICAgIHdpZHRoOiAxNXB4O1xufVxuIC5kcm9wRG93bkNzc3tcbiAgICAgZGlzcGxheTogbm9uZTtcbiB9XG4uZHJvcERvd24gaW9uLWxpc3QgaDZ7XG4gICAgbWFyZ2luOiAwO1xufVxuIl19 */"

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