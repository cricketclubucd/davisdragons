import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({

  templateUrl: 'umpire.html'
})
export class UmpirePage
{
  score = 0;
  ball = 0;
  data : FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public fdb: AngularFireDatabase)
  {
    this.score = 0;
    this. data = fdb.list('/Matches/Match1/Balls');
  }
 updateballid()
 {
   this.ball = this.ball+1;
 }
 pushdata()
 {
   var data1=
   {
     runs : this.score,
     ballNumber: this.ball
   }
   this.data.push(data1);

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
