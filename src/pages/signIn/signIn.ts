import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

import { HomePage } from '../home/home';
import { MyApp } from '../../app/app.component';

@Component({
  selector: 'page-signIn',
  templateUrl: 'signIn.html'
})
export class SignInPage {
	userProfile: any = null;
	fireauth = firebase.auth();
	constructor(public navCtrl: NavController, public navParams: NavParams, public googleplus: GooglePlus, public platform: Platform) {
		this.fireauth.onAuthStateChanged( user => {
			if (user){
				this.userProfile = user; 
			} else {
				this.userProfile = null;
			}
		});
	}
	
	googleauth() {
		var clientInfo = { 
			'webClientId' : '881322195809-mrs1rnkn77qnovhm89h2uhqd2thrrbor.apps.googleusercontent.com',
			'offline' : true
		};
		
		if (this.platform.is('android'))
		{
			clientInfo.webClientId = '881322195809-mrs1rnkn77qnovhm89h2uhqd2thrrbor.apps.googleusercontent.com';
			clientInfo.offline = true;
		}
		this.googleplus.login(clientInfo)
		  .then((res) => {
			  const firecreds = firebase.auth.GoogleAuthProvider.credential(res.idToken);
			 this.fireauth.signInWithCredential(firecreds).then((res) => {
				  this.navCtrl.setRoot(HomePage);
				  alert("Firebase success: " + JSON.stringify(res));
				}).catch((err) => {
					  alert('Firebase auth failed' + err);
			})
			}).catch((err) => {
				alert('Error' + err);
			})
	}
	
	isloggedin() {
		this.navCtrl.setRoot(HomePage);
	}
	
	logout()
	{
		alert("Are you sure you want to remove this account forever?");
		this.userProfile= null;
		this.googleplus.logout();
		this.fireauth.signOut();
		// this.googleauth();
		// this.navCtrl.push(MyApp);
	}
}
