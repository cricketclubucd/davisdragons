import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { User } from '../../models/user';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'page-show',
  templateUrl: 'show.html'
})


export class ShowPage {


  userRef$: FirebaseListObservable<User[]>

  constructor(public navCtrl: NavController, private database: AngularFireDatabase) {

    this.userRef$ = this.database.list('Players');
  }


}
