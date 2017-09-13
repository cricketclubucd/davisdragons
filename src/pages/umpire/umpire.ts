import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({

  templateUrl: 'umpire.html'
})
export class UmpirePage
{
  static score=0;
  static ball = 0;
  data : FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public fdb: AngularFireDatabase)
  {

    this.data = fdb.list('/Matches/Match1/Balls');
  }
 updateballid()
 {
   UmpirePage.ball = UmpirePage.ball+1;
 }
 pushdata()
 {
   var data1 =
   {
     runs : UmpirePage.score,
     ballNumber: UmpirePage.ball
   }
   this.data.push(data1);

  }
  onTap(event): void {
            let x = event.srcEvent.offsetX;
            let y = event.srcEvent.offsetY;
            alert("PosX: "+x+" PosY: "+y);
        }
incrementone()
{
  UmpirePage.score = UmpirePage.score +1;
}

increment2()
{
  UmpirePage.score =UmpirePage.score +2;

}
incrementthree()
{
  UmpirePage.score = UmpirePage.score +3;
}

incrementfour()
{
UmpirePage.score = UmpirePage.score +4;
}
incrementsix()
{
  UmpirePage.score = UmpirePage.score +6;
}
increment0()
{
  UmpirePage.score = UmpirePage.score + 0;
}
wide()
{
  UmpirePage.score = UmpirePage.score + 1;
}
}
