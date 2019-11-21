(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feeds-feeds-tab-feeds-tab-module"],{

/***/ "./src/app/components/recommend/recommend.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/recommend/recommend.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n<section>\n  <ion-row>\n    <ion-col size=\"11\">\n        <h3>Recommend To:</h3>\n        <ion-item>\n            <ion-input type=\"search\" placeholder=\"Search your network\"></ion-input>\n        </ion-item>\n    </ion-col>\n    <ion-col size=\"1\">\n      <ion-icon (click)=\"recommendCloseModal()\" name=\"close\"></ion-icon>\n  </ion-col>\n  </ion-row>\n</section>\n<section class=\"recommendOut\" padding>\n  <ion-row class=\"recommendBttm\">\n      <ion-col size=\"2\" size-sm=\"2\">\n          <div class=\"recommendImg\">\n            <ion-img src=\"assets/image/gallery/feeds.png\"></ion-img>\n          </div>\n        </ion-col>\n        <ion-col size=\"7\" size-sm=\"8\">\n          <div>\n            <p>Kishor Kumar</p>\n          </div>\n        </ion-col>\n        <ion-col size=\"3\" size-sm=\"2\">\n            <div>\n              <ion-button class=\"recommendBtn\">\n                  <ion-img src=\"assets/image/hand-shake-white.png\"></ion-img>\n              </ion-button>\n            </div>\n          </ion-col>\n  </ion-row>\n  <ion-row class=\"recommendBttm\">\n      <ion-col size=\"2\" size-sm=\"2\">\n          <div class=\"recommendImg\">\n            <ion-img src=\"assets/image/gallery/feeds.png\"></ion-img>\n          </div>\n        </ion-col>\n        <ion-col size=\"7\" size-sm=\"8\">\n          <div>\n            <p>Kishor Kumar</p>\n          </div>\n        </ion-col>\n        <ion-col size=\"3\" size-sm=\"2\">\n            <div>\n              <ion-button class=\"recommendBtn\">\n                  <ion-img src=\"assets/image/hand-shake-white.png\"></ion-img>\n              </ion-button>\n            </div>\n          </ion-col>\n  </ion-row>\n  <ion-row class=\"recommendBttm\">\n      <ion-col size=\"2\" size-sm=\"2\">\n          <div class=\"recommendImg\">\n            <ion-img src=\"assets/image/gallery/feeds.png\"></ion-img>\n          </div>\n        </ion-col>\n        <ion-col size=\"7\" size-sm=\"8\">\n          <div>\n            <p>Kishor Kumar</p>\n          </div>\n        </ion-col>\n        <ion-col size=\"3\" size-sm=\"2\">\n            <div>\n              <ion-button class=\"recommendBtn\">\n                  <ion-img src=\"assets/image/hand-shake-white.png\"></ion-img>\n              </ion-button>\n            </div>\n          </ion-col>\n  </ion-row>\n  <ion-row class=\"recommendBttm\">\n      <ion-col size=\"2\" size-sm=\"2\">\n          <div class=\"recommendImg\">\n            <ion-img src=\"assets/image/gallery/feeds.png\"></ion-img>\n          </div>\n        </ion-col>\n        <ion-col size=\"7\" size-sm=\"8\">\n          <div>\n            <p>Kishor Kumar</p>\n          </div>\n        </ion-col>\n        <ion-col size=\"3\" size-sm=\"2\">\n            <div>\n              <ion-button class=\"recommendBtn\">\n                  <ion-img src=\"assets/image/hand-shake-white.png\"></ion-img>\n              </ion-button>\n            </div>\n          </ion-col>\n  </ion-row>\n  <ion-row class=\"recommendBttm\">\n      <ion-col size=\"2\" size-sm=\"2\">\n          <div class=\"recommendImg\">\n            <ion-img src=\"assets/image/gallery/feeds.png\"></ion-img>\n          </div>\n        </ion-col>\n        <ion-col size=\"7\" size-sm=\"8\">\n          <div>\n            <p>Kishor Kumar</p>\n          </div>\n        </ion-col>\n        <ion-col size=\"3\" size-sm=\"2\">\n            <div>\n              <ion-button class=\"recommendBtn\">\n                  <ion-img src=\"assets/image/hand-shake-white.png\"></ion-img>\n              </ion-button>\n            </div>\n          </ion-col>\n  </ion-row>\n  <ion-row class=\"recommendBttm\">\n      <ion-col size=\"2\" size-sm=\"2\">\n          <div class=\"recommendImg\">\n            <ion-img src=\"assets/image/gallery/feeds.png\"></ion-img>\n          </div>\n        </ion-col>\n        <ion-col size=\"7\" size-sm=\"8\">\n          <div>\n            <p>Kishor Kumar</p>\n          </div>\n        </ion-col>\n        <ion-col size=\"3\" size-sm=\"2\">\n            <div>\n              <ion-button class=\"recommendBtn\">\n                  <ion-img src=\"assets/image/hand-shake-white.png\"></ion-img>\n              </ion-button>\n            </div>\n          </ion-col>\n  </ion-row>\n  <ion-row class=\"recommendBttm\">\n      <ion-col size=\"2\" size-sm=\"2\">\n          <div class=\"recommendImg\">\n            <ion-img src=\"assets/image/gallery/feeds.png\"></ion-img>\n          </div>\n        </ion-col>\n        <ion-col size=\"7\" size-sm=\"8\">\n          <div>\n            <p>Kishor Kumar</p>\n          </div>\n        </ion-col>\n        <ion-col size=\"3\" size-sm=\"2\">\n            <div>\n              <ion-button class=\"recommendBtn\">\n                  <ion-img src=\"assets/image/hand-shake-white.png\"></ion-img>\n              </ion-button>\n            </div>\n          </ion-col>\n  </ion-row>\n  <ion-row class=\"recommendBttm\">\n      <ion-col size=\"2\" size-sm=\"2\">\n          <div class=\"recommendImg\">\n            <ion-img src=\"assets/image/gallery/feeds.png\"></ion-img>\n          </div>\n        </ion-col>\n        <ion-col size=\"7\" size-sm=\"8\">\n          <div>\n            <p>Kishor Kumar</p>\n          </div>\n        </ion-col>\n        <ion-col size=\"3\" size-sm=\"2\">\n            <div>\n              <ion-button class=\"recommendBtn\">\n                  <ion-img src=\"assets/image/hand-shake-white.png\"></ion-img>\n              </ion-button>\n            </div>\n          </ion-col>\n  </ion-row>\n  \n  \n  \n</section>\n</ion-content>"

/***/ }),

/***/ "./src/app/components/recommend/recommend.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/recommend/recommend.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".recommendOut {\n  border: 1px solid #ccc;\n  border-radius: 5px; }\n\n.recommendBttm {\n  border-bottom: 1px solid #ccc; }\n\n.recommendImg ion-img {\n  width: 50px;\n  margin: 0 auto; }\n\n.recommendBtn {\n  --background: #5cb85c;\n  width: 100%; }\n\n@media screen and (max-width: 575px) {\n  .recommendImg ion-img {\n    width: 35px;\n    margin: 5px auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWNvbW1lbmQvRDpcXHNhY2hpblxcdmV5ZXYtZGV2XFx2ZXlldi1kZXYvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHJlY29tbWVuZFxccmVjb21tZW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQXNCO0VBQ3RCLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLDZCQUE2QixFQUFBOztBQUVqQztFQUNJLFdBQVc7RUFDWCxjQUFjLEVBQUE7O0FBRWxCO0VBQ0kscUJBQWE7RUFDYixXQUFXLEVBQUE7O0FBRWY7RUFDSTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0IsRUFBQSxFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVjb21tZW5kL3JlY29tbWVuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWNvbW1lbmRPdXR7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ucmVjb21tZW5kQnR0bXtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbn1cbi5yZWNvbW1lbmRJbWcgaW9uLWltZ3tcbiAgICB3aWR0aDogNTBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cbi5yZWNvbW1lbmRCdG57XG4gICAgLS1iYWNrZ3JvdW5kOiAjNWNiODVjO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzVweCl7XG4gICAgLnJlY29tbWVuZEltZyBpb24taW1ne1xuICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgbWFyZ2luOiA1cHggYXV0bztcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/recommend/recommend.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/recommend/recommend.component.ts ***!
  \*************************************************************/
/*! exports provided: RecommendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendComponent", function() { return RecommendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecommendComponent = /** @class */ (function () {
    function RecommendComponent(modalController) {
        this.modalController = modalController;
    }
    RecommendComponent.prototype.ngOnInit = function () {
    };
    RecommendComponent.prototype.recommendCloseModal = function () {
        this.modalController.dismiss();
    };
    RecommendComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recommend',
            template: __webpack_require__(/*! ./recommend.component.html */ "./src/app/components/recommend/recommend.component.html"),
            styles: [__webpack_require__(/*! ./recommend.component.scss */ "./src/app/components/recommend/recommend.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], RecommendComponent);
    return RecommendComponent;
}());



/***/ }),

/***/ "./src/app/components/recommend/recommend.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/recommend/recommend.module.ts ***!
  \**********************************************************/
/*! exports provided: RecommendModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendModule", function() { return RecommendModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _recommend_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recommend.component */ "./src/app/components/recommend/recommend.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var RecommendModule = /** @class */ (function () {
    function RecommendModule() {
    }
    RecommendModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _recommend_component__WEBPACK_IMPORTED_MODULE_4__["RecommendComponent"]
            ],
            entryComponents: [
                _recommend_component__WEBPACK_IMPORTED_MODULE_4__["RecommendComponent"]
            ],
            providers: [],
            declarations: [
                _recommend_component__WEBPACK_IMPORTED_MODULE_4__["RecommendComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ],
        })
    ], RecommendModule);
    return RecommendModule;
}());



/***/ }),

/***/ "./src/app/pages/feeds/feeds-tab/feeds-tab.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/feeds/feeds-tab/feeds-tab.module.ts ***!
  \***********************************************************/
/*! exports provided: FeedsTabPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedsTabPageModule", function() { return FeedsTabPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _feeds_tab_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feeds-tab.page */ "./src/app/pages/feeds/feeds-tab/feeds-tab.page.ts");
/* harmony import */ var src_app_components_header_header_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/header/header.module */ "./src/app/components/header/header.module.ts");
/* harmony import */ var src_app_components_recommend_recommend_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/recommend/recommend.module */ "./src/app/components/recommend/recommend.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _feeds_tab_page__WEBPACK_IMPORTED_MODULE_5__["FeedsTabPage"]
    }
];
var FeedsTabPageModule = /** @class */ (function () {
    function FeedsTabPageModule() {
    }
    FeedsTabPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                src_app_components_header_header_module__WEBPACK_IMPORTED_MODULE_6__["HeaderModule"],
                src_app_components_recommend_recommend_module__WEBPACK_IMPORTED_MODULE_7__["RecommendModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_feeds_tab_page__WEBPACK_IMPORTED_MODULE_5__["FeedsTabPage"]],
            entryComponents: []
        })
    ], FeedsTabPageModule);
    return FeedsTabPageModule;
}());



/***/ }),

/***/ "./src/app/pages/feeds/feeds-tab/feeds-tab.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/feeds/feeds-tab/feeds-tab.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ion-content>\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"4\">\n        <ion-card class=\"cardDiv\">\n          <ion-card-header>\n            <ion-row>\n              <ion-col size=\"2\">\n                <div>\n                  <ion-img src=\"assets/image/gallery/feeds.png\"></ion-img>\n                </div>\n              </ion-col>\n              <ion-col size=\"8\">\n                <div>\n                  <p>Kishor Kumar</p>\n                </div>\n              </ion-col>\n              <ion-col size=\"2\">\n                <div class=\"dropImg\">\n                  <select>\n                    <option class=\"firstOpt\"></option>\n                    <option>Report</option>\n\n                  </select>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-card-header>\n\n          <ion-card-content>\n            <ion-row>\n              <ion-col class=\"ion-no-padding\">\n                <ion-img src=\"assets/image/enslaved.png\"></ion-img>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <div class=\"feedsDiv\">\n                <div>\n                  <ion-img src=\"assets/image/heart.png\"></ion-img>\n                </div>\n                <div>\n                  <ion-img (click)=\"recommendModal()\" src=\"assets/image/handshake.png\"></ion-img>\n                </div>\n                <div>\n                  <ion-img src=\"assets/image/comment.png\"></ion-img>\n                </div>\n                <div>\n                  <ion-img src=\"assets/image/share.png\"></ion-img>\n                </div>\n              </div>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"12\" size-sm=\"4\">\n          <ion-card class=\"cardDiv\">\n            <ion-card-header>\n              <ion-row>\n                <ion-col size=\"2\">\n                  <div>\n                    <ion-img src=\"assets/image/gallery/feeds.png\"></ion-img>\n                  </div>\n                </ion-col>\n                <ion-col size=\"8\">\n                  <div>\n                    <p>Kishor Kumar</p>\n                  </div>\n                </ion-col>\n                <ion-col size=\"2\">\n                  <div class=\"dropImg\">\n                    <select>\n                      <option class=\"firstOpt\"></option>\n                      <option>NES</option>\n                      <option>Nintendo64</option>\n                    </select>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-card-header>\n  \n            <ion-card-content>\n              <ion-row>\n                <ion-col class=\"ion-no-padding\">\n                  <ion-img src=\"assets/image/enslaved.png\"></ion-img>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <div class=\"feedsDiv\">\n                  <div>\n                    <ion-img src=\"assets/image/heart.png\"></ion-img>\n                  </div>\n                  <div>\n                    <ion-img src=\"assets/image/handshake.png\"></ion-img>\n                  </div>\n                  <div>\n                    <ion-img src=\"assets/image/comment.png\"></ion-img>\n                  </div>\n                  <div>\n                    <ion-img src=\"assets/image/share.png\"></ion-img>\n                  </div>\n                </div>\n              </ion-row>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n        <ion-col size=\"12\" size-sm=\"4\">\n            <ion-card class=\"cardDiv\">\n              <ion-card-header>\n                <ion-row>\n                  <ion-col size=\"2\">\n                    <div>\n                      <ion-img src=\"assets/image/gallery/feeds.png\"></ion-img>\n                    </div>\n                  </ion-col>\n                  <ion-col size=\"8\">\n                    <div>\n                      <p>Kishor Kumar</p>\n                    </div>\n                  </ion-col>\n                  <ion-col size=\"2\">\n                    <div class=\"dropImg\">\n                      <select>\n                        <option class=\"firstOpt\"></option>\n                        <option>NES</option>\n                        <option>Nintendo64</option>\n                      </select>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-card-header>\n    \n              <ion-card-content>\n                <ion-row>\n                  <ion-col class=\"ion-no-padding\">\n                    <ion-img src=\"assets/image/enslaved.png\"></ion-img>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <div class=\"feedsDiv\">\n                    <div>\n                      <ion-img src=\"assets/image/heart.png\"></ion-img>\n                    </div>\n                    <div>\n                      <ion-img src=\"assets/image/handshake.png\"></ion-img>\n                    </div>\n                    <div>\n                      <ion-img src=\"assets/image/comment.png\"></ion-img>\n                    </div>\n                    <div>\n                      <ion-img src=\"assets/image/share.png\"></ion-img>\n                    </div>\n                  </div>\n                </ion-row>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n          <ion-col size=\"12\" size-sm=\"4\">\n              <ion-card class=\"cardDiv\">\n                <ion-card-header>\n                  <ion-row>\n                    <ion-col size=\"2\">\n                      <div>\n                        <ion-img src=\"assets/image/gallery/feeds.png\"></ion-img>\n                      </div>\n                    </ion-col>\n                    <ion-col size=\"8\">\n                      <div>\n                        <p>Kishor Kumar</p>\n                      </div>\n                    </ion-col>\n                    <ion-col size=\"2\">\n                      <div class=\"dropImg\">\n                        <select>\n                          <option class=\"firstOpt\"></option>\n                          <option>NES</option>\n                          <option>Nintendo64</option>\n                        </select>\n                      </div>\n                    </ion-col>\n                  </ion-row>\n                </ion-card-header>\n      \n                <ion-card-content>\n                  <ion-row>\n                    <ion-col class=\"ion-no-padding\">\n                      <ion-img src=\"assets/image/enslaved.png\"></ion-img>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <div class=\"feedsDiv\">\n                      <div>\n                        <ion-img src=\"assets/image/heart.png\"></ion-img>\n                      </div>\n                      <div>\n                        <ion-img src=\"assets/image/handshake.png\"></ion-img>\n                      </div>\n                      <div>\n                        <ion-img src=\"assets/image/comment.png\"></ion-img>\n                      </div>\n                      <div>\n                        <ion-img src=\"assets/image/share.png\"></ion-img>\n                      </div>\n                    </div>\n                  </ion-row>\n                </ion-card-content>\n              </ion-card>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"4\">\n                <ion-card class=\"cardDiv\">\n                  <ion-card-header>\n                    <ion-row>\n                      <ion-col size=\"2\">\n                        <div>\n                          <ion-img src=\"assets/image/gallery/feeds.png\"></ion-img>\n                        </div>\n                      </ion-col>\n                      <ion-col size=\"8\">\n                        <div>\n                          <p>Kishor Kumar</p>\n                        </div>\n                      </ion-col>\n                      <ion-col size=\"2\">\n                        <div class=\"dropImg\">\n                          <select>\n                            <option class=\"firstOpt\"></option>\n                            <option>NES</option>\n                            <option>Nintendo64</option>\n                          </select>\n                        </div>\n                      </ion-col>\n                    </ion-row>\n                  </ion-card-header>\n        \n                  <ion-card-content>\n                    <ion-row>\n                      <ion-col class=\"ion-no-padding\">\n                        <ion-img src=\"assets/image/enslaved.png\"></ion-img>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row>\n                      <div class=\"feedsDiv\">\n                        <div>\n                          <ion-img src=\"assets/image/heart.png\"></ion-img>\n                        </div>\n                        <div>\n                          <ion-img src=\"assets/image/handshake.png\"></ion-img>\n                        </div>\n                        <div>\n                          <ion-img src=\"assets/image/comment.png\"></ion-img>\n                        </div>\n                        <div>\n                          <ion-img src=\"assets/image/share.png\"></ion-img>\n                        </div>\n                      </div>\n                    </ion-row>\n                  </ion-card-content>\n                </ion-card>\n              </ion-col>\n              <ion-col size=\"12\" size-sm=\"4\">\n                  <ion-card class=\"cardDiv\">\n                    <ion-card-header>\n                      <ion-row>\n                        <ion-col size=\"2\">\n                          <div>\n                            <ion-img src=\"assets/image/gallery/feeds.png\"></ion-img>\n                          </div>\n                        </ion-col>\n                        <ion-col size=\"8\">\n                          <div>\n                            <p>Kishor Kumar</p>\n                          </div>\n                        </ion-col>\n                        <ion-col size=\"2\">\n                          <div class=\"dropImg\">\n                            <select>\n                              <option class=\"firstOpt\"></option>\n                              <option>NES</option>\n                              <option>Nintendo64</option>\n                            </select>\n                          </div>\n                        </ion-col>\n                      </ion-row>\n                    </ion-card-header>\n          \n                    <ion-card-content>\n                      <ion-row>\n                        <ion-col class=\"ion-no-padding\">\n                          <ion-img src=\"assets/image/enslaved.png\"></ion-img>\n                        </ion-col>\n                      </ion-row>\n                      <ion-row>\n                        <div class=\"feedsDiv\">\n                          <div>\n                            <ion-img src=\"assets/image/heart.png\"></ion-img>\n                          </div>\n                          <div>\n                            <ion-img src=\"assets/image/handshake.png\"></ion-img>\n                          </div>\n                          <div>\n                            <ion-img src=\"assets/image/comment.png\"></ion-img>\n                          </div>\n                          <div>\n                            <ion-img src=\"assets/image/share.png\"></ion-img>\n                          </div>\n                        </div>\n                      </ion-row>\n                    </ion-card-content>\n                  </ion-card>\n                </ion-col>\n                <ion-col size=\"12\" size-sm=\"4\">\n                    <ion-card class=\"cardDiv\">\n                      <ion-card-header>\n                        <ion-row>\n                          <ion-col size=\"2\">\n                            <div>\n                              <ion-img src=\"assets/image/gallery/feeds.png\"></ion-img>\n                            </div>\n                          </ion-col>\n                          <ion-col size=\"8\">\n                            <div>\n                              <p>Kishor Kumar</p>\n                            </div>\n                          </ion-col>\n                          <ion-col size=\"2\">\n                            <div class=\"dropImg\">\n                              <select>\n                                <option class=\"firstOpt\"></option>\n                                <option>NES</option>\n                                <option>Nintendo64</option>\n                              </select>\n                            </div>\n                          </ion-col>\n                        </ion-row>\n                      </ion-card-header>\n            \n                      <ion-card-content>\n                        <ion-row>\n                          <ion-col class=\"ion-no-padding\">\n                            <ion-img src=\"assets/image/enslaved.png\"></ion-img>\n                          </ion-col>\n                        </ion-row>\n                        <ion-row>\n                          <div class=\"feedsDiv\">\n                            <div>\n                              <ion-img src=\"assets/image/heart.png\"></ion-img>\n                            </div>\n                            <div>\n                              <ion-img src=\"assets/image/handshake.png\"></ion-img>\n                            </div>\n                            <div>\n                              <ion-img src=\"assets/image/comment.png\"></ion-img>\n                            </div>\n                            <div>\n                              <ion-img src=\"assets/image/share.png\"></ion-img>\n                            </div>\n                          </div>\n                        </ion-row>\n                      </ion-card-content>\n                    </ion-card>\n                  </ion-col>\n                  <ion-col size=\"12\" size-sm=\"4\">\n                      <ion-card class=\"cardDiv\">\n                        <ion-card-header>\n                          <ion-row>\n                            <ion-col size=\"2\">\n                              <div>\n                                <ion-img src=\"assets/image/gallery/feeds.png\"></ion-img>\n                              </div>\n                            </ion-col>\n                            <ion-col size=\"8\">\n                              <div>\n                                <p>Kishor Kumar</p>\n                              </div>\n                            </ion-col>\n                            <ion-col size=\"2\">\n                              <div class=\"dropImg\">\n                                <select>\n                                  <option class=\"firstOpt\"></option>\n                                  <option>NES</option>\n                                  <option>Nintendo64</option>\n                                </select>\n                              </div>\n                            </ion-col>\n                          </ion-row>\n                        </ion-card-header>\n              \n                        <ion-card-content>\n                          <ion-row>\n                            <ion-col class=\"ion-no-padding\">\n                              <ion-img src=\"assets/image/enslaved.png\"></ion-img>\n                            </ion-col>\n                          </ion-row>\n                          <ion-row>\n                            <div class=\"feedsDiv\">\n                              <div>\n                                <ion-img src=\"assets/image/heart.png\"></ion-img>\n                              </div>\n                              <div>\n                                <ion-img src=\"assets/image/handshake.png\"></ion-img>\n                              </div>\n                              <div>\n                                <ion-img src=\"assets/image/comment.png\"></ion-img>\n                              </div>\n                              <div>\n                                <ion-img src=\"assets/image/share.png\"></ion-img>\n                              </div>\n                            </div>\n                          </ion-row>\n                        </ion-card-content>\n                      </ion-card>\n                    </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/feeds/feeds-tab/feeds-tab.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/feeds/feeds-tab/feeds-tab.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".feedsDiv {\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  background: #f2f2f1;\n  padding: 5px 0 2px 0; }\n\n.feedsDiv ion-img {\n  width: 25px !important;\n  margin: 0 8px;\n  display: inline-block; }\n\n.feedsDiv div {\n  display: inline-block; }\n\n.feedsDiv div p {\n  display: inline-block; }\n\n.ionDropdown {\n  border-left: 1px solid #ccc;\n  background: transparent;\n  float: right;\n  border: none;\n  margin-top: 11px; }\n\n.ionDropdown:focus {\n    outline: none !important; }\n\n.firstOpt {\n  display: none; }\n\n.dropImg select {\n  background: transparent;\n  width: 21px;\n  float: right;\n  margin-top: 15px; }\n\n.dropImg select:focus {\n  outline: none; }\n\n.dropImg ion-img {\n  float: left; }\n\n.cardDiv ion-card-header {\n  padding: 0; }\n\n.cardDiv ion-card-content {\n  padding: 0; }\n\n.cardDiv {\n  padding: 8px 8px 0 8px;\n  margin: 0; }\n\n@media screen and (max-width: 1199px) {\n  .cardDiv p {\n    margin: 3px; }\n  .dropImg select {\n    margin-top: 3px; } }\n\n@media screen and (max-width: 767px) {\n  .cardDiv p {\n    margin: 0;\n    color: #000;\n    font-weight: bold; }\n  .dropImg select {\n    margin-top: 0px;\n    border: none;\n    color: #000; } }\n\n@media screen and (max-width: 767px) {\n  .feedsDiv ion-img {\n    width: 20px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmVlZHMvZmVlZHMtdGFiL0Q6XFxzYWNoaW5cXHZleWV2LWRldlxcdmV5ZXYtZGV2L3NyY1xcYXBwXFxwYWdlc1xcZmVlZHNcXGZlZWRzLXRhYlxcZmVlZHMtdGFiLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixvQkFBb0IsRUFBQTs7QUFFeEI7RUFDSSxzQkFBcUI7RUFDckIsYUFBYTtFQUNiLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZSxFQUFBOztBQUxuQjtJQU9RLHdCQUF1QixFQUFBOztBQUcvQjtFQUNJLGFBQWEsRUFBQTs7QUFFakI7RUFDSSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxhQUFhLEVBQUE7O0FBRWpCO0VBQ0ksV0FBVyxFQUFBOztBQUVmO0VBQ0ksVUFBVSxFQUFBOztBQUVkO0VBQ0ksVUFBVSxFQUFBOztBQUVkO0VBQ0ksc0JBQXFCO0VBQ3JCLFNBQVMsRUFBQTs7QUFFYjtFQUNJO0lBQ0ksV0FBVyxFQUFBO0VBRWY7SUFDSSxlQUFlLEVBQUEsRUFDbEI7O0FBRUw7RUFDSTtJQUNJLFNBQVM7SUFDVCxXQUFXO0lBQ1gsaUJBQWlCLEVBQUE7RUFFckI7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVcsRUFBQSxFQUNkOztBQUVMO0VBQ0E7SUFDSSxzQkFBcUIsRUFBQSxFQUN4QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZlZWRzL2ZlZWRzLXRhYi9mZWVkcy10YWIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZlZWRzRGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGJhY2tncm91bmQ6ICNmMmYyZjE7XG4gICAgcGFkZGluZzogNXB4IDAgMnB4IDA7XG59XG4uZmVlZHNEaXYgaW9uLWltZ3tcbiAgICB3aWR0aDogMjVweCFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwIDhweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uZmVlZHNEaXYgZGl2IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICBcbn1cbi5mZWVkc0RpdiBkaXYgcCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBcbn1cbi5pb25Ecm9wZG93bntcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjY2M7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tdG9wOjExcHg7XG4gICAgJjpmb2N1c3tcbiAgICAgICAgb3V0bGluZTogbm9uZSFpbXBvcnRhbnQ7XG4gICAgfVxufSBcbi5maXJzdE9wdHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLmRyb3BJbWcgc2VsZWN0e1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHdpZHRoOiAyMXB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLmRyb3BJbWcgc2VsZWN0OmZvY3Vze1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG4uZHJvcEltZyBpb24taW1ne1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuLmNhcmREaXYgaW9uLWNhcmQtaGVhZGVye1xuICAgIHBhZGRpbmc6IDA7XG59XG4uY2FyZERpdiBpb24tY2FyZC1jb250ZW50e1xuICAgIHBhZGRpbmc6IDA7XG59XG4uY2FyZERpdntcbiAgICBwYWRkaW5nOjhweCA4cHggMCA4cHg7XG4gICAgbWFyZ2luOiAwO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMTk5cHgpe1xuICAgIC5jYXJkRGl2IHB7XG4gICAgICAgIG1hcmdpbjogM3B4O1xuICAgIH1cbiAgICAuZHJvcEltZyBzZWxlY3R7XG4gICAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICB9XG59IFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCl7XG4gICAgLmNhcmREaXYgcHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIC5kcm9wSW1nIHNlbGVjdHtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgIH1cbn0gXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KXtcbi5mZWVkc0RpdiBpb24taW1ne1xuICAgIHdpZHRoOiAyMHB4IWltcG9ydGFudDtcbn1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/feeds/feeds-tab/feeds-tab.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/feeds/feeds-tab/feeds-tab.page.ts ***!
  \*********************************************************/
/*! exports provided: FeedsTabPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedsTabPage", function() { return FeedsTabPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_components_recommend_recommend_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/recommend/recommend.component */ "./src/app/components/recommend/recommend.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var FeedsTabPage = /** @class */ (function () {
    function FeedsTabPage(modalController) {
        this.modalController = modalController;
    }
    FeedsTabPage.prototype.ngOnInit = function () {
    };
    FeedsTabPage.prototype.recommendModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: src_app_components_recommend_recommend_component__WEBPACK_IMPORTED_MODULE_2__["RecommendComponent"],
                            cssClass: 'recommendCss'
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FeedsTabPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feeds-tab',
            template: __webpack_require__(/*! ./feeds-tab.page.html */ "./src/app/pages/feeds/feeds-tab/feeds-tab.page.html"),
            styles: [__webpack_require__(/*! ./feeds-tab.page.scss */ "./src/app/pages/feeds/feeds-tab/feeds-tab.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], FeedsTabPage);
    return FeedsTabPage;
}());



/***/ })

}]);
//# sourceMappingURL=feeds-feeds-tab-feeds-tab-module.js.map