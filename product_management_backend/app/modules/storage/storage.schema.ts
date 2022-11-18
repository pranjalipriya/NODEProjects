import { Document, model } from 'mongoose';
import { BaseSchema } from "../../utility/base.schema";
import { IStorage } from './storage.type';

export const storageSchema = new BaseSchema({
    building: {
        type: String,
        unique: true
    },
    shelf: {
        type: String,
        unique: true
    },
    row: {
        type: String,
        unique: true
    },
    status: {
        type: String,
        required: true
    }
});
type IStorageDocument = Document & IStorage;
export const StorageModel = model<IStorageDocument>("Storage", storageSchema);

export default StorageModel;