import { AUTH_ERRORS } from "../auth/auth.constants";
import { ANIME_MESSAGE } from "./anime.constants";
import animeRepo from "./anime.repo";
import customerRepo from "./anime.repo";
import { IAnime } from "./anime.types";



const get = async (pagenumber:number,pagesize:number,searchParameter:string) => {
    try {
        
        let previous=true,next=true; 
        const data=await animeRepo.get(pagenumber,pagesize,searchParameter);
         const {count}=data ;
        if(pagenumber<=0)
        previous=false;
        if((pagesize*(pagenumber+1))>=count)
        next=false
        return {data,previous,next};
    }
    catch (e) {
        throw ANIME_MESSAGE.NOT_FOUND
    }
}

const getpage = async (pagenumber:number,pagesize:number,searchParameter:object) => {
    try {
        // let sortby = 'name';
        // let order= 'ASC';
        const {sortby,order,...searchParamete}=searchParameter as any;
        let previous=true,next=true; 
    //    if(Object.values(sort)[0]==='ASC'||Object.values(sort)[0]==='DESC')
    //     {
    //          sortby=Object.keys(sort)[0]
    //          order=Object.values(sort)[0]
    //          searchParameter={}
    //     }
        const data=await animeRepo.getpage(pagenumber,pagesize,searchParamete,sortby,order);
        const {count}=data ;
        if(pagenumber<=0)
        previous=false;
        if((pagesize*(pagenumber+1))>=count)
        next=false
        return {data,previous,next};
    }
    catch (e) {
        throw ANIME_MESSAGE.NOT_FOUND
    }
}

const report=async (from:number,to:number,searchParameter:object) => {
    try {
        if(to-from<0)
        {
            return "Invalid year filter"
        }
        const data=await animeRepo.report(from,to,searchParameter);

        return data
    }

    catch (e) {
        throw ANIME_MESSAGE.NOT_FOUND
    }
}

const create = async (customer: IAnime) => {
    try {
       return await animeRepo.create(customer);
    }
    catch (e) {
        throw AUTH_ERRORS.INTERNAL
    }
}

const update = async (updated: Object,id:string) => {
    try {
      return  await animeRepo.update(updated,id);
    }
    catch (e) {
        throw ANIME_MESSAGE.NOT_FOUND
    }
}

const deleted = async (id: string) => {
    try {
       return await animeRepo.deleted(id);
    } catch (e) {
        throw ANIME_MESSAGE.NOT_FOUND
    }
}



export default {
    get,
    create,
    update,
    deleted,
    getpage,
    report
}