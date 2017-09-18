import { Component } from '@angular/core';

import { Platform, ActionSheetController } from 'ionic-angular';
import { NavController } from 'ionic-angular';

import { User } from '../../models/user';
import { key } from '../../models/match';
import {score} from '../../models/Score';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import 'rxjs/add/operator/do';


@Component({
  templateUrl: 'spectator.html',
  selector: 'spectator.scss'
})


export class SpectatorPage
{	
  name: any;
  key = {} as key;
  score = {} as score;
  scoreRef$: FirebaseListObservable<any[]>
  matchStats$: FirebaseListObservable<any[]>
  playersTeamA$: FirebaseListObservable<any[]>
  playersTeamB$: FirebaseListObservable<any[]>
  data : FirebaseListObservable<any>;

  roster: string = "Scoring";
  isAndroid: boolean = false;
  constructor(
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    public navCtrl: NavController,
    private database: AngularFireDatabase
  )
  {
    this.isAndroid = platform.is('android');
    this.roster = "vs.";
    this.score.ballPtr = 0;
    this.score.totalRuns =0;
    this.score.totalOvers = "";
    this.score.totalWickets =0;
    this.key.MatchKey = "0";
    this.name = this.database.object('/ClubParams/LiveMatchState/');
    this.name.take(1).subscribe(data =>
    {
        console.log("Match Ptr: " + data.matchPtr);
        this.key.MatchKey= data.matchPtr;
    });// Finds out the current matchPtr

    this.scoreRef$ = this.database.list(`/Matches/` + this.key.MatchKey + `/MatchStats/Score/`);
    this.matchStats$ = this.database.list(`/Matches/` + this.key.MatchKey + `/MatchStats/`);
    this.playersTeamA$ = this.database.list('Matches/Match1/MatchStats/PlayerRoster/Home');
    this.playersTeamB$ = this.database.list('Matches/Match1/MatchStats/PlayerRoster/Away');
    this.playersTeamA$.subscribe(x => console.log(x))
    // this.scoreRef$.last().subscribe(keys => console.log("keys are", keys));
    // this.database.list('Matches/Match1/Balls').subscribe(list => this.scoreRef$ = list);

  }
}
