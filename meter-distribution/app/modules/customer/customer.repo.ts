import { Op } from "sequelize";
import UserModel from "../users/user.schema";
import CustomerModel from "./customer.schema";
import { ICustomer } from "./customer.types";


// const {Op}=require("sequelize")

const getpage = (pagenumber: number, pagesize: number, filterParameter: Object) => CustomerModel.findAndCountAll({ where: { isDeleted: false ,...filterParameter}, limit: pagesize, offset: ((pagenumber) * pagesize) });

const get = (pagenumber: number, pagesize: number, filterParameter: string) => CustomerModel.findAndCountAll({ where: { isDeleted: false, name: { [Op.startsWith]: filterParameter } }, limit: pagesize, offset: ((pagenumber) * pagesize) });

const sort = (pagenumber: number, pagesize: number) => CustomerModel.findAll({
    // order: [['createdAt', 'ASC']]
})
// const get = async (pagenumber: number, pagesize: number, filterParameter: Object) =>{
//     try {
//         await CustomerModel.findAll({
//         // where: { isDeleted: false }, 
//         include: {
//             model: UserModel,
//             // attributes: ['username', 'email']
//         }
//     });

//     } catch (error) {
//         console.log(error);

//     }
// }

const create = (customer: ICustomer) => CustomerModel.create({ ...customer });

const update = (updated: object, id: string) => CustomerModel.update(updated, { where: { id: id } });

const deleted = (id: string) => CustomerModel.update({ isDeleted: true }, { where: { id: id } })

const getAll = () => CustomerModel.findAll({ where: { isDeleted: false } })

const getbyid = (id: string) => CustomerModel.findAll({ where: { isDeleted: false, userId: id } })

export default {
    getbyid,
    sort,
    getpage,
    get,
    create,
    update,
    deleted,
    getAll
}