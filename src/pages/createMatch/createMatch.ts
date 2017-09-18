import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { key } from '../../models/match';

import { balls } from '../../models/balls';
import { team} from '../../models/team';
import { score} from '../../models/Score';
import { captains} from '../../models/team';


import {UmpirePage} from "../umpire/umpire";

import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';



@Component({
    selector: 'page-create',
    templateUrl: 'createMatch.html'
})
export class CreatePage {


    key = {} as key;

    balls = {} as balls;
    team = {} as team;
    score = {} as score;
    captains = {} as captains;


    name:FirebaseListObservable<any>;
    Home:FirebaseListObservable<any>;

    constructor(public navCtrl: NavController, private data: AngularFireDatabase) {


    }


    create(key:key, captains: captains) {


        this.name = this.data.list("/ClubParams/ClubRoster",{
            query: {
                orderByChild: "Jersey_Number",
                equalTo: captains.Awaycaptain
            }

        });

        this.name.subscribe(data =>
        {
            if(data.length == 0) {
                console.log('User does not exist');
                alert("The Away Team's Captain's Jersey Number is not in our databasee")

            } else {
                console.log('User does exist');
                //console.log(data);
                this.captains.Awaycaptain = captains.Awaycaptain;
            }
        });


        this.name = this.data.list("/ClubParams/ClubRoster",{
            query: {
                orderByChild: "Jersey_Number",
                equalTo: captains.Awaycaptain
            }

        });

        this.Home = this.data.list("/ClubParams/ClubRoster",{
            query: {
                orderByChild: "Jersey_Number",
                equalTo: captains.Homecaptain
            }

        });

        this.Home.subscribe(data =>
        {
            if(data.length == 0) {
                console.log('User does not exist');
                alert("The Home Team's Captain's Jersey Number is not in our database")

            } else {
                console.log('User does exist');
                //console.log(data);
                this.captains.Homecaptain = captains.Homecaptain;
            }
        });


        this.balls.ballid = 0;
        //this.balls.ifWide = "false";
        this.balls.ifExtras = "false";
        this.balls.isWicket = "false" ;
        this.balls.octant= 0 ;

        key.ballKey = this.balls.ballid;

        this.captains.Homevcaptain = 0;
        this.captains.Awayvcaptain = 0;
        this.captains.Homewk = 0;
        this.captains.Awaywk = 0;


        this.team.toss = "Team";
        //this.captains.umpire = 0;

        //this.score.ballsnOver=0;
        this.score.totalOvers= "";
        this.score.totalRuns=0;
        this.score.totalWickets=0;

        for (var i = 1 ; i <= key.numPlayers; i++ ){
            this.data.object(`Matches/`+ key.MatchKey + `/MatchStats/PlayerRoster/Away/check/p`+ i + `/`)
                .set(-1);

        }
        this.data.object(`Matches/`+ key.MatchKey + `/MatchStats/PlayerRoster/Away/check/amountofPlayers`)
            .set(key.numPlayers);

        this.data.object(`Matches/`+ key.MatchKey + `/MatchStats/PlayerRoster/Away/MainRoles/Awaycaptain`)
            .set(this.captains.Awaycaptain);
        this.data.object(`Matches/`+ key.MatchKey + `/MatchStats/PlayerRoster/Away/MainRoles/Awayvcaptain`)
            .set(this.captains.Awayvcaptain);
        this.data.object(`Matches/`+ key.MatchKey + `/MatchStats/PlayerRoster/Away/MainRoles/Awaywk`)
            .set(this.captains.Awaywk);

        for (var i = 1 ; i <= key.numPlayers; i++ ){
            this.data.object(`Matches/`+ key.MatchKey + `/MatchStats/PlayerRoster/Home/check/p`+ i + `/`)
                .set(-1);

        }

        this.data.object(`Matches/`+ key.MatchKey + `/MatchStats/PlayerRoster/Home/check/amoutofPlayers`)
            .set(key.numPlayers);

        this.data.object(`Matches/`+ key.MatchKey + `/MatchStats/PlayerRoster/Home/MainRoles/HomeCaptain/`)
            .set(this.captains.Homecaptain);
        this.data.object(`Matches/`+ key.MatchKey + `/MatchStats/PlayerRoster/Home/MainRoles/Homevcaptain/`)
            .set(this.captains.Homevcaptain);
        this.data.object(`Matches/`+ key.MatchKey + `/MatchStats/PlayerRoster/Home/MainRoles/Homewk/`)
            .set(this.captains.Homewk);
        this.data.object(`Matches/`+ key.MatchKey + `/MatchStats/Score/`)
            .set(this.score);

        this.data.object(`Matches/`+ key.MatchKey + `/MatchStats/Toss/`)
            .set(this.team.toss);

        this.data.object(`Matches/`+ key.MatchKey + `/MatchStats/Umpire/`)
            .set(this.captains.umpire);


        this.data.object(`ClubParams/LiveMatchState/matchPtr` )
            .set(key.MatchKey);


        this.navCtrl.push(UmpirePage);



    }
}
