import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { player } from '../../models/player';
import { side } from '../../models/match';
import { player1 } from '../../models/playerSide';

import { HomePage } from '../home/home';
import { AddPage } from '../add/add';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {ShowPage} from "../show/show";
import {AwayTeamMembersPage} from "../AwayTeamMembers/AwayteamMembers";


@Component({
    selector: 'page-Awayfind',
    templateUrl: 'AwayFindPlayer.html'
})
export class AwayFindPlayerPage {



    player= {} as player;
    SidePlayer = {} as player1;
    side = {} as side;

    forNow:any;
    AwayPlayers:any;


    name:FirebaseListObservable<any>;
    playerInfo:FirebaseListObservable<any[]>;
    playerRef$:FirebaseListObservable<any[]>;
    players: number;
    roster: number;

    roster$:any;
    AwayChecker: any;

    constructor(public navCtrl: NavController,public navPrams: NavParams, private data: AngularFireDatabase)
    {
        this.AwayChecker = null;

        this.data.object("ClubParams/LiveMatchState/matchPtr").subscribe(data => {

            this.forNow = data.$value;
            //console.log("Find Player StartKey: " + this.forNow);

        });



        this.data.list("Matches/" + this.forNow + "/MatchStats/PlayerRoster/Away/Players/")
            .subscribe(data => {

                this.AwayPlayers = data;
                this.players = data.length;


            });

        this.playerRef$ = this.data.list("ClubParams/ClubRoster");
        this.playerRef$.subscribe(data => {

            this.roster$ = data;

            this.roster = data.length;
        });



        this.AwayChecker = this.AwayPlayers;

            var x:number;
            var y:number ;
            var z: number;

            x=0;
            y=0;

            while (x < this.roster) {
                while (y < this.players) {


                    if (this.roster$[x].Jersey_Number == this.AwayPlayers[y].$value) {

                        this.AwayChecker[y] = this.roster$[x];
                    }
                    y += 1;
                }
                x += 1;
                y = 0;


            }


    }


    check(player: player1){
      this.name =  this.data.list("ClubParams/ClubRoster/",{
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
                var Fornow:any;
                this.SidePlayer = data[0];
                this.SidePlayer.startKey = this.forNow;
                this.navCtrl.push(AwayTeamMembersPage, {playerInfo:this.SidePlayer });
            }
        });
    }

    reload(){

        this.navCtrl.setRoot(AwayFindPlayerPage);



    }

}
