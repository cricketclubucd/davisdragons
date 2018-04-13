import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { key } from '../../models/match';

import { balls } from '../../models/balls';
import {captains, team} from '../../models/team';
import { score} from '../../models/Score';
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
    check1 = 0;
    check2 = 2;
    check3= 0;
    check4= 0;
    check5= 0;

    check6 = 0;
    check7 = 2;
    check8= 0;
    check9= 0;
    check10= 0;
    go = 0;

    balls = {} as balls;
    team = {} as team;
    score = {} as score;
    captains = {} as captains;

    date2:any;


    name1:FirebaseListObservable<any>;
    name2:FirebaseListObservable<any>;
    name3:FirebaseListObservable<any>;
    name4:FirebaseListObservable<any>;

    Home:FirebaseListObservable<any>;

    constructor(public navCtrl: NavController, public data: AngularFireDatabase) {


    }


    empty(key:key, captains: captains){

        if(key.MatchKey == "")
            alert("Please enter a match key!");
        else
            this.check6 = 2;

        if(key.date == "")
            alert("Please enter a match date!");
        else
            this.check7 = 2;

        if(key.numPlayers == null)
            alert("Please enter number of players in each team!");
        else
            this.check8 = 2;

        if(captains.Homecaptain == null)
            alert("Please enter a home team captain!");
        else
            this.check9 = 2;

        if(captains.Awaycaptain == null) {
            alert("Please enter a away team captain!");
        }else
            this.check10 = 2;


        if(this.check6 == 2 && this.check7 == 2 && this.check8 == 2 && this.check9 == 2 && this.check10 == 2) {
            this.create(key, captains);
        }
        else
            alert("Empty");



    }

    create(key:key, captains: captains) {

        this.date2 = key.date + '-' + key.MatchKey;
        console.log("Checks: "+ this.check1 + this.check2 + this.check3+ this.check4 );

        this.name1 = this.data.list("/Matches",{

            query:{
                orderByChild:"ID",
                equalTo:this.date2
            }
        });


        this.name2 = this.data.list("/ClubParams/ClubRoster",{
            query: {
                orderByChild: "Jersey_Number",
                equalTo: captains.umpire
            }

        });




        this.name3 = this.data.list("/ClubParams/ClubRoster",{
            query: {
                orderByChild: "Jersey_Number",
                equalTo: captains.Awaycaptain
            }

        });


        this.name4 = this.data.list("/ClubParams/ClubRoster",{
            query: {
                orderByChild: "Jersey_Number",
                equalTo: captains.Homecaptain
            }

        });


        this.make(this.name1,this.name2,this.name3,this.name4,key,captains);






    }

    make(n1,n2,n3,n4,k1:key,c1:captains){
        //alert("New: " + JSON.stringify(n1));

        n1.take(1).subscribe(data =>
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

        n2.take(1).subscribe(data =>
        {
            console.log("n2 length: " + data.length);
            if(data.length == 1) {
                this.check2 = 1;
                console.log("Check5: "+ this.check1 + this.check2 + this.check3+ this.check4 );
                this.go = 1;

            } else {
                alert("The Umpire's Jersey Number is not in our database");
                this.captains.umpire = c1.umpire;
                this.check2 = 0;


            }
        });

        n3.take(1).subscribe(data =>
        {
            if(data.length == 0) {
                console.log('A User does not exist');
                alert("The Away Team's Captain's Jersey Number is not in our databasee");
                this.check3 = 0;

            } else {
                this.check3 =1;
                console.log('AUser does exist');
                console.log("Checks3: "+ this.check1 + this.check2 + this.check3+ this.check4 );
                //console.log(data);
                this.captains.Awaycaptain = c1.Awaycaptain;
            }
        });

        n4.take(1).subscribe(data =>
        {
            if(data.length == 0) {
                console.log('HUser does not exist');
                console.log("Checks4: "+ this.check1 + this.check2 + this.check3+ this.check4 );
                alert("The Home Team's Captain's Jersey Number is not in our database");
                this.check4 = 0;
            } else {
                this.check4 = 1;
                console.log('HUser does exist');
                //console.log(data);
                this.captains.Homecaptain = c1.Homecaptain;
            }
        });

        console.log("Checks2: "+ this.check1 + this.check2 + this.check3+ this.check4 );



        this.balls.ballid = 0;
//this.balls.ifWide = "false";
        //this.balls.ifExtras = "false";
//this.balls.isWicket = "false" ;
        this.balls.octant= 0 ;

        k1.ballKey = this.balls.ballid;

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



        if(this.check1 == 1 && this.check2 == 1 && this.check3 == 1 && this.check4 == 1 && this.go == 1) {

            this.data.object(`ClubParams/ClubRoster/` + c1.umpire + `/accesslevel/`)
                .set(1);

            this.data.object(`ClubParams/ClubRoster/` + c1.Awaycaptain + `/accesslevel/`)
                .set(5);

            this.data.object(`ClubParams/ClubRoster/` + c1.Homecaptain + `/accesslevel/`)
                .set(4);


            for (var i = 1; i <= k1.numPlayers; i++) {
                this.data.object(`Matches/` + k1.date + '-' + k1.MatchKey + `/MatchStats/PlayerRoster/Away/check/p` + i + `/`)
                    .set(-1);

            }
            this.data.object(`Matches/` + k1.date + '-' + k1.MatchKey + `/MatchStats/PlayerRoster/Away/check/amountofPlayers/`)
                .set(k1.numPlayers);


            this.data.object(`Matches/` + k1.date + '-' + k1.MatchKey + `/MatchStats/PlayerRoster/Away/MainRoles/Awaycaptain/`)
                .set(this.captains.Awaycaptain);
            this.data.object(`Matches/` + k1.date + '-' + k1.MatchKey + `/MatchStats/PlayerRoster/Away/MainRoles/Awayvcaptain/`)
                .set(this.captains.Awayvcaptain);
            this.data.object(`Matches/` + k1.date + '-' + k1.MatchKey + `/MatchStats/PlayerRoster/Away/MainRoles/Awaywk/`)
                .set(this.captains.Awaywk);

            for (var i = 1; i <= k1.numPlayers; i++) {
                this.data.object(`Matches/` + k1.date + '-' + k1.MatchKey + `/MatchStats/PlayerRoster/Home/check/p` + i + `/`)
                    .set(-1);

            }

            this.data.object(`Matches/` + k1.date + '-' + k1.MatchKey + `/date/`)
                .set(k1.date);
            this.data.object(`Matches/` + k1.date + '-' + k1.MatchKey + `/key/`)
                .set(k1.MatchKey);
            this.data.object(`Matches/` + k1.date + '-' + k1.MatchKey + `/ID/`)
                .set(this.date2);


            this.data.object(`Matches/` + k1.date + '-' + k1.MatchKey + `/MatchStats/PlayerRoster/Home/check/amountofPlayers`)
                .set(k1.numPlayers);

            this.data.object(`Matches/` + k1.date + '-' + k1.MatchKey + `/MatchStats/PlayerRoster/Home/MainRoles/HomeCaptain/`)
                .set(this.captains.Homecaptain);
            this.data.object(`Matches/` + k1.date + '-' + k1.MatchKey + `/MatchStats/PlayerRoster/Home/MainRoles/Homevcaptain/`)
                .set(this.captains.Homevcaptain);
            this.data.object(`Matches/` + k1.date + '-' + k1.MatchKey + `/MatchStats/PlayerRoster/Home/MainRoles/Homewk/`)
                .set(this.captains.Homewk);
            this.data.object(`Matches/` + k1.date + '-' + k1.MatchKey + `/MatchStats/Score/`)
                .set(this.score);

            this.data.object(`Matches/` + k1.date + '-' + k1.MatchKey + `/MatchStats/Toss/`)
                .set(this.team.toss);

            this.data.object(`Matches/` + k1.date + '-' + k1.MatchKey + `/MatchStats/TeamName/`)
                .set(this.team.TeamName);

            this.data.object(`Matches/` + k1.date + '-' + k1.MatchKey + `/MatchStats/Umpire/`)
                .set(this.captains.umpire);


            this.data.object(`ClubParams/LiveMatchState/matchPtr`)
                .set(k1.date + '-' + k1.MatchKey);


            this.navCtrl.push(UmpirePage);

        }
        else
            alert("Not going to umpire");


    }
}
