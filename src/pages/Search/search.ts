import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { player } from '../../models/player';
import { HomePage } from '../home/home';
import { AddPage } from '../add/add';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {ShowPage} from "../show/show";
import { IonicPage, NavParams, Platform } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireAuth } from 'angularfire2/auth';

import { Facebook, FacebookLoginResponse} from "@ionic-native/facebook";


import { MyApp } from '../../app/app.component';

import { GetterPage } from '../getter/getter';

import * as firebase from "firebase/app";


@Component({
    selector: 'page-search',
    templateUrl: 'search.html'
})
export class SearchPage {



    player= {} as player;

    name:FirebaseListObservable<any[]>;

    fireauth = firebase.auth();

    userProfile:any = null;
    prof: any = null;
    other:FirebaseListObservable<any[]>;

    constructor(public navCtrl: NavController, private data: AngularFireDatabase) {



    }


    check(player: player){
        this.name = this.data.list("/ClubParams/ClubRoster",{
            query: {
                orderByChild: "Jersey_Number",
                equalTo: player.Jersey_Number
            }

        });

        this.name.subscribe(data =>
        {
            if(data.length == 0) {
                console.log('User does not exist');
                alert("Player with this Jersey Number is not in our databasee")

            } else {
                console.log('User does exist');
                //console.log(data);
                this.navCtrl.push(ShowPage, {playerInfo:data });
            }
        });
    }

    new(){
        this.fireauth.onAuthStateChanged( user => {
            if (user){
                this.userProfile = user;
                alert("new: "+ user.email)
            } else {
                this.userProfile = null;
            }
        });

        this.other = this.data.list("/ClubParams/ClubRoster",{
            query: {
                orderByChild: "email",
                equalTo: this.userProfile.email
            }
        });

        this.other.subscribe(data =>
        {
            this.prof = data;
        });

        alert("prof: "+ JSON.stringify(this.prof))

    }


}
