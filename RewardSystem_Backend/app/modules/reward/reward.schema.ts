import { Schema, model } from 'mongoose';
import { IReward } from './reward.type';



export const rewardSchema = new Schema({
    totalPoints: {
        type: Number,
        default: 0,
        required: true
    },
    livePoints: {
        type: Number,
        default: 0,
        required: true
    },
    redeemedPoints: {
        type: Number,
        default: 0,
        required: true
    },
    lapsedPoints: {
        type: Number,
        default: 0,
        required: true
    },
    expiryTime:{
    type: String,
    default:0,
    required:true
    }
});
