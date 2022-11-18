import { Op } from "sequelize";
import { sequelize } from "../../connections/postgre.connect";
import AnimeModel from "./anime.schema";
import { IAnime } from "./anime.types";



const getpage = (pagenumber: number, pagesize: number, filterParameter: Object, sortby: string, order: string) => AnimeModel.findAndCountAll({
    where: { isDeleted: false, ...filterParameter }
    , order: [[sortby||"name", order||"ASC"]],
    limit: pagesize, offset: ((pagenumber) * pagesize)
});

const get = (pagenumber: number, pagesize: number, filterParameter: string) =>  AnimeModel.findAndCountAll({
        where: {
            isDeleted: false, [Op.or]: {
                name: { [Op.iLike]: `%${filterParameter}%` },
                production: { [Op.iLike]: `%${filterParameter}%` },
                genre: { [Op.iLike]: `%${filterParameter}%` }
            }
        },
        limit: pagesize, offset: ((pagenumber) * pagesize)
    });


const report = (from:number,to:number,filterParameter: Object) => AnimeModel.findAll({
    where: { isDeleted: false ,
    release: { [Op.between]: [from || 2015, to || 2018] }
    },
    // attributes: ['name', [sequelize.fn('count', sequelize.col('episodes')), 'cnt'],
    // 'episodes',[sequelize.fn('count', sequelize.col('episodes')), 'cnt']],
    //   group: ['name'], 
});


const create = (customer: IAnime) => AnimeModel.create({ ...customer });

const update = (updated: object, id: string) => AnimeModel.update(updated, { where: { id: id } });

const deleted = (id: string) => AnimeModel.update({ isDeleted: true }, { where: { id: id } })




export default {
    getpage,
    get,
    create,
    update,
    deleted,
    report
}