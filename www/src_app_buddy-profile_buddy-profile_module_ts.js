(self["webpackChunkmyCircle"] = self["webpackChunkmyCircle"] || []).push([["src_app_buddy-profile_buddy-profile_module_ts"],{

/***/ 9548:
/*!***************************************************************!*\
  !*** ./src/app/buddy-profile/buddy-profile-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuddyProfilePageRoutingModule": () => (/* binding */ BuddyProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _buddy_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buddy-profile.page */ 544);




const routes = [
    {
        path: '',
        component: _buddy_profile_page__WEBPACK_IMPORTED_MODULE_0__.BuddyProfilePage
    }
];
let BuddyProfilePageRoutingModule = class BuddyProfilePageRoutingModule {
};
BuddyProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BuddyProfilePageRoutingModule);



/***/ }),

/***/ 4067:
/*!*******************************************************!*\
  !*** ./src/app/buddy-profile/buddy-profile.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuddyProfilePageModule": () => (/* binding */ BuddyProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _buddy_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buddy-profile-routing.module */ 9548);
/* harmony import */ var _buddy_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buddy-profile.page */ 544);







let BuddyProfilePageModule = class BuddyProfilePageModule {
};
BuddyProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _buddy_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.BuddyProfilePageRoutingModule
        ],
        declarations: [_buddy_profile_page__WEBPACK_IMPORTED_MODULE_1__.BuddyProfilePage]
    })
], BuddyProfilePageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_buddy-profile_buddy-profile_module_ts.js.map