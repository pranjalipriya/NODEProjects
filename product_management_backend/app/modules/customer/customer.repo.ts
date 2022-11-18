import CustomerModel from "./customer.schema";
import { ICustomer } from "./customer.type";

// const get=CustomerModel.find({isDeleted:false});
// const get=(pagenumber:Number,limit:Number,filterParameter:Object)=>
// {return CustomerModel.aggregate([
//      { '$match'    : { "isDeleted" : false, Object.keys(filterParameter) : Object.values(filterParameter)}},
//     { '$facet'    : {
//         data: [ { $skip: (pagenumber-1)*limit }, { $limit: limit } ] //{ $skip: 1 }, { $limit: 10 }
//     } }
// ] )
// }

const get=(pagenumber:number,limit:number,filterParameter:Object)=>CustomerModel.find({isDeleted:false}).limit(limit).skip((pagenumber-1)*limit);

const create=(customer:ICustomer)=>CustomerModel.insertMany({...customer});

const update=(updated:any)=>CustomerModel.updateOne({_id: updated.id },{$set:{...updated}});

const deleted=(id:string)=>CustomerModel.updateOne({_id:id},{$set:{isDeleted:true}})

export default{
    get,
    create,
    update,
    deleted
}