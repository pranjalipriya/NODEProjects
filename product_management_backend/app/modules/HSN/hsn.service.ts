import hsnRepo from "./hsn.repo";
import { IHSN } from "./hsn.type";


const getHsn = async () => {
    try {
        return await hsnRepo.getHsn();
    } catch (e) {
        throw e
    }
}

const create = async (hsn: IHSN) => {
    try {
        return await hsnRepo.create(hsn);
    } catch (e) {
        throw e
    }
}

const update = async (updated: Object) => {
    try {
        return await hsnRepo.update(updated);
    } catch (e) {
        throw e
    }
}
const deleted = async (id: string) => {
    try { return await hsnRepo.deleted(id); }
    catch (e) {
        throw e
    }
}

export default {
    getHsn,
    create,
    update,
    deleted
}