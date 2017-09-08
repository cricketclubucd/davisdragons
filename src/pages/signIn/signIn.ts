import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { GetterPage } from '../getter/getter';
import { AddPage } from '../add/add';

@Component({
  selector: 'page-signIn',
  templateUrl: 'signIn.html'
})
export class SignInPage {

  constructor(public navCtrl: NavController) { }

  goToHome() {
	  this.navCtrl.push(HomePage);
  }

  goToGetter() {
	  this.navCtrl.push(GetterPage);
  }

  goToAdd() {
	  this.navCtrl.push(AddPage);
  }

}
