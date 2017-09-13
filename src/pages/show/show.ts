import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';

import { User } from '../../models/user';
import { player } from '../../models/player';
import { Game } from '../../models/games';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'page-show',
  templateUrl: 'show.html'
})


export class ShowPage {


  userRef$: FirebaseListObservable<User[]>
  gameRef$: FirebaseListObservable<Game[]>
  playerRef$: FirebaseListObservable<player[]>


  constructor(public navCtrl: NavController,
              private database: AngularFireDatabase,
              private actionSheetCrl: ActionSheetController) {

    this.userRef$ = this.database.list('Matches/match1/Balls');
    this.gameRef$ = this.database.list('Games/Date');
    this.playerRef$ = this.database.list('Games/Team 1/Players');


  }

  selectuser(user: User){

    this.actionSheetCrl.create({
      title: "Some",
      buttons:[
      {
      text: 'Edit',
        handler: () =>
        {

        }
      },
      {
        text: 'Delete',
        role: 'destructive',
        handler: () =>
        {

          this.userRef$.remove(user.$key);

        }
      },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () =>
          {
            console.log("The user has selected the cancel button");
          }
        }
    ]
    }).present();



  }

}
