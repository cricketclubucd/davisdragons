import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG } from './app.firebase.cofig';
import { AngularFireDatabaseModule } from 'angularfire2/database';



import { MyApp } from './app.component';
import { SignInPage } from '../pages/signIn/signIn';
import { GetterPage } from '../pages/getter/getter';
import { AddPage } from '../pages/add/add';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SpectatorPage } from '../pages/spectator/spectator';
import { MemberPage } from '../pages/member/member';
import{TabBasicContentPage} from '../pages/member/member';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { GooglePlus } from '@ionic-native/google-plus';
import * as firebase from 'firebase';
import {UmpirePage} from '../pages/umpire/umpire';

@NgModule({
  declarations: [
    MyApp,
    SignInPage,
    GetterPage,
    AddPage,
    HomePage,
    ListPage,
    SpectatorPage,
    MemberPage,
    TabBasicContentPage,
    UmpirePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SignInPage,
    GetterPage,
    AddPage,
    HomePage,
    ListPage,
    SpectatorPage,
    MemberPage,
    TabBasicContentPage,
    UmpirePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
    GooglePlus
  ]
})
export class AppModule {}
