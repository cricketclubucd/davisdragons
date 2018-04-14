import { Component } from '@angular/core';
import {Alert, NavController} from 'ionic-angular';

import { player } from '../../models/player';
import { key } from '../../models/match';
import { side } from '../../models/match';
import { balls } from '../../models/balls';
import { team} from '../../models/team';
import { score} from '../../models/Score';
import { captains} from '../../models/team';

import { HomePage } from '../home/home';
import { AddPage } from '../add/add';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {ShowPage} from "../show/show";
import {TeamMembersPage} from "../teamMembers/teamMembers";
import {FindPlayerPage} from "../FindPlayer/FindPlayer";


@Component({
    selector: 'page-CheckRole',
    templateUrl: 'CheckRole.html'
})
export class CheckRolePage {



    player= {} as player;
    key = {} as key;
    balls = {} as balls;
    team = {} as team;
    score = {} as score;
    captains = {} as captains;
    cap = {} as captains;
    side = {} as side;

    save: side;
    Matchname:any;
    CaptainCheckHome: any;
    CaptainCheckAway: any;

    NumMatches: number;
    playerInfo:FirebaseListObservable<any[]>;
    playerRef$:FirebaseListObservable<any[]>;

    constructor(public navCtrl: NavController, private data: AngularFireDatabase) {


        this.data.list("/Matches/").subscribe( data =>{

            this.Matchname = data;
            this.NumMatches = data.length;
            console.log(this.Matchname);

        });

    }


    check(key:side, capt: captains){

        var verMatch = false;

        this.side.startKey = key.startKey;
        this.cap = capt;

        if(key.startKey == null)
        {
            alert("Please Enter the Match Key");
        }else {

            verMatch = true;
        }

        if(this.cap.Homecaptain == null && this.cap.Awaycaptain == null)
        {
            alert("Captain enter your Jersey Number");
        }

        else if(this.cap.Homecaptain != null && this.cap.Awaycaptain != null)
        {
            alert("Captain only fill out one slot. Either Home or Away");
        }
        else
        {
            console.log(key.startKey);
            this.checkMatch(key, this.cap);
        }

    }

    checkMatch(key:side, captain:any){
        let confirm1 = false;
        let confirm2 = false;

        var i:number = 1;

        console.log(this.Matchname);

        while(i < this.NumMatches)
        {
            console.log(i);
            console.log("Key.MatchKey: " + key.startKey);
            console.log("this.Matchname[i].$key: " + this.Matchname[i].$key)
            if(this.Matchname[i].$key == key.startKey)
            {

                confirm1 = true;
                console.log("Match exists");
                break;
            }
                i += 1;
            if(i == this.NumMatches)
            {
                alert("A match with that ID does not exist");
            }
        }

        if(confirm1 == true) {

            console.log("Confirm1 is true");
            this.data.object("/Matches/"+ key.startKey + "/MatchStats/PlayerRoster/Home/MainRoles/HomeCaptain/").subscribe(data => {

                console.log("Home Cap: " + data.$value);
                this.CaptainCheckHome = data.$value;
            });

            this.data.object("/Matches/"+ key.startKey + "/MatchStats/PlayerRoster/Away/MainRoles/Awaycaptain/").subscribe(data => {

                this.CaptainCheckAway = data.$value;
            });

            if(captain.Homecaptain != null) {

                console.log("Home Captain is not Null");


                if (this.CaptainCheckHome == captain.Homecaptain) {
                    alert("Congrats! You are the Captain of the Home Team");
                    key.squad = "Home";
                    console.log("Saved Value: " + key.squad);
                    this.navCtrl.push(FindPlayerPage, {team: key});
                }
                else {
                    alert("You Jersey Number does not match the Captain's Jersey Number in our database.");
                    this.cap.Homecaptain = null;

                }
            }

            if(captain.Awaycaptain != null) {

                console.log("Away Captain is not Null");



                if (this.CaptainCheckAway == captain.Awaycaptain) {
                    alert("Congrats! You are the Captain of the Away Team");
                    key.squad = "Away";
                    console.log("Saved Value: " + key.squad);
                    this.navCtrl.push(FindPlayerPage, {team: key} );
                }
                else {
                    alert("You Jersey Number does not match the Captain's Jersey Number in our database.");
                    this.cap.Awaycaptain = null;
                }
            }

        }
    }

}
