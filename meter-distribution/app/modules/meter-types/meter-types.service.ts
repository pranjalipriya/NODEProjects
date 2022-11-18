import meterTypesRepo from "./meter-types.repo";
import { IMeterTypes } from "./meter-types.types";



const get = async (pagenumber:number,pagesize:number,filterParameter:object) => {
    try {
        let previous=true,next=true; 
        const data=await meterTypesRepo.get(pagenumber,pagesize,filterParameter);
        const {count}=data ;
        if(pagenumber<=0)
        previous=false;
        if((pagesize*(pagenumber+1))>=count)
        next=false
        return {data,previous,next};
    }
    catch (e) {
        throw e
    }
}

const create = async (meter: IMeterTypes) => {
    try {
       return await meterTypesRepo.create(meter);
    }
    catch (e) {
        throw e
    }
}

const update = async (updated: Object,id:string) => {
    try {
      return  await meterTypesRepo.update(updated,id);
    }
    catch (e) {
        throw e
    }
}

const deleted = async (id: string) => {
    try {
       return await meterTypesRepo.deleted(id);
    } catch (e) {
        throw e
    }
}

const getAll=async()=>{
    try{
      return meterTypesRepo.getAll();
    }
    catch(e){
      throw e
    }
  }

  const getbyid=async(id:string)=>{
    try{
        const id1=parseInt(id);
        return await meterTypesRepo.getbyid(id1);
      }
      catch(e){
        throw e
      }
  }
export default {
    getbyid,
    get,
    create,
    update,
    deleted,
    getAll
}