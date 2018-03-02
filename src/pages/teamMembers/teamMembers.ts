import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import { player } from '../../models/player';
import { key } from '../../models/match';
import { side } from '../../models/match';
import {FindPlayerPage} from "../FindPlayer/FindPlayer";
import { player1 } from '../../models/playerSide';


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
    name = {} as player1;
    NumofPlayers: any;
    numPlayer: any;
    sideTeam = {} as side;

    open:any;

    playerRef$: FirebaseListObservable<player[]>;

    constructor(public navCtrl: NavController,public navPrams: NavParams, private data: AngularFireDatabase) {

        this.name = this.navPrams.get('playerInfo');
        console.log("name key: " + this.name.startKey);

        this.data.object("Matches/" + this.name.startKey + "/MatchStats/PlayerRoster/Home/check/amountofPlayers/")
            .subscribe(data =>
            {
                this.NumofPlayers = data.$value;
            });


        this.playerInfo = this.data.list("/Matches/" + this.name.startKey + "/MatchStats/PlayerRoster/Home/",{
            query: {
                orderByChild: "Jersey_Number",
                equalTo: this.name.Jersey_Number
            }

        });

        this.playerInfo.take(1).subscribe(data =>
        {
            if(data.length === 1) {

                alert("Player with this Jersey Number is already part of the team.");



            }
            if (data.length == 0){

                var test = 0;


                this.numPlayer = this.data.list("Matches/" + this.name.startKey + "/MatchStats/PlayerRoster/Home/check/");
                this.numPlayer.subscribe(val => {
                    this.open = val;

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
        this.sideTeam.startKey = this.name.startKey;



        while ( test <= this.NumofPlayers) {
            //console.log("user value: "+ user[test].$key);

            if(user[test].$value == -1){
                var save;
                save = user[test].$key;
                //console.log("Save: " + save);
                this.add(save);
                break;
            }
            test += 1;
            if(test == stop)
            {
                alert("You cannot enter more players");
                this.navCtrl.setRoot(FindPlayerPage, {team: this.sideTeam});

            }
        }
        this.navCtrl.setRoot(FindPlayerPage, {team: this.sideTeam});
    }

    add(placeholder: number){



        this.data.object(`Matches/`+ this.name.startKey +`/MatchStats/PlayerRoster/Home/Players/`+ placeholder + `/`)
        .set(this.name.Jersey_Number);

        this.data.object(`Matches/`+ this.name.startKey +`/MatchStats/PlayerRoster/Home/check/`+ placeholder + `/`)
            .set(this.name.Jersey_Number);



    }




}

