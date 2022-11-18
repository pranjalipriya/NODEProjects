import storageRepo from "./storage.repo";
import { IStorage } from "./storage.type";



const get = async () => {
    try {
        return await storageRepo.get();
    } catch (e) {
        throw e
    }
}

const create = async (customer: IStorage) => {
    try {
        return await storageRepo.create(customer);
    }
    catch (e) {
        throw e
    }
}

const update = async (updated: Object) => {
    try {
        return await storageRepo.update(updated);
    } catch (e) {
        throw e
    }
}

const deleted = async (id: string) => {
    try {
        return await storageRepo.deleted(id);
    }
catch (e) {
    throw e
}
}

export default {
    get,
    create,
    update,
    deleted
}