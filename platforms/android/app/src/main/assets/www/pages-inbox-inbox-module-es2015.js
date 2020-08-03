(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inbox-inbox-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbox/inbox.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbox/inbox.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">{{'Support' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"main_content_div\">\n    <div class=\"lower_div\" #scrollMe [scrollTop]=\"scrollMe.scrollHeight\">\n      <span *ngFor=\"let msg of messages\">\n        <div class=\"main_div_right\" *ngIf=\"msg.from == 'user'\">\n          <div class=\"msg_div\">\n            <div class=\"inner_msg\">\n              {{msg.msg}}\n            </div>\n          </div>\n          <div class=\"tri_right\"></div>\n        </div>\n\n        <div class=\"main_div_left\" *ngIf=\"msg.from == 'admin'\">\n          <div class=\"msg_div\">\n            <div class=\"inner_msg\">\n              {{msg.msg}}\n            </div>\n          </div>\n          <div class=\"tri_left\"></div>\n        </div>\n      </span>\n    </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <div class=\"footer_div\">\n      <ion-input type=\"text\" [(ngModel)]=\"message\" [placeholder]=\"('Type a message..' | translate) || '&nbsp;'\">\n      </ion-input>\n      <ion-icon class=\"send_btn\" (click)=\"send()\" name=\"send-sharp\"></ion-icon>\n    </div>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/inbox/inbox-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/inbox/inbox-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: InboxPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxPageRoutingModule", function() { return InboxPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _inbox_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inbox.page */ "./src/app/pages/inbox/inbox.page.ts");




const routes = [
    {
        path: '',
        component: _inbox_page__WEBPACK_IMPORTED_MODULE_3__["InboxPage"]
    }
];
let InboxPageRoutingModule = class InboxPageRoutingModule {
};
InboxPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InboxPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/inbox/inbox.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/inbox/inbox.module.ts ***!
  \*********************************************/
/*! exports provided: InboxPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxPageModule", function() { return InboxPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _inbox_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inbox-routing.module */ "./src/app/pages/inbox/inbox-routing.module.ts");
/* harmony import */ var _inbox_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inbox.page */ "./src/app/pages/inbox/inbox.page.ts");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/shared.module */ "./src/app/directives/shared.module.ts");








let InboxPageModule = class InboxPageModule {
};
InboxPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _inbox_routing_module__WEBPACK_IMPORTED_MODULE_5__["InboxPageRoutingModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_inbox_page__WEBPACK_IMPORTED_MODULE_6__["InboxPage"]]
    })
], InboxPageModule);



/***/ }),

/***/ "./src/app/pages/inbox/inbox.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/inbox/inbox.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n  background: white;\n  position: relative;\n}\n.main_content_div .lower_div {\n  padding: 0px 20px;\n}\n.main_content_div .lower_div .main_div_right {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  position: relative;\n}\n.main_content_div .lower_div .main_div_right .msg_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  width: 80%;\n  margin-bottom: 15px;\n}\n.main_content_div .lower_div .main_div_right .msg_div .inner_msg {\n  background-color: #F0EFF5;\n  padding: 10px;\n  border-radius: 5px;\n}\n.main_content_div .lower_div .main_div_right .tri_right {\n  width: 0;\n  height: 0;\n  position: absolute;\n  border-top: 10px solid #F0EFF5;\n  border-left: 10px solid transparent;\n  bottom: 10px;\n}\n.main_content_div .lower_div .main_div_left {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  position: relative;\n}\n.main_content_div .lower_div .main_div_left .msg_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  width: 80%;\n  margin-bottom: 15px;\n}\n.main_content_div .lower_div .main_div_left .msg_div .inner_msg {\n  background-color: var(--ion-color-danger);\n  padding: 10px;\n  border-radius: 5px;\n  color: white;\n}\n.main_content_div .lower_div .main_div_left .tri_left {\n  width: 0;\n  height: 0;\n  position: absolute;\n  border-top: 10px solid var(--ion-color-main2);\n  border-right: 10px solid transparent;\n  bottom: 10px;\n}\n.footer_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 20px;\n}\n.footer_div ion-toolbar {\n  --background: #FDFDFD;\n}\n.footer_div ion-input {\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  --padding-start: 8px;\n  height: 20px;\n  height: 35px;\n}\n.footer_div .send_btn {\n  font-size: 20px;\n  color: var(--ion-color-main2);\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9WaWNCZWNlcnJhL0Rvd25sb2Fkcy9pb25pYzVGb29kQXBwRnVsbC9BcHBfY29kZS9Vc2VyQXBwL3NyYy9hcHAvcGFnZXMvaW5ib3gvaW5ib3gucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9pbmJveC9pbmJveC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0FKO0FERUk7RUFDSSxpQkFBQTtBQ0FSO0FEQ1E7RUFDSSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtFQUNBLGtCQUFBO0FDQ1o7QURBWTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNFaEI7QUREZ0I7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0dwQjtBREFZO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUNBQUE7RUFDQSxZQUFBO0FDRWhCO0FEQ1E7RUFDSSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsdUJBQUE7VUFBQSwyQkFBQTtFQUNBLGtCQUFBO0FDQ1o7QURBWTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHVCQUFBO1VBQUEsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNFaEI7QUREZ0I7RUFDSSx5Q0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNHcEI7QURBWTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtBQ0VoQjtBRElBO0VBS0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGFBQUE7QUNMSjtBRERJO0VBQ0kscUJBQUE7QUNHUjtBRElJO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNGUjtBREtJO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QUNIUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luYm94L2luYm94LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLm1haW5fY29udGVudF9kaXZ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLmxvd2VyX2RpdntcbiAgICAgICAgcGFkZGluZzowcHggMjBweDtcbiAgICAgICAgLm1haW5fZGl2X3JpZ2h0e1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIC5tc2dfZGl2e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICAgICAgLmlubmVyX21zZ3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRUZGNTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50cmlfcmlnaHR7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICNGMEVGRjU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5tYWluX2Rpdl9sZWZ0e1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgLm1zZ19kaXZ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgICAgIC5pbm5lcl9tc2d7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpOztcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRyaV9sZWZ0e1xuICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWFpbjIpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5mb290ZXJfZGl2e1xuXG4gICAgaW9uLXRvb2xiYXJ7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI0ZERkRGRDtcbiAgICB9XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweDtcblxuICAgIGlvbi1pbnB1dHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMzVweDtcbiAgICB9XG5cbiAgICAuc2VuZF9idG57XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYWluMik7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIH1cbn0iLCIubWFpbl9jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiB7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiAubWFpbl9kaXZfcmlnaHQge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiAubWFpbl9kaXZfcmlnaHQgLm1zZ19kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiAubWFpbl9kaXZfcmlnaHQgLm1zZ19kaXYgLmlubmVyX21zZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMEVGRjU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sb3dlcl9kaXYgLm1haW5fZGl2X3JpZ2h0IC50cmlfcmlnaHQge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci10b3A6IDEwcHggc29saWQgI0YwRUZGNTtcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvdHRvbTogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sb3dlcl9kaXYgLm1haW5fZGl2X2xlZnQge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IC5tYWluX2Rpdl9sZWZ0IC5tc2dfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiAubWFpbl9kaXZfbGVmdCAubXNnX2RpdiAuaW5uZXJfbXNnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiAubWFpbl9kaXZfbGVmdCAudHJpX2xlZnQge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci10b3A6IDEwcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1haW4yKTtcbiAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3R0b206IDEwcHg7XG59XG5cbi5mb290ZXJfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5mb290ZXJfZGl2IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkRGREZEO1xufVxuLmZvb3Rlcl9kaXYgaW9uLWlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGhlaWdodDogMzVweDtcbn1cbi5mb290ZXJfZGl2IC5zZW5kX2J0biB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYWluMik7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/inbox/inbox.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/inbox/inbox.page.ts ***!
  \*******************************************/
/*! exports provided: InboxPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxPage", function() { return InboxPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");




let InboxPage = class InboxPage {
    constructor(adb, api) {
        this.adb = adb;
        this.api = api;
        this.messages = [];
        this.count = 0;
        console.log('iddddddd---->', localStorage.getItem('help'));
        if (!localStorage.getItem('help')) {
            localStorage.setItem('help', localStorage.getItem('uid'));
        }
        this.id = 'admin' + localStorage.getItem('help');
        this.getMessages();
        this.adb.collection('users').doc(localStorage.getItem('help')).snapshotChanges().subscribe((data) => {
            this.api.getProfile(localStorage.getItem('help')).then((info) => {
                console.log(info);
                if (info && info.count) {
                    this.count = info.count;
                }
                else {
                    this.count = 0;
                }
            }).catch(error => {
                console.log(error);
            });
        });
    }
    getMessages() {
        this.adb.collection('messages').doc(this.id).collection('chats').snapshotChanges().subscribe((data) => {
            console.log(data);
            this.api.getMessages(this.id).then(info => {
                console.log(info);
                info.sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
                this.messages = info;
                console.log('info', this.messages);
                this.scrollToBottomOnInit();
            }).catch(error => {
                console.log(error);
            });
        }, error => {
            console.log(error);
        });
    }
    ngOnInit() {
    }
    send() {
        console.log('this.mess', this.message);
        if (this.message && this.id) {
            const text = this.message;
            this.message = '';
            console.log('send');
            const id = Math.floor(100000000 + Math.random() * 900000000);
            const data = {
                msg: text,
                from: 'user',
                timestamp: new Date().toISOString(),
                id: this.id,
                docId: id
            };
            this.adb.collection('messages').doc(this.id).collection('chats').doc(id.toString()).set(data).then((data) => {
                console.log('sent', data);
            }).catch(error => {
                console.log(error);
            });
            const count = {
                count: this.count + 1,
            };
            this.api.updateProfile(localStorage.getItem('help'), count).then(data => {
                console.log('updated', data);
            }).catch(error => {
                console.log(error);
            });
        }
    }
    scrollToBottomOnInit() {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    }
};
InboxPage.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollMe', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], InboxPage.prototype, "myScrollContainer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('messages'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
], InboxPage.prototype, "messagesList", void 0);
InboxPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inbox',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inbox.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbox/inbox.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./inbox.page.scss */ "./src/app/pages/inbox/inbox.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"]])
], InboxPage);



/***/ })

}]);
//# sourceMappingURL=pages-inbox-inbox-module-es2015.js.map