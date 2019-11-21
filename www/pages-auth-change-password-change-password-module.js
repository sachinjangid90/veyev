(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-change-password-change-password-module"],{

/***/ "./src/app/pages/auth/change-password/change-password.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/auth/change-password/change-password.module.ts ***!
  \**********************************************************************/
/*! exports provided: ChangePasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function() { return ChangePasswordPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-password.page */ "./src/app/pages/auth/change-password/change-password.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _change_password_page__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordPage"]
    }
];
var ChangePasswordPageModule = /** @class */ (function () {
    function ChangePasswordPageModule() {
    }
    ChangePasswordPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordPage"]]
        })
    ], ChangePasswordPageModule);
    return ChangePasswordPageModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/change-password/change-password.page.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/auth/change-password/change-password.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"ion-no-padding\">\n   \n  <div class=\"loginSignup\">\n    <ion-grid class=\"ion-no-padding\">\n        \n      <ion-row>\n        <ion-col size=\"12\" class=\"logoDiv\">\n          <ion-img src=\"assets/image/signup-logo.png\"></ion-img>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <form class=\"passwordForm\">\n      <ion-grid>\n        <ion-row color=\"primary\" justify-content-center>\n          <ion-col size=\"12\">\n            <ion-text class=\"ion-text-center \">\n              <h4>Change Password?</h4>\n            </ion-text>\n          </ion-col>\n\n          <ion-col size=\"12\">\n            <div padding class=\"formDiv passwordDiv\">\n              <div>\n                <ion-img src=\"assets/image/locked.png\"></ion-img>\n                <ion-input\n                  name=\"password\"\n                  type=\"password\"\n                  placeholder=\"Current Password\"\n                ></ion-input>\n              </div>\n            </div>\n            <div padding class=\"formDiv passwordDiv\">\n                <div>\n                  <ion-img src=\"assets/image/locked.png\"></ion-img>\n                  <ion-input\n                    name=\"password\"\n                    type=\"password\"\n                    placeholder=\"New Password\"\n                  ></ion-input>\n                </div>\n              </div>\n              <div padding class=\"formDiv passwordDiv\">\n                  <div>\n                    <ion-img src=\"assets/image/locked.png\"></ion-img>\n                    <ion-input\n                      name=\"password\"\n                      type=\"password\"\n                      placeholder=\"Confirm Password\"\n                    ></ion-input>\n                  </div>\n                </div>\n            <div padding class=\"passwordBtn\">\n              <ion-button\n                size=\"large\"\n                type=\"submit\"\n                class=\"bgDanger\"\n                expand=\"block\"\n                >CHANGE PASSWORD</ion-button\n              >\n            </div>\n            <div class=\"backarrow\">\n                <ion-item lines=\"none\" (click)=\"goToBack()\">\n                    <ion-img slot=\"start\"  src=\"assets/image/left-arrow.png\"></ion-img>\n                    <ion-text >Go Back</ion-text>\n                </ion-item>\n                \n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/auth/change-password/change-password.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/auth/change-password/change-password.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginSignup {\n  background-image: url(/assets/image/loginBg.png);\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 25px 50px 0 50px;\n  height: 100%; }\n\n.logoDiv ion-img {\n  width: 150px !important;\n  margin: 0 auto; }\n\n.logoDiv {\n  margin-bottom: 0px; }\n\n.text-center {\n  text-align: center !important; }\n\n.text-font-weight {\n  font-weight: bold !important; }\n\n.formDiv ion-img {\n  width: 16px;\n  margin-right: 10px; }\n\n.formDiv div {\n  display: flex;\n  border-bottom: 1px solid #696969;\n  margin-top: 12px;\n  padding-bottom: 6px; }\n\n.formDiv div ion-input {\n    height: 18px !important;\n    padding: 0 !important;\n    font-size: 14px;\n    --color:#000; }\n\n.backarrow ion-img {\n  width: 18px;\n  margin: 4px 7px 0 0; }\n\n.backarrow ion-item {\n  width: 120px;\n  --background: none;\n  margin: 0 auto; }\n\n.backarrow ion-item ion-text {\n  font-size: 14px; }\n\n.bgDanger {\n  --background:#ff0000; }\n\n.formDiv {\n  margin-top: 50px; }\n\n.passwordForm h4 {\n  font-weight: bold; }\n\n.passwordDiv {\n  margin: 0; }\n\n@media screen and (max-width: 575px) {\n  .loginSignup {\n    padding: 25px 50px 0 50px; }\n  .bgDanger {\n    font-size: 15px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9jaGFuZ2UtcGFzc3dvcmQvRDpcXHNhY2hpblxcdmV5ZXYvc3JjXFxhcHBcXHBhZ2VzXFxhdXRoXFxjaGFuZ2UtcGFzc3dvcmRcXGNoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnREFBK0M7RUFDL0MsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsWUFBWSxFQUFBOztBQUVoQjtFQUNBLHVCQUFzQjtFQUN0QixjQUFjLEVBQUE7O0FBRWQ7RUFDQSxrQkFBa0IsRUFBQTs7QUFFbEI7RUFDQSw2QkFBNEIsRUFBQTs7QUFFNUI7RUFDQSw0QkFBMkIsRUFBQTs7QUFFM0I7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBaUJ0QjtFQUVJLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUx2QjtJQU9RLHVCQUFzQjtJQUN0QixxQkFBb0I7SUFDcEIsZUFBZTtJQUNmLFlBQVEsRUFBQTs7QUFNaEI7RUFDSSxXQUFXO0VBQ1gsbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksWUFBWTtFQUNaLGtCQUFhO0VBQ2IsY0FBYyxFQUFBOztBQUVsQjtFQUNHLGVBQWUsRUFBQTs7QUFHbEI7RUFDQSxvQkFBYSxFQUFBOztBQXFCYjtFQUNBLGdCQUFnQixFQUFBOztBQUVoQjtFQUNBLGlCQUFpQixFQUFBOztBQUVqQjtFQUNBLFNBQVMsRUFBQTs7QUFLVDtFQUNBO0lBQ0kseUJBQXlCLEVBQUE7RUFFN0I7SUFDSSxlQUFlLEVBQUEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW5TaWdudXB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoL2Fzc2V0cy9pbWFnZS9sb2dpbkJnLnBuZyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBhZGRpbmc6IDI1cHggNTBweCAwIDUwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLmxvZ29EaXYgaW9uLWltZyB7XG53aWR0aDogMTUwcHghaW1wb3J0YW50O1xubWFyZ2luOiAwIGF1dG87XG59XG4ubG9nb0RpdiB7XG5tYXJnaW4tYm90dG9tOiAwcHg7XG59XG4udGV4dC1jZW50ZXJ7XG50ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xufVxuLnRleHQtZm9udC13ZWlnaHR7XG5mb250LXdlaWdodDogYm9sZCFpbXBvcnRhbnQ7XG59XG4uZm9ybURpdiBpb24taW1nIHtcbiAgICB3aWR0aDogMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4vLyAuZm9ybURpdiB7XG4vLyBkaXYge1xuLy8gZGlzcGxheTogZmxleDtcbi8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjk2OTY5O1xuLy8gbWFyZ2luLXRvcDogMjBweDtcbi8vIHBhZGRpbmctYm90dG9tOiA4cHg7XG4vLyBpb24taW5wdXR7XG4vLyAgICAgaGVpZ2h0OiAyNXB4IWltcG9ydGFudDtcbi8vICAgICBwYWRkaW5nOiAwIWltcG9ydGFudDtcbi8vICAgICBmb250LXNpemU6IDE2cHg7XG4vLyAgICAgLS1jb2xvcjojMDAwO1xuLy8gfVxuLy8gfVxuLy8gfVxuXG4uZm9ybURpdiB7XG4gICAgZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjk2OTY5O1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgcGFkZGluZy1ib3R0b206IDZweDtcbiAgICBpb24taW5wdXR7XG4gICAgICAgIGhlaWdodDogMThweCFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmc6IDAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIC0tY29sb3I6IzAwMDtcbiAgICB9XG59XG59XG5cblxuLmJhY2thcnJvdyBpb24taW1nIHtcbiAgICB3aWR0aDogMThweDtcbiAgICBtYXJnaW46IDRweCA3cHggMCAwO1xufVxuLmJhY2thcnJvdyBpb24taXRlbXtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuLmJhY2thcnJvdyBpb24taXRlbSBpb24tdGV4dHtcbiAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmJnRGFuZ2Vye1xuLS1iYWNrZ3JvdW5kOiNmZjAwMDA7XG59XG5cbi8vIC5zb2NpYWwtaWNvbnMgaW9uLWltZyB7XG4vLyB3aWR0aDogNjAlO1xuLy8gbWFyZ2luOiAwIGF1dG87XG4vLyB9XG5cbi8vIC5zb2NpYWwtaWNvbnMge1xuLy8gcGFkZGluZy1ib3R0b206IDI1cHg7XG4vLyBwb3NpdGlvbjogcmVsYXRpdmU7XG4vL31cbi8vIC5za2lwQnRuIHtcbi8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vIHJpZ2h0OiAwcHg7XG4vLyB0b3A6IDQwcHg7XG4vLyB9XG4vLyAuc2tpcEJ0biBwe1xuLy8gY29sb3I6ICMyMWFkZjE7XG4vLyB9XG5cbi5mb3JtRGl2IHtcbm1hcmdpbi10b3A6IDUwcHg7XG59XG4ucGFzc3dvcmRGb3JtIGg0e1xuZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucGFzc3dvcmREaXZ7XG5tYXJnaW46IDA7XG59XG4vLyAucGFzc3dvcmRCdG57XG4vLyBtYXJnaW46IDgwcHggMCAyMTBweCAwO1xuLy8gfVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzVweCl7XG4ubG9naW5TaWdudXB7XG4gICAgcGFkZGluZzogMjVweCA1MHB4IDAgNTBweDtcbn1cbi5iZ0RhbmdlcntcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxuICAgIFxuXG59XG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQxNXB4KXtcbi8vICAgICAubG9naW5TaWdudXB7XG4vLyAgICAgICAgIHBhZGRpbmc6IDQwcHggMTVweCAwIDE1cHg7XG4vLyB9ICAgIFxuLy8gLnBhc3N3b3JkRm9ybSBoNCB7XG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgbWFyZ2luOiAyNXB4IDA7XG4vLyB9XG4vLyB9Il19 */"

/***/ }),

/***/ "./src/app/pages/auth/change-password/change-password.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/auth/change-password/change-password.page.ts ***!
  \********************************************************************/
/*! exports provided: ChangePasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPage", function() { return ChangePasswordPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChangePasswordPage = /** @class */ (function () {
    function ChangePasswordPage(_location) {
        this._location = _location;
    }
    ChangePasswordPage.prototype.ngOnInit = function () {
    };
    ChangePasswordPage.prototype.goToBack = function () {
        this._location.back();
    };
    ChangePasswordPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.page.html */ "./src/app/pages/auth/change-password/change-password.page.html"),
            styles: [__webpack_require__(/*! ./change-password.page.scss */ "./src/app/pages/auth/change-password/change-password.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-auth-change-password-change-password-module.js.map