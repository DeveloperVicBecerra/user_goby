(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-category-category-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content #content>\n  <div class=\"mainContent\">\n    <div class=\"restContent\" [style.backgroundImage]=\"'url('+cover+')'\">\n      <div class=\"btnss\">\n        <ion-icon (click)=\"back()\" class=\"backIcon\" color=\"light\" slot=\"start\" name=\"arrow-back-outline\"></ion-icon>\n        <ion-label class=\"moreInfo\" (click)=\"openDetails()\">{{'View more' | translate}}</ion-label>\n      </div>\n    </div>\n    <div class=\"foodsContent\">\n      <ion-label class=\"restname\">{{name}}</ion-label>\n      <ion-label class=\"cusine\">{{getCusine(cusine)}}</ion-label>\n      <div class=\"ratting\">\n        <ion-icon [name]=\"totalRatting >= 1 ? 'star-outline':'star'\" [color]=\"totalRatting >= 1 ? 'warning':'medium'\">\n        </ion-icon>\n        <ion-icon [name]=\"totalRatting >= 2 ? 'star-outline':'star'\" [color]=\"totalRatting >= 2 ? 'warning':'medium'\">\n        </ion-icon>\n        <ion-icon [name]=\"totalRatting >= 3 ? 'star-outline':'star'\" [color]=\"totalRatting >= 3 ? 'warning':'medium'\">\n        </ion-icon>\n        <ion-icon [name]=\"totalRatting >= 4 ? 'star-outline':'star'\" [color]=\"totalRatting >= 4 ? 'warning':'medium'\">\n        </ion-icon>\n        <ion-icon [name]=\"totalRatting >= 5 ? 'star-outline':'star'\" [color]=\"totalRatting >= 5 ? 'warning':'medium'\">\n        </ion-icon>\n        ({{ratting}} {{'Rattings' | translate}})\n      </div>\n      <div class=\"deliveryAddress\">\n        <img src=\"assets/pin.png\" alt=\"\" class=\"pin\">\n        <p class=\"address\"> {{getAddress()}}</p>\n\n      </div>\n      <div class=\"vegSection\">\n        <ion-label>{{'Veg Only' | translate}}</ion-label>\n        <ion-toggle color=\"success\" mode=\"ios\" (ionChange)=\"statusChange()\" [(ngModel)]=\"veg\"></ion-toggle>\n      </div>\n      <div *ngFor=\"let item of dummy\">\n        <ion-list>\n          <ion-item>\n            <ion-thumbnail slot=\"start\">\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </ion-thumbnail>\n            <ion-label>\n              <h3>\n                <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n              </h3>\n              <p>\n                <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n              </p>\n              <p>\n                <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n              </p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </div>\n      <div *ngFor=\"let cate of categories\">\n        <ion-label class=\"cateTitle\" [id]=\"cate.id\">{{cate.name}}</ion-label>\n        <div class=\"card_div\">\n\n          <div class=\"card\" *ngFor=\"let item of foods;let i = index\">\n            <div *ngIf=\"cate.id == item.cid.id\" class=\"mainCat\">\n              <img [src]=\"item.cover\" alt=\"\" class=\"image_div\">\n              <div class=\"desc_div\">\n                <ion-label class=\"heading_lbl\">{{item.name}}</ion-label>\n                <div class=\"ratting\">\n                  <ion-icon [name]=\"item.ratting >= 1 ? 'star-outline':'star'\"\n                    [color]=\"item.ratting >= 1 ? 'warning':'medium'\">\n                  </ion-icon>\n                  <ion-icon [name]=\"item.ratting >= 2 ? 'star-outline':'star'\"\n                    [color]=\"item.ratting >= 2 ? 'warning':'medium'\">\n                  </ion-icon>\n                  <ion-icon [name]=\"item.ratting >= 3 ? 'star-outline':'star'\"\n                    [color]=\"item.ratting >= 3 ? 'warning':'medium'\">\n                  </ion-icon>\n                  <ion-icon [name]=\"item.ratting >= 4 ? 'star-outline':'star'\"\n                    [color]=\"item.ratting >= 4 ? 'warning':'medium'\">\n                  </ion-icon>\n                  <ion-icon [name]=\"item.ratting >= 5 ? 'star-outline':'star'\"\n                    [color]=\"item.ratting >= 5 ? 'warning':'medium'\">\n                  </ion-icon>\n                  ({{item.totalRatting ? item.totalRatting:0}}. {{'Rattings' | translate}})\n                </div>\n                <ion-label class=\"small_lbl\">{{item.desc}}</ion-label>\n                <ion-label class=\"small_lbl\">{{getCurrency()}} {{item.price}}</ion-label>\n              </div>\n              <div class=\"cartBtn\" *ngIf=\"item.quantiy <= 0\">\n                <ion-label class=\"btns\" (click)=\"add(i)\">{{'Add' | translate}}</ion-label>\n                <!-- <ion-button (click)=\"add(i)\" size=\"small\" expand=\"block\" fill=\"outline\" shape=\"round\">\n                  {{'Add' | translate}}\n                </ion-button> -->\n              </div>\n              <div class=\"cartBtn2\" *ngIf=\"item.quantiy > 0\">\n                <ion-button (click)=\"removeQ(i)\" fill=\"clear\" size=\"small\">\n                  <ion-icon name=\"remove\"></ion-icon>\n                </ion-button>\n                <p class=\"qunitity\">{{item.quantiy}}</p>\n                <ion-button (click)=\"addQ(i)\" fill=\"clear\" size=\"small\">\n                  <ion-icon name=\"add\"></ion-icon>\n                </ion-button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- <app-popover></app-popover> -->\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"presentPopover($event)\">\n    <ion-fab-button color=\"light\" mode=\"ios\">\n      <ion-icon name=\"list\" color=\"primary\"></ion-icon>\n      <ion-label color=\"primary\">{{'Menu' | translate}}</ion-label>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n<ion-footer *ngIf=\"totalItem >0\">\n  <ion-toolbar color=\"primary\">\n    <ion-label color=\"light\">{{totalItem}} {{'ITEM' | translate}}</ion-label>\n    <ion-label color=\"light\"> {{getCurrency()}} {{totalPrice}} {{'plus taxes' | translate}}</ion-label>\n    <ion-button (click)=\"viewCart()\" slot=\"end\" fill=\"clear\" color=\"light\">\n      <ion-icon slot=\"end\" name=\"arrow-forward-outline\"></ion-icon>\n      {{'View Cart' | translate}}\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/category/category-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/category/category-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CategoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageRoutingModule", function() { return CategoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category.page */ "./src/app/pages/category/category.page.ts");




const routes = [
    {
        path: '',
        component: _category_page__WEBPACK_IMPORTED_MODULE_3__["CategoryPage"]
    }
];
let CategoryPageRoutingModule = class CategoryPageRoutingModule {
};
CategoryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CategoryPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/category/category.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/category/category.module.ts ***!
  \***************************************************/
/*! exports provided: CategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageModule", function() { return CategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _category_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category-routing.module */ "./src/app/pages/category/category-routing.module.ts");
/* harmony import */ var _category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category.page */ "./src/app/pages/category/category.page.ts");
/* harmony import */ var src_app_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/directives/shared.module */ "./src/app/directives/shared.module.ts");










let CategoryPageModule = class CategoryPageModule {
};
CategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [
            src_app_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _category_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoryPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
        ],
        declarations: [_category_page__WEBPACK_IMPORTED_MODULE_6__["CategoryPage"]]
    })
], CategoryPageModule);



/***/ }),

/***/ "./src/app/pages/category/category.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/category/category.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-fab-button {\n  --border-radius:10px;\n  --padding:10px;\n  width: 80px;\n}\n\nion-label {\n  display: block;\n}\n\nion-toolbar {\n  padding: 0px 10px;\n  font-weight: bold;\n}\n\nion-toolbar ion-button {\n  font-weight: bold;\n}\n\n.mainContent .restContent {\n  width: 100%;\n  height: 200px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.mainContent .restContent .btnss {\n  background-image: linear-gradient(-230deg, #17181a63, #827777) !important;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  position: absolute;\n  width: 100%;\n  padding: 10px;\n  height: 150px;\n}\n\n.mainContent .restContent .btnss .backIcon {\n  font-size: 2rem;\n}\n\n.mainContent .restContent .btnss .moreInfo {\n  color: white;\n  font-weight: bold;\n}\n\n.mainContent .foodsContent {\n  position: absolute;\n  background: white;\n  height: 100%;\n  top: 100px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  width: 100%;\n  padding: 10px;\n}\n\n.mainContent .foodsContent .restname {\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: black;\n  padding-left: 10px;\n}\n\n.mainContent .foodsContent .cusine {\n  font-size: 1rem;\n  color: lightgray;\n  padding-left: 10px;\n}\n\n.mainContent .foodsContent .ratting {\n  font-size: 1rem;\n  padding-left: 10px;\n}\n\n.mainContent .foodsContent .deliveryAddress {\n  display: -webkit-box;\n  display: flex;\n  padding: 20px 10px 0px 10px;\n}\n\n.mainContent .foodsContent .deliveryAddress .pin {\n  width: 25px;\n  height: 25px;\n}\n\n.mainContent .foodsContent .deliveryAddress .address {\n  font-size: 1rem;\n  margin: 0px;\n}\n\n.mainContent .foodsContent .vegSection {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 10px;\n}\n\n.mainContent .foodsContent .cateTitle {\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: black;\n  padding-left: 10px;\n}\n\n.mainContent .foodsContent .card_div .card {\n  display: -webkit-box;\n  display: flex;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat {\n  width: 100%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  padding: 5px 10px;\n  display: -webkit-box;\n  display: flex;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .image_div {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 80px !important;\n  height: 80px !important;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .desc_div {\n  margin-left: 20px;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .desc_div .heading_lbl {\n  font-size: 14px;\n  display: block;\n  text-align: left;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .desc_div .ratting {\n  font-size: 10px;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .desc_div .small_lbl {\n  font-size: 8px;\n  color: lightgray;\n  display: block;\n  text-align: left;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .cartBtn {\n  position: absolute;\n  right: 15px;\n  width: 60px;\n  background: white;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .cartBtn .btns {\n  border: 1px solid var(--ion-color-primary);\n  border-radius: 10px;\n  padding: 2px;\n  font-size: 12px;\n  text-align: center;\n  color: var(--ion-color-primary);\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .cartBtn2 {\n  position: absolute;\n  right: 15px;\n  width: 80px;\n  display: -webkit-box;\n  display: flex;\n  background: white;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .cartBtn2 .qunitity {\n  font-weight: bold;\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9WaWNCZWNlcnJhL0Rvd25sb2Fkcy9pb25pYzVGb29kQXBwRnVsbC9BcHBfY29kZS9Vc2VyQXBwL3NyYy9hcHAvcGFnZXMvY2F0ZWdvcnkvY2F0ZWdvcnkucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jYXRlZ29yeS9jYXRlZ29yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDQ0o7O0FEQ0E7RUFDSSxjQUFBO0FDRUo7O0FEQUE7RUFDRyxpQkFBQTtFQUNBLGlCQUFBO0FDR0g7O0FERkc7RUFDSSxpQkFBQTtBQ0lQOztBRENJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNFUjs7QUREUTtFQUNJLHlFQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQ0daOztBREZZO0VBSUksZUFBQTtBQ0NoQjs7QURDWTtFQUlJLFlBQUE7RUFDQSxpQkFBQTtBQ0ZoQjs7QURPSTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBRUEsVUFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ05SOztBRE9RO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0xaOztBRE9RO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNMWjs7QURPUTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ0xaOztBRE9RO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsMkJBQUE7QUNMWjs7QURNWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDSmhCOztBRE1ZO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUNKaEI7O0FET1E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsYUFBQTtBQ0xaOztBRE9RO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0xaOztBRFFZO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0FDTmhCOztBRE9nQjtFQUNJLFdBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0xwQjs7QURNb0I7RUFDSSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNKeEI7O0FETW9CO0VBQ0ksaUJBQUE7QUNKeEI7O0FES3dCO0VBRUksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0o1Qjs7QURNd0I7RUFFSSxlQUFBO0FDTDVCOztBRE93QjtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0w1Qjs7QURTb0I7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNQeEI7O0FEUXdCO0VBQ0ksMENBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBQ041Qjs7QURTb0I7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsaUJBQUE7QUNQeEI7O0FEUXdCO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FDTjVCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2F0ZWdvcnkvY2F0ZWdvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZhYi1idXR0b257XG4gICAgLS1ib3JkZXItcmFkaXVzXHQ6MTBweDtcbiAgICAtLXBhZGRpbmc6MTBweDtcbiAgICB3aWR0aDogODBweDtcbn1cbmlvbi1sYWJlbHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbmlvbi10b29sYmFyIHtcbiAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICBpb24tYnV0dG9uIHtcbiAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgIH1cbn1cbi5tYWluQ29udGVudHtcbiAgICBcbiAgICAucmVzdENvbnRlbnR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIC5idG5zc3tcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMjMwZGVnLCAjMTcxODFhNjMsICM4Mjc3NzcpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgLmJhY2tJY29ue1xuICAgICAgICAgICAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAvLyBsZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgIC8vIHRvcDogNDBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW9yZUluZm97XG4gICAgICAgICAgICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIC8vIHJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIC8vIHRvcDogNDBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIC5mb29kc0NvbnRlbnR7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgLy8gb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgdG9wOiAxMDBweDtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAucmVzdG5hbWV7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jdXNpbmV7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBjb2xvcjogbGlnaHRncmF5O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5yYXR0aW5ne1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5kZWxpdmVyeUFkZHJlc3N7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcGFkZGluZzogMjBweCAxMHB4IDBweCAxMHB4O1xuICAgICAgICAgICAgLnBpbntcbiAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWRkcmVzc3tcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIC52ZWdTZWN0aW9ue1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIH0gXG4gICAgICAgIC5jYXRlVGl0bGV7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkX2RpdntcbiAgICAgICAgICAgIC5jYXJke1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgLm1haW5DYXR7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjVweCAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAuaW1hZ2VfZGl2e1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogODBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5kZXNjX2RpdntcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgLmhlYWRpbmdfbGJse1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5yYXR0aW5ne1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbWFsbF9sYmx7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNhcnRCdG57XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAuYnRuc3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5jYXJ0QnRuMntcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAucXVuaXRpdHl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuIiwiaW9uLWZhYi1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6MTBweDtcbiAgLS1wYWRkaW5nOjEwcHg7XG4gIHdpZHRoOiA4MHB4O1xufVxuXG5pb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW9uLXRvb2xiYXIge1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5pb24tdG9vbGJhciBpb24tYnV0dG9uIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tYWluQ29udGVudCAucmVzdENvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLm1haW5Db250ZW50IC5yZXN0Q29udGVudCAuYnRuc3Mge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTIzMGRlZywgIzE3MTgxYTYzLCAjODI3Nzc3KSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGhlaWdodDogMTUwcHg7XG59XG4ubWFpbkNvbnRlbnQgLnJlc3RDb250ZW50IC5idG5zcyAuYmFja0ljb24ge1xuICBmb250LXNpemU6IDJyZW07XG59XG4ubWFpbkNvbnRlbnQgLnJlc3RDb250ZW50IC5idG5zcyAubW9yZUluZm8ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1haW5Db250ZW50IC5mb29kc0NvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMTAwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5tYWluQ29udGVudCAuZm9vZHNDb250ZW50IC5yZXN0bmFtZSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4ubWFpbkNvbnRlbnQgLmZvb2RzQ29udGVudCAuY3VzaW5lIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogbGlnaHRncmF5O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4ubWFpbkNvbnRlbnQgLmZvb2RzQ29udGVudCAucmF0dGluZyB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLm1haW5Db250ZW50IC5mb29kc0NvbnRlbnQgLmRlbGl2ZXJ5QWRkcmVzcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDIwcHggMTBweCAwcHggMTBweDtcbn1cbi5tYWluQ29udGVudCAuZm9vZHNDb250ZW50IC5kZWxpdmVyeUFkZHJlc3MgLnBpbiB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG59XG4ubWFpbkNvbnRlbnQgLmZvb2RzQ29udGVudCAuZGVsaXZlcnlBZGRyZXNzIC5hZGRyZXNzIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBtYXJnaW46IDBweDtcbn1cbi5tYWluQ29udGVudCAuZm9vZHNDb250ZW50IC52ZWdTZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLm1haW5Db250ZW50IC5mb29kc0NvbnRlbnQgLmNhdGVUaXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4ubWFpbkNvbnRlbnQgLmZvb2RzQ29udGVudCAuY2FyZF9kaXYgLmNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm1haW5Db250ZW50IC5mb29kc0NvbnRlbnQgLmNhcmRfZGl2IC5jYXJkIC5tYWluQ2F0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm1haW5Db250ZW50IC5mb29kc0NvbnRlbnQgLmNhcmRfZGl2IC5jYXJkIC5tYWluQ2F0IC5pbWFnZV9kaXYge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogODBweCAhaW1wb3J0YW50O1xufVxuLm1haW5Db250ZW50IC5mb29kc0NvbnRlbnQgLmNhcmRfZGl2IC5jYXJkIC5tYWluQ2F0IC5kZXNjX2RpdiB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLm1haW5Db250ZW50IC5mb29kc0NvbnRlbnQgLmNhcmRfZGl2IC5jYXJkIC5tYWluQ2F0IC5kZXNjX2RpdiAuaGVhZGluZ19sYmwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm1haW5Db250ZW50IC5mb29kc0NvbnRlbnQgLmNhcmRfZGl2IC5jYXJkIC5tYWluQ2F0IC5kZXNjX2RpdiAucmF0dGluZyB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5tYWluQ29udGVudCAuZm9vZHNDb250ZW50IC5jYXJkX2RpdiAuY2FyZCAubWFpbkNhdCAuZGVzY19kaXYgLnNtYWxsX2xibCB7XG4gIGZvbnQtc2l6ZTogOHB4O1xuICBjb2xvcjogbGlnaHRncmF5O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5tYWluQ29udGVudCAuZm9vZHNDb250ZW50IC5jYXJkX2RpdiAuY2FyZCAubWFpbkNhdCAuY2FydEJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIHdpZHRoOiA2MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5tYWluQ29udGVudCAuZm9vZHNDb250ZW50IC5jYXJkX2RpdiAuY2FyZCAubWFpbkNhdCAuY2FydEJ0biAuYnRucyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMnB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5tYWluQ29udGVudCAuZm9vZHNDb250ZW50IC5jYXJkX2RpdiAuY2FyZCAubWFpbkNhdCAuY2FydEJ0bjIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNXB4O1xuICB3aWR0aDogODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4ubWFpbkNvbnRlbnQgLmZvb2RzQ29udGVudCAuY2FyZF9kaXYgLmNhcmQgLm1haW5DYXQgLmNhcnRCdG4yIC5xdW5pdGl0eSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiA4cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/category/category.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/category/category.page.ts ***!
  \*************************************************/
/*! exports provided: CategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPage", function() { return CategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _variations_variations_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../variations/variations.page */ "./src/app/pages/variations/variations.page.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");









let CategoryPage = class CategoryPage {
    constructor(route, api, util, navCtrl, alertController, router, popoverController, modalCtrl) {
        this.route = route;
        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.router = router;
        this.popoverController = popoverController;
        this.modalCtrl = modalCtrl;
        this.cover = '';
        this.cusine = [];
        this.foods = [];
        this.dummyFoods = [];
        this.categories = [];
        this.dummy = Array(50);
        this.veg = true;
        this.totalItem = 0;
        this.totalPrice = 0;
        this.deliveryAddress = '';
        this.foodIds = [];
        this.cart = [];
    }
    ngOnInit() {
        this.route.queryParams.subscribe(data => {
            console.log('data=>', data);
            if (data.hasOwnProperty('id')) {
                this.id = data.id;
                this.getVenueDetails();
            }
        });
    }
    getAddress() {
        const address = JSON.parse(localStorage.getItem('deliveryAddress'));
        if (address && address.address) {
            this.deliveryAddress = address.address;
        }
        return this.deliveryAddress;
    }
    getVenueDetails() {
        // Venue Details
        this.api.getVenueDetails(this.id).then(data => {
            console.log(data);
            if (data) {
                this.name = data.name;
                this.descritions = data.descritions;
                this.cover = data.cover;
                this.address = data.address;
                this.ratting = data.ratting ? data.ratting : 0;
                this.totalRatting = data.totalRatting ? data.totalRatting : 2;
                this.dishPrice = data.dishPrice;
                this.time = data.time;
                this.cusine = data.cusine;
                const vid = localStorage.getItem('vid');
                console.log('id', vid, this.id);
                if (vid && vid !== this.id) {
                    this.dummy = [];
                    this.presentAlertConfirm();
                    return false;
                }
                this.getCates();
                this.getFoods();
            }
        }, error => {
            console.log(error);
            this.util.errorToast(this.util.translate('Something went wrong'));
        }).catch(error => {
            console.log(error);
            this.util.errorToast(this.util.translate('Something went wrong'));
        });
    }
    getCates() {
        this.api.getVenueCategories(this.id).then(cate => {
            console.log(cate);
            if (cate) {
                this.categories = cate;
            }
        }, error => {
            console.log(error);
            this.dummy = [];
            this.util.errorToast(this.util.translate('Something went wrong'));
        }).catch(error => {
            console.log(error);
            this.dummy = [];
            this.util.errorToast(this.util.translate('Something went wrong'));
        });
    }
    getFoods() {
        this.api.getFoods(this.id).then(foods => {
            console.log(foods);
            if (foods) {
                // if()
                this.dummy = [];
                this.foods = [];
                this.dummyFoods = [];
                foods.forEach(element => {
                    if (element && element.status === true) {
                        const info = {
                            cid: {
                                id: element.cid.id,
                            },
                            cover: element.cover,
                            desc: element.desc,
                            id: element.id,
                            name: element.name,
                            price: element.price,
                            ratting: element.ratting,
                            uid: element.uid,
                            veg: element.veg,
                            quantiy: 0,
                            size: element.size,
                            variations: element.variations,
                            totalRatting: element.totalRatting ? element.totalRatting : 0,
                            selectedItem: []
                        };
                        this.foods.push(info);
                        this.dummyFoods.push(info);
                        this.foodIds.push(element.id);
                    }
                });
                console.log('myfoods', this.foods);
                if (!this.foods.length || this.foods.length === 0) {
                    this.util.errorToast(this.util.translate('No Foods found'));
                    this.navCtrl.back();
                    return false;
                }
                this.changeStatus();
                this.checkCart();
            }
        }, error => {
            console.log(error);
            this.dummy = [];
            this.util.errorToast(this.util.translate('Something went wrong'));
        }).catch(error => {
            console.log(error);
            this.dummy = [];
            this.util.errorToast(this.util.translate('Something went wrong'));
        });
    }
    checkCart() {
        const userCart = localStorage.getItem('userCart');
        if (userCart && userCart !== 'null' && userCart !== undefined && userCart !== 'undefined') {
            const cart = JSON.parse(userCart);
            console.log('carrt', cart);
            console.log(this.foodIds);
            cart.forEach(element => {
                if (this.foodIds.includes(element.id)) {
                    const index = this.foods.findIndex(x => x.id === element.id);
                    console.log('index---<', index);
                    this.foods[index].quantiy = element.quantiy;
                    this.foods[index].selectedItem = element.selectedItem;
                }
            });
            this.calculate();
        }
    }
    back() {
        this.navCtrl.navigateRoot(['tabs']);
    }
    getCusine(cusine) {
        return cusine.join('-');
    }
    add(index) {
        this.api.checkAuth().then((user) => {
            if (user) {
                const vid = localStorage.getItem('vid');
                if (vid && vid !== this.id) {
                    this.presentAlertConfirm();
                    return false;
                }
                if (this.foods[index].variations && this.foods[index].variations.length) {
                    console.log('open modal');
                    this.openVariations(index);
                }
                else {
                    this.foods[index].quantiy = 1;
                    this.calculate();
                }
            }
            else {
                this.router.navigate(['login']);
            }
        }).catch(error => {
            console.log(error);
        });
    }
    statusChange() {
        console.log('status', this.veg);
        this.changeStatus();
    }
    calculate() {
        // this.dummy = [];
        // console.log('khaliiii', this.dummy);
        // console.log(this.foods);
        // let item = this.foods.filter(x => x.quantiy > 0);
        // console.log(item);
        // this.totalPrice = 0;
        // this.totalItem = 0;
        // item.forEach(element => {
        //   this.totalItem = this.totalItem + element.quantiy;
        //   this.totalPrice = this.totalPrice + (parseFloat(element.price) * parseInt(element.quantiy));
        // });
        // this.totalPrice = parseFloat(this.totalPrice).toFixed(2);
        // console.log('total item', this.totalItem);
        // if (this.totalItem === 0) {
        //   this.totalItem = 0;
        //   this.totalPrice = 0;
        // }
        this.dummy = [];
        console.log('khaliiii', this.dummy);
        console.log(this.foods);
        let item = this.foods.filter(x => x.quantiy > 0);
        this.foods.forEach(element => {
            if (element.quantiy === 0) {
                element.selectedItem = [];
            }
        });
        console.log('item=====>>', item);
        this.totalPrice = 0;
        this.totalItem = 0;
        this.cart = [];
        console.log('cart emplth', this.cart, item);
        item.forEach(element => {
            this.totalItem = this.totalItem + element.quantiy;
            console.log('itemsss----->>>', element);
            if (element && element.selectedItem && element.selectedItem.length > 0) {
                let subPrice = 0;
                element.selectedItem.forEach(subItems => {
                    subItems.item.forEach(realsItems => {
                        subPrice = subPrice + (realsItems.value);
                    });
                    subPrice = subPrice * subItems.total;
                });
                this.totalPrice = this.totalPrice + subPrice;
                // this.totalPrice = this.totalPrice + (subPrice * parseInt(element.quantiy));
            }
            else {
                this.totalPrice = this.totalPrice + (parseFloat(element.price) * parseInt(element.quantiy));
            }
            this.cart.push(element);
        });
        localStorage.removeItem('userCart');
        console.log('carrrrrrr---->>>', this.cart);
        localStorage.setItem('userCart', JSON.stringify(this.cart));
        this.totalPrice = parseFloat(this.totalPrice).toFixed(2);
        console.log('total item', this.totalItem);
        if (this.totalItem === 0) {
            this.totalItem = 0;
            this.totalPrice = 0;
        }
    }
    setData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const vid = localStorage.getItem('vid');
            console.log('leaving the planet', vid, this.id);
            console.log('total item', this.totalItem);
            if (vid && vid === this.id && this.totalPrice > 0) {
                localStorage.setItem('vid', this.id);
                yield localStorage.setItem('foods', JSON.stringify(this.foods));
                localStorage.setItem('categories', JSON.stringify(this.categories));
                localStorage.setItem('dummyItem', JSON.stringify(this.dummyFoods));
                localStorage.setItem('totalItem', this.totalItem);
                localStorage.setItem('totalPrice', this.totalPrice);
            }
            else if (!vid && this.totalItem > 0) {
                localStorage.setItem('vid', this.id);
                yield localStorage.setItem('foods', JSON.stringify(this.foods));
                localStorage.setItem('categories', JSON.stringify(this.categories));
                localStorage.setItem('dummyItem', JSON.stringify(this.dummyFoods));
                localStorage.setItem('totalItem', this.totalItem);
                localStorage.setItem('totalPrice', this.totalPrice);
            }
            else if (this.totalItem == 0) {
                this.totalItem = 0;
                this.totalPrice = 0;
            }
        });
    }
    ionViewWillLeave() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.setData();
        });
    }
    changeStatus() {
        this.foods = this.dummyFoods.filter(x => x.veg === this.veg);
    }
    // addQ(index) {
    //   this.foods[index].quantiy = this.foods[index].quantiy + 1;
    //   this.calculate();
    // }
    // removeQ(index) {
    //   if (this.foods[index].quantiy !== 0) {
    //     this.foods[index].quantiy = this.foods[index].quantiy - 1;
    //   } else {
    //     this.foods[index].quantiy = 0;
    //   }
    //   this.calculate();
    // }
    openVariations(index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _variations_variations_page__WEBPACK_IMPORTED_MODULE_1__["VariationsPage"],
                cssClass: 'custom_modal2',
                componentProps: {
                    name: this.name,
                    food: this.foods[index]
                }
            });
            modal.onDidDismiss().then((data) => {
                console.log('from variations', data.data);
                console.log('data.data', data.role);
                let isValid = false;
                if (data.role === 'new') {
                    this.foods[index].quantiy = 1;
                    const carts = {
                        item: data.data,
                        total: 1
                    };
                    this.foods[index].selectedItem.push(carts);
                    isValid = true;
                }
                else if (data.role === 'sameChoice') {
                    this.foods[index].selectedItem = data.data;
                    this.foods[index].quantiy = this.foods[index].selectedItem.length;
                    isValid = true;
                }
                else if (data.role === 'newCustom') {
                    const carts = {
                        item: data.data,
                        total: 1
                    };
                    this.foods[index].selectedItem.push(carts);
                    this.foods[index].quantiy = this.foods[index].quantiy + 1;
                    isValid = true;
                }
                else if (data.role === 'remove') {
                    console.log('number', data.data);
                    this.foods[index].quantiy = 0;
                    this.foods[index].selectedItem = [];
                    isValid = true;
                }
                else {
                    console.log('empy');
                }
                if (isValid) {
                    console.log('isValid', isValid);
                    this.calculate();
                }
            });
            return yield modal.present();
        });
    }
    addQ(index) {
        console.log('foooduieeeee===========>>', this.foods[index]);
        if (this.foods[index].variations && this.foods[index].variations.length) {
            this.openVariations(index);
        }
        else {
            this.foods[index].quantiy = this.foods[index].quantiy + 1;
            this.calculate();
        }
    }
    removeQ(index) {
        if (this.foods[index].quantiy !== 0) {
            if (this.foods[index].quantiy >= 1 && !this.foods[index].size) {
                this.foods[index].quantiy = this.foods[index].quantiy - 1;
            }
            else {
                this.openVariations(index);
            }
        }
        else {
            this.foods[index].quantiy = 0;
        }
        this.calculate();
    }
    presentAlertConfirm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: this.util.translate('Warning'),
                message: this.util.translate(`you already have item's in cart with different restaurant`),
                buttons: [
                    {
                        text: this.util.translate('Cancel'),
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: this.util.translate('Clear cart'),
                        handler: () => {
                            console.log('Confirm Okay');
                            localStorage.removeItem('vid');
                            this.dummy = Array(10);
                            localStorage.removeItem('categories');
                            localStorage.removeItem('dummyItem');
                            localStorage.removeItem('foods');
                            this.totalItem = 0;
                            this.totalPrice = 0;
                            this.getCates();
                            this.getFoods();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    viewCart() {
        console.log('viewCart');
        this.setData();
        this.navCtrl.navigateRoot(['tabs/tab3']);
    }
    presentPopover(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.categories.length <= 0) {
                return false;
            }
            const popover = yield this.popoverController.create({
                component: src_app_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"],
                event: ev,
                componentProps: { data: this.categories },
                mode: 'ios',
            });
            popover.onDidDismiss().then(data => {
                console.log(data.data);
                if (data && data.data) {
                    const yOffset = document.getElementById(data.data.id).offsetTop;
                    const yHOffset = document.getElementById(data.data.id).offsetHeight;
                    console.log(yOffset + ' : ' + yHOffset);
                    this.content.scrollToPoint(0, yOffset, 1000);
                }
            });
            yield popover.present();
        });
    }
    openDetails() {
        const navData = {
            queryParams: {
                id: this.id
            }
        };
        this.router.navigate(['rest-details'], navData);
    }
    getCurrency() {
        return this.util.getCurrecySymbol();
    }
};
CategoryPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('content', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CategoryPage.prototype, "content", void 0);
CategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-category',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category.page.scss */ "./src/app/pages/category/category.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], CategoryPage);



/***/ })

}]);
//# sourceMappingURL=pages-category-category-module-es2015.js.map