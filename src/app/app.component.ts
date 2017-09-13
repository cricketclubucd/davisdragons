import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SignInPage } from '../pages/signIn/signIn';
import { GetterPage } from '../pages/getter/getter';
import { AddPage } from '../pages/add/add';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {SpectatorPage} from '../pages/spectator/spectator';
import{MemberPage} from '../pages/member/member';
//import{TabBasicContentPage} from '../pages/member/TabBasicContentPage';
import {UmpirePage} from '../pages/umpire/umpire';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SignInPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Spectator', component: SpectatorPage },
        { title: 'Member', component: MemberPage },
        { title: 'Umpire', component: UmpirePage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
