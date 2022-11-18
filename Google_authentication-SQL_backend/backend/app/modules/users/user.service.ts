import { createHash, createPassword } from "../../utility/password"
import { AUTH_ERRORS } from "../auth/auth.constants"
import { ICredential } from "../auth/auth.types"
import userRepo from "./user.repo"
import usersRepo from "./user.repo"
import { IUser } from "./user.type"

const getUser = async (email: string) => {
  try {
    return await usersRepo.getUser(email)
  }
  catch (e) {
    throw e
  }
}
const create = async (user: IUser) => {
  try {
    const {password,hashedPassword} = await createPassword() ;
    user.password = hashedPassword;
    const result = await userRepo.create(user);
    return password;
  }
  catch (e) {
    throw AUTH_ERRORS.INTERNAL
  }

}

//user


// const get = async (pagenumber:number,pagesize:number,searchParameter:object) => {
//     try { let previous=true,next=true; 
//       const data=await userRepo.get(pagenumber,pagesize,searchParameter);
//       const {count}=data ;
//       if(pagenumber<=0)
//       previous=false;
//       if((pagesize*(pagenumber+1))>=count)
//       next=false
//       return {data,previous,next};
//     }
//     catch (e) {
//         throw e
//     }
// }


// const update = async (updated: object,id:string) => {
//     try {
//       return  await userRepo.update(updated,id);
//     }
//     catch (e) {
//         throw e
//     }
// }

// const deleted = async (id: string) => {
//     try {
//        return await userRepo.deleted(id);
//     } catch (e) {
//         throw e
//     }
// }

// const getAll=async()=>{
//   try{
//     return userRepo.getAll();
//   }
//   catch(e){
//     throw e
//   }
// }
export default {
  getUser,
  //getAll,
  create,
  //update,
  //deleted,
  //get
}