import { ICustomer } from "../customer/customer.type";
import { IProduct } from "../products/products.type";

export interface IOrder{
    items: IProduct[];
    placedBy:ICustomer;
    orderNumber: string;
    orderStatus: string;
    approvalStatus: string;
}
export class OrderResponse {
    constructor(
        public statusCode: number,
        public message: string
    ) { }
}