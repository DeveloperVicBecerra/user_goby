function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-history-detail-history-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history-detail/history-detail.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history-detail/history-detail.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHistoryDetailHistoryDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <div class=\"header_div\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button text=\"\" mode=\"md\"></ion-back-button>\n      </ion-buttons>\n      <!-- <ion-label class=\"support_lbl\">Support</ion-label> -->\n    </div>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"chat()\" color=\"danger\">\n        <ion-icon slot=\"end\" name=\"chatbox-ellipses-outline\"></ion-icon>\n        {{'Support' | translate}}\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"!loaded\" style=\"display: flex;flex-direction: column;justify-content: center;align-items: center;\">\n    <ion-spinner color=\"primary\" name=\"crescent\"></ion-spinner>\n  </div>\n  <div class=\"main_content_div\" *ngIf=\"loaded\">\n    <ion-label class=\"header_lbl\">{{'Order Summary' | translate}}</ion-label>\n    <ion-label class=\"res_location\">{{'This order with' | translate}} {{restName}} {{'was' | translate}} {{status}}\n    </ion-label>\n\n    <div class=\"line_div\"></div>\n\n    <ion-label class=\"res_location\">{{address}}</ion-label>\n\n    <div class=\"flex_div\">\n      <ion-label class=\"res_name\" style=\"margin-top: 0px;\">{{'Your Order' | translate}}</ion-label>\n      <ion-label class=\"fav_lbl\" (click)=\"trackMyOrder()\" *ngIf=\"status =='ongoing' || status =='accepted' \">\n        {{'Track Order' | translate}}\n      </ion-label>\n    </div>\n\n    <!-- <div class=\"line_div\"></div> -->\n\n    <span *ngFor=\"let item of orders\">\n\n      <div *ngFor=\"let subItems of item.selectedItem;let j = index\" class=\"subNames\">\n        <ion-label class=\"food_title\">\n          {{item.name}} X\n          {{item.selectedItem[j].total}}</ion-label>\n        <div *ngFor=\"let addods of subItems.item\" class=\"flex_titles\">\n          <p class=\"sub_name\">\n            - {{addods.name}}\n          </p>\n          <p class=\"sub_name\">\n            {{getCurrency()}} {{addods.value}}\n          </p>\n        </div>\n      </div>\n\n      <div class=\"card_div\" *ngIf=\"!item.selectedItem || !item.selectedItem.length\">\n        <div class=\"flex_div\">\n          <ion-label class=\"food_title\">{{item.name}} X {{item.quantiy}} </ion-label>\n          <ion-label class=\"food_price\">{{getCurrency()}}{{item.quantiy * item.price}}</ion-label>\n        </div>\n\n      </div>\n\n    </span>\n\n    <ion-label style=\"margin-top: 5px; font-weight: 600px;\">{{'Item Total' | translate}} <span\n        class=\"prise_lbl\">{{getCurrency()}}{{total}}</span>\n    </ion-label>\n    <ion-label style=\"margin-top: 5px; font-weight: 600px;\" *ngIf=\"coupon\">{{'Coupon Discout' | translate}} <span\n        class=\"prise_lbl\">{{getCurrency()}}{{dicount}}</span>\n    </ion-label>\n    <ion-label style=\"margin-top: 5px; font-size: 14px\">{{'Delivery Charge' | translate}} <span\n        class=\"prise_lbl\">{{getCurrency()}}{{serviceTax}}</span>\n    </ion-label>\n    <div class=\"line_div\"></div>\n\n    <ion-label class=\"res_name\">{{'Order Detail' | translate}}</ion-label>\n    <div class=\"line_div\"></div>\n\n    <ion-label class=\"head_gray\">{{'Order Number' | translate}}</ion-label>\n    <ion-label class=\"small_lbl\">{{id}}</ion-label>\n    <ion-label class=\"head_gray\">{{'Payment' | translate}}</ion-label>\n    <ion-label class=\"small_lbl\">{{'Paid' | translate}} ; <span *ngIf=\"paid =='cod'\">COD</span> <span\n        *ngIf=\"paid =='stripe'\">{{'Using Card' | translate}}</span> </ion-label>\n    <ion-label class=\"head_gray\">{{'Date' | translate}}</ion-label>\n    <ion-label class=\"small_lbl\">{{time}}</ion-label>\n    <ion-label class=\"head_gray\">{{'Deliver to' | translate}}</ion-label>\n    <ion-label class=\"small_lbl\">{{deliveryAddress}}</ion-label>\n\n    <div class=\"line_div\"></div>\n\n    <ion-label class=\"red_lbl\" *ngIf=\"status =='created' ||status =='ongoing' || status =='accepted' \" (click)=\"call()\">\n      {{'Call' | translate}} {{restName}}</ion-label>\n\n\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <div class=\"btn_div\">\n      <ion-button *ngIf=\"status ==='delivered'\" (click)=\"presentAlertConfirm()\" size=\"small\" class=\"ratae\">\n        <ion-icon name=\"star\" color=\"light\" slot=\"start\"></ion-icon>\n        {{'Rate Order' | translate}}\n      </ion-button>\n      <ion-button *ngIf=\"status === 'created' ||status === 'ongoing' || status === 'accepted' \" (click)=\"changeStatus()\"\n        size=\"small\" class=\"reject\">\n        {{'Cancel Order' | translate}}\n      </ion-button>\n    </div>\n  </ion-toolbar>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/pages/history-detail/history-detail-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/history-detail/history-detail-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: HistoryDetailPageRoutingModule */

  /***/
  function srcAppPagesHistoryDetailHistoryDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoryDetailPageRoutingModule", function () {
      return HistoryDetailPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _history_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./history-detail.page */
    "./src/app/pages/history-detail/history-detail.page.ts");

    var routes = [{
      path: '',
      component: _history_detail_page__WEBPACK_IMPORTED_MODULE_3__["HistoryDetailPage"]
    }];

    var HistoryDetailPageRoutingModule = function HistoryDetailPageRoutingModule() {
      _classCallCheck(this, HistoryDetailPageRoutingModule);
    };

    HistoryDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HistoryDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/history-detail/history-detail.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/history-detail/history-detail.module.ts ***!
    \***************************************************************/

  /*! exports provided: HistoryDetailPageModule */

  /***/
  function srcAppPagesHistoryDetailHistoryDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoryDetailPageModule", function () {
      return HistoryDetailPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _history_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./history-detail-routing.module */
    "./src/app/pages/history-detail/history-detail-routing.module.ts");
    /* harmony import */


    var _history_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./history-detail.page */
    "./src/app/pages/history-detail/history-detail.page.ts");
    /* harmony import */


    var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/directives/shared.module */
    "./src/app/directives/shared.module.ts");

    var HistoryDetailPageModule = function HistoryDetailPageModule() {
      _classCallCheck(this, HistoryDetailPageModule);
    };

    HistoryDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _history_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["HistoryDetailPageRoutingModule"], src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
      declarations: [_history_detail_page__WEBPACK_IMPORTED_MODULE_6__["HistoryDetailPage"]]
    })], HistoryDetailPageModule);
    /***/
  },

  /***/
  "./src/app/pages/history-detail/history-detail.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/history-detail/history-detail.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHistoryDetailHistoryDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.header_div .support_lbl {\n  margin-right: 20px;\n  color: red;\n}\n.main_content_div {\n  width: 100%;\n  padding: 20px;\n}\n.main_content_div .line_div {\n  height: 1px;\n  width: 100%;\n  background: lightgray;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .header_lbl {\n  font-weight: 600;\n  font-size: 22px;\n}\n.main_content_div .res_name {\n  margin-top: 20px;\n  font-weight: 600;\n  font-size: 18px;\n}\n.main_content_div .res_location {\n  font-size: 14px;\n  width: 90%;\n}\n.main_content_div .flex_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 20px;\n}\n.main_content_div .flex_div .food_title {\n  font-size: 15px;\n  font-weight: bold;\n}\n.main_content_div .flex_div .food_price {\n  font-size: 15px;\n}\n.main_content_div .flex_div .fav_lbl {\n  color: red;\n  font-size: 12px;\n  border: 1px solid red;\n  border-radius: 25px;\n  padding: 2px 10px;\n}\n.main_content_div .subNames {\n  border-bottom: 1px dashed lightgray;\n  padding-bottom: 5px;\n}\n.main_content_div .subNames .food_title {\n  font-size: 15px;\n  font-weight: bold;\n}\n.main_content_div .subNames .food_title .veg {\n  height: 12px;\n  width: 12px;\n}\n.main_content_div .subNames .food_title .rate_lbl {\n  background: #b2d9b2;\n  border: 1px solid #7bdb7b;\n  padding: 3px 8px;\n  border-radius: 5px;\n  font-size: 14px;\n  font-weight: 600;\n}\n.main_content_div .subNames .flex_titles {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.main_content_div .subNames .flex_titles .sub_name {\n  margin: 0px;\n  color: black;\n  font-size: 12px;\n}\n.main_content_div .card_div {\n  border-bottom: 1px dashed lightgray;\n  padding-bottom: 5px;\n}\n.main_content_div .card_div .upper_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.main_content_div .card_div .upper_div .veg {\n  width: 12px;\n  height: 12px;\n}\n.main_content_div .card_div .lower_div {\n  margin-top: 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.main_content_div .card_div .lower_div .rate_lbl {\n  background: #b2d9b2;\n  border: 1px solid #7bdb7b;\n  padding: 3px 8px;\n  border-radius: 5px;\n  font-size: 14px;\n  font-weight: 600;\n}\n.main_content_div .prise_lbl {\n  position: absolute;\n  right: 20px;\n}\n.main_content_div .head_gray {\n  color: gray;\n  font-size: 13px;\n}\n.main_content_div .small_lbl {\n  font-size: 12px;\n  font-weight: 600;\n  margin-bottom: 15px;\n}\n.main_content_div .red_lbl {\n  color: red;\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.btn_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.btn_div ion-button {\n  font-weight: 600;\n  --border-radius: 5px;\n  width: 130px;\n}\n.btn_div .ratae {\n  --background: var(--ion-color-warning);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9WaWNCZWNlcnJhL0Rvd25sb2Fkcy9pb25pYzVGb29kQXBwRnVsbC9BcHBfY29kZS9Vc2VyQXBwL3NyYy9hcHAvcGFnZXMvaGlzdG9yeS1kZXRhaWwvaGlzdG9yeS1kZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9oaXN0b3J5LWRldGFpbC9oaXN0b3J5LWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NKO0FEQ0k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUNDUjtBREdBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNBSjtBREVJO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNBUjtBREdJO0VBQ0ksY0FBQTtBQ0RSO0FESUk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUNGUjtBRElJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNGUjtBRElJO0VBQ0ksZUFBQTtFQUNBLFVBQUE7QUNGUjtBREtJO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxnQkFBQTtBQ0hSO0FESVE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNGWjtBRElRO0VBQ0ksZUFBQTtBQ0ZaO0FESVE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0ZaO0FETUk7RUFDSSxtQ0FBQTtFQUNBLG1CQUFBO0FDSlI7QURLUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0haO0FESVk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0ZoQjtBRElZO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNGaEI7QURLUTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNIWjtBRElZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDRmhCO0FET0k7RUFDSSxtQ0FBQTtFQUNBLG1CQUFBO0FDTFI7QURNUTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNKWjtBRE1ZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNKaEI7QURRUTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNOWjtBRE9ZO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNMaEI7QURVSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQ1JSO0FEV0k7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ1RSO0FEV0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ1RSO0FEV0k7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDVFI7QURhQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNWSjtBRFlJO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUNWUjtBRFlJO0VBQ0ksc0NBQUE7QUNWUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hpc3RvcnktZGV0YWlsL2hpc3RvcnktZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJfZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAuc3VwcG9ydF9sYmx7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICB9XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICAubGluZV9kaXZ7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5oZWFkZXJfbGJse1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgfVxuICAgIC5yZXNfbmFtZXtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbiAgICAucmVzX2xvY2F0aW9ue1xuICAgICAgICBmb250LXNpemU6IDE0cHg7ICAgICAgIFxuICAgICAgICB3aWR0aDogOTAlO1xuICAgIH1cblxuICAgIC5mbGV4X2RpdntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAuZm9vZF90aXRsZXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICAgIC5mb29kX3ByaWNle1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5mYXZfbGJse1xuICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAycHggMTBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zdWJOYW1lc3tcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCBsaWdodGdyYXk7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgIC5mb29kX3RpdGxle1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAudmVne1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yYXRlX2xibHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYjJkOWIyO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM3YmRiN2I7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogM3B4IDhweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmZsZXhfdGl0bGVze1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAuc3ViX25hbWV7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jYXJkX2RpdntcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCBsaWdodGdyYXk7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgIC51cHBlcl9kaXZ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgLnZlZ3tcbiAgICAgICAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAubG93ZXJfZGl2e1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOztcbiAgICAgICAgICAgIC5yYXRlX2xibHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYjJkOWIyO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM3YmRiN2I7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogM3B4IDhweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucHJpc2VfbGJse1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgIH1cblxuICAgIC5oZWFkX2dyYXl7XG4gICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuICAgIC5zbWFsbF9sYmx7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB9XG4gICAgLnJlZF9sYmx7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG59XG5cbi5idG5fZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBpb24tYnV0dG9ue1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgIH1cbiAgICAucmF0YWV7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpOztcbiAgICB9XG59XG4iLCIuaGVhZGVyX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5oZWFkZXJfZGl2IC5zdXBwb3J0X2xibCB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgY29sb3I6IHJlZDtcbn1cblxuLm1haW5fY29udGVudF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5saW5lX2RpdiB7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuaGVhZGVyX2xibCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5yZXNfbmFtZSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5yZXNfbG9jYXRpb24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiA5MCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLmZvb2RfdGl0bGUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC5mb29kX3ByaWNlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC5mYXZfbGJsIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHBhZGRpbmc6IDJweCAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnN1Yk5hbWVzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCBsaWdodGdyYXk7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuc3ViTmFtZXMgLmZvb2RfdGl0bGUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1haW5fY29udGVudF9kaXYgLnN1Yk5hbWVzIC5mb29kX3RpdGxlIC52ZWcge1xuICBoZWlnaHQ6IDEycHg7XG4gIHdpZHRoOiAxMnB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnN1Yk5hbWVzIC5mb29kX3RpdGxlIC5yYXRlX2xibCB7XG4gIGJhY2tncm91bmQ6ICNiMmQ5YjI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3YmRiN2I7XG4gIHBhZGRpbmc6IDNweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLm1haW5fY29udGVudF9kaXYgLnN1Yk5hbWVzIC5mbGV4X3RpdGxlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5zdWJOYW1lcyAuZmxleF90aXRsZXMgLnN1Yl9uYW1lIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCBsaWdodGdyYXk7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLnVwcGVyX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLnVwcGVyX2RpdiAudmVnIHtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAubG93ZXJfZGl2IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5sb3dlcl9kaXYgLnJhdGVfbGJsIHtcbiAgYmFja2dyb3VuZDogI2IyZDliMjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzdiZGI3YjtcbiAgcGFkZGluZzogM3B4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucHJpc2VfbGJsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5oZWFkX2dyYXkge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnNtYWxsX2xibCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5yZWRfbGJsIHtcbiAgY29sb3I6IHJlZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uYnRuX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmJ0bl9kaXYgaW9uLWJ1dHRvbiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogMTMwcHg7XG59XG4uYnRuX2RpdiAucmF0YWUge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/history-detail/history-detail.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/history-detail/history-detail.page.ts ***!
    \*************************************************************/

  /*! exports provided: HistoryDetailPage */

  /***/
  function srcAppPagesHistoryDetailHistoryDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoryDetailPage", function () {
      return HistoryDetailPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);

    var HistoryDetailPage =
    /*#__PURE__*/
    function () {
      function HistoryDetailPage(route, api, router, util, alertController, navCtrl) {
        _classCallCheck(this, HistoryDetailPage);

        this.route = route;
        this.api = api;
        this.router = router;
        this.util = util;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.orders = [];
        this.coupon = false;
        this.loaded = false;
      }

      _createClass(HistoryDetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.queryParams.subscribe(function (data) {
            console.log('data=>', data);

            if (data.hasOwnProperty('id')) {
              _this.id = data.id;

              _this.getOrder();
            }
          });
        }
      }, {
        key: "getOrder",
        value: function getOrder() {
          var _this2 = this;

          this.api.getOrderById(this.id).then(function (data) {
            _this2.loaded = true;
            console.log(data);

            if (data) {
              _this2.orderData = data;
              _this2.grandTotal = data.grandTotal;
              _this2.orders = JSON.parse(data.order);
              _this2.serviceTax = data.serviceTax;
              _this2.status = data.status;
              _this2.time = data.time;

              if (data && data.dId && data.dId.fullname) {
                _this2.dname = data.dId.fullname;
                _this2.driverFCM = data.dId.fcm_token;
                console.log('driver FCM-------->', _this2.driverFCM);
                _this2.dId = data.dId.uid;
              }

              _this2.total = data.total;
              _this2.address = data.vid.address;
              _this2.restName = data.vid.name;
              _this2.deliveryAddress = data.address.address;
              _this2.paid = data.paid;
              console.log('this', _this2.orders);

              _this2.getRest(data.vid.uid);

              _this2.coupon = data.appliedCoupon;
              _this2.dicount = data.dicount; // if (this.status === 'delivered') {
              //   this.presentAlertConfirm();
              // }
            }
          }, function (error) {
            console.log('error in orders', error);
            _this2.loaded = true;

            _this2.util.errorToast('Something went wrong');
          }).catch(function (error) {
            console.log('error in order', error);
            _this2.loaded = true;

            _this2.util.errorToast('Something went wrong');
          });
        }
      }, {
        key: "presentAlertConfirm",
        value: function presentAlertConfirm() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: 'How was your experience?',
                      message: 'Rate ' + this.restName + ' and ' + this.dname,
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'Yes',
                        handler: function handler() {
                          console.log('Confirm Okay');

                          _this3.util.setOrders(_this3.orderData);

                          _this3.router.navigate(['rate']);
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getRest",
        value: function getRest(id) {
          var _this4 = this;

          this.api.getProfile(id).then(function (data) {
            console.log(data);
            _this4.restFCM = data.fcm_token;
            console.log('rest FCM------------->', _this4.restFCM);

            if (data && data.phone) {
              _this4.restPhone = data.phone;
            }
          }, function (error) {
            console.log('error in orders', error);

            _this4.util.errorToast('Something went wrong');
          }).catch(function (error) {
            console.log('error in order', error);

            _this4.util.errorToast('Something went wrong');
          });
        }
      }, {
        key: "trackMyOrder",
        value: function trackMyOrder() {
          var navData = {
            queryParams: {
              id: this.id
            }
          };
          this.router.navigate(['/tracker'], navData); //
        }
      }, {
        key: "call",
        value: function call() {
          if (this.restPhone) {
            window.open('tel:' + this.restPhone);
          }
        }
      }, {
        key: "chat",
        value: function chat() {
          this.router.navigate(['inbox']);
        }
      }, {
        key: "changeStatus",
        value: function changeStatus() {
          var _this5 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: this.util.translate('Are you sure?'),
            text: this.util.translate('To Cancel this order'),
            showCancelButton: true,
            cancelButtonText: this.util.translate('Cancel'),
            showConfirmButton: true,
            confirmButtonText: this.util.translate('Yes'),
            backdrop: false,
            background: 'white'
          }).then(function (data) {
            console.log(data);

            if (data && data.value) {
              _this5.util.show();

              _this5.api.updateOrderStatus(_this5.id, 'cancel').then(function (data) {
                _this5.util.hide();

                var message = _this5.util.translate('Order ') + _this5.id + ' ' + _this5.util.translate(' cancelled by user');

                var title = _this5.util.translate('Order cancelled');

                _this5.api.sendNotification(message, title, _this5.driverFCM).subscribe(function (data) {
                  console.log(data);
                });

                _this5.api.sendNotification(message, title, _this5.restFCM).subscribe(function (data) {
                  console.log(data);
                });

                if (_this5.dId && _this5.dname) {
                  var parm = {
                    current: 'active'
                  };

                  _this5.api.updateProfile(_this5.dId, parm).then(function (data) {
                    console.log('driver status cahcnage----->', data);
                  }).catch(function (error) {
                    console.log(error);
                  });
                }

                _this5.navCtrl.back();
              }, function (error) {
                _this5.util.hide();

                console.log(error);

                _this5.util.errorToast('Something went wrong');
              }).catch(function (error) {
                _this5.util.hide();

                console.log(error);

                _this5.util.errorToast('Something went wrong');
              });
            }
          });
        }
      }, {
        key: "getCurrency",
        value: function getCurrency() {
          return this.util.getCurrecySymbol();
        }
      }]);

      return HistoryDetailPage;
    }();

    HistoryDetailPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }];
    };

    HistoryDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-history-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./history-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history-detail/history-detail.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./history-detail.page.scss */
      "./src/app/pages/history-detail/history-detail.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])], HistoryDetailPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-history-detail-history-detail-module-es5.js.map