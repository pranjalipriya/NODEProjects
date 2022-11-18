import rewardRepo from "./reward.repo";
import { IReward } from "./reward.type";

 const create= async(username:string, totalPoints: number,livePoints:number,redeemedPoints:number,lapsedPoints:number)=>{
    //, livePoints: number, redeemedPoints: number, lapsedPoints: number
    await rewardRepo.create(username,totalPoints,livePoints,redeemedPoints,lapsedPoints);
}  
//, livePoints: number, redeemedPoints: number, lapsedPoints: number

export default{
    create
}