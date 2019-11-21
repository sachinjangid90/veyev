(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-users-users-module"],{

/***/ "./src/app/pages/users/followers/followers.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/users/followers/followers.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header class=\"followersHeader\"></app-header>\n<ion-content>\n  <section class=\"tabs\">\n    <ion-row>\n      <ion-col class=\"ion-text-right borderRight\">\n        <h3\n          [ngClass]=\"{ fontColorOne: redColored, fontColorTwo: !redColored }\"\n          (click)=\"followers()\"\n        >\n          Followers\n        </h3>\n      </ion-col>\n      <ion-col>\n        <h3\n          [ngClass]=\"{\n            fontColorOne: otherColored,\n            fontColorTwo: !otherColored\n          }\"\n          (click)=\"following()\"\n        >\n          Following\n        </h3>\n      </ion-col>\n    </ion-row>\n  </section>\n\n  <section *ngIf=\"follower\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Follow\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Follow\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Follow\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Follow\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Follow\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Follow\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Follow\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Follow\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Follow\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Follow\n            </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </section>\n  <section *ngIf=\"!follower\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" size-sm=\"4\" size-md=\"3\">\n          <div class=\"followers\">\n            <ion-img src=\"assets/image/img1.png\"></ion-img>\n            <h6>Mamta Bisht</h6>\n            <p>mamtabusht</p>\n\n            <ion-button>\n              <ion-icon name=\"person\" class=\"marginRight\"></ion-icon>\n              Following\n            </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </section> \n  <section>\n      <div class=\"timelineImg\">\n          <ion-img src=\"assets/image/timeline.png\"></ion-img>\n        </div>\n  </section>\n  <app-profile-link></app-profile-link>\n  </ion-content>\n"

/***/ }),

/***/ "./src/app/pages/users/followers/followers.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/users/followers/followers.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".marginRight {\n  margin-right: 10px !important; }\n\n.followers {\n  text-align: center;\n  padding: 15px !important; }\n\n.followers h6 {\n  margin: 3px 0 0 0; }\n\n.followers p {\n  margin: 2px 0 2px 0;\n  color: #ff0000 !important;\n  font-size: 13px; }\n\n.borderRight {\n  border-right: 1px solid #000; }\n\n.tabs {\n  margin: 20px 0 10px 0;\n  padding: 0; }\n\n.tabs h3 {\n  margin: 0;\n  padding: 0;\n  font-weight: bold; }\n\n.fontColorOne {\n  color: #ff0000 !important; }\n\n.fontColorTwo {\n  color: #000; }\n\n.followersHeader {\n  display: none; }\n\nion-button {\n  --background: #5bc0de; }\n\n.timelineImg ion-img {\n  height: 100%; }\n\n.timelineImg {\n  max-width: 80px;\n  position: fixed;\n  bottom: 30px;\n  left: 25px;\n  -webkit-animation: timelineImg 3s infinite;\n          animation: timelineImg 3s infinite; }\n\n@media screen and (max-width: 767px) {\n  .followersHeader {\n    display: block; } }\n\n@media screen and (max-width: 575px) {\n  .followers {\n    padding: 12px !important; }\n  .followers ion-img {\n    width: 75%;\n    margin: auto; }\n  .followers ion-button {\n    text-transform: initial;\n    font-size: 12px;\n    height: 30px !important; }\n  .marginRight {\n    margin-right: 4px !important;\n    font-size: 12px; } }\n\n@media screen and (max-width: 415px) {\n  .followers {\n    padding: 2px !important; }\n  .followers ion-button {\n    height: 27px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlcnMvZm9sbG93ZXJzL0Q6XFxzYWNoaW5cXHZleWV2L3NyY1xcYXBwXFxwYWdlc1xcdXNlcnNcXGZvbGxvd2Vyc1xcZm9sbG93ZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQTRCLEVBQUE7O0FBRWhDO0VBQ0ksa0JBQWtCO0VBQ2xCLHdCQUFzQixFQUFBOztBQUUxQjtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLG1CQUFtQjtFQUNuQix5QkFBdUI7RUFDdkIsZUFBZSxFQUFBOztBQUVuQjtFQUNJLDRCQUEyQixFQUFBOztBQUUvQjtFQUNJLHFCQUFxQjtFQUNyQixVQUFVLEVBQUE7O0FBRWQ7RUFDSSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLHlCQUF1QixFQUFBOztBQUUzQjtFQUNJLFdBQVUsRUFBQTs7QUFFZDtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxxQkFBYSxFQUFBOztBQUVqQjtFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxlQUFlO0VBQ2YsZUFBZTtFQUNmLFlBQVk7RUFDWixVQUFVO0VBQ1YsMENBQWtDO1VBQWxDLGtDQUFrQyxFQUFBOztBQUV0QztFQUNJO0lBQ0ksY0FBYyxFQUFBLEVBQ2pCOztBQUVMO0VBQ0k7SUFDSSx3QkFBd0IsRUFBQTtFQUU1QjtJQUNJLFVBQVU7SUFDVixZQUFZLEVBQUE7RUFFaEI7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLHVCQUFzQixFQUFBO0VBRTFCO0lBQ0ksNEJBQTRCO0lBQzVCLGVBQWUsRUFBQSxFQUNsQjs7QUFFTDtFQUNJO0lBQ0ksdUJBQXVCLEVBQUE7RUFFM0I7SUFDSSx1QkFBc0IsRUFBQSxFQUN6QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXJzL2ZvbGxvd2Vycy9mb2xsb3dlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyZ2luUmlnaHR7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4IWltcG9ydGFudDtcbn1cbi5mb2xsb3dlcnMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOjE1cHghaW1wb3J0YW50O1xufVxuLmZvbGxvd2VycyBoNntcbiAgICBtYXJnaW46IDNweCAwIDAgMDtcbn1cbi5mb2xsb3dlcnMgcHtcbiAgICBtYXJnaW46IDJweCAwIDJweCAwO1xuICAgIGNvbG9yOiNmZjAwMDAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5ib3JkZXJSaWdodHtcbiAgICBib3JkZXItcmlnaHQ6MXB4IHNvbGlkICMwMDA7XG59XG4udGFic3tcbiAgICBtYXJnaW46IDIwcHggMCAxMHB4IDA7XG4gICAgcGFkZGluZzogMDtcbn1cbi50YWJzIGgze1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmZvbnRDb2xvck9uZXtcbiAgICBjb2xvcjojZmYwMDAwIWltcG9ydGFudFxufVxuLmZvbnRDb2xvclR3b3tcbiAgICBjb2xvcjojMDAwO1xufVxuLmZvbGxvd2Vyc0hlYWRlcntcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5pb24tYnV0dG9ue1xuICAgIC0tYmFja2dyb3VuZDogIzViYzBkZTtcbn1cbi50aW1lbGluZUltZyBpb24taW1nIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4udGltZWxpbmVJbWcge1xuICAgIG1heC13aWR0aDogODBweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAzMHB4O1xuICAgIGxlZnQ6IDI1cHg7XG4gICAgYW5pbWF0aW9uOiB0aW1lbGluZUltZyAzcyBpbmZpbml0ZTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpe1xuICAgIC5mb2xsb3dlcnNIZWFkZXJ7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc1cHgpe1xuICAgIC5mb2xsb3dlcnMge1xuICAgICAgICBwYWRkaW5nOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5mb2xsb3dlcnMgaW9uLWltZyB7XG4gICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG4gICAgLmZvbGxvd2VycyBpb24tYnV0dG9uIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4IWltcG9ydGFudDtcbiAgICB9XG4gICAgLm1hcmdpblJpZ2h0IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHggIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDE1cHgpe1xuICAgIC5mb2xsb3dlcnMge1xuICAgICAgICBwYWRkaW5nOiAycHggIWltcG9ydGFudDtcbiAgICB9ICAgXG4gICAgLmZvbGxvd2VycyBpb24tYnV0dG9uIHtcbiAgICAgICAgaGVpZ2h0OiAyN3B4IWltcG9ydGFudDtcbiAgICB9XG59Il19 */"

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

module.exports = "<app-header class=\"galleryHeader\"></app-header>\n<ion-content class=\"\">\n    <section class=\"tabs\">\n        <ion-row>\n          <ion-col class=\"ion-text-right borderRight\">\n            \n              <h3 [ngClass]=\"{fontColorOne: redColored, fontColorTwo: !redColored}\" (click)=\"imagesAll()\">Images</h3>\n            </ion-col>\n            <ion-col>\n            <h3 [ngClass]=\"{fontColorOne: otherColored, fontColorTwo: !otherColored}\" (click)=\"videosAll()\">Videos</h3>\n            \n          </ion-col>\n        </ion-row>\n      </section>\n \n\n      <section *ngIf=\"Images\">\n          <ion-grid class=\"galleryOuter\">\n              <ion-row>\n                <ion-col size=\"12\" size-sm=\"6\">\n                    <video\n                    height=\"100%\"\n                    width=\"100%\"\n                    preload=\"auto\"\n                    onmouseover=\"this.play();\"\n                    onmouseout=\"this.pause();\"\n                  >\n                    <source\n                      src=\"http://veyev.social/uploads//86fb39d1e797d708be171fa93243d72b.mp4\"\n                      type=\"video/mp4\"\n                    />\n                  </video>\n                </ion-col>\n                <ion-col size=\"12\" size-sm=\"6\">\n                    <video\n            height=\"100%\"\n            width=\"100%\"\n            preload=\"auto\"\n            onmouseover=\"this.play();\"\n            onmouseout=\"this.pause();\"\n          >\n            <source\n              src=\"http://veyev.social/uploads//86fb39d1e797d708be171fa93243d72b.mp4\"\n              type=\"video/mp4\"\n            />\n          </video>\n                </ion-col>\n              \n                <ion-col size=\"12\" size-sm=\"6\">\n                    <video\n                    height=\"100%\"\n                    width=\"100%\"\n                    preload=\"auto\"\n                    onmouseover=\"this.play();\"\n                    onmouseout=\"this.pause();\"\n                  >\n                    <source\n                      src=\"http://veyev.social/uploads//86fb39d1e797d708be171fa93243d72b.mp4\"\n                      type=\"video/mp4\"\n                    />\n                  </video>\n                </ion-col>\n                <ion-col size=\"12\" size-sm=\"6\">\n                 \n                    <video\n                    height=\"100%\"\n                    width=\"100%\"\n                    preload=\"auto\"\n                    onmouseover=\"this.play();\"\n                    onmouseout=\"this.pause();\"\n                  >\n                    <source\n                      src=\"http://veyev.social/uploads//86fb39d1e797d708be171fa93243d72b.mp4\"\n                      type=\"video/mp4\"\n                    />\n                  </video>\n                </ion-col>\n              \n                <ion-col size=\"12\" size-sm=\"6\">\n                    <video\n            height=\"100%\"\n            width=\"100%\"\n            preload=\"auto\"\n            onmouseover=\"this.play();\"\n            onmouseout=\"this.pause();\"\n          >\n            <source\n              src=\"http://veyev.social/uploads//86fb39d1e797d708be171fa93243d72b.mp4\"\n              type=\"video/mp4\"\n            />\n          </video>\n                 \n                </ion-col>\n                <ion-col size=\"12\" size-sm=\"6\">\n                    <video\n                    height=\"100%\"\n                    width=\"100%\"\n                    preload=\"auto\"\n                    onmouseover=\"this.play();\"\n                    onmouseout=\"this.pause();\"\n                  >\n                    <source\n                      src=\"http://veyev.social/uploads//86fb39d1e797d708be171fa93243d72b.mp4\"\n                      type=\"video/mp4\"\n                    />\n                  </video>\n                </ion-col>\n              </ion-row>\n              \n             </ion-grid>\n      </section>\n\n      <section *ngIf=\"!Images\">\n          <ion-grid class=\"galleryOuter\">\n              <ion-row>\n                <ion-col size=\"12\" size-sm=\"6\" size-md=\"4\">\n                  <ion-img src=\"assets/image/gallery/0.png\"></ion-img>\n                  <ion-img src=\"assets/image/gallery/6.jpg\"></ion-img>\n                  <ion-img src=\"assets/image/gallery/8.jpg\"></ion-img>\n                  <ion-img src=\"assets/image/gallery/4.jpg\"></ion-img>\n                </ion-col>\n                <ion-col size=\"12\" size-sm=\"6\" size-md=\"4\">\n                    <ion-img src=\"assets/image/gallery/1.png\"></ion-img>\n                    <ion-img src=\"assets/image/gallery/4.jpg\"></ion-img>\n                    <ion-img src=\"assets/image/gallery/6.jpg\"></ion-img>\n                    <ion-img src=\"assets/image/gallery/5.jpg\"></ion-img>\n                </ion-col>\n              \n                <!-- <ion-col size=\"12\" size-sm=\"6\" size-md=\"4\">\n                  \n                </ion-col>\n                <ion-col size=\"12\" size-sm=\"6\" size-md=\"4\">\n                 \n                  \n                </ion-col>\n             \n                <ion-col size=\"12\" size-sm=\"6\" size-md=\"4\">\n                    \n                 \n                </ion-col>\n                <ion-col size=\"12\" size-sm=\"6\" size-md=\"4\">\n                  \n                </ion-col>\n             \n                <ion-col size=\"12\" size-sm=\"6\" size-md=\"4\">\n                  \n                </ion-col>\n                <ion-col size=\"12\" size-sm=\"6\" size-md=\"4\">\n                    \n                </ion-col> -->\n              </ion-row>\n             </ion-grid>\n      </section>\n      <section>\n          <div class=\"timelineImg\">\n              <ion-img src=\"assets/image/timeline.png\"></ion-img>\n            </div>\n      </section>\n          <app-profile-link></app-profile-link>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/users/gallery/gallery.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/users/gallery/gallery.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".borderRight {\n  border-right: 1px solid #000; }\n\n.tabs {\n  margin: 20px 0 10px 0;\n  padding: 0; }\n\n.tabs h3 {\n  margin: 0;\n  padding: 0;\n  font-weight: bold; }\n\n.fontColorOne {\n  color: #ff0000 !important; }\n\n.fontColorTwo {\n  color: #000; }\n\n.galleryHeader {\n  display: none; }\n\n.timelineImg ion-img {\n  height: 100%; }\n\n.timelineImg {\n  max-width: 80px;\n  position: fixed;\n  bottom: 30px;\n  left: 25px;\n  -webkit-animation: timelineImg 3s infinite;\n          animation: timelineImg 3s infinite; }\n\n@media screen and (max-width: 767px) {\n  .galleryHeader {\n    display: block; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlcnMvZ2FsbGVyeS9EOlxcc2FjaGluXFx2ZXlldi9zcmNcXGFwcFxccGFnZXNcXHVzZXJzXFxnYWxsZXJ5XFxnYWxsZXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0ksNEJBQTJCLEVBQUE7O0FBRS9CO0VBQ0kscUJBQXFCO0VBQ3JCLFVBQVUsRUFBQTs7QUFFZDtFQUNJLFNBQVM7RUFDVCxVQUFVO0VBQ1YsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0kseUJBQXVCLEVBQUE7O0FBRTNCO0VBQ0ksV0FBVSxFQUFBOztBQUVkO0VBQ0ksYUFBYSxFQUFBOztBQTBCakI7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksZUFBZTtFQUNmLGVBQWU7RUFDZixZQUFZO0VBQ1osVUFBVTtFQUNWLDBDQUFrQztVQUFsQyxrQ0FBa0MsRUFBQTs7QUFFdEM7RUFDSTtJQUNJLGNBQWMsRUFBQSxFQUNqQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXJzL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5nYWxsZXJ5T3V0ZXIgaW9uLWNvbCB7XG4vLyAgICAgaGVpZ2h0OiAyMTBweDtcbi8vIH1cbi8vIC5nYWxsZXJ5T3V0ZXIgaW9uLWNvbCBpb24taW1nIHtcbi8vICAgICBoZWlnaHQ6IDEwMCU7XG4vLyB9XG4uYm9yZGVyUmlnaHR7XG4gICAgYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjMDAwO1xufVxuLnRhYnN7XG4gICAgbWFyZ2luOiAyMHB4IDAgMTBweCAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG4udGFicyBoM3tcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5mb250Q29sb3JPbmV7XG4gICAgY29sb3I6I2ZmMDAwMCFpbXBvcnRhbnRcbn1cbi5mb250Q29sb3JUd297XG4gICAgY29sb3I6IzAwMDtcbn1cbi5nYWxsZXJ5SGVhZGVye1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4vLyAuaWNvbi1saXN0IHtcbi8vICAgICB3aWR0aDogNTdweDtcbi8vICAgICBwb3NpdGlvbjogZml4ZWQ7XG4vLyAgICAgdG9wOiA1MCU7XG4vLyAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KC01MCUpO1xuLy8gICAgIHJpZ2h0OiAwO1xuLy8gICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcbi8vIH1cbi8vIC5pY29uLWxpc3QgaW9uLWl0ZW0gLml0ZW0tbmF0aXZlIHtcbi8vICAgICBwYWRkaW5nOjAhaW1wb3J0YW50O1xuLy8gfVxuLy8gLmFkZC1pY29uIGlvbi1pY29uIHtcbi8vICAgICBmb250LXNpemU6IDMwcHg7XG4vLyB9XG4vLyAuYWRkLWljb24gaW9uLWJhZGdlIHtcbi8vICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuLy8gICAgIGJhY2tncm91bmQ6ICNmZjAwMDA7XG4vLyB9XG4vLyAuYWRkLWljb24ge1xuLy8gICAgIHBvc2l0aW9uOiBmaXhlZDtcbi8vICAgICB0b3A6IDg0JTtcbi8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTg0JSk7XG4vLyAgICAgcmlnaHQ6IDEwcHg7XG4vLyB9XG4udGltZWxpbmVJbWcgaW9uLWltZyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLnRpbWVsaW5lSW1nIHtcbiAgICBtYXgtd2lkdGg6IDgwcHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMzBweDtcbiAgICBsZWZ0OiAyNXB4O1xuICAgIGFuaW1hdGlvbjogdGltZWxpbmVJbWcgM3MgaW5maW5pdGU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KXtcbiAgICAuZ2FsbGVyeUhlYWRlcntcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzVweCl7XG4gICAgLy8gLmdhbGxlcnlPdXRlciBpb24tY29sIHtcbiAgICAvLyAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAvLyB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQxNXB4KXtcbiAgICAvLyAuZ2FsbGVyeU91dGVyIGlvbi1jb2wge1xuICAgIC8vICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIC8vIH1cbn0iXX0= */"

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

/***/ "./src/app/pages/users/profile-link/profile-link.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/users/profile-link/profile-link.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"icon-list\">\n  <ion-list>\n      <!-- (click)=\"timelineModal()\" -->\n    <ion-item >\n      <ion-icon [routerLink]=\"['/users/timelines']\" routerLinkActive=\"active\" name=\"menu\"></ion-icon>\n    </ion-item>\n    <!-- (click)=\"galleryModal()\" -->\n    <ion-item >\n      <ion-icon [routerLink]=\"['/users/gallery']\" routerLinkActive=\"active\" name=\"image\"></ion-icon>\n    </ion-item>\n    <ion-item >\n      <ion-icon [routerLink]=\"['/users/followers']\" routerLinkActive=\"active\" name=\"people\"></ion-icon>\n    </ion-item>\n  </ion-list>\n</section>\n<section class=\"add-icon\">\n    <ion-badge (click)=\"openPopover()\">\n        <ion-icon name=\"add\"></ion-icon>\n    </ion-badge>\n    \n  </section>\n  "

/***/ }),

/***/ "./src/app/pages/users/profile-link/profile-link.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/users/profile-link/profile-link.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-list {\n  width: 57px;\n  position: fixed;\n  top: 50%;\n  -webkit-transform: translatey(-50%);\n          transform: translatey(-50%);\n  right: 0;\n  border: 1px solid #ccc; }\n\n.icon-list ion-item .item-native {\n  padding: 0 !important; }\n\n.add-icon ion-icon {\n  font-size: 30px; }\n\n.add-icon ion-badge {\n  border-radius: 30px;\n  background: #ff0000; }\n\n.add-icon {\n  position: fixed;\n  top: 84%;\n  -webkit-transform: translateY(-84%);\n          transform: translateY(-84%);\n  right: 10px; }\n\n.active {\n  color: #ff0000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlcnMvcHJvZmlsZS1saW5rL0Q6XFxzYWNoaW5cXHZleWV2L3NyY1xcYXBwXFxwYWdlc1xcdXNlcnNcXHByb2ZpbGUtbGlua1xccHJvZmlsZS1saW5rLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLGVBQWU7RUFDZixRQUFRO0VBQ1IsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixRQUFRO0VBQ1Isc0JBQXFCLEVBQUE7O0FBRXpCO0VBQ0kscUJBQW1CLEVBQUE7O0FBS3ZCO0VBQ0ksZUFBZSxFQUFBOztBQUVuQjtFQUNJLG1CQUFtQjtFQUNuQixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxlQUFlO0VBQ2YsUUFBUTtFQUNSLG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IsV0FBVyxFQUFBOztBQUVmO0VBQ0ksY0FBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXNlcnMvcHJvZmlsZS1saW5rL3Byb2ZpbGUtbGluay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uLWxpc3Qge1xyXG4gICAgd2lkdGg6IDU3cHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgtNTAlKTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xyXG59XHJcbi5pY29uLWxpc3QgaW9uLWl0ZW0gLml0ZW0tbmF0aXZlIHtcclxuICAgIHBhZGRpbmc6MCFpbXBvcnRhbnQ7XHJcbn1cclxuLy8gLmljb24tbGlzdCBpb24taXRlbSBpb24taWNvbiB7XHJcbi8vICAgICBjb2xvcjogIzAwMDtcclxuLy8gfVxyXG4uYWRkLWljb24gaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbi5hZGQtaWNvbiBpb24tYmFkZ2Uge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZjAwMDA7XHJcbn1cclxuLmFkZC1pY29uIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogODQlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04NCUpO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuLmFjdGl2ZXtcclxuICAgIGNvbG9yOiNmZjAwMDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/users/profile-link/profile-link.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/users/profile-link/profile-link.component.ts ***!
  \********************************************************************/
/*! exports provided: ProfileLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileLinkComponent", function() { return ProfileLinkComponent; });
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



var ProfileLinkComponent = /** @class */ (function () {
    function ProfileLinkComponent(modalController) {
        this.modalController = modalController;
    }
    ProfileLinkComponent.prototype.ngOnInit = function () {
    };
    ProfileLinkComponent.prototype.openPopover = function () {
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
    ProfileLinkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-link',
            template: __webpack_require__(/*! ./profile-link.component.html */ "./src/app/pages/users/profile-link/profile-link.component.html"),
            styles: [__webpack_require__(/*! ./profile-link.component.scss */ "./src/app/pages/users/profile-link/profile-link.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], ProfileLinkComponent);
    return ProfileLinkComponent;
}());



/***/ }),

/***/ "./src/app/pages/users/profile/profile.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/users/profile/profile.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ion-content>\n  <div class=\"profile\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <div class=\"editClass\">\n            <div>\n              <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\n            </div>\n            <div>\n              <ion-label>Edit</ion-label>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid class=\"detailProfile ion-no-padding\">\n      <ion-row class=\"\">\n        <ion-col size=\"12\" size-md=\"8\" offset-md=\"2\" class=\"ion-no-padding\">\n          <ion-row>\n            <ion-col size=\"12\" size-md=\"3\" class=\"ion-no-padding\">\n              <div>\n                <ion-img src=\"assets/image/profile.jpg\"></ion-img>\n              </div>\n            </ion-col>\n            <ion-col size=\"12\" size-md=\"9\" class=\"ion-no-padding\">\n              <ion-card>\n                <div class=\"arrows\">\n                    <img *ngIf=\"showItem\" (click)=\"getItem()\" src=\"assets/image/arrow-down.png\">\n                    <img *ngIf=\"!showItem\" (click)=\"getItem()\" src=\"assets/image/arrow-up.png\">\n                </div>\n                <p>@vaggi_i_am</p>\n                <h5>Kumari Bhanu</h5>\n                <div [ngClass]=\"{hideDiv: showItem}\">\n                    <p >I believe in humanity.</p>\n                    <ion-img (click)=\"editProfile()\" src=\"assets/image/pencil-edit.png\"></ion-img>\n                </div>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <app-profile-link></app-profile-link>\n  </div>\n</ion-content>\n\n\n\n"

/***/ }),

/***/ "./src/app/pages/users/profile/profile.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/users/profile/profile.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile {\n  background-image: url(/assets/image/coffee.gif);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  height: 100%;\n  width: 100%; }\n\n.editClass {\n  color: #fff;\n  display: flex;\n  background: rgba(0, 0, 0, 0.3);\n  width: 70px;\n  padding: 5px;\n  border-radius: 5px; }\n\n.editClass div {\n  display: flex; }\n\n.editClass ion-icon {\n  font-size: 25px; }\n\n.editClass ion-label {\n  font-size: 14px;\n  margin: 5px 0 0 10px; }\n\n.detailProfile div ion-img {\n  border: 2px solid #fff;\n  border-radius: 90px;\n  overflow: hidden;\n  box-shadow: 0 0 20px 0 #7890a1;\n  -webkit-animation: images 4s infinite;\n          animation: images 4s infinite; }\n\n.list-ios {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0px;\n  margin-bottom: 0px !important; }\n\n@-webkit-keyframes images {\n  0% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95); }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  100% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95); } }\n\n@keyframes images {\n  0% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95); }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  100% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95); } }\n\n.detailProfile ion-card {\n  background: rgba(18, 7, 7, 0.68);\n  padding: 10px 20px;\n  height: 100%;\n  margin: 0;\n  color: #fff;\n  overflow: initial; }\n\n.detailProfile {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n\n.detailProfile ion-card div ion-img {\n  border: 1px solid #fff;\n  border-radius: 30px;\n  padding: 4px 5px;\n  width: 30px;\n  position: absolute;\n  right: 5px;\n  z-index: 999;\n  bottom: 5px; }\n\n.icon-list {\n  width: 57px;\n  position: fixed;\n  top: 50%;\n  -webkit-transform: translatey(-50%);\n          transform: translatey(-50%);\n  right: 0;\n  border: 1px solid #ccc; }\n\n.icon-list ion-item .item-native {\n  padding: 0 !important; }\n\n.add-icon ion-icon {\n  font-size: 30px; }\n\n.add-icon ion-badge {\n  border-radius: 30px;\n  background: #ff0000; }\n\n.add-icon {\n  position: fixed;\n  top: 84%;\n  -webkit-transform: translateY(-84%);\n          transform: translateY(-84%);\n  right: 10px; }\n\n.hideDiv {\n  display: none; }\n\n.arrows {\n  width: 15px;\n  margin: 0 auto;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%); }\n\n.arrows img {\n  -webkit-animation: arrows 2s infinite;\n          animation: arrows 2s infinite; }\n\n@-webkit-keyframes arrows {\n  0% {\n    margin-top: 3px; }\n  50% {\n    margin-top: -6px; }\n  100% {\n    margin-top: 3px; } }\n\n@keyframes arrows {\n  0% {\n    margin-top: 3px; }\n  50% {\n    margin-top: -6px; }\n  100% {\n    margin-top: 3px; } }\n\n@media screen and (max-width: 767px) {\n  .detailProfile div ion-img {\n    width: 100px;\n    margin: 0 auto; }\n  .detailProfile ion-card P {\n    margin: 0; }\n  .detailProfile ion-card h5 {\n    margin-top: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlcnMvcHJvZmlsZS9EOlxcc2FjaGluXFx2ZXlldi9zcmNcXGFwcFxccGFnZXNcXHVzZXJzXFxwcm9maWxlXFxwcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0NBQThDO0VBQzlDLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBRWY7RUFDSSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDhCQUEyQjtFQUMzQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGFBQWEsRUFBQTs7QUFFakI7RUFDSSxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksZUFBZTtFQUNmLG9CQUFvQixFQUFBOztBQUV4QjtFQUNJLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtFQUM5QixxQ0FBNEI7VUFBNUIsNkJBQTRCLEVBQUE7O0FBRWhDO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZixlQUFlO0VBQ2YsNkJBQTRCLEVBQUE7O0FBRWhDO0VBQ0k7SUFDSSw4QkFBcUI7WUFBckIsc0JBQXFCLEVBQUE7RUFFekI7SUFDSSwyQkFBbUI7WUFBbkIsbUJBQW1CLEVBQUE7RUFFdkI7SUFDSSw4QkFBcUI7WUFBckIsc0JBQXFCLEVBQUEsRUFBQTs7QUFSN0I7RUFDSTtJQUNJLDhCQUFxQjtZQUFyQixzQkFBcUIsRUFBQTtFQUV6QjtJQUNJLDJCQUFtQjtZQUFuQixtQkFBbUIsRUFBQTtFQUV2QjtJQUNJLDhCQUFxQjtZQUFyQixzQkFBcUIsRUFBQSxFQUFBOztBQUc3QjtFQUNJLGdDQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFNBQVE7RUFDUixXQUFVO0VBQ1YsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUSxFQUFBOztBQUVaO0VBQ0ksc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFFZjtFQUNJLFdBQVc7RUFDWCxlQUFlO0VBQ2YsUUFBUTtFQUNSLG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IsUUFBUTtFQUNSLHNCQUFxQixFQUFBOztBQUV6QjtFQUNJLHFCQUFtQixFQUFBOztBQUV2QjtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxtQkFBbUI7RUFDbkIsbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksZUFBZTtFQUNmLFFBQVE7RUFDUixtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLFdBQVcsRUFBQTs7QUFFZjtFQUNJLGFBQWEsRUFBQTs7QUFFakI7RUFDSSxXQUFXO0VBQ1gsY0FBYTtFQUViLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsbUNBQTJCO1VBQTNCLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLHFDQUE2QjtVQUE3Qiw2QkFBNkIsRUFBQTs7QUFFakM7RUFDSTtJQUNJLGVBQWUsRUFBQTtFQUVuQjtJQUNJLGdCQUFnQixFQUFBO0VBRXBCO0lBQ0ksZUFBZSxFQUFBLEVBQUE7O0FBUnZCO0VBQ0k7SUFDSSxlQUFlLEVBQUE7RUFFbkI7SUFDSSxnQkFBZ0IsRUFBQTtFQUVwQjtJQUNJLGVBQWUsRUFBQSxFQUFBOztBQWF2QjtFQUNJO0lBQ0ksWUFBWTtJQUNaLGNBQWMsRUFBQTtFQUVsQjtJQUNJLFNBQVEsRUFBQTtFQUVaO0lBQ0ksYUFBWSxFQUFBLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91c2Vycy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCgvYXNzZXRzL2ltYWdlL2NvZmZlZS5naWYpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmVkaXRDbGFzcyB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMyk7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5lZGl0Q2xhc3MgZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLmVkaXRDbGFzcyBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuLmVkaXRDbGFzcyBpb24tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW46IDVweCAwIDAgMTBweDs7XG59XG4uZGV0YWlsUHJvZmlsZSBkaXYgaW9uLWltZyB7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA5MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm94LXNoYWRvdzogMCAwIDIwcHggMCAjNzg5MGExO1xuICAgIGFuaW1hdGlvbjppbWFnZXMgNHMgaW5maW5pdGU7XG59XG4ubGlzdC1pb3Mge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4IWltcG9ydGFudDtcbn1cbkBrZXlmcmFtZXMgaW1hZ2Vze1xuICAgIDAle1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC45NSk7XG4gICAgfVxuICAgIDUwJXtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG4gICAgMTAwJXtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xuICAgIH1cbn1cbi5kZXRhaWxQcm9maWxlIGlvbi1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE4LCA3LCA3LCAuNjgpO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOjA7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBvdmVyZmxvdzogaW5pdGlhbDtcbn1cbi5kZXRhaWxQcm9maWxlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG59XG4uZGV0YWlsUHJvZmlsZSBpb24tY2FyZCBkaXYgaW9uLWltZyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHBhZGRpbmc6IDRweCA1cHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgei1pbmRleDogOTk5O1xuICAgIGJvdHRvbTogNXB4O1xufVxuLmljb24tbGlzdCB7XG4gICAgd2lkdGg6IDU3cHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgtNTAlKTtcbiAgICByaWdodDogMDtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XG59XG4uaWNvbi1saXN0IGlvbi1pdGVtIC5pdGVtLW5hdGl2ZSB7XG4gICAgcGFkZGluZzowIWltcG9ydGFudDtcbn1cbi5hZGQtaWNvbiBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuLmFkZC1pY29uIGlvbi1iYWRnZSB7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmYwMDAwO1xufVxuLmFkZC1pY29uIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA4NCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04NCUpO1xuICAgIHJpZ2h0OiAxMHB4O1xufVxuLmhpZGVEaXYge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4uYXJyb3dze1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIG1hcmdpbjowIGF1dG87XG4gICAgLy8gYW5pbWF0aW9uOiBhcnJvd3MgNXMgaW5maW5pdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgXG59XG4uYXJyb3dzIGltZ3tcbiAgICBhbmltYXRpb246IGFycm93cyAycyBpbmZpbml0ZTtcbn1cbkBrZXlmcmFtZXMgYXJyb3dze1xuICAgIDAle1xuICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgfVxuICAgIDUwJXtcbiAgICAgICAgbWFyZ2luLXRvcDogLTZweDtcbiAgICB9XG4gICAgMTAwJXtcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgIH1cbn1cbi8vIC5hcnJvd3MgaW1nIHtcbi8vICAgICBib3JkZXI6IG5vbmUhaW1wb3J0YW50O1xuLy8gICAgIGJveC1zaGFkb3c6IG5vbmUhaW1wb3J0YW50O1xuLy8gICAgIHdpZHRoOiAzMHB4IWltcG9ydGFudDtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgdG9wOiAwO1xuLy8gICAgIGxlZnQ6IDA7XG4vLyAgICAgcmlnaHQ6IDA7XG4vLyAgICAgbWFyZ2luOiAwIGF1dG87XG4vLyB9XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KXtcbiAgICAuZGV0YWlsUHJvZmlsZSBkaXYgaW9uLWltZyB7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICAgIC5kZXRhaWxQcm9maWxlIGlvbi1jYXJkIFB7XG4gICAgICAgIG1hcmdpbjowO1xuICAgIH1cbiAgICAuZGV0YWlsUHJvZmlsZSBpb24tY2FyZCBoNXtcbiAgICAgICAgbWFyZ2luLXRvcDowO1xuICAgIH1cbn0iXX0= */"

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
/* harmony import */ var src_app_components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/edit-profile/edit-profile.component */ "./src/app/components/edit-profile/edit-profile.component.ts");
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
    //edit profile
    ProfileComponent.prototype.editProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: src_app_components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_3__["EditProfileComponent"],
                            cssClass: 'editProfileCss'
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
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

module.exports = "<app-header class=\"timelineHeader\"></app-header>\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-row>\n          <ion-col>\n            <h4 class=\"ion-no-margin\">Kumar Vagish</h4>\n          </ion-col>\n          <ion-col size=\"2\">\n            <div class=\"dropImg\">\n              <select>\n                <option class=\"firstOpt\"></option>\n                <option>Report</option>\n  \n              </select>\n            </div>\n          </ion-col>\n        </ion-row>\n        <p>Humans love being enslaved</p>\n        <ion-img src=\"assets/image/enslaved.png\"></ion-img>\n        <p>\n          Everything in nature works on balance. Balance is the key. Extremes\n          don't sustain for long. Even the black holes radiate out the materials\n          they ingulf in. Biggest of the stars die in relatively shorter period\n          of time.\n        </p>\n        <p>\n          We humans have existed because of the balance between two major\n          perspectives. One is to explore, challenge, innovate and conquer. The\n          other one is to sit back, wait and hope. Of all these, there is a\n          common consequence uncovering. Among many, slavery is one of the most\n          prevalent one.\n        </p>\n        <p>\n          Gone are the days where one population physically enslaved the other.\n          Now, when the old problems are gone, new ones are coming up. Now we\n          are, across the globe, are being enslaved by the tools created by us.\n          We worship our own creations and deem them as the universal law.\n          Religion, money, technology, cultures and society.\n        </p>\n        <p>\n          Societies were created for cumulative ease. We are social animals. We\n          are not psychologically as well as physically capable to exist alone\n          in the wild. We were the hunters as well as the hunted. We are not\n          god, we are just 1% different from the chimps. The chimps who still\n          are a part of the natural cycles. While other lifeforms concentrated\n          on developing their physical capabilities, we developed our mental\n          ones. And we are \"not\" 1% more than the chimps, we are just 1%\n          \"different\". Many things they can do that we can't. To keep in mind,\n          they are nearly 4 times as strong as we are, physically.\n        </p>\n        <p>\n          We tried escaping the brutal cycles of life by creating societies and\n          technologies. We created religions for controlled and directed way for\n          the masses. We created money for accurate value and transactions and\n          we created technology for better life standards and ease of living.\n        </p>\n        <p>\n          Out of these, religious dilemmas are my favorite. See, the universe is\n          commanded by \"universal\" laws. All other depictions are just delusion,\n          imagination or incomplete knowledge. Of course, each religious\n          depictions offer its own version of \"perfect knowledge\" and stop\n          people to question it. A person who is a bit more smart, clever and\n          knowledgeable created the delusion for the rest. More so, some\n          religions even stop people from questioning much.\n        </p>\n        <p>\n          We have become slaves of our own creations. Money, religion, tech..\n          all these are our creations, meant to solve our problems. But they are\n          now lagging behind in solving the purposes they were 1st created for.\n          But we like being enslaved. It gives us a sense of security to walk\n          with the society.\n        </p>\n        <p>\n          We forget, that humans are not what they are now because of playing it\n          safe. We learn, we question, we challenge, we conquer. Lack of wisdom\n          and abundance of tools will create more weapons. It will happen\n          naturally. While we will be living our own lies and challenging\n          others', we all will destroy ourselves.\n        </p>\n        <p>\n          Evolution is the key, questioning is the key and wisdom is the key. We\n          will not make our creations control us. They were our slaves, it is\n          how it should be. It is how it will be.\n        </p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <div class=\"timelineDiv\">\n        <div>\n          <ion-text (click)=\"loveModal()\">\n            <p class=\"badge\">2</p>\n          </ion-text>\n        \n          <ion-img src=\"assets/image/heart.png\" slot=\"start\"></ion-img>\n\n          <ion-text>\n            <p class=\"textDisplay\">Love</p>\n          </ion-text>\n        </div>\n        <div class=\"bigImages\">\n          <ion-img src=\"assets/image/handshake.png\" slot=\"start\"></ion-img>\n\n          <ion-text>\n            <p class=\"textDisplay\">Recommend</p>\n          </ion-text>\n        </div>\n        <div (click)=\"commentModal()\">\n          <ion-img src=\"assets/image/comment.png\" slot=\"start\"></ion-img>\n\n          <ion-text>\n            <p class=\"textDisplay\">Comment</p>\n          </ion-text>\n        </div>\n        <div (click)=\"shareModal()\">\n          <ion-img src=\"assets/image/share.png\" slot=\"start\"></ion-img>\n\n          <ion-text>\n            <p class=\"textDisplay\">Share</p>\n          </ion-text>\n        </div>\n        <div>\n          <ion-img src=\"assets/image/delete.png\" slot=\"start\"></ion-img>\n          <ion-text>\n            <p class=\"textDisplay\"></p>\n          </ion-text>\n        </div>\n      </div>\n    </ion-row>\n  </ion-grid>\n  <hr class=\"hrLine\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-row>\n          <ion-col>\n            <h4 class=\"ion-no-margin\">Kumar Vagish</h4>\n          </ion-col>\n          <ion-col size=\"2\">\n            <div class=\"dropImg\">\n              <select>\n                <option class=\"firstOpt\"></option>\n                <option>Report</option>\n  \n              </select>\n            </div>\n          </ion-col>\n        </ion-row>\n        <p>Humans love being enslaved</p>\n        <ion-img src=\"assets/image/enslaved.png\"></ion-img>\n        <p>\n          Everything in nature works on balance. Balance is the key. Extremes\n          don't sustain for long. Even the black holes radiate out the materials\n          they ingulf in. Biggest of the stars die in relatively shorter period\n          of time.\n        </p>\n        <p>\n          We humans have existed because of the balance between two major\n          perspectives. One is to explore, challenge, innovate and conquer. The\n          other one is to sit back, wait and hope. Of all these, there is a\n          common consequence uncovering. Among many, slavery is one of the most\n          prevalent one.\n        </p>\n        <p>\n          Gone are the days where one population physically enslaved the other.\n          Now, when the old problems are gone, new ones are coming up. Now we\n          are, across the globe, are being enslaved by the tools created by us.\n          We worship our own creations and deem them as the universal law.\n          Religion, money, technology, cultures and society.\n        </p>\n        <p>\n          Societies were created for cumulative ease. We are social animals. We\n          are not psychologically as well as physically capable to exist alone\n          in the wild. We were the hunters as well as the hunted. We are not\n          god, we are just 1% different from the chimps. The chimps who still\n          are a part of the natural cycles. While other lifeforms concentrated\n          on developing their physical capabilities, we developed our mental\n          ones. And we are \"not\" 1% more than the chimps, we are just 1%\n          \"different\". Many things they can do that we can't. To keep in mind,\n          they are nearly 4 times as strong as we are, physically.\n        </p>\n        <p>\n          We tried escaping the brutal cycles of life by creating societies and\n          technologies. We created religions for controlled and directed way for\n          the masses. We created money for accurate value and transactions and\n          we created technology for better life standards and ease of living.\n        </p>\n        <p>\n          Out of these, religious dilemmas are my favorite. See, the universe is\n          commanded by \"universal\" laws. All other depictions are just delusion,\n          imagination or incomplete knowledge. Of course, each religious\n          depictions offer its own version of \"perfect knowledge\" and stop\n          people to question it. A person who is a bit more smart, clever and\n          knowledgeable created the delusion for the rest. More so, some\n          religions even stop people from questioning much.\n        </p>\n        <p>\n          We have become slaves of our own creations. Money, religion, tech..\n          all these are our creations, meant to solve our problems. But they are\n          now lagging behind in solving the purposes they were 1st created for.\n          But we like being enslaved. It gives us a sense of security to walk\n          with the society.\n        </p>\n        <p>\n          We forget, that humans are not what they are now because of playing it\n          safe. We learn, we question, we challenge, we conquer. Lack of wisdom\n          and abundance of tools will create more weapons. It will happen\n          naturally. While we will be living our own lies and challenging\n          others', we all will destroy ourselves.\n        </p>\n        <p>\n          Evolution is the key, questioning is the key and wisdom is the key. We\n          will not make our creations control us. They were our slaves, it is\n          how it should be. It is how it will be.\n        </p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <div class=\"timelineDiv\">\n        <div>\n          <ion-text (click)=\"loveModal()\">\n            <p class=\"badge\">2</p>\n          </ion-text>\n        \n          <ion-img src=\"assets/image/heart.png\" slot=\"start\"></ion-img>\n\n          <ion-text>\n            <p class=\"textDisplay\">Love</p>\n          </ion-text>\n        </div>\n        <div class=\"bigImages\">\n          <ion-img src=\"assets/image/handshake.png\" slot=\"start\"></ion-img>\n\n          <ion-text>\n            <p class=\"textDisplay\">Recommend</p>\n          </ion-text>\n        </div>\n        <div (click)=\"commentModal()\">\n          <ion-img src=\"assets/image/comment.png\" slot=\"start\"></ion-img>\n\n          <ion-text>\n            <p class=\"textDisplay\">Comment</p>\n          </ion-text>\n        </div>\n        <div (click)=\"shareModal()\">\n          <ion-img src=\"assets/image/share.png\" slot=\"start\"></ion-img>\n\n          <ion-text>\n            <p class=\"textDisplay\">Share</p>\n          </ion-text>\n        </div>\n        <div>\n          <ion-img src=\"assets/image/delete.png\" slot=\"start\"></ion-img>\n          <ion-text>\n            <p class=\"textDisplay\"></p>\n          </ion-text>\n        </div>\n      </div>\n    </ion-row>\n    <section>\n        <div class=\"timelineImg\">\n            <ion-img src=\"assets/image/timeline.png\"></ion-img>\n          </div>\n    </section>\n        <app-profile-link></app-profile-link>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/users/timelines/timelines.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/users/timelines/timelines.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".timelineDiv {\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  background: #f2f2f1;\n  margin-bottom: 20px; }\n\n.timelineDiv ion-img {\n  width: 18px !important;\n  margin: 4px 8px 0;\n  display: inline-block; }\n\n.timelineDiv div {\n  display: inline-block; }\n\n.timelineDiv div p {\n  display: inline-block; }\n\n.badge {\n  background: #ccc;\n  padding: 3px 7px 1px 7px;\n  border-radius: 15px; }\n\n.timelineHeader {\n  display: none; }\n\n.dropImg select {\n  background: transparent;\n  width: 21px;\n  float: right;\n  margin-top: 15px;\n  border: none; }\n\n.dropImg select {\n  font-size: 12px; }\n\n.dropImg select:focus {\n  outline: none; }\n\n.firstOpt {\n  display: none; }\n\n.hrLine {\n  height: 2px;\n  background: #ccc; }\n\n@-webkit-keyframes timelineImg {\n  0% {\n    bottom: 30px; }\n  25% {\n    bottom: 35px; }\n  50% {\n    bottom: 30px; }\n  75% {\n    bottom: 25px; }\n  100% {\n    bottom: 30px; } }\n\n@keyframes timelineImg {\n  0% {\n    bottom: 30px; }\n  25% {\n    bottom: 35px; }\n  50% {\n    bottom: 30px; }\n  75% {\n    bottom: 25px; }\n  100% {\n    bottom: 30px; } }\n\n@media screen and (max-width: 767px) {\n  .timelineHeader {\n    display: block; }\n  .dropImg select {\n    margin-top: 0px;\n    color: #000; } }\n\n.timelineImg ion-img {\n  height: 100%; }\n\n.timelineImg {\n  max-width: 80px;\n  position: fixed;\n  bottom: 30px;\n  left: 25px;\n  -webkit-animation: timelineImg 3s infinite;\n          animation: timelineImg 3s infinite; }\n\n@media screen and (max-width: 575px) {\n  .textDisplay {\n    display: none !important; }\n  .timelineDiv {\n    align-items: center; }\n  p {\n    font-size: 12px !important;\n    text-align: justify; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlcnMvdGltZWxpbmVzL0Q6XFxzYWNoaW5cXHZleWV2L3NyY1xcYXBwXFxwYWdlc1xcdXNlcnNcXHRpbWVsaW5lc1xcdGltZWxpbmVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLHNCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIscUJBQXFCLEVBQUE7O0FBRXpCO0VBQ0kscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0kscUJBQXFCLEVBQUE7O0FBRXpCO0VBQ0ksZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxhQUFhLEVBQUE7O0FBMEJqQjtFQUNJLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFXLEVBQUE7O0FBRWY7RUFDSSxlQUFjLEVBQUE7O0FBRWxCO0VBQ0ksYUFBYSxFQUFBOztBQUVqQjtFQUNJLGFBQWEsRUFBQTs7QUFFakI7RUFDSSxXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0k7SUFDSSxZQUFZLEVBQUE7RUFFaEI7SUFDSSxZQUFZLEVBQUE7RUFFaEI7SUFDSSxZQUFZLEVBQUE7RUFFaEI7SUFDSSxZQUFZLEVBQUE7RUFFaEI7SUFDSSxZQUFZLEVBQUEsRUFBQTs7QUFkcEI7RUFDSTtJQUNJLFlBQVksRUFBQTtFQUVoQjtJQUNJLFlBQVksRUFBQTtFQUVoQjtJQUNJLFlBQVksRUFBQTtFQUVoQjtJQUNJLFlBQVksRUFBQTtFQUVoQjtJQUNJLFlBQVksRUFBQSxFQUFBOztBQUdwQjtFQUNJO0lBQ0ksY0FBYyxFQUFBO0VBRWxCO0lBQ0ksZUFBZTtJQUNmLFdBQVcsRUFBQSxFQUtkOztBQUVMO0VBQ0ksWUFBWSxFQUFBOztBQUVoQjtFQUNJLGVBQWU7RUFDZixlQUFlO0VBQ2YsWUFBWTtFQUNaLFVBQVU7RUFDViwwQ0FBa0M7VUFBbEMsa0NBQWtDLEVBQUE7O0FBRXRDO0VBQ0k7SUFDSSx3QkFBdUIsRUFBQTtFQUUzQjtJQUNJLG1CQUFtQixFQUFBO0VBRXZCO0lBQ0ksMEJBQXlCO0lBQ3pCLG1CQUFtQixFQUFBLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXNlcnMvdGltZWxpbmVzL3RpbWVsaW5lcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aW1lbGluZURpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGJhY2tncm91bmQ6ICNmMmYyZjE7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi50aW1lbGluZURpdiBpb24taW1ne1xyXG4gICAgd2lkdGg6IDE4cHghaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiA0cHggOHB4IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLnRpbWVsaW5lRGl2IGRpdiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgIFxyXG59XHJcbi50aW1lbGluZURpdiBkaXYgcCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLmJhZGdlIHtcclxuICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgICBwYWRkaW5nOiAzcHggN3B4IDFweCA3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcbi50aW1lbGluZUhlYWRlcntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLy8gLmljb24tbGlzdCB7XHJcbi8vICAgICB3aWR0aDogNTdweDtcclxuLy8gICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuLy8gICAgIHRvcDogNTAlO1xyXG4vLyAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KC01MCUpO1xyXG4vLyAgICAgcmlnaHQ6IDA7XHJcbi8vICAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XHJcbi8vIH1cclxuLy8gLmljb24tbGlzdCBpb24taXRlbSAuaXRlbS1uYXRpdmUge1xyXG4vLyAgICAgcGFkZGluZzowIWltcG9ydGFudDtcclxuLy8gfVxyXG4vLyAuYWRkLWljb24gaW9uLWljb24ge1xyXG4vLyAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4vLyB9XHJcbi8vIC5hZGQtaWNvbiBpb24tYmFkZ2Uge1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuLy8gICAgIGJhY2tncm91bmQ6ICNmZjAwMDA7XHJcbi8vIH1cclxuLy8gLmFkZC1pY29uIHtcclxuLy8gICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuLy8gICAgIHRvcDogODQlO1xyXG4vLyAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04NCUpO1xyXG4vLyAgICAgcmlnaHQ6IDEwcHg7XHJcbi8vIH1cclxuLmRyb3BJbWcgc2VsZWN0e1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB3aWR0aDogMjFweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBib3JkZXI6bm9uZTtcclxufVxyXG4uZHJvcEltZyBzZWxlY3R7XHJcbiAgICBmb250LXNpemU6MTJweDtcclxufVxyXG4uZHJvcEltZyBzZWxlY3Q6Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5maXJzdE9wdHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmhyTGluZSB7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbn0gIFxyXG5cclxuQGtleWZyYW1lcyB0aW1lbGluZUltZ3tcclxuICAgIDAle1xyXG4gICAgICAgIGJvdHRvbTogMzBweDtcclxuICAgIH1cclxuICAgIDI1JXtcclxuICAgICAgICBib3R0b206IDM1cHg7XHJcbiAgICB9XHJcbiAgICA1MCV7XHJcbiAgICAgICAgYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgNzUle1xyXG4gICAgICAgIGJvdHRvbTogMjVweDtcclxuICAgIH1cclxuICAgIDEwMCV7XHJcbiAgICAgICAgYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpe1xyXG4gICAgLnRpbWVsaW5lSGVhZGVye1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLmRyb3BJbWcgc2VsZWN0e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAvLyAmOmZvY3Vze1xyXG4gICAgICAgIC8vICAgICBiYWNrZ3JvdW5kOiAjZmYwMDAwO1xyXG4gICAgICAgIC8vICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbn1cclxuLnRpbWVsaW5lSW1nIGlvbi1pbWcge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi50aW1lbGluZUltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDgwcHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDMwcHg7XHJcbiAgICBsZWZ0OiAyNXB4O1xyXG4gICAgYW5pbWF0aW9uOiB0aW1lbGluZUltZyAzcyBpbmZpbml0ZTtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NXB4KXtcclxuICAgIC50ZXh0RGlzcGxheXtcclxuICAgICAgICBkaXNwbGF5OiBub25lIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC50aW1lbGluZURpdiB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIH1cclxuICAgIFxyXG59Il19 */"

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
    // async openPopover() {
    //   const modal = await this.modalController.create({
    //     component: GalleryPopoverComponent, 
    //     cssClass:'openPopoverCss' 
    //   });
    //   return await modal.present();
    // }
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
/* harmony import */ var _profile_link_profile_link_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile-link/profile-link.component */ "./src/app/pages/users/profile-link/profile-link.component.ts");
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
            declarations: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"], _timelines_timelines_component__WEBPACK_IMPORTED_MODULE_8__["TimelinesComponent"], _followers_followers_component__WEBPACK_IMPORTED_MODULE_9__["FollowersComponent"], _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_10__["GalleryComponent"], _profile_link_profile_link_component__WEBPACK_IMPORTED_MODULE_11__["ProfileLinkComponent"]],
            entryComponents: [src_app_components_gallery_popover_gallery_popover_component__WEBPACK_IMPORTED_MODULE_6__["GalleryPopoverComponent"]]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-users-users-module.js.map