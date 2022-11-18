import customerRepo from "./customer.repo";
import { ICustomer } from "./customer.types";



const get = async (pagenumber:number,pagesize:number,searchParameter:string) => {
    try {
        
        let previous=true,next=true; 
        const data=await customerRepo.get(pagenumber,pagesize,searchParameter);
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

const getpage = async (pagenumber:number,pagesize:number,searchParameter:object) => {
    try {
        
        let previous=true,next=true; 
        const data=await customerRepo.getpage(pagenumber,pagesize,searchParameter);
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

const create = async (customer: ICustomer) => {
    try {
       return await customerRepo.create(customer);
    }
    catch (e) {
        throw e
    }
}

const update = async (updated: Object,id:string) => {
    try {
      return  await customerRepo.update(updated,id);
    }
    catch (e) {
        throw e
    }
}

const deleted = async (id: string) => {
    try {
       return await customerRepo.deleted(id);
    } catch (e) {
        throw e
    }
}

const getAll=async()=>{
    try{
      return await customerRepo.getAll();
    }
    catch(e){
      throw e
    }
  }

  const getbyid=async(id:string)=>{
    try{
        return await customerRepo.getbyid(id);
      }
      catch(e){
        throw e
      }
  }

  const sort = async (pagenumber:number,pagesize:number) => {
    try {
        
        let previous=true,next=true; 
        const data=await customerRepo.sort(pagenumber,pagesize);
         //const {count}=data ;
        if(pagenumber<=0)
        previous=false;
       // if((pagesize*(pagenumber+1))>=count)
        next=false
        return {data,previous,next};
    }
    catch (e) {
        throw e
    }
}
export default {
    get,
    sort,
    create,
    update,
    deleted,
    getAll,
    getpage,
    getbyid
}