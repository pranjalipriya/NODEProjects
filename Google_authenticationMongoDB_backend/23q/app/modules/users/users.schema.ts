import { Document , model } from 'mongoose';
import { IUser } from './users.types';
import { BaseSchema } from "../../utility/base.schema";

export const userSchema = new BaseSchema ({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        unique: true
    },
    email:{
        type: String,
        unique:true
    },
});
type IUserDocument = Document & IUser;
export const UserModel = model<IUserDocument>("User" , userSchema);

export default UserModel;