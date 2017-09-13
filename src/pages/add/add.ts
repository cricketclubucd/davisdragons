import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { player } from '../../models/player';


import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {stringify} from "@angular/core/src/util";



@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})


export class AddPage {


    player = {} as player;

    playerRef$: FirebaseListObservable<player[]>;

    constructor(public navCtrl: NavController, private data: AngularFireDatabase) {

        this.playerRef$ = this.data.list('Players');


    }

    addPlayer(player: any) {
        var pass = document.getElementById('pass');
        var r_pass = document.getElementById('r_pass');
        var name = document.getElementById('name');
        var email = document.getElementById('email');
        var jn = document.getElementById('jn');

        this.playerRef$.push(this.player);
        this.player = {} as player;

    }

}

