import { Document , model } from 'mongoose';
import { BaseSchema } from "../../utility/base.schema";
import { MaterialSchema } from '../material/material.schema';
import { IHSN } from './hsn.type';

export const HSNSchema = new BaseSchema ({
    HSNcode: {
        type: String,
        required: true
    },
    itemName: {
        type: String,
        required: true
    },
    itemSpecification: {
        type: MaterialSchema,
        default:{},
        required: true
    },
    CGST: {
        type: String,
        required: true
    },
    IGST:{
        type: String,
        required:true
    },
    SGST:{
        type:String,
        required:true
    }
});
type IHSNDocument = Document & IHSN;
export const HSNModel = model<IHSNDocument>("HSN" , HSNSchema);

export default HSNModel;