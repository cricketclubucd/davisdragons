import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import * as firebase from "firebase/app";
import { player } from '../../models/player';
import {ShowPage} from "../show/show";


import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {stringify} from "@angular/core/src/util";
import 'rxjs/add/operator/take';



@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html'
})


export class ProfilePage {

    fireauth = firebase.auth();
    Player: any = null;
    profile: any = null;
    name:FirebaseListObservable<any[]>;

    public buttonClicked: boolean = false;

    constructor(public navCtrl: NavController,public navPrams: NavParams, private data: AngularFireDatabase) {
        this.fireauth.onAuthStateChanged( user => {
            if (user){
                this.Player = user;
            } else {
                this.Player = null;
            }
        });

    }

    card(){


        this.name =  this.data.list("ClubParams/ClubRoster/",{
            query: {
                orderByChild: "email",
                equalTo: this.Player.email
            }

        });

        this.name.subscribe(data =>
        {
            if(data.length == 0) {
                console.log('User does not exist');
                alert("Player with this Jersey Number is not in our databasee")

            } else {
                this.navCtrl.push(ShowPage, {playerInfo:data });
            }
        });


    }

}

