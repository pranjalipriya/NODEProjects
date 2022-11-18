import animeRepo from "./anime.repo";
import { IAnime } from "./anime.type";



// const get = async (pagenumber:number,pagesize:number,searchParameter:string) => {
//     try {
        
//         let previous=true,next=true; 
//         const data=await animeRepo.get(pagenumber,pagesize,searchParameter);
//          const {count}=data ;
//         if(pagenumber<=0)
//         previous=false;
//         if((pagesize*(pagenumber+1))>=count)
//         next=false
//         return {data,previous,next};
//     }
//     catch (e) {
//         throw e
//     }
// }

const getpage = async (pagenumber:number,pagesize:number,searchParameter:object,sort:object) => {
    try {
        let sortby = 'name';
        let order= 'ASC';
        let previous=true,next=true; 
       if(Object.values(sort)[0]==='ASC'||Object.values(sort)[0]==='DESC')
        {
             sortby=Object.keys(sort)[0]
             order=Object.values(sort)[0]
             searchParameter={}
        }
        const data=await animeRepo.getpage(pagenumber,pagesize,searchParameter) //,sortby,order);
        //const {count}=data ;
        // if(pagenumber<=0)
        // previous=false;
        // if((pagesize*(pagenumber+1))>=count)
        // next=false
        // return {data,previous,next};
    }
    catch (e) {
        throw e
    }
}

// const report=async (searchParameter:object) => {
//     try {
//         const data=await animeRepo.report(searchParameter);
//         return data
//     }
//     catch (e) {
//         throw e
//     }
// }

const create = async (customer: IAnime) => {
    try {
       return await animeRepo.create(customer);
    }
    catch (e) {
        throw e
    }
}

// const update = async (updated: Object,id:string) => {
//     try {
//       return  await animeRepo.update(updated,id);
//     }
//     catch (e) {
//         throw e
//     }
// }

// const deleted = async (id: string) => {
//     try {
//        return await animeRepo.deleted(id);
//     } catch (e) {
//         throw e
//     }
// }



export default {
    getpage,
     create
    // update,
    // deleted,
    // getpage,
    // report
}