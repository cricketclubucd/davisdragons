import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import { player } from '../../models/player';
import { key } from '../../models/match';
import {FindPlayerPage} from "../FindPlayer/FindPlayer";


import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {stringify} from "@angular/core/src/util";
import 'rxjs/add/operator/take';


@Component({
    selector: 'page-team',
    templateUrl: 'teamMembers.html'
})


export class TeamMembersPage {


    player = {} as player;
    key = {} as key;
    playerInfo:FirebaseListObservable<any[]>;
    name:FirebaseObjectObservable<player>;
    NumofPlayers: any;
    numPlayer: any;

    open:any;

    playerRef$: FirebaseListObservable<player[]>;

    constructor(public navCtrl: NavController,public navPrams: NavParams, private data: AngularFireDatabase) {


        this.name = this.navPrams.get('playerInfo');
        console.log(this.name[0].FirstName);

        this.data.object("Matches/M3/MatchStats/PlayerRoster/Away/check/amountofPlayers")
            .subscribe(data =>
            {
                this.NumofPlayers = data.$value;

            });


        this.playerInfo = this.data.list("/Matches/M3/MatchStats/PlayerRoster/Away/",{
            query: {
                orderByChild: "Jersey_Number",
                equalTo: this.name[0].Jersey_Number
            }

        });

        this.playerInfo.take(1).subscribe(data =>
        {
            console.log(data.length);
            if(data.length === 1) {

                alert("Jersey Number is already taken enter a diffrent one");



            }
            if (data.length == 0){

                var test = 0;

                //console.log(this.NumofPlayers);

                this.numPlayer = this.data.list("Matches/M3/MatchStats/PlayerRoster/Home/check/");
                this.numPlayer.subscribe(val => {
                    this.open = val;
                    console.log(this.open);

                });
            }
        });


    }


    goToaddPlayer(){

        this.check(this.open);



    }

    check(user:any){
        var test: number = 1;
        var stop:number = 0;
        stop += this.NumofPlayers;



        while ( test <= this.NumofPlayers) {

            if(user[test].$value == -1){
                console.log("Test: " + test);
                console.log("Value: " + user[test].$value);
                var save = test;
                this.add(save);
                console.log("Save: "+ save);
                break;
            }
            test += 1;
            if(test == stop)
            {
                alert("You cannot enter more players");
                this.navCtrl.push(FindPlayerPage);

            }
        }
        this.navCtrl.push(FindPlayerPage);
    }

    add(placeholder: number){

        this.data.object(`Matches/M3/MatchStats/PlayerRoster/Home/Players/p`+ placeholder + `/`)
        .set(this.name[0].Jersey_Number);

        this.data.object(`Matches/M3/MatchStats/PlayerRoster/Home/check/p`+ placeholder + `/`)
            .set(this.name[0].Jersey_Number);


    }




}

