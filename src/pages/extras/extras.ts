import { Component } from '@angular/core';
import {ActionSheetController } from 'ionic-angular';
import {Platform} from 'ionic-angular';
import { NavController } from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
@Component({
  templateUrl: 'extras.html'

})
export class ExtrasPage
{
  constructor(public navCtrl: NavController, public actionsheetCtrl: ActionSheetController , public fdb: AngularFireDatabase, platform : Platform)
  {

  }

   openMenu()
   {
     let actionSheet = this.actionsheetCtrl.create({
     title: 'Extras',

      buttons: [

        {
          text: 'Bye',
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Leg-Bye',
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'No-Ball',
          handler: () => {
            console.log('Favorite clicked');
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
}
