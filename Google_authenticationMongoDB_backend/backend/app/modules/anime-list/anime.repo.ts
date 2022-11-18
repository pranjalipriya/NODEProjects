import UserModel from "../users/user.schema";
import AnimeModel from "./anime.schema";
import { IAnime } from "./anime.types";



// const getpage = (pagenumber: number, pagesize: number, filterParameter: Object, sortby: string, order: string) => AnimeModel.findAndCountAll({
//     where: { isDeleted: false, ...filterParameter }
//     , order: [[sortby, order]],
//     limit: pagesize, offset: ((pagenumber) * pagesize)
// });

const getpage = (pagenumber: number, pagesize: number, filterParameter: {}, sort: {}) => {
    return AnimeModel.aggregate([
        { '$match': { isDeleted: false ,...filterParameter} },
        { '$sort': sort},
        { '$skip': (pagenumber) * pagesize },
        { '$limit': pagesize },

    ]);
}
const Count = () => AnimeModel.find({ isDeleted: false }).count()

const get = (pagenumber: number, pagesize: number, filterParameter: string) => AnimeModel.find({ 
    $or: [
    { name: { $regex: new RegExp('^' + (filterParameter || '') + '.*', 'i') } },
    { genre: { $regex: new RegExp('^' + (filterParameter || '') + '.*', 'i') } },
    { production: { $regex: new RegExp('^' + (filterParameter || '') + '.*', 'i') } },
     ]
    }
).skip(pagenumber*pagesize).limit(pagesize)
    


// const report = (from:number,to:number,filterParameter: Object) => AnimeModel.findAll({
//     where: { isDeleted: false ,
//     release: { [Op.between]: [from || 2015, to || 2018] }
//     }
// });


const create = (customer: IAnime) => AnimeModel.create({ ...customer });

// const update = (updated: object, id: string) => AnimeModel.update(updated, { where: { id: id } });

// const deleted = (id: string) => AnimeModel.update({ isDeleted: true }, { where: { id: id } })




export default {
    getpage,
    Count,
    get,
    create,
    // update,
    // deleted,
    // report
}