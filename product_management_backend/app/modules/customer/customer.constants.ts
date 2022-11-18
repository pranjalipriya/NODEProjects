import { CustomerResponse } from "./customer.type";


export const CUSTOMER_MESSAGE = {
    NOT_FOUND: new CustomerResponse(404, "CUSTOMER NOT FOUND"),
    CUSTOMER_UPDATED: new CustomerResponse(200, "CUSTOMER UPDATED"),
    CUSTOMER_CREATED: new CustomerResponse(201, "CUSTOMER CREATED"),
    CUSTOMER_DELETED: new CustomerResponse(200, "CUSTOMER DELETED")
}
