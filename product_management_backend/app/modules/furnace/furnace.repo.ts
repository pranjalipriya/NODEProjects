import FurnaceModel from "./furnace.schema";
import { IFurnace } from "./furnace.type";



const get=()=>FurnaceModel.find({isDeleted:false});

const create=(furnace:IFurnace)=>FurnaceModel.insertMany({...furnace});

const update=(updated:any)=>FurnaceModel.updateOne({_id: updated.id },{$set:{...updated}});

const deleted=(id:string)=>FurnaceModel.updateOne({_id:id},{$set:{isDeleted:true}})

export default{
    get,
    create,
    update,
    deleted
}