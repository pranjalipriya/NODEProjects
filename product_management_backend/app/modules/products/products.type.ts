import { IMaterial } from "../material/material.type";


export interface IProduct{
    productName:string;
    productStatus: string;
    productSpecification: IMaterial;
    productLength: Number;
    productWidth: Number;
    productHeight: Number;
    productLocation: String;
    pricePerProduct:Number;
}
