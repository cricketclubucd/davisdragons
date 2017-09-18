import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { player } from '../../models/player';
import { side } from '../../models/match';
import { player1 } from '../../models/playerSide';

import { HomePage } from '../home/home';
import { AddPage } from '../add/add';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {ShowPage} from "../show/show";
import {TeamMembersPage} from "../teamMembers/teamMembers";


@Component({
    selector: 'page-find',
    templateUrl: 'FindPlayer.html'
})
export class FindPlayerPage {



    player= {} as player;
    SidePlayer = {} as player1;
    side = {} as side;
    forNow = {} as side;

    spot:any;


    name:FirebaseListObservable<any>;
    playerInfo:FirebaseListObservable<any[]>;
    playerRef$:FirebaseListObservable<any[]>;
    players: number;
    roster: number;

    roster$:any;
    Checker: any;

    constructor(public navCtrl: NavController,public navPrams: NavParams, private data: AngularFireDatabase)
    {
        this.Checker = null;

        this.forNow = this.navPrams.get('team');
        console.log("Find Player Squad: " + this.forNow.squad);
        console.log("Find Player StartKey: " + this.forNow.startKey);

        this.data.list("Matches/" + this.forNow.startKey + "/MatchStats/PlayerRoster/"+ this.forNow.squad +"/Players/")
            .subscribe(data => {

                this.spot = data;
                this.players = data.length;
                console.log("Player: " + data.length);
                console.log("Player$: " + this.spot);


            });

        this.playerRef$ = this.data.list("ClubParams/ClubRoster");
        this.playerRef$.subscribe(data => {

            this.roster$ = data;

            console.log("Roster: " + data.length);
            this.roster = data.length;
            console.log("roster$: " + this.roster$);
        });



        this.Checker = this.spot;

        var loop = function() {
            var x:number = 0;
            var y:number = 0;
            var z: number = 0;
            while (this.x < this.roster) {
                while (this.y < this.players) {
                    console.log("X: " + x);
                    console.log("y: " + y);
                    console.log("this.roster$[x].Jersey_Number: " + this.roster$[x].Jersey_Number);
                    console.log("this.spot[y].$value: " + this.spot[y].$value);

                    if (this.roster$[x].Jersey_Number == this.spot[y].$value) {

                        console.log("this.roster$[x]: " + this.roster$[x]);
                        console.log("this.Checker[z]: " + this.Checker[z]);

                        this.Checker[y] = this.roster$[x];
                    }
                    y += 1;
                }
                x += 1;
                y = 0;

            }
        }
        loop();
        //console.log("Checker: " + this.Checker[0]);


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
                console.log('User does exist');
                console.log("REF DATA: "+ data);
                this.SidePlayer = data[0];
                this.SidePlayer.squad = this.forNow.squad;
                this.SidePlayer.startKey = this.forNow.startKey;
                console.log("SidePlayer Squad: " + this.SidePlayer.squad);
                console.log("SidePlayer Name: " + this.SidePlayer.FirstName);
                this.SidePlayer.picture = " ";
                this.navCtrl.push(TeamMembersPage, {playerInfo:this.SidePlayer });
            }
        });

        //console.log("SidePlayer Jersey2: " + this.SidePlayer.Jersey_Number);
        //this.navCtrl.push(TeamMembersPage, {playerInfo:this.spot });

    }

    ishere(){



    }

}
