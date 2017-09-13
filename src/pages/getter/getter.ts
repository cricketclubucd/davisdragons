import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { player } from '../../models/player';
import { HomePage } from '../home/home';
import { AddPage } from '../add/add';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';



@Component({
  selector: 'page-getter',
  templateUrl: 'getter.html'
})
export class GetterPage {

    name:FirebaseListObservable<any[]>;

    constructor(public navCtrl: NavController, private data: AngularFireDatabase) {

    }


    check(player: player){
        this.name = this.data.list("/Players",{
            query: {
                orderByChild: "email",
                equalTo: player.email
            }

        });

        this.name.subscribe(data =>
        {
            if(data.length == 0) {
                console.log('User does not exist');
                console.log(data);
                this.navCtrl.push(AddPage);

            } else {
                console.log('User does exist');
                console.log(data);
                this.navCtrl.push(HomePage);
            }
        });
    }

}
