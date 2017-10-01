import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { SpectatorPage } from '../spectator/spectator';
import{ MemberPage } from '../member/member';
import { UmpirePage } from '../umpire/umpire';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isLive: boolean = false;
  matchState: string = "No Live Match";
  intMatchState: number = 0;
  accessLevel: number = 5;
  name: any;
  static database: any;
  constructor(public navCtrl: NavController, public fdb: AngularFireDatabase) {
  	HomePage.database = fdb;
  	this.accessLevel = 5;
  	this.name = this.fdb.object('/ClubParams/LiveMatchState/');
  	this.name.take(1).subscribe(data =>
    {
        console.log("Match State: " + data.matchState);
        this.intMatchState = data.matchState;
        if (this.intMatchState === 1)
        {
	        this.isLive = true;
	        this.matchState = "Match Live!";
        }
        this.resolveAccessLevel();
    });
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
  goToMatch()
  {
	 if (this.intMatchState === 1)
	 {
	 	if (this.accessLevel === 0 || this.accessLevel === 1)
	 	{
	 		this.navCtrl.setRoot(UmpirePage);
		}
		else
		{
			this.navCtrl.setRoot(SpectatorPage);
		}
	}
  }
  resolveAccessLevel()
  {
	  var playerKey = "75";
	  this.fdb.list(`/ClubParams/AccessLevel/`, { preserveSnapshot: true})
	  	.subscribe(snapshots=>{
        snapshots.forEach(snapshot => {
          console.log(snapshot.key, snapshot.val());
          if (snapshot.key === playerKey)
          {
          	this.accessLevel = snapshot.val();
		  	console.log("Access level is: " + this.accessLevel);
		  }
        });
    });
  }
}
