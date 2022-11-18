import ProductModel from "./products.schema";

const get=(name:string)=>ProductModel.findOne({name:name});

export default{
    get
}