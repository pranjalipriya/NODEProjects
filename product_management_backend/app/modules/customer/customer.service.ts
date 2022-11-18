import customerRepo from "./customer.repo";
import { ICustomer } from "./customer.type";


const get = async (pagenumber:number,limit:number,filterParameter:object) => {
    try {
        return await customerRepo.get(pagenumber,limit,filterParameter);
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

const update = async (updated: Object) => {
    try {
      return  await customerRepo.update(updated);
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
export default {
    get,
    create,
    update,
    deleted
}