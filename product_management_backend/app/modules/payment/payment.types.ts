
import { IProduct } from "../products/products.type";

export interface IPayment{
    items: IProduct[];
    Shipmentcharges:Number;
    paymentHistory: Number[];
    paymentStatus: string;
}