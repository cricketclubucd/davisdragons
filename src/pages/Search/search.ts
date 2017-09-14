import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { player } from '../../models/player';
import { HomePage } from '../home/home';
import { AddPage } from '../add/add';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {ShowPage} from "../show/show";



@Component({
    selector: 'page-search',
    templateUrl: 'search.html'
})
export class SearchPage {



    player= {} as player;

    name:FirebaseListObservable<any[]>;

    constructor(public navCtrl: NavController, private data: AngularFireDatabase) {



    }


    check(player: player){
        this.name = this.data.list("/Players",{
            query: {
                orderByChild: "Jersey_Number",
                equalTo: player.Jersey_Number
            }

        });

        this.name.subscribe(data =>
        {
            if(data.length == 0) {
                console.log('User does not exist');
                alert("Player with this email is not in our databasee")

            } else {
                console.log('User does exist');
                //console.log(data);
                this.navCtrl.push(ShowPage, {playerInfo:data });
            }
        });
    }

    show(player:player){

        this.navCtrl.push(ShowPage);

    }

}
