import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {Platform} from 'ionic-angular';
@Component({

  templateUrl: 'umpire.html'
})
export class UmpirePage
{
  x=0;
  y=0;
  static wide = false;
  static extras = false;
  static score=0;
  static ball = 0;
  static radius = 0;
  static firstXboundary = 0;
  static firstYboundary = 0;
  static secondXboundary = 0;
  static secondYboundary = 0;
  static thirdXboundary = 0;
  static thirdYboundary = 0;
  static fourthXboundary = 0;
  static fourthYboundary = 0;
  static fifthXboundary = 0;
  static fifthYboundary = 0;
  static sixthXboundary = 0;
  static sixthYboundary = 0;
  static seventhXboundary = 0;
  static seventhYboundary = 0;
  static eigthXboundary = 0;
  static eigthYboundary = 0;
  static ninthXboundary = 0;
  static ninthYboundary = 0;
  static wicket = 0;
  static overs = 0;
  static ballNum = 0;
  static overString = "";
  data : FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public fdb: AngularFireDatabase, platform : Platform)
  {
    platform.ready().then((readySource) =>
     {
         UmpirePage.radius = platform.width()/2;
         this.computeBoundaries();
    });

    this.data = fdb.list('/Matches/Match1/Balls');

  }
  computeBoundaries()
  {
     UmpirePage.firstXboundary = (UmpirePage.radius * 1 ) + UmpirePage.radius; // rcos0
     UmpirePage.firstYboundary = (UmpirePage.radius * 0 ) + UmpirePage.radius; //rsin0
     UmpirePage.secondXboundary = (UmpirePage.radius * 0.70710678118 )+ UmpirePage.radius; //rcos45
     UmpirePage.secondYboundary = (UmpirePage.radius * 0.70710678118 )+ UmpirePage.radius ; //rsin45
     UmpirePage.thirdXboundary = (UmpirePage.radius * 0 ) + UmpirePage.radius; // rcos90
     UmpirePage.thirdYboundary =  (UmpirePage.radius * 1) + UmpirePage.radius; // rsin90
     UmpirePage.fourthXboundary = (UmpirePage.radius * -0.70710678118) + UmpirePage.radius; //rcos135
     UmpirePage.fourthYboundary = (UmpirePage.radius *  0.70710678118) + UmpirePage.radius; //rsin135
     UmpirePage.fifthXboundary = (UmpirePage.radius *-1) + UmpirePage.radius; //rcos180
     UmpirePage.fifthYboundary =  (UmpirePage.radius * 0) + UmpirePage.radius; //rsin180
     UmpirePage.sixthXboundary = (UmpirePage.radius * -0.70710678118) + UmpirePage.radius; //rcos225
     UmpirePage.sixthYboundary =  (UmpirePage.radius * -0.70710678118) + UmpirePage.radius; //rsin225
     UmpirePage.seventhXboundary = (UmpirePage.radius * 0) + UmpirePage.radius; //rcos270
     UmpirePage.seventhYboundary =  (UmpirePage.radius * -1) + UmpirePage.radius;  //rsin270
     UmpirePage.eigthXboundary = (UmpirePage.radius * 0.70710678118) + UmpirePage.radius; //rcos315
     UmpirePage.eigthYboundary = ( UmpirePage.radius * -0.70710678118 )+ UmpirePage.radius; //rsin315
     UmpirePage.ninthXboundary =( UmpirePage.radius * 1) + UmpirePage.radius; //rcos315
     UmpirePage.ninthYboundary =  (UmpirePage.radius * 0 )+ UmpirePage.radius; //rsin315
     this.computeQuadrant();

  } // Computes the boundaries required to determine which on eof the eight quadrants
  computeQuadrant ()
  {
    console.log(UmpirePage.firstXboundary, UmpirePage.firstYboundary);
    console.log(UmpirePage.secondXboundary, UmpirePage.secondYboundary);
    console.log(UmpirePage.thirdXboundary, UmpirePage.thirdYboundary);
    console.log(UmpirePage.fourthXboundary, UmpirePage.fourthYboundary);
    console.log(UmpirePage.fifthXboundary, UmpirePage.fifthYboundary);
    console.log(UmpirePage.sixthXboundary, UmpirePage.sixthYboundary);
    console.log(UmpirePage.seventhXboundary, UmpirePage.seventhYboundary);
    console.log(UmpirePage.eigthXboundary, UmpirePage.eigthYboundary);
    console.log(UmpirePage.ninthXboundary, UmpirePage.ninthYboundary);
    console.log(UmpirePage.radius, UmpirePage.radius);

  }
  updateballid()
  {
     UmpirePage.ball = UmpirePage.ball+1;
     
     UmpirePage.ballNum = UmpirePage.ballNum+1;
     if(UmpirePage.ball % 6 == 0)
     {
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
       ifWide: UmpirePage.wide,
       ifExtras: UmpirePage.extras,
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
 UmpirePage.wide = true;
 UmpirePage.score = UmpirePage.score + 1;
 //UmpirePage.wide = false;
}
wicket()
{
 UmpirePage.wicket = UmpirePage.wicket + 1;
}
}
