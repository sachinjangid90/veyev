(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-login-login-module"],{

/***/ "./src/app/pages/auth/login/login.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/auth/login/login.module.ts ***!
  \**************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/auth/login/login.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/login/login.page.html":
/*!**************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content class=\"ion-no-padding\">\n  <div class=\"loginSignup\">\n    <div *ngIf=\"signLoginForm\">\n    <ion-grid class=\"ion-no-padding\">\n      <ion-row>\n        <ion-col size=\"12\" class=\"logoDiv\">\n          <ion-img src=\"assets/image/signup-logo.png\"></ion-img>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-text\n            ><h4 class=\"text-center ion-no-margin ion-padding\" (click)=\"SignUpBtn()\" [ngClass]=\"{borderOne: red, borderTwo: !red}\">Sign Up</h4></ion-text\n          >\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-text><h4 class=\"text-center ion-no-margin ion-padding\" (click)=\"LoginBtn()\" [ngClass]=\"{borderOne: transparent, borderTwo: !transparent}\">Login</h4></ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n\n\n    \n\n    <!-------sign up form------->\n     <form class=\"signupForm\" *ngIf=\"signUp\">\n      <ion-grid>\n        <ion-row color=\"primary\" justify-content-center>\n          <ion-col align-self-center size=\"12\">\n            <div class=\"formDiv\">\n              <div>\n                <ion-img src=\"assets/image/avatar.png\"></ion-img>\n                <ion-input\n                  name=\"name\"\n                  type=\"text\"\n                  placeholder=\"Name\"\n                  required\n                ></ion-input>\n              </div>\n              <div>\n                <ion-img src=\"assets/image/avatar.png\"></ion-img>\n                <ion-input\n                  name=\"name\"\n                  type=\"text\"\n                  placeholder=\"User Name\"\n                  required\n                ></ion-input>\n              </div>\n              <div>\n                <ion-img src=\"assets/image/envelope.png\"></ion-img>\n                <ion-input\n                  name=\"email\"\n                  type=\"email\"\n                  placeholder=\"Email ID\"\n                ></ion-input>\n              </div>\n              <div>\n                <ion-img src=\"assets/image/locked.png\"></ion-img>\n                <ion-input\n                  name=\"password\"\n                  type=\"password\"\n                  placeholder=\"Password\"\n                ></ion-input>\n              </div>\n              <div>\n                <ion-img src=\"assets/image/locked.png\"></ion-img>\n                <ion-input\n                  name=\"confirm\"\n                  type=\"password\"\n                  placeholder=\"Confirm Password\"\n                ></ion-input>\n              </div>\n              <div class=\"checkBox\">\n                <ion-checkbox color=\"secondary\" slot=\"start\"></ion-checkbox>\n                <ion-label>I agree with terms & conditions</ion-label>\n              </div>\n            </div>\n            <div>\n              <ion-button\n                size=\"large\"\n                type=\"submit\"\n                class=\"bgDanger\"\n                expand=\"block\"\n                >SIGN UP</ion-button\n              >\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form> \n\n\n    <!--------login form---->\n    <form class=\"loginForm\" *ngIf=\"!signUp\">\n      <ion-grid>\n        <ion-row color=\"primary\" justify-content-center>\n          <ion-col align-self-center size=\"12\">\n            <div padding class=\"formDiv\">\n              <div>\n                <ion-img src=\"assets/image/envelope.png\"></ion-img>\n                <ion-input\n                  name=\"email\"\n                  type=\"email\"\n                  placeholder=\"Login ID\"\n                ></ion-input>\n              </div>\n              <div>\n                <ion-img src=\"assets/image/locked.png\"></ion-img>\n                <ion-input\n                  name=\"password\"\n                  type=\"password\"\n                  placeholder=\"Password\"\n                ></ion-input>\n              </div>\n              <ion-text class=\"\" color=\"primary\">\n                <p (click)=\"password()\">Forgot Password</p>\n              </ion-text>\n                \n            </div>\n            <div>\n              <ion-button\n                size=\"large\"\n                type=\"submit\"\n                class=\"bgDanger\"\n                expand=\"block\"\n                >LOGIN</ion-button\n              >\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n\n    <div>\n      <ion-grid class=\"ion-no-padding\">\n        <ion-row>\n          <ion-col size=\"5\" class=\"horizontalLineDiv\">\n            <hr class=\"HorizontalLine\" />\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-text\n              ><h5 class=\"text-center text-font-weight\">or</h5></ion-text\n            >\n          </ion-col>\n          <ion-col size=\"5\" class=\"horizontalLineDiv\">\n            <hr class=\"HorizontalLine\" />\n          </ion-col>\n          <ion-col size=\"12\">\n            <p class=\"text-center no-margin\">Continue with Social login</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div>\n      <ion-grid class=\"ion-no-padding social-icons\">\n        <ion-row>\n          <ion-col size=10 offset=1 size-sm=\"6\" offset-sm=\"3\">\n            <ion-row >\n              <ion-col size=\"4\">\n                <ion-img src=\"assets/image/facebook.png\"></ion-img>\n              </ion-col>\n              <ion-col size=\"4\">\n                <ion-img src=\"assets/image/twitter.png\"></ion-img>\n              </ion-col>\n              <ion-col size=\"4\">\n                <ion-img src=\"assets/image/google-plus.png\"></ion-img>\n              </ion-col>\n              \n            </ion-row>\n          </ion-col>\n          <div class=\"skipBtn\">\n            <p class=\"ion-no-margin\">Skip</p>\n          </div>\n            \n        </ion-row>\n        \n      </ion-grid>\n    </div>\n    </div>\n\n    <!------forgot password------>\n    <div *ngIf=\"!signLoginForm\">\n        <ion-grid class=\"ion-no-padding\">\n            <ion-row>\n              <ion-col size=\"12\" class=\"logoDiv\">\n                <ion-img src=\"assets/image/signup-logo.png\"></ion-img>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n          <form class=\"passwordForm\">\n              <ion-grid>\n                <ion-row color=\"primary\" justify-content-center>\n                  <ion-col size=\"12\">\n                    <ion-text class=\"ion-text-center \">\n                      <h4>Forgot Password?</h4>\n                      <p>Please enter your registered email address.</p>\n                    </ion-text>\n                  </ion-col>\n                \n                  <ion-col size=\"12\">\n                    <div padding class=\"formDiv passwordDiv\">\n                      <div>\n                        <ion-img src=\"assets/image/envelope.png\"></ion-img>\n                        <ion-input\n                          name=\"email\"\n                          type=\"email\"\n                          placeholder=\"Email ID\"\n                        ></ion-input>\n                      </div>\n                     \n                     \n                        \n                    </div>\n                    <div padding class=\"passwordBtn\">\n                      <ion-button\n                        size=\"large\"\n                        type=\"submit\"\n                        class=\"bgDanger\"\n                        expand=\"block\"\n                        >RECOVER PASSWORD</ion-button\n                      >\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </form>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/auth/login/login.page.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginSignup {\n  background-image: url(/assets/image/loginBg.png);\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 25px 50px 0 50px;\n  height: 100%; }\n\n.logoDiv ion-img {\n  width: 150px !important;\n  margin: 0 auto; }\n\n.text-center {\n  text-align: center !important; }\n\n.text-font-weight {\n  font-weight: bold !important;\n  margin: 0; }\n\n.formDiv ion-img {\n  width: 16px;\n  margin-right: 10px; }\n\n.formDiv div {\n  display: flex;\n  border-bottom: 1px solid #696969;\n  margin-top: 12px;\n  padding-bottom: 6px; }\n\n.formDiv div ion-input {\n    height: 18px !important;\n    padding: 0 !important;\n    font-size: 14px;\n    --color:#000; }\n\n.formDiv .checkBox {\n  border: none !important;\n  margin: 16px 0 15px; }\n\n.formDiv .checkBox ion-checkbox {\n    margin-right: 10px; }\n\n.formDiv .checkBox ion-label {\n    font-size: 12px; }\n\n.bgDanger {\n  --background:#ff0000; }\n\n.HorizontalLine {\n  background: #000; }\n\n.horizontalLineDiv {\n  margin-top: 2px; }\n\n.social-icons ion-img {\n  width: 60%;\n  margin: 0 auto; }\n\n.social-icons {\n  padding-bottom: 25px;\n  position: relative; }\n\n.skipBtn {\n  position: absolute;\n  right: 0px;\n  top: 40px; }\n\n.skipBtn p {\n  color: #21adf1; }\n\n.borderOne {\n  border-bottom: 3px solid #ff0000 !important;\n  font-weight: bold; }\n\n.borderTwo {\n  border-bottom: 3px solid transparent !important; }\n\n.passwordForm h4 {\n  font-weight: bold;\n  margin: 50px 0; }\n\n.passwordDiv {\n  margin: 0; }\n\n.passwordBtn {\n  margin: 80px 0 210px 0; }\n\n.no-margin {\n  margin: 0; }\n\n@media screen and (max-width: 575px) {\n  .loginSignup {\n    padding: 45px 30px 0 30px; }\n  .social-icons ion-img {\n    width: 35px;\n    margin: 0 auto; }\n  .skipBtn {\n    position: absolute;\n    right: -5px;\n    top: 50px; }\n  .bgDanger {\n    font-size: 15px; }\n  .passwordBtn {\n    margin: 30px 0 100px 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9sb2dpbi9EOlxcc2FjaGluXFx2ZXlldi1kZXZcXHZleWV2LWRldi9zcmNcXGFwcFxccGFnZXNcXGF1dGhcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDUSxnREFBK0M7RUFDL0MsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsWUFBWSxFQUFBOztBQUVwQjtFQUNJLHVCQUFzQjtFQUN0QixjQUFjLEVBQUE7O0FBS2xCO0VBQ0ksNkJBQTRCLEVBQUE7O0FBRWhDO0VBQ0ksNEJBQTJCO0VBQzNCLFNBQVMsRUFBQTs7QUFFYjtFQUNJLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFFdEI7RUFFSSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFMdkI7SUFPUSx1QkFBc0I7SUFDdEIscUJBQW9CO0lBQ3BCLGVBQWU7SUFDZixZQUFRLEVBQUE7O0FBVmhCO0VBY0ksdUJBQXNCO0VBQ3RCLG1CQUFtQixFQUFBOztBQWZ2QjtJQWlCUSxrQkFBa0IsRUFBQTs7QUFqQjFCO0lBb0JRLGVBQWUsRUFBQTs7QUFJdkI7RUFDSSxvQkFBYSxFQUFBOztBQUVqQjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGVBQWMsRUFBQTs7QUFFbEI7RUFDSSxVQUFVO0VBQ1YsY0FBYyxFQUFBOztBQUdsQjtFQUNJLG9CQUFvQjtFQUNwQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVMsRUFBQTs7QUFFYjtFQUNJLGNBQWMsRUFBQTs7QUFNbEI7RUFDSSwyQ0FBMkM7RUFDM0MsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksK0NBQStDLEVBQUE7O0FBRW5EO0VBQ0ksaUJBQWlCO0VBQ2pCLGNBQWEsRUFBQTs7QUFFakI7RUFDSSxTQUFTLEVBQUE7O0FBRWI7RUFDSSxzQkFBc0IsRUFBQTs7QUFFMUI7RUFDSSxTQUFRLEVBQUE7O0FBRVo7RUFDSTtJQUNJLHlCQUF5QixFQUFBO0VBRzdCO0lBQ0ksV0FBVztJQUNYLGNBQWMsRUFBQTtFQUVsQjtJQUNBLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUyxFQUFBO0VBRVQ7SUFDSSxlQUFlLEVBQUE7RUFFbkI7SUFDSSxzQkFBc0IsRUFBQSxFQUN6QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luU2lnbnVwe1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCgvYXNzZXRzL2ltYWdlL2xvZ2luQmcucG5nKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgcGFkZGluZzogMjVweCA1MHB4IDAgNTBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xufVxuLmxvZ29EaXYgaW9uLWltZyB7XG4gICAgd2lkdGg6IDE1MHB4IWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cbi8vIC5sb2dvRGl2IHtcbi8vICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuLy8gfVxuLnRleHQtY2VudGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlciFpbXBvcnRhbnQ7XG59XG4udGV4dC1mb250LXdlaWdodHtcbiAgICBmb250LXdlaWdodDogYm9sZCFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwO1xufVxuLmZvcm1EaXYgaW9uLWltZyB7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmZvcm1EaXYge1xuICAgIGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzY5Njk2OTtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA2cHg7XG4gICAgaW9uLWlucHV0e1xuICAgICAgICBoZWlnaHQ6IDE4cHghaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nOiAwIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAtLWNvbG9yOiMwMDA7XG4gICAgfVxufVxuLmNoZWNrQm94e1xuICAgIGJvcmRlcjogbm9uZSFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAxNnB4IDAgMTVweDtcbiAgICBpb24tY2hlY2tib3h7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG4gICAgaW9uLWxhYmVse1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxufVxufVxuLmJnRGFuZ2Vye1xuICAgIC0tYmFja2dyb3VuZDojZmYwMDAwO1xufVxuLkhvcml6b250YWxMaW5lIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xufVxuLmhvcml6b250YWxMaW5lRGl2e1xuICAgIG1hcmdpbi10b3A6MnB4O1xufVxuLnNvY2lhbC1pY29ucyBpb24taW1nIHtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uc29jaWFsLWljb25zIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2tpcEJ0biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgdG9wOiA0MHB4O1xufVxuLnNraXBCdG4gcHtcbiAgICBjb2xvcjogIzIxYWRmMTtcbn1cblxuLy8gLmZvcm1EaXYge1xuLy8gICAgIG1hcmdpbi10b3A6IDUwcHg7XG4vLyB9XG4uYm9yZGVyT25lIHtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2ZmMDAwMCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4uYm9yZGVyVHdvIHtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgfVxuLnBhc3N3b3JkRm9ybSBoNHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46NTBweCAwO1xufVxuLnBhc3N3b3JkRGl2e1xuICAgIG1hcmdpbjogMDtcbn1cbi5wYXNzd29yZEJ0bntcbiAgICBtYXJnaW46IDgwcHggMCAyMTBweCAwO1xufVxuLm5vLW1hcmdpbntcbiAgICBtYXJnaW46MDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc1cHgpe1xuICAgIC5sb2dpblNpZ251cHtcbiAgICAgICAgcGFkZGluZzogNDVweCAzMHB4IDAgMzBweDtcbiAgICAgICAgXG59XG4gICAgLnNvY2lhbC1pY29ucyBpb24taW1nIHtcbiAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbiAgICAuc2tpcEJ0biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAtNXB4O1xuICAgIHRvcDogNTBweDtcbiAgICB9XG4gICAgLmJnRGFuZ2Vye1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxuICAgIC5wYXNzd29yZEJ0bntcbiAgICAgICAgbWFyZ2luOiAzMHB4IDAgMTAwcHggMDtcbiAgICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/auth/login/login.page.ts":
/*!************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.ts ***!
  \************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
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

var LoginPage = /** @class */ (function () {
    function LoginPage() {
        this.signUp = false;
        this.borderOne = false;
        this.borderTwo = true;
        this.red = false;
        this.transparent = true;
        this.signLoginForm = true;
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.SignUpBtn = function () {
        this.signUp = true;
        this.red = true;
        this.transparent = false;
    };
    LoginPage.prototype.LoginBtn = function () {
        this.signUp = false;
        this.red = false;
        this.transparent = true;
    };
    LoginPage.prototype.password = function () {
        this.signLoginForm = false;
    };
    LoginPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/auth/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/auth/login/login.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-auth-login-login-module.js.map