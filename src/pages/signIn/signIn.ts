import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';

import * as firebase from 'firebase';

import { HomePage } from '../home/home';
import { MyApp } from '../../app/app.component';

import { GetterPage } from '../getter/getter';
import { AddPage } from '../add/add';

@Component({
  selector: 'page-signIn',
  templateUrl: 'signIn.html'
})
export class SignInPage {

    name:FirebaseListObservable<any[]>;
	userProfile: any = null;
	fireauth = firebase.auth();
	constructor(public navCtrl: NavController, public navParams: NavParams, public googleplus: GooglePlus, public platform: Platform, private data: AngularFireDatabase) {
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
				  this.check(this.userProfile);

				}).catch((err) => {
					  alert('Firebase auth failed' + err);
			})
			}).catch((err) => {
				alert('Error' + err);
			})
	}

	check(userprofile:any)
	{

        this.name = this.data.list("/Players",{
            query: {
                orderByChild: "email",
                equalTo: userprofile.email
            }

        });

        this.name.subscribe(data =>
        {
            if(data.length == 0) {
                console.log('User does not exist');
                console.log(data);
                this.navCtrl.push(AddPage);

            } else {
                console.log('User does exist');
                console.log(data);
                this.navCtrl.push(HomePage);
            }
        });



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


  goToGetter() {
	  this.navCtrl.push(GetterPage);
  }

  goToAdd() {
	  this.navCtrl.push(AddPage);
  }



}
