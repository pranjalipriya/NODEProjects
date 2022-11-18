import UserModel from "../users/users.schema";

const create=(username:string ,totalPoints: number,livePoints:number,redeemedPoints:number,lapsedPoints:number)=>UserModel.updateOne({username : username} , {$set : {'reward.totalPoints' : totalPoints ,'reward.livePoints':livePoints ,'reward.redeemedPoints':redeemedPoints,'reward.lapsedPoints':lapsedPoints}});
//, livePoints: number, redeemedPoints: number, lapsedPoints: number
export default{
    create
}