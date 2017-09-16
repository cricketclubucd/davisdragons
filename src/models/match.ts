import { balls } from '../models/balls';

export interface key{

    MatchKey: string;
    ballKey: number;

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
