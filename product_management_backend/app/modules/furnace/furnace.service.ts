import furnaceRepo from "./furnace.repo";
import { IFurnace } from "./furnace.type";




const get = async () => {
    try {
        return await furnaceRepo.get();
    }
    catch (e) {
        throw e
    }
}

const create = async (furnace: IFurnace) => {
    try {
        return await furnaceRepo.create(furnace);
    }
    catch (e) {
        throw e
    }
}

const update = async (updated: Object) => {
    try {
        return await furnaceRepo.update(updated);
    }
    catch (e) {
        throw e
    }
}

const deleted = async (id: string) => {
    try {
        return await furnaceRepo.deleted(id);
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