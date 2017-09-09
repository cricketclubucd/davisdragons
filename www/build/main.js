webpackJsonp([0],{

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/kravisankaran/cricket/davisdragons/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/Users/kravisankaran/cricket/davisdragons/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TabBasicContentPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberPage; });
/* unused harmony export FormsPage */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabBasicContentPage = (function () {
    function TabBasicContentPage(platform) {
        this.isAndroid = false;
        this.isAndroid = platform.is('android');
    }
    return TabBasicContentPage;
}());
TabBasicContentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n    <ion-header>\n      <ion-navbar>\n        <ion-title>Tabs</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content>\n    </ion-content>\n"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]])
], TabBasicContentPage);

var MemberPage = (function () {
    function MemberPage() {
        this.rootPage = TabBasicContentPage;
    }
    return MemberPage;
}());
MemberPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n    <ion-tabs class=\"tabs-basic\">\n      <ion-tab tabTitle=\"Music\" [root]=\"rootPage\"></ion-tab>\n      <ion-tab tabTitle=\"Movies\" [root]=\"rootPage\"></ion-tab>\n      <ion-tab tabTitle=\"Games\" [root]=\"rootPage\"></ion-tab>\n    </ion-tabs>\n"
    })
], MemberPage);

var FormsPage = (function () {
    function FormsPage(formBuilder) {
        this.formBuilder = formBuilder;
        this.todo = this.formBuilder.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            description: [''],
        });
    }
    FormsPage.prototype.logForm = function () {
        console.log(this.todo.value);
    };
    return FormsPage;
}());
FormsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n    <form [formGroup]=\"todo\" (ngSubmit)=\"logForm()\">\n      <ion-item>\n        <ion-label>Todo</ion-label>\n        <ion-input type=\"text\" formControlName=\"title\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Description</ion-label>\n        <ion-textarea formControlName=\"description\"></ion-textarea>\n      </ion-item>\n      <button ion-button type=\"submit\" [disabled]=\"!todo.valid\">Submit</button>\n    </form>\n  "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], FormsPage);

//# sourceMappingURL=member.js.map

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 201:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 201;

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_plus__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignInPage = (function () {
    function SignInPage(navCtrl, navParams, googleplus) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.googleplus = googleplus;
        this.userProfile = null;
        this.fireauth = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]();
        this.fireauth.onAuthStateChanged(function (user) {
            if (user) {
                _this.userProfile = user;
            }
            else {
                _this.userProfile = null;
            }
        });
    }
    SignInPage.prototype.googleauth = function () {
        var _this = this;
        this.googleplus.login({
            'webClientId': '881322195809-mrs1rnkn77qnovhm89h2uhqd2thrrbor.apps.googleusercontent.com',
            'offline': true
        })
            .then(function (res) {
            var firecreds = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"].GoogleAuthProvider.credential(res.idToken);
            _this.fireauth.signInWithCredential(firecreds).then(function (res) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                alert("Firebase success: " + JSON.stringify(res));
            }).catch(function (err) {
                alert('Firebase auth failed' + err);
            });
        }).catch(function (err) {
            alert('Error' + err);
        });
    };
    SignInPage.prototype.isloggedin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    SignInPage.prototype.logout = function () {
        alert("Are you sure you want to remove this account forever?");
        this.userProfile = null;
        this.googleplus.logout();
        this.fireauth.signOut();
        // this.googleauth();
        // this.navCtrl.push(MyApp);
    };
    return SignInPage;
}());
SignInPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signIn',template:/*ion-inline-start:"/Users/kravisankaran/cricket/davisdragons/src/pages/signIn/signIn.html"*/'<ion-content padding>\n<ion-fab right bottom>\n<button ion-fab color="secondary" (click)="googleauth()"><ion-icon name="add"></ion-icon></button>\n</ion-fab>\n \n  <button ion-button large  color="danger" round (click)="googleauth()" *ngIf="!userProfile">\n    <ion-icon name="logo-googleplus"></ion-icon>\n    Login with Google\n  </button>\n \n  <ion-item *ngIf="userProfile">\n    <ion-avatar (click)="isloggedin()" item-left>\n      <img [src]="userProfile.photoURL">\n    </ion-avatar>\n    <h2 (click)="isloggedin()">{{ userProfile.displayName }}</h2>\n    <h3>{{ userProfile.email }}</h3>\n    <ion-icon name="remove" item-right (click)="logout()"></ion-icon>\n  </ion-item>\n</ion-content>\n\n'/*ion-inline-end:"/Users/kravisankaran/cricket/davisdragons/src/pages/signIn/signIn.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_plus__["a" /* GooglePlus */]])
], SignInPage);

//# sourceMappingURL=signIn.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"/Users/kravisankaran/cricket/davisdragons/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/kravisankaran/cricket/davisdragons/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpectatorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpectatorPage = (function () {
    function SpectatorPage(platform, actionsheetCtrl) {
        this.platform = platform;
        this.actionsheetCtrl = actionsheetCtrl;
        this.roster = "india";
        this.isAndroid = false;
        this.isAndroid = platform.is('android');
    }
    return SpectatorPage;
}());
SpectatorPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/kravisankaran/cricket/davisdragons/src/pages/spectator/spectator.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Spectator Screen</ion-title>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n      <ion-segment [(ngModel)]="roster">\n        <ion-segment-button value="india">\n          India\n        </ion-segment-button>\n        <ion-segment-button value="aussies">\n          Austrailia\n        </ion-segment-button>\n        <ion-segment-button value="ducklings">\n          Ducklings\n        </ion-segment-button>\n      </ion-segment>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div [ngSwitch]="roster">\n    <ion-list *ngSwitchCase="\'india\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/virat.jpg">\n        </ion-thumbnail>\n        <h2>Virat Kohli</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/rohit.jpg">\n        </ion-thumbnail>\n        <h2>Rohit Sharma</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/ashwin.jpg">\n        </ion-thumbnail>\n        <h2>R Ashwin</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/jadeja.jpg">\n        </ion-thumbnail>\n        <h2>R Jadeja</h2>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'aussies\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/steven.jpg">\n        </ion-thumbnail>\n        <h2>Steve Smith</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/finch.jpg">\n        </ion-thumbnail>\n        <h2>Aaron Finch</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/warner.jpg">\n        </ion-thumbnail>\n        <h2>David Warner</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/maxwell.jpg">\n        </ion-thumbnail>\n        <h2>Glenn Maxwell</h2>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'ducklings\'">\n      <ion-item>\n        <!--ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-duckling-1.jpg">\n        </ion-thumbnail!-->\n        <h2>Daffy</h2>\n      </ion-item>\n      <ion-item>\n        <!--ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-duckling-2.jpg">\n        </ion-thumbnail!-->\n        <h2>Huey</h2>\n      </ion-item>\n      <ion-item>\n        <!--ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-duckling-3.jpg">\n        </ion-thumbnail!-->\n        <h2>Dewey</h2>\n      </ion-item>\n      <ion-item>\n        <!--ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-duckling-4.jpg">\n        </ion-thumbnail!-->\n        <h2>Louie</h2>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n\n\n\n<!--ion-content padding class="action-sheets-basic-page">\n\n  <button ion-button block (click)="openMenu()">\n    Show Action Sheet\n  </button>\n</ion-content !-->\n'/*ion-inline-end:"/Users/kravisankaran/cricket/davisdragons/src/pages/spectator/spectator.html"*/,
        selector: 'spectator.scss'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], SpectatorPage);

//# sourceMappingURL=spectator.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UmpirePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UmpirePage = (function () {
    function UmpirePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.score = 0;
        this.score = 0;
    }
    UmpirePage.prototype.incrementone = function () {
        this.score = this.score + 1;
    };
    UmpirePage.prototype.increment2 = function () {
        this.score = this.score + 2;
    };
    UmpirePage.prototype.incrementthree = function () {
        this.score = this.score + 3;
    };
    UmpirePage.prototype.incrementfour = function () {
        this.score = this.score + 4;
    };
    UmpirePage.prototype.incrementsix = function () {
        this.score = this.score + 6;
    };
    UmpirePage.prototype.increment0 = function () {
        this.score = this.score + 0;
    };
    return UmpirePage;
}());
UmpirePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/kravisankaran/cricket/davisdragons/src/pages/umpire/umpire.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Umpire</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n  <ion-content>\n    <div text-center>\n    <button ion-button  color="danger" (click) = \'incrementone();\'>+1</button>\n    <button ion-button  color="danger" (click) = \'increment2();\'>+2</button>\n    <button ion-button  color="danger" (click) = \'incrementthree();\'>+3</button>\n    <button ion-button  color="danger" (click) = \'incrementfour();\'>+4</button>\n    <button ion-button  color="danger" (click) = \'incrementsix();\'>+6</button>\n     <button ion-button color ="danger" (click) = \'increment0();\'> dot </button>\n    <!--button ion-button  color="danger" (click) = \'dot();\'>dot</button!-->\n\n      </div>\n     <h1>The Score is {{score}} </h1>\n\n</ion-content>\n'/*ion-inline-end:"/Users/kravisankaran/cricket/davisdragons/src/pages/umpire/umpire.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], UmpirePage);

//# sourceMappingURL=umpire.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShowPage = (function () {
    function ShowPage(navCtrl, database) {
        this.navCtrl = navCtrl;
        this.database = database;
        this.userRef$ = this.database.list('Players');
    }
    return ShowPage;
}());
ShowPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-show',template:/*ion-inline-start:"/Users/kravisankaran/cricket/davisdragons/src/pages/show/show.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu" ></ion-icon>\n    </button>\n    <ion-title class="bar">Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n<ion-fab right bottom>\n<button ion-fab color="white"><ion-icon name="add"></ion-icon></button>\n</ion-fab>\n<ion-list>\n	<ion-list-header text-center class="headfont"> Show All Players </ion-list-header>\n\n\n</ion-list>\n\n<div padding>\n\n</div>\n\n<ion-list>\n  <ion-item *ngFor ="let item of userRef$ | async" >\n    <h2>Player Name: {{item.name}}</h2>\n    <h3>Player Email: {{item.email}}</h3>\n  </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/kravisankaran/cricket/davisdragons/src/pages/show/show.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], ShowPage);

//# sourceMappingURL=show.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(315);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_firebase_cofig__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signIn_signIn__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_getter_getter__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_add_add__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_show_show__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_list_list__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_spectator_spectator__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_member_member__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_firebase_firebase__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_google_plus__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_umpire_umpire__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_signIn_signIn__["a" /* SignInPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_getter_getter__["a" /* GetterPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_add_add__["a" /* AddPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_show_show__["a" /* ShowPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_spectator_spectator__["a" /* SpectatorPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_member_member__["a" /* MemberPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_member_member__["b" /* TabBasicContentPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_umpire_umpire__["a" /* UmpirePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_4__app_firebase_cofig__["a" /* FIREBASE_CONFIG */]),
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabaseModule */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_signIn_signIn__["a" /* SignInPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_getter_getter__["a" /* GetterPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_add_add__["a" /* AddPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_show_show__["a" /* ShowPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_spectator_spectator__["a" /* SpectatorPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_member_member__["a" /* MemberPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_member_member__["b" /* TabBasicContentPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_umpire_umpire__["a" /* UmpirePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_17__providers_firebase_firebase__["a" /* FirebaseProvider */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_google_plus__["a" /* GooglePlus */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);

var FIREBASE_CONFIG = {
    apiKey: "AIzaSyD6anW3vwA6GRjWrrdz2L43QEqOVecGrgo",
    authDomain: "davisdragons-b41c9.firebaseapp.com",
    databaseURL: "https://davisdragons-b41c9.firebaseio.com",
    projectId: "davisdragons-b41c9",
    storageBucket: "davisdragons-b41c9.appspot.com",
    messagingSenderId: "881322195809"
};
// var firebase = require('firebase');
// var firebaseui = require('firebaseui');
__WEBPACK_IMPORTED_MODULE_0_firebase__["initializeApp"](FIREBASE_CONFIG);
//# sourceMappingURL=app.firebase.cofig.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_signIn_signIn__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_spectator_spectator__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_member_member__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_umpire_umpire__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









//import{TabBasicContentPage} from '../pages/member/TabBasicContentPage';

var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_signIn_signIn__["a" /* SignInPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */] },
            { title: 'Spectator', component: __WEBPACK_IMPORTED_MODULE_7__pages_spectator_spectator__["a" /* SpectatorPage */] },
            { title: 'Member', component: __WEBPACK_IMPORTED_MODULE_8__pages_member_member__["a" /* MemberPage */] },
            { title: 'Umpire', component: __WEBPACK_IMPORTED_MODULE_9__pages_umpire_umpire__["a" /* UmpirePage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/kravisankaran/cricket/davisdragons/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/kravisankaran/cricket/davisdragons/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetterPage = (function () {
    function GetterPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return GetterPage;
}());
GetterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-getter',template:/*ion-inline-start:"/Users/kravisankaran/cricket/davisdragons/src/pages/getter/getter.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n<ion-fab right bottom>\n<button ion-fab color="blue"><ion-icon name="add"></ion-icon></button>\n</ion-fab>\n<ion-list>\n	<ion-list-header text-center class="headfont"> Search </ion-list-header>\n	<ion-item>\n		<ion-label floating>Jersey Number</ion-label>\n		<ion-input type="text"></ion-input>\n	</ion-item>\n\n	<ion-item>\n		<ion-label floating>Name</ion-label>\n		<ion-input type="text"></ion-input>\n	</ion-item>\n\n  <ion-item>\n		<ion-label floating>Economy</ion-label>\n		<ion-input type="text"></ion-input>\n	</ion-item>\n\n</ion-list>\n\n<div padding>\n	<button block (click)="goToHome()">Search</button>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/kravisankaran/cricket/davisdragons/src/pages/getter/getter.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], GetterPage);

//# sourceMappingURL=getter.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__show_show__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddPage = (function () {
    function AddPage(navCtrl, database) {
        this.navCtrl = navCtrl;
        this.database = database;
        this.user = {};
        this.userRef$ = this.database.list('Players');
    }
    AddPage.prototype.addPlayer = function (user) {
        var pass = document.getElementById('pass');
        var r_pass = document.getElementById('r_pass');
        var name = document.getElementById('name');
        var email = document.getElementById('email');
        var jn = document.getElementById('jn');
        this.userRef$.push(this.user);
        this.user = {};
    };
    AddPage.prototype.show = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__show_show__["a" /* ShowPage */]);
    };
    return AddPage;
}());
AddPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add',template:/*ion-inline-start:"/Users/kravisankaran/cricket/davisdragons/src/pages/add/add.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu" ></ion-icon>\n    </button>\n    <ion-title class="bar">Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n<ion-fab right bottom>\n<button ion-fab color="white"><ion-icon name="add"></ion-icon></button>\n</ion-fab>\n<ion-list>\n	<ion-list-header text-center class="headfont"> Add Player </ion-list-header>\n	<ion-item>\n		<ion-label floating>Jersey Number</ion-label>\n		<ion-input id ="jr" type="Number"[(ngModel)] = "user.Jersey_Number"></ion-input>\n	</ion-item>\n\n	<ion-item>\n		<ion-label floating>Name</ion-label>\n		<ion-input id ="name" type="text" [(ngModel)] = "user.name"></ion-input>\n	</ion-item>\n\n  <ion-item>\n		<ion-label floating>Email</ion-label>\n		<ion-input id ="email" type="text" [(ngModel)] = "user.email"></ion-input>\n	</ion-item>\n  <ion-item>\n		<ion-label floating>Password</ion-label>\n		<ion-input id ="pass" type="password"[(ngModel)] = "user.password"></ion-input>\n	</ion-item>\n  <ion-item>\n		<ion-label floating>Repeat Password</ion-label>\n		<ion-input id ="rpass" type="password"[(ngModel)] = "user.r_password"></ion-input>\n	</ion-item>\n\n</ion-list>\n\n<div padding>\n	<button ion-button  type="button" (click)="addPlayer(user)">Add</button>\n  <button ion-button  type="button" (click)="show()">Show all players</button>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/kravisankaran/cricket/davisdragons/src/pages/add/add.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
], AddPage);

//# sourceMappingURL=add.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var FirebaseProvider = (function () {
    function FirebaseProvider(http) {
        this.http = http;
        console.log('Hello FirebaseProvider Provider');
    }
    return FirebaseProvider;
}());
FirebaseProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], FirebaseProvider);

//# sourceMappingURL=firebase.js.map

/***/ })

},[298]);
//# sourceMappingURL=main.js.map