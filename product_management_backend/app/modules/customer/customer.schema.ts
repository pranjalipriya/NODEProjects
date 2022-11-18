import { Document , model } from 'mongoose';
import { BaseSchema } from "../../utility/base.schema";
import { ICustomer } from './customer.type';

export const customerSchema = new BaseSchema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    state:{
    type: String,
    required:true
    },
    isDeleted:{
        type:Boolean,
        default: false,
        required:true
    }
});
type ICustomerDocument = Document & ICustomer;
export const CustomerModel = model<ICustomerDocument>("Customer" , customerSchema);

export default CustomerModel;