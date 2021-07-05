(self["webpackChunkmyCircle"] = self["webpackChunkmyCircle"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 2580:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 2501);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 2501);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1-routing.module */ 2580);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ 3482);








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _tab1_routing_module__WEBPACK_IMPORTED_MODULE_1__.Tab1PageRoutingModule],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page, _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent],
    })
], Tab1PageModule);



/***/ }),

/***/ 2501:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab1.page.html */ 5683);
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss */ 9474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _buddy_profile_buddy_profile_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buddy-profile/buddy-profile.page */ 544);
/* harmony import */ var _services_app_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/app-http.service */ 6225);
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ 7160);








let Tab1Page = class Tab1Page {
    constructor(httpServices, modalController, qrScanner) {
        this.httpServices = httpServices;
        this.modalController = modalController;
        this.qrScanner = qrScanner;
        this.isErrorInAPIres = false;
        this.page = 0;
    }
    ngOnInit() {
        this.page = 0;
        this.userListToDisplay = new Array();
        this.httpServices.getBuddiesList(this.page).subscribe((data) => {
            this.userListToDisplay = data;
            console.log('USER--', this.userListToDisplay);
        }, (err) => {
            this.isErrorInAPIres = true;
        });
    }
    openProfileView(buddy) {
        this.httpServices.getFullProfileDetail(buddy.id).subscribe(info => {
            this.openModal(info);
        });
    }
    openModal(buddy) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _buddy_profile_buddy_profile_page__WEBPACK_IMPORTED_MODULE_2__.BuddyProfilePage,
                cssClass: 'buddyProfileClass',
                swipeToClose: true,
                componentProps: {
                    userProfileDetail: buddy
                }
            });
            return yield modal.present();
        });
    }
    loadData(event) {
        console.log('evem', event);
        this.page = this.page + 1;
        this.httpServices.getBuddiesList(this.page).subscribe((data) => {
            this.userListToDisplay = this.userListToDisplay.concat(data);
            console.log('USER12--', this.userListToDisplay);
            this.infiniteScroll.complete();
        }, (err) => {
            this.isErrorInAPIres = true;
            this.infiniteScroll.complete();
        });
    }
    openScannerToSearchBuddy() {
        this.qrScanner.prepare()
            .then((status) => {
            console.log("PREPARED_____", status);
            if (status.authorized) {
                // camera permission was granted
                // start scanning
                let scanSub = this.qrScanner.scan().subscribe((text) => {
                    console.log('Scanned something', text);
                    this.qrScanner.hide(); // hide camera preview
                    window.document.querySelector('ion-app').style.display = 'block';
                    scanSub.unsubscribe(); // stop scanning
                }, err => {
                    console.log('errr', err);
                });
                window.document.querySelector('ion-app').style.display = 'none';
                this.qrScanner.show();
            }
            else if (status.denied) {
                // camera permission was permanently denied
                // you must use QRScanner.openSettings() method to guide the user to the settings page
                // then they can grant the permission from there
            }
            else {
                // permission was denied, but not permanently. You can ask for permission again at a later time.
            }
        })
            .catch((e) => console.log('Error is', e));
    }
};
Tab1Page.ctorParameters = () => [
    { type: _services_app_http_service__WEBPACK_IMPORTED_MODULE_3__.AppHttpService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__.QRScanner }
];
Tab1Page.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonInfiniteScroll,] }]
};
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab1Page);



/***/ }),

/***/ 9474:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".user-img {\n  width: 100%;\n  height: auto;\n}\n\n.email {\n  font-size: 0.5rem;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.name {\n  font-size: 1rem;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.mr {\n  background-image: linear-gradient(135deg, #ABDCFF 10%, #0396FF 100%);\n}\n\n.ms {\n  background-image: linear-gradient(135deg, #F6CEEC 10%, #D939CD 100%);\n}\n\n.view-profile {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBR0o7O0FBREE7RUFDSSxvRUFBQTtBQUlKOztBQUZBO0VBQ0ksb0VBQUE7QUFLSjs7QUFIQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQU1KIiwiZmlsZSI6InRhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbn1cbi5lbWFpbHtcbiAgICBmb250LXNpemU6IDAuNXJlbTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubmFtZXtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm1ye1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCggMTM1ZGVnLCAjQUJEQ0ZGIDEwJSwgIzAzOTZGRiAxMDAlKTtcbn1cbi5tc3tcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIDEzNWRlZywgI0Y2Q0VFQyAxMCUsICNEOTM5Q0QgMTAwJSk7XG59XG4udmlldy1wcm9maWxle1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ 5683:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header [isOuterHeader]=\"true\"></app-header>\n<ion-content [fullscreen]=\"true\">\n  <app-header [isOuterHeader]=\"false\"></app-header>\n  <ion-row>\n    <ion-col\n      *ngFor=\"let buddy of userListToDisplay\"\n      size=\"6\"\n      size-sm=\"6\"\n      size-md=\"4\"\n    >\n      <ion-card >\n        <img [src]=\"buddy.picture\" class=\"user-img\" />\n        <ion-card-header>\n          <ion-badge [class]=\"buddy.title === 'mr'?'mr':'ms'\"\n            >{{buddy.title}}</ion-badge\n          >\n          <ion-card-title class=\"name\">\n            {{buddy.firstName}} {{buddy.lastName}}\n          </ion-card-title>\n          <ion-card-subtitle class=\"email\">{{buddy.email}}</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-chip color=\"primary\" class=\"view-profile\" (click)=\"openProfileView(buddy)\">\n            <ion-label>Full Profile</ion-label>\n          </ion-chip>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  <ion-infinite-scroll\n    threshold=\"50px\"\n    (ionInfinite)=\"loadData($event)\"\n    position=\"bottom\"\n  >\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\"\n    >\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"openScannerToSearchBuddy()\">\n      <ion-icon name=\"qr-code\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map