import materialRepo from "./material.repo";
import { IMaterial } from "./material.type";



const get = async () => {
    try {
        return await materialRepo.get();
    }
    catch (e) {
        throw e
    }
}

const create = async (material: IMaterial) => {
    try {
        return await materialRepo.create(material);
    }
    catch (e) {
        throw e
    }
}

const update = async (updated: Object) => {
    try {
        return await materialRepo.update(updated);
    }
    catch (e) {
        throw e
    }
}

const deleted = async (id: string) => {
    try {
        return await materialRepo.deleted(id);
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