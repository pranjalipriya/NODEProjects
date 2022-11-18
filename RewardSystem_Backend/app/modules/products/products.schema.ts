import { Schema, model } from 'mongoose';
import { IProduct } from './products.type';


 const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    pointsPerSale:{
        type:Number,
        required:true
    }
});

const ProductModel  = model <IProduct> ("Product", productSchema);

export default ProductModel;