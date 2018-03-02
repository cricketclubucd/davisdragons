import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { key } from '../../models/match';

import { balls } from '../../models/balls';
import { team} from '../../models/team';
import { score} from '../../models/Score';
import { captains} from '../../models/team';
import 'rxjs/add/operator/take';


import {UmpirePage} from "../umpire/umpire";

import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {take} from "rxjs/operator/take";




@Component({
    selector: 'page-create',
    templateUrl: 'createMatch.html'
})
export class CreatePage {


    key = {} as key;
    check1 = 2;
    check2 = 0;
    check3= 0;
    check4= 0;

    balls = {} as balls;
    team = {} as team;
    score = {} as score;
    captains = {} as captains;

    date2:any;


    name:FirebaseListObservable<any>;

    Home:FirebaseListObservable<any>;

    constructor(public navCtrl: NavController, public data: AngularFireDatabase) {


    }

    create(key:key, captains: captains) {

        this.date2 = key.date + '-' + key.MatchKey;
        console.log("Checks: "+ this.check1 + this.check2 + this.check3+ this.check4 );

        this.name = this.data.list("/Matches",{

            query:{
                orderByChild:"ID",
                equalTo:this.date2
            }
        });

        this.name.take(1).subscribe(data =>
        {
            console.log("Key: " + JSON.stringify(data));
            if(data.length == 0) {

                console.log("Key2: " + data.length);
                this.check1 = 1;

            } else {
                console.log("Key3: " + data.length);
                this.check1 = 0;
                alert("A match with this 'Match Key' already exists");
            }

        });


        this.name = this.data.list("/ClubParams/ClubRoster",{
            query: {
                orderByChild: "Jersey_Number",
                equalTo: captains.umpire
            }

        });

        this.name.take(1).subscribe(data =>
        {
            if(data.length == 0) {
                alert("The Umpire's Jersey Number is not in our databasee");
                this.check2 = 0;

            } else {
                this.captains.umpire = captains.umpire;
                this.check2 = 1;


            }
        });


        this.name = this.data.list("/ClubParams/ClubRoster",{
            query: {
                orderByChild: "Jersey_Number",
                equalTo: captains.Awaycaptain
            }

        });

        this.name.take(1).subscribe(data =>
        {
            if(data.length == 0) {
                console.log('A User does not exist');
                alert("The Away Team's Captain's Jersey Number is not in our databasee");
                this.check3 = 0;

            } else {
                this.check3 =1;
                console.log('AUser does exist');
                //console.log(data);
                this.captains.Awaycaptain = captains.Awaycaptain;
            }
        });


        this.Home = this.data.list("/ClubParams/ClubRoster",{
            query: {
                orderByChild: "Jersey_Number",
                equalTo: captains.Homecaptain
            }

        });

        this.Home.take(1).subscribe(data =>
        {
            if(data.length == 0) {
                console.log('HUser does not exist');
                alert("The Home Team's Captain's Jersey Number is not in our database");
                this.check4 = 0;
            } else {
                this.check4 = 1;
                console.log('HUser does exist');
                //console.log(data);
                this.captains.Homecaptain = captains.Homecaptain;
            }
        });


        this.balls.ballid = 0;
        //this.balls.ifWide = "false";
        this.balls.ifExtras = "false";
        //this.balls.isWicket = "false" ;
        this.balls.octant= 0 ;

        key.ballKey = this.balls.ballid;

        this.captains.Homevcaptain = 0;
        this.captains.Awayvcaptain = 0;
        this.captains.Homewk = 0;
        this.captains.Awaywk = 0;


        this.team.toss = "Team";
        this.team.TeamName = " ";
        //this.captains.umpire = 0;

        //this.score.ballsnOver=0;
        //this.score.totalOvers= "";
        this.score.totalRuns=0;
        this.score.totalWickets=0;
        this.score.ballPtr=1;

        console.log("Checks2: "+ this.check1 + this.check2 + this.check3+ this.check4 );

        if(this.check1 == 1 && this.check2 == 1 && this.check3 == 1 && this.check4 == 1) {

            this.data.object(`ClubParams/ClubRoster/`+ captains.umpire +`/accesslevel/` )
                .set(1);

            this.data.object(`ClubParams/ClubRoster/`+ captains.Awaycaptain +`/accesslevel/` )
                .set(5);

            this.data.object(`ClubParams/ClubRoster/`+ captains.Homecaptain +`/accesslevel/` )
                .set(4);



            for (var i = 1; i <= key.numPlayers; i++) {
                this.data.object(`Matches/` + key.date + '-' + key.MatchKey + `/MatchStats/PlayerRoster/Away/check/p` + i + `/`)
                    .set(-1);

            }
            this.data.object(`Matches/` + key.date + '-' + key.MatchKey + `/MatchStats/PlayerRoster/Away/check/amountofPlayers/`)
                .set(key.numPlayers);


            this.data.object(`Matches/` + key.date + '-' + key.MatchKey + `/MatchStats/PlayerRoster/Away/MainRoles/Awaycaptain/`)
                .set(this.captains.Awaycaptain);
            this.data.object(`Matches/` + key.date + '-' + key.MatchKey + `/MatchStats/PlayerRoster/Away/MainRoles/Awayvcaptain/`)
                .set(this.captains.Awayvcaptain);
            this.data.object(`Matches/` + key.date + '-' + key.MatchKey + `/MatchStats/PlayerRoster/Away/MainRoles/Awaywk/`)
                .set(this.captains.Awaywk);

            for (var i = 1; i <= key.numPlayers; i++) {
                this.data.object(`Matches/` + key.date + '-' + key.MatchKey + `/MatchStats/PlayerRoster/Home/check/p` + i + `/`)
                    .set(-1);

            }

            this.data.object(`Matches/` + key.date + '-' + key.MatchKey + `/date/`)
                .set(key.date);
            this.data.object(`Matches/` + key.date + '-' + key.MatchKey + `/key/`)
                .set(key.MatchKey);
            this.data.object(`Matches/` + key.date + '-' + key.MatchKey + `/ID/`)
                .set(this.date2);


            this.data.object(`Matches/` + key.date + '-' + key.MatchKey + `/MatchStats/PlayerRoster/Home/check/amountofPlayers`)
                .set(key.numPlayers);

            this.data.object(`Matches/` + key.date + '-' + key.MatchKey + `/MatchStats/PlayerRoster/Home/MainRoles/HomeCaptain/`)
                .set(this.captains.Homecaptain);
            this.data.object(`Matches/` + key.date + '-' + key.MatchKey + `/MatchStats/PlayerRoster/Home/MainRoles/Homevcaptain/`)
                .set(this.captains.Homevcaptain);
            this.data.object(`Matches/` + key.date + '-' + key.MatchKey + `/MatchStats/PlayerRoster/Home/MainRoles/Homewk/`)
                .set(this.captains.Homewk);
            this.data.object(`Matches/` + key.date + '-' + key.MatchKey + `/MatchStats/Score/`)
                .set(this.score);

            this.data.object(`Matches/` + key.date + '-' + key.MatchKey + `/MatchStats/Toss/`)
                .set(this.team.toss);

            this.data.object(`Matches/` + key.date + '-' + key.MatchKey + `/MatchStats/TeamName/`)
                .set(this.team.TeamName);

            this.data.object(`Matches/` + key.date + '-' + key.MatchKey + `/MatchStats/Umpire/`)
                .set(this.captains.umpire);


            this.data.object(`ClubParams/LiveMatchState/matchPtr`)
                .set(key.date + '-' + key.MatchKey);


            this.navCtrl.setRoot(UmpirePage);

        }

    }
}
