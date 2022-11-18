import { ICredential } from "../auth/auth.types";
import UserModel from "./user.schema";
import { IUser } from "./user.type";


const getUser = async (email: string) => {
    try {
        return await UserModel.findOne({ where: { email: email } })
    }

    catch (e) {
        throw e
    }
}

const create = async (user: IUser) => await UserModel.create({ ...user });

const updatedUser = async (user: string, email: string) => {
    try {

        const data = await UserModel.update({ password: user }, { where: { email: email } });

        console.log(data, user);
        return data
    }
    catch (e) {
        throw e
    }
}

const get = async (pagenumber: number, pagesize: number, searchParameter: object) => {
    const data = await UserModel.findAndCountAll({ where: { isDeleted: false, ...searchParameter },
        order: [['id', 'DESC']]
        , limit: pagesize, offset: ((pagenumber) * pagesize) });
    return data
}
const update = (updated: object, id: string) => UserModel.update(updated, { where: { id: id } });

const deleted = (id: string) => UserModel.update({ isDeleted: true }, { where: { id: id } })

const getAll = () => UserModel.findAll({ where: { isDeleted: false } })

export default {
    getUser,
    getAll,
    create,
    updatedUser,
    get,
    update,
    deleted
}