import { Document , model } from 'mongoose';
import { BaseSchema } from "../../utility/base.schema";
import { HSNSchema } from '../HSN/hsn.schema';
import { ProductSchema } from '../products/products.schema';
import { IOrder } from './order.type';

export const OrderSchema = new BaseSchema ({
    products: {
        type: [ProductSchema],
        default:{},
        required: true
    },
    orderNumber: {
        type: String,
        required: true
    },
    orderStatus: {
        type: String,
        default:"pending",
        required: true
    },
    approvalStatus:{
        type: String,
        default:"pending",
        required: true
    }
});
type IOrderDocument = Document & IOrder;
export const OrderModel = model<IOrderDocument>("Order" , OrderSchema);

export default OrderModel;