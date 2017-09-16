import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { player } from '../../models/player';
import { side } from '../../models/match';

import { HomePage } from '../home/home';
import { AddPage } from '../add/add';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {ShowPage} from "../show/show";
import {TeamMembersPage} from "../teamMembers/teamMembers";


@Component({
    selector: 'page-find',
    templateUrl: 'FindPlayer.html'
})
export class FindPlayerPage {



    player= {} as player;
    side = {} as side;

    name:FirebaseListObservable<any[]>;
    playerInfo:FirebaseListObservable<any[]>;
    playerRef$:FirebaseListObservable<any[]>;

    constructor(public navCtrl: NavController,public navPrams: NavParams, private data: AngularFireDatabase)
    {

        var CaptainSide:any = null;
        CaptainSide = this.navPrams.get('team');
        this.side = CaptainSide;
        console.log(CaptainSide);

    }


    check(player: player){
        this.name = this.data.list("/ClubParams/ClubRoster",{
            query: {
                orderByChild: "Jersey_Number",
                equalTo: player.Jersey_Number
            }

        });

        this.name.subscribe(data =>
        {
            if(data.length == 0) {
                console.log('User does not exist');
                alert("Player with this Jersey Number is not in our databasee")

            } else {
                console.log('User does exist');
                //console.log(data);
                this.navCtrl.push(TeamMembersPage, {playerInfo:data });
            }
        });
    }

    show(player:player){

        this.navCtrl.push(ShowPage);

    }


}
