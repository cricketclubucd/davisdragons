import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import { player } from '../../models/player';


import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {stringify} from "@angular/core/src/util";
import 'rxjs/add/operator/take';



@Component({
    selector: 'page-show',
    templateUrl: 'show.html'
})


export class ShowPage {


    player = {} as player;

    name:FirebaseObjectObservable<player>;

    playerRef$: FirebaseListObservable<player[]>;

    constructor(public navCtrl: NavController,public navPrams: NavParams, private data: AngularFireDatabase) {


        this.name = this.navPrams.get('playerInfo');

        this.playerRef$ = this.data.list('Players');

    }

}

