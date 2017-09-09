import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({

  templateUrl: 'umpire.html'
})
export class UmpirePage {
 score = 0;
  constructor(public navCtrl: NavController) {
 this.score = 0;

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
