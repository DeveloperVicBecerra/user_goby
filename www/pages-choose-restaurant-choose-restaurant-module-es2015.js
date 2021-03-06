(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-choose-restaurant-choose-restaurant-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/choose-restaurant/choose-restaurant.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/choose-restaurant/choose-restaurant.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <div class=\"header_div\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button text=\"\" mode=\"md\"></ion-back-button>\n      </ion-buttons>\n      <ion-label class=\"head_lbl\">{{'Select Restaurant' | translate}}</ion-label>\n\n      <ion-searchbar [placeholder]=\"('Search by restaurant' | translate) || '&nbsp;'\" mode=\"ios\"\n        (ionChange)=\"onSearchChange($event)\" [debounce]=\"250\" showCancelButton=\"never\"></ion-searchbar>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <div class=\"card_div\" *ngFor=\"let item of restaurants\" (click)=\"goToAddReview(item)\">\n      <div class=\"resto_detail\">\n        <img [src]=\"item.cover\" class=\"back_image\" alt=\"\">\n        <!-- <div class=\"back_image\" [style.backgroundImage]=\"'url('+item.cover+')'\"></div> -->\n        <div style=\"padding-left: 20px;\">\n          <ion-label class=\"res_name\">{{item.name}}</ion-label>\n          <ion-label class=\"res_location\">{{item.address}}</ion-label>\n        </div>\n      </div>\n      <div class=\"line_div\"></div>\n    </div>\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/choose-restaurant/choose-restaurant-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/choose-restaurant/choose-restaurant-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ChooseRestaurantPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseRestaurantPageRoutingModule", function() { return ChooseRestaurantPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _choose_restaurant_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./choose-restaurant.page */ "./src/app/pages/choose-restaurant/choose-restaurant.page.ts");




const routes = [
    {
        path: '',
        component: _choose_restaurant_page__WEBPACK_IMPORTED_MODULE_3__["ChooseRestaurantPage"]
    }
];
let ChooseRestaurantPageRoutingModule = class ChooseRestaurantPageRoutingModule {
};
ChooseRestaurantPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChooseRestaurantPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/choose-restaurant/choose-restaurant.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/choose-restaurant/choose-restaurant.module.ts ***!
  \*********************************************************************/
/*! exports provided: ChooseRestaurantPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseRestaurantPageModule", function() { return ChooseRestaurantPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _choose_restaurant_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./choose-restaurant-routing.module */ "./src/app/pages/choose-restaurant/choose-restaurant-routing.module.ts");
/* harmony import */ var _choose_restaurant_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./choose-restaurant.page */ "./src/app/pages/choose-restaurant/choose-restaurant.page.ts");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/shared.module */ "./src/app/directives/shared.module.ts");








let ChooseRestaurantPageModule = class ChooseRestaurantPageModule {
};
ChooseRestaurantPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _choose_restaurant_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChooseRestaurantPageRoutingModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_choose_restaurant_page__WEBPACK_IMPORTED_MODULE_6__["ChooseRestaurantPage"]]
    })
], ChooseRestaurantPageModule);



/***/ }),

/***/ "./src/app/pages/choose-restaurant/choose-restaurant.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/choose-restaurant/choose-restaurant.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.header_div .head_lbl {\n  margin-left: 16px;\n  font-size: 18px;\n  font-weight: 600;\n}\n.header_div ion-searchbar {\n  margin-top: 15px;\n}\n.main_content_div {\n  width: 100%;\n  padding: 20px;\n}\n.main_content_div .resto_detail {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.main_content_div .resto_detail ion-label {\n  display: block;\n}\n.main_content_div .resto_detail .back_image {\n  height: 50px;\n  width: 50px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 5px;\n}\n.main_content_div .resto_detail .res_name {\n  font-weight: 600;\n}\n.main_content_div .resto_detail .res_location {\n  color: lightgray;\n  font-size: 14px;\n}\n.main_content_div .line_div {\n  width: 100%;\n  height: 1px;\n  background: lightgray;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9WaWNCZWNlcnJhL0Rvd25sb2Fkcy9pb25pYzVGb29kQXBwRnVsbC9BcHBfY29kZS9Vc2VyQXBwL3NyYy9hcHAvcGFnZXMvY2hvb3NlLXJlc3RhdXJhbnQvY2hvb3NlLXJlc3RhdXJhbnQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jaG9vc2UtcmVzdGF1cmFudC9jaG9vc2UtcmVzdGF1cmFudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNDSjtBREFJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNFUjtBRENJO0VBQ0ksZ0JBQUE7QUNDUjtBREdBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNBSjtBREVJO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0FSO0FERVE7RUFDSSxjQUFBO0FDQVo7QURHUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUNEWjtBRElRO0VBQ0UsZ0JBQUE7QUNGVjtBRElRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDRlo7QURLSTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDSFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaG9vc2UtcmVzdGF1cmFudC9jaG9vc2UtcmVzdGF1cmFudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyX2RpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLmhlYWRfbGJse1xuICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cblxuICAgIGlvbi1zZWFyY2hiYXJ7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgfVxufVxuXG4ubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgLnJlc3RvX2RldGFpbHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLmJhY2tfaW1hZ2V7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnJlc19uYW1le1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7ICBcbiAgICAgICAgfSBcbiAgICAgICAgLnJlc19sb2NhdGlvbntcbiAgICAgICAgICAgIGNvbG9yOiBsaWdodGdyYXk7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmxpbmVfZGl2e1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG59IiwiLmhlYWRlcl9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmhlYWRlcl9kaXYgLmhlYWRfbGJsIHtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5oZWFkZXJfZGl2IGlvbi1zZWFyY2hiYXIge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnJlc3RvX2RldGFpbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmVzdG9fZGV0YWlsIGlvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1haW5fY29udGVudF9kaXYgLnJlc3RvX2RldGFpbCAuYmFja19pbWFnZSB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnJlc3RvX2RldGFpbCAucmVzX25hbWUge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLm1haW5fY29udGVudF9kaXYgLnJlc3RvX2RldGFpbCAucmVzX2xvY2F0aW9uIHtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxpbmVfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/choose-restaurant/choose-restaurant.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/choose-restaurant/choose-restaurant.page.ts ***!
  \*******************************************************************/
/*! exports provided: ChooseRestaurantPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseRestaurantPage", function() { return ChooseRestaurantPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");




let ChooseRestaurantPage = class ChooseRestaurantPage {
    constructor(router, api) {
        this.router = router;
        this.api = api;
        this.restaurants = [];
        this.dummyRest = [];
        this.resetChanges = () => {
            this.restaurants = this.dummyRest;
        };
    }
    ngOnInit() {
        this.api.getVenues().then((data) => {
            console.log('dataa', data);
            if (data) {
                this.restaurants = [];
                this.dummyRest = [];
                data.forEach(element => {
                    if (element && element.isClose === false) {
                        this.restaurants.push(element);
                        this.dummyRest.push(element);
                    }
                });
            }
        }, error => {
            console.log(error);
        }).catch(error => {
            console.log(error);
        });
    }
    goToAddReview(item) {
        const navData = {
            queryParams: {
                id: item.id
            }
        };
        this.router.navigate(['/add-review'], navData);
    }
    setFilteredItems() {
        console.log('clear');
        this.restaurants = [];
        this.restaurants = this.dummyRest;
    }
    filterItems(searchTerm) {
        return this.restaurants.filter((item) => {
            return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    }
    onSearchChange(event) {
        this.resetChanges();
        this.restaurants = this.filterItems(event.detail.value);
    }
};
ChooseRestaurantPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"] }
];
ChooseRestaurantPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-choose-restaurant',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./choose-restaurant.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/choose-restaurant/choose-restaurant.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./choose-restaurant.page.scss */ "./src/app/pages/choose-restaurant/choose-restaurant.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"]])
], ChooseRestaurantPage);



/***/ })

}]);
//# sourceMappingURL=pages-choose-restaurant-choose-restaurant-module-es2015.js.map