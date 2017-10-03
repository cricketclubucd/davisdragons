import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import { player } from '../../models/player';


import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {stringify} from "@angular/core/src/util";
import 'rxjs/add/operator/take';



@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})


export class AddPage {


    player = {} as player;
    user:any = null;

    name:FirebaseListObservable<any[]>;

    playerRef$: FirebaseListObservable<player[]>;
    userRef$: FirebaseObjectObservable<player>;

    constructor(public navCtrl: NavController,public navPrams: NavParams, private data: AngularFireDatabase) {

      
        this.user = this.navPrams.get('profile');
        console.log(this.user.email);

        this.player.email = this.user.email;
        this.player.picture = this.user.photoURL;
        //this.player.picture = null;

        //this.userRef$ = this.data.object('Players');


    }

    addPlayer(player: any) {
        var pass = document.getElementById('pass');
        var r_pass = document.getElementById('r_pass');
        var name = document.getElementById('name');
        var email = document.getElementById('email');
        var jn = document.getElementById('jn');

        this.player.strikeRate = 0;
        this.player.highscore = 0;
        this.player.wickets = 0;
        this.player.fours = 0;
        this.player.sixes = 0;
        this.player.runs = 0;


        this.name = this.data.list("/ClubParams/ClubRoster/",{
            query: {
                orderByChild: "Jersey_Number",
                equalTo: player.Jersey_Number
            }

        });

        this.name.take(1).subscribe(data =>
        {
            console.log(data.length);
            if(data.length === 1) {

                alert("Jersey Number is already taken enter a diffrent one");



            }
            if (data.length == 0){

                this.data.object(`ClubParams/ClubRoster/` + player.Jersey_Number)
                .set(player);

                this.player = {} as player;

            }
        });
    }

}
