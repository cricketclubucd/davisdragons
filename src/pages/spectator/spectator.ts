import { Component } from '@angular/core';

import { Platform, ActionSheetController } from 'ionic-angular';
import { NavController } from 'ionic-angular';

import { User } from '../../models/user';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import 'rxjs/add/operator/do';


@Component({
  templateUrl: 'spectator.html',
  selector: 'spectator.scss'
})


export class SpectatorPage {


  scoreRef$: FirebaseListObservable<any[]>
  playersTeamA$: FirebaseListObservable<any[]>
  playersTeamB$: FirebaseListObservable<any[]>

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
    this.scoreRef$ = this.database.list('Matches/Match1/Balls');
    this.playersTeamA$ = this.database.list('Matches/Match1/PlayerRoster/Team1');
    this.playersTeamB$ = this.database.list('Matches/Match1/PlayerRoster/Team2');
    this.playersTeamA$.subscribe(x => console.log(x))
    // this.scoreRef$.last().subscribe(keys => console.log("keys are", keys));
    // this.database.list('Matches/Match1/Balls').subscribe(list => this.scoreRef$ = list);

  }
}
