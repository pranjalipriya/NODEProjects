import CustomerModel, { AnimeModel } from "./anime.schema";
import { IAnime } from "./anime.type";


// const get=CustomerModel.find({isDeleted:false});
// const get=(pagenumber:Number,limit:Number,filterParameter:Object)=>
// {return CustomerModel.aggregate([
//      { '$match'    : { "isDeleted" : false, Object.keys(filterParameter) : Object.values(filterParameter)}},
//      { '$skip': (pagenumber-1)*limit }, { '$limit': limit } 
// ] )
// }

const getpage = (pagenumber: number, pagesize: number, filterParameter: Object) => AnimeModel.aggregate([
    {'$match': { isDeleted: false },...filterParameter},
    { '$skip': (pagenumber ) * pagesize },
    { '$limit': pagesize},

]);

const create = (customer: IAnime) => CustomerModel.insertMany({ ...customer });

// const update = (updated: any) => CustomerModel.updateOne({ _id: updated.id }, { $set: { ...updated } });

// const deleted = (id: string) => CustomerModel.updateOne({ _id: id }, { $set: { isDeleted: true } })




export default {
    getpage,
     create
    // update,
    // deleted
}




// const getpage = (pagenumber: number, pagesize: number, filterParameter: Object, sortby: string, order: string) => AnimeModel.findAndCountAll({
//     where: { isDeleted: false, ...filterParameter }
//     , order: [[sortby, order]],
//     limit: pagesize, offset: ((pagenumber) * pagesize)
// });

// // const get = async (pagenumber: number, pagesize: number, filterParameter: string) => {
// //     console.log(filterParameter)
// //     return await AnimeModel.findAndCountAll({
// //         where: {
// //             isDeleted: false, [Op.or]: {
// //                 name: { [Op.like]: `%${filterParameter}%` },
// //                 production: { [Op.like]: `%${filterParameter}%` },
// //                 release: { [Op.like]: `%${filterParameter}%` },
// //                 genre: { [Op.like]: `%${filterParameter}%` }
// //             }
// //         },
// //         limit: pagesize, offset: ((pagenumber) * pagesize)
// //     });
// // }

// const report = (filterParameter: Object) => AnimeModel.findAndCountAll({
//     where: { isDeleted: false, ...filterParameter }

// });


// const create = (customer: IAnime) => AnimeModel.create({ ...customer });

// const update = (updated: object, id: string) => AnimeModel.update(updated, { where: { id: id } });

// const deleted = (id: string) => AnimeModel.update({ isDeleted: true }, { where: { id: id } })




// export default {
//     getpage,
//     get,
//     create,
//     update,
//     deleted,
//     report
// }