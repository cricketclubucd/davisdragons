import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {Platform} from 'ionic-angular';
import { key } from '../../models/match';
import { balls } from '../../models/balls';
import { team} from '../../models/team';
import {score} from '../../models/Score';
import {SpectatorPage} from '../spectator/spectator';
import {MatchOfflinePage} from "../matchOffline/matchOffline";
import {ExtrasPage} from "../extras/extras";
import {ActionSheetController } from 'ionic-angular';
//import {ElementRef, ViewChild} from '@angular/core';
//import {totalStats} from '../../models/balls';
@Component({

templateUrl: 'umpire.html'
})
export class UmpirePage
{
  name: any;
  x=0;
  y=0;
  coin = "";
  balls = {} as balls;
  key = {} as key;
  score = {} as score;
  static extras = false;
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
  static overString = "";
  static height1 =0;
  static octant = 0;
  data : FirebaseListObservable<any>;
  scoreRef$: FirebaseListObservable<any[]>
  matchStats$: FirebaseListObservable<any[]>
  toss_val: any;
  key2 ="";
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public fdb: AngularFireDatabase, platform : Platform, public actionsheetCtrl: ActionSheetController)
  {
    platform.ready().then((readySource) =>
    {
      UmpirePage.radius = platform.width()/2;
      UmpirePage.height1= platform.width()/2;

       this.computeBoundaries();
    }); //accesses platform to find its height and width
    this.data = fdb.list('/Matches/Match1/Balls');
    this.balls.ballid = 0;
    this.balls.score = 0;
    //this.balls.ifExtras= "false";
    this.balls.isWicket= "false";
    this.balls.octant= 0 ;
    this.score.ballPtr = 0;
    this.score.totalRuns =0;
    this.score.totalOvers = "";
    this.score.totalWickets =0;
    this.score.numOfOvers = 0;
    this.key.MatchKey = "0";
    this.name = this.fdb.object('/ClubParams/LiveMatchState/');
    //this.toss_val = this.fdb.list('/Matches/' + this.key.MatchKey + '/MatchStats/Score/Toss');
    this.scoreRef$ = this.fdb.list(`/Matches/` + this.key.MatchKey + `/MatchStats/Score/`);
    this.matchStats$ = this.fdb.list(`/Matches/` + this.key.MatchKey + `/MatchStats/PlayerRoster/Home/MainRoles`);
    this.name.take(1).subscribe(data =>
    {
        console.log("Match Ptr: " + data);
        this.key.MatchKey= data.matchPtr;
    this.name = this.fdb.object(`/Matches/` + this.key.MatchKey + `/MatchStats/Score/`);
    this.name.take(1).subscribe(data2 =>
    {
	    console.log("constructor ball Ptr: " + data2.ballPtr);
	    this.score.ballPtr = data2.ballPtr;
	    this.score.totalOvers = data2.totalOvers;
        this.score.totalRuns = data2.totalRuns;
		this.score.totalWickets = data2.totalWickets;
		let toast = this.toastCtrl.create({
      message: 'Welcome! Match:  '+this.key.MatchKey+' Next Ball ID: '+this.score.ballPtr+'\nCurrent Score: '+this.score.totalRuns+'/'+this.score.totalWickets+' ('+this.score.totalOvers+')',
      duration: 5000,
      position: 'middle'
       });
       toast.present();
    });// Finds out the corrent matchPtr
    });// Finds out the corrent matchPtr
  }
  computeBoundaries()
  {
     console.log(UmpirePage.radius, UmpirePage.height1);
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
    console.log("1st",UmpirePage.firstXboundary, UmpirePage.firstYboundary);
    console.log("2nd",UmpirePage.secondXboundary, UmpirePage.secondYboundary);
    console.log("3rd",UmpirePage.thirdXboundary, UmpirePage.thirdYboundary);
    console.log("4th",UmpirePage.fourthXboundary, UmpirePage.fourthYboundary);
    console.log("5th",UmpirePage.fifthXboundary, UmpirePage.fifthYboundary);
    console.log("6th",UmpirePage.sixthXboundary, UmpirePage.sixthYboundary);
    console.log("7th",UmpirePage.seventhXboundary, UmpirePage.seventhYboundary);
    console.log("8th",UmpirePage.eigthXboundary, UmpirePage.eigthYboundary);
    console.log("9th",UmpirePage.ninthXboundary, UmpirePage.ninthYboundary);
    console.log(UmpirePage.radius, UmpirePage.radius);
    var xdiff = this.x - UmpirePage.radius;
    var ydiff = - this.y+ UmpirePage.height1;
    console.log("The difference:");
    console.log(xdiff, ydiff);
    if(xdiff > 0 && ydiff >0)
    {
      console.log("First Quadrant");
      if(xdiff > UmpirePage.secondXboundary &&  xdiff < UmpirePage.firstXboundary)
      {
        console.log("Second Octant");
        this.balls.octant = 2;
      }// checks if first Octant
      else if(xdiff > UmpirePage.thirdXboundary &&  xdiff < UmpirePage.secondXboundary)
      {
        console.log("First Octant");
        this.balls.octant = 1;
      }// checks if second Octant
    }// checks if first quadrant
    else if(xdiff < 0 && ydiff > 0 )
    {
      console.log("Second Quadrant");
      if(xdiff > UmpirePage.fourthXboundary &&  xdiff < UmpirePage.thirdXboundary)
      {
        console.log("Eigth Octant");
        this.balls.octant = 8;
      }// checks if 3rd octant
      else if(xdiff > UmpirePage.fifthXboundary &&  xdiff < UmpirePage.fourthXboundary)
      {
        console.log("Seventh Octant");
        this.balls.octant = 7;
      }// checks if 4th octant
    }// check if second quadrant
    else if(xdiff <0 && ydiff <0 )
    {
      console.log("Third Quadrant");
      if(xdiff > UmpirePage.fifthXboundary &&  xdiff < UmpirePage.sixthXboundary)
      {
        console.log("Sixth Octant");
        this.balls.octant = 6;
      }
      else if(xdiff > UmpirePage.sixthXboundary &&  xdiff < UmpirePage.seventhXboundary)
      {
        console.log("Fifth Octant");
        this.balls.octant = 5;
      }
    }
    else if(xdiff >0 && ydiff <0)
    {
      console.log("Fourth Quadrant");
      if(xdiff > UmpirePage.seventhXboundary &&  xdiff < UmpirePage.eigthXboundary)
      {
        console.log("Fourth Octant");
        this.balls.octant = 4;
      }
      else if(xdiff > UmpirePage.eigthXboundary &&  xdiff < UmpirePage.ninthXboundary)
      {
        console.log("Third Octant");
        this.balls.octant = 3;
      }
    }
  }
  increment(i)
  {
    this.balls.score = i;
  }// increments the score according to the button
  computeToss()
  {
    var heads = 0;
    var tails = 0;
    var x;
    var val = "";
    x = (Math.floor(Math.random() * 2) == 0);
    if(x)
    {
      this.coin = "Heads"
    }
    else
    {
      this.coin = "Tails"
    }
    alert('It\'s ' + this.coin)

    this.fdb.object(`/Matches/`+ this.key.MatchKey + `/MatchStats/Toss`)
    .set(this.coin);

    document.getElementById('toss').style.display = 'none';
  }
  pushdata()
  {
    var val = 0;
	this.fdb.object(`/Matches/` + this.key.MatchKey + `/MatchStats/Score`).take(1).subscribe(data =>
    {
      console.log("Get ball ptr: " + data.ballPtr);
      val = data.numOfOvers*6;
      console.log("Num: " + val);
      this.score.numOfOvers = data.numOfOvers;
      this.score.ballPtr = data.ballPtr;
      console.log("Match: " + this.key.MatchKey);
      if(this.balls.ballid == val){
        alert("The Innings have ended!");
        this.navCtrl.push(MatchOfflinePage);
      }
    });
    this.balls.ballid = this.score.ballPtr;
    this.score.ballPtr = this.score.ballPtr + 1;
    UmpirePage.overString = ((Math.floor(this.balls.ballid/6)).toString()) + '.'+ ((this.balls.ballid %6).toString());
    this.score.totalOvers = UmpirePage.overString;
    this.fdb.object(`/Matches/`+ this.key.MatchKey + `/Balls/` + this.balls.ballid)
      .set(this.balls);
    this.updateTotalScore();
  }
  onTap(event): void
  {
    this.x = event.srcEvent.offsetX;
    this.y = event.srcEvent.offsetY;
    this.computeOctant();
    alert("You have pressed Octant" + " " +this.balls.octant);
    //console.log(this.x, this.y);
  }
  toastScoreFromDB()
  {
	 let tempscore = {} as score;
	this.fdb.object(`/Matches/` + this.key.MatchKey + `/MatchStats/Score/`).take(1).subscribe(data =>
    {
	    console.log("toast ball Ptr: " + data.ballPtr);
	    tempscore.ballPtr = data.ballPtr;
	    tempscore.totalOvers = data.totalOvers;
        tempscore.totalRuns = data.totalRuns;
		tempscore.totalWickets = data.totalWickets;
    });// Finds out the corrent matchPtr

  }
  endMatch(){
    var boolean = confirm("End Match?");
    if(boolean){
      this.navCtrl.setRoot(MatchOfflinePage);
    }
  }
  updateTotalScore()
  {
   this.score.totalRuns = this.score.totalRuns + this.balls.score;
   console.log(this.key.MatchKey);
   var val = 0;
   var wickets = 0;
   var answer = false;
   if(this.balls.isWicket == "true")
   {
     this.score.totalWickets = this.score.totalWickets + 1;
   }
   this.fdb.object(`/Matches/` + this.key.MatchKey + `/MatchStats/PlayerRoster/Away/check/`).take(1).subscribe(data =>
     {
       console.log("Match: " + this.key.MatchKey);
       val = parseInt(data.amountofPlayers);
       console.log(val);
       wickets = parseInt(data.amountofPlayers) - 1;
       if(this.score.totalWickets == val-1){
        answer = confirm("Last Man Standing?");
        if(!answer){
          if(this.score.totalWickets == (val-1) || this.score.totalWickets > (val-1)){
            alert('This Innings have ended!');
            this.navCtrl.setRoot(MatchOfflinePage);
          }
        }
      }
      if(this.score.totalWickets == val || this.score.totalWickets > val){
        alert('This Innings have ended!');
        this.navCtrl.setRoot(MatchOfflinePage);
      }
     });
   console.log("Ball ptr local" + this.score.ballPtr);
   let toast = this.toastCtrl.create({
      message: 'Added! New score: '+this.score.totalRuns+'/'+this.score.totalWickets+'('+this.score.totalOvers+')',
      duration: 3000
    });
    toast.present();
   this.fdb.object(`/Matches/` + this.key.MatchKey + `/MatchStats/Score/totalRuns/` )
    .set(this.score.totalRuns);
   this.fdb.object(`/Matches/` + this.key.MatchKey + `/MatchStats/Score/totalWickets/` )
    .set(this.score.totalWickets);
   this.fdb.object(`/Matches/` + this.key.MatchKey + `/MatchStats/Score/totalOvers/` )
    .set(this.score.totalOvers);
   this.fdb.object(`/Matches/` + this.key.MatchKey + `/MatchStats/Score/ballPtr/` )
    .set(this.score.ballPtr);
   this.balls.isWicket = "false";
  }
  dot()
  {
	  //this.balls.ifExtras = "false";
    this.balls.isWicket = "false";
    this.balls.octant = 0;
    this.balls.score =0;
  }
  wide()
  {
    this.balls.score = 1;
    this.updateTotalScore();
  }
  clear(){
    document.getElementById('run_button6').style.color = 'goldenrod';
    document.getElementById('run_button6').style.background = '#002855';
    document.getElementById('run_button0').style.color = 'goldenrod';
    document.getElementById('run_button0').style.background = '#002855';
    document.getElementById('run_button1').style.color = 'goldenrod';
    document.getElementById('run_button1').style.background = '#002855';
    document.getElementById('run_button2').style.color = 'goldenrod';
    document.getElementById('run_button2').style.background = '#002855';
    document.getElementById('run_button3').style.color = 'goldenrod';
    document.getElementById('run_button3').style.background = '#002855';
    document.getElementById('run_button4').style.color = 'goldenrod';
    document.getElementById('run_button4').style.background = '#002855';
  }
  run_button0(){
    document.getElementById('run_button0').style.color = '#002855';
    document.getElementById('run_button0').style.background = 'goldenrod';
    document.getElementById('run_button1').style.color = 'goldenrod';
    document.getElementById('run_button1').style.background = '#002855';
    document.getElementById('run_button2').style.color = 'goldenrod';
    document.getElementById('run_button2').style.background = '#002855';
    document.getElementById('run_button3').style.color = 'goldenrod';
    document.getElementById('run_button3').style.background = '#002855';
    document.getElementById('run_button4').style.color = 'goldenrod';
    document.getElementById('run_button4').style.background = '#002855';
    document.getElementById('run_button6').style.color = 'goldenrod';
    document.getElementById('run_button6').style.background = '#002855';
  }
  run_button1(){
    document.getElementById('run_button1').style.color = '#002855';
    document.getElementById('run_button1').style.background = 'goldenrod';
    document.getElementById('run_button0').style.color = 'goldenrod';
    document.getElementById('run_button0').style.background = '#002855';
    document.getElementById('run_button2').style.color = 'goldenrod';
    document.getElementById('run_button2').style.background = '#002855';
    document.getElementById('run_button3').style.color = 'goldenrod';
    document.getElementById('run_button3').style.background = '#002855';
    document.getElementById('run_button4').style.color = 'goldenrod';
    document.getElementById('run_button4').style.background = '#002855';
    document.getElementById('run_button6').style.color = 'goldenrod';
    document.getElementById('run_button6').style.background = '#002855';
  }
  run_button2(){
    document.getElementById('run_button2').style.color = '#002855';
    document.getElementById('run_button2').style.background = 'goldenrod';
    document.getElementById('run_button0').style.color = 'goldenrod';
    document.getElementById('run_button0').style.background = '#002855';
    document.getElementById('run_button1').style.color = 'goldenrod';
    document.getElementById('run_button1').style.background = '#002855';
    document.getElementById('run_button3').style.color = 'goldenrod';
    document.getElementById('run_button3').style.background = '#002855';
    document.getElementById('run_button4').style.color = 'goldenrod';
    document.getElementById('run_button4').style.background = '#002855';
    document.getElementById('run_button6').style.color = 'goldenrod';
    document.getElementById('run_button6').style.background = '#002855';
  }
  run_button3(){
    document.getElementById('run_button3').style.color = '#002855';
    document.getElementById('run_button3').style.background = 'goldenrod';
    document.getElementById('run_button0').style.color = 'goldenrod';
    document.getElementById('run_button0').style.background = '#002855';
    document.getElementById('run_button1').style.color = 'goldenrod';
    document.getElementById('run_button1').style.background = '#002855';
    document.getElementById('run_button2').style.color = 'goldenrod';
    document.getElementById('run_button2').style.background = '#002855';
    document.getElementById('run_button4').style.color = 'goldenrod';
    document.getElementById('run_button4').style.background = '#002855';
    document.getElementById('run_button6').style.color = 'goldenrod';
    document.getElementById('run_button6').style.background = '#002855';
  }
  run_button4(){
    document.getElementById('run_button4').style.color = '#002855';
    document.getElementById('run_button4').style.background = 'goldenrod';
    document.getElementById('run_button0').style.color = 'goldenrod';
    document.getElementById('run_button0').style.background = '#002855';
    document.getElementById('run_button1').style.color = 'goldenrod';
    document.getElementById('run_button1').style.background = '#002855';
    document.getElementById('run_button2').style.color = 'goldenrod';
    document.getElementById('run_button2').style.background = '#002855';
    document.getElementById('run_button3').style.color = 'goldenrod';
    document.getElementById('run_button3').style.background = '#002855';
    document.getElementById('run_button6').style.color = 'goldenrod';
    document.getElementById('run_button6').style.background = '#002855';
  }
  run_button6(){
    document.getElementById('run_button6').style.color = '#002855';
    document.getElementById('run_button6').style.background = 'goldenrod';
    document.getElementById('run_button0').style.color = 'goldenrod';
    document.getElementById('run_button0').style.background = '#002855';
    document.getElementById('run_button1').style.color = 'goldenrod';
    document.getElementById('run_button1').style.background = '#002855';
    document.getElementById('run_button2').style.color = 'goldenrod';
    document.getElementById('run_button2').style.background = '#002855';
    document.getElementById('run_button3').style.color = 'goldenrod';
    document.getElementById('run_button3').style.background = '#002855';
    document.getElementById('run_button4').style.color = 'goldenrod';
    document.getElementById('run_button4').style.background = '#002855';
  }
  batsman1Wicket()
  {
    //this.balls.ifExtras = "false";
    let actionSheet = this.actionsheetCtrl.create({
    title: 'Batsman 1',

     buttons: [

       {
         text: 'Bowled',
         handler: () => {
           console.log('Bowled clicked');
         }
       },
       {
         text: 'Caught',
         handler: () => {
           console.log('Caught clicked');
         }
       },
       {
         text: 'LBW',
         handler: () => {
           console.log('LBW clicked');
           this.wide()

         }
       },
       {
         text: 'Run Out',
         handler: () => {
           console.log('Run Out clicked');
         }
       },
       {
         text: 'Retired Hurt',
         handler: () => {
           console.log('Retired Hurt clicked');
         }
       },
     ]
   });
   actionSheet.present();
   this.balls.isWicket = "true";
   this.balls.octant = 0;
   this.balls.score =0;

  }
  batsman2Wicket()
  {
    //this.balls.ifExtras = "false";
    let actionSheet = this.actionsheetCtrl.create({
    title: 'Batsman 2',

     buttons: [

       {
         text: 'Bowled',
         handler: () => {
           console.log('Bowled clicked');
         }
       },
       {
         text: 'Caught',
         handler: () => {
           console.log('Caught clicked');
         }
       },
       {
         text: 'LBW',
         handler: () => {
           console.log('LBW clicked');
           this.wide()

         }
       },
       {
         text: 'Run Out',
         handler: () => {
           console.log('Run Out clicked');
         }
       },
       {
         text: 'Retired Hurt',
         handler: () => {
           console.log('Retired Hurt clicked');
         }
       },
     ]
   });
   actionSheet.present();
   this.balls.isWicket = "true";
   this.balls.octant = 0;
   this.balls.score =0;

  }



  goToExtras()
  {
    let actionSheet = this.actionsheetCtrl.create({
    title: 'Extras',

     buttons: [

       {
         text: 'No Ball',
         handler: () => {
           console.log('No Ball clicked');
         }
       },
       {
         text: 'Leg-Bye',
         handler: () => {
           console.log('Leg-Bye clicked');
         }
       },
       {
         text: 'Wide',
         handler: () => {
           console.log('Wide clicked');
           this.wide()

         }
       },
       {
         text: 'Cancel',
         role: 'cancel', // will always sort to be on the bottom
         handler: () => {
           console.log('Cancel clicked');
         }
       }
     ]
   });
   actionSheet.present();

  }
  end()
  {
    let actionSheet = this.actionsheetCtrl.create({

     buttons: [

       {
         text: 'End Match',
         handler: () => {
           console.log('No Ball clicked');
         }
       },
       {
         text: 'End Innings',
         handler: () => {
           console.log('Leg-Bye clicked');
         }
       }


     ]
   });
   actionSheet.present();

  }
} // end of class
