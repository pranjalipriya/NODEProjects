import { Schema, model } from 'mongoose';
import { INotify } from './notify.type';



const notifySchema = new Schema({
    to: {
        type: String,
        required: true
    },
    from:{
        type: String,
        default:"admin",
        required:true
    },
    message:{
        type: String,
        required:true
    }
});

const NotifyModel  = model <INotify> ("Notify", notifySchema);

export default NotifyModel;