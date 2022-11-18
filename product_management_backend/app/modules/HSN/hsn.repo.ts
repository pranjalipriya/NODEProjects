import HSNModel from "./hsn.schema";
import { IHSN } from "./hsn.type";

const getHsn=()=>HSNModel.find({isDeleted:false});

// const getHsn=()=>{return HSNModel.aggregate([
//     { '$match'    : { "isDeleted" : false } },
//     { '$facet'    : {
//         data: [ { $skip: 1 }, { $limit: 1 } ] //{ $skip: (pagenumber-1)*limit }, { $limit: limit }
//     } }
// ] )
// }

const create=(hsn:IHSN)=>HSNModel.insertMany({...hsn});

const update=(updated:any)=>HSNModel.updateOne({_id: updated.id },{$set:{...updated}});

const deleted=(id:string)=>HSNModel.updateOne({_id:id},{$set:{isDeleted:true}})

export default{
    getHsn,
    create,
    update,
    deleted
}