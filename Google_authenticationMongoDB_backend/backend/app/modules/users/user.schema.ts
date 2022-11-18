import { Document , model } from 'mongoose';
import { BaseSchema } from "../../utility/base.schema";
import { IUser } from './user.type';

export const userSchema = new BaseSchema ({
     id:{
      type: String,
      unique:true
     },
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