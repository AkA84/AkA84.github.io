(self["webpackChunkace"] = self["webpackChunkace"] || []).push([["main"],{

/***/ 9449:
/*!************************************************!*\
  !*** ./apps/ace/src/app/app-routing.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);



const appName = 'Automated Cargo Execution (ACE)';
const routes = [
    {
        path: '',
        data: {
            name: `${appName}`
        },
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-libs_shared_deadlines_feature_src_index_ts"), __webpack_require__.e("default-libs_shared_location-and-network_feature_src_index_ts"), __webpack_require__.e("default-libs_notes_feature_src_index_ts-libs_root_ace-port-call_src_lib_state_port-call_facad-b60850"), __webpack_require__.e("libs_search_feature_src_index_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @ace/search/feature */ 89642)).then((m) => m.SearchFeatureModule)
    },
    {
        path: 'port-calls',
        data: {
            name: `${appName} - Port Call Details`
        },
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-libs_shared_deadlines_feature_src_index_ts"), __webpack_require__.e("default-libs_notes_feature_src_index_ts-libs_root_ace-port-call_src_lib_state_port-call_facad-b60850"), __webpack_require__.e("apps_ace_src_app_modules_port-call-details_port-call-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/port-call-details/port-call-details.module */ 16915)).then((m) => m.PortCallDetailsModule)
    },
    {
        path: 'exclusion-settings-rules',
        data: {
            name: `${appName} - Exclusion Settings Rules`
        },
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-libs_shared_deadlines_feature_src_index_ts"), __webpack_require__.e("default-libs_shared_location-and-network_feature_src_index_ts"), __webpack_require__.e("libs_exclusion-settings-rules_feature_src_index_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @ace/exclusion-settings-rules/feature */ 54458)).then((m) => m.ExclusionSettingsRulesFeatureModule)
    },
    {
        path: 'what-to-whom-rules',
        data: {
            name: `${appName} - What To Whom Rules`
        },
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-libs_shared_deadlines_feature_src_index_ts"), __webpack_require__.e("default-libs_shared_location-and-network_feature_src_index_ts"), __webpack_require__.e("libs_what-to-whom-rules_feature_src_index_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @ace/what-to-whom-rules/feature */ 21482)).then((m) => m.WhatToWhomRulesFeatureModule)
    },
    {
        path: 'report-issue',
        data: {
            name: `${appName} - Report Issue`
        },
        loadChildren: () => __webpack_require__.e(/*! import() */ "libs_shared_report-issue-page_src_index_ts").then(__webpack_require__.bind(__webpack_require__, /*! @ace/report-issue-page */ 13613)).then((m) => m.ReportIssuePageModule)
    },
    {
        path: '404',
        loadChildren: () => __webpack_require__.e(/*! import() */ "node_modules_dnc_page-not-found_fesm2020_dnc-page-not-found_mjs").then(__webpack_require__.bind(__webpack_require__, /*! @dnc/page-not-found */ 54211)).then((m) => m.PageNotFoundModule)
    },
    { path: '**', redirectTo: '404' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 68308:
/*!****************************************!*\
  !*** ./apps/ace/src/app/app.module.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var _dnc_ngrx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @dnc/ngrx */ 45294);
/* harmony import */ var _dnc_authentication__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @dnc/authentication */ 90974);
/* harmony import */ var _dnc_configuration__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @dnc/configuration */ 45132);
/* harmony import */ var _automated_cargo_web_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @automated-cargo/web/core */ 51388);
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers */ 78995);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 9449);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _automated_cargo_root_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @automated-cargo/root/core */ 20312);
/* harmony import */ var _automated_cargo_root_core_kpi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @automated-cargo/root/core-kpi */ 15488);
/* harmony import */ var _dnc_notifications__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @dnc/notifications */ 18708);
/* harmony import */ var _ace_shared_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ace/shared/router */ 4847);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/layout */ 83278);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _containers_app_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/app/app.component */ 80214);


















const MATERIAL_MODULES = [_angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule];
const DYNAMIC_NET_MODULES = [_dnc_notifications__WEBPACK_IMPORTED_MODULE_10__.NotificationModule, _dnc_ngrx__WEBPACK_IMPORTED_MODULE_11__.UserStoreModule, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__.LayoutModule];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_containers__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [_dnc_authentication__WEBPACK_IMPORTED_MODULE_14__.authInterceptorProvider, _dnc_configuration__WEBPACK_IMPORTED_MODULE_15__.pathInterceptorProvider], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule, MATERIAL_MODULES, DYNAMIC_NET_MODULES, _automated_cargo_root_core__WEBPACK_IMPORTED_MODULE_3__.RootCoreModule,
        _automated_cargo_web_core__WEBPACK_IMPORTED_MODULE_0__.WebCoreModule,
        _ace_shared_router__WEBPACK_IMPORTED_MODULE_5__.SharedRouterModule,
        _automated_cargo_root_core_kpi__WEBPACK_IMPORTED_MODULE_4__.RootCoreKpiModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_containers_app_app_component__WEBPACK_IMPORTED_MODULE_6__.AppComponent], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule, _dnc_notifications__WEBPACK_IMPORTED_MODULE_10__.NotificationModule, _dnc_ngrx__WEBPACK_IMPORTED_MODULE_11__.UserStoreModule, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__.LayoutModule, _automated_cargo_root_core__WEBPACK_IMPORTED_MODULE_3__.RootCoreModule,
        _automated_cargo_web_core__WEBPACK_IMPORTED_MODULE_0__.WebCoreModule,
        _ace_shared_router__WEBPACK_IMPORTED_MODULE_5__.SharedRouterModule,
        _automated_cargo_root_core_kpi__WEBPACK_IMPORTED_MODULE_4__.RootCoreKpiModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule] }); })();


/***/ }),

/***/ 80214:
/*!**********************************************************!*\
  !*** ./apps/ace/src/app/containers/app/app.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _dnc_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dnc/notifications */ 18708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _dnc_ngrx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dnc/ngrx */ 45294);
/* harmony import */ var _dnc_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dnc/configuration */ 45132);
/* harmony import */ var _libs_web_core_src_lib_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../libs/web/core/src/lib/components/layout/layout.component */ 78959);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);









class AppComponent {
    constructor(userFacade, configuration) {
        this.userFacade = userFacade;
        this.configuration = configuration;
        this.title = 'ace';
        this.product = _dnc_notifications__WEBPACK_IMPORTED_MODULE_1__.Product.Ace;
        this.notificationsPath = this.configuration.apiBasePaths['notifications'];
        this.healthApis = this.configuration.apiBasePaths['health'];
    }
    ngOnInit() {
        this.getUserRightsIntoNgRxStore();
    }
    getUserRightsIntoNgRxStore() {
        const userRightsApiPath = this.configuration.apiBasePaths['userRights'];
        this.userFacade.setUserRightsApiPath(userRightsApiPath);
        this.userFacade.getUser();
        this.userFacade.getUserCount();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_dnc_ngrx__WEBPACK_IMPORTED_MODULE_3__.UserFacade), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_dnc_configuration__WEBPACK_IMPORTED_MODULE_4__.Configuration)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["automated-cargo-root"]], decls: 4, vars: 4, consts: [["slot", "notifications-banner", 3, "product", "path", "healthApi", "enableDismiss"], ["outlet", "outlet"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "dn-notifications", 0)(2, "router-outlet", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("product", ctx.product)("path", ctx.notificationsPath)("healthApi", ctx.healthApis)("enableDismiss", true);
    } }, dependencies: [_dnc_notifications__WEBPACK_IMPORTED_MODULE_1__.NotificationsComponent, _libs_web_core_src_lib_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */"] });


/***/ }),

/***/ 78995:
/*!**********************************************!*\
  !*** ./apps/ace/src/app/containers/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* reexport safe */ _app_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent),
/* harmony export */   "CONTAINERS": () => (/* binding */ CONTAINERS)
/* harmony export */ });
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.component */ 80214);

const CONTAINERS = [_app_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent];



/***/ }),

/***/ 67882:
/*!**************************************************!*\
  !*** ./apps/ace/src/environments/environment.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    configurationPath: 'assets/config/config.json'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 55150:
/*!******************************!*\
  !*** ./apps/ace/src/main.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_alessandroverdura_GitHub_ace_ui_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _dnc_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dnc/platform */ 2380);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 68308);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 67882);






if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}

(0,_Users_alessandroverdura_GitHub_ace_ui_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
  const platform = yield (0,_dnc_platform__WEBPACK_IMPORTED_MODULE_4__.initializePlatform)({
    configurationPath: _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.configurationPath
  }); // eslint-disable-next-line no-console

  platform.bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule).catch(err => console.error(err));
})();

/***/ }),

/***/ 15488:
/*!*****************************************!*\
  !*** ./libs/root/core-kpi/src/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KpiFacade": () => (/* reexport safe */ _lib_state_kpi_facade__WEBPACK_IMPORTED_MODULE_1__.KpiFacade),
/* harmony export */   "RootCoreKpiModule": () => (/* reexport safe */ _lib_root_core_kpi_module__WEBPACK_IMPORTED_MODULE_2__.RootCoreKpiModule),
/* harmony export */   "onUsed": () => (/* reexport safe */ _lib_state_kpi_actions__WEBPACK_IMPORTED_MODULE_0__.onUsed)
/* harmony export */ });
/* harmony import */ var _lib_state_kpi_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/+state/kpi.actions */ 86592);
/* harmony import */ var _lib_state_kpi_facade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/+state/kpi.facade */ 33513);
/* harmony import */ var _lib_root_core_kpi_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/root-core-kpi.module */ 77962);





/***/ }),

/***/ 86592:
/*!**********************************************************!*\
  !*** ./libs/root/core-kpi/src/lib/+state/kpi.actions.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onUsed": () => (/* binding */ onUsed)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 23488);

/**
 * Dispatched upon application usage, such as a search or opening detail pages.
 */
const onUsed = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Kpi] onUsed');


/***/ }),

/***/ 18771:
/*!**********************************************************!*\
  !*** ./libs/root/core-kpi/src/lib/+state/kpi.effects.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KpiEffects": () => (/* binding */ KpiEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var _kpi_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kpi.actions */ 86592);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 19193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _dnc_kpi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @dnc/kpi */ 21298);
/* harmony import */ var _dnc_ngrx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @dnc/ngrx */ 45294);










class KpiEffects {
    constructor(actions$, kpiService, userFacade) {
        this.actions$ = actions$;
        this.kpiService = kpiService;
        this.userFacade = userFacade;
        this.onUsed$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.combineLatest)([
            this.userFacade.userCountMap$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)((userCountMap) => userCountMap.total > 0)),
            this.userFacade.maerskData$,
            this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_kpi_actions__WEBPACK_IMPORTED_MODULE_0__.onUsed))
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(([userCountMap, { userLoc, userJobRole }]) => this.kpiService.trackRoleBasedKpiEvent({
            eventName: 'ace_used',
            requiredRoles: ['Cargo'],
            userCountMap,
            userLoc,
            userJobRole
        }))), { dispatch: false });
    }
}
KpiEffects.ɵfac = function KpiEffects_Factory(t) { return new (t || KpiEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_dnc_kpi__WEBPACK_IMPORTED_MODULE_6__.KpiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_dnc_ngrx__WEBPACK_IMPORTED_MODULE_7__.UserFacade)); };
KpiEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: KpiEffects, factory: KpiEffects.ɵfac });


/***/ }),

/***/ 33513:
/*!*********************************************************!*\
  !*** ./libs/root/core-kpi/src/lib/+state/kpi.facade.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KpiFacade": () => (/* binding */ KpiFacade)
/* harmony export */ });
/* harmony import */ var _kpi_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kpi.actions */ 86592);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 23488);




class KpiFacade {
    constructor(store) {
        this.store = store;
    }
    /**
     * Dispatches onUsed action to uniquely track the application usage.
     */
    onUsed() {
        this.store.dispatch(_kpi_actions__WEBPACK_IMPORTED_MODULE_0__.onUsed());
    }
}
KpiFacade.ɵfac = function KpiFacade_Factory(t) { return new (t || KpiFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store)); };
KpiFacade.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: KpiFacade, factory: KpiFacade.ɵfac });


/***/ }),

/***/ 77962:
/*!************************************************************!*\
  !*** ./libs/root/core-kpi/src/lib/root-core-kpi.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RootCoreKpiModule": () => (/* binding */ RootCoreKpiModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _state_kpi_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./+state/kpi.effects */ 18771);
/* harmony import */ var _state_kpi_facade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./+state/kpi.facade */ 33513);
/* harmony import */ var _dnc_kpi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dnc/kpi */ 21298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class RootCoreKpiModule {
}
RootCoreKpiModule.ɵfac = function RootCoreKpiModule_Factory(t) { return new (t || RootCoreKpiModule)(); };
RootCoreKpiModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: RootCoreKpiModule });
RootCoreKpiModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [_state_kpi_facade__WEBPACK_IMPORTED_MODULE_1__.KpiFacade], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _dnc_kpi__WEBPACK_IMPORTED_MODULE_4__.KpiModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.EffectsModule.forFeature([_state_kpi_effects__WEBPACK_IMPORTED_MODULE_0__.KpiEffects])] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RootCoreKpiModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _dnc_kpi__WEBPACK_IMPORTED_MODULE_4__.KpiModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.EffectsFeatureModule] }); })();


/***/ }),

/***/ 20312:
/*!*************************************!*\
  !*** ./libs/root/core/src/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonErrorHandlerService": () => (/* reexport safe */ _lib_error_handler__WEBPACK_IMPORTED_MODULE_3__.CommonErrorHandlerService),
/* harmony export */   "DateService": () => (/* reexport safe */ _lib_services__WEBPACK_IMPORTED_MODULE_4__.DateService),
/* harmony export */   "LogService": () => (/* reexport safe */ _lib_services__WEBPACK_IMPORTED_MODULE_4__.LogService),
/* harmony export */   "RootCoreModule": () => (/* reexport safe */ _lib_root_core_module__WEBPACK_IMPORTED_MODULE_0__.RootCoreModule),
/* harmony export */   "SERVICES": () => (/* reexport safe */ _lib_services__WEBPACK_IMPORTED_MODULE_4__.SERVICES),
/* harmony export */   "environmentSettingsToken": () => (/* reexport safe */ _lib_tokens__WEBPACK_IMPORTED_MODULE_2__.environmentSettingsToken),
/* harmony export */   "failure": () => (/* reexport safe */ _lib_error_handler__WEBPACK_IMPORTED_MODULE_3__.failure)
/* harmony export */ });
/* harmony import */ var _lib_root_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/root-core.module */ 75205);
/* harmony import */ var _lib_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/models */ 54533);
/* harmony import */ var _lib_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/tokens */ 29708);
/* harmony import */ var _lib_error_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/error-handler */ 77373);
/* harmony import */ var _lib_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/services */ 39962);







/***/ }),

/***/ 91780:
/*!************************************************************!*\
  !*** ./libs/root/core/src/lib/environments/environment.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 1792:
/*!******************************************************************************!*\
  !*** ./libs/root/core/src/lib/error-handler/+state/error-handler.actions.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "failure": () => (/* binding */ failure)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 23488);

/**
 * Dispatched in case of a failure.
 */
const failure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] App Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());


/***/ }),

/***/ 71426:
/*!******************************************************************************!*\
  !*** ./libs/root/core/src/lib/error-handler/+state/error-handler.effects.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorHandlerEffects": () => (/* binding */ ErrorHandlerEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var _error_handler_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-handler.actions */ 1792);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services */ 39962);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);







class ErrorHandlerEffects {
    constructor(actions$, logService) {
        this.actions$ = actions$;
        this.logService = logService;
        this.failure$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_error_handler_actions__WEBPACK_IMPORTED_MODULE_0__.failure), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(({ error }) => error), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((error) => this.logService.error(error))), {
            dispatch: false
        });
    }
}
ErrorHandlerEffects.ɵfac = function ErrorHandlerEffects_Factory(t) { return new (t || ErrorHandlerEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_1__.LogService)); };
ErrorHandlerEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ErrorHandlerEffects, factory: ErrorHandlerEffects.ɵfac });


/***/ }),

/***/ 55006:
/*!**************************************************************!*\
  !*** ./libs/root/core/src/lib/error-handler/+state/index.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "failure": () => (/* reexport safe */ _error_handler_actions__WEBPACK_IMPORTED_MODULE_0__.failure)
/* harmony export */ });
/* harmony import */ var _error_handler_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-handler.actions */ 1792);



/***/ }),

/***/ 77373:
/*!*******************************************************!*\
  !*** ./libs/root/core/src/lib/error-handler/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonErrorHandlerService": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_0__.CommonErrorHandlerService),
/* harmony export */   "failure": () => (/* reexport safe */ _state__WEBPACK_IMPORTED_MODULE_1__.failure)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ 5561);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./+state */ 55006);




/***/ }),

/***/ 16351:
/*!***************************************************************************************!*\
  !*** ./libs/root/core/src/lib/error-handler/services/common-error-handler.service.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonErrorHandlerService": () => (/* binding */ CommonErrorHandlerService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ 39962);




/**
 * Represents a class for a common error handler in the Angular app.
 */
class CommonErrorHandlerService extends _angular_core__WEBPACK_IMPORTED_MODULE_1__.ErrorHandler {
    /**
     * Creates a new instance of CommonErrorHandlerService type.
     * @param logService The log service.
     */
    constructor(logService) {
        super();
        this.logService = logService;
    }
    /**
     * Hanldes errors.
     * @param error The error.
     */
    handleError(error) {
        this.logService.error(error);
        super.handleError(error);
    }
}
CommonErrorHandlerService.ɵfac = function CommonErrorHandlerService_Factory(t) { return new (t || CommonErrorHandlerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_0__.LogService)); };
CommonErrorHandlerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CommonErrorHandlerService, factory: CommonErrorHandlerService.ɵfac });


/***/ }),

/***/ 5561:
/*!****************************************************************!*\
  !*** ./libs/root/core/src/lib/error-handler/services/index.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonErrorHandlerService": () => (/* reexport safe */ _common_error_handler_service__WEBPACK_IMPORTED_MODULE_0__.CommonErrorHandlerService)
/* harmony export */ });
/* harmony import */ var _common_error_handler_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common-error-handler.service */ 16351);



/***/ }),

/***/ 38767:
/*!********************************************************************!*\
  !*** ./libs/root/core/src/lib/models/environment-configuration.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 54533:
/*!************************************************!*\
  !*** ./libs/root/core/src/lib/models/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _environment_configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment-configuration */ 38767);
/* harmony import */ var _range_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./range.model */ 16456);




/***/ }),

/***/ 16456:
/*!******************************************************!*\
  !*** ./libs/root/core/src/lib/models/range.model.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 75205:
/*!****************************************************!*\
  !*** ./libs/root/core/src/lib/root-core.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RootCoreModule": () => (/* binding */ RootCoreModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _nrwl_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nrwl/angular */ 89027);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store-devtools */ 55242);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environments/environment */ 91780);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ 39962);
/* harmony import */ var _error_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-handler */ 77373);
/* harmony import */ var _error_handler_state_error_handler_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-handler/+state/error-handler.effects */ 71426);















/**
 * DEBUGGING
 */
_services__WEBPACK_IMPORTED_MODULE_1__.LogService.isDebugMode = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production;
class RootCoreModule {
}
RootCoreModule.ɵfac = function RootCoreModule_Factory(t) { return new (t || RootCoreModule)(); };
RootCoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: RootCoreModule });
RootCoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        [..._services__WEBPACK_IMPORTED_MODULE_1__.SERVICES],
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ErrorHandler,
            useClass: _error_handler__WEBPACK_IMPORTED_MODULE_2__.CommonErrorHandlerService
        }
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _nrwl_angular__WEBPACK_IMPORTED_MODULE_6__.NxModule.forRoot(),
        _ngrx_store__WEBPACK_IMPORTED_MODULE_7__.StoreModule.forRoot({}, {
            metaReducers: [],
            runtimeChecks: {
                strictActionImmutability: true,
                strictStateImmutability: true
            }
        }),
        _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.EffectsModule.forRoot([]),
        _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.EffectsModule.forFeature([_error_handler_state_error_handler_effects__WEBPACK_IMPORTED_MODULE_3__.ErrorHandlerEffects]),
        !_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__.StoreDevtoolsModule.instrument() : [], _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](RootCoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _nrwl_angular__WEBPACK_IMPORTED_MODULE_6__.NxModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_7__.StoreRootModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.EffectsRootModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.EffectsFeatureModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__.StoreDevtoolsModule], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule] }); })();


/***/ }),

/***/ 59682:
/*!*********************************************************!*\
  !*** ./libs/root/core/src/lib/services/date.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateService": () => (/* binding */ DateService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class DateService {
    getDateInDays(date, n) {
        const newDate = new Date(date.setDate(date.getDate() + n));
        newDate.setHours(0, 0, 0, 0);
        return newDate;
    }
}
DateService.ɵfac = function DateService_Factory(t) { return new (t || DateService)(); };
DateService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DateService, factory: DateService.ɵfac });


/***/ }),

/***/ 39962:
/*!**************************************************!*\
  !*** ./libs/root/core/src/lib/services/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateService": () => (/* reexport safe */ _date_service__WEBPACK_IMPORTED_MODULE_1__.DateService),
/* harmony export */   "LogService": () => (/* reexport safe */ _log_service__WEBPACK_IMPORTED_MODULE_0__.LogService),
/* harmony export */   "SERVICES": () => (/* binding */ SERVICES)
/* harmony export */ });
/* harmony import */ var _log_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log.service */ 7668);
/* harmony import */ var _date_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date.service */ 59682);


const SERVICES = [_log_service__WEBPACK_IMPORTED_MODULE_0__.LogService, _date_service__WEBPACK_IMPORTED_MODULE_1__.DateService];




/***/ }),

/***/ 7668:
/*!********************************************************!*\
  !*** ./libs/root/core/src/lib/services/log.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogService": () => (/* binding */ LogService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _dnc_telemetry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dnc/telemetry */ 95922);



/**
 * Represents an object for error logging and measuring the application metrics.
 */
class LogService {
    /**
     * Creates new instance of LogService type.
     * @param aiService The ApplicationInsightsService instance.
     */
    constructor(aiService) {
        this.aiService = aiService;
    }
    /**
     * Logs errors messages.
     * @param error The errors.
     */
    error(error) {
        if (!LogService.isDebugMode) {
            this.aiService.trackException(error);
        }
    }
    /**
     * Tracks the messages with the provided type.
     * @param type The type of messages.
     * @param messages The messages to log.
     */
    trackEvent(type, ...messages) {
        if (!LogService.isDebugMode) {
            this.aiService.trackEvent(type, { body: messages.join('; ') });
        }
    }
}
LogService.ɵfac = function LogService_Factory(t) { return new (t || LogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_dnc_telemetry__WEBPACK_IMPORTED_MODULE_1__.ApplicationInsightsService)); };
LogService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LogService, factory: LogService.ɵfac });


/***/ }),

/***/ 98961:
/*!*********************************************************************!*\
  !*** ./libs/root/core/src/lib/tokens/environment-settings.token.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environmentSettingsToken": () => (/* binding */ environmentSettingsToken)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

/**
 * The injectable token for environment settings.
 * This token would have a different value per project.
 */
const environmentSettingsToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('EnvironmentSettings');


/***/ }),

/***/ 29708:
/*!************************************************!*\
  !*** ./libs/root/core/src/lib/tokens/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environmentSettingsToken": () => (/* reexport safe */ _environment_settings_token__WEBPACK_IMPORTED_MODULE_0__.environmentSettingsToken)
/* harmony export */ });
/* harmony import */ var _environment_settings_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment-settings.token */ 98961);



/***/ }),

/***/ 4847:
/*!*****************************************!*\
  !*** ./libs/shared/router/src/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTER_FEATURE_KEY": () => (/* reexport safe */ _lib_core_state_router_reducer__WEBPACK_IMPORTED_MODULE_2__.ROUTER_FEATURE_KEY),
/* harmony export */   "RouterFacade": () => (/* reexport safe */ _lib_application_router_facade__WEBPACK_IMPORTED_MODULE_1__.RouterFacade),
/* harmony export */   "SharedRouterModule": () => (/* reexport safe */ _lib_shared_router_module__WEBPACK_IMPORTED_MODULE_0__.SharedRouterModule),
/* harmony export */   "getRouterParams": () => (/* reexport safe */ _lib_core_state_router_selectors__WEBPACK_IMPORTED_MODULE_3__.getRouterParams),
/* harmony export */   "getRouterPath": () => (/* reexport safe */ _lib_core_state_router_selectors__WEBPACK_IMPORTED_MODULE_3__.getRouterPath),
/* harmony export */   "getRouterPreviousState": () => (/* reexport safe */ _lib_core_state_router_selectors__WEBPACK_IMPORTED_MODULE_3__.getRouterPreviousState),
/* harmony export */   "getRouterQueryParams": () => (/* reexport safe */ _lib_core_state_router_selectors__WEBPACK_IMPORTED_MODULE_3__.getRouterQueryParams),
/* harmony export */   "getRouterReducerState": () => (/* reexport safe */ _lib_core_state_router_selectors__WEBPACK_IMPORTED_MODULE_3__.getRouterReducerState),
/* harmony export */   "getRouterState": () => (/* reexport safe */ _lib_core_state_router_selectors__WEBPACK_IMPORTED_MODULE_3__.getRouterState),
/* harmony export */   "getRouterUrl": () => (/* reexport safe */ _lib_core_state_router_selectors__WEBPACK_IMPORTED_MODULE_3__.getRouterUrl),
/* harmony export */   "routerStoreReducer": () => (/* reexport safe */ _lib_core_state_router_reducer__WEBPACK_IMPORTED_MODULE_2__.routerStoreReducer)
/* harmony export */ });
/* harmony import */ var _lib_shared_router_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/shared-router.module */ 79328);
/* harmony import */ var _lib_application_router_facade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/application/router.facade */ 86286);
/* harmony import */ var _lib_core_state_router_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/core/state/router.reducer */ 93843);
/* harmony import */ var _lib_core_state_router_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/core/state/router.selectors */ 91299);


// TODO after refactoring search only expose facade




/***/ }),

/***/ 86286:
/*!*****************************************************************!*\
  !*** ./libs/shared/router/src/lib/application/router.facade.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouterFacade": () => (/* binding */ RouterFacade)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _core_state_router_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/state/router.selectors */ 91299);
/* harmony import */ var _core_state_router_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/state/router.actions */ 13329);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);





class RouterFacade {
    constructor(store) {
        this.store = store;
        this.routerState$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.select)(_core_state_router_selectors__WEBPACK_IMPORTED_MODULE_0__.getRouterState));
        this.routerPath$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.select)(_core_state_router_selectors__WEBPACK_IMPORTED_MODULE_0__.getRouterPath));
        this.routerParams$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.select)(_core_state_router_selectors__WEBPACK_IMPORTED_MODULE_0__.getRouterParams));
        this.routerQueryParams$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.select)(_core_state_router_selectors__WEBPACK_IMPORTED_MODULE_0__.getRouterQueryParams));
    }
    /**
     * Dispatches the go action.
     */
    go(navigation) {
        this.store.dispatch(_core_state_router_actions__WEBPACK_IMPORTED_MODULE_1__.go({ navigation }));
    }
    /**
     * Dispatches the back action.
     */
    back() {
        this.store.dispatch(_core_state_router_actions__WEBPACK_IMPORTED_MODULE_1__.back());
    }
}
RouterFacade.ɵfac = function RouterFacade_Factory(t) { return new (t || RouterFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store)); };
RouterFacade.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: RouterFacade, factory: RouterFacade.ɵfac });


/***/ }),

/***/ 13329:
/*!*****************************************************************!*\
  !*** ./libs/shared/router/src/lib/core/state/router.actions.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "back": () => (/* binding */ back),
/* harmony export */   "forward": () => (/* binding */ forward),
/* harmony export */   "go": () => (/* binding */ go),
/* harmony export */   "routeChange": () => (/* binding */ routeChange)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 23488);

/**
 * Dispatches to change the route.
 */
const go = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Router] Go', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
/**
 * Dispatches to go one step back in browser history.
 */
const back = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Router] Back');
/**
 * Dispatches to move one step forward in browser history.
 */
const forward = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Router] Forward');
/**
 * Dispatches to change the state of the route.
 */
const routeChange = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Router] Change', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());


/***/ }),

/***/ 46938:
/*!*****************************************************************!*\
  !*** ./libs/shared/router/src/lib/core/state/router.effects.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouterEffects": () => (/* binding */ RouterEffects)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 61745);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _router_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router.actions */ 13329);
/* harmony import */ var _router_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router.selectors */ 91299);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 23488);












/**
 * Represents routing specific effects.
 */
class RouterEffects {
    constructor(actions$, router, location, store) {
        this.actions$ = actions$;
        this.router = router;
        this.location = location;
        this.store = store;
        /**
         * Triggers whenever go action is being dispatched.
         */
        this.navigate$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_router_actions__WEBPACK_IMPORTED_MODULE_0__.go), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((action) => action.navigation), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(({ path, query: queryParams, extras }) => {
            this.router.navigate(path, { queryParams, ...extras });
        })), { dispatch: false });
        /**
         * Dispatches whenever back actions is being dispatched.
         */
        this.navigateBack$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_router_actions__WEBPACK_IMPORTED_MODULE_0__.back), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.withLatestFrom)(this.store.select(_router_selectors__WEBPACK_IMPORTED_MODULE_1__.getRouterPreviousState), (_, router) => router), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((previousState) => previousState == null
            ? this.store.dispatch((0,_router_actions__WEBPACK_IMPORTED_MODULE_0__.go)({
                navigation: {
                    path: ['']
                }
            }))
            : this.location.back())), { dispatch: false });
        /**
         * Dispatches whenever forward action is being dispatched.
         */
        this.navigateForward$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_router_actions__WEBPACK_IMPORTED_MODULE_0__.forward), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.location.forward())), { dispatch: false });
    }
}
RouterEffects.ɵfac = function RouterEffects_Factory(t) { return new (t || RouterEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store)); };
RouterEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: RouterEffects, factory: RouterEffects.ɵfac });


/***/ }),

/***/ 93843:
/*!*****************************************************************!*\
  !*** ./libs/shared/router/src/lib/core/state/router.reducer.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTER_FEATURE_KEY": () => (/* binding */ ROUTER_FEATURE_KEY),
/* harmony export */   "routerStoreReducer": () => (/* binding */ routerStoreReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/router-store */ 61611);

const ROUTER_FEATURE_KEY = 'router';
const routerStoreReducer = _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__.routerReducer;


/***/ }),

/***/ 91299:
/*!*******************************************************************!*\
  !*** ./libs/shared/router/src/lib/core/state/router.selectors.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRouterParams": () => (/* binding */ getRouterParams),
/* harmony export */   "getRouterPath": () => (/* binding */ getRouterPath),
/* harmony export */   "getRouterPreviousState": () => (/* binding */ getRouterPreviousState),
/* harmony export */   "getRouterQueryParams": () => (/* binding */ getRouterQueryParams),
/* harmony export */   "getRouterReducerState": () => (/* binding */ getRouterReducerState),
/* harmony export */   "getRouterState": () => (/* binding */ getRouterState),
/* harmony export */   "getRouterUrl": () => (/* binding */ getRouterUrl)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _router_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router.reducer */ 93843);


/**
 * Gets the current router reducer state from ngrx.
 */
const getRouterReducerState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)(_router_reducer__WEBPACK_IMPORTED_MODULE_0__.ROUTER_FEATURE_KEY);
/**
 * Gets the current router state.
 */
const getRouterState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getRouterReducerState, (reducerState) => reducerState?.state);
/**
 * Gets the current router previous state.
 */
const getRouterPreviousState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getRouterState, (state) => state?.previousState);
/**
 * Gets the current router path.
 */
const getRouterPath = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getRouterState, (state) => state?.path);
/**
 * Gets the current router segment params.
 */
const getRouterParams = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getRouterState, (state) => state?.params);
/**
 * Gets the current router url.
 */
const getRouterUrl = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getRouterState, (state) => state?.url);
/**
 * Gets the current router query params.
 */
const getRouterQueryParams = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getRouterState, (state) => state?.queryParams);


/***/ }),

/***/ 79328:
/*!************************************************************!*\
  !*** ./libs/shared/router/src/lib/shared-router.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedRouterModule": () => (/* binding */ SharedRouterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _core_state_router_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/state/router.effects */ 46938);
/* harmony import */ var _core_state_router_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/state/router.reducer */ 93843);
/* harmony import */ var _utils_route_serializer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/route-serializer.service */ 1230);
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/router-store */ 61611);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _application_router_facade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./application/router.facade */ 86286);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);












class SharedRouterModule {
}
SharedRouterModule.ɵfac = function SharedRouterModule_Factory(t) { return new (t || SharedRouterModule)(); };
SharedRouterModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SharedRouterModule });
SharedRouterModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_5__.RouterStateSerializer,
            useClass: _utils_route_serializer_service__WEBPACK_IMPORTED_MODULE_2__.CustomRouteSerializer
        },
        _application_router_facade__WEBPACK_IMPORTED_MODULE_3__.RouterFacade
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _ngrx_store__WEBPACK_IMPORTED_MODULE_7__.StoreModule.forFeature(_core_state_router_reducer__WEBPACK_IMPORTED_MODULE_1__.ROUTER_FEATURE_KEY, _ngrx_router_store__WEBPACK_IMPORTED_MODULE_5__.routerReducer),
        _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.EffectsModule.forFeature([_core_state_router_effects__WEBPACK_IMPORTED_MODULE_0__.RouterEffects]),
        _ngrx_router_store__WEBPACK_IMPORTED_MODULE_5__.StoreRouterConnectingModule.forRoot()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SharedRouterModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_7__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.EffectsFeatureModule, _ngrx_router_store__WEBPACK_IMPORTED_MODULE_5__.StoreRouterConnectingModule] }); })();


/***/ }),

/***/ 1230:
/*!**********************************************************************!*\
  !*** ./libs/shared/router/src/lib/utils/route-serializer.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomRouteSerializer": () => (/* binding */ CustomRouteSerializer)
/* harmony export */ });
/* harmony import */ var _core_state_router_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/state/router.actions */ 13329);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 23488);





/**
 * Represents a custom routing serializer that steps in on every routing and builds up a custom state
 * object which can be inspected in NGRX store and also consumed in different layers in the application.
 */
class CustomRouteSerializer {
    constructor(store) {
        this.store = store;
        this._previousState = null;
    }
    /**
     * Triggers whenever there's a route change, receives the current router snapshot and
     * then builds up an understandable state object out of the snapshot which then can be inspected
     * for debugging purposes or consumed later on in different layers in the applciation.
     * It also dispatches an action called routeChanged that can be used in other modules to hook into and
     * act on route changes.
     * @param routerSnapshot The current router snapshot.
     * @returns A custom understandable router state object that can be used in the NGRX store.
     */
    serialize(routerSnapshot) {
        if (routerSnapshot.root.firstChild == null) {
            return null;
        }
        const { url } = routerSnapshot;
        const { queryParams } = routerSnapshot.root;
        const { routeConfig } = routerSnapshot.root.firstChild;
        let state = routerSnapshot.root;
        while (state.firstChild) {
            state = state.firstChild;
        }
        const { params } = state;
        const newState = {
            url,
            queryParams,
            params,
            path: routeConfig.path,
            previousState: this._previousState == null ? null : this._previousState
        };
        this._previousState = newState;
        this.store.dispatch((0,_core_state_router_actions__WEBPACK_IMPORTED_MODULE_0__.routeChange)({ state: newState }));
        return newState;
    }
}
CustomRouteSerializer.ɵfac = function CustomRouteSerializer_Factory(t) { return new (t || CustomRouteSerializer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store)); };
CustomRouteSerializer.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CustomRouteSerializer, factory: CustomRouteSerializer.ɵfac });


/***/ }),

/***/ 51388:
/*!************************************!*\
  !*** ./libs/web/core/src/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateDiffPipe": () => (/* reexport safe */ _lib_pipes__WEBPACK_IMPORTED_MODULE_1__.DateDiffPipe),
/* harmony export */   "DelimiterPipe": () => (/* reexport safe */ _lib_pipes__WEBPACK_IMPORTED_MODULE_1__.DelimiterPipe),
/* harmony export */   "NullOrUndefinedPipe": () => (/* reexport safe */ _lib_pipes__WEBPACK_IMPORTED_MODULE_1__.NullOrUndefinedPipe),
/* harmony export */   "PIPES": () => (/* reexport safe */ _lib_pipes__WEBPACK_IMPORTED_MODULE_1__.PIPES),
/* harmony export */   "StringEmptyPipe": () => (/* reexport safe */ _lib_pipes__WEBPACK_IMPORTED_MODULE_1__.StringEmptyPipe),
/* harmony export */   "WebCoreModule": () => (/* reexport safe */ _lib_web_core_module__WEBPACK_IMPORTED_MODULE_0__.WebCoreModule)
/* harmony export */ });
/* harmony import */ var _lib_web_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/web-core.module */ 7852);
/* harmony import */ var _lib_pipes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/pipes */ 83535);




/***/ }),

/***/ 78959:
/*!*********************************************************************!*\
  !*** ./libs/web/core/src/lib/components/layout/layout.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _dnc_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dnc/configuration */ 45132);
/* harmony import */ var _dnc_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dnc/sidenav */ 57588);
/* harmony import */ var _dnc_top_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dnc/top-nav */ 85203);





const _c0 = [[["", "slot", "notifications-banner"]], "*"];
const _c1 = ["[slot=notifications-banner]", "*"];
class LayoutComponent {
    constructor(configuration) {
        this.configuration = configuration;
        // These should be of type WebBasePaths but neither @dnc/configuration nor @dnc/sidenav expose it
        this.webBasePaths = this.configuration.webBasePaths;
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dnc_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration)); };
LayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], ngContentSelectors: _c1, decls: 6, vars: 1, consts: [[1, "side-bar", 3, "webBasePaths"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "dnc-top-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "dn-sidenav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("webBasePaths", ctx.webBasePaths);
    } }, dependencies: [_dnc_sidenav__WEBPACK_IMPORTED_MODULE_2__.SidenavComponent, _dnc_top_nav__WEBPACK_IMPORTED_MODULE_3__.TopNavComponent], styles: ["[_nghost-%COMP%]   .side-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  height: 100vh;\n  z-index: calc(1000 + 2);\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 64px;\n  height: 56px;\n  width: calc(100vw - 64px);\n  background: #F7F7F7;\n  z-index: calc(1000 + 1);\n}\n[_nghost-%COMP%]   main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  height: calc(100vh - calc(56px + calc(4px * 5)) - calc(4px * 5));\n  padding-left: 64px;\n  padding-top: calc(56px + calc(4px * 5));\n  padding-bottom: calc(4px * 5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZG5jL3RoZW1pbmcvdGhlbWUvX21hZXJzay10aGVtZS10eXBvZ3JhcGh5LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGRuYy90aGVtaW5nL3RoZW1lL19tYWVyc2stcGFsZXR0ZXMuc2NzcyIsIi4uLy4uL3Njc3MvX2luZGV4LnNjc3MiLCIuLi8uLi9zY3NzL3NldHRpbmdzL19tZWRpYS5zY3NzIiwiLi4vLi4vc2Nzcy9zZXR0aW5ncy9fc3BhY2luZy5zY3NzIiwiLi4vLi4vc2Nzcy9zZXR0aW5ncy9fdHJhbnNpdGlvbnMuc2NzcyIsIi4uLy4uL3Njc3Mvc2V0dGluZ3MvX3R5cGUuc2NzcyIsIi4uLy4uL3Njc3Mvc2V0dGluZ3MvX2xheW91dC5zY3NzIiwibGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBOzs7Ozs7RUFBQTtBQ1ZBOzs7O0VBQUE7QUNEQTs7RUFBQTtBQ0tBLDRCQUFBO0FDSEEsb0JBQUE7QUF3QkEsVUFBQTtBQUtBLG9CQUFBO0FDL0JBLG1CQUFBO0FBS0Esb0JBQUE7QUFLQSxXQUFBO0FDUkEsY0FBQTtBQWVBLGlCQUFBO0FBT0EsZ0JBQUE7QUFZQSxtQkFBQTtBRmxDQSxvQkFBQTtBQXdCQSxVQUFBO0FBS0Esb0JBQUE7QUc3QkE7O0NBQUE7QUFnQkE7O0NBQUE7QUNiRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJEZWU7QUNnQm5CO0FBNUJFO0VBQ0UsZUFBQTtFQUNBLFVEUGtCO0VDUWxCLFlEVGlCO0VDVWpCLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkRLYTtBQ3lCakI7QUEzQkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxPQUFBO0VBQ0EsZ0VBQUE7RUFDQSxrQkRuQmtCO0VDb0JsQix1Q0RqQmU7RUNrQmYsNkJKcEJRO0FJaURaIiwiZmlsZSI6ImxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJ0Bhbmd1bGFyL21hdGVyaWFsJyBhcyBtYXQ7XG5cbiRtYWVyc2stZGlzcGxheTogbWF0LmRlZmluZS10eXBvZ3JhcGh5LWxldmVsKDgwcHgsIDkycHgsIDEwMCwgJGZvbnQtZmFtaWx5OiAnTWFlcnNrX0hlYWRsaW5lJyk7XG4kbWFlcnNrLWgxOiBtYXQuZGVmaW5lLXR5cG9ncmFwaHktbGV2ZWwoNTBweCwgNTZweCwgMTAwLCAkZm9udC1mYW1pbHk6ICdNYWVyc2tfSGVhZGxpbmUnKTtcbiRtYWVyc2staDI6IG1hdC5kZWZpbmUtdHlwb2dyYXBoeS1sZXZlbCg0MHB4LCA0MHB4LCAxMDAsICRmb250LWZhbWlseTogJ01hZXJza19IZWFkbGluZScpO1xuJG1hZXJzay1oMzogbWF0LmRlZmluZS10eXBvZ3JhcGh5LWxldmVsKDI2cHgsIDMycHgsIDQwMCwgJGZvbnQtZmFtaWx5OiAnTWFlcnNrX0hlYWRsaW5lJyk7XG4kbWFlcnNrLWg0OiBtYXQuZGVmaW5lLXR5cG9ncmFwaHktbGV2ZWwoMjBweCwgMjRweCwgNDAwLCAkZm9udC1mYW1pbHk6ICdNYWVyc2tfSGVhZGxpbmUnKTtcbiRtYWVyc2staDU6IG1hdC5kZWZpbmUtdHlwb2dyYXBoeS1sZXZlbCgxNnB4LCAyNHB4LCBib2xkLCAkZm9udC1mYW1pbHk6ICdNYWVyc2tfVGV4dCcpO1xuJG1hZXJzay1ib2R5OiBtYXQuZGVmaW5lLXR5cG9ncmFwaHktbGV2ZWwoMTRweCwgMjBweCwgNDAwLCAkZm9udC1mYW1pbHk6ICdNYWVyc2tfVGV4dCcpOyAvLyBtYXBwZWQgdG8gYnJhbmQgc21hbGwgYm9keVxuJG1hZXJzay1taWNybzogbWF0LmRlZmluZS10eXBvZ3JhcGh5LWxldmVsKDEycHgsIDE2cHgsIDQwMCwgJGZvbnQtZmFtaWx5OiAnTWFlcnNrX1RleHQnKTtcblxuLyoqXG4gVGhlbWUgVHlwb2dyYXBoeS5cbiBFbnJpY2hlcyB0aGVtZSB3aXRoIE1hZXJzayBUeXBvZ3JhcGh5LlxuIFNlZSBodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vZ3VpZGUvdHlwb2dyYXBoeSBmb3IgZGVzY3JpcHRpb24gb2YgdHlwb2dyYXBoeSBuYW1lc1xuIFNlZSBAYW5ndWxhci9tYXRlcmlhbC90aGVtaW5nIGZvciB1c2FnZSB3aXRoaW4gQW5ndWxhciBNYXRlcmlhbCB0aGVtZS5cbiBTZWUgLi4vdGhlbWluZy9fbWFlcnNrLXR5cG9ncmFwaHkgZm9yIGNzcyBleHBvc2luZyBUeXBvZ3JhcGh5LlxuICovXG4kdGhlbWUtdHlwb2dyYXBoeTogbWFwLW1lcmdlKFxuICAgIG1hdC5kZWZpbmUtdHlwb2dyYXBoeS1jb25maWcoXG4gICAgICAkZm9udC1mYW1pbHk6ICdNYWVyc2tfVGV4dCwgc2Fucy1zZXJpZicsXG4gICAgICAkaGVhZGxpbmU6ICRtYWVyc2staDEsXG4gICAgICAkdGl0bGU6ICRtYWVyc2staDIsXG4gICAgICAkc3ViaGVhZGluZy0yOiAkbWFlcnNrLWgzLFxuICAgICAgJHN1YmhlYWRpbmctMTogJG1hZXJzay1oNFxuICAgICksXG4gICAgKFxuICAgICAgLyoqXG4gICAgICAgTWFlcnNrIFR5cG9ncmFwaHkgaGVscGVyIGdsb2JhbHNcbiAgICAgICovXG4gICAgICBtYWVyc2stZGlzcGxheTogJG1hZXJzay1kaXNwbGF5LFxuICAgICAgbWFlcnNrLWgxOiAkbWFlcnNrLWgxLFxuICAgICAgbWFlcnNrLWgyOiAkbWFlcnNrLWgyLFxuICAgICAgbWFlcnNrLWgzOiAkbWFlcnNrLWgzLFxuICAgICAgbWFlcnNrLWg0OiAkbWFlcnNrLWg0LFxuICAgICAgbWFlcnNrLWg1OiAkbWFlcnNrLWg1LFxuICAgICAgbWFlcnNrLWJvZHk6ICRtYWVyc2stYm9keSxcbiAgICAgIG1hZXJzay1taWNybzogJG1hZXJzay1taWNybyxcbiAgICAgIC8qKlxuICAgICAgIEZvbnQtcGF0aCBkZXRlcm1pbmVzIHdoZXJlIGZvbnRzIGFyZSBzZXJ2ZWQgZnJvbS4gRm9yIGFwcHMgbm90IHNlcnZlZCBmcm9tIHJvb3QsIHRoaXMgc2hvdWxkIGJlIGNoYW5nZWQuIFNlZSBGQVEuXG4gICAgICAgKi9cbiAgICAgIGZvbnQtcGF0aDogJy8nXG4gICAgKVxuKTtcbiIsIkB1c2UgJ0Bhbmd1bGFyL21hdGVyaWFsL3RoZW1pbmcnIGFzIG1hdFRoZW1pbmc7XG4vKlxuICogTWFlcnNrIGJyYW5kIGNvbG9ycyBhcyBNYXRlcmlhbCBwYWxldHRlc1xuICogQmFzZWQgb24gVVggd29yayBhcyBmb3VuZCBpbiBpbi12aXNpb246XG4gKiBodHRwczovL21hZXJzay5pbnZpc2lvbmFwcC5jb20vZC9tYWluIy9jb25zb2xlLzE4MzEyNzY1LzM4MDMzMjQ2OC9pbnNwZWN0XG4gKi9cblxuJGJyYW5kLWJsdWU6IChcbiAgMjU6ICNFQkY1RkEsXG4gIDUwOiAjRDVFREY5LFxuICA3NTogI0I1RTBGNSxcbiAgMTAwOiAjOTFEOEYyLFxuICAyMDA6ICM3N0M2RTAsXG4gIDMwMDogIzQyQjBENSxcbiAgNDAwOiAjMENBMENFLFxuICA1MDA6ICMwNThFQzYsXG4gIDYwMDogIzAwNzNBQixcbiAgNzAwOiAjMDA1NDg3LFxuICA4MDA6ICMwMDNENkQsXG4gIDkwMDogIzAwMjQzRCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogbWF0VGhlbWluZy4kZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiBtYXRUaGVtaW5nLiRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6IG1hdFRoZW1pbmcuJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogbWF0VGhlbWluZy4kZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiBtYXRUaGVtaW5nLiRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6IG1hdFRoZW1pbmcuJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6IG1hdFRoZW1pbmcuJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6IG1hdFRoZW1pbmcuJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6IG1hdFRoZW1pbmcuJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6IG1hdFRoZW1pbmcuJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiBtYXRUaGVtaW5nLiRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiBtYXRUaGVtaW5nLiRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogbWF0VGhlbWluZy4kbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6IG1hdFRoZW1pbmcuJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJGJyYW5kLXJlZDogKFxuICAyNTogI0ZGRjFFRCxcbiAgNTA6ICNGRkUxRDksXG4gIDc1OiAjRkZCQUE2LFxuICAxMDA6ICNGRjlFODcsXG4gIDIwMDogI0ZGODc2NixcbiAgMzAwOiAjRkE2QTU1LFxuICA0MDA6ICNGQTM4MUMsXG4gIDUwMDogI0UwMjgwRixcbiAgNjAwOiAjQzYyODBGLFxuICA3MDA6ICNBNTExMEMsXG4gIDgwMDogIzhDMDcwNSxcbiAgOTAwOiAjNkIwRDA1LFxuICBjb250cmFzdDogKFxuICAgIDUwOiBtYXRUaGVtaW5nLiRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6IG1hdFRoZW1pbmcuJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogbWF0VGhlbWluZy4kZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiBtYXRUaGVtaW5nLiRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6IG1hdFRoZW1pbmcuJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogbWF0VGhlbWluZy4kbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogbWF0VGhlbWluZy4kbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogbWF0VGhlbWluZy4kbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogbWF0VGhlbWluZy4kbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogbWF0VGhlbWluZy4kbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6IG1hdFRoZW1pbmcuJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6IG1hdFRoZW1pbmcuJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiBtYXRUaGVtaW5nLiRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogbWF0VGhlbWluZy4kbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kZmVlZGJhY2stZ3JlZW46IChcbiAgMjU6ICNFQkY2RUEsXG4gIDUwOiAjRERGMERCLFxuICA3NTogI0M1RTVDMixcbiAgMTAwOiAjOURENDk4LFxuICAyMDA6ICM2NkJCNUQsXG4gIDMwMDogIzQwQUIzNSxcbiAgNDAwOiAjMzU5NzJCLFxuICA1MDA6ICMyQTgxMjIsXG4gIDYwMDogIzI0NkUxQyxcbiAgNzAwOiAjMUM1QjE1LFxuICA4MDA6ICMxNDQ4MEYsXG4gIDkwMDogIzBFMzQwOVxuKTtcblxuJGZlZWRiYWNrLXJlZDogKFxuICAyNTogI0Y5RUJFQixcbiAgNTA6ICNGM0Q4REEsXG4gIDc1OiAjRTlCMkI3LFxuICAxMDA6ICNFMTk0OUIsXG4gIDIwMDogI0NDNDk1NixcbiAgMzAwOiAjQjgwMDEyLFxuICA0MDA6ICNBMzAwMTAsXG4gIDUwMDogIzhGMDAwRSxcbiAgNjAwOiAjN0EwMDBDLFxuICA3MDA6ICM2NjAwMEEsXG4gIDgwMDogIzUyMDAwOCxcbiAgOTAwOiAjM0QwMDA2XG4pO1xuXG4kZmVlZGJhY2steWVsbG93OiAoXG4gIDI1OiAjRkZGNkQ2LFxuICA1MDogI0ZGRjJDNyxcbiAgNzU6ICNGRkVCQTgsXG4gIDEwMDogI0ZGRTQ4QSxcbiAgMjAwOiAjRkZEQTU2LFxuICAzMDA6ICNGRkQwMjksXG4gIDQwMDogI0YwQkIwMCxcbiAgNTAwOiAjRDZBNzAwLFxuICA2MDA6ICNCODhGMDAsXG4gIDcwMDogIzg1NjcwMCxcbiAgODAwOiAjNTc0MzAwLFxuICA5MDA6ICMzODJDMDBcbik7XG5cbiRmdW5jdGlvbmFsOiAoXG4gIDI1OiAjRjdGN0Y3LFxuICA1MDogI0YyRjJGMixcbiAgNzU6ICNFREVERUQsXG4gIDEwMDogI0RCREJEQixcbiAgMjAwOiAjQ0ZDRkNGLFxuICAzMDA6ICNCMkIyQjIsXG4gIDQwMDogIzg3ODc4NyxcbiAgNTAwOiAjNkI2QjZCLFxuICA2MDA6ICM1NDU0NTQsXG4gIDcwMDogIzM1MzUzNSxcbiAgODAwOiAjMjQyNDI0LFxuICA5MDA6ICMxNDE0MTQsXG4gIHdoaXRlOiAjRkZGRkZGLFxuICBibGFjazogIzAwMDAwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogbWF0VGhlbWluZy4kZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiBtYXRUaGVtaW5nLiRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6IG1hdFRoZW1pbmcuJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogbWF0VGhlbWluZy4kZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiBtYXRUaGVtaW5nLiRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6IG1hdFRoZW1pbmcuJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6IG1hdFRoZW1pbmcuJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6IG1hdFRoZW1pbmcuJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6IG1hdFRoZW1pbmcuJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6IG1hdFRoZW1pbmcuJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiBtYXRUaGVtaW5nLiRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiBtYXRUaGVtaW5nLiRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogbWF0VGhlbWluZy4kbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6IG1hdFRoZW1pbmcuJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJHNlY29uZGFyeS1jaXRydXM6IChcbiAgMjU6ICNGQUZGQzQsXG4gIDUwOiAjRjZGRjkxLFxuICA3NTogI0YyRkY2NixcbiAgMTAwOiAjRThGNDI4LFxuICAyMDA6ICNFMkVGMDAsXG4gIDMwMDogI0RCRTgwMCxcbiAgNDAwOiAjRDZFMDAwLFxuICA1MDA6ICNDNkQ4MEMsXG4gIDYwMDogI0IyQ0MwMixcbiAgNzAwOiAjQTNCRjAwLFxuICA4MDA6ICM5MUIyMDAsXG4gIDkwMDogIzdDOUQwMFxuKTtcblxuJHNlY29uZGFyeS1vcmFuZ2U6IChcbiAgMjU6ICNGRkY2RDksXG4gIDUwOiAjRkZFQ0IwLFxuICA3NTogI0ZGREU3NCxcbiAgMTAwOiAjRkZEMzRGLFxuICAyMDA6ICNGRkMzMTksXG4gIDMwMDogI0ZGQjMwMixcbiAgNDAwOiAjRkZBMjAxLFxuICA1MDA6ICNGRjkxMDAsXG4gIDYwMDogI0YwNzUwOCxcbiAgNzAwOiAjRDE1QzA1LFxuICA4MDA6ICNBQTQ2MDIsXG4gIDkwMDogIzk2MzcwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogbWF0VGhlbWluZy4kZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiBtYXRUaGVtaW5nLiRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6IG1hdFRoZW1pbmcuJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogbWF0VGhlbWluZy4kZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiBtYXRUaGVtaW5nLiRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6IG1hdFRoZW1pbmcuJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6IG1hdFRoZW1pbmcuJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6IG1hdFRoZW1pbmcuJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6IG1hdFRoZW1pbmcuJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6IG1hdFRoZW1pbmcuJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiBtYXRUaGVtaW5nLiRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiBtYXRUaGVtaW5nLiRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogbWF0VGhlbWluZy4kbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6IG1hdFRoZW1pbmcuJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJHNlY29uZGFyeS10ZWFsOiAoXG4gIDI1OiAjRTZGN0Y1LFxuICA1MDogI0M3RjBFOSxcbiAgNzU6ICNBQUVBRTAsXG4gIDEwMDogIzgyRDZEMSxcbiAgMjAwOiAjNENDNkJDLFxuICAzMDA6ICM0REI1QUIsXG4gIDQwMDogIzI2QTU5OSxcbiAgNTAwOiAjMDA5Njg3LFxuICA2MDA6ICMwMDg5N0EsXG4gIDcwMDogIzAwNzg2QixcbiAgODAwOiAjMDA2ODVCLFxuICA5MDA6ICMwMDRENDBcbik7XG4iLCIvKipcbiAqIFRoZSBmb2xsb3dpbmcgYXJlIHdlYiBzcGVjaWZpYyAodXNlZCB3aXRoIGFueSB3ZWIgYXBwIHRhcmdldHMpXG4gKi9cbkBpbXBvcnQgJ3NldHRpbmdzL21lZGlhJztcbkBpbXBvcnQgJ3NldHRpbmdzL29wYWNpdHknO1xuQGltcG9ydCAnc2V0dGluZ3Mvc3BhY2luZyc7XG5AaW1wb3J0ICdzZXR0aW5ncy90cmFuc2l0aW9ucyc7XG5AaW1wb3J0ICdzZXR0aW5ncy90eXBlJztcbkBpbXBvcnQgJ3NldHRpbmdzL2xheW91dCc7XG4iLCIkc2NyZWVuLXdpZHRoLWxhcmdlOiAyMDQ4cHg7XG4kc2NyZWVuLXdpZHRoLW1lZGl1bTogMTAyNHB4O1xuJHNjcmVlbi13aWR0aC1iYXNlOiA1NDBweDtcbiRzY3JlZW4td2lkdGgtc21hbGw6IDI3MHB4O1xuXG4vKiBtaW4gd2lkdGggbWVkaWEgcXVlcmllcyAqL1xuQG1peGluIG1xLWxhcmdlIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi13aWR0aC1sYXJnZX0pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbXEtbWVkaXVtIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi13aWR0aC1tZWRpdW19KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1xLWJhc2Uge1xuICBAbWVkaWEgKG1pbi13aWR0aDogI3skc2NyZWVuLXdpZHRoLWJhc2V9KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1xLXNtYWxsIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi13aWR0aC1zbWFsbH0pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIiwiJHNwYWNpbmctYmFzZTogNHB4O1xuXG4vKiBQb3NpdGl2ZSB2YWx1ZXMgKi9cbiRzcGFjaW5nLTE6IGNhbGMoI3skc3BhY2luZy1iYXNlfSAqIDEpO1xuJHNwYWNpbmctMjogY2FsYygjeyRzcGFjaW5nLWJhc2V9ICogMik7XG4kc3BhY2luZy0zOiBjYWxjKCN7JHNwYWNpbmctYmFzZX0gKiAzKTtcbiRzcGFjaW5nLTQ6IGNhbGMoI3skc3BhY2luZy1iYXNlfSAqIDQpO1xuJHNwYWNpbmctNTogY2FsYygjeyRzcGFjaW5nLWJhc2V9ICogNSk7XG4kc3BhY2luZy02OiBjYWxjKCN7JHNwYWNpbmctYmFzZX0gKiA2KTtcbiRzcGFjaW5nLTc6IGNhbGMoI3skc3BhY2luZy1iYXNlfSAqIDcpO1xuJHNwYWNpbmctODogY2FsYygjeyRzcGFjaW5nLWJhc2V9ICogOCk7XG4kc3BhY2luZy05OiBjYWxjKCN7JHNwYWNpbmctYmFzZX0gKiA5KTtcbiRzcGFjaW5nLTEwOiBjYWxjKCN7JHNwYWNpbmctYmFzZX0gKiAxMCk7XG4kc3BhY2luZy0xMTogY2FsYygjeyRzcGFjaW5nLWJhc2V9ICogMTEpO1xuJHNwYWNpbmctMTI6IGNhbGMoI3skc3BhY2luZy1iYXNlfSAqIDEyKTtcbiRzcGFjaW5nLTEzOiBjYWxjKCN7JHNwYWNpbmctYmFzZX0gKiAxMyk7XG4kc3BhY2luZy0xNDogY2FsYygjeyRzcGFjaW5nLWJhc2V9ICogMTQpO1xuJHNwYWNpbmctMTU6IGNhbGMoI3skc3BhY2luZy1iYXNlfSAqIDE1KTtcbiRzcGFjaW5nLTE2OiBjYWxjKCN7JHNwYWNpbmctYmFzZX0gKiAxNik7XG4kc3BhY2luZy0xODogY2FsYygjeyRzcGFjaW5nLWJhc2V9ICogMTgpO1xuJHNwYWNpbmctMjA6IGNhbGMoI3skc3BhY2luZy1iYXNlfSAqIDIwKTtcbiRzcGFjaW5nLTI0OiBjYWxjKCN7JHNwYWNpbmctYmFzZX0gKiAyNCk7XG4kc3BhY2luZy0yNTogY2FsYygjeyRzcGFjaW5nLWJhc2V9ICogMjUpO1xuJHNwYWNpbmctMzg6IGNhbGMoI3skc3BhY2luZy1iYXNlfSAqIDM4KTtcbiRzcGFjaW5nLTQwOiBjYWxjKCN7JHNwYWNpbmctYmFzZX0gKiA0MCk7XG5cbi8qKiBHcmlkICovXG4kZ3V0dGVyOiAkc3BhY2luZy02O1xuJHJvdy1oZWlnaHQ6ICRzcGFjaW5nLTI0O1xuJHRvcGJhci1oZWlnaHQ6ICRzcGFjaW5nLTE2O1xuXG4vKiBOZWdhdGl2ZSB2YWx1ZXMgKi9cbiRzcGFjaW5nLW4xOiBjYWxjKCN7JHNwYWNpbmctMX0gKiAtMSk7XG4kc3BhY2luZy1uMjogY2FsYygjeyRzcGFjaW5nLW4xfSAqIDIpO1xuJHNwYWNpbmctbjM6IGNhbGMoI3skc3BhY2luZy1uMX0gKiAzKTtcbiRzcGFjaW5nLW40OiBjYWxjKCN7JHNwYWNpbmctbjF9ICogNCk7XG4kc3BhY2luZy1uNTogY2FsYygjeyRzcGFjaW5nLW4xfSAqIDUpO1xuJHNwYWNpbmctbjY6IGNhbGMoI3skc3BhY2luZy1uMX0gKiA2KTtcbiRzcGFjaW5nLW43OiBjYWxjKCN7JHNwYWNpbmctbjF9ICogNyk7XG4kc3BhY2luZy1uODogY2FsYygjeyRzcGFjaW5nLW4xfSAqIDgpO1xuJHNwYWNpbmctbjk6IGNhbGMoI3skc3BhY2luZy1uMX0gKiA5KTtcbiRzcGFjaW5nLW4xMDogY2FsYygjeyRzcGFjaW5nLW4xfSAqIDEwKTtcbiRzcGFjaW5nLW4xMjogY2FsYygjeyRzcGFjaW5nLW4xfSAqIDEyKTtcbiRzcGFjaW5nLW41MTogY2FsYygjeyRzcGFjaW5nLW4xfSAqIDUxKTtcbiIsIi8qIExvbmcgRHVyYXRpb25zICovXG4kdHJhbnNpdGlvbi1sb25nLWR1cmF0aW9uLS1sb25nOiAxMHM7XG4kdHJhbnNpdGlvbi1sb25nLWR1cmF0aW9uLS1iYXNlOiA1cztcbiR0cmFuc2l0aW9uLWxvbmctZHVyYXRpb24tLXNob3J0OiAzcztcblxuLyogU2hvcnQgRHVyYXRpb25zICovXG4kdHJhbnNpdGlvbi1zaG9ydC1kdXJhdGlvbi0tbG9uZzogMC41cztcbiR0cmFuc2l0aW9uLXNob3J0LWR1cmF0aW9uLS1iYXNlOiAwLjI1cztcbiR0cmFuc2l0aW9uLXNob3J0LWR1cmF0aW9uLS1zaG9ydDogMC4xcztcblxuLyogRGVsYXlzICovXG4kdHJhbnNpdGlvbi1kZWxheS0tbG9uZzogMC41cztcbiR0cmFuc2l0aW9uLWRlbGF5LS1iYXNlOiAwLjI1cztcbiR0cmFuc2l0aW9uLWRlbGF5LS1zaG9ydDogMC4xNXM7XG4iLCIkZm9udC1mYW1pbHktYXJpYWw6ICdBcmlhbCcsIHNhbnMgc2VyaWY7XG5cbi8qIGZvbnQgc2l6ZSAqL1xuJGZvbnQtc2l6ZS1wYWdlLWgxOiAzNnB4O1xuJGZvbnQtc2l6ZS1wYWdlLWgyOiAzNHB4O1xuJGZvbnQtc2l6ZS1wYWdlLWgzOiAzMnB4O1xuJGZvbnQtc2l6ZS1wYWdlLWg0OiAzMHB4O1xuJGZvbnQtc2l6ZS1wYWdlLWg1OiAyOHB4O1xuJGZvbnQtc2l6ZS1wYWdlLWg2OiAyNnB4O1xuJGZvbnQtc2l6ZS1wYWdlLWg3OiAyNHB4O1xuJGZvbnQtc2l6ZS1wYWdlLWg4OiAyMnB4O1xuJGZvbnQtc2l6ZS1wYWdlLWg5OiAyMHB4O1xuJGZvbnQtc2l6ZS1oMTogMThweDtcbiRmb250LXNpemUtaDI6IDE2cHg7XG4kZm9udC1zaXplLWgzOiAxNHB4O1xuJGZvbnQtc2l6ZS1oNDogMTJweDtcblxuLyogZm9udCB3ZWlnaHRzICovXG4kZm9udC13ZWlnaHQtYm9sZGVyOiA5MDA7XG4kZm9udC13ZWlnaHQtYm9sZDogNzAwO1xuJGZvbnQtd2VpZ2h0LWJhc2U6IDUwMDtcbiRmb250LXdlaWdodC1saWdodDogMzAwO1xuJGZvbnQtd2VpZ2h0LXRoaW46IDEwMDtcblxuLyogbGluZSBoZWlnaHQgKi9cbiRsaW5lLWhlaWdodC14eHh4eGxhcmdlOiA2cmVtO1xuJGxpbmUtaGVpZ2h0LXh4eHhsYXJnZTogMi40cmVtO1xuJGxpbmUtaGVpZ2h0LXh4eGxhcmdlOiAycmVtO1xuJGxpbmUtaGVpZ2h0LXh4bGFyZ2U6IDEuOXJlbTtcbiRsaW5lLWhlaWdodC14bGFyZ2U6IDEuNXJlbTtcbiRsaW5lLWhlaWdodC1sYXJnZTogMS4zcmVtO1xuJGxpbmUtaGVpZ2h0LWJhc2U6IDEuMjNyZW07XG4kbGluZS1oZWlnaHQtc21hbGw6IDFyZW07XG4kbGluZS1oZWlnaHQteHNtYWxsOiAwLjlyZW07XG4kbGluZS1oZWlnaHQteHhzbWFsbDogMC44cmVtO1xuXG4vKiBsZXR0ZXIgc3BhY2luZyAqL1xuJGxldHRlci1zcGFjaW5nLWxhcmdlOiAxLjM1O1xuJGxldHRlci1zcGFjaW5nLWJhc2U6IDEuMzU7XG4kbGV0dGVyLXNwYWNpbmctc21hbGw6IDEuMjU7XG4kbGV0dGVyLXNwYWNpbmcteHNtYWxsOiAxLjI1O1xuIiwiQHVzZSAnLi9zcGFjaW5nJztcblxuLyoqXG4qIExheW91dFxuKi9cbiRwYWdlLWhlYWRlci1oZWlnaHQ6IDU2cHg7XG4kcGFnZS1zaWRlLWJhci13aWR0aDogNjRweDtcbiRwYWdlLXNpZGUtcGFkZGluZzogc3BhY2luZy4kc3BhY2luZy02O1xuJHBhZ2UtdmVydGljYWwtcGFkZGluZzogc3BhY2luZy4kc3BhY2luZy01O1xuJHBhZ2UtdG9wLXBhZGRpbmc6IGNhbGMoI3skcGFnZS1oZWFkZXItaGVpZ2h0fSArICN7JHBhZ2UtdmVydGljYWwtcGFkZGluZ30pO1xuXG5AbWl4aW4gcGFnZS1sYXlvdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLWxlZnQ6ICRwYWdlLXNpZGUtcGFkZGluZztcbiAgcGFkZGluZy1yaWdodDogJHBhZ2Utc2lkZS1wYWRkaW5nO1xufVxuXG4vKipcbiogWi1JbmRleFxuKi9cbiRhbmd1bGFyLW1hdGVyaWFsLW92ZXJsYXktei1pbmRleDogMTAwMDtcbiRoZWFkZXItei1pbmRleDogY2FsYygjeyRhbmd1bGFyLW1hdGVyaWFsLW92ZXJsYXktei1pbmRleH0gKyAxKTtcbiRzaWRlLWJhci16LWluZGV4OiBjYWxjKCN7JGFuZ3VsYXItbWF0ZXJpYWwtb3ZlcmxheS16LWluZGV4fSArIDIpO1xuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnfkBkbmMvdGhlbWluZy90aGVtZScgYXMgZG5jLXRoZW1lO1xuQHVzZSAnfkBhdXRvbWF0ZWQtY2FyZ28vc2Nzcy13ZWIvaW5kZXgnIGFzIGFjZS1zYWFzO1xuXG46aG9zdCB7XG4gIC5zaWRlLWJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgei1pbmRleDogYWNlLXNhYXMuJHNpZGUtYmFyLXotaW5kZXg7XG4gIH1cblxuICBoZWFkZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiBhY2Utc2Fhcy4kcGFnZS1zaWRlLWJhci13aWR0aDtcbiAgICBoZWlnaHQ6IGFjZS1zYWFzLiRwYWdlLWhlYWRlci1oZWlnaHQ7XG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAje2FjZS1zYWFzLiRwYWdlLXNpZGUtYmFyLXdpZHRofSk7XG4gICAgYmFja2dyb3VuZDogbWFwLmdldChkbmMtdGhlbWUuJGZ1bmN0aW9uYWwsIDI1KTtcbiAgICB6LWluZGV4OiBhY2Utc2Fhcy4kaGVhZGVyLXotaW5kZXg7XG4gIH1cblxuICBtYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleDogMTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAje2FjZS1zYWFzLiRwYWdlLXRvcC1wYWRkaW5nfSAtICN7YWNlLXNhYXMuJHBhZ2UtdmVydGljYWwtcGFkZGluZ30pO1xuICAgIHBhZGRpbmctbGVmdDogYWNlLXNhYXMuJHBhZ2Utc2lkZS1iYXItd2lkdGg7XG4gICAgcGFkZGluZy10b3A6IGFjZS1zYWFzLiRwYWdlLXRvcC1wYWRkaW5nO1xuICAgIHBhZGRpbmctYm90dG9tOiBhY2Utc2Fhcy4kcGFnZS12ZXJ0aWNhbC1wYWRkaW5nO1xuICB9XG59XG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 42040:
/*!*****************************************************************************************!*\
  !*** ./libs/web/core/src/lib/directives/scroll-into-view/scroll-into-view.directive.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollIntoViewDirective": () => (/* binding */ ScrollIntoViewDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);


/**
 * Represents a directive that would scroll a scrollable container to the hosting element.
 */
class ScrollIntoViewDirective {
    /**
     * Creates new instance of ScrollIntoViewDirective type.
     * @param elementRef A reference to the hosting element.
     * @param renderer The Renderer instance.
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    /**
     * Will scroll into the host element if the input expression is true.
     * @param value If true the host element will be scrolled into the view.
     */
    set shouldScrollIntoView(value) {
        if (value) {
            this.renderer.selectRootElement(this.elementRef.nativeElement, true).scrollIntoView();
        }
    }
}
ScrollIntoViewDirective.ɵfac = function ScrollIntoViewDirective_Factory(t) { return new (t || ScrollIntoViewDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2)); };
ScrollIntoViewDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ScrollIntoViewDirective, selectors: [["", "appScrollIntoView", ""]], inputs: { shouldScrollIntoView: "shouldScrollIntoView" } });


/***/ }),

/***/ 1890:
/*!*****************************************************************!*\
  !*** ./libs/web/core/src/lib/pipes/date-diff/date-diff.pipe.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateDiffPipe": () => (/* binding */ DateDiffPipe)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class DateDiffPipe {
    transform(duration) {
        const hours = Math.floor(moment__WEBPACK_IMPORTED_MODULE_0__.duration(duration).asHours());
        const minutes = Math.floor(moment__WEBPACK_IMPORTED_MODULE_0__.duration(duration).asMinutes() - 60 * hours);
        return `${hours.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
        })}:${minutes.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}`;
    }
}
DateDiffPipe.ɵfac = function DateDiffPipe_Factory(t) { return new (t || DateDiffPipe)(); };
DateDiffPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "appDateDiff", type: DateDiffPipe, pure: true });


/***/ }),

/***/ 80976:
/*!*****************************************************************!*\
  !*** ./libs/web/core/src/lib/pipes/delimiter/delimiter.pipe.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DelimiterPipe": () => (/* binding */ DelimiterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class DelimiterPipe {
    transform(values, delimiter = ', ') {
        return values === null || values.length === 0 ? '-' : values.join(delimiter);
    }
}
DelimiterPipe.ɵfac = function DelimiterPipe_Factory(t) { return new (t || DelimiterPipe)(); };
DelimiterPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "delimiter", type: DelimiterPipe, pure: true });


/***/ }),

/***/ 83535:
/*!**********************************************!*\
  !*** ./libs/web/core/src/lib/pipes/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateDiffPipe": () => (/* reexport safe */ _date_diff_date_diff_pipe__WEBPACK_IMPORTED_MODULE_1__.DateDiffPipe),
/* harmony export */   "DelimiterPipe": () => (/* reexport safe */ _delimiter_delimiter_pipe__WEBPACK_IMPORTED_MODULE_0__.DelimiterPipe),
/* harmony export */   "NullOrUndefinedPipe": () => (/* reexport safe */ _null_or_undefined_null_or_undefined_pipe__WEBPACK_IMPORTED_MODULE_3__.NullOrUndefinedPipe),
/* harmony export */   "PIPES": () => (/* binding */ PIPES),
/* harmony export */   "StringEmptyPipe": () => (/* reexport safe */ _string_empty_string_empty_pipe__WEBPACK_IMPORTED_MODULE_2__.StringEmptyPipe)
/* harmony export */ });
/* harmony import */ var _delimiter_delimiter_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delimiter/delimiter.pipe */ 80976);
/* harmony import */ var _date_diff_date_diff_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-diff/date-diff.pipe */ 1890);
/* harmony import */ var _string_empty_string_empty_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./string-empty/string-empty.pipe */ 78714);
/* harmony import */ var _null_or_undefined_null_or_undefined_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./null-or-undefined/null-or-undefined.pipe */ 9906);




const PIPES = [_delimiter_delimiter_pipe__WEBPACK_IMPORTED_MODULE_0__.DelimiterPipe, _date_diff_date_diff_pipe__WEBPACK_IMPORTED_MODULE_1__.DateDiffPipe, _string_empty_string_empty_pipe__WEBPACK_IMPORTED_MODULE_2__.StringEmptyPipe, _null_or_undefined_null_or_undefined_pipe__WEBPACK_IMPORTED_MODULE_3__.NullOrUndefinedPipe];






/***/ }),

/***/ 9906:
/*!*********************************************************************************!*\
  !*** ./libs/web/core/src/lib/pipes/null-or-undefined/null-or-undefined.pipe.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NullOrUndefinedPipe": () => (/* binding */ NullOrUndefinedPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class NullOrUndefinedPipe {
    transform(value) {
        return !value && value !== '' && value !== 0;
    }
}
NullOrUndefinedPipe.ɵfac = function NullOrUndefinedPipe_Factory(t) { return new (t || NullOrUndefinedPipe)(); };
NullOrUndefinedPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "appNullOrUndefined", type: NullOrUndefinedPipe, pure: true });


/***/ }),

/***/ 78714:
/*!***********************************************************************!*\
  !*** ./libs/web/core/src/lib/pipes/string-empty/string-empty.pipe.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StringEmptyPipe": () => (/* binding */ StringEmptyPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class StringEmptyPipe {
    transform(value, replaceValue) {
        return !value || value === ''
            ? !replaceValue
                ? StringEmptyPipe.replaceEmptyDefaultValue
                : replaceValue
            : value;
    }
}
StringEmptyPipe.replaceEmptyDefaultValue = '-';
StringEmptyPipe.ɵfac = function StringEmptyPipe_Factory(t) { return new (t || StringEmptyPipe)(); };
StringEmptyPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "appStringEmpty", type: StringEmptyPipe, pure: true });


/***/ }),

/***/ 7852:
/*!**************************************************!*\
  !*** ./libs/web/core/src/lib/web-core.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebCoreModule": () => (/* binding */ WebCoreModule)
/* harmony export */ });
/* harmony import */ var _dnc_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @dnc/sidenav */ 57588);
/* harmony import */ var _dnc_top_nav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @dnc/top-nav */ 85203);
/* harmony import */ var _dnc_help_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @dnc/help-page */ 16679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/layout/layout.component */ 78959);
/* harmony import */ var _pipes_delimiter_delimiter_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipes/delimiter/delimiter.pipe */ 80976);
/* harmony import */ var _pipes_date_diff_date_diff_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipes/date-diff/date-diff.pipe */ 1890);
/* harmony import */ var _pipes_string_empty_string_empty_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/string-empty/string-empty.pipe */ 78714);
/* harmony import */ var _pipes_null_or_undefined_null_or_undefined_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/null-or-undefined/null-or-undefined.pipe */ 9906);
/* harmony import */ var _directives_scroll_into_view_scroll_into_view_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/scroll-into-view/scroll-into-view.directive */ 42040);











class WebCoreModule {
}
WebCoreModule.ɵfac = function WebCoreModule_Factory(t) { return new (t || WebCoreModule)(); };
WebCoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: WebCoreModule });
WebCoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _dnc_sidenav__WEBPACK_IMPORTED_MODULE_8__.SidenavModule, _dnc_top_nav__WEBPACK_IMPORTED_MODULE_9__.TopNavModule, _dnc_help_page__WEBPACK_IMPORTED_MODULE_10__.HelpPageModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](WebCoreModule, { declarations: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent, _pipes_delimiter_delimiter_pipe__WEBPACK_IMPORTED_MODULE_1__.DelimiterPipe, _pipes_date_diff_date_diff_pipe__WEBPACK_IMPORTED_MODULE_2__.DateDiffPipe, _pipes_string_empty_string_empty_pipe__WEBPACK_IMPORTED_MODULE_3__.StringEmptyPipe, _pipes_null_or_undefined_null_or_undefined_pipe__WEBPACK_IMPORTED_MODULE_4__.NullOrUndefinedPipe, _directives_scroll_into_view_scroll_into_view_directive__WEBPACK_IMPORTED_MODULE_5__.ScrollIntoViewDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _dnc_sidenav__WEBPACK_IMPORTED_MODULE_8__.SidenavModule, _dnc_top_nav__WEBPACK_IMPORTED_MODULE_9__.TopNavModule, _dnc_help_page__WEBPACK_IMPORTED_MODULE_10__.HelpPageModule], exports: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent, _pipes_delimiter_delimiter_pipe__WEBPACK_IMPORTED_MODULE_1__.DelimiterPipe, _pipes_date_diff_date_diff_pipe__WEBPACK_IMPORTED_MODULE_2__.DateDiffPipe, _pipes_string_empty_string_empty_pipe__WEBPACK_IMPORTED_MODULE_3__.StringEmptyPipe, _pipes_null_or_undefined_null_or_undefined_pipe__WEBPACK_IMPORTED_MODULE_4__.NullOrUndefinedPipe, _directives_scroll_into_view_scroll_into_view_directive__WEBPACK_IMPORTED_MODULE_5__.ScrollIntoViewDirective] }); })();


/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 58685,
	"./af.js": 58685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 32614,
	"./ar-kw.js": 32614,
	"./ar-ly": 18630,
	"./ar-ly.js": 18630,
	"./ar-ma": 28674,
	"./ar-ma.js": 28674,
	"./ar-sa": 49032,
	"./ar-sa.js": 49032,
	"./ar-tn": 24730,
	"./ar-tn.js": 24730,
	"./ar.js": 254,
	"./az": 53052,
	"./az.js": 53052,
	"./be": 60150,
	"./be.js": 60150,
	"./bg": 63069,
	"./bg.js": 63069,
	"./bm": 13466,
	"./bm.js": 13466,
	"./bn": 18516,
	"./bn-bd": 90557,
	"./bn-bd.js": 90557,
	"./bn.js": 18516,
	"./bo": 26273,
	"./bo.js": 26273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 19815,
	"./bs.js": 19815,
	"./ca": 83331,
	"./ca.js": 83331,
	"./cs": 21320,
	"./cs.js": 21320,
	"./cv": 72219,
	"./cv.js": 72219,
	"./cy": 68266,
	"./cy.js": 68266,
	"./da": 66427,
	"./da.js": 66427,
	"./de": 67435,
	"./de-at": 52871,
	"./de-at.js": 52871,
	"./de-ch": 12994,
	"./de-ch.js": 12994,
	"./de.js": 67435,
	"./dv": 82357,
	"./dv.js": 82357,
	"./el": 95649,
	"./el.js": 95649,
	"./en-au": 59961,
	"./en-au.js": 59961,
	"./en-ca": 19878,
	"./en-ca.js": 19878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 70864,
	"./en-ie.js": 70864,
	"./en-il": 91579,
	"./en-il.js": 91579,
	"./en-in": 30940,
	"./en-in.js": 30940,
	"./en-nz": 16181,
	"./en-nz.js": 16181,
	"./en-sg": 44301,
	"./en-sg.js": 44301,
	"./eo": 85291,
	"./eo.js": 85291,
	"./es": 54529,
	"./es-do": 53764,
	"./es-do.js": 53764,
	"./es-mx": 12584,
	"./es-mx.js": 12584,
	"./es-us": 63425,
	"./es-us.js": 63425,
	"./es.js": 54529,
	"./et": 35203,
	"./et.js": 35203,
	"./eu": 70678,
	"./eu.js": 70678,
	"./fa": 83483,
	"./fa.js": 83483,
	"./fi": 96262,
	"./fi.js": 96262,
	"./fil": 52521,
	"./fil.js": 52521,
	"./fo": 34555,
	"./fo.js": 34555,
	"./fr": 63131,
	"./fr-ca": 88239,
	"./fr-ca.js": 88239,
	"./fr-ch": 21702,
	"./fr-ch.js": 21702,
	"./fr.js": 63131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 23821,
	"./ga.js": 23821,
	"./gd": 71753,
	"./gd.js": 71753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 92762,
	"./gom-deva.js": 92762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 82809,
	"./gu.js": 82809,
	"./he": 45402,
	"./he.js": 45402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 10410,
	"./hr.js": 10410,
	"./hu": 38288,
	"./hu.js": 38288,
	"./hy-am": 67928,
	"./hy-am.js": 67928,
	"./id": 71334,
	"./id.js": 71334,
	"./is": 86959,
	"./is.js": 86959,
	"./it": 34864,
	"./it-ch": 51124,
	"./it-ch.js": 51124,
	"./it.js": 34864,
	"./ja": 36141,
	"./ja.js": 36141,
	"./jv": 29187,
	"./jv.js": 29187,
	"./ka": 42136,
	"./ka.js": 42136,
	"./kk": 94332,
	"./kk.js": 94332,
	"./km": 18607,
	"./km.js": 18607,
	"./kn": 84305,
	"./kn.js": 84305,
	"./ko": 70234,
	"./ko.js": 70234,
	"./ku": 16003,
	"./ku.js": 16003,
	"./ky": 75061,
	"./ky.js": 75061,
	"./lb": 32786,
	"./lb.js": 32786,
	"./lo": 66183,
	"./lo.js": 66183,
	"./lt": 50029,
	"./lt.js": 50029,
	"./lv": 24169,
	"./lv.js": 24169,
	"./me": 68577,
	"./me.js": 68577,
	"./mi": 68177,
	"./mi.js": 68177,
	"./mk": 50337,
	"./mk.js": 50337,
	"./ml": 65260,
	"./ml.js": 65260,
	"./mn": 52325,
	"./mn.js": 52325,
	"./mr": 14695,
	"./mr.js": 14695,
	"./ms": 75334,
	"./ms-my": 37151,
	"./ms-my.js": 37151,
	"./ms.js": 75334,
	"./mt": 63570,
	"./mt.js": 63570,
	"./my": 97963,
	"./my.js": 97963,
	"./nb": 88028,
	"./nb.js": 88028,
	"./ne": 86638,
	"./ne.js": 86638,
	"./nl": 50302,
	"./nl-be": 66782,
	"./nl-be.js": 66782,
	"./nl.js": 50302,
	"./nn": 33501,
	"./nn.js": 33501,
	"./oc-lnc": 50563,
	"./oc-lnc.js": 50563,
	"./pa-in": 50869,
	"./pa-in.js": 50869,
	"./pl": 65302,
	"./pl.js": 65302,
	"./pt": 49687,
	"./pt-br": 74884,
	"./pt-br.js": 74884,
	"./pt.js": 49687,
	"./ro": 79107,
	"./ro.js": 79107,
	"./ru": 33627,
	"./ru.js": 33627,
	"./sd": 30355,
	"./sd.js": 30355,
	"./se": 83427,
	"./se.js": 83427,
	"./si": 11848,
	"./si.js": 11848,
	"./sk": 54590,
	"./sk.js": 54590,
	"./sl": 20184,
	"./sl.js": 20184,
	"./sq": 56361,
	"./sq.js": 56361,
	"./sr": 78965,
	"./sr-cyrl": 81287,
	"./sr-cyrl.js": 81287,
	"./sr.js": 78965,
	"./ss": 25456,
	"./ss.js": 25456,
	"./sv": 70451,
	"./sv.js": 70451,
	"./sw": 77558,
	"./sw.js": 77558,
	"./ta": 51356,
	"./ta.js": 51356,
	"./te": 73693,
	"./te.js": 73693,
	"./tet": 21243,
	"./tet.js": 21243,
	"./tg": 42500,
	"./tg.js": 42500,
	"./th": 55768,
	"./th.js": 55768,
	"./tk": 77761,
	"./tk.js": 77761,
	"./tl-ph": 35780,
	"./tl-ph.js": 35780,
	"./tlh": 29590,
	"./tlh.js": 29590,
	"./tr": 33807,
	"./tr.js": 33807,
	"./tzl": 93857,
	"./tzl.js": 93857,
	"./tzm": 60654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 60654,
	"./ug-cn": 30845,
	"./ug-cn.js": 30845,
	"./uk": 19232,
	"./uk.js": 19232,
	"./ur": 47052,
	"./ur.js": 47052,
	"./uz": 77967,
	"./uz-latn": 32233,
	"./uz-latn.js": 32233,
	"./uz.js": 77967,
	"./vi": 98615,
	"./vi.js": 98615,
	"./x-pseudo": 12320,
	"./x-pseudo.js": 12320,
	"./yo": 31313,
	"./yo.js": 31313,
	"./zh-cn": 64490,
	"./zh-cn.js": 64490,
	"./zh-hk": 55910,
	"./zh-hk.js": 55910,
	"./zh-mo": 98262,
	"./zh-mo.js": 98262,
	"./zh-tw": 44223,
	"./zh-tw.js": 44223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(41211), __webpack_exec__(55150)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map