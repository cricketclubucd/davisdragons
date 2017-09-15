import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { key } from '../../models/match';

import { balls } from '../../models/balls';
import { team} from '../../models/team';
import { score} from '../../models/Score';

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


    name:FirebaseObjectObservable<any>;

    constructor(public navCtrl: NavController, private data: AngularFireDatabase) {


    }


    create(key:key) {


        this.balls.runs= 0;
        this.balls.ballNumber = 0;
        this.balls.ifWide = "false";
        this.balls.ifExtras= "false";
        this.balls.wickets= 0 ;
        this.balls.oversUp = "false" ;
        this.balls.octant= 0 ;
        key.ballKey = this.balls.ballNumber;
        this.team.captain =0;
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
        this.team.vcaptain=0;
        this.team.wk=0;

        this.team.toss = "Team";

        this.score.ballsnOver=0;
        this.score.totalOvers=0;
        this.score.totalRuns=0;
        this.score.totalWickets=0;


        this.data.object(`Matches/`+ key.MatchKey + `/Balls/`+key.ballKey)
            .set(this.balls);

        this.data.object(`Matches/`+ key.MatchKey + `/MatchStats/PlayerRoster/Away/`)
            .set(this.team);

        this.data.object(`Matches/`+ key.MatchKey + `/MatchStats/PlayerRoster/Home/`)
            .set(this.team);

        this.data.object(`Matches/`+ key.MatchKey + `/MatchStats/Score/`)
            .set(this.score);

        this.data.object(`Matches/`+ key.MatchKey + `/MatchStats/Toss/`)
            .set(this.team.toss);


        this.data.object(`ClubParams/LiveMatchState/matchPtr` )
            .set(key.MatchKey)


        this.navCtrl.push(UmpirePage);



    }
}
