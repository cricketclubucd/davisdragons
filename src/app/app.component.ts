import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SignInPage } from '../pages/signIn/signIn';
import { GetterPage } from '../pages/getter/getter';
import { AddPage } from '../pages/add/add';
import { SearchPage } from '../pages/Search/search';
import { ShowPage } from '../pages/show/show';
import { CheckRolePage } from '../pages/CheckRole/CheckRole';
import {AwayTeamMembersPage} from "../pages/AwayTeamMembers/AwayteamMembers";
import {MatchOfflinePage} from "../pages/matchOffline/matchOffline";
import {ExtrasPage} from "../pages/extras/extras";


import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {SpectatorPage} from '../pages/spectator/spectator';
import{MemberPage} from '../pages/member/member';
//import{TabBasicContentPage} from '../pages/member/TabBasicContentPage';
import {UmpirePage} from '../pages/umpire/umpire';
import {CreatePage} from '../pages/createMatch/createMatch';
import {FindPlayerPage} from "../pages/FindPlayer/FindPlayer";
import {AwayFindPlayerPage} from "../pages/AwayFindPlayer/AwayFindPlayer";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SignInPage;

  pages_0: Array<{title: string, component: any}>
  pages_1: Array<{title: string, component: any}>;
  pages_2: Array<{title: string, component: any}>;
  pages_3: Array<{title: string, component: any}>;
  pages_4: Array<{title: string, component: any}>;
  pages_5: Array<{title: string, component: any}>;
  pages_6: Array<{title: string, component: any}>;
  access_val: any;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
      var helloVal = localStorage.getItem("hello");
      if(helloVal)
      {
        this.access_val = helloVal.toString();
        localStorage.removeItem("hello");
      }

    // used for an example of ngFor and navigation
    this.pages_0 = [
      { title: 'Home', component: HomePage },
        { title: 'Add to Home Team', component: FindPlayerPage },
        { title: 'Add to Away Team', component: AwayFindPlayerPage },
      { title: 'List', component: ListPage },
      { title: 'Spectator', component: SpectatorPage },
        { title: 'Member', component: MemberPage },
        { title: 'Umpire', component: UmpirePage },
        { title: 'Search Player', component: SearchPage },
        { title: 'Create Match', component: CreatePage },
        { title: 'Match End', component: MatchOfflinePage }

    ];
    this.pages_1 = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
        { title: 'Add to Home Team', component: FindPlayerPage },
        { title: 'Add to Away Team', component: AwayFindPlayerPage },
      { title: 'Spectator', component: SpectatorPage },
        { title: 'Member', component: MemberPage },
        { title: 'Umpire', component: UmpirePage },
        { title: 'Search Player', component: SearchPage },
        { title: 'Create Match', component: CreatePage },
    ];
    this.pages_2 = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
        { title: 'Member', component: MemberPage },
        { title: 'Search Player', component: SearchPage },
    ];
    this.pages_3 = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
        { title: 'Member', component: MemberPage },
        { title: 'Search Player', component: SearchPage },
    ];
    this.pages_4 = [
      { title: 'Spectator', component: SpectatorPage },
        { title: 'Search Player', component: SearchPage },
    ];
      this.pages_5 = [
          { title: 'Home', component: HomePage },
          { title: 'List', component: ListPage },
          { title: 'Add to Home Team', component: FindPlayerPage },
          { title: 'Member', component: MemberPage },
          { title: 'Search Player', component: SearchPage },
      ];

      this.pages_6 = [
          { title: 'Home', component: HomePage },
          { title: 'List', component: ListPage },
          { title: 'Add to Away Team', component: AwayFindPlayerPage },
          { title: 'Member', component: MemberPage },
          { title: 'Search Player', component: SearchPage },
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
