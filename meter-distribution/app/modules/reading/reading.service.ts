import readingRepo from "./reading.repo";
import { IReading } from "./reading.types";



const get = async (pagenumber:number,pagesize:number,filterParameter:object) => {
    try {
        let previous=true,next=true; 
        const data=await readingRepo.get(pagenumber,pagesize,filterParameter);
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

const create = async (meter: IReading) => {
    try {
        // const limit=meterRepo.getOne(meter.meterId)
        //const meterId=parseInt(meter.meterId)
        //meter.isFaulty=true;
        //if(meter.meterRating.length===0)
        //{meter.isFaulty=true;
         //meter.comments="No Readings could be read";
        //}
        //for(let i=0;i<meter.meterRating.length;i++)
        //{
          //  const meterRating=meter.meterRating[i]
           //await readingRepo.create(meterId,meterRating,meter.meterPicture,meter.isFaulty,meter.comments,meter.meterType);
        //}
       return await readingRepo.create(meter);
    }
    catch (e) {
        throw e
    }
}

// types!!!!!
const update = async (updated: Object,id:string) => {
    try {
      return  await readingRepo.update(updated,id);
    }
    catch (e) {
        throw e
    }
}

const deleted = async (id: string) => {
    try {
       return await readingRepo.deleted(id);
    } catch (e) {
        throw e
    }
}

const getAll=async()=>{
    try{
      return readingRepo.getAll();
    }
    catch(e){
      throw e
    }
  }
export default {
    get,
    create,
    update,
    deleted,
    getAll
}