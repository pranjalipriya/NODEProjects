import { Schema, model } from 'mongoose';
import { IGifts } from './gifts.types';


const giftSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    pointsRequired:{
        type:Number,
        required:true
    }
});

const GiftModel  = model <IGifts> ("Gift", giftSchema);

export default GiftModel;