import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { SignInPage } from '../pages/signIn/signIn';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SpectatorPage } from '../pages/spectator/spectator';
import { MemberPage } from '../pages/member/member';
import{TabBasicContentPage} from '../pages/member/member';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    SignInPage,
    HomePage,
    ListPage,
    SpectatorPage,
    MemberPage,
    TabBasicContentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SignInPage,
    HomePage,
    ListPage,
    SpectatorPage,
    MemberPage,
    TabBasicContentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
