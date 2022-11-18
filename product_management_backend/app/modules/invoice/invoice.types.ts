import { IOrder } from "../order/order.type";
import { IPayment } from "../payment/payment.types";


export interface IInvoice{
    order: IOrder;
    payment: IPayment;
}