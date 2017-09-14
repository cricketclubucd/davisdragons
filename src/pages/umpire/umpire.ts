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
  static height1 =0;
  static octant ="";
  data : FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public fdb: AngularFireDatabase, platform : Platform)
  {
    platform.ready().then((readySource) =>
     {
         UmpirePage.radius = platform.width()/2;
         UmpirePage.height1= platform.height()/2;
         this.computeBoundaries();
    });

    this.data = fdb.list('/Matches/Match1/Balls');

  }
  computeBoundaries()
  {
     UmpirePage.firstXboundary = (UmpirePage.radius * 1 ) //+ UmpirePage.radius; // rcos0
     UmpirePage.firstYboundary = (UmpirePage.radius * 0 ) //+ UmpirePage.radius; //rsin0
     UmpirePage.secondXboundary = (UmpirePage.radius * 0.70710678118 ) //+ UmpirePage.radius; //rcos45
     UmpirePage.secondYboundary = (UmpirePage.radius * 0.70710678118 )//+ UmpirePage.radius ; //rsin45
     UmpirePage.thirdXboundary = (UmpirePage.radius * 0 )// + UmpirePage.radius; // rcos90
     UmpirePage.thirdYboundary =  (UmpirePage.radius * 1) //+ UmpirePage.radius; // rsin90
     UmpirePage.fourthXboundary = (UmpirePage.radius * -0.70710678118) //+ UmpirePage.radius; //rcos135
     UmpirePage.fourthYboundary = (UmpirePage.radius *  0.70710678118) //+ UmpirePage.radius; //rsin135
     UmpirePage.fifthXboundary = (UmpirePage.radius *-1) //+ UmpirePage.radius; //rcos180
     UmpirePage.fifthYboundary =  (UmpirePage.radius * 0) //+ UmpirePage.radius; //rsin180
     UmpirePage.sixthXboundary = (UmpirePage.radius * -0.70710678118)// + UmpirePage.radius; //rcos225
     UmpirePage.sixthYboundary =  (UmpirePage.radius * -0.70710678118) //+ UmpirePage.radius; //rsin225
     UmpirePage.seventhXboundary = (UmpirePage.radius * 0)// + UmpirePage.radius; //rcos270
     UmpirePage.seventhYboundary =  (UmpirePage.radius * -1)// + UmpirePage.radius;  //rsin270
     UmpirePage.eigthXboundary = (UmpirePage.radius * 0.70710678118)// + UmpirePage.radius; //rcos315
     UmpirePage.eigthYboundary = ( UmpirePage.radius * -0.70710678118 )//+ UmpirePage.radius; //rsin315
     UmpirePage.ninthXboundary =( UmpirePage.radius * 1) //+ UmpirePage.radius; //rcos315
     UmpirePage.ninthYboundary =  (UmpirePage.radius * 0 )//+ UmpirePage.radius; //rsin315


  } // Computes the boundaries required to determine which on eof the eight quadrants
  computeOctant()
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
    var xdiff = this.x - UmpirePage.radius;
    var ydiff = - this.y+ UmpirePage.height1;
   console.log("The difference:");
   console.log(xdiff, ydiff);
   if(xdiff >0 && ydiff>0)
   {
     console.log("First Quadrant");
     if(xdiff > UmpirePage.secondXboundary &&  xdiff < UmpirePage.firstXboundary)
     {
       console.log("First Octant");
       UmpirePage.octant ="First Octant";
     }
    else if(xdiff > UmpirePage.thirdXboundary &&  xdiff < UmpirePage.secondXboundary)
     {
       console.log("Second Octant");
        UmpirePage.octant ="Second Octant";
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
   else if(xdiff <0 && ydiff >0 )
   {
     console.log("Second Quadrant");
     if(xdiff > UmpirePage.fourthXboundary &&  xdiff < UmpirePage.thirdXboundary)
     {
       console.log("Third Octant");
       UmpirePage.octant ="Third Octant";
     }
    else if(xdiff > UmpirePage.fifthXboundary &&  xdiff < UmpirePage.fourthXboundary)
     {
       console.log("Fourth Octant");
       UmpirePage.octant ="Fourth Octant";
     }
   }
   else if(xdiff <0 && ydiff <0 )
   {
     console.log("Third Quadrant");
     if(xdiff > UmpirePage.fifthXboundary &&  xdiff < UmpirePage.sixthXboundary)
     {
       console.log("Fifth Octant");
       UmpirePage.octant ="Fifth Octant";
     }
    else if(xdiff > UmpirePage.sixthXboundary &&  xdiff < UmpirePage.seventhXboundary)
     {
       console.log("Sixth Octant");
       UmpirePage.octant ="Sixth Octant";
     }
   }
  else if(xdiff >0 && ydiff <0)
   {
     console.log("Fourth Quadrant");
     if(xdiff > UmpirePage.seventhXboundary &&  xdiff < UmpirePage.eigthXboundary)
     {
       console.log("Seventh Octant");
       UmpirePage.octant ="Seventh Octant";
     }
    else if(xdiff > UmpirePage.eigthXboundary &&  xdiff < UmpirePage.ninthXboundary)
     {
       console.log("Eighth Octant");
       UmpirePage.octant ="Eighth Octant";
     }
   }


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
       oversUp : UmpirePage.overString,
       octant: UmpirePage.octant
     }
     this.data.push(data1);
    UmpirePage.wide = false;

    }

  onTap(event): void {
            this.x = event.srcEvent.offsetX;
            this.y = event.srcEvent.offsetY;
            alert(this.x + ", "+ this.y);
            this.computeOctant();
            //console.log(this.x, this.y);
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
wicket(){
  UmpirePage.wicket = UmpirePage.wicket + 1;
}
}
