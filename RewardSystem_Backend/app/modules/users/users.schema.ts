import { Schema, model } from 'mongoose';
import { rewardSchema } from '../reward/reward.schema';
import { IUser } from './users.types';


const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email:{

    type: String,
    required:true
    },
    role: {
        type: String,
        required:true
    },
    isDeleted:{
        type:Boolean,
        default: false,
        required:true
    },
    reward : {
        type : rewardSchema,
        default : {}
    }
});

const UserModel  = model <IUser> ("User", userSchema);

export default UserModel;