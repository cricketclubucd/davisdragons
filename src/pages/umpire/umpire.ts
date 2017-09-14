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
  static wicket = 0;
  static overs = 0;
  static ballNum = 0;
  static overString = "";
  data : FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public fdb: AngularFireDatabase)
  {

    this.data = fdb.list('/Matches/Match1/Balls');
  }
 updateballid()
 {
   UmpirePage.ball = UmpirePage.ball+1;
   UmpirePage.ballNum = UmpirePage.ballNum+1;
   if(UmpirePage.ball % 6 == 0){
      UmpirePage.ballNum = 0;
      UmpirePage.overs = UmpirePage.overs + 1;
   }
   UmpirePage.overString = UmpirePage.overs.toString() + '.' + UmpirePage.ballNum.toString();
 }
 pushdata()
 {
   var data1 =
   {
     runs : UmpirePage.score,
     ballNumber: UmpirePage.ball,
     wickets : UmpirePage.wicket,
     oversUp : UmpirePage.overString
   }
   this.data.push(data1);

  }
  onTap(event): void {
            let x = event.srcEvent.offsetX;
            let y = event.srcEvent.offsetY;
            alert(x+", "+y);
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
wicket(){
  UmpirePage.wicket = UmpirePage.wicket + 1;
}
}
