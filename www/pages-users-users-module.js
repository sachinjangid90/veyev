(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-users-users-module"],{

/***/ "./src/app/pages/users/followers/followers.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/users/followers/followers.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header class=\"followersHeader\"></app-header>\n<ion-content>\n  <section class=\"tabs\">\n    <ion-row>\n      <ion-col class=\"ion-text-right borderRight\">\n        <h3\n          [ngClass]=\"{ fontColorOne: redColored, fontColorTwo: !redColored }\"\n          (click)=\"followers()\"\n        >\n          Followers\n        </h3>\n      </ion-col>\n      <ion-col>\n        <h3\n          [ngClass]=\"{\n            fontColorOne: otherColored,\n            fontColorTwo: !otherColored\n          }\"\n          (click)=\"following()\"\n        >\n          Following\n        </h3>\n      </ion-col>\n    </ion-row>\n  </section>\n\n  <section *ngIf=\"follower\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Follow\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Follow\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Follow\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Follow\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Follow\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Follow\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Follow\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Follow\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Follow\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Follow\n            </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </section>\n  <section *ngIf=\"!follower\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </section> \n  <section class=\"icon-list\">\n      <ion-list>\n          <!-- (click)=\"timelineModal()\" -->\n        <ion-item >\n          <ion-icon [routerLink]=\"['/users/timelines']\" name=\"menu\"></ion-icon>\n        </ion-item>\n        <!-- (click)=\"galleryModal()\" -->\n        <ion-item >\n          <ion-icon [routerLink]=\"['/users/gallery']\" name=\"image\"></ion-icon>\n        </ion-item>\n        <ion-item [routerLink]=\"['/users/followers']\">\n          <ion-icon name=\"people\"></ion-icon>\n        </ion-item>\n      </ion-list>\n    </section>\n    <section class=\"add-icon\">\n        <ion-badge (click)=\"openPopover()\">\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-badge>\n      </section>\n  </ion-content>\n"

/***/ }),

/***/ "./src/app/pages/users/followers/followers.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/users/followers/followers.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".marginRight {\n  margin-right: 10px !important; }\n\n.followers {\n  text-align: center;\n  padding: 15px !important; }\n\n.followers h6 {\n  margin: 3px 0 0 0; }\n\n.followers p {\n  margin: 2px 0 2px 0;\n  color: #ff0000 !important;\n  font-size: 13px; }\n\n.borderRight {\n  border-right: 1px solid #000; }\n\n.tabs {\n  margin: 20px 0 10px 0;\n  padding: 0; }\n\n.tabs h3 {\n  margin: 0;\n  padding: 0;\n  font-weight: bold; }\n\n.fontColorOne {\n  color: #ff0000 !important; }\n\n.fontColorTwo {\n  color: #000; }\n\n.followersHeader {\n  display: none; }\n\n.icon-list {\n  width: 57px;\n  position: fixed;\n  top: 50%;\n  -webkit-transform: translatey(-50%);\n          transform: translatey(-50%);\n  right: 0;\n  border: 1px solid #ccc; }\n\n.icon-list ion-item .item-native {\n  padding: 0 !important; }\n\n.add-icon ion-icon {\n  font-size: 30px; }\n\n.add-icon ion-badge {\n  border-radius: 30px;\n  background: #ff0000; }\n\n.add-icon {\n  position: fixed;\n  top: 84%;\n  -webkit-transform: translateY(-84%);\n          transform: translateY(-84%);\n  right: 10px; }\n\nion-button {\n  --background: #5bc0de; }\n\n@media screen and (max-width: 767px) {\n  .followersHeader {\n    display: block; } }\n\n@media screen and (max-width: 575px) {\n  .followers {\n    padding: 12px !important; }\n  .followers ion-img {\n    width: 75%;\n    margin: auto; }\n  .followers ion-button {\n    text-transform: initial;\n    font-size: 12px;\n    height: 30px !important; }\n  .marginRight {\n    margin-right: 4px !important;\n    font-size: 12px; } }\n\n@media screen and (max-width: 415px) {\n  .followers {\n    padding: 2px !important; }\n  .followers ion-button {\n    height: 27px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlcnMvZm9sbG93ZXJzL0Q6XFxzYWNoaW5cXHZleWV2LWRldlxcdmV5ZXYtZGV2L3NyY1xcYXBwXFxwYWdlc1xcdXNlcnNcXGZvbGxvd2Vyc1xcZm9sbG93ZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQTRCLEVBQUE7O0FBRWhDO0VBQ0ksa0JBQWtCO0VBQ2xCLHdCQUFzQixFQUFBOztBQUUxQjtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLG1CQUFtQjtFQUNuQix5QkFBdUI7RUFDdkIsZUFBZSxFQUFBOztBQUVuQjtFQUNJLDRCQUEyQixFQUFBOztBQUUvQjtFQUNJLHFCQUFxQjtFQUNyQixVQUFVLEVBQUE7O0FBRWQ7RUFDSSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLHlCQUF1QixFQUFBOztBQUUzQjtFQUNJLFdBQVUsRUFBQTs7QUFFZDtFQUNJLGFBQWEsRUFBQTs7QUFFakI7RUFDSSxXQUFXO0VBQ1gsZUFBZTtFQUNmLFFBQVE7RUFDUixtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLFFBQVE7RUFDUixzQkFBcUIsRUFBQTs7QUFFekI7RUFDSSxxQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLGVBQWU7RUFDZixRQUFRO0VBQ1IsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixXQUFXLEVBQUE7O0FBRWY7RUFDSSxxQkFBYSxFQUFBOztBQUVqQjtFQUNJO0lBQ0ksY0FBYyxFQUFBLEVBQ2pCOztBQUVMO0VBQ0k7SUFDSSx3QkFBd0IsRUFBQTtFQUU1QjtJQUNJLFVBQVU7SUFDVixZQUFZLEVBQUE7RUFFaEI7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLHVCQUFzQixFQUFBO0VBRTFCO0lBQ0ksNEJBQTRCO0lBQzVCLGVBQWUsRUFBQSxFQUNsQjs7QUFFTDtFQUNJO0lBQ0ksdUJBQXVCLEVBQUE7RUFFM0I7SUFDSSx1QkFBc0IsRUFBQSxFQUN6QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXJzL2ZvbGxvd2Vycy9mb2xsb3dlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyZ2luUmlnaHR7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4IWltcG9ydGFudDtcbn1cbi5mb2xsb3dlcnMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOjE1cHghaW1wb3J0YW50O1xufVxuLmZvbGxvd2VycyBoNntcbiAgICBtYXJnaW46IDNweCAwIDAgMDtcbn1cbi5mb2xsb3dlcnMgcHtcbiAgICBtYXJnaW46IDJweCAwIDJweCAwO1xuICAgIGNvbG9yOiNmZjAwMDAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5ib3JkZXJSaWdodHtcbiAgICBib3JkZXItcmlnaHQ6MXB4IHNvbGlkICMwMDA7XG59XG4udGFic3tcbiAgICBtYXJnaW46IDIwcHggMCAxMHB4IDA7XG4gICAgcGFkZGluZzogMDtcbn1cbi50YWJzIGgze1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmZvbnRDb2xvck9uZXtcbiAgICBjb2xvcjojZmYwMDAwIWltcG9ydGFudFxufVxuLmZvbnRDb2xvclR3b3tcbiAgICBjb2xvcjojMDAwO1xufVxuLmZvbGxvd2Vyc0hlYWRlcntcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLmljb24tbGlzdCB7XG4gICAgd2lkdGg6IDU3cHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgtNTAlKTtcbiAgICByaWdodDogMDtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XG59XG4uaWNvbi1saXN0IGlvbi1pdGVtIC5pdGVtLW5hdGl2ZSB7XG4gICAgcGFkZGluZzowIWltcG9ydGFudDtcbn1cbi5hZGQtaWNvbiBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuLmFkZC1pY29uIGlvbi1iYWRnZSB7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmYwMDAwO1xufVxuLmFkZC1pY29uIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA4NCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04NCUpO1xuICAgIHJpZ2h0OiAxMHB4O1xufVxuaW9uLWJ1dHRvbntcbiAgICAtLWJhY2tncm91bmQ6ICM1YmMwZGU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KXtcbiAgICAuZm9sbG93ZXJzSGVhZGVye1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NXB4KXtcbiAgICAuZm9sbG93ZXJzIHtcbiAgICAgICAgcGFkZGluZzogMTJweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuZm9sbG93ZXJzIGlvbi1pbWcge1xuICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICAgIC5mb2xsb3dlcnMgaW9uLWJ1dHRvbiB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGhlaWdodDogMzBweCFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5tYXJnaW5SaWdodCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQxNXB4KXtcbiAgICAuZm9sbG93ZXJzIHtcbiAgICAgICAgcGFkZGluZzogMnB4ICFpbXBvcnRhbnQ7XG4gICAgfSAgIFxuICAgIC5mb2xsb3dlcnMgaW9uLWJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogMjdweCFpbXBvcnRhbnQ7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/users/followers/followers.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/users/followers/followers.component.ts ***!
  \**************************************************************/
/*! exports provided: FollowersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowersComponent", function() { return FollowersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_components_gallery_popover_gallery_popover_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/gallery-popover/gallery-popover.component */ "./src/app/components/gallery-popover/gallery-popover.component.ts");
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



var FollowersComponent = /** @class */ (function () {
    function FollowersComponent(modalController) {
        this.modalController = modalController;
        this.follower = true;
        this.redColored = true;
        this.otherColored = false;
    }
    FollowersComponent.prototype.ngOnInit = function () {
    };
    FollowersComponent.prototype.openPopover = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: src_app_components_gallery_popover_gallery_popover_component__WEBPACK_IMPORTED_MODULE_2__["GalleryPopoverComponent"],
                            cssClass: 'openPopoverCss'
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FollowersComponent.prototype.followers = function () {
        this.follower = true;
        this.redColored = true;
        this.otherColored = false;
    };
    FollowersComponent.prototype.following = function () {
        this.follower = false;
        this.redColored = false;
        this.otherColored = true;
    };
    FollowersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-followers',
            template: __webpack_require__(/*! ./followers.component.html */ "./src/app/pages/users/followers/followers.component.html"),
            styles: [__webpack_require__(/*! ./followers.component.scss */ "./src/app/pages/users/followers/followers.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], FollowersComponent);
    return FollowersComponent;
}());



/***/ }),

/***/ "./src/app/pages/users/gallery/gallery.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/users/gallery/gallery.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header class=\"galleryHeader\"></app-header>\n<ion-content class=\"\">\n    <section class=\"tabs\">\n        <ion-row>\n          <ion-col class=\"ion-text-right borderRight\">\n            \n              <h3 [ngClass]=\"{fontColorOne: redColored, fontColorTwo: !redColored}\" (click)=\"imagesAll()\">Images</h3>\n            </ion-col>\n            <ion-col>\n            <h3 [ngClass]=\"{fontColorOne: otherColored, fontColorTwo: !otherColored}\" (click)=\"videosAll()\">Videos</h3>\n            \n          </ion-col>\n        </ion-row>\n      </section>\n \n\n      <section *ngIf=\"Images\">\n          <ion-grid class=\"galleryOuter\">\n              <ion-row>\n                <ion-col>\n                    <video\n                    height=\"100%\"\n                    width=\"100%\"\n                    preload=\"auto\"\n                    onmouseover=\"this.play();\"\n                    onmouseout=\"this.pause();\"\n                  >\n                    <source\n                      src=\"http://veyev.social/uploads//86fb39d1e797d708be171fa93243d72b.mp4\"\n                      type=\"video/mp4\"\n                    />\n                  </video>\n                </ion-col>\n                <ion-col>\n                    <video\n            height=\"100%\"\n            width=\"100%\"\n            preload=\"auto\"\n            onmouseover=\"this.play();\"\n            onmouseout=\"this.pause();\"\n          >\n            <source\n              src=\"http://veyev.social/uploads//86fb39d1e797d708be171fa93243d72b.mp4\"\n              type=\"video/mp4\"\n            />\n          </video>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                    <video\n                    height=\"100%\"\n                    width=\"100%\"\n                    preload=\"auto\"\n                    onmouseover=\"this.play();\"\n                    onmouseout=\"this.pause();\"\n                  >\n                    <source\n                      src=\"http://veyev.social/uploads//86fb39d1e797d708be171fa93243d72b.mp4\"\n                      type=\"video/mp4\"\n                    />\n                  </video>\n                </ion-col>\n                <ion-col>\n                 \n                    <video\n                    height=\"100%\"\n                    width=\"100%\"\n                    preload=\"auto\"\n                    onmouseover=\"this.play();\"\n                    onmouseout=\"this.pause();\"\n                  >\n                    <source\n                      src=\"http://veyev.social/uploads//86fb39d1e797d708be171fa93243d72b.mp4\"\n                      type=\"video/mp4\"\n                    />\n                  </video>\n                </ion-col>\n              </ion-row>\n            \n              <ion-row>\n                <ion-col>\n                    <video\n            height=\"100%\"\n            width=\"100%\"\n            preload=\"auto\"\n            onmouseover=\"this.play();\"\n            onmouseout=\"this.pause();\"\n          >\n            <source\n              src=\"http://veyev.social/uploads//86fb39d1e797d708be171fa93243d72b.mp4\"\n              type=\"video/mp4\"\n            />\n          </video>\n                 \n                </ion-col>\n                <ion-col>\n                    <video\n                    height=\"100%\"\n                    width=\"100%\"\n                    preload=\"auto\"\n                    onmouseover=\"this.play();\"\n                    onmouseout=\"this.pause();\"\n                  >\n                    <source\n                      src=\"http://veyev.social/uploads//86fb39d1e797d708be171fa93243d72b.mp4\"\n                      type=\"video/mp4\"\n                    />\n                  </video>\n                </ion-col>\n              </ion-row>\n              \n             </ion-grid>\n      </section>\n\n      <section *ngIf=\"!Images\">\n          <ion-grid class=\"galleryOuter\">\n              <ion-row>\n                <ion-col>\n                  <ion-img src=\"assets/image/gallery/0.png\"></ion-img>\n                </ion-col>\n                <ion-col>\n                    <ion-img src=\"assets/image/gallery/4.jpg\"></ion-img>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <ion-img src=\"assets/image/gallery/2.jpg\"></ion-img>\n                </ion-col>\n                <ion-col>\n                 \n                  <ion-img src=\"assets/image/gallery/1.png\"></ion-img>\n                </ion-col>\n              </ion-row>\n            \n              <ion-row>\n                <ion-col>\n                    <ion-img src=\"assets/image/gallery/8.jpg\"></ion-img>\n                 \n                </ion-col>\n                <ion-col>\n                  <ion-img src=\"assets/image/gallery/6.jpg\"></ion-img>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <ion-img src=\"assets/image/gallery/7.jpg\"></ion-img>\n                </ion-col>\n                <ion-col>\n                    <ion-img src=\"assets/image/gallery/5.jpg\"></ion-img>\n                </ion-col>\n              </ion-row>\n             </ion-grid>\n      </section>\n      <section class=\"icon-list\">\n          <ion-list>\n              <!-- (click)=\"timelineModal()\" -->\n            <ion-item >\n              <ion-icon [routerLink]=\"['/users/timelines']\" name=\"menu\"></ion-icon>\n            </ion-item>\n            <!-- (click)=\"galleryModal()\" -->\n            <ion-item >\n              <ion-icon [routerLink]=\"['/users/gallery']\" name=\"image\"></ion-icon>\n            </ion-item>\n            <ion-item [routerLink]=\"['/users/followers']\">\n              <ion-icon name=\"people\"></ion-icon>\n            </ion-item>\n          </ion-list>\n        </section>\n        <section class=\"add-icon\">\n            <ion-badge (click)=\"openPopover()\">\n                <ion-icon name=\"add\"></ion-icon>\n            </ion-badge>\n          </section>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/users/gallery/gallery.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/users/gallery/gallery.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".galleryOuter ion-col {\n  height: 210px; }\n\n.galleryOuter ion-col ion-img {\n  height: 100%; }\n\n.borderRight {\n  border-right: 1px solid #000; }\n\n.tabs {\n  margin: 20px 0 10px 0;\n  padding: 0; }\n\n.tabs h3 {\n  margin: 0;\n  padding: 0;\n  font-weight: bold; }\n\n.fontColorOne {\n  color: #ff0000 !important; }\n\n.fontColorTwo {\n  color: #000; }\n\n.galleryHeader {\n  display: none; }\n\n.icon-list {\n  width: 57px;\n  position: fixed;\n  top: 50%;\n  -webkit-transform: translatey(-50%);\n          transform: translatey(-50%);\n  right: 0;\n  border: 1px solid #ccc; }\n\n.icon-list ion-item .item-native {\n  padding: 0 !important; }\n\n.add-icon ion-icon {\n  font-size: 30px; }\n\n.add-icon ion-badge {\n  border-radius: 30px;\n  background: #ff0000; }\n\n.add-icon {\n  position: fixed;\n  top: 84%;\n  -webkit-transform: translateY(-84%);\n          transform: translateY(-84%);\n  right: 10px; }\n\n@media screen and (max-width: 767px) {\n  .galleryHeader {\n    display: block; } }\n\n@media screen and (max-width: 575px) {\n  .galleryOuter ion-col {\n    height: 150px; } }\n\n@media screen and (max-width: 415px) {\n  .galleryOuter ion-col {\n    height: 100px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlcnMvZ2FsbGVyeS9EOlxcc2FjaGluXFx2ZXlldi1kZXZcXHZleWV2LWRldi9zcmNcXGFwcFxccGFnZXNcXHVzZXJzXFxnYWxsZXJ5XFxnYWxsZXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYSxFQUFBOztBQUVqQjtFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFDSSw0QkFBMkIsRUFBQTs7QUFFL0I7RUFDSSxxQkFBcUI7RUFDckIsVUFBVSxFQUFBOztBQUVkO0VBQ0ksU0FBUztFQUNULFVBQVU7RUFDVixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSx5QkFBdUIsRUFBQTs7QUFFM0I7RUFDSSxXQUFVLEVBQUE7O0FBRWQ7RUFDSSxhQUFhLEVBQUE7O0FBRWpCO0VBQ0ksV0FBVztFQUNYLGVBQWU7RUFDZixRQUFRO0VBQ1IsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixRQUFRO0VBQ1Isc0JBQXFCLEVBQUE7O0FBRXpCO0VBQ0kscUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksZUFBZSxFQUFBOztBQUVuQjtFQUNJLG1CQUFtQjtFQUNuQixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxlQUFlO0VBQ2YsUUFBUTtFQUNSLG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IsV0FBVyxFQUFBOztBQUVmO0VBQ0k7SUFDSSxjQUFjLEVBQUEsRUFDakI7O0FBRUw7RUFDSTtJQUNJLGFBQWEsRUFBQSxFQUNoQjs7QUFFTDtFQUNJO0lBQ0ksYUFBYSxFQUFBLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXNlcnMvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdhbGxlcnlPdXRlciBpb24tY29sIHtcbiAgICBoZWlnaHQ6IDIxMHB4O1xufVxuLmdhbGxlcnlPdXRlciBpb24tY29sIGlvbi1pbWcge1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi5ib3JkZXJSaWdodHtcbiAgICBib3JkZXItcmlnaHQ6MXB4IHNvbGlkICMwMDA7XG59XG4udGFic3tcbiAgICBtYXJnaW46IDIwcHggMCAxMHB4IDA7XG4gICAgcGFkZGluZzogMDtcbn1cbi50YWJzIGgze1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmZvbnRDb2xvck9uZXtcbiAgICBjb2xvcjojZmYwMDAwIWltcG9ydGFudFxufVxuLmZvbnRDb2xvclR3b3tcbiAgICBjb2xvcjojMDAwO1xufVxuLmdhbGxlcnlIZWFkZXJ7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5pY29uLWxpc3Qge1xuICAgIHdpZHRoOiA1N3B4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoLTUwJSk7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xufVxuLmljb24tbGlzdCBpb24taXRlbSAuaXRlbS1uYXRpdmUge1xuICAgIHBhZGRpbmc6MCFpbXBvcnRhbnQ7XG59XG4uYWRkLWljb24gaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5hZGQtaWNvbiBpb24tYmFkZ2Uge1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmMDAwMDtcbn1cbi5hZGQtaWNvbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogODQlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtODQlKTtcbiAgICByaWdodDogMTBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpe1xuICAgIC5nYWxsZXJ5SGVhZGVye1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NXB4KXtcbiAgICAuZ2FsbGVyeU91dGVyIGlvbi1jb2wge1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDE1cHgpe1xuICAgIC5nYWxsZXJ5T3V0ZXIgaW9uLWNvbCB7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/users/gallery/gallery.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/users/gallery/gallery.component.ts ***!
  \**********************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_components_gallery_popover_gallery_popover_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/gallery-popover/gallery-popover.component */ "./src/app/components/gallery-popover/gallery-popover.component.ts");
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



var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(modalController) {
        this.modalController = modalController;
        this.Images = false;
        this.redColored = true;
        this.otherColored = false;
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent.prototype.openPopover = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: src_app_components_gallery_popover_gallery_popover_component__WEBPACK_IMPORTED_MODULE_2__["GalleryPopoverComponent"],
                            cssClass: 'openPopoverCss'
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    GalleryComponent.prototype.imagesAll = function () {
        this.Images = false;
        this.redColored = true;
        this.otherColored = false;
    };
    GalleryComponent.prototype.videosAll = function () {
        this.Images = true;
        this.redColored = false;
        this.otherColored = true;
    };
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/pages/users/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.scss */ "./src/app/pages/users/gallery/gallery.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/pages/users/profile/profile.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/users/profile/profile.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ion-content>\n  <div class=\"profile\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <div class=\"editClass\">\n            <div>\n              <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\n            </div>\n            <div>\n              <ion-label>Edit</ion-label>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid class=\"detailProfile ion-no-padding\">\n      <ion-row class=\"\">\n        <ion-col size=\"12\" size-md=\"8\" offset-md=\"2\" class=\"ion-no-padding\">\n          <ion-row>\n            <ion-col size=\"12\" size-md=\"3\" class=\"ion-no-padding\">\n              <div>\n                <ion-img src=\"assets/image/profile.jpg\"></ion-img>\n              </div>\n            </ion-col>\n            <ion-col size=\"12\" size-md=\"9\" class=\"ion-no-padding\">\n              <ion-card>\n                <div class=\"arrows\">\n                    <img *ngIf=\"showItem\" (click)=\"getItem()\" src=\"assets/image/arrow-down.png\">\n                    <img *ngIf=\"!showItem\" (click)=\"getItem()\" src=\"assets/image/arrow-up.png\">\n                </div>\n                <p>@vaggi_i_am</p>\n                <h5>Kumari Bhanu</h5>\n                <div [ngClass]=\"{hideDiv: showItem}\">\n                    <p >I believe in humanity.</p>\n                    <ion-img src=\"assets/image/pencil-edit.png\"></ion-img>\n                </div>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <section class=\"icon-list\">\n      <ion-list>\n          <!-- (click)=\"timelineModal()\" -->\n        <ion-item >\n          <ion-icon [routerLink]=\"['/users/timelines']\" name=\"menu\"></ion-icon>\n        </ion-item>\n        <!-- (click)=\"galleryModal()\" -->\n        <ion-item >\n          <ion-icon [routerLink]=\"['/users/gallery']\" name=\"image\"></ion-icon>\n        </ion-item>\n        <ion-item >\n          <ion-icon [routerLink]=\"['/users/followers']\" name=\"people\"></ion-icon>\n        </ion-item>\n      </ion-list>\n    </section>\n\n    <section class=\"add-icon\">\n        <ion-badge (click)=\"openPopover()\">\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-badge>\n      </section>\n  </div>\n</ion-content>\n\n\n\n"

/***/ }),

/***/ "./src/app/pages/users/profile/profile.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/users/profile/profile.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile {\n  background-image: url(/assets/image/coffee.gif);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  height: 100%;\n  width: 100%; }\n\n.editClass {\n  color: #fff;\n  display: flex; }\n\n.editClass div {\n  display: flex; }\n\n.editClass ion-icon {\n  font-size: 40px; }\n\n.editClass ion-label {\n  font-size: 20px;\n  margin: 10px 0 0 15px; }\n\n.detailProfile div ion-img {\n  border: 2px solid #fff;\n  border-radius: 90px;\n  overflow: hidden;\n  box-shadow: 0 0 20px 0 #7890a1;\n  -webkit-animation: images 4s infinite;\n          animation: images 4s infinite; }\n\n@-webkit-keyframes images {\n  0% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95); }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  100% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95); } }\n\n@keyframes images {\n  0% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95); }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  100% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95); } }\n\n.detailProfile ion-card {\n  background: rgba(0, 0, 0, 0.9);\n  padding: 10px 20px;\n  height: 100%;\n  margin: 0;\n  color: #fff;\n  overflow: initial; }\n\n.detailProfile {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n\n.detailProfile ion-card div ion-img {\n  border: 1px solid #fff;\n  border-radius: 30px;\n  padding: 4px 5px;\n  width: 30px;\n  position: absolute;\n  right: 0px;\n  z-index: 999;\n  bottom: 0px; }\n\n.icon-list {\n  width: 57px;\n  position: fixed;\n  top: 50%;\n  -webkit-transform: translatey(-50%);\n          transform: translatey(-50%);\n  right: 0;\n  border: 1px solid #ccc; }\n\n.icon-list ion-item .item-native {\n  padding: 0 !important; }\n\n.add-icon ion-icon {\n  font-size: 30px; }\n\n.add-icon ion-badge {\n  border-radius: 30px;\n  background: #ff0000; }\n\n.add-icon {\n  position: fixed;\n  top: 84%;\n  -webkit-transform: translateY(-84%);\n          transform: translateY(-84%);\n  right: 10px; }\n\n.hideDiv {\n  display: none; }\n\n.arrows {\n  width: 15px;\n  margin: 0 auto;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%); }\n\n.arrows img {\n  -webkit-animation: arrows 2s infinite;\n          animation: arrows 2s infinite; }\n\n@-webkit-keyframes arrows {\n  0% {\n    margin-top: 3px; }\n  50% {\n    margin-top: -6px; }\n  100% {\n    margin-top: 3px; } }\n\n@keyframes arrows {\n  0% {\n    margin-top: 3px; }\n  50% {\n    margin-top: -6px; }\n  100% {\n    margin-top: 3px; } }\n\n@media screen and (max-width: 767px) {\n  .detailProfile div ion-img {\n    width: 100px;\n    margin: 0 auto; }\n  .detailProfile ion-card P {\n    margin: 0; }\n  .detailProfile ion-card h5 {\n    margin-top: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlcnMvcHJvZmlsZS9EOlxcc2FjaGluXFx2ZXlldi1kZXZcXHZleWV2LWRldi9zcmNcXGFwcFxccGFnZXNcXHVzZXJzXFxwcm9maWxlXFxwcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0NBQThDO0VBQzlDLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBRWY7RUFDSSxXQUFXO0VBQ1gsYUFBYSxFQUFBOztBQUVqQjtFQUNJLGFBQWEsRUFBQTs7QUFFakI7RUFDSSxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksZUFBZTtFQUNmLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtFQUM5QixxQ0FBNEI7VUFBNUIsNkJBQTRCLEVBQUE7O0FBRWhDO0VBQ0k7SUFDSSw4QkFBcUI7WUFBckIsc0JBQXFCLEVBQUE7RUFFekI7SUFDSSwyQkFBbUI7WUFBbkIsbUJBQW1CLEVBQUE7RUFFdkI7SUFDSSw4QkFBcUI7WUFBckIsc0JBQXFCLEVBQUEsRUFBQTs7QUFSN0I7RUFDSTtJQUNJLDhCQUFxQjtZQUFyQixzQkFBcUIsRUFBQTtFQUV6QjtJQUNJLDJCQUFtQjtZQUFuQixtQkFBbUIsRUFBQTtFQUV2QjtJQUNJLDhCQUFxQjtZQUFyQixzQkFBcUIsRUFBQSxFQUFBOztBQUc3QjtFQUNJLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFNBQVE7RUFDUixXQUFVO0VBQ1YsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUSxFQUFBOztBQUVaO0VBQ0ksc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFFZjtFQUNJLFdBQVc7RUFDWCxlQUFlO0VBQ2YsUUFBUTtFQUNSLG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IsUUFBUTtFQUNSLHNCQUFxQixFQUFBOztBQUV6QjtFQUNJLHFCQUFtQixFQUFBOztBQUV2QjtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxtQkFBbUI7RUFDbkIsbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksZUFBZTtFQUNmLFFBQVE7RUFDUixtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLFdBQVcsRUFBQTs7QUFFZjtFQUNJLGFBQWEsRUFBQTs7QUFFakI7RUFDSSxXQUFXO0VBQ1gsY0FBYTtFQUViLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsbUNBQTJCO1VBQTNCLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLHFDQUE2QjtVQUE3Qiw2QkFBNkIsRUFBQTs7QUFFakM7RUFDSTtJQUNJLGVBQWUsRUFBQTtFQUVuQjtJQUNJLGdCQUFnQixFQUFBO0VBRXBCO0lBQ0ksZUFBZSxFQUFBLEVBQUE7O0FBUnZCO0VBQ0k7SUFDSSxlQUFlLEVBQUE7RUFFbkI7SUFDSSxnQkFBZ0IsRUFBQTtFQUVwQjtJQUNJLGVBQWUsRUFBQSxFQUFBOztBQWF2QjtFQUNJO0lBQ0ksWUFBWTtJQUNaLGNBQWMsRUFBQTtFQUVsQjtJQUNJLFNBQVEsRUFBQTtFQUVaO0lBQ0ksYUFBWSxFQUFBLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91c2Vycy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCgvYXNzZXRzL2ltYWdlL2NvZmZlZS5naWYpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmVkaXRDbGFzcyB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5lZGl0Q2xhc3MgZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLmVkaXRDbGFzcyBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xufVxuLmVkaXRDbGFzcyBpb24tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW46IDEwcHggMCAwIDE1cHg7O1xufVxuLmRldGFpbFByb2ZpbGUgZGl2IGlvbi1pbWcge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogOTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IDAgIzc4OTBhMTtcbiAgICBhbmltYXRpb246aW1hZ2VzIDRzIGluZmluaXRlO1xufVxuQGtleWZyYW1lcyBpbWFnZXN7XG4gICAgMCV7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjk1KTtcbiAgICB9XG4gICAgNTAle1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbiAgICAxMDAle1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC45NSk7XG4gICAgfVxufVxuLmRldGFpbFByb2ZpbGUgaW9uLWNhcmQge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjowO1xuICAgIGNvbG9yOiNmZmY7XG4gICAgb3ZlcmZsb3c6IGluaXRpYWw7XG59XG4uZGV0YWlsUHJvZmlsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xufVxuLmRldGFpbFByb2ZpbGUgaW9uLWNhcmQgZGl2IGlvbi1pbWcge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBwYWRkaW5nOiA0cHggNXB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMHB4O1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBib3R0b206IDBweDtcbn1cbi5pY29uLWxpc3Qge1xuICAgIHdpZHRoOiA1N3B4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoLTUwJSk7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xufVxuLmljb24tbGlzdCBpb24taXRlbSAuaXRlbS1uYXRpdmUge1xuICAgIHBhZGRpbmc6MCFpbXBvcnRhbnQ7XG59XG4uYWRkLWljb24gaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5hZGQtaWNvbiBpb24tYmFkZ2Uge1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmMDAwMDtcbn1cbi5hZGQtaWNvbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogODQlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtODQlKTtcbiAgICByaWdodDogMTBweDtcbn1cbi5oaWRlRGl2IHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLmFycm93c3tcbiAgICB3aWR0aDogMTVweDtcbiAgICBtYXJnaW46MCBhdXRvO1xuICAgIC8vIGFuaW1hdGlvbjogYXJyb3dzIDVzIGluZmluaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIFxufVxuLmFycm93cyBpbWd7XG4gICAgYW5pbWF0aW9uOiBhcnJvd3MgMnMgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIGFycm93c3tcbiAgICAwJXtcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgIH1cbiAgICA1MCV7XG4gICAgICAgIG1hcmdpbi10b3A6IC02cHg7XG4gICAgfVxuICAgIDEwMCV7XG4gICAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICB9XG59XG4vLyAuYXJyb3dzIGltZyB7XG4vLyAgICAgYm9yZGVyOiBub25lIWltcG9ydGFudDtcbi8vICAgICBib3gtc2hhZG93OiBub25lIWltcG9ydGFudDtcbi8vICAgICB3aWR0aDogMzBweCFpbXBvcnRhbnQ7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIHRvcDogMDtcbi8vICAgICBsZWZ0OiAwO1xuLy8gICAgIHJpZ2h0OiAwO1xuLy8gICAgIG1hcmdpbjogMCBhdXRvO1xuLy8gfVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCl7XG4gICAgLmRldGFpbFByb2ZpbGUgZGl2IGlvbi1pbWcge1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbiAgICAuZGV0YWlsUHJvZmlsZSBpb24tY2FyZCBQe1xuICAgICAgICBtYXJnaW46MDtcbiAgICB9XG4gICAgLmRldGFpbFByb2ZpbGUgaW9uLWNhcmQgaDV7XG4gICAgICAgIG1hcmdpbi10b3A6MDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/users/profile/profile.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/users/profile/profile.component.ts ***!
  \**********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_components_gallery_popover_gallery_popover_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/gallery-popover/gallery-popover.component */ "./src/app/components/gallery-popover/gallery-popover.component.ts");
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



// import { TimelineComponent } from 'src/app/components/timeline/timeline.component';
// import { GalleryComponent } from 'src/app/pages/users/gallery/gallery.component';
// import { FollowersComponent } from 'src/app/pages/users/followers/followers.component';
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(modalController) {
        this.modalController = modalController;
        this.showItem = true;
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    //job post
    ProfileComponent.prototype.openPopover = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: src_app_components_gallery_popover_gallery_popover_component__WEBPACK_IMPORTED_MODULE_2__["GalleryPopoverComponent"],
                            cssClass: 'openPopoverCss'
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //timeline
    // async timelineModal() {
    //   const modal = await this.modalController.create({
    //     component: TimelineComponent,
    //     cssClass:'timelineCss'   
    //   });
    //   return await modal.present();
    // }
    //gallery
    //  async galleryModal() {
    //   const modal = await this.modalController.create({
    //     component: GalleryComponent,
    //     cssClass:'galleryCss'
    //   });
    //   return await modal.present();
    // }
    //follower
    //  async followerModal() {
    //   const modal = await this.modalController.create({
    //     component: FollowersComponent,
    //     cssClass:'followerCss'
    //   });
    //   return await modal.present();
    // }
    ProfileComponent.prototype.getItem = function () {
        this.showItem = !this.showItem;
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/pages/users/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/pages/users/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/pages/users/timelines/timelines.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/users/timelines/timelines.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header class=\"timelineHeader\"></app-header>\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-row>\n          <ion-col>\n            <h4 class=\"ion-no-margin\">Kumar Vagish</h4>\n          </ion-col>\n          <ion-col size=\"2\">\n            <div class=\"dropImg\">\n              <select>\n                <option class=\"firstOpt\"></option>\n                <option>Report</option>\n  \n              </select>\n            </div>\n          </ion-col>\n        </ion-row>\n        <p>Humans love being enslaved</p>\n        <ion-img src=\"assets/image/enslaved.png\"></ion-img>\n        <p>\n          Everything in nature works on balance. Balance is the key. Extremes\n          don't sustain for long. Even the black holes radiate out the materials\n          they ingulf in. Biggest of the stars die in relatively shorter period\n          of time.\n        </p>\n        <p>\n          We humans have existed because of the balance between two major\n          perspectives. One is to explore, challenge, innovate and conquer. The\n          other one is to sit back, wait and hope. Of all these, there is a\n          common consequence uncovering. Among many, slavery is one of the most\n          prevalent one.\n        </p>\n        <p>\n          Gone are the days where one population physically enslaved the other.\n          Now, when the old problems are gone, new ones are coming up. Now we\n          are, across the globe, are being enslaved by the tools created by us.\n          We worship our own creations and deem them as the universal law.\n          Religion, money, technology, cultures and society.\n        </p>\n        <p>\n          Societies were created for cumulative ease. We are social animals. We\n          are not psychologically as well as physically capable to exist alone\n          in the wild. We were the hunters as well as the hunted. We are not\n          god, we are just 1% different from the chimps. The chimps who still\n          are a part of the natural cycles. While other lifeforms concentrated\n          on developing their physical capabilities, we developed our mental\n          ones. And we are \"not\" 1% more than the chimps, we are just 1%\n          \"different\". Many things they can do that we can't. To keep in mind,\n          they are nearly 4 times as strong as we are, physically.\n        </p>\n        <p>\n          We tried escaping the brutal cycles of life by creating societies and\n          technologies. We created religions for controlled and directed way for\n          the masses. We created money for accurate value and transactions and\n          we created technology for better life standards and ease of living.\n        </p>\n        <p>\n          Out of these, religious dilemmas are my favorite. See, the universe is\n          commanded by \"universal\" laws. All other depictions are just delusion,\n          imagination or incomplete knowledge. Of course, each religious\n          depictions offer its own version of \"perfect knowledge\" and stop\n          people to question it. A person who is a bit more smart, clever and\n          knowledgeable created the delusion for the rest. More so, some\n          religions even stop people from questioning much.\n        </p>\n        <p>\n          We have become slaves of our own creations. Money, religion, tech..\n          all these are our creations, meant to solve our problems. But they are\n          now lagging behind in solving the purposes they were 1st created for.\n          But we like being enslaved. It gives us a sense of security to walk\n          with the society.\n        </p>\n        <p>\n          We forget, that humans are not what they are now because of playing it\n          safe. We learn, we question, we challenge, we conquer. Lack of wisdom\n          and abundance of tools will create more weapons. It will happen\n          naturally. While we will be living our own lies and challenging\n          others', we all will destroy ourselves.\n        </p>\n        <p>\n          Evolution is the key, questioning is the key and wisdom is the key. We\n          will not make our creations control us. They were our slaves, it is\n          how it should be. It is how it will be.\n        </p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <div class=\"timelineDiv\">\n        <div>\n          <ion-text (click)=\"loveModal()\">\n            <p class=\"badge\">2</p>\n          </ion-text>\n        \n          <ion-img src=\"assets/image/heart.png\" slot=\"start\"></ion-img>\n\n          <ion-text>\n            <p class=\"textDisplay\">Love</p>\n          </ion-text>\n        </div>\n        <div class=\"bigImages\">\n          <ion-img src=\"assets/image/handshake.png\" slot=\"start\"></ion-img>\n\n          <ion-text>\n            <p class=\"textDisplay\">Recommend</p>\n          </ion-text>\n        </div>\n        <div (click)=\"commentModal()\">\n          <ion-img src=\"assets/image/comment.png\" slot=\"start\"></ion-img>\n\n          <ion-text>\n            <p class=\"textDisplay\">Comment</p>\n          </ion-text>\n        </div>\n        <div (click)=\"shareModal()\">\n          <ion-img src=\"assets/image/share.png\" slot=\"start\"></ion-img>\n\n          <ion-text>\n            <p class=\"textDisplay\">Share</p>\n          </ion-text>\n        </div>\n        <div>\n          <ion-img src=\"assets/image/delete.png\" slot=\"start\"></ion-img>\n          <ion-text>\n            <p class=\"textDisplay\"></p>\n          </ion-text>\n        </div>\n      </div>\n    </ion-row>\n    <section class=\"icon-list\">\n        <ion-list>\n            <!-- (click)=\"timelineModal()\" -->\n          <ion-item >\n            <ion-icon [routerLink]=\"['/users/timelines']\" name=\"menu\"></ion-icon>\n          </ion-item>\n          <!-- (click)=\"galleryModal()\" -->\n          <ion-item >\n            <ion-icon [routerLink]=\"['/users/gallery']\" name=\"image\"></ion-icon>\n          </ion-item>\n          <ion-item [routerLink]=\"['/users/followers']\">\n            <ion-icon name=\"people\"></ion-icon>\n          </ion-item>\n        </ion-list>\n      </section>\n      <section class=\"add-icon\">\n          <ion-badge (click)=\"openPopover()\">\n              <ion-icon name=\"add\"></ion-icon>\n          </ion-badge>\n        </section>\n  </ion-grid>\n  <hr class=\"hrLine\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-row>\n          <ion-col>\n            <h4 class=\"ion-no-margin\">Kumar Vagish</h4>\n          </ion-col>\n          <ion-col size=\"2\">\n            <div class=\"dropImg\">\n              <select>\n                <option class=\"firstOpt\"></option>\n                <option>Report</option>\n  \n              </select>\n            </div>\n          </ion-col>\n        </ion-row>\n        <p>Humans love being enslaved</p>\n        <ion-img src=\"assets/image/enslaved.png\"></ion-img>\n        <p>\n          Everything in nature works on balance. Balance is the key. Extremes\n          don't sustain for long. Even the black holes radiate out the materials\n          they ingulf in. Biggest of the stars die in relatively shorter period\n          of time.\n        </p>\n        <p>\n          We humans have existed because of the balance between two major\n          perspectives. One is to explore, challenge, innovate and conquer. The\n          other one is to sit back, wait and hope. Of all these, there is a\n          common consequence uncovering. Among many, slavery is one of the most\n          prevalent one.\n        </p>\n        <p>\n          Gone are the days where one population physically enslaved the other.\n          Now, when the old problems are gone, new ones are coming up. Now we\n          are, across the globe, are being enslaved by the tools created by us.\n          We worship our own creations and deem them as the universal law.\n          Religion, money, technology, cultures and society.\n        </p>\n        <p>\n          Societies were created for cumulative ease. We are social animals. We\n          are not psychologically as well as physically capable to exist alone\n          in the wild. We were the hunters as well as the hunted. We are not\n          god, we are just 1% different from the chimps. The chimps who still\n          are a part of the natural cycles. While other lifeforms concentrated\n          on developing their physical capabilities, we developed our mental\n          ones. And we are \"not\" 1% more than the chimps, we are just 1%\n          \"different\". Many things they can do that we can't. To keep in mind,\n          they are nearly 4 times as strong as we are, physically.\n        </p>\n        <p>\n          We tried escaping the brutal cycles of life by creating societies and\n          technologies. We created religions for controlled and directed way for\n          the masses. We created money for accurate value and transactions and\n          we created technology for better life standards and ease of living.\n        </p>\n        <p>\n          Out of these, religious dilemmas are my favorite. See, the universe is\n          commanded by \"universal\" laws. All other depictions are just delusion,\n          imagination or incomplete knowledge. Of course, each religious\n          depictions offer its own version of \"perfect knowledge\" and stop\n          people to question it. A person who is a bit more smart, clever and\n          knowledgeable created the delusion for the rest. More so, some\n          religions even stop people from questioning much.\n        </p>\n        <p>\n          We have become slaves of our own creations. Money, religion, tech..\n          all these are our creations, meant to solve our problems. But they are\n          now lagging behind in solving the purposes they were 1st created for.\n          But we like being enslaved. It gives us a sense of security to walk\n          with the society.\n        </p>\n        <p>\n          We forget, that humans are not what they are now because of playing it\n          safe. We learn, we question, we challenge, we conquer. Lack of wisdom\n          and abundance of tools will create more weapons. It will happen\n          naturally. While we will be living our own lies and challenging\n          others', we all will destroy ourselves.\n        </p>\n        <p>\n          Evolution is the key, questioning is the key and wisdom is the key. We\n          will not make our creations control us. They were our slaves, it is\n          how it should be. It is how it will be.\n        </p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <div class=\"timelineDiv\">\n        <div>\n          <ion-text (click)=\"loveModal()\">\n            <p class=\"badge\">2</p>\n          </ion-text>\n        \n          <ion-img src=\"assets/image/heart.png\" slot=\"start\"></ion-img>\n\n          <ion-text>\n            <p class=\"textDisplay\">Love</p>\n          </ion-text>\n        </div>\n        <div class=\"bigImages\">\n          <ion-img src=\"assets/image/handshake.png\" slot=\"start\"></ion-img>\n\n          <ion-text>\n            <p class=\"textDisplay\">Recommend</p>\n          </ion-text>\n        </div>\n        <div (click)=\"commentModal()\">\n          <ion-img src=\"assets/image/comment.png\" slot=\"start\"></ion-img>\n\n          <ion-text>\n            <p class=\"textDisplay\">Comment</p>\n          </ion-text>\n        </div>\n        <div (click)=\"shareModal()\">\n          <ion-img src=\"assets/image/share.png\" slot=\"start\"></ion-img>\n\n          <ion-text>\n            <p class=\"textDisplay\">Share</p>\n          </ion-text>\n        </div>\n        <div>\n          <ion-img src=\"assets/image/delete.png\" slot=\"start\"></ion-img>\n          <ion-text>\n            <p class=\"textDisplay\"></p>\n          </ion-text>\n        </div>\n      </div>\n    </ion-row>\n    <section class=\"icon-list\">\n        <ion-list>\n            <!-- (click)=\"timelineModal()\" -->\n          <ion-item >\n            <ion-icon [routerLink]=\"['/users/timelines']\" name=\"menu\"></ion-icon>\n          </ion-item>\n          <!-- (click)=\"galleryModal()\" -->\n          <ion-item >\n            <ion-icon [routerLink]=\"['/users/gallery']\" name=\"image\"></ion-icon>\n          </ion-item>\n          <ion-item [routerLink]=\"['/users/followers']\">\n            <ion-icon name=\"people\"></ion-icon>\n          </ion-item>\n        </ion-list>\n      </section>\n      <section class=\"add-icon\">\n          <ion-badge (click)=\"openPopover()\">\n              <ion-icon name=\"add\"></ion-icon>\n          </ion-badge>\n        </section>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/users/timelines/timelines.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/users/timelines/timelines.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".timelineDiv {\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  background: #f2f2f1;\n  margin-bottom: 20px; }\n\n.timelineDiv ion-img {\n  width: 18px !important;\n  margin: 4px 8px 0;\n  display: inline-block; }\n\n.timelineDiv div {\n  display: inline-block; }\n\n.timelineDiv div p {\n  display: inline-block; }\n\n.badge {\n  background: #ccc;\n  padding: 3px 7px 1px 7px;\n  border-radius: 15px; }\n\n.timelineHeader {\n  display: none; }\n\n.icon-list {\n  width: 57px;\n  position: fixed;\n  top: 50%;\n  -webkit-transform: translatey(-50%);\n          transform: translatey(-50%);\n  right: 0;\n  border: 1px solid #ccc; }\n\n.icon-list ion-item .item-native {\n  padding: 0 !important; }\n\n.add-icon ion-icon {\n  font-size: 30px; }\n\n.add-icon ion-badge {\n  border-radius: 30px;\n  background: #ff0000; }\n\n.add-icon {\n  position: fixed;\n  top: 84%;\n  -webkit-transform: translateY(-84%);\n          transform: translateY(-84%);\n  right: 10px; }\n\n.dropImg select {\n  background: transparent;\n  width: 21px;\n  float: right;\n  margin-top: 15px; }\n\n.dropImg select:focus {\n  outline: none; }\n\n.firstOpt {\n  display: none; }\n\n.hrLine {\n  height: 4px;\n  background: #ccc; }\n\n@media screen and (max-width: 767px) {\n  .timelineHeader {\n    display: block; }\n  .dropImg select {\n    margin-top: 0px;\n    color: #000; } }\n\n@media screen and (max-width: 575px) {\n  .textDisplay {\n    display: none !important; }\n  .timelineDiv {\n    align-items: center; }\n  p {\n    font-size: 12px !important;\n    text-align: justify; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlcnMvdGltZWxpbmVzL0Q6XFxzYWNoaW5cXHZleWV2LWRldlxcdmV5ZXYtZGV2L3NyY1xcYXBwXFxwYWdlc1xcdXNlcnNcXHRpbWVsaW5lc1xcdGltZWxpbmVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLHNCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIscUJBQXFCLEVBQUE7O0FBRXpCO0VBQ0kscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0kscUJBQXFCLEVBQUE7O0FBRXpCO0VBQ0ksZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxhQUFhLEVBQUE7O0FBRWpCO0VBQ0ksV0FBVztFQUNYLGVBQWU7RUFDZixRQUFRO0VBQ1IsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixRQUFRO0VBQ1Isc0JBQXFCLEVBQUE7O0FBRXpCO0VBQ0kscUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksZUFBZSxFQUFBOztBQUVuQjtFQUNJLG1CQUFtQjtFQUNuQixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxlQUFlO0VBQ2YsUUFBUTtFQUNSLG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IsV0FBVyxFQUFBOztBQUVmO0VBQ0ksdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksYUFBYSxFQUFBOztBQUVqQjtFQUNJLGFBQWEsRUFBQTs7QUFFakI7RUFDSSxXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0k7SUFDSSxjQUFjLEVBQUE7RUFFbEI7SUFDSSxlQUFlO0lBRWYsV0FBVyxFQUFBLEVBQ2Q7O0FBR0w7RUFDSTtJQUNJLHdCQUF1QixFQUFBO0VBRTNCO0lBQ0ksbUJBQW1CLEVBQUE7RUFFdkI7SUFDSSwwQkFBeUI7SUFDekIsbUJBQW1CLEVBQUEsRUFDdEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91c2Vycy90aW1lbGluZXMvdGltZWxpbmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpbWVsaW5lRGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYmFja2dyb3VuZDogI2YyZjJmMTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLnRpbWVsaW5lRGl2IGlvbi1pbWd7XHJcbiAgICB3aWR0aDogMThweCFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDRweCA4cHggMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4udGltZWxpbmVEaXYgZGl2IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgXHJcbn1cclxuLnRpbWVsaW5lRGl2IGRpdiBwIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4uYmFkZ2Uge1xyXG4gICAgYmFja2dyb3VuZDogI2NjYztcclxuICAgIHBhZGRpbmc6IDNweCA3cHggMXB4IDdweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuLnRpbWVsaW5lSGVhZGVye1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uaWNvbi1saXN0IHtcclxuICAgIHdpZHRoOiA1N3B4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoLTUwJSk7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcclxufVxyXG4uaWNvbi1saXN0IGlvbi1pdGVtIC5pdGVtLW5hdGl2ZSB7XHJcbiAgICBwYWRkaW5nOjAhaW1wb3J0YW50O1xyXG59XHJcbi5hZGQtaWNvbiBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLmFkZC1pY29uIGlvbi1iYWRnZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmMDAwMDtcclxufVxyXG4uYWRkLWljb24ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA4NCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTg0JSk7XHJcbiAgICByaWdodDogMTBweDtcclxufVxyXG4uZHJvcEltZyBzZWxlY3R7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIHdpZHRoOiAyMXB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4uZHJvcEltZyBzZWxlY3Q6Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5maXJzdE9wdHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmhyTGluZSB7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbn0gICBcclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCl7XHJcbiAgICAudGltZWxpbmVIZWFkZXJ7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuZHJvcEltZyBzZWxlY3R7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NXB4KXtcclxuICAgIC50ZXh0RGlzcGxheXtcclxuICAgICAgICBkaXNwbGF5OiBub25lIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC50aW1lbGluZURpdiB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIH1cclxuICAgIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/users/timelines/timelines.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/users/timelines/timelines.component.ts ***!
  \**************************************************************/
/*! exports provided: TimelinesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelinesComponent", function() { return TimelinesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_components_love_love_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/love/love.component */ "./src/app/components/love/love.component.ts");
/* harmony import */ var src_app_components_comment_comment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/comment/comment.component */ "./src/app/components/comment/comment.component.ts");
/* harmony import */ var src_app_components_share_share_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/share/share.component */ "./src/app/components/share/share.component.ts");
/* harmony import */ var src_app_components_gallery_popover_gallery_popover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/gallery-popover/gallery-popover.component */ "./src/app/components/gallery-popover/gallery-popover.component.ts");
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






var TimelinesComponent = /** @class */ (function () {
    function TimelinesComponent(modalController) {
        this.modalController = modalController;
    }
    TimelinesComponent.prototype.ngOnInit = function () {
    };
    TimelinesComponent.prototype.openPopover = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: src_app_components_gallery_popover_gallery_popover_component__WEBPACK_IMPORTED_MODULE_5__["GalleryPopoverComponent"],
                            cssClass: 'openPopoverCss'
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TimelinesComponent.prototype.loveModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: src_app_components_love_love_component__WEBPACK_IMPORTED_MODULE_2__["LoveComponent"],
                            cssClass: 'likeCss'
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TimelinesComponent.prototype.commentModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: src_app_components_comment_comment_component__WEBPACK_IMPORTED_MODULE_3__["CommentComponent"],
                            cssClass: 'commentCss'
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TimelinesComponent.prototype.shareModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: src_app_components_share_share_component__WEBPACK_IMPORTED_MODULE_4__["ShareComponent"],
                            cssClass: 'shareCss'
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TimelinesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timelines',
            template: __webpack_require__(/*! ./timelines.component.html */ "./src/app/pages/users/timelines/timelines.component.html"),
            styles: [__webpack_require__(/*! ./timelines.component.scss */ "./src/app/pages/users/timelines/timelines.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], TimelinesComponent);
    return TimelinesComponent;
}());



/***/ }),

/***/ "./src/app/pages/users/users-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/users/users-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/pages/users/profile/profile.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _timelines_timelines_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timelines/timelines.component */ "./src/app/pages/users/timelines/timelines.component.ts");
/* harmony import */ var _followers_followers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./followers/followers.component */ "./src/app/pages/users/followers/followers.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/pages/users/gallery/gallery.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"] },
    { path: 'timelines', component: _timelines_timelines_component__WEBPACK_IMPORTED_MODULE_4__["TimelinesComponent"] },
    { path: 'followers', component: _followers_followers_component__WEBPACK_IMPORTED_MODULE_5__["FollowersComponent"] },
    { path: 'gallery', component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__["GalleryComponent"] },
];
var UsersRoutingModule = /** @class */ (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/users/users.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/users/users.module.ts ***!
  \*********************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/pages/users/users-routing.module.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/pages/users/profile/profile.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_components_custom_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/custom-component.module */ "./src/app/components/custom-component.module.ts");
/* harmony import */ var src_app_components_gallery_popover_gallery_popover_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/gallery-popover/gallery-popover.component */ "./src/app/components/gallery-popover/gallery-popover.component.ts");
/* harmony import */ var src_app_components_header_header_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/header/header.module */ "./src/app/components/header/header.module.ts");
/* harmony import */ var _timelines_timelines_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./timelines/timelines.component */ "./src/app/pages/users/timelines/timelines.component.ts");
/* harmony import */ var _followers_followers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./followers/followers.component */ "./src/app/pages/users/followers/followers.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/pages/users/gallery/gallery.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                src_app_components_custom_component_module__WEBPACK_IMPORTED_MODULE_5__["CustomComponentModule"],
                _users_routing_module__WEBPACK_IMPORTED_MODULE_2__["UsersRoutingModule"],
                src_app_components_header_header_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"]
            ],
            declarations: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"], _timelines_timelines_component__WEBPACK_IMPORTED_MODULE_8__["TimelinesComponent"], _followers_followers_component__WEBPACK_IMPORTED_MODULE_9__["FollowersComponent"], _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_10__["GalleryComponent"]],
            entryComponents: [src_app_components_gallery_popover_gallery_popover_component__WEBPACK_IMPORTED_MODULE_6__["GalleryPopoverComponent"]]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-users-users-module.js.map