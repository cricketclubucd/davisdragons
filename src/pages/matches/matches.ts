import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Game } from '../../models/games';
import { ShowPage } from '../show/show';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'page-matches',
  templateUrl: 'matches.html'
})


export class MatchesPage {


  game = {} as Game;


  gameRef$: FirebaseListObservable<Game[]>

  constructor(public navCtrl: NavController, private database: AngularFireDatabase) {

    this.gameRef$ = this.database.list('Games');

  }

  addPlayer(game: Game){


    this.gameRef$.push(this.game);

    this.game = {} as Game;

  }

  show() {
	  this.navCtrl.push(ShowPage);
  }

}
