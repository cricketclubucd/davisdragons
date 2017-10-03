import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  name: any;
  static database: any;
  constructor(public navCtrl: NavController, public fdb: AngularFireDatabase) {
  	HomePage.database = fdb;
  }
  static getCurrentMatch()
  {
	var key;
	HomePage.database.object('/ClubParams/LiveMatchState/').take(1).subscribe(data =>
    {
        console.log("Match Ptr: " + data.matchPtr);
        key = data.matchPtr;
        console.log("Key: "+key);
    });// Finds out the current matchPtr
    return key;
  }

}
