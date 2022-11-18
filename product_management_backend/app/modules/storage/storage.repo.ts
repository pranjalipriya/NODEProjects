import StorageModel from "./storage.schema";
import { IStorage } from "./storage.type";



const get = () => StorageModel.find({ isDeleted: false });

const create = (storage: IStorage) => StorageModel.insertMany({ ...storage });

const update = (updated: any) => StorageModel.updateOne({ _id: updated.id }, { $set: { ...updated } });

const deleted = (id: string) => StorageModel.updateOne({ _id: id }, { $set: { isDeleted: true } })

export default {
    get,
    create,
    update,
    deleted
}