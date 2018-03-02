import { balls } from '../models/balls';

export interface key{

    MatchKey: string;
    ballKey: number;
    numPlayers: number;
    date:any;


}

export interface side{

    squad: string;
    startKey: string;
}




export interface match
{
    Balls:
        {
            balls;
        }
    MatchStats:
        {
            PlayerRoster:{

                Away:{
                    captain: number;
                    vcaptain: number;
                }
                Home:{
                    captain:number;
                    vcaptain: number;
                }
            }

            Score:{
                ballsnOver: number;
                totalOvers: number;
                totalRuns: number;
                totalWickets: number;
            }

            Toss: string;
        }

}
