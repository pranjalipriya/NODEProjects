import orderRepo from "./order.repo";
import { IOrder } from "./order.type";


const get = async () => {
    try {
        return await orderRepo.get();
    }
    catch (e) {
        throw e
    }
}

const create = async (order: IOrder) => {
    try {
        return await orderRepo.create(order);
    }
    catch (e) {
        throw e
    }
}

const update = async (updated: Object) => {
    try {
        return await orderRepo.update(updated);
    } catch (e) {
        throw e
    }
}

const deleted = async (id: string) => {
    try {
        return await orderRepo.deleted(id);
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