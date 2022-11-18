import { OrderResponse } from "./order.type";



export const ORDER_MESSAGE = {
    NOT_FOUND: new OrderResponse(404, "ORDER NOT FOUND"),
    ORDER_UPDATED: new OrderResponse(200, "ORDER UPDATED"),
    ORDER_CREATED: new OrderResponse(201, "ORDER CREATED"),
    ORDER_DELETED: new OrderResponse(200, "ORDER DELETED")
}
