import MaterialModel from "./material.schema";
import { IMaterial } from "./material.type";



const get=()=>MaterialModel.find({isDeleted:false});

const create=(material:IMaterial)=>MaterialModel.insertMany({...material});

const update=(updated:any)=>MaterialModel.updateOne({_id: updated.id },{$set:{...updated}});

const deleted=(id:string)=>MaterialModel.updateOne({_id:id},{$set:{isDeleted:true}})

export default{
    get,
    create,
    update,
    deleted
}