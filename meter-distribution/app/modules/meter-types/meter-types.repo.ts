import MeterTypesModel from "./meter-types.schema";
import { IMeterTypes } from "./meter-types.types";



const get=(pagenumber:number,pagesize:number,filterParameter:Object)=>MeterTypesModel.findAndCountAll({where:{isDeleted:false,...filterParameter},limit:pagesize,offset:((pagenumber)*pagesize)});

const create=(meter:IMeterTypes)=>MeterTypesModel.create({...meter});

const update=(updated:object,id:string)=>MeterTypesModel.update(  updated , { where: { id: id } });

const deleted=(id:string)=>MeterTypesModel.update({isDeleted:true},{ where :{id:id}})

const getAll=()=>MeterTypesModel.findAll({where:{isDeleted:false}})

const getbyid=(id:Number)=>MeterTypesModel.findAll({where:{isDeleted:false,id:id}})

export default{
    getbyid,
    get,
    create,
    update,
    deleted,
    getAll
}