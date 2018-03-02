import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';

import { Facebook, FacebookLoginResponse} from "@ionic-native/facebook";

import { HomePage } from '../home/home';
import { MyApp } from '../../app/app.component';

import { GetterPage } from '../getter/getter';
import { AddPage } from '../add/add';
import { SearchPage } from '../Search/search';
import * as firebase from "firebase/app";

@Component({
  selector: 'page-signIn',
  templateUrl: 'signIn.html'
})

export class SignInPage {

	name:FirebaseListObservable<any[]>;
	bleh:FirebaseListObservable<any[]>;
	items:FirebaseListObservable<any[]>;
	jerseyshore:FirebaseListObservable<any[]>;
	// j_no:FirebaseListObservable<any[]>;
	accessNo$: FirebaseListObservable<any[]>;
	static jersey_num = 0;
	static emailId = "";
	userProfile: any = null;
	fireauth = firebase.auth();

    userProf:any = null;
    loggedout = true;
    loggedin = false;

	constructor(public navCtrl: NavController, private database: AngularFireDatabase, public navParams: NavParams, public googleplus: GooglePlus,
                public platform: Platform, private data: AngularFireDatabase, private facebook: Facebook) {


        this.fireauth.onAuthStateChanged( user => {
            if (user){

                this.loggedout = false;
                this.loggedin = true;

            } else {

                this.loggedout = true;
                this.loggedin = false;
            }
        });


		this.fireauth.onAuthStateChanged( user => {
			if (user){
				this.userProfile = user;
				alert("new: "+ user.email)
			} else {
				this.userProfile = null;
			}
		});
		//alert(SignInPage.emailId)
		// alert(this.userProfile.email);
		this.accessNo$ = this.database.list('ClubParams/ClubRoster');
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
				  //alert("Firebase success: " + JSON.stringify(res));
				  this.check(this.userProfile);

                 	//this.goToAdd(this.userProfile);

				}).catch((err) => {
					  alert('Firebase auth failed' + err);
			})
			}).catch((err) => {
				alert('Error' + err);
			})
	}

	authorize() {
		this.bleh = this.data.list("/ClubParams/ClubRoster",{
            query: {
                orderByChild: "email",
                equalTo: this.userProfile.email
            }

        });

        this.bleh.take(1).subscribe(data =>
        {
            if(data.length == 0) {
                console.log('User does not exist');
                alert("Player with this email is not in our database")

            } else {
                console.log('User does exist');
				console.log(data);
				SignInPage.jersey_num = data[0].Jersey_Number;
			}
		});
		if(SignInPage.jersey_num)
		{
			this.data.object("ClubParams/AccessLevel/" + SignInPage.jersey_num).subscribe(data => {
				alert("AccessLevel: "+ data.$value);
				if(data.$value){
					localStorage.setItem("hello", data.$value);
					window.location.reload();
				}
			});
		}
		//this.data.object('/ClubParams/AccessLevel/' + SignInPage.jersey_num + "/").subscribe(data => console.log("Value: " + data))
	}


    login5()
	{
	    this.facebook.login(["email"]).then((loginResponse) =>
		{

            let cred = firebase.auth.FacebookAuthProvider.credential(loginResponse.authResponse.accessToken);
	        firebase.auth().signInWithCredential(cred).then((info)=>
			{
                this.loggedout = false;
                this.loggedin = true;
	                this.userProf  = info;
	                //alert("lollllllll"+ JSON.stringify(info));
            })
				.catch(function (error)
				{
                	alert('Firebase auth failed' + error);
				})
        })
    }





	check(userprofile: any)
	{

        this.name = this.data.list("/ClubParams/ClubRoster",
			{
            query: {
                orderByChild: "email",
                equalTo: userprofile.email
            }

		});

        this.name.subscribe(data =>
        {
            if(data.length == 0)
            {
                alert('User does not exist'+ data);

                this.navCtrl.push(AddPage, {playerInfo: userprofile});
            } 	else
				{
                alert('User does exist' + data);
                console.log(data);
                this.navCtrl.setRoot(HomePage);
            	}
        });
	}

	logout()
	{
		alert("You have been logged out!");
        var user = firebase.auth().currentUser;

        user.delete().then(function() {
            // User deleted.
        }).catch(function(error) {
            // An error happened.
        });
		this.userProfile= null;
        this.loggedout = true;
        this.loggedin = false;
		this.facebook.logout();
		this.fireauth.signOut();
		// this.googleauth();
		// this.navCtrl.push(MyApp);
	}


    goTohome() {
        this.navCtrl.setRoot(HomePage);
    }

  goToGetter() {
	  this.navCtrl.push(GetterPage);
  }

  goToAdd() {
	  this.navCtrl.push(AddPage);
  }

    goToSearch() {
        this.navCtrl.push(SearchPage);
    }

    isloggedin(){

        alert("New: "+ this.userProfile.email);

    }

}
