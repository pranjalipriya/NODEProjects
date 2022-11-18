import meterRepo from "./meter.repo";
import { IMeter } from "./meter.types";




const get = async (pagenumber:number,pagesize:number,searchParameter:object) => {
    try {
        
        let previous=true,next=true; 
        const data=await meterRepo.get(pagenumber,pagesize,searchParameter);
        // const {count}=data ;
        if(pagenumber<=0)
        previous=false;
        // if((pagesize*(pagenumber+1))>=count)
        next=false
        return {data,previous,next};
    }
    catch (e) {
        throw e; // e means? service throws meaningful errors always.
    }
}

const create = async (meter: IMeter) => {
    try {
       return await meterRepo.create(meter);
    }
    catch (e) {
        throw e
    }
}

const update = async (updated: Object,id:string) => {
    try {
      return  await meterRepo.update(updated,id);
    }
    catch (e) {
        throw e
    }
}

const deleted = async (id: string) => {
    try {
       return await meterRepo.deleted(id);
    } catch (e) {
        throw e
    }
}

const getbyid=async(id:string)=>{
    try{
        return await meterRepo.getbyid(id);
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
    deleted
}