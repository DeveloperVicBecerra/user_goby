function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu/menu.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu/menu.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMenuMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-item *ngFor=\"let item of cates\" lines=\"none\" (click)=\"selected(item)\">\n  <ion-label>{{item.name}}</ion-label>\n</ion-item>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popover/popover.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/popover/popover.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPopoverPopoverComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-list lines=\"none\">\n  <ion-item (click)=\"select('edit')\">\n    <ion-label color=\"secondary\">{{'EDIT' | translate}}</ion-label>\n  </ion-item>\n  <ion-item (click)=\"select('delete')\">\n    <ion-label color=\"danger\">{{'DELETE' | translate}}</ion-label>\n  </ion-item>\n</ion-list>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/choose-address/choose-address.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/choose-address/choose-address.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesChooseAddressChooseAddressPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"from ==='cart'\">{{'Delivery Address' | translate}}</ion-title>\n    <ion-title *ngIf=\"from ==='accont'\">{{'Manage Address' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"group\">\n    <div class=\"mainContent\">\n      <ion-button (click)=\"addNew()\" expand=\"block\" fill=\"clear\">\n        <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n        {{'Add Address' | translate}}\n      </ion-button>\n      <div class=\"noData\" *ngIf=\"!dummy?.length && !myaddress?.length\"\n        [style.backgroundImage]=\"'url(assets/nothing.jpg)'\">\n      </div>\n      <div *ngFor=\"let item of dummy\">\n        <ion-list lines=\"none\">\n          <ion-item>\n            <ion-thumbnail slot=\"start\">\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </ion-thumbnail>\n            <ion-label>\n              <h3>\n                <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n              </h3>\n              <p>\n                <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n              </p>\n              <p>\n                <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n              </p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </div>\n      <ion-list *ngIf=\"from ==='cart'\">\n        <ion-radio-group [(ngModel)]=\"selectedAddress\">\n          <ion-item *ngFor=\"let item of myaddress\" class=\"list\">\n            <ion-label class=\"title\">{{item.title}} <br>\n              <span class=\"name\">{{item.house}} {{item.landmark}} {{item.address}}</span></ion-label>\n            <!-- <ion-label class=\"name\"></ion-label> -->\n            <ion-radio [value]=\"item.id\" slot=\"start\" mode=\"md\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n      </ion-list>\n      <div *ngIf=\"from ==='accont'\">\n        <div class=\"list\" *ngFor=\"let item of myaddress\" scrollX=\"true\">\n          <ion-label class=\"title\">{{item.title}}</ion-label>\n          <ion-label class=\"name\">{{item.house}} {{item.landmark}} {{item.address}}\n          </ion-label>\n          <ion-icon class=\"moreIcon\" (click)=\"openMenu(item,$event)\" name=\"ellipsis-vertical-outline\">\n          </ion-icon>\n        </div>\n      </div>\n    </div>\n  </div>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"selectedAddress\" (click)=\"selectAddress()\">\n    <ion-fab-button>\n      <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/select-drivers/select-drivers.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/select-drivers/select-drivers.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSelectDriversSelectDriversPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"inner-content\">\n  <div class=\"div_content\">\n    <p class=\"title\">Select Drivers</p>\n  </div>\n  <div class=\"content\">\n    <ion-list>\n      <ion-radio-group [(ngModel)]=\"selectedDriver\">\n        <ion-list-header>\n          <ion-label>Drivers</ion-label>\n        </ion-list-header>\n        <ion-item *ngFor=\"let item of drivers\" lines=\"none\">\n          <ion-avatar slot=\"start\">\n            <img [src]=\"item.coverImage\" />\n          </ion-avatar>\n          <ion-label>{{item.fullname}}</ion-label>\n          <ion-radio [value]=\"item.id\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-list>\n  </div>\n  <div class=\"div_btn\">\n    <ion-row>\n      <ion-col size=\"6\" class=\"cancel\">\n        <ion-button (click)=\"select()\" color=\"primary\" expand=\"full\">\n          Select\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\" class=\"cancel\">\n        <ion-button (click)=\"close()\" color=\"light\" expand=\"full\">\n          Cancle\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/variation/variation.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/variation/variation.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesVariationVariationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>variation</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/variations/variations.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/variations/variations.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesVariationsVariationsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <div class=\"header\">\n    <div class=\"bts\">\n      <div class=\"desc\">\n        <p class=\"title\">{{productName}}</p>\n        <p class=\"details\">{{ (desc.length>40)? (desc | slice:0:40)+'..':(desc) }}</p>\n      </div>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"closeIt()\">\n          <ion-icon name=\"close\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </div>\n  </div>\n</ion-header>\n\n<ion-content>\n\n  <!-- Same Product -->\n  <div *ngIf=\"sameProduct\">\n    <div *ngFor=\"let item of sameCart;let i = index\" class=\"cartItems\">\n      <p class=\"name\">{{productName}}</p>\n      <div class=\"details\">\n        <div class=\"names\">\n          <p *ngFor=\"let sub of item.item\" class=\"subDetails\"> {{sub.name}} </p>\n        </div>\n        <div class=\"cartBtn2\">\n          <ion-button (click)=\"removeQ(i)\" fill=\"clear\" size=\"small\">\n            <ion-icon name=\"remove\"></ion-icon>\n          </ion-button>\n          <p class=\"qunitity\">{{item.total}}</p>\n          <ion-button (click)=\"addQ(i)\" fill=\"clear\" size=\"small\">\n            <ion-icon name=\"add\"></ion-icon>\n          </ion-button>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <!-- New Or diff variations -->\n  <div *ngIf=\"!sameProduct\" class=\"padder\">\n    <div *ngFor=\"let item of lists\">\n      <ion-list *ngIf=\"item.type == 'radio'\">\n        <ion-radio-group (ionChange)=\"radioGroupChange($event,item.title)\">\n          <ion-list-header>\n            <ion-label>{{item.title}}</ion-label>\n          </ion-list-header>\n          <ion-item *ngFor=\"let sub of item.items;let i = index;\">\n            <ion-label style=\"text-align: left\">{{sub.title}}</ion-label>\n            <ion-label style=\"text-align: right\"> {{getCurrency()}} {{sub.price}}</ion-label>\n            <ion-radio slot=\"start\" [value]=\"sub.title\" [name]=\"sub.title\" mode=\"md\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n      </ion-list>\n      <ion-list *ngIf=\"item.type =='check'\">\n        <ion-list-header>\n          <ion-label>{{item.title}}</ion-label>\n        </ion-list-header>\n        <ion-item *ngFor=\"let sub of item.items;let j = index;\">\n          <ion-label style=\"text-align: left\">{{sub.title}}</ion-label>\n          <ion-label style=\"text-align: right\">{{getCurrency()}}{{sub.price}}</ion-label>\n          <ion-checkbox slot=\"start\" [value]=\"sub.price\" (ionChange)=\"checkedEvent($event,sub.title)\" mode=\"md\">\n          </ion-checkbox>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n  <div class=\"footers\">\n    <ion-button (click)=\"addToCart()\" expand=\"block\" *ngIf=\"!sameProduct\">\n      Add {{total ? getSymobol():'' }} {{total ? total : ''}}\n    </ion-button>\n    <ion-row *ngIf=\"sameProduct\">\n      <ion-col size=\"6\">\n        <ion-button (click)=\"sameChoise()\" expand=\"block\">\n          OK\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button (click)=\"sameProduct = !sameProduct;newItem = true\" expand=\"block\">\n          Add new\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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

    var routes = [{
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-tabs-tabs-module */
        "pages-tabs-tabs-module").then(__webpack_require__.bind(null,
        /*! ./pages/tabs/tabs.module */
        "./src/app/pages/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      }
    }, {
      path: 'tabs',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-tabs-tabs-module */
        "pages-tabs-tabs-module").then(__webpack_require__.bind(null,
        /*! ./pages/tabs/tabs.module */
        "./src/app/pages/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      }
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-login-login-module */
        "pages-login-login-module").then(__webpack_require__.bind(null,
        /*! ./pages/login/login.module */
        "./src/app/pages/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'register',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-register-register-module */
        "pages-register-register-module").then(__webpack_require__.bind(null,
        /*! ./pages/register/register.module */
        "./src/app/pages/register/register.module.ts")).then(function (m) {
          return m.RegisterPageModule;
        });
      }
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-home-home-module */
        [__webpack_require__.e("default~history-history-module~home-home-module~pages-coupons-coupons-module~pages-payments-payments~f93f1f28"), __webpack_require__.e("default~home-home-module~pages-rate-rate-module"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/home/home.module */
        "./src/app/pages/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: 'cart',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-cart-cart-module */
        "cart-cart-module").then(__webpack_require__.bind(null,
        /*! ./pages/cart/cart.module */
        "./src/app/pages/cart/cart.module.ts")).then(function (m) {
          return m.CartPageModule;
        });
      }
    }, {
      path: 'category',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-category-category-module */
        "pages-category-category-module").then(__webpack_require__.bind(null,
        /*! ./pages/category/category.module */
        "./src/app/pages/category/category.module.ts")).then(function (m) {
          return m.CategoryPageModule;
        });
      }
    }, {
      path: 'account',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-account-account-module */
        "account-account-module").then(__webpack_require__.bind(null,
        /*! ./pages/account/account.module */
        "./src/app/pages/account/account.module.ts")).then(function (m) {
          return m.AccountPageModule;
        });
      }
    }, {
      path: 'favourite',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-favourite-favourite-module */
        "pages-favourite-favourite-module").then(__webpack_require__.bind(null,
        /*! ./pages/favourite/favourite.module */
        "./src/app/pages/favourite/favourite.module.ts")).then(function (m) {
          return m.FavouritePageModule;
        });
      }
    }, {
      path: 'history',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-history-history-module */
        [__webpack_require__.e("default~history-history-module~home-home-module~pages-coupons-coupons-module~pages-payments-payments~f93f1f28"), __webpack_require__.e("history-history-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/history/history.module */
        "./src/app/pages/history/history.module.ts")).then(function (m) {
          return m.HistoryPageModule;
        });
      }
    }, {
      path: 'payments',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-payments-payments-module */
        [__webpack_require__.e("default~history-history-module~home-home-module~pages-coupons-coupons-module~pages-payments-payments~f93f1f28"), __webpack_require__.e("pages-payments-payments-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/payments/payments.module */
        "./src/app/pages/payments/payments.module.ts")).then(function (m) {
          return m.PaymentsPageModule;
        });
      }
    }, {
      path: 'choose-address',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/choose-address/choose-address.module */
        "./src/app/pages/choose-address/choose-address.module.ts")).then(function (m) {
          return m.ChooseAddressPageModule;
        });
      }
    }, {
      path: 'add-new-address',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-add-new-address-add-new-address-module */
        "pages-add-new-address-add-new-address-module").then(__webpack_require__.bind(null,
        /*! ./pages/add-new-address/add-new-address.module */
        "./src/app/pages/add-new-address/add-new-address.module.ts")).then(function (m) {
          return m.AddNewAddressPageModule;
        });
      }
    }, {
      path: 'coupons',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-coupons-coupons-module */
        [__webpack_require__.e("default~history-history-module~home-home-module~pages-coupons-coupons-module~pages-payments-payments~f93f1f28"), __webpack_require__.e("pages-coupons-coupons-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/coupons/coupons.module */
        "./src/app/pages/coupons/coupons.module.ts")).then(function (m) {
          return m.CouponsPageModule;
        });
      }
    }, {
      path: 'summary',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-summary-summary-module */
        "pages-summary-summary-module").then(__webpack_require__.bind(null,
        /*! ./pages/summary/summary.module */
        "./src/app/pages/summary/summary.module.ts")).then(function (m) {
          return m.SummaryPageModule;
        });
      }
    }, {
      path: 'history-detail',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-history-detail-history-detail-module */
        "pages-history-detail-history-detail-module").then(__webpack_require__.bind(null,
        /*! ./pages/history-detail/history-detail.module */
        "./src/app/pages/history-detail/history-detail.module.ts")).then(function (m) {
          return m.HistoryDetailPageModule;
        });
      }
    }, {
      path: 'choose-restaurant',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-choose-restaurant-choose-restaurant-module */
        "pages-choose-restaurant-choose-restaurant-module").then(__webpack_require__.bind(null,
        /*! ./pages/choose-restaurant/choose-restaurant.module */
        "./src/app/pages/choose-restaurant/choose-restaurant.module.ts")).then(function (m) {
          return m.ChooseRestaurantPageModule;
        });
      }
    }, {
      path: 'add-review',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-add-review-add-review-module */
        "pages-add-review-add-review-module").then(__webpack_require__.bind(null,
        /*! ./pages/add-review/add-review.module */
        "./src/app/pages/add-review/add-review.module.ts")).then(function (m) {
          return m.AddReviewPageModule;
        });
      }
    }, {
      path: 'edit-profile',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-edit-profile-edit-profile-module */
        "pages-edit-profile-edit-profile-module").then(__webpack_require__.bind(null,
        /*! ./pages/edit-profile/edit-profile.module */
        "./src/app/pages/edit-profile/edit-profile.module.ts")).then(function (m) {
          return m.EditProfilePageModule;
        });
      }
    }, {
      path: 'tracker',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-tracker-tracker-module */
        "pages-tracker-tracker-module").then(__webpack_require__.bind(null,
        /*! ./pages/tracker/tracker.module */
        "./src/app/pages/tracker/tracker.module.ts")).then(function (m) {
          return m.TrackerPageModule;
        });
      }
    }, {
      path: 'stripe-payments',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-stripe-payments-stripe-payments-module */
        [__webpack_require__.e("default~history-history-module~home-home-module~pages-coupons-coupons-module~pages-payments-payments~f93f1f28"), __webpack_require__.e("pages-stripe-payments-stripe-payments-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/stripe-payments/stripe-payments.module */
        "./src/app/pages/stripe-payments/stripe-payments.module.ts")).then(function (m) {
          return m.StripePaymentsPageModule;
        });
      }
    }, {
      path: 'add-card',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-add-card-add-card-module */
        "pages-add-card-add-card-module").then(__webpack_require__.bind(null,
        /*! ./pages/add-card/add-card.module */
        "./src/app/pages/add-card/add-card.module.ts")).then(function (m) {
          return m.AddCardPageModule;
        });
      }
    }, {
      path: 'select-drivers',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/select-drivers/select-drivers.module */
        "./src/app/pages/select-drivers/select-drivers.module.ts")).then(function (m) {
          return m.SelectDriversPageModule;
        });
      }
    }, {
      path: 'inbox',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-inbox-inbox-module */
        "pages-inbox-inbox-module").then(__webpack_require__.bind(null,
        /*! ./pages/inbox/inbox.module */
        "./src/app/pages/inbox/inbox.module.ts")).then(function (m) {
          return m.InboxPageModule;
        });
      }
    }, {
      path: 'rate',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-rate-rate-module */
        [__webpack_require__.e("default~home-home-module~pages-rate-rate-module"), __webpack_require__.e("pages-rate-rate-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/rate/rate.module */
        "./src/app/pages/rate/rate.module.ts")).then(function (m) {
          return m.RatePageModule;
        });
      }
    }, {
      path: 'rest-details',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-rest-details-rest-details-module */
        "pages-rest-details-rest-details-module").then(__webpack_require__.bind(null,
        /*! ./pages/rest-details/rest-details.module */
        "./src/app/pages/rest-details/rest-details.module.ts")).then(function (m) {
          return m.RestDetailsPageModule;
        });
      }
    }, {
      path: 'cities',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-cities-cities-module */
        "pages-cities-cities-module").then(__webpack_require__.bind(null,
        /*! ./pages/cities/cities.module */
        "./src/app/pages/cities/cities.module.ts")).then(function (m) {
          return m.CitiesPageModule;
        });
      }
    }, {
      path: 'forgot',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-forgot-forgot-module */
        "pages-forgot-forgot-module").then(__webpack_require__.bind(null,
        /*! ./pages/forgot/forgot.module */
        "./src/app/pages/forgot/forgot.module.ts")).then(function (m) {
          return m.ForgotPageModule;
        });
      }
    }, {
      path: 'variation',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/variation/variation.module */
        "./src/app/pages/variation/variation.module.ts")).then(function (m) {
          return m.VariationPageModule;
        });
      }
    }, {
      path: 'variations',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/variations/variations.module */
        "./src/app/pages/variations/variations.module.ts")).then(function (m) {
          return m.VariationsPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/ngx/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(platform, splashScreen, statusBar, router, oneSignal, translate) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.router = router;
        this.oneSignal = oneSignal;
        this.translate = translate;
        var lng = localStorage.getItem('language');

        if (!lng || lng === null) {
          localStorage.setItem('language', 'en');
        }

        this.translate.use(localStorage.getItem('language'));
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            console.log('appid', src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].onesignal.appId);
            console.log('googlenumnner', src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].onesignal.googleProjectNumber);
            setTimeout(function () {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0,
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return this.oneSignal.startInit(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].onesignal.appId, src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].onesignal.googleProjectNumber);

                      case 2:
                        this.oneSignal.getIds().then(function (data) {
                          console.log('iddddd', data);
                          localStorage.setItem('fcm', data.userId);
                        });
                        _context.next = 5;
                        return this.oneSignal.endInit();

                      case 5:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            }, 1000);

            _this.platform.backButton.subscribe(function () {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0,
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        console.log('asd', this.router.url, 'ad', this.router.isActive('/tabs/', true));

                        if (this.router.url.includes('/tabs/') || this.router.url.includes('/login')) {
                          navigator['app'].exitApp();
                        }

                      case 2:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            });

            _this.statusBar.backgroundColorByHexString('#ff384c');

            _this.splashScreen.hide();
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_6__["OneSignal"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_6__["OneSignal"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: customTranslateLoader, LanguageLoader, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "customTranslateLoader", function () {
      return customTranslateLoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguageLoader", function () {
      return LanguageLoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _pages_variations_variations_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./pages/variations/variations.module */
    "./src/app/pages/variations/variations.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var angularfire2_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! angularfire2/auth */
    "./node_modules/angularfire2/auth/index.js");
    /* harmony import */


    var angularfire2_auth__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! angularfire2/firestore */
    "./node_modules/angularfire2/firestore/index.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_11___default =
    /*#__PURE__*/
    __webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var angularfire2_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! angularfire2/storage */
    "./node_modules/angularfire2/storage/index.js");
    /* harmony import */


    var angularfire2_storage__WEBPACK_IMPORTED_MODULE_12___default =
    /*#__PURE__*/
    __webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var angularfire2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! angularfire2 */
    "./node_modules/angularfire2/index.js");
    /* harmony import */


    var angularfire2__WEBPACK_IMPORTED_MODULE_13___default =
    /*#__PURE__*/
    __webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */


    var angularfire2_database__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! angularfire2/database */
    "./node_modules/angularfire2/database/index.js");
    /* harmony import */


    var angularfire2_database__WEBPACK_IMPORTED_MODULE_14___default =
    /*#__PURE__*/
    __webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_14__);
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ionic-native/android-permissions/ngx */
    "./node_modules/@ionic-native/android-permissions/ngx/index.js");
    /* harmony import */


    var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/diagnostic/ngx */
    "./node_modules/@ionic-native/diagnostic/ngx/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var src_app_pages_choose_address_choose_address_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! src/app/pages/choose-address/choose-address.module */
    "./src/app/pages/choose-address/choose-address.module.ts");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/ngx/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @ionic-native/paypal/ngx */
    "./node_modules/@ionic-native/paypal/ngx/index.js");
    /* harmony import */


    var _pages_select_drivers_select_drivers_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./pages/select-drivers/select-drivers.module */
    "./src/app/pages/select-drivers/select-drivers.module.ts");
    /* harmony import */


    var _pages_variation_variation_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./pages/variation/variation.module */
    "./src/app/pages/variation/variation.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");

    function customTranslateLoader(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_27__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
    }

    function LanguageLoader(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_27__["TranslateHttpLoader"](http, 'assets/i18n/', '.json');
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], angularfire2__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].firebase), angularfire2_storage__WEBPACK_IMPORTED_MODULE_12__["AngularFireStorageModule"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"], angularfire2_database__WEBPACK_IMPORTED_MODULE_14__["AngularFireDatabaseModule"], src_app_pages_choose_address_choose_address_module__WEBPACK_IMPORTED_MODULE_19__["ChooseAddressPageModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"], _pages_select_drivers_select_drivers_module__WEBPACK_IMPORTED_MODULE_24__["SelectDriversPageModule"], _pages_variation_variation_module__WEBPACK_IMPORTED_MODULE_25__["VariationPageModule"], _pages_variations_variations_module__WEBPACK_IMPORTED_MODULE_1__["VariationsPageModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__["TranslateLoader"],
          useFactory: customTranslateLoader,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClient"]]
        }
      })],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_16__["AndroidPermissions"], _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_17__["Diagnostic"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_18__["Geolocation"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_20__["OneSignal"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_22__["Camera"], _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_23__["PayPal"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/components.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/components.module.ts ***!
    \*************************************************/

  /*! exports provided: ComponentsModule */

  /***/
  function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
      return ComponentsModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _components_popover_popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../components/popover/popover.component */
    "./src/app/components/popover/popover.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/components/menu/menu.component.ts");
    /* harmony import */


    var _directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../directives/shared.module */
    "./src/app/directives/shared.module.ts"); // This File Is Required For Custom Components


    var components = [_components_popover_popover_component__WEBPACK_IMPORTED_MODULE_4__["PopoverComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"]];

    var ComponentsModule = function ComponentsModule() {
      _classCallCheck(this, ComponentsModule);
    };

    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [components],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
      exports: [].concat(components)
    })], ComponentsModule);
    /***/
  },

  /***/
  "./src/app/components/menu/menu.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/menu/menu.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMenuMenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/menu/menu.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/menu/menu.component.ts ***!
    \***************************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppComponentsMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var MenuComponent =
    /*#__PURE__*/
    function () {
      function MenuComponent(navParam, popoverController) {
        _classCallCheck(this, MenuComponent);

        this.navParam = navParam;
        this.popoverController = popoverController;
        this.cates = this.navParam.get('data');
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selected",
        value: function selected(item) {
          this.popoverController.dismiss(item, 'selected');
        }
      }]);

      return MenuComponent;
    }();

    MenuComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }];
    };

    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu/menu.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./menu.component.scss */
      "./src/app/components/menu/menu.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])], MenuComponent);
    /***/
  },

  /***/
  "./src/app/components/popover/popover.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/popover/popover.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPopoverPopoverComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9wb3Zlci9wb3BvdmVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/popover/popover.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/popover/popover.component.ts ***!
    \*********************************************************/

  /*! exports provided: PopoverComponent */

  /***/
  function srcAppComponentsPopoverPopoverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopoverComponent", function () {
      return PopoverComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var PopoverComponent =
    /*#__PURE__*/
    function () {
      function PopoverComponent(popoverController) {
        _classCallCheck(this, PopoverComponent);

        this.popoverController = popoverController;
      }

      _createClass(PopoverComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "select",
        value: function select(type) {
          this.popoverController.dismiss(type);
        }
      }]);

      return PopoverComponent;
    }();

    PopoverComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }];
    };

    PopoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-popover',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./popover.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popover/popover.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./popover.component.scss */
      "./src/app/components/popover/popover.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])], PopoverComponent);
    /***/
  },

  /***/
  "./src/app/directives/hide-header.directive.ts":
  /*!*****************************************************!*\
    !*** ./src/app/directives/hide-header.directive.ts ***!
    \*****************************************************/

  /*! exports provided: HideHeaderDirective */

  /***/
  function srcAppDirectivesHideHeaderDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HideHeaderDirective", function () {
      return HideHeaderDirective;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var HideHeaderDirective =
    /*#__PURE__*/
    function () {
      function HideHeaderDirective(renderer, domCtrl) {
        _classCallCheck(this, HideHeaderDirective);

        this.renderer = renderer;
        this.domCtrl = domCtrl;
        this.lastY = 0;
      }

      _createClass(HideHeaderDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.header = this.header.el;
          this.domCtrl.write(function () {
            _this2.renderer.setStyle(_this2.header, 'transition', 'margin-top 700ms');
          });
        }
      }, {
        key: "onContentScroll",
        value: function onContentScroll($event) {
          var _this3 = this;

          if ($event.detail.scrollTop > this.lastY) {
            this.domCtrl.write(function () {
              _this3.renderer.setStyle(_this3.header, 'margin-top', "-".concat(_this3.header.clientHeight, "px"));
            });
          } else {
            this.domCtrl.write(function () {
              _this3.renderer.setStyle(_this3.header, 'margin-top', '0');
            });
          }

          this.lastY = $event.detail.scrollTop;
        }
      }]);

      return HideHeaderDirective;
    }();

    HideHeaderDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('header'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], HideHeaderDirective.prototype, "header", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('ionScroll', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], HideHeaderDirective.prototype, "onContentScroll", null);
    HideHeaderDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appHideHeader]'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"]])], HideHeaderDirective);
    /***/
  },

  /***/
  "./src/app/directives/hidenav.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/directives/hidenav.module.ts ***!
    \**********************************************/

  /*! exports provided: HidenavModule */

  /***/
  function srcAppDirectivesHidenavModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HidenavModule", function () {
      return HidenavModule;
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


    var _hide_header_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./hide-header.directive */
    "./src/app/directives/hide-header.directive.ts");

    var HidenavModule = function HidenavModule() {
      _classCallCheck(this, HidenavModule);
    };

    HidenavModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_hide_header_directive__WEBPACK_IMPORTED_MODULE_2__["HideHeaderDirective"]],
      exports: [_hide_header_directive__WEBPACK_IMPORTED_MODULE_2__["HideHeaderDirective"]]
    })], HidenavModule);
    /***/
  },

  /***/
  "./src/app/directives/shared.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/directives/shared.module.ts ***!
    \*********************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppDirectivesSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
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


    var _hidenav_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./hidenav.module */
    "./src/app/directives/hidenav.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_hidenav_module__WEBPACK_IMPORTED_MODULE_2__["HidenavModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
      exports: [_hidenav_module__WEBPACK_IMPORTED_MODULE_2__["HidenavModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/app/pages/choose-address/choose-address-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/choose-address/choose-address-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: ChooseAddressPageRoutingModule */

  /***/
  function srcAppPagesChooseAddressChooseAddressRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChooseAddressPageRoutingModule", function () {
      return ChooseAddressPageRoutingModule;
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


    var _choose_address_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./choose-address.page */
    "./src/app/pages/choose-address/choose-address.page.ts");

    var routes = [{
      path: '',
      component: _choose_address_page__WEBPACK_IMPORTED_MODULE_3__["ChooseAddressPage"]
    }];

    var ChooseAddressPageRoutingModule = function ChooseAddressPageRoutingModule() {
      _classCallCheck(this, ChooseAddressPageRoutingModule);
    };

    ChooseAddressPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ChooseAddressPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/choose-address/choose-address.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/choose-address/choose-address.module.ts ***!
    \***************************************************************/

  /*! exports provided: ChooseAddressPageModule */

  /***/
  function srcAppPagesChooseAddressChooseAddressModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChooseAddressPageModule", function () {
      return ChooseAddressPageModule;
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


    var _choose_address_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./choose-address-routing.module */
    "./src/app/pages/choose-address/choose-address-routing.module.ts");
    /* harmony import */


    var _choose_address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./choose-address.page */
    "./src/app/pages/choose-address/choose-address.page.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var src_app_components_popover_popover_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/components/popover/popover.component */
    "./src/app/components/popover/popover.component.ts");
    /* harmony import */


    var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/directives/shared.module */
    "./src/app/directives/shared.module.ts");

    var ChooseAddressPageModule = function ChooseAddressPageModule() {
      _classCallCheck(this, ChooseAddressPageModule);
    };

    ChooseAddressPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      entryComponents: [src_app_components_popover_popover_component__WEBPACK_IMPORTED_MODULE_8__["PopoverComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _choose_address_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChooseAddressPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]],
      declarations: [_choose_address_page__WEBPACK_IMPORTED_MODULE_6__["ChooseAddressPage"]]
    })], ChooseAddressPageModule);
    /***/
  },

  /***/
  "./src/app/pages/choose-address/choose-address.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/choose-address/choose-address.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesChooseAddressChooseAddressPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-label {\n  display: block;\n}\n\n.group {\n  padding: 10px 15px;\n  width: 100%;\n  background: #fff !important;\n}\n\n.group .mainContent {\n  padding: 5px 10px;\n}\n\n.group .mainContent .savedTitle {\n  font-weight: bold;\n}\n\n.group .mainContent .noData {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 100%;\n  height: 250px;\n}\n\n.group .mainContent .list {\n  margin-top: 20px;\n  position: relative;\n  overflow-x: auto;\n}\n\n.group .mainContent .list::-webkit-scrollbar {\n  display: none;\n}\n\n.group .mainContent .list .scroll-item {\n  -webkit-box-flex: 0;\n          flex: 0 0 auto;\n}\n\n.group .mainContent .list .title {\n  font-weight: bold;\n  color: black;\n  font-size: 0.8rem;\n  white-space: pre-wrap;\n  text-transform: capitalize;\n}\n\n.group .mainContent .list .name {\n  color: lightgray;\n  font-size: 0.7rem;\n}\n\n.group .mainContent .list .moreIcon {\n  position: absolute;\n  right: 0px;\n  top: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9WaWNCZWNlcnJhL0Rvd25sb2Fkcy9pb25pYzVGb29kQXBwRnVsbC9BcHBfY29kZS9Vc2VyQXBwL3NyYy9hcHAvcGFnZXMvY2hvb3NlLWFkZHJlc3MvY2hvb3NlLWFkZHJlc3MucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jaG9vc2UtYWRkcmVzcy9jaG9vc2UtYWRkcmVzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxjQUFBO0FDRko7O0FESUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQ0RKOztBREVJO0VBQ0ksaUJBQUE7QUNBUjs7QURDUTtFQUNJLGlCQUFBO0FDQ1o7O0FEQ1E7RUFDSSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDQ1o7O0FEQ1E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBR0EsZ0JBQUE7QUNEWjs7QURFWTtFQUNJLGFBQUE7QUNBaEI7O0FERVk7RUFDSSxtQkFBQTtVQUFBLGNBQUE7QUNBaEI7O0FERVk7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7QUNBaEI7O0FERVk7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDQWhCOztBREVZO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQ0FoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Nob29zZS1hZGRyZXNzL2Nob29zZS1hZGRyZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuLy8gICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5pb24tbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLmdyb3VwIHtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC5tYWluQ29udGVudHtcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgIC5zYXZlZFRpdGxle1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7ICAgXG4gICAgICAgIH1cbiAgICAgICAgLm5vRGF0YXtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5saXN0e1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAvLyBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zY3JvbGwtaXRlbSB7XG4gICAgICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYW1le1xuICAgICAgICAgICAgICAgIGNvbG9yOiBsaWdodGdyYXk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW9yZUljb257XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgICAgdG9wOiAxcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5ncm91cCB7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5ncm91cCAubWFpbkNvbnRlbnQge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cbi5ncm91cCAubWFpbkNvbnRlbnQgLnNhdmVkVGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5ncm91cCAubWFpbkNvbnRlbnQgLm5vRGF0YSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNTBweDtcbn1cbi5ncm91cCAubWFpbkNvbnRlbnQgLmxpc3Qge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG4uZ3JvdXAgLm1haW5Db250ZW50IC5saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZ3JvdXAgLm1haW5Db250ZW50IC5saXN0IC5zY3JvbGwtaXRlbSB7XG4gIGZsZXg6IDAgMCBhdXRvO1xufVxuLmdyb3VwIC5tYWluQ29udGVudCAubGlzdCAudGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5ncm91cCAubWFpbkNvbnRlbnQgLmxpc3QgLm5hbWUge1xuICBjb2xvcjogbGlnaHRncmF5O1xuICBmb250LXNpemU6IDAuN3JlbTtcbn1cbi5ncm91cCAubWFpbkNvbnRlbnQgLmxpc3QgLm1vcmVJY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICB0b3A6IDFweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/choose-address/choose-address.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/choose-address/choose-address.page.ts ***!
    \*************************************************************/

  /*! exports provided: ChooseAddressPage */

  /***/
  function srcAppPagesChooseAddressChooseAddressPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChooseAddressPage", function () {
      return ChooseAddressPage;
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


    var src_app_components_popover_popover_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/components/popover/popover.component */
    "./src/app/components/popover/popover.component.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);

    var ChooseAddressPage =
    /*#__PURE__*/
    function () {
      function ChooseAddressPage(router, api, util, navCtrl, route, popoverController) {
        _classCallCheck(this, ChooseAddressPage);

        this.router = router;
        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
        this.route = route;
        this.popoverController = popoverController;
        this.myaddress = [];
        this.dummy = Array(10);
      }

      _createClass(ChooseAddressPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.route.queryParams.subscribe(function (data) {
            console.log(data);

            if (data && data.from) {
              _this4.from = data.from;
            }
          });
        }
      }, {
        key: "getAddress",
        value: function getAddress() {
          var _this5 = this;

          this.api.getMyAddress(this.id).then(function (data) {
            console.log('my address', data);
            _this5.dummy = [];

            if (data && data.length) {
              _this5.myaddress = data;
            }
          }, function (error) {
            console.log(error);
            _this5.dummy = [];
          }).catch(function (error) {
            console.log(error);
            _this5.dummy = [];
          });
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this6 = this;

          this.api.checkAuth().then(function (data) {
            console.log(data);

            if (data) {
              _this6.id = data.uid;

              _this6.getAddress();
            }
          });
        }
      }, {
        key: "addNew",
        value: function addNew() {
          this.router.navigate(['add-new-address']);
        }
      }, {
        key: "selectAddress",
        value: function selectAddress() {
          var _this7 = this;

          if (this.from === 'cart') {
            var selecte = this.myaddress.filter(function (x) {
              return x.id === _this7.selectedAddress;
            });
            var item = selecte[0];
            console.log('item', item);
            var address = {
              address: item.house + ' ' + item.landmark + ' ' + item.address,
              lat: item.lat,
              lng: item.lng,
              id: item.id
            };
            localStorage.setItem('deliveryAddress', JSON.stringify(address)); // this.util.showToast('Address changed', 'success', 'bottom');
            // this.navCtrl.back();

            this.router.navigate(['payments']);
          }
        }
      }, {
        key: "openMenu",
        value: function openMenu(item, events) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this8 = this;

            var popover;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.popoverController.create({
                      component: src_app_components_popover_popover_component__WEBPACK_IMPORTED_MODULE_6__["PopoverComponent"],
                      event: events,
                      mode: 'ios'
                    });

                  case 2:
                    popover = _context3.sent;
                    popover.onDidDismiss().then(function (data) {
                      console.log(data.data);

                      if (data && data.data) {
                        if (data.data === 'edit') {
                          var navData = {
                            queryParams: {
                              from: 'edit',
                              data: JSON.stringify(item)
                            }
                          };

                          _this8.router.navigate(['add-new-address'], navData);
                        } else if (data.data === 'delete') {
                          console.log(item);
                          sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                            title: _this8.util.translate('Are you sure?'),
                            text: _this8.util.translate('to delete this address'),
                            icon: 'question',
                            confirmButtonText: _this8.util.translate('Yes'),
                            backdrop: false,
                            background: 'white',
                            showCancelButton: true,
                            showConfirmButton: true,
                            cancelButtonText: _this8.util.translate('cancel')
                          }).then(function (data) {
                            console.log(data);

                            if (data && data.value) {
                              _this8.util.show();

                              _this8.api.deleteAddress(localStorage.getItem('uid'), item.id).then(function (data) {
                                console.log(data);

                                _this8.util.hide();

                                _this8.getAddress();
                              }).catch(function (error) {
                                console.log(error);

                                _this8.util.hide();
                              });
                            }
                          });
                        }
                      }
                    });
                    _context3.next = 6;
                    return popover.present();

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return ChooseAddressPage;
    }();

    ChooseAddressPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"]
      }];
    };

    ChooseAddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-choose-address',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./choose-address.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/choose-address/choose-address.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./choose-address.page.scss */
      "./src/app/pages/choose-address/choose-address.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"]])], ChooseAddressPage);
    /***/
  },

  /***/
  "./src/app/pages/select-drivers/select-drivers-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/select-drivers/select-drivers-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: SelectDriversPageRoutingModule */

  /***/
  function srcAppPagesSelectDriversSelectDriversRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectDriversPageRoutingModule", function () {
      return SelectDriversPageRoutingModule;
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


    var _select_drivers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./select-drivers.page */
    "./src/app/pages/select-drivers/select-drivers.page.ts");

    var routes = [{
      path: '',
      component: _select_drivers_page__WEBPACK_IMPORTED_MODULE_3__["SelectDriversPage"]
    }];

    var SelectDriversPageRoutingModule = function SelectDriversPageRoutingModule() {
      _classCallCheck(this, SelectDriversPageRoutingModule);
    };

    SelectDriversPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SelectDriversPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/select-drivers/select-drivers.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/select-drivers/select-drivers.module.ts ***!
    \***************************************************************/

  /*! exports provided: SelectDriversPageModule */

  /***/
  function srcAppPagesSelectDriversSelectDriversModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectDriversPageModule", function () {
      return SelectDriversPageModule;
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


    var _select_drivers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./select-drivers-routing.module */
    "./src/app/pages/select-drivers/select-drivers-routing.module.ts");
    /* harmony import */


    var _select_drivers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./select-drivers.page */
    "./src/app/pages/select-drivers/select-drivers.page.ts");

    var SelectDriversPageModule = function SelectDriversPageModule() {
      _classCallCheck(this, SelectDriversPageModule);
    };

    SelectDriversPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _select_drivers_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectDriversPageRoutingModule"]],
      declarations: [_select_drivers_page__WEBPACK_IMPORTED_MODULE_6__["SelectDriversPage"]]
    })], SelectDriversPageModule);
    /***/
  },

  /***/
  "./src/app/pages/select-drivers/select-drivers.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/select-drivers/select-drivers.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSelectDriversSelectDriversPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-modal.modalContact {\n  --height: auto;\n}\nion-modal.modalContact .modal-wrapper {\n  width: 90% !important;\n}\nion-modal.modalContact.bottom {\n  -webkit-box-align: end;\n          align-items: flex-end;\n}\nion-modal.modalContact .ion-page {\n  position: relative;\n  display: block;\n  contain: content;\n}\nion-modal.modalContact .ion-page .inner-content {\n  max-height: 80vh;\n  overflow: auto;\n  border-radius: 10px;\n}\n.div_header {\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 15px;\n  position: relative;\n}\n.div_header .img_cross {\n  width: 35px;\n  position: absolute;\n  right: 20px;\n}\n.div_header .lbl_contact {\n  font-size: 20px;\n  display: block;\n  text-align: center;\n  margin-top: 20px;\n}\n.div_content {\n  width: 100%;\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  border-bottom: 1px solid lightgray;\n  padding: 10px;\n}\n.div_content .iconPerson {\n  font-size: 3rem;\n}\n.div_content .title {\n  text-align: center;\n  font-size: 0.8rem;\n  color: black;\n  margin: 0px;\n}\n.div_content .your {\n  text-align: center;\n  font-size: 0.8rem;\n  color: black;\n  margin: 0px;\n}\n.div_content .score {\n  text-align: center;\n  font-size: 1.2rem;\n  color: black;\n  margin: 0px;\n  font-weight: bold;\n}\n.content {\n  padding: 10px;\n}\n.content .inputs {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.content .inputs ion-input {\n  border-radius: 5px;\n  border: 1px solid lightgray;\n  --padding-start: 10px;\n  margin: 15px 0px;\n}\n.content .tabs_prpl {\n  background: var(--ion-color-secondary);\n  color: white;\n  height: 30px;\n  line-height: 20px;\n  margin-bottom: 5px;\n  font-size: 11px;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n}\n.content .pdd_left {\n  padding-left: 20px;\n}\n.div_btn .cancel {\n  border-top: 1px solid lightgray;\n}\n.div_btn .save {\n  border-top: 1px solid lightgray;\n  border-left: 1px solid lightgray;\n  background: #f9f9f9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9WaWNCZWNlcnJhL0Rvd25sb2Fkcy9pb25pYzVGb29kQXBwRnVsbC9BcHBfY29kZS9Vc2VyQXBwL3NyYy9hcHAvcGFnZXMvc2VsZWN0LWRyaXZlcnMvc2VsZWN0LWRyaXZlcnMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZWxlY3QtZHJpdmVycy9zZWxlY3QtZHJpdmVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFPSSxjQUFBO0FDTEo7QURESTtFQUNJLHFCQUFBO0FDR1I7QURESTtFQUNJLHNCQUFBO1VBQUEscUJBQUE7QUNHUjtBREFJO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNFUjtBRERRO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBRUEsbUJBQUE7QUNFWjtBREdBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0FKO0FEQ0k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQ1I7QURDSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NSO0FERUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtBQ0NKO0FEQUk7RUFDSSxlQUFBO0FDRVI7QURBSTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0VSO0FEQUk7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNFUjtBREFJO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNFUjtBRENBO0VBQ0ksYUFBQTtBQ0VKO0FEREk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0dSO0FERlE7RUFDSSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0laO0FEREs7RUFDQyxzQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDR047QURESTtFQUNFLGtCQUFBO0FDR047QURFSTtFQUNJLCtCQUFBO0FDQ1I7QURDSTtFQUNJLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VsZWN0LWRyaXZlcnMvc2VsZWN0LWRyaXZlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1vZGFsLm1vZGFsQ29udGFjdCB7XG4gICAgLm1vZGFsLXdyYXBwZXJ7XG4gICAgICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgJi5ib3R0b20ge1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgfVxuICAgIC0taGVpZ2h0OiBhdXRvO1xuICAgIC5pb24tcGFnZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGNvbnRhaW46IGNvbnRlbnQ7XG4gICAgICAgIC5pbm5lci1jb250ZW50IHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDgwdmg7XG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgIC8vIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZGl2X2hlYWRlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLmltZ19jcm9zc3tcbiAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgfVxuICAgIC5sYmxfY29udGFjdHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cbn1cbi5kaXZfY29udGVudHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIC5pY29uUGVyc29ue1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgfVxuICAgIC50aXRsZXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IC44cmVtO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cbiAgICAueW91cntcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IC44cmVtO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cbiAgICAuc2NvcmV7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbn1cbi5jb250ZW50e1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgLmlucHV0c3tcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDE1cHggMHB4O1xuICAgICAgICB9XG4gICAgfSAgIFxuICAgICAudGFic19wcnBse1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBoZWlnaHQ6MzBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OjIwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICBmb250LXNpemU6MTFweDtcbiAgICAgIGZvbnQtd2VpZ2h0OjUwMDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICB9XG4gICAgLnBkZF9sZWZ0e1xuICAgICAgcGFkZGluZy1sZWZ0OjIwcHg7XG4gICAgfSBcbn1cblxuIC5kaXZfYnRue1xuICAgIC5jYW5jZWx7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgfVxuICAgIC5zYXZle1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgICB9XG59IiwiaW9uLW1vZGFsLm1vZGFsQ29udGFjdCB7XG4gIC0taGVpZ2h0OiBhdXRvO1xufVxuaW9uLW1vZGFsLm1vZGFsQ29udGFjdCAubW9kYWwtd3JhcHBlciB7XG4gIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcbn1cbmlvbi1tb2RhbC5tb2RhbENvbnRhY3QuYm90dG9tIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuaW9uLW1vZGFsLm1vZGFsQ29udGFjdCAuaW9uLXBhZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb250YWluOiBjb250ZW50O1xufVxuaW9uLW1vZGFsLm1vZGFsQ29udGFjdCAuaW9uLXBhZ2UgLmlubmVyLWNvbnRlbnQge1xuICBtYXgtaGVpZ2h0OiA4MHZoO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmRpdl9oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGl2X2hlYWRlciAuaW1nX2Nyb3NzIHtcbiAgd2lkdGg6IDM1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG59XG4uZGl2X2hlYWRlciAubGJsX2NvbnRhY3Qge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5kaXZfY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmRpdl9jb250ZW50IC5pY29uUGVyc29uIHtcbiAgZm9udC1zaXplOiAzcmVtO1xufVxuLmRpdl9jb250ZW50IC50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luOiAwcHg7XG59XG4uZGl2X2NvbnRlbnQgLnlvdXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbjogMHB4O1xufVxuLmRpdl9jb250ZW50IC5zY29yZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uY29udGVudCAuaW5wdXRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGVudCAuaW5wdXRzIGlvbi1pbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIG1hcmdpbjogMTVweCAwcHg7XG59XG4uY29udGVudCAudGFic19wcnBsIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cbi5jb250ZW50IC5wZGRfbGVmdCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLmRpdl9idG4gLmNhbmNlbCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG4uZGl2X2J0biAuc2F2ZSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgbGlnaHRncmF5O1xuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/select-drivers/select-drivers.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/select-drivers/select-drivers.page.ts ***!
    \*************************************************************/

  /*! exports provided: SelectDriversPage */

  /***/
  function srcAppPagesSelectDriversSelectDriversPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectDriversPage", function () {
      return SelectDriversPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var SelectDriversPage =
    /*#__PURE__*/
    function () {
      function SelectDriversPage(navParam, modalController) {
        _classCallCheck(this, SelectDriversPage);

        this.navParam = navParam;
        this.modalController = modalController;
        this.drivers = [];
        this.selectedDriver = '';
        this.drivers = this.navParam.get('item');
        console.log('drivers->', this.drivers);

        if (this.drivers.length && this.drivers.length > 0) {
          this.selectedDriver = this.drivers[0].id;
        }
      }

      _createClass(SelectDriversPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "select",
        value: function select() {
          var _this9 = this;

          console.log(this.selectedDriver);
          var driver = this.drivers.filter(function (x) {
            return x.id === _this9.selectedDriver;
          });
          console.log(driver);
          this.modalController.dismiss(driver, 'selected');
        }
      }, {
        key: "close",
        value: function close() {
          this.modalController.dismiss([], 'close');
        }
      }]);

      return SelectDriversPage;
    }();

    SelectDriversPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    SelectDriversPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-select-drivers',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./select-drivers.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/select-drivers/select-drivers.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./select-drivers.page.scss */
      "./src/app/pages/select-drivers/select-drivers.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], SelectDriversPage);
    /***/
  },

  /***/
  "./src/app/pages/variation/variation-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/variation/variation-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: VariationPageRoutingModule */

  /***/
  function srcAppPagesVariationVariationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VariationPageRoutingModule", function () {
      return VariationPageRoutingModule;
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


    var _variation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./variation.page */
    "./src/app/pages/variation/variation.page.ts");

    var routes = [{
      path: '',
      component: _variation_page__WEBPACK_IMPORTED_MODULE_3__["VariationPage"]
    }];

    var VariationPageRoutingModule = function VariationPageRoutingModule() {
      _classCallCheck(this, VariationPageRoutingModule);
    };

    VariationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VariationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/variation/variation.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/variation/variation.module.ts ***!
    \*****************************************************/

  /*! exports provided: VariationPageModule */

  /***/
  function srcAppPagesVariationVariationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VariationPageModule", function () {
      return VariationPageModule;
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


    var _variation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./variation-routing.module */
    "./src/app/pages/variation/variation-routing.module.ts");
    /* harmony import */


    var _variation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./variation.page */
    "./src/app/pages/variation/variation.page.ts");

    var VariationPageModule = function VariationPageModule() {
      _classCallCheck(this, VariationPageModule);
    };

    VariationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _variation_routing_module__WEBPACK_IMPORTED_MODULE_5__["VariationPageRoutingModule"]],
      declarations: [_variation_page__WEBPACK_IMPORTED_MODULE_6__["VariationPage"]]
    })], VariationPageModule);
    /***/
  },

  /***/
  "./src/app/pages/variation/variation.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/variation/variation.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesVariationVariationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZhcmlhdGlvbi92YXJpYXRpb24ucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/variation/variation.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/variation/variation.page.ts ***!
    \***************************************************/

  /*! exports provided: VariationPage */

  /***/
  function srcAppPagesVariationVariationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VariationPage", function () {
      return VariationPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var VariationPage =
    /*#__PURE__*/
    function () {
      function VariationPage() {
        _classCallCheck(this, VariationPage);
      }

      _createClass(VariationPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VariationPage;
    }();

    VariationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-variation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./variation.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/variation/variation.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./variation.page.scss */
      "./src/app/pages/variation/variation.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], VariationPage);
    /***/
  },

  /***/
  "./src/app/pages/variations/variations-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/variations/variations-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: VariationsPageRoutingModule */

  /***/
  function srcAppPagesVariationsVariationsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VariationsPageRoutingModule", function () {
      return VariationsPageRoutingModule;
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


    var _variations_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./variations.page */
    "./src/app/pages/variations/variations.page.ts");

    var routes = [{
      path: '',
      component: _variations_page__WEBPACK_IMPORTED_MODULE_3__["VariationsPage"]
    }];

    var VariationsPageRoutingModule = function VariationsPageRoutingModule() {
      _classCallCheck(this, VariationsPageRoutingModule);
    };

    VariationsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VariationsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/variations/variations.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/variations/variations.module.ts ***!
    \*******************************************************/

  /*! exports provided: VariationsPageModule */

  /***/
  function srcAppPagesVariationsVariationsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VariationsPageModule", function () {
      return VariationsPageModule;
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


    var _variations_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./variations-routing.module */
    "./src/app/pages/variations/variations-routing.module.ts");
    /* harmony import */


    var _variations_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./variations.page */
    "./src/app/pages/variations/variations.page.ts");

    var VariationsPageModule = function VariationsPageModule() {
      _classCallCheck(this, VariationsPageModule);
    };

    VariationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _variations_routing_module__WEBPACK_IMPORTED_MODULE_5__["VariationsPageRoutingModule"]],
      declarations: [_variations_page__WEBPACK_IMPORTED_MODULE_6__["VariationsPage"]]
    })], VariationsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/variations/variations.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/variations/variations.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesVariationsVariationsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header {\n  border-bottom: 1px solid lightgray;\n}\n.header .bts {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  justify-content: space-around;\n  padding-bottom: 10px;\n}\n.header .desc .title {\n  margin: 0px;\n  padding: 10px;\n  font-size: 18px;\n  font-weight: bold;\n}\n.header .desc .details {\n  margin: 0px;\n  padding: 0px 10px;\n  font-size: 14px;\n}\n.padder {\n  padding-bottom: 60px;\n}\n.cartItems {\n  padding: 10px 5px;\n}\n.cartItems .name {\n  font-size: 18px;\n  font-weight: bold;\n  margin: 0px;\n}\n.cartItems .details {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.cartItems .details .names .subDetails {\n  margin: 0px;\n  font-size: 14px;\n}\n.cartItems .details .cartBtn2 {\n  position: absolute;\n  right: 15px;\n  width: 80px;\n  display: -webkit-box;\n  display: flex;\n  background: white;\n}\n.cartItems .details .cartBtn2 .qunitity {\n  font-weight: bold;\n  margin-top: 8px;\n}\n.sameProduct {\n  padding: 5px;\n  padding: 5px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.sameProduct .desc {\n  padding: 0px 0px 10px 0px;\n}\n.sameProduct .desc .name {\n  font-size: 18px;\n  font-weight: bold;\n  margin: 0px;\n}\n.sameProduct .desc .selectedItem {\n  margin: 0px;\n  font-size: 14px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.sameProduct .desc .cartBtn2 {\n  position: absolute;\n  right: 15px;\n  width: 80px;\n  display: -webkit-box;\n  display: flex;\n  background: white;\n}\n.sameProduct .desc .cartBtn2 .qunitity {\n  font-weight: bold;\n  margin-top: 8px;\n}\n.footers {\n  position: fixed;\n  bottom: 10px;\n  width: 100%;\n  padding: 0px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9WaWNCZWNlcnJhL0Rvd25sb2Fkcy9pb25pYzVGb29kQXBwRnVsbC9BcHBfY29kZS9Vc2VyQXBwL3NyYy9hcHAvcGFnZXMvdmFyaWF0aW9ucy92YXJpYXRpb25zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdmFyaWF0aW9ucy92YXJpYXRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFBO0FDQ0Y7QURBRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7QUNFSjtBRENJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDTjtBRENJO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0NOO0FER0E7RUFFRSxvQkFBQTtBQ0RGO0FER0E7RUFDRSxpQkFBQTtBQ0FGO0FEQ0U7RUFDQyxlQUFBO0VBQ0MsaUJBQUE7RUFDQSxXQUFBO0FDQ0o7QURDRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNDSjtBRENNO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUNDUjtBREVJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGlCQUFBO0FDQVI7QURDUTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQ0NaO0FESUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNERjtBREVFO0VBQ0UseUJBQUE7QUNBSjtBRENJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0NOO0FEQ0k7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0NOO0FEQ0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsaUJBQUE7QUNDUjtBREFRO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FDRVo7QURJQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy92YXJpYXRpb25zL3ZhcmlhdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgLmJ0c3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuICAuZGVzY3tcbiAgICAudGl0bGV7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLmRldGFpbHN7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgfVxufVxuLnBhZGRlclxue1xuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbn1cbi5jYXJ0SXRlbXN7XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xuICAubmFtZXtcbiAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IDBweDsgXG4gIH1cbiAgLmRldGFpbHN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgXG4gICAgLm5hbWVze1xuICAgICAgLnN1YkRldGFpbHN7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5jYXJ0QnRuMntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAucXVuaXRpdHl7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxufVxuLnNhbWVQcm9kdWN0e1xuICBwYWRkaW5nOiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAuZGVzY3tcbiAgICBwYWRkaW5nOiAwcHggMHB4IDEwcHggMHB4O1xuICAgIC5uYW1le1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICB9XG4gICAgLnNlbGVjdGVkSXRlbXtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICAgIC5jYXJ0QnRuMntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAucXVuaXRpdHl7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuICBcbn1cbi5mb290ZXJze1xuICBwb3NpdGlvbjpmaXhlZDtcbiAgYm90dG9tOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG59XG4iLCIuaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi5oZWFkZXIgLmJ0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5oZWFkZXIgLmRlc2MgLnRpdGxlIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaGVhZGVyIC5kZXNjIC5kZXRhaWxzIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5wYWRkZXIge1xuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbn1cblxuLmNhcnRJdGVtcyB7XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xufVxuLmNhcnRJdGVtcyAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMHB4O1xufVxuLmNhcnRJdGVtcyAuZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5jYXJ0SXRlbXMgLmRldGFpbHMgLm5hbWVzIC5zdWJEZXRhaWxzIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5jYXJ0SXRlbXMgLmRldGFpbHMgLmNhcnRCdG4yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTVweDtcbiAgd2lkdGg6IDgwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLmNhcnRJdGVtcyAuZGV0YWlscyAuY2FydEJ0bjIgLnF1bml0aXR5IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLnNhbWVQcm9kdWN0IHtcbiAgcGFkZGluZzogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5zYW1lUHJvZHVjdCAuZGVzYyB7XG4gIHBhZGRpbmc6IDBweCAwcHggMTBweCAwcHg7XG59XG4uc2FtZVByb2R1Y3QgLmRlc2MgLm5hbWUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDBweDtcbn1cbi5zYW1lUHJvZHVjdCAuZGVzYyAuc2VsZWN0ZWRJdGVtIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5zYW1lUHJvZHVjdCAuZGVzYyAuY2FydEJ0bjIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNXB4O1xuICB3aWR0aDogODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4uc2FtZVByb2R1Y3QgLmRlc2MgLmNhcnRCdG4yIC5xdW5pdGl0eSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5mb290ZXJzIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwcHggMTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/variations/variations.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/variations/variations.page.ts ***!
    \*****************************************************/

  /*! exports provided: VariationsPage */

  /***/
  function srcAppPagesVariationsVariationsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VariationsPage", function () {
      return VariationsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var VariationsPage =
    /*#__PURE__*/
    function () {
      function VariationsPage(modalController, navParma, util) {
        _classCallCheck(this, VariationsPage);

        this.modalController = modalController;
        this.navParma = navParma;
        this.util = util;
        this.productName = '';
        this.desc = '';
        this.total = 0;
        this.cart = [];
        this.userCart = [];
        this.sameProduct = false;
        this.removeProduct = false;
        this.newItem = false;
        this.sameCart = [];
        var info = this.navParma.get('food');
        console.log('info', info);
        this.productName = info.name;
        this.desc = info.desc;
        this.lists = info.variations;
        var userCart = localStorage.getItem('userCart');
        this.haveSize = info.size;
        console.log('usercart---->', userCart);

        if (userCart && userCart !== 'null' && userCart !== undefined && userCart !== 'undefined') {
          this.userCart = JSON.parse(userCart);
          console.log('===>>', this.userCart);
          var sameItem = this.userCart.filter(function (x) {
            return x.id === info.id;
          });
          console.log('sameItem', sameItem);

          if (sameItem.length > 0) {
            this.sameProduct = true;
            this.sameCart = sameItem[0].selectedItem;
            console.log('=??==>asdasd-->>>asd>>>>', this.sameCart);
          }
        } else {
          this.userCart = [];
        }
      }

      _createClass(VariationsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeIt",
        value: function closeIt() {
          this.modalController.dismiss();
        }
      }, {
        key: "radioGroupChange",
        value: function radioGroupChange(event, title) {
          console.log(event, title);
          console.log(this.lists);
          var radioList = this.lists.filter(function (x) {
            return x.title === title;
          });
          console.log(radioList);
          var selectedItems = radioList[0].items.filter(function (x) {
            return x.title === event.detail.value;
          });
          console.log('selected item', selectedItems);
          var price = parseFloat(selectedItems[0].price);
          var param = {
            type: title,
            value: price,
            name: selectedItems[0].title
          };
          var item = this.cart.filter(function (x) {
            return x.type === title;
          }); // console.log(item);

          if (item && item.length) {
            var index = this.cart.findIndex(function (x) {
              return x.type === title;
            });
            this.cart[index].value = price;
          } else {
            this.cart.push(param);
          }

          console.log('cart', this.cart);
          console.log('ng model', this.radioSelected);
        }
      }, {
        key: "getSymobol",
        value: function getSymobol() {
          return this.util.getCurrecySymbol();
        }
      }, {
        key: "sameChoise",
        value: function sameChoise() {
          this.modalController.dismiss(this.sameCart, 'sameChoice');
        }
      }, {
        key: "addToCart",
        value: function addToCart() {
          /*
            new
            sameChoice
            newCustom
            remove
          */
          var addedSize = this.cart.filter(function (x) {
            return x.type === 'size';
          });
          console.log(addedSize);
          var role;

          if (this.haveSize && !addedSize.length) {
            console.log('no size added');
            this.util.errorToast('Please select size');
            return false;
          }

          if (this.cart.length && !this.userCart.length) {
            role = 'new';
          }

          if (this.cart.length && this.userCart.length) {
            role = 'new';
          }

          if (!this.cart.length) {
            role = 'dismissed';
          }

          if (this.newItem) {
            role = 'newCustom';
          }

          this.modalController.dismiss(this.cart, role);
        }
      }, {
        key: "checkedEvent",
        value: function checkedEvent(event, title) {
          console.log(event, title);
          var price = parseFloat(event.detail.value);
          var param = {
            type: title,
            value: price,
            name: title
          };

          if (event.detail && event.detail.checked) {
            this.cart.push(param);
          } else {
            this.cart = this.cart.filter(function (x) {
              return x.type !== title;
            });
          }

          console.log(this.cart);
        }
      }, {
        key: "addQ",
        value: function addQ(index) {
          // this.userCart[index].quantiy = this.userCart[index].quantiy + 1;
          this.sameCart[index].total = this.sameCart[index].total + 1;
        }
      }, {
        key: "removeQ",
        value: function removeQ(index) {
          // if (this.userCart[index].quantiy !== 0) {
          //   this.userCart[index].quantiy = this.userCart[index].quantiy - 1;
          //   if (this.userCart[index].quantiy === 0) {
          //     this.modalController.dismiss(this.cart, 'remove');
          //   }
          // }
          this.sameCart[index].total = this.sameCart[index].total - 1;

          if (this.sameCart[index].total === 0) {
            this.sameCart = this.sameCart.filter(function (x) {
              return x.total !== 0;
            });
          }

          if (this.sameCart.length < 0) {
            this.modalController.dismiss(this.cart, 'remove');
          }
        }
      }, {
        key: "getCurrency",
        value: function getCurrency() {
          return this.util.getCurrecySymbol();
        }
      }]);

      return VariationsPage;
    }();

    VariationsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"]
      }];
    };

    VariationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-variations',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./variations.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/variations/variations.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./variations.page.scss */
      "./src/app/pages/variations/variations.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"]])], VariationsPage);
    /***/
  },

  /***/
  "./src/app/services/apis.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/apis.service.ts ***!
    \******************************************/

  /*! exports provided: AuthInfo, ApisService */

  /***/
  function srcAppServicesApisServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInfo", function () {
      return AuthInfo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApisService", function () {
      return ApisService;
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


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ApisService_1;

    var AuthInfo =
    /*#__PURE__*/
    function () {
      function AuthInfo($uid) {
        _classCallCheck(this, AuthInfo);

        this.$uid = $uid;
      }

      _createClass(AuthInfo, [{
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return !!this.$uid;
        }
      }]);

      return AuthInfo;
    }();

    var ApisService = ApisService_1 =
    /*#__PURE__*/
    function () {
      function ApisService(fireAuth, adb, http) {
        _classCallCheck(this, ApisService);

        this.fireAuth = fireAuth;
        this.adb = adb;
        this.http = http;
        this.db = firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"]();
        this.authInfo$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](ApisService_1.UNKNOWN_USER);
      }

      _createClass(ApisService, [{
        key: "checkAuth",
        value: function checkAuth() {
          var _this10 = this;

          return new Promise(function (resolve, reject) {
            _this10.fireAuth.auth.onAuthStateChanged(function (user) {
              console.log(user);

              if (user) {
                localStorage.setItem('uid', user.uid);
                resolve(user);
              } else {
                _this10.logout();

                var lng = localStorage.getItem('language');
                var selectedCity = localStorage.getItem('selectedCity');
                localStorage.clear();
                localStorage.setItem('language', lng);
                localStorage.setItem('selectedCity', selectedCity);
                resolve(false);
              }
            });
          });
        }
      }, {
        key: "login",
        value: function login(email, password) {
          var _this11 = this;

          return new Promise(function (resolve, reject) {
            _this11.fireAuth.auth.signInWithEmailAndPassword(email, password).then(function (res) {
              if (res.user) {
                _this11.db.collection('users').doc(res.user.uid).update({
                  fcm_token: localStorage.getItem('fcm') ? localStorage.getItem('fcm') : ''
                });

                _this11.authInfo$.next(new AuthInfo(res.user.uid));

                resolve(res.user);
              }
            }).catch(function (err) {
              _this11.authInfo$.next(ApisService_1.UNKNOWN_USER);

              reject("login failed ".concat(err));
            });
          });
        }
      }, {
        key: "getCities",
        value: function getCities() {
          var _this12 = this;

          return new Promise(function (resolve, reject) {
            _this12.adb.collection('cities').get().subscribe(function (venue) {
              var data = venue.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "register",
        value: function register(email, password, fullname) {
          var _this13 = this;

          return new Promise(function (resolve, reject) {
            _this13.fireAuth.auth.createUserWithEmailAndPassword(email, password).then(function (res) {
              if (res.user) {
                _this13.db.collection('users').doc(res.user.uid).set({
                  uid: res.user.uid,
                  email: email,
                  fullname: fullname,
                  type: 'user',
                  status: 'active',
                  fcm_token: localStorage.getItem('fcm') ? localStorage.getItem('fcm') : ''
                });

                _this13.authInfo$.next(new AuthInfo(res.user.uid));

                resolve(res.user);
              }
            }).catch(function (err) {
              _this13.authInfo$.next(ApisService_1.UNKNOWN_USER);

              reject("login failed ".concat(err));
            });
          });
        }
      }, {
        key: "resetPassword",
        value: function resetPassword(email) {
          var _this14 = this;

          return new Promise(function (resolve, reject) {
            _this14.fireAuth.auth.sendPasswordResetEmail(email).then(function (res) {
              resolve(res);
            }).catch(function (err) {
              reject("reset failed ".concat(err));
            });
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authInfo$.next(ApisService_1.UNKNOWN_USER); // this.db.collection('users').doc(localStorage.getItem('uid')).update({ "fcm_token": firebase.firestore.FieldValue.delete() })

          return this.fireAuth.auth.signOut();
        }
      }, {
        key: "getProfile",
        value: function getProfile(id) {
          var _this15 = this;

          return new Promise(function (resolve, reject) {
            _this15.adb.collection('users').doc(id).get().subscribe(function (profile) {
              resolve(profile.data());
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getVenues",
        value: function getVenues() {
          var _this16 = this;

          return new Promise(function (resolve, reject) {
            _this16.adb.collection('venue').get().subscribe(function (venue) {
              var data = venue.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getVenueDetails",
        value: function getVenueDetails(id) {
          var _this17 = this;

          return new Promise(function (resolve, reject) {
            _this17.adb.collection('venue').doc(id).get().subscribe(function (venue) {
              resolve(venue.data());
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getMyProfile",
        value: function getMyProfile(id) {
          var _this18 = this;

          return new Promise(function (resolve, reject) {
            _this18.adb.collection('users').doc(id).get().subscribe(function (users) {
              resolve(users.data());
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getVenueUser",
        value: function getVenueUser(id) {
          var _this19 = this;

          return new Promise(function (resolve, reject) {
            _this19.adb.collection('users').doc(id).get().subscribe(function (venue) {
              resolve(venue.data());
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getVenueCategories",
        value: function getVenueCategories(id) {
          var _this20 = this;

          return new Promise(function (resolve, reject) {
            _this20.adb.collection('categories', function (ref) {
              return ref.where('uid', '==', id);
            }).get().subscribe(function (venue) {
              var data = venue.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getFoods",
        value: function getFoods(uid) {
          var _this21 = this;

          return new Promise(function (resolve, reject) {
            _this21.db.collection('foods').doc(uid).collection('all').get().then(function (data) {
              var users = data.docs.map(function (doc) {
                var item = doc.data();
                item.cid.get().then(function (doc) {
                  item.cid = doc.data();
                  item.cid.id = doc.id;
                });
                item.id = doc.id;
                return item;
              });
              resolve(users);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getMessages",
        value: function getMessages(id) {
          var _this22 = this;

          return new Promise(function (resolve, reject) {
            _this22.adb.collection('messages').doc(id).collection('chats').get().subscribe(function (messages) {
              console.log(messages);
              var data = messages.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getOffers",
        value: function getOffers() {
          var _this23 = this;

          return new Promise(function (resolve, reject) {
            _this23.adb.collection('offers').get().subscribe(function (venue) {
              // resolve(venue.data());
              var data = venue.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "addNewAddress",
        value: function addNewAddress(uid, id, param) {
          var _this24 = this;

          return new Promise(function (resolve, reject) {
            _this24.adb.collection('address').doc(uid).collection('all').doc(id).set(param).then(function (data) {
              resolve(data);
            }, function (error) {
              reject(error);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "updateAddress",
        value: function updateAddress(uid, id, param) {
          var _this25 = this;

          return new Promise(function (resolve, reject) {
            _this25.adb.collection('address').doc(uid).collection('all').doc(id).update(param).then(function (data) {
              resolve(data);
            }, function (error) {
              reject(error);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "deleteAddress",
        value: function deleteAddress(uid, id) {
          var _this26 = this;

          return new Promise(function (resolve, reject) {
            _this26.adb.collection('address').doc(uid).collection('all').doc(id).delete().then(function (data) {
              resolve(data);
            }, function (error) {
              reject(error);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getMyAddress",
        value: function getMyAddress(uid) {
          var _this27 = this;

          return new Promise(function (resolve, reject) {
            _this27.db.collection('address').doc(uid).collection('all').get().then(function (data) {
              var users = data.docs.map(function (doc) {
                var item = doc.data();
                item.id = doc.id;
                return item;
              });
              resolve(users);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "createOrder",
        value: function createOrder(id, param) {
          var _this28 = this;

          param.vid = this.db.collection('venue').doc(param.vid);
          param.uid = this.db.collection('users').doc(param.uid); // param.dId = this.db.collection('users').doc(param.dId);

          return new Promise(function (resolve, reject) {
            _this28.adb.collection('orders').doc(id).set(param).then(function (data) {
              resolve(data);
            }, function (error) {
              reject(error);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "sendNotification",
        value: function sendNotification(msg, title, id) {
          var body = {
            app_id: src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].onesignal.appId,
            include_player_ids: [id],
            headings: {
              en: title
            },
            contents: {
              en: msg
            },
            data: {
              task: msg
            }
          };
          var header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]().set('Content-Type', 'application/json').set('Authorization', "Basic ".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].onesignal.restKey))
          };
          return this.http.post('https://onesignal.com/api/v1/notifications', body, header);
        }
      }, {
        key: "getMyOrders",
        value: function getMyOrders(id) {
          var _this29 = this;

          return new Promise(function (resolve, reject) {
            _this29.adb.collection('orders', function (ref) {
              return ref.where('userId', '==', id);
            }).get().subscribe(function (venue) {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this29, void 0, void 0,
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee4() {
                var data;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        data = venue.docs.map(function (element) {
                          var item = element.data();
                          item.vid.get().then(function (doc) {
                            item.vid = doc.data();
                            item.vid.id = doc.id;
                          });
                          item.id = element.id;
                          return item;
                        });
                        resolve(data);

                      case 2:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getOrderById",
        value: function getOrderById(id) {
          var _this30 = this;

          return new Promise(function (resolve, reject) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this30, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee6() {
              var _this31 = this;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      this.adb.collection('orders').doc(id).get().subscribe(function (order) {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this31, void 0, void 0,
                        /*#__PURE__*/
                        regeneratorRuntime.mark(function _callee5() {
                          var data;
                          return regeneratorRuntime.wrap(function _callee5$(_context5) {
                            while (1) {
                              switch (_context5.prev = _context5.next) {
                                case 0:
                                  _context5.next = 2;
                                  return order.data();

                                case 2:
                                  data = _context5.sent;
                                  _context5.next = 5;
                                  return data.vid.get().then(function (doc) {
                                    data.vid = doc.data();
                                    data.vid.id = doc.id;
                                  });

                                case 5:
                                  if (!(data && data.dId)) {
                                    _context5.next = 8;
                                    break;
                                  }

                                  _context5.next = 8;
                                  return data.dId.get().then(function (doc) {
                                    data.dId = doc.id;
                                    data.dId = doc.data();
                                  });

                                case 8:
                                  resolve(data);

                                case 9:
                                case "end":
                                  return _context5.stop();
                              }
                            }
                          }, _callee5);
                        }));
                      }, function (error) {
                        reject(error);
                      });

                    case 1:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          });
        }
      }, {
        key: "getDriverInfo",
        value: function getDriverInfo(id) {
          var _this32 = this;

          return new Promise(function (resolve, reject) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this32, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      this.adb.collection('users').doc(id).snapshotChanges().subscribe(function (data) {
                        console.log(data);
                        resolve(data.payload.data());
                      }, function (error) {
                        reject(error);
                      });

                    case 1:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          });
        }
      }, {
        key: "updateOrderStatus",
        value: function updateOrderStatus(id, value) {
          var _this33 = this;

          return new Promise(function (resolve, reject) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this33, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee9() {
              var _this34 = this;

              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      this.adb.collection('orders').doc(id).update({
                        status: value
                      }).then(function (order) {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this34, void 0, void 0,
                        /*#__PURE__*/
                        regeneratorRuntime.mark(function _callee8() {
                          return regeneratorRuntime.wrap(function _callee8$(_context8) {
                            while (1) {
                              switch (_context8.prev = _context8.next) {
                                case 0:
                                  resolve(order);

                                case 1:
                                case "end":
                                  return _context8.stop();
                              }
                            }
                          }, _callee8);
                        }));
                      }).catch(function (error) {
                        reject(error);
                      });

                    case 1:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          });
        }
      }, {
        key: "getDrivers",
        value: function getDrivers() {
          var _this35 = this;

          return new Promise(function (resolve, reject) {
            _this35.adb.collection('users', function (ref) {
              return ref.where('type', '==', 'delivery');
            }).get().subscribe(function (venue) {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this35, void 0, void 0,
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee10() {
                var data;
                return regeneratorRuntime.wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        data = venue.docs.map(function (element) {
                          var item = element.data();
                          item.id = element.id;
                          return item;
                        });
                        resolve(data);

                      case 2:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10);
              }));
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "sendOrderToDriver",
        value: function sendOrderToDriver(id, param) {
          var _this36 = this;

          return new Promise(function (resolve, reject) {
            _this36.adb.collection('driverOrders').doc(id).set(param).then(function (data) {
              resolve(data);
            }, function (error) {
              reject(error);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "addReview",
        value: function addReview(param) {
          var _this37 = this;

          param.vid = this.db.collection('venue').doc(param.vid);
          param.uid = this.db.collection('users').doc(param.uid);
          return new Promise(function (resolve, reject) {
            _this37.adb.collection('reviews').doc(Math.random().toString()).set(param).then(function (data) {
              resolve(data);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "addDriverReview",
        value: function addDriverReview(param) {
          var _this38 = this;

          param.uid = this.db.collection('users').doc(param.uid);
          return new Promise(function (resolve, reject) {
            _this38.adb.collection('driverreviews').doc(Math.random().toString()).set(param).then(function (data) {
              resolve(data);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "updateVenue",
        value: function updateVenue(informations) {
          var _this39 = this;

          return new Promise(function (resolve, reject) {
            _this39.adb.collection('venue').doc(informations.uid).update(informations).then(function (data) {
              resolve(data);
            }, function (error) {
              reject(error);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "updateProfile",
        value: function updateProfile(uid, param) {
          var _this40 = this;

          return new Promise(function (resolve, reject) {
            _this40.db.collection('users').doc(uid).update(param).then(function (data) {
              resolve(data);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getMyReviews",
        value: function getMyReviews(id) {
          var _this41 = this;

          return new Promise(function (resolve, reject) {
            _this41.adb.collection('reviews', function (ref) {
              return ref.where('id', '==', id);
            }).get().subscribe(function (review) {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this41, void 0, void 0,
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee11() {
                var data;
                return regeneratorRuntime.wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        data = review.docs.map(function (element) {
                          var item = element.data();
                          item.id = element.id;

                          if (item && item.vid) {
                            item.vid.get().then(function (doc) {
                              item.vid = doc.data();
                            });
                          }

                          return item;
                        });
                        resolve(data);

                      case 2:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee11);
              }));
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getBanners",
        value: function getBanners() {
          var _this42 = this;

          return new Promise(function (resolve, reject) {
            _this42.adb.collection('banners').get().subscribe(function (venue) {
              // resolve(venue.data());
              var data = venue.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "httpPost",
        value: function httpPost(url, body) {
          var header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', "Bearer ".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].stripe.sk))
          };
          var order = this.JSON_to_URLEncoded(body);
          console.log(order);
          return this.http.post(url, order, header);
        }
      }, {
        key: "httpGet",
        value: function httpGet(url) {
          var header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', "Bearer ".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].stripe.sk))
          };
          return this.http.get(url, header);
        }
      }, {
        key: "JSON_to_URLEncoded",
        value: function JSON_to_URLEncoded(element, key, list) {
          var new_list = list || [];

          if (typeof element == "object") {
            for (var idx in element) {
              this.JSON_to_URLEncoded(element[idx], key ? key + "[" + idx + "]" : idx, new_list);
            }
          } else {
            new_list.push(key + "=" + encodeURIComponent(element));
          }

          return new_list.join("&");
        }
      }]);

      return ApisService;
    }();

    ApisService.UNKNOWN_USER = new AuthInfo(null);

    ApisService.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
      }];
    };

    ApisService = ApisService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]])], ApisService);
    /***/
  },

  /***/
  "./src/app/services/util.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/util.service.ts ***!
    \******************************************/

  /*! exports provided: UtilService */

  /***/
  function srcAppServicesUtilServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilService", function () {
      return UtilService;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var UtilService =
    /*#__PURE__*/
    function () {
      function UtilService(loadingCtrl, alertCtrl, toastCtrl, router, navCtrl, translateService) {
        _classCallCheck(this, UtilService);

        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.navCtrl = navCtrl;
        this.translateService = translateService;
        this.isLoading = false;
        this.address = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.coupon = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.review = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.changeLocation = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.profile = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }
      /*
      Start Loader
      Call this method to Start your Loader
      */


      _createClass(UtilService, [{
        key: "publishAddress",
        value: function publishAddress(data) {
          this.address.next(data);
        }
      }, {
        key: "publishReview",
        value: function publishReview(data) {
          this.review.next(data);
        }
      }, {
        key: "publishProfile",
        value: function publishProfile(data) {
          this.profile.next(data);
        }
      }, {
        key: "observProfile",
        value: function observProfile() {
          return this.profile;
        }
      }, {
        key: "getLanguage",
        value: function getLanguage() {
          return this.translateService.currentLang;
        }
      }, {
        key: "getReviewObservable",
        value: function getReviewObservable() {
          return this.review;
        }
      }, {
        key: "publishLocation",
        value: function publishLocation(data) {
          this.changeLocation.next(data);
        }
      }, {
        key: "subscribeLocation",
        value: function subscribeLocation() {
          return this.changeLocation;
        }
      }, {
        key: "publishLoggedIn",
        value: function publishLoggedIn(data) {
          this.loggedIn.next(data);
        }
      }, {
        key: "subscribeLoggedIn",
        value: function subscribeLoggedIn() {
          return this.loggedIn;
        }
      }, {
        key: "translate",
        value: function translate(str) {
          var currentLang = this.translateService.currentLang;
          var returnValue = this.translateService.translations[currentLang][str];

          if (returnValue === undefined) {
            return this.translateService.translations.en_merch[str];
          } else {
            return returnValue;
          }
        }
      }, {
        key: "translateInEN",
        value: function translateInEN(str) {
          var currentLang = 'en';
          var returnValue = this.translateService.translations[currentLang][str];

          if (returnValue === undefined) {
            return this.translateService.translations.en_merch[str];
          } else {
            return returnValue;
          }
        }
      }, {
        key: "getCurrencyCode",
        value: function getCurrencyCode() {
          return src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].general.code;
        }
      }, {
        key: "getCurrecySymbol",
        value: function getCurrecySymbol() {
          return src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].general.symbol;
        }
      }, {
        key: "getObservable",
        value: function getObservable() {
          return this.address;
        }
      }, {
        key: "publishCoupon",
        value: function publishCoupon(data) {
          this.coupon.next(data);
        }
      }, {
        key: "getCouponObservable",
        value: function getCouponObservable() {
          return this.coupon;
        }
      }, {
        key: "setOrders",
        value: function setOrders(data) {
          this.orders = null;
          this.orders = data;
        }
      }, {
        key: "gerOrder",
        value: function gerOrder() {
          return this.orders;
        }
      }, {
        key: "show",
        value: function show(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee12() {
            var _this43 = this;

            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    this.isLoading = true;
                    _context12.next = 3;
                    return this.loadingCtrl.create({
                      message: msg,
                      spinner: 'bubbles'
                    }).then(function (a) {
                      a.present().then(function () {
                        //console.log('presented');
                        if (!_this43.isLoading) {
                          a.dismiss().then(function () {
                            return console.log('abort presenting');
                          });
                        }
                      });
                    });

                  case 3:
                    return _context12.abrupt("return", _context12.sent);

                  case 4:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "hide",
        value: function hide() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee13() {
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    this.isLoading = false;
                    _context13.next = 3;
                    return this.loadingCtrl.dismiss().then(function () {
                      return console.log('dismissed');
                    });

                  case 3:
                    return _context13.abrupt("return", _context13.sent);

                  case 4:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
        /*
          Show Warning Alert Message
          param : msg = message to display
          Call this method to show Warning Alert,
          */

      }, {
        key: "showWarningAlert",
        value: function showWarningAlert(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee14() {
            var alert;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.next = 2;
                    return this.alertCtrl.create({
                      header: 'Warning',
                      message: msg,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context14.sent;
                    _context14.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "showSimpleAlert",
        value: function showSimpleAlert(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee15() {
            var alert;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.next = 2;
                    return this.alertCtrl.create({
                      header: '',
                      message: msg,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context15.sent;
                    _context15.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
        /*
         Show Error Alert Message
         param : msg = message to display
         Call this method to show Error Alert,
         */

      }, {
        key: "showErrorAlert",
        value: function showErrorAlert(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee16() {
            var alert;
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    _context16.next = 2;
                    return this.alertCtrl.create({
                      header: 'Error',
                      message: msg,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context16.sent;
                    _context16.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
        /*
           param : email = email to verify
           Call this method to get verify email
           */

      }, {
        key: "getEmailFilter",
        value: function getEmailFilter(email) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee17() {
            var emailfilter, alert;
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;

                    if (emailfilter.test(email)) {
                      _context17.next = 10;
                      break;
                    }

                    _context17.next = 4;
                    return this.alertCtrl.create({
                      header: 'Warning',
                      message: 'Please enter valid email',
                      buttons: ['OK']
                    });

                  case 4:
                    alert = _context17.sent;
                    _context17.next = 7;
                    return alert.present();

                  case 7:
                    return _context17.abrupt("return", false);

                  case 10:
                    return _context17.abrupt("return", true);

                  case 11:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
        /*
          Show Toast Message on Screen
           param : msg = message to display, color= background
           color of toast example dark,danger,light. position  = position of message example top,bottom
           Call this method to show toast message
           */

      }, {
        key: "showToast",
        value: function showToast(msg, colors, positon) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee18() {
            var toast;
            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    _context18.next = 2;
                    return this.toastCtrl.create({
                      message: msg,
                      duration: 2000,
                      color: colors,
                      position: positon
                    });

                  case 2:
                    toast = _context18.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          }));
        }
      }, {
        key: "shoNotification",
        value: function shoNotification(msg, colors, positon) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee19() {
            var toast;
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    _context19.next = 2;
                    return this.toastCtrl.create({
                      message: msg,
                      duration: 4000,
                      color: colors,
                      position: positon,
                      buttons: [{
                        text: 'Ok',
                        role: 'cancel',
                        handler: function handler() {// console.log('Cancel clicked');
                        }
                      }]
                    });

                  case 2:
                    toast = _context19.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19, this);
          }));
        }
      }, {
        key: "errorToast",
        value: function errorToast(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee20() {
            var toast;
            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    _context20.next = 2;
                    return this.toastCtrl.create({
                      message: msg,
                      duration: 2000
                    });

                  case 2:
                    toast = _context20.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20, this);
          }));
        }
      }, {
        key: "apiErrorHandler",
        value: function apiErrorHandler(err) {
          // console.log('Error got in service =>', err)
          if (err.status === -1) {
            this.showErrorAlert('Failed To Connect With Server');
          } else if (err.status === 401) {
            this.showErrorAlert('Unauthorized Request!');
            this.navCtrl.navigateRoot('/login');
          } else if (err.status === 500) {
            this.showErrorAlert('Somethimg Went Wrong..');
          }
        } // setDetails(data) {
        //   this.details = null;
        //   this.details = data;
        // }
        // getDetails() {
        //   return this.details;
        // }

      }, {
        key: "makeid",
        value: function makeid(length) {
          var result = '';
          var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          var charactersLength = characters.length;

          for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }

          return result;
        }
      }]);

      return UtilService;
    }();

    UtilService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
      }];
    };

    UtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])], UtilService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebase: {
        apiKey: "AIzaSyA3x_tdkyCJLZZxxWiOuW6qg0aOw1vuXj4",
        authDomain: "goby-a1996.firebaseapp.com",
        databaseURL: "https://goby-a1996.firebaseio.com",
        projectId: "goby-a1996",
        storageBucket: "goby-a1996.appspot.com",
        messagingSenderId: "540145033481",
        appId: "1:540145033481:web:fd88d091f2e0850b8cb3d8",
        measurementId: "G-TZXF4YDY04"
      },
      onesignal: {
        appId: "473af2db-5227-471e-9f6d-cf4583f798e4",
        googleProjectNumber: "540145033481",
        restKey: "NzZkMGQ0MmUtNmE0Ny00YzBmLTliMjgtNTFmZWQzMWYzNzMw"
      },
      stripe: {
        sk: ""
      },
      paypal: {
        sandbox: "",
        production: "AUQL8ZowKIFJ0F1BpAqgNR5vh3HUW3YYwnMMUXH3C8LLXpx4tZ9j6tyItEcbGpThF6lnMbPOzAf4WDWp"
      },
      general: {
        symbol: "$",
        code: "MXN"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/VicBecerra/Downloads/ionic5FoodAppFull/App_code/UserApp/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map