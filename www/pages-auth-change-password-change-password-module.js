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

module.exports = "<ion-content class=\"ion-no-padding\">\n  <div class=\"loginSignup\">\n    <ion-grid class=\"ion-no-padding\">\n      <ion-row>\n        <ion-col size=\"12\" class=\"logoDiv\">\n          <ion-img src=\"assets/image/signup-logo.png\"></ion-img>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <form class=\"passwordForm\">\n      <ion-grid>\n        <ion-row color=\"primary\" justify-content-center>\n          <ion-col size=\"12\">\n            <ion-text class=\"ion-text-center \">\n              <h4>Change Password?</h4>\n            </ion-text>\n          </ion-col>\n\n          <ion-col size=\"12\">\n            <div padding class=\"formDiv passwordDiv\">\n              <div>\n                <ion-img src=\"assets/image/locked.png\"></ion-img>\n                <ion-input\n                  name=\"password\"\n                  type=\"password\"\n                  placeholder=\"Current Password\"\n                ></ion-input>\n              </div>\n            </div>\n            <div padding class=\"formDiv passwordDiv\">\n                <div>\n                  <ion-img src=\"assets/image/locked.png\"></ion-img>\n                  <ion-input\n                    name=\"password\"\n                    type=\"password\"\n                    placeholder=\"New Password\"\n                  ></ion-input>\n                </div>\n              </div>\n              <div padding class=\"formDiv passwordDiv\">\n                  <div>\n                    <ion-img src=\"assets/image/locked.png\"></ion-img>\n                    <ion-input\n                      name=\"password\"\n                      type=\"password\"\n                      placeholder=\"Confirm Password\"\n                    ></ion-input>\n                  </div>\n                </div>\n            <div padding class=\"passwordBtn\">\n              <ion-button\n                size=\"large\"\n                type=\"submit\"\n                class=\"bgDanger\"\n                expand=\"block\"\n                >CHANGE PASSWORD</ion-button\n              >\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/auth/change-password/change-password.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/auth/change-password/change-password.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginSignup {\n  background-image: url(/assets/image/loginBg.png);\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 25px 50px 0 50px;\n  height: 100%; }\n\n.logoDiv ion-img {\n  width: 150px !important;\n  margin: 0 auto; }\n\n.logoDiv {\n  margin-bottom: 0px; }\n\n.text-center {\n  text-align: center !important; }\n\n.text-font-weight {\n  font-weight: bold !important; }\n\n.formDiv ion-img {\n  width: 16px;\n  margin-right: 10px; }\n\n.formDiv div {\n  display: flex;\n  border-bottom: 1px solid #696969;\n  margin-top: 12px;\n  padding-bottom: 6px; }\n\n.formDiv div ion-input {\n    height: 18px !important;\n    padding: 0 !important;\n    font-size: 14px;\n    --color:#000; }\n\n.bgDanger {\n  --background:#ff0000; }\n\n.formDiv {\n  margin-top: 50px; }\n\n.passwordForm h4 {\n  font-weight: bold; }\n\n.passwordDiv {\n  margin: 0; }\n\n.passwordBtn {\n  margin: 80px 0 210px 0; }\n\n@media screen and (max-width: 575px) {\n  .loginSignup {\n    padding: 25px 50px 0 50px; }\n  .bgDanger {\n    font-size: 15px; }\n  .passwordBtn {\n    margin: 30px 0 100px 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9jaGFuZ2UtcGFzc3dvcmQvRDpcXHNhY2hpblxcdmV5ZXYtZGV2XFx2ZXlldi1kZXYvc3JjXFxhcHBcXHBhZ2VzXFxhdXRoXFxjaGFuZ2UtcGFzc3dvcmRcXGNoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnREFBK0M7RUFDL0MsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsWUFBWSxFQUFBOztBQUVoQjtFQUNBLHVCQUFzQjtFQUN0QixjQUFjLEVBQUE7O0FBRWQ7RUFDQSxrQkFBa0IsRUFBQTs7QUFFbEI7RUFDQSw2QkFBNEIsRUFBQTs7QUFFNUI7RUFDQSw0QkFBMkIsRUFBQTs7QUFFM0I7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBaUJ0QjtFQUVJLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUx2QjtJQU9RLHVCQUFzQjtJQUN0QixxQkFBb0I7SUFDcEIsZUFBZTtJQUNmLFlBQVEsRUFBQTs7QUFRaEI7RUFDQSxvQkFBYSxFQUFBOztBQXFCYjtFQUNBLGdCQUFnQixFQUFBOztBQUVoQjtFQUNBLGlCQUFpQixFQUFBOztBQUVqQjtFQUNBLFNBQVMsRUFBQTs7QUFFVDtFQUNBLHNCQUFzQixFQUFBOztBQUV0QjtFQUNBO0lBQ0kseUJBQXlCLEVBQUE7RUFFN0I7SUFDSSxlQUFlLEVBQUE7RUFFZjtJQUNJLHNCQUFzQixFQUFBLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXV0aC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpblNpZ251cHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCgvYXNzZXRzL2ltYWdlL2xvZ2luQmcucG5nKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgcGFkZGluZzogMjVweCA1MHB4IDAgNTBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4ubG9nb0RpdiBpb24taW1nIHtcbndpZHRoOiAxNTBweCFpbXBvcnRhbnQ7XG5tYXJnaW46IDAgYXV0bztcbn1cbi5sb2dvRGl2IHtcbm1hcmdpbi1ib3R0b206IDBweDtcbn1cbi50ZXh0LWNlbnRlcntcbnRleHQtYWxpZ246IGNlbnRlciFpbXBvcnRhbnQ7XG59XG4udGV4dC1mb250LXdlaWdodHtcbmZvbnQtd2VpZ2h0OiBib2xkIWltcG9ydGFudDtcbn1cbi5mb3JtRGl2IGlvbi1pbWcge1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi8vIC5mb3JtRGl2IHtcbi8vIGRpdiB7XG4vLyBkaXNwbGF5OiBmbGV4O1xuLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2OTY5Njk7XG4vLyBtYXJnaW4tdG9wOiAyMHB4O1xuLy8gcGFkZGluZy1ib3R0b206IDhweDtcbi8vIGlvbi1pbnB1dHtcbi8vICAgICBoZWlnaHQ6IDI1cHghaW1wb3J0YW50O1xuLy8gICAgIHBhZGRpbmc6IDAhaW1wb3J0YW50O1xuLy8gICAgIGZvbnQtc2l6ZTogMTZweDtcbi8vICAgICAtLWNvbG9yOiMwMDA7XG4vLyB9XG4vLyB9XG4vLyB9XG5cbi5mb3JtRGl2IHtcbiAgICBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2OTY5Njk7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xuICAgIGlvbi1pbnB1dHtcbiAgICAgICAgaGVpZ2h0OiAxOHB4IWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZzogMCFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgLS1jb2xvcjojMDAwO1xuICAgIH1cbn1cbn1cblxuXG5cblxuLmJnRGFuZ2Vye1xuLS1iYWNrZ3JvdW5kOiNmZjAwMDA7XG59XG5cbi8vIC5zb2NpYWwtaWNvbnMgaW9uLWltZyB7XG4vLyB3aWR0aDogNjAlO1xuLy8gbWFyZ2luOiAwIGF1dG87XG4vLyB9XG5cbi8vIC5zb2NpYWwtaWNvbnMge1xuLy8gcGFkZGluZy1ib3R0b206IDI1cHg7XG4vLyBwb3NpdGlvbjogcmVsYXRpdmU7XG4vL31cbi8vIC5za2lwQnRuIHtcbi8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vIHJpZ2h0OiAwcHg7XG4vLyB0b3A6IDQwcHg7XG4vLyB9XG4vLyAuc2tpcEJ0biBwe1xuLy8gY29sb3I6ICMyMWFkZjE7XG4vLyB9XG5cbi5mb3JtRGl2IHtcbm1hcmdpbi10b3A6IDUwcHg7XG59XG4ucGFzc3dvcmRGb3JtIGg0e1xuZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucGFzc3dvcmREaXZ7XG5tYXJnaW46IDA7XG59XG4ucGFzc3dvcmRCdG57XG5tYXJnaW46IDgwcHggMCAyMTBweCAwO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzVweCl7XG4ubG9naW5TaWdudXB7XG4gICAgcGFkZGluZzogMjVweCA1MHB4IDAgNTBweDtcbn1cbi5iZ0RhbmdlcntcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxuICAgIC5wYXNzd29yZEJ0bntcbiAgICAgICAgbWFyZ2luOiAzMHB4IDAgMTAwcHggMDtcbiAgICAgICAgfVxuXG59XG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQxNXB4KXtcbi8vICAgICAubG9naW5TaWdudXB7XG4vLyAgICAgICAgIHBhZGRpbmc6IDQwcHggMTVweCAwIDE1cHg7XG4vLyB9ICAgIFxuLy8gLnBhc3N3b3JkRm9ybSBoNCB7XG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgbWFyZ2luOiAyNXB4IDA7XG4vLyB9XG4vLyB9Il19 */"

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
    function ChangePasswordPage() {
    }
    ChangePasswordPage.prototype.ngOnInit = function () {
    };
    ChangePasswordPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.page.html */ "./src/app/pages/auth/change-password/change-password.page.html"),
            styles: [__webpack_require__(/*! ./change-password.page.scss */ "./src/app/pages/auth/change-password/change-password.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-auth-change-password-change-password-module.js.map