(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-tab-dashboard-tab-module~pages-users-users-module"],{

/***/ "./src/app/components/comment/comment.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/comment/comment.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <section class=\"recommendOut\" padding>\n      \n    <ion-row class=\"recommendBttm\">\n        <ion-col size=\"2\">\n            <div class=\"recommendImg\">\n              <ion-img src=\"assets/image/gallery/feeds.png\"></ion-img>\n            </div>\n          </ion-col>\n          <ion-col size=\"9\">\n            <div>\n              <p>Kishor Kumar</p>\n            </div>\n          </ion-col>\n          <ion-col size=\"1\" >\n            <ion-icon (click)=\"commentCloseModal()\" name=\"close\"></ion-icon>\n          </ion-col>\n    </ion-row>\n    <ion-row >\n          \n        <ion-col class=\"textArea\" size=\"12\">\n          <div>\n           <ion-textarea rows=\"5\" width=\"100%\" placeholder=\"Enter your comment here\"></ion-textarea>\n          </div>\n        </ion-col>\n     \n        <ion-col size=\"12\" padding>\n            <div class=\"ion-text-center\">\n                <ion-button class=\"greenBtn\">Send</ion-button>\n            </div>\n          </ion-col>\n  </ion-row>\n    </section>\n</ion-content>"

/***/ }),

/***/ "./src/app/components/comment/comment.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/comment/comment.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".recommendImg ion-img {\n  width: 50px;\n  margin: 0 auto; }\n\n.textArea {\n  border: 1px solid #ccc; }\n\n.greenBtn {\n  --background: #5cb85c!important; }\n\n@media screen and (max-width: 575px) {\n  .recommendImg ion-img {\n    width: 35px;\n    margin: 5px auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tZW50L0Q6XFxzYWNoaW5cXHZleWV2LWRldlxcdmV5ZXYtZGV2L3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb21tZW50XFxjb21tZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxzQkFBcUIsRUFBQTs7QUFFekI7RUFDSSwrQkFBYSxFQUFBOztBQUVqQjtFQUNJO0lBQ0ksV0FBVztJQUNYLGdCQUFnQixFQUFBLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21tZW50L2NvbW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVjb21tZW5kSW1nIGlvbi1pbWd7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG4udGV4dEFyZWF7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xufVxuLmdyZWVuQnRuIHtcbiAgICAtLWJhY2tncm91bmQ6ICM1Y2I4NWMhaW1wb3J0YW50O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzVweCl7XG4gICAgLnJlY29tbWVuZEltZyBpb24taW1ne1xuICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgbWFyZ2luOiA1cHggYXV0bztcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/comment/comment.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/comment/comment.component.ts ***!
  \*********************************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
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


var CommentComponent = /** @class */ (function () {
    function CommentComponent(modalController) {
        this.modalController = modalController;
    }
    CommentComponent.prototype.ngOnInit = function () {
    };
    CommentComponent.prototype.commentCloseModal = function () {
        this.modalController.dismiss();
    };
    CommentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comment',
            template: __webpack_require__(/*! ./comment.component.html */ "./src/app/components/comment/comment.component.html"),
            styles: [__webpack_require__(/*! ./comment.component.scss */ "./src/app/components/comment/comment.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], CommentComponent);
    return CommentComponent;
}());



/***/ }),

/***/ "./src/app/components/custom-component.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/custom-component.module.ts ***!
  \*******************************************************/
/*! exports provided: CustomComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomComponentModule", function() { return CustomComponentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _gallery_popover_gallery_popover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery-popover/gallery-popover.component */ "./src/app/components/gallery-popover/gallery-popover.component.ts");
/* harmony import */ var _love_love_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./love/love.component */ "./src/app/components/love/love.component.ts");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comment/comment.component */ "./src/app/components/comment/comment.component.ts");
/* harmony import */ var _share_share_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./share/share.component */ "./src/app/components/share/share.component.ts");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.module */ "./src/app/components/header/header.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { FollowersComponent } from '../pages/users/followers/followers.component';




var CustomComponentModule = /** @class */ (function () {
    function CustomComponentModule() {
    }
    CustomComponentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [],
            entryComponents: [
                _gallery_popover_gallery_popover_component__WEBPACK_IMPORTED_MODULE_3__["GalleryPopoverComponent"], _love_love_component__WEBPACK_IMPORTED_MODULE_4__["LoveComponent"], _comment_comment_component__WEBPACK_IMPORTED_MODULE_5__["CommentComponent"], _share_share_component__WEBPACK_IMPORTED_MODULE_6__["ShareComponent"]
            ],
            providers: [ScreenOrientation],
            declarations: [
                _gallery_popover_gallery_popover_component__WEBPACK_IMPORTED_MODULE_3__["GalleryPopoverComponent"],
                // TimelineComponent,
                // FollowersComponent,
                // GalleryComponent,
                _love_love_component__WEBPACK_IMPORTED_MODULE_4__["LoveComponent"],
                _comment_comment_component__WEBPACK_IMPORTED_MODULE_5__["CommentComponent"],
                _share_share_component__WEBPACK_IMPORTED_MODULE_6__["ShareComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _header_header_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"]
            ],
        })
    ], CustomComponentModule);
    return CustomComponentModule;
}());



/***/ }),

/***/ "./src/app/components/gallery-popover/gallery-popover.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/gallery-popover/gallery-popover.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content padding>\n  <section>\n      <ion-row>\n          <ion-col class=\"ion-text-end\">\n              <ion-icon (click)=\"galleryPopOverCloseModal()\" name=\"close\"></ion-icon>\n        \n          </ion-col>\n        </ion-row>\n  </section>\n  <section class=\"ion-text-center jobPostClass\">\n    \n    <ion-row>\n      \n          \n      <ion-col size=\"4\" [ngClass]=\"{ActiveBackground: textBg}\" (click)=\"setActiveTab('Text')\">\n        <p>Text</p>\n      </ion-col>\n      <ion-col size=\"4\" [ngClass]=\"{ActiveBackground: imageBg}\" (click)=\"setActiveTab('Images')\">\n          <p>Images</p>\n        </ion-col>\n        <ion-col size=\"4\" [ngClass]=\"{ActiveBackground: videoBg}\" (click)=\"setActiveTab('Videos')\">\n            <p>Videos</p>\n          </ion-col>\n    </ion-row>\n  </section>\n  \n\n  <section *ngIf=\"activeTab === 'Text'\" >\n    \n        \n    <ion-row>\n      <ion-col>\n             <div class=\"textOuterDiv textArea\">\n              <ion-textarea placeholder=\"Enter your text...\"></ion-textarea>\n             </div>\n             <br>\n             <div class=\"ion-text-center\">\n                <ion-button class=\"greenBtn\">Publish</ion-button>\n            </div>\n      </ion-col>\n    </ion-row>\n    \n  </section>\n\n  <section *ngIf=\"activeTab === 'Images'\">\n      <ion-row>\n          <ion-col>\n                 <div class=\"textOuterDiv\">\n                    <ion-input type=\"text\" placeholder=\"Enter your title\"></ion-input>\n                 </div>\n                 <div class=\"textOuterDiv textArea\">\n                    <ion-textarea placeholder=\"Enter your description...\"></ion-textarea>\n                   </div>\n                   <div class=\"textOuterDiv\">\n                      <ion-input type=\"file\" placeholder=\"Enter your title\"></ion-input>\n                   </div>\n                   <br>\n                 <div class=\"ion-text-center\">\n                    <ion-button class=\"greenBtn\">Publish</ion-button>\n                </div>\n          </ion-col>\n        </ion-row>\n    </section>\n\n    <section *ngIf=\"activeTab === 'Videos'\">\n        <ion-row>\n            <ion-col>\n                   <div class=\"textOuterDiv\">\n                      <ion-input type=\"text\" placeholder=\"Enter your title\"></ion-input>\n                   </div>\n                   <div class=\"textOuterDiv textArea\">\n                      <ion-textarea placeholder=\"Enter your description...\"></ion-textarea>\n                     </div>\n                     <div class=\"textOuterDiv\">\n                        <ion-input type=\"file\" placeholder=\"Enter your title\"></ion-input>\n                     </div>\n                     <br>\n                   <div class=\"ion-text-center\">\n                      <ion-button class=\"greenBtn\">Upload</ion-button>\n                  </div>\n            </ion-col>\n          </ion-row>\n      </section>\n</ion-content>"

/***/ }),

/***/ "./src/app/components/gallery-popover/gallery-popover.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/gallery-popover/gallery-popover.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jobPostClass {\n  background: #f2f2f2;\n  margin-top: 25px; }\n\n.jobPostClass p {\n  margin: 5px 0 !important; }\n\n.textOuterDiv {\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  margin: 10px 0; }\n\n.textArea {\n  min-height: 151px; }\n\n.ActiveBackground {\n  background: #d4dae0 !important; }\n\n.greenBtn {\n  --background: #5cb85c!important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYWxsZXJ5LXBvcG92ZXIvRDpcXHNhY2hpblxcdmV5ZXYtZGV2XFx2ZXlldi1kZXYvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGdhbGxlcnktcG9wb3ZlclxcZ2FsbGVyeS1wb3BvdmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLHdCQUFzQixFQUFBOztBQUUxQjtFQUNJLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsY0FBYyxFQUFBOztBQUVsQjtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLDhCQUE2QixFQUFBOztBQUVqQztFQUNJLCtCQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dhbGxlcnktcG9wb3Zlci9nYWxsZXJ5LXBvcG92ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuam9iUG9zdENsYXNzIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG59XG4uam9iUG9zdENsYXNzIHB7XG4gICAgbWFyZ2luOjVweCAwIWltcG9ydGFudDtcbn1cbi50ZXh0T3V0ZXJEaXYge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIG1hcmdpbjogMTBweCAwO1xufVxuLnRleHRBcmVhIHtcbiAgICBtaW4taGVpZ2h0OiAxNTFweDtcbn1cbi5BY3RpdmVCYWNrZ3JvdW5ke1xuICAgIGJhY2tncm91bmQ6ICNkNGRhZTAhaW1wb3J0YW50O1xufVxuLmdyZWVuQnRuIHtcbiAgICAtLWJhY2tncm91bmQ6ICM1Y2I4NWMhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/gallery-popover/gallery-popover.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/gallery-popover/gallery-popover.component.ts ***!
  \*************************************************************************/
/*! exports provided: GalleryPopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPopoverComponent", function() { return GalleryPopoverComponent; });
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


var GalleryPopoverComponent = /** @class */ (function () {
    function GalleryPopoverComponent(modalController) {
        this.modalController = modalController;
        // activeTab = 'Text';
        this.activeTab = 'Text';
        this.textBg = true;
        this.imageBg = false;
        this.videoBg = false;
    }
    GalleryPopoverComponent.prototype.ngOnInit = function () {
    };
    GalleryPopoverComponent.prototype.setActiveTab = function (data) {
        // setActiveTab(data) {
        this.activeTab = data;
        // }
        if (data === 'Text') {
            this.textBg = true;
            this.imageBg = false;
            this.videoBg = false;
        }
        else if (data === 'Images') {
            this.textBg = false;
            this.imageBg = true;
            this.videoBg = false;
        }
        else if (data === 'Videos') {
            this.textBg = false;
            this.imageBg = false;
            this.videoBg = true;
        }
    };
    GalleryPopoverComponent.prototype.galleryPopOverCloseModal = function () {
        this.modalController.dismiss();
    };
    GalleryPopoverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery-popover',
            template: __webpack_require__(/*! ./gallery-popover.component.html */ "./src/app/components/gallery-popover/gallery-popover.component.html"),
            styles: [__webpack_require__(/*! ./gallery-popover.component.scss */ "./src/app/components/gallery-popover/gallery-popover.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], GalleryPopoverComponent);
    return GalleryPopoverComponent;
}());



/***/ }),

/***/ "./src/app/components/love/love.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/love/love.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n  <section>\n    <ion-row>\n      <ion-col>\n        <ion-item class=\"backGround\">\n          <ion-img src=\"assets/image/liked.png\"></ion-img>\n          <ion-icon (click)=\"likeCloseModal()\" slot=\"end\" name=\"close\"></ion-icon>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </section>\n  <section class=\"recommendOut\" padding>\n    <ion-row class=\"recommendBttm\">\n      <ion-col size=\"2\" size-sm=\"2\">\n        <div class=\"recommendImg\">\n          <ion-img src=\"assets/image/gallery/feeds.png\"></ion-img>\n        </div>\n      </ion-col>\n      <ion-col size=\"10\" size-sm=\"8\">\n        <div>\n          <p>Kishor Kumar</p>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"recommendBttm\">\n      <ion-col size=\"2\" size-sm=\"2\">\n        <div class=\"recommendImg\">\n          <ion-img src=\"assets/image/gallery/feeds.png\"></ion-img>\n        </div>\n      </ion-col>\n      <ion-col size=\"10\" size-sm=\"8\">\n        <div>\n          <p>Kishor Kumar</p>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"recommendBttm\">\n      <ion-col size=\"2\" size-sm=\"2\">\n        <div class=\"recommendImg\">\n          <ion-img src=\"assets/image/gallery/feeds.png\"></ion-img>\n        </div>\n      </ion-col>\n      <ion-col size=\"10\" size-sm=\"8\">\n        <div>\n          <p>Kishor Kumar</p>\n        </div>\n      </ion-col>\n    </ion-row>\n  </section>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/components/love/love.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/love/love.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backGround {\n  --background:#ecefec; }\n\n.recommendBttm {\n  border-bottom: 1px solid #ccc; }\n\n.recommendImg ion-img {\n  width: 50px;\n  margin: 0 auto; }\n\n@media screen and (max-width: 575px) {\n  .recommendImg ion-img {\n    width: 35px;\n    margin: 5px auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb3ZlL0Q6XFxzYWNoaW5cXHZleWV2LWRldlxcdmV5ZXYtZGV2L3NyY1xcYXBwXFxjb21wb25lbnRzXFxsb3ZlXFxsb3ZlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksb0JBQWEsRUFBQTs7QUFFakI7RUFDSSw2QkFBNkIsRUFBQTs7QUFFakM7RUFDSSxXQUFXO0VBQ1gsY0FBYyxFQUFBOztBQUVsQjtFQUNJO0lBQ0ksV0FBVztJQUNYLGdCQUFnQixFQUFBLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb3ZlL2xvdmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAucmVjb21tZW5kT3V0e1xuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuLy8gfVxuLmJhY2tHcm91bmR7XG4gICAgLS1iYWNrZ3JvdW5kOiNlY2VmZWM7XG59XG4ucmVjb21tZW5kQnR0bXtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbn1cbi5yZWNvbW1lbmRJbWcgaW9uLWltZ3tcbiAgICB3aWR0aDogNTBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc1cHgpe1xuICAgIC5yZWNvbW1lbmRJbWcgaW9uLWltZ3tcbiAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgIG1hcmdpbjogNXB4IGF1dG87XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/love/love.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/love/love.component.ts ***!
  \***************************************************/
/*! exports provided: LoveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoveComponent", function() { return LoveComponent; });
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


var LoveComponent = /** @class */ (function () {
    function LoveComponent(modalController) {
        this.modalController = modalController;
    }
    LoveComponent.prototype.ngOnInit = function () {
    };
    LoveComponent.prototype.likeCloseModal = function () {
        this.modalController.dismiss();
    };
    LoveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-love',
            template: __webpack_require__(/*! ./love.component.html */ "./src/app/components/love/love.component.html"),
            styles: [__webpack_require__(/*! ./love.component.scss */ "./src/app/components/love/love.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], LoveComponent);
    return LoveComponent;
}());



/***/ }),

/***/ "./src/app/components/share/share.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/share/share.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n  <ion-grid class=\"ion-no-padding social-icons\">\n    <ion-row>\n      <ion-col size=\"11\">\n        <div >\n          <h4>Share with</h4>\n       \n        </div>\n      </ion-col>\n      <ion-col size=\"1\">\n       \n         \n          <ion-icon (click)=\"shareCloseModal()\" name=\"close\"></ion-icon>\n       \n      </ion-col>\n    </ion-row>\n    <ion-row class=\"socialIcon\">\n      <ion-col size=\"12\" size-sm=\"10\" offset-sm=\"1\">\n        <ion-row>\n          <ion-col size=\"3\">\n            <ion-img src=\"assets/image/facebook.png\"></ion-img>\n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-img src=\"assets/image/twitter.png\"></ion-img>\n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-img src=\"assets/image/reddit.png\"></ion-img>\n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-img src=\"assets/image/linkedin.png\"></ion-img>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"textArea\" size=\"12\">\n        <div>\n          <!-- <ion-input rows=\"5\" width=\"100%\" placeholder=\"http://localhost:8100/users/profile\"></ion-input> -->\n          <P>http://localhost:8100/users/profile</P>\n        </div>\n      </ion-col>\n    \n      <ion-col size=\"12\" padding>\n        <div class=\"ion-text-center\">\n          <ion-button class=\"greenBtn\">Copy Link</ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/components/share/share.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/share/share.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".social-icons {\n  padding: 5px 0; }\n\n.socialIcon {\n  margin: 5px 0 15px; }\n\n.social-icons ion-img {\n  width: 45px;\n  margin: 0 auto; }\n\n.textArea {\n  border: 1px solid #ccc; }\n\n.textArea P {\n  padding: 0;\n  margin: 5px; }\n\n.greenBtn {\n  --background: #5cb85c!important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZS9EOlxcc2FjaGluXFx2ZXlldi1kZXZcXHZleWV2LWRldi9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2hhcmVcXHNoYXJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLFdBQVc7RUFDWCxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksc0JBQXFCLEVBQUE7O0FBRXpCO0VBQ0ksVUFBVTtFQUNWLFdBQVcsRUFBQTs7QUFFZjtFQUNJLCtCQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlL3NoYXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNvY2lhbC1pY29uc3tcbiAgICBwYWRkaW5nOiA1cHggMDtcbn1cbi5zb2NpYWxJY29ue1xuICAgIG1hcmdpbjogNXB4IDAgMTVweDtcbn1cbi5zb2NpYWwtaWNvbnMgaW9uLWltZ3tcbiAgICB3aWR0aDogNDVweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cbi50ZXh0QXJlYXtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XG59XG4udGV4dEFyZWEgUHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogNXB4O1xufVxuLmdyZWVuQnRuIHtcbiAgICAtLWJhY2tncm91bmQ6ICM1Y2I4NWMhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/share/share.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/share/share.component.ts ***!
  \*****************************************************/
/*! exports provided: ShareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareComponent", function() { return ShareComponent; });
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


var ShareComponent = /** @class */ (function () {
    function ShareComponent(modalController) {
        this.modalController = modalController;
    }
    ShareComponent.prototype.ngOnInit = function () {
    };
    ShareComponent.prototype.shareCloseModal = function () {
        this.modalController.dismiss();
    };
    ShareComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-share',
            template: __webpack_require__(/*! ./share.component.html */ "./src/app/components/share/share.component.html"),
            styles: [__webpack_require__(/*! ./share.component.scss */ "./src/app/components/share/share.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], ShareComponent);
    return ShareComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~dashboard-dashboard-tab-dashboard-tab-module~pages-users-users-module.js.map