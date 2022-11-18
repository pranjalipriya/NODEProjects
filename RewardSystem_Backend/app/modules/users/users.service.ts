import { createPassword } from "../../utility/password";
import { ICredentials } from "../auth/auth.types";
import productsService from "../products/products.service";
import rewardRepo from "../reward/reward.repo";
import { rewardSchema } from "../reward/reward.schema";
import rewardService from "../reward/reward.service";
import { ROLES } from "../roles/roles.constants";
import { USER_MESSAGE } from "./users.constants";
import userRepo from "./users.repo";
import { IUser } from "./users.types";


const getUser = async (credentials: ICredentials) =>  await userRepo.get(credentials); 


const getOne = async (name: string) => await userRepo.getOne(name);
   


const create = async (user: IUser) => {
    user.username = user.email.split("@")[0]+Math.floor(Math.random()*100);
    const { password, hashedPassword } = await createPassword();
    user.password = hashedPassword;
    user.role = ROLES.distributor;
    
    await userRepo.create(user);
    await pointCalculate(user);
   
    return password ;
}

const deleteUser=async(id:string)=>{
    const didDelete=await userRepo.deleteUser(id);
    if (didDelete) {
        return USER_MESSAGE.USER_DELETED;
    }

    throw USER_MESSAGE.NOT_FOUND;
}

const getUsers = async() => {
    const user = await userRepo.getUsers();

    if (user) {
        return user;
    }

    throw USER_MESSAGE.NOT_FOUND;
}

const updateUser= async(user: IUser,id:string)=> {
    const userIndex = await userRepo.updatedUser(user,id);

    if (userIndex) {
        return USER_MESSAGE.USER_UPDATED;
    }

    return USER_MESSAGE.NOT_FOUND;

}

const pointCalculate = async(resultArr:any) => {
    for(let result of resultArr)
 { const productValue=await productsService.get(result.name);
    const totalPoints=+(productValue!.pointsPerSale)*result.quantity;
    const redeemedPoints=0;
    const livePoints=totalPoints-redeemedPoints;
    const lapsedPoints=0;
    rewardService.create(result.username,totalPoints,livePoints,redeemedPoints,lapsedPoints);
    
 }
}





export default {
    getUsers,
    create,
    getUser,
    getOne,
    updateUser,
    deleteUser,
    pointCalculate
}