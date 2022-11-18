import { Router } from "express";
import { permit } from "../../utility/authorize";
import { ResponseHandler } from "../../utility/response-handler";
import { ROLES } from "../roles/roles.constants";
import { ORDER_MESSAGE } from "./order.constants";
import orderService from "./order.service";

export const OrderRouter=Router();
OrderRouter.get("/", permit([ROLES.admin, ROLES.clerk]), async (req, res, next) => {
    try {
        const result = await orderService.get();
        res.send(new ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
});

OrderRouter.post("/", permit([ROLES.admin, ROLES.clerk]), async (req, res, next) => {
    try {
        const order = req.body;
        const result = await orderService.create(order)
        res.send(ORDER_MESSAGE.ORDER_CREATED);
    }
    catch (e) {
        next(e)
    }
})
OrderRouter.put("/", permit([ROLES.admin, ROLES.clerk]), async (req, res, next) => {
    try {
        const order = req.body;
        const result = await orderService.update(order);
        res.send(ORDER_MESSAGE.ORDER_UPDATED);
    }
    catch (e) {
        next(e)
    }
})
OrderRouter.delete("/:id", permit([ROLES.admin]), async (req, res, next) => {
    try {
        const { id } = req.params;
        await orderService.deleted(id)
        res.send(ORDER_MESSAGE.ORDER_DELETED)
    }
    catch (e) {
        next(e)
    }
})