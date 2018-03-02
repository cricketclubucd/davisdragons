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

    forNow:any;
    HomePlayers:any;


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

        this.data.object("ClubParams/LiveMatchState/matchPtr").subscribe(data => {

            console.log("ForNow: " + data.$value);
            this.forNow = data.$value;
            //console.log("Find Player StartKey: " + this.forNow);

        });
        //console.log("Find Player Squad: " + this.forNow.squad);


        this.data.list("Matches/" + this.forNow + "/MatchStats/PlayerRoster/Home/Players/")
            .subscribe(data => {

                this.HomePlayers = data;
                this.players = data.length;
                console.log("Player: " + data.length);
                console.log("Home Players: " + this.HomePlayers);


            });

        this.playerRef$ = this.data.list("ClubParams/ClubRoster");
        this.playerRef$.subscribe(data => {

            this.roster$ = data;

            console.log("Roster: " + data.length);
            this.roster = data.length;
            console.log("roster$: " + this.roster$);
        });



        this.Checker = this.HomePlayers;

            var x:number;
            var y:number ;
            var z: number;

            x=0;
            y=0;

            while (x < this.roster) {
                while (y < this.players) {
                    console.log("X: " + x);
                    console.log("y: " + y);
                    console.log("this.roster$[x].Jersey_Number: " + this.roster$[x].Jersey_Number);
                    console.log("this.HomePlayers[y].$value: " + this.HomePlayers[y].$value);

                    if (this.roster$[x].Jersey_Number == this.HomePlayers[y].$value) {

                        console.log("this.roster$[x]: " + this.roster$[x]);
                        console.log("this.Checker[z]: " + this.Checker[z]);

                        this.Checker[y] = this.roster$[x];
                    }
                    y += 1;
                }
                x += 1;
                y = 0;


            }

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
                alert("Player with this Jersey Number is not in our databasee")

            } else {
                console.log('User does exist');
                console.log("REF DATA: "+ data);
                this.SidePlayer = data[0];
                this.SidePlayer.startKey = this.forNow;
                console.log("Startkey: " + this.forNow);
                console.log("SidePlayer Name: " + this.SidePlayer.FirstName);
                this.navCtrl.push(TeamMembersPage, {playerInfo:this.SidePlayer });
            }
        });

        //console.log("SidePlayer Jersey2: " + this.SidePlayer.Jersey_Number);
        //this.navCtrl.push(TeamMembersPage, {playerInfo:this.spot });

    }

    reload(){

        this.navCtrl.setRoot(FindPlayerPage);



    }

}
