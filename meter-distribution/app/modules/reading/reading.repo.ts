import ReadingModel from "./reading.schema";
import { IReading } from "./reading.types";




const get=(pagenumber:number,pagesize:number,filterParameter:Object)=>ReadingModel.findAndCountAll({where:{isDeleted:false,...filterParameter},limit:pagesize,offset:((pagenumber)*pagesize)});

//const create=(meterId:Number,meterRating:Number,meterPicture:string,isFaulty:boolean,comments:string,meterType:string)=>ReadingModel.create({meterType,meterId,meterRating,meterPicture,isFaulty,comments});

const create=(meter:IReading)=>ReadingModel.create({...meter})

const update=(updated:object,id:string)=>ReadingModel.update(  updated , { where: { id: id } });

const deleted=(id:string)=>ReadingModel.update({isDeleted:true},{ where :{id:id}})

const getAll=()=>ReadingModel.findAll({where:{isDeleted:false}})

export default{
    get,
    create,
    update,
    deleted,
    getAll
}