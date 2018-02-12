import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import { player } from '../../models/player';


import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {stringify} from "@angular/core/src/util";
import 'rxjs/add/operator/take';



@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html'
})


export class ProfilePage {

    constructor(public navCtrl: NavController,public navPrams: NavParams, private data: AngularFireDatabase) {


    }

}

