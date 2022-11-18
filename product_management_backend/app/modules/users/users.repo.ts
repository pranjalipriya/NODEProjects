
import { ICredentials } from "../auth/auth.types";
import { ROLES } from "../roles/roles.constants";
import UserModel from "./users.schema";
import { IUser } from "./users.types";

const get = (credentials: ICredentials) => UserModel.findOne({ username: credentials.username });

const getUser = (username: string) => UserModel.findOne({ username: username })

const eUser = (email: string) => UserModel.findOne({ email: email })

const getOne = (name: string) => UserModel.findOne({ username: name })

const create = (user: IUser) => UserModel.insertMany({ ...user });

const deleteUser = (id: string) => UserModel.updateOne({ _id: id }, { $set: { isDeleted: true } });

// const getUsers = () => UserModel.find({ isDeleted: false , role:ROLES.clerk});
const getUsers=()=>{return UserModel.aggregate([
    // { '$match'    : { "isDeleted" : false}},
     { '$match'    : { "isDeleted" : false, "role":ROLES.clerk}},
    // { '$facet'    : {
    //     data: [ { $skip: 1 }, { $limit: 10 } ] //{ $skip: (pagenumber-1)*limit }, { $limit: limit }
    // } }
] )
}

const updatedUser = (user: any) => UserModel.updateOne({ _id: user.id }, { $set: { ...user } });

export default {
    get,
    eUser,
    getUser,
    create,
    deleteUser,
    getOne,
    getUsers,
    updatedUser
}