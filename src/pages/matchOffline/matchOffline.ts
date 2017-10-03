import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { Platform, ActionSheetController } from 'ionic-angular';
import { CreatePage } from '../createMatch/createMatch';
import { HomePage } from '../home/home';
import { key } from '../../models/match';
import { balls } from '../../models/balls';
import { team} from '../../models/team';
import {score} from '../../models/Score';

@Component({
    templateUrl: 'matchOffline.html',
    selector: 'matchOffline.scss'
  })

export class MatchOfflinePage{

  name: any;
  key = {} as key;
  score = {} as score;
  matchStats1$: FirebaseListObservable<any[]>
  matchStats2$: FirebaseListObservable<any[]>
  data : FirebaseListObservable<any>;

  roster: string = "Scoring";
  isAndroid: boolean = false;
  constructor(
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    public navCtrl: NavController,
    public database: AngularFireDatabase
  )
  {
    this.isAndroid = platform.is('android');
    this.score.totalRuns =0;
    this.score.totalOvers = "";
    this.score.totalWickets =0;
    this.key.MatchKey = "0";
    this.name = this.database.object('/ClubParams/LiveMatchState/');
    this.name.take(1).subscribe(data =>
    {
        console.log("Match Ptr: " + data.matchPtr);
        this.key.MatchKey= data.matchPtr;
        this.setMatchStats(this.key.MatchKey);
    });// Finds out the corrent matchPtr
    // this.playersTeamA$.subscribe(x => console.log(x))
    // this.scoreRef$.last().subscribe(keys => console.log("keys are", keys));
    // this.database.list('Matches/Match1/Balls').subscribe(list => this.scoreRef$ = list);

  }
  setMatchStats(key)
  {
	  console.log('HelloWorld: ' + key);
    this.matchStats1$ = this.database.list(`/Matches/` + key + `/MatchStats/FirstInnings/Score`);
    console.log(this.matchStats1$.$ref);
    this.matchStats2$ = this.database.list(`/Matches/` + key + `/MatchStats/2`);
  }

  sendToCreate(){
    this.navCtrl.setRoot(CreatePage);
  }

  sendToHome(){
    this.navCtrl.setRoot(HomePage);
  }
}

