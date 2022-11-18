
import { ICredentials } from "../auth/auth.types";
import UserModel from "./users.schema";
import { IUser } from "./users.types";

const get = (credentials:ICredentials) => UserModel.findOne({username: credentials.username });

const getOne=(name:string)=>UserModel.findOne({username:name})

const create=(user:IUser)=> UserModel.insertMany({...user});

const deleteUser=(id:string)=>UserModel.updateOne({_id:id}, {$set:{isDeleted:true}});

const getUsers=()=>UserModel.find({isDeleted:false});

const updatedUser=(user:IUser,id:string)=>UserModel.updateOne({_id:id },{$set:{username: user.username,email: user.email}})
export default {
    get,
    create,
    deleteUser,
    getOne,
    getUsers,
    updatedUser
}