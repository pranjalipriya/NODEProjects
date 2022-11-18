import OrderModel from "./order.schema";
import { IOrder } from "./order.type";


const get=()=>OrderModel.find({isDeleted:false});

const create=(order:IOrder)=>OrderModel.insertMany({...order});

const update=(updated:any)=>OrderModel.updateOne({_id: updated.id },{$set:{...updated}});

const deleted=(id:string)=>OrderModel.updateOne({_id:id},{$set:{isDeleted:true}})

export default{
    get,
    create,
    update,
    deleted
}