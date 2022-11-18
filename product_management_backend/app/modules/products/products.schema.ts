import { Document , model } from 'mongoose';
import { BaseSchema } from "../../utility/base.schema";
import { MaterialSchema } from '../material/material.schema';
import { storageSchema } from '../storage/storage.schema';
import { IProduct } from './products.type';


export const ProductSchema = new BaseSchema ({
    productName: {
        type: String,
        required: true
    },
    productStatus: {
        type: String,
        default:"pending",
        required: true
    },
    productSpecification:{
        type: MaterialSchema,
        required: true
    },
    productLength: {
        type: Number,
        required: true
    },
    productWidth: {
        type: Number,
        required: true
    },
    productHeight: {
        type: Number,
        required: true
    },
    productLocation: {
        type: String,
        default: "pending",
        required: true
    },
    pricePerProduct: {
        type: Number,
        Number:0,
        required: true
    },
});
export type IProductDocument = Document & IProduct;
