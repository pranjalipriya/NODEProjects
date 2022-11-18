import NotifyModel from "./notify.schema";
import { INotify } from "./notify.type";

const create=(message:INotify)=> NotifyModel.insertMany({...message});

const getOne=(name:string)=>NotifyModel.find({to:name},{"message":1,"_id":0});

export default{
    create,
    getOne
}