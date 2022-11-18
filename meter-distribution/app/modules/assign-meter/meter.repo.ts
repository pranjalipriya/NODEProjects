import MeterModel from "./meter.schema";
import { IMeter } from "./meter.types";


// readability?
const get=(pagenumber:number,pagesize:number,filterParameter:Object)=>MeterModel.findAndCountAll({where:{isDeleted:false},limit:pagesize,offset:((pagenumber)*pagesize)});

// const get = async (pagenumber: number, pagesize: number, filterParameter: Object) =>{
//     try {
//         await MeterModel.findAndCountAll({
//         where: { isDeleted: false },
//         include: {
//             model: MeterTypesModel,
//             attributes: ['meterType', 'readingRequired']
//         }
//     });
        
//     } catch (error) {
//         console.log(error);
        
//     }
// }

const create = (meter: IMeter) => MeterModel.create({ ...meter });

const update = (updated: object, id: string) => MeterModel.update(updated, { where: { id: id } });

const deleted = (id: string) => MeterModel.update({ isDeleted: true }, { where: { id: id } })

const getbyid=(id:string)=>MeterModel.findAll({where:{isDeleted:false,customerId:id}})
export default {
    getbyid,
    get,
    create,
    update,
    deleted
}