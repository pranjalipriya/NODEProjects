import { Document , model } from 'mongoose';
import { BaseSchema } from "../../utility/base.schema";
import { IMaterial } from './material.type';


export const MaterialSchema = new BaseSchema ({
    material: {
        type: String,
        required: true
    },
    unit: {
        type: String,
        required: true
    }
});
type IMaterialDocument = Document & IMaterial;
export const MaterialModel = model<IMaterialDocument>("Material" , MaterialSchema);

export default MaterialModel;