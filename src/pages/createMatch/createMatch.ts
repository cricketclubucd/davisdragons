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


    name:FirebaseObjectObservable<any>;

    constructor(public navCtrl: NavController, private data: AngularFireDatabase) {


    }


    create(key:key, captains: captains,team:team) {


        this.balls.runs= 0;
        this.balls.ballNumber = 0;
        this.balls.ifWide = "false";
        this.balls.ifExtras= "false";
        this.balls.wickets= 0 ;
        this.balls.oversUp = "false" ;
        this.balls.octant= 0 ;

        key.ballKey = this.balls.ballid;

        this.team.p1=0;
        this.team.p2=0;
        this.team.p3=0;
        this.team.p4=0;
        this.team.p5=0;
        this.team.p6=0;
        this.team.p7=0;
        this.team.p8=0;
        this.team.p9=0;
        this.team.p10=0;
        this.team.p11=0;

        this.captains.Homevcaptain = 0;
        this.captains.Awayvcaptain = 0;
        this.captains.Homewk = 0;
        this.captains.Awaywk = 0;
        //this.captains.Homecaptain = 0;
        //this.captains.Awaycaptain = 0;


        this.team.toss = "Team";
        this.team.umpire = 0;

        this.score.ballsnOver=0;
        this.score.totalOvers=0;
        this.score.totalRuns=0;
        this.score.totalWickets=0;


        //this.data.object(`Matches/`+ key.MatchKey + `/Balls/`+key.ballKey)
            //.set(this.balls);

        this.data.object(`Matches/`+ key.MatchKey + `/MatchStats/PlayerRoster/Away/`)
            .set(this.team);
        /*this.data.object(`Matches/`+ key.MatchKey + `/MatchStats/PlayerRoster/Away/`)
            .set(this.captains.Awaycaptain);
        this.data.object(`Matches/`+ key.MatchKey + `/MatchStats/PlayerRoster/Away/`)
            .set(this.captains.Awayvcaptain);
        this.data.object(`Matches/`+ key.MatchKey + `/MatchStats/PlayerRoster/Away/`)
            .set(this.captains.Awaywk);

        this.data.object(`Matches/`+ key.MatchKey + `/MatchStats/PlayerRoster/Home/`)
            .set(this.team);

        this.data.object(`Matches/`+ key.MatchKey + `/MatchStats/PlayerRoster/Away/`)
            .update(this.captains.Homecaptain);
        this.data.object(`Matches/`+ key.MatchKey + `/MatchStats/PlayerRoster/Away/`)
            .update(this.captains.Homevcaptain);
        this.data.object(`Matches/`+ key.MatchKey + `/MatchStats/PlayerRoster/Away/`)
            .update(this.captains.Homewk);*/
        this.data.object(`Matches/`+ key.MatchKey + `/MatchStats/Score/`)
            .set(this.score);

        this.data.object(`Matches/`+ key.MatchKey + `/MatchStats/Toss/`)
            .set(this.team.toss);

        this.data.object(`Matches/`+ key.MatchKey + `/MatchStats/Umpire/`)
            .set(this.team.umpire);


        this.data.object(`ClubParams/LiveMatchState/matchPtr` )
            .set(key.MatchKey);


        this.navCtrl.push(UmpirePage);



    }
}
