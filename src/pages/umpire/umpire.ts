import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {AngularFireDatabase} from 'angularfire2/database';

@Component({

  templateUrl: 'umpire.html'
})
export class UmpirePage {
 score = 0;
 ball = 0;

  constructor(public navCtrl: NavController,  private fdb: AngularFireDatabase)
   {
     this.score = 0;

 }
 updateballid()
 {
   this.ball = this.ball+1;

 }
 pushdata()
 {
   var data = {
     runs : this.score
   }


   this.fdb.list('/balls/').push(data);
 }
incrementone()
{
  this.score = this.score +1;
}

increment2()
{
  this.score = this.score +2;

}
incrementthree()
{
  this.score = this.score +3;
}

incrementfour()
{
  this.score = this.score +4;
}
incrementsix()
{
  this.score = this.score +6;
}
increment0()
{
  this.score = this.score + 0;
}
}
