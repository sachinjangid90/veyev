(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-tab-dashboard-tab-module"],{

/***/ "./src/app/pages/dashboard/dashboard-tab/dashboard-tab.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard-tab/dashboard-tab.module.ts ***!
  \***********************************************************************/
/*! exports provided: DashboardTabPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardTabPageModule", function() { return DashboardTabPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dashboard_tab_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-tab.page */ "./src/app/pages/dashboard/dashboard-tab/dashboard-tab.page.ts");
/* harmony import */ var src_app_components_custom_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/custom-component.module */ "./src/app/components/custom-component.module.ts");
/* harmony import */ var src_app_components_header_header_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/header/header.module */ "./src/app/components/header/header.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _dashboard_tab_page__WEBPACK_IMPORTED_MODULE_5__["DashboardTabPage"]
    }
];
var DashboardTabPageModule = /** @class */ (function () {
    function DashboardTabPageModule() {
    }
    DashboardTabPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                src_app_components_custom_component_module__WEBPACK_IMPORTED_MODULE_6__["CustomComponentModule"],
                src_app_components_header_header_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_dashboard_tab_page__WEBPACK_IMPORTED_MODULE_5__["DashboardTabPage"]]
        })
    ], DashboardTabPageModule);
    return DashboardTabPageModule;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard-tab/dashboard-tab.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard-tab/dashboard-tab.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ion-content>\n  <div class=\"bgImages\">\n    <div padding class=\"bodyBgColor\">\n      <ion-row>\n        <ion-col>\n          <div class=\"ion-text-center\">\n            <h2>Exhibit yourself across the Globe.</h2>\n            <h2>Welcome to \"Gallery of Humans\".</h2>\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div class=\"sliderDiv\" fullscreen padding scroll-y=\"false\">\n      <div class=\"dashboardTitle\">\n        <h3>Featured Humans</h3>\n      </div>\n      <ion-slides [options]=\"slideOptsOne\">\n        <ion-slide>\n          <img src=\"assets/image/img1.png\" />\n          <h2>Vaggy_i_am</h2>\n          <p>sadhvi Sinha</p>\n        </ion-slide>\n\n        <ion-slide>\n          <img src=\"assets/image/img1.png\" />\n          <h2>Vaggy_i_am</h2>\n          <p>sadhvi Sinha</p>\n        </ion-slide>\n\n        <ion-slide>\n          <img src=\"assets/image/img1.png\" />\n          <h2>Vaggy_i_am</h2>\n          <p>sadhvi Sinha</p>\n        </ion-slide>\n\n        <ion-slide>\n          <img src=\"assets/image/img1.png\" />\n          <h2>Vaggy_i_am</h2>\n          <p>sadhvi Sinha</p>\n        </ion-slide>\n\n        <ion-slide>\n          <img src=\"assets/image/img1.png\" />\n          <h2>Vaggy_i_am</h2>\n          <p>sadhvi Sinha</p>\n        </ion-slide>\n\n        <ion-slide>\n          <img src=\"assets/image/img1.png\" />\n          <h2>Vaggy_i_am</h2>\n          <p>sadhvi Sinha</p>\n        </ion-slide>\n      </ion-slides>\n    </div>\n\n    <!-- top images -->\n    <div class=\"sliderDiv\" fullscreen padding scroll-y=\"false\">\n      <div class=\"dashboardTitle\">\n        <h3>Popular Images</h3>\n      </div>\n      <ion-slides [options]=\"slideOptsTwo\">\n        <ion-slide>\n          <a href=\"http://veyev.social/post/desc/97/79\">\n            <img\n              style=\"max-height:220px;\"\n              src=\"http://veyev.social/uploads/post/62d373fabf4562bc0e84f14e270d1a98.gif\"\n              alt=\"hvj\"\n              title=\"hvj\"\n            />\n            <br /><br />\n          </a>\n        </ion-slide>\n        <ion-slide>\n          <a href=\"http://veyev.social/post/desc/97/79\">\n            <img\n              style=\"max-height:220px;\"\n              src=\"http://veyev.social/uploads/post/62d373fabf4562bc0e84f14e270d1a98.gif\"\n              alt=\"hvj\"\n              title=\"hvj\"\n            />\n            <br /><br />\n          </a>\n        </ion-slide>\n\n        <ion-slide>\n          <a href=\"http://veyev.social/post/desc/97/79\">\n            <img\n              style=\"max-height:220px;\"\n              src=\"http://veyev.social/uploads/post/62d373fabf4562bc0e84f14e270d1a98.gif\"\n              alt=\"hvj\"\n              title=\"hvj\"\n            />\n            <br /><br />\n          </a>\n        </ion-slide>\n      </ion-slides>\n    </div>\n\n    <!-- top videos -->\n    <div class=\"sliderDiv sliderVideoDiv\" fullscreen padding scroll-y=\"false\">\n      <div class=\"dashboardTitle\">\n        <h3>Top Videos</h3>\n      </div>\n      <ion-slides [options]=\"slideOptsTwo\">\n        <ion-slide>\n          <video\n            height=\"100%\"\n            width=\"100%\"\n            preload=\"auto\"\n            onmouseover=\"this.play();\"\n            onmouseout=\"this.pause();\"\n          >\n            <source\n              src=\"http://veyev.social/uploads//86fb39d1e797d708be171fa93243d72b.mp4\"\n              type=\"video/mp4\"\n            />\n          </video>\n          <br />\n          <p>\n            'In The End' Linkin Park Cinematic Cover (feat. Jung Youth &amp;\n            Fleurie) -- Produced by Tommee Profitt\n          </p>\n        </ion-slide>\n        <ion-slide>\n          <video\n            height=\"100%\"\n            width=\"100%\"\n            preload=\"auto\"\n            onmouseover=\"this.play();\"\n            onmouseout=\"this.pause();\"\n          >\n            <source\n              src=\"http://veyev.social/uploads//86fb39d1e797d708be171fa93243d72b.mp4\"\n              type=\"video/mp4\"\n            />\n          </video>\n          <br />\n          <p>\n            'In The End' Linkin Park Cinematic Cover (feat. Jung Youth &amp;\n            Fleurie) -- Produced by Tommee Profitt\n          </p>\n        </ion-slide>\n\n        <ion-slide>\n          <video\n            height=\"100%\"\n            width=\"100%\"\n            preload=\"auto\"\n            onmouseover=\"this.play();\"\n            onmouseout=\"this.pause();\"\n          >\n            <source\n              src=\"http://veyev.social/uploads//86fb39d1e797d708be171fa93243d72b.mp4\"\n              type=\"video/mp4\"\n            />\n          </video>\n          <br />\n          <p>\n            'In The End' Linkin Park Cinematic Cover (feat. Jung Youth &amp;\n            Fleurie) -- Produced by Tommee Profitt\n          </p>\n        </ion-slide>\n      </ion-slides>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard-tab/dashboard-tab.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard-tab/dashboard-tab.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bgImages {\n  background-image: url(/assets/image/trans.jpg);\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 0 15px 30px; }\n\n/*carousel css*/\n\n:root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px; }\n\n.swiper-slide {\n  display: block; }\n\nion-slide > h2 {\n  margin-top: 2.8rem; }\n\nion-slide > img {\n  max-height: 100%;\n  max-width: 80%;\n  margin: 0px 0; }\n\n.sliderDiv ion-slide h2 {\n  margin: 10px 0 !important;\n  color: #ff0000; }\n\n.sliderDiv {\n  background-image: linear-gradient(#ebecf0, #a3a8ac);\n  margin-top: 25px; }\n\n.sliderVideoDiv p {\n  margin-top: 10px !important;\n  max-width: 220px;\n  height: 15px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n@media screen and (max-width: 767px) {\n  .bgImages {\n    padding: 0 0px 30px; } }\n\n@media screen and (max-width: 575px) {\n  .sliderDiv ion-slide h2 {\n    margin: 10px 0 !important;\n    font-size: 15px !important; }\n  .sliderDiv ion-slide p {\n    font-size: 14px; }\n  .bodyBgColor h2 {\n    font-size: 16px !important;\n    margin: 0; }\n  .dashboardTitle h3 {\n    margin-top: 0;\n    font-size: 18px;\n    color: #474747; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC10YWIvRDpcXHNhY2hpblxcdmV5ZXYvc3JjXFxhcHBcXHBhZ2VzXFxkYXNoYm9hcmRcXGRhc2hib2FyZC10YWJcXGRhc2hib2FyZC10YWIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0ksOENBQTZDO0VBQzdDLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsb0JBQW9CLEVBQUE7O0FBU3hCLGVBQUE7O0FBQ0E7RUFDSSx5QkFBb0I7RUFDcEIsNEJBQXVCLEVBQUE7O0FBRXpCO0VBQ0UsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsYUFBYSxFQUFBOztBQUlqQjtFQUNJLHlCQUF3QjtFQUN4QixjQUFhLEVBQUE7O0FBV2pCO0VBQ0ksbURBQW1EO0VBQ25ELGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLDJCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0k7SUFDSSxtQkFBbUIsRUFBQSxFQUN0Qjs7QUFFTDtFQUNJO0lBRVEseUJBQXdCO0lBQ3hCLDBCQUF3QixFQUFBO0VBSGhDO0lBT1EsZUFBYyxFQUFBO0VBR3RCO0lBQ0ksMEJBQXdCO0lBQ3hCLFNBQVEsRUFBQTtFQUVaO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixjQUFjLEVBQUEsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLXRhYi9kYXNoYm9hcmQtdGFiLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cblxuXG5cblxuLmJnSW1hZ2Vze1xuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKC9hc3NldHMvaW1hZ2UvdHJhbnMuanBnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgcGFkZGluZzogMCAxNXB4IDMwcHg7XG59XG4vLyAuYm9keUJnQ29sb3IgaDJ7XG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQhaW1wb3J0YW50O1xuLy8gfVxuXG5cblxuXG4vKmNhcm91c2VsIGNzcyovXG46cm9vdCB7XG4gICAgLS1pb24tc2FmZS1hcmVhLXRvcDogMjBweDtcbiAgICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyMnB4O1xuICB9XG4gIC5zd2lwZXItc2xpZGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIGlvbi1zbGlkZSA+IGgyIHtcbiAgICBtYXJnaW4tdG9wOiAyLjhyZW07XG4gIH1cbiAgaW9uLXNsaWRlID4gaW1nIHtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogODAlO1xuICAgIG1hcmdpbjogMHB4IDA7XG4gIH1cblxuXG4uc2xpZGVyRGl2IGlvbi1zbGlkZSBoMiB7XG4gICAgbWFyZ2luOiAxMHB4IDAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiNmZjAwMDA7XG59XG4vLyAuc2xpZGVyRGl2IGlvbi1zbGlkZSBwIHtcbi8vICAgICBtYXJnaW46IDAhaW1wb3J0YW50O1xuLy8gfVxuLy8uc3dpcGVyLXNsaWRlIHtcbiAgICAvL3dpZHRoOiA4MCUgIWltcG9ydGFudDtcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IC0zNCU7XG4gICAgLy8gbWFyZ2luLWxlZnQ6IDEzJTtcblxuLy99XG4uc2xpZGVyRGl2IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoI2ViZWNmMCwgI2EzYThhYyk7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbn1cbi5zbGlkZXJWaWRlb0RpdiBwe1xuICAgIG1hcmdpbi10b3A6IDEwcHghaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMjIwcHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpe1xuICAgIC5iZ0ltYWdlc3tcbiAgICAgICAgcGFkZGluZzogMCAwcHggMzBweDtcbiAgICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NXB4KXtcbiAgICAuc2xpZGVyRGl2IHtcbiAgICAgICAgaW9uLXNsaWRlIGgyIHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNXB4IWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICBpb24tc2xpZGUgcCB7XG4gICAgICAgICAgICAvLyBtYXJnaW46IDAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC1zaXplOjE0cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmJvZHlCZ0NvbG9yIGgye1xuICAgICAgICBmb250LXNpemU6MTZweCFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbjowO1xuICAgIH1cbiAgICAuZGFzaGJvYXJkVGl0bGUgaDMge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGNvbG9yOiAjNDc0NzQ3O1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard-tab/dashboard-tab.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard-tab/dashboard-tab.page.ts ***!
  \*********************************************************************/
/*! exports provided: DashboardTabPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardTabPage", function() { return DashboardTabPage; });
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

var DashboardTabPage = /** @class */ (function () {
    function DashboardTabPage() {
        this.slideOptsOne = {
            initialSlide: 0,
            slidesPerView: 2.5,
            loop: true,
            autoplay: true
        };
        this.slideOptsTwo = {
            initialSlide: 0,
            slidesPerView: 1,
            loop: true,
            autoplay: true
        };
    }
    DashboardTabPage.prototype.ngOnInit = function () {
    };
    DashboardTabPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-tab',
            template: __webpack_require__(/*! ./dashboard-tab.page.html */ "./src/app/pages/dashboard/dashboard-tab/dashboard-tab.page.html"),
            styles: [__webpack_require__(/*! ./dashboard-tab.page.scss */ "./src/app/pages/dashboard/dashboard-tab/dashboard-tab.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardTabPage);
    return DashboardTabPage;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-tab-dashboard-tab-module.js.map