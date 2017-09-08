import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { User } from '../../models/user';
import { ShowPage } from '../show/show';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})


export class AddPage {


  user = {} as User;


  userRef$: FirebaseListObservable<User[]>

  constructor(public navCtrl: NavController, private database: AngularFireDatabase) {

    this.userRef$ = this.database.list('Players');

  }

  addPlayer(user: User){
    var pass = document.getElementById('pass');
    var r_pass = document.getElementById('r_pass');
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var jn = document.getElementById('jn');


    this.userRef$.push(this.user);

    this.user = {} as User;




  }

  show() {
	  this.navCtrl.push(ShowPage);
  }

}
