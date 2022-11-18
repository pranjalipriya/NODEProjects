import { USER_MESSAGE } from "./user.responses";
import userSchema from "./user.schema";
import { IUser } from "./user.types";


const getUsers = () => userSchema.get();

const getPendingRequests = () => {
    const result: IUser[]=userSchema.getRequest("pending");
    if(result.length!=0)
            return result; 
    else
     throw USER_MESSAGE.REQUEST_NOT_FOUND 

};
const getApprovedRequests = () => {
    const result: IUser[]=userSchema.getRequest("approved");
    if(result.length!=0)
    return result; 
else
throw USER_MESSAGE.REQUEST_NOT_FOUND 
    }
const getRejectedRequests = () =>{
    const result: IUser[]=userSchema.getRequest("rejected");
    if(result.length!=0)
    return result; 
else
throw USER_MESSAGE.REQUEST_NOT_FOUND 
    } 
const createUser = async (user: IUser) => userSchema.create(user );
 
const assignSchool = (id: string, school: string[]) => {
    const assigned = userSchema.assignSchoolToWorker(id, school);
    if (assigned) {
      return assigned;
    } else {
      throw USER_MESSAGE.NOT_FOUND;
    }
  };


export default {
    getUsers,
    getPendingRequests,
    getRejectedRequests,
    getApprovedRequests,
    createUser,
    assignSchool
}