import { Router } from "express";
import { permit } from "../../utility/authorize";
import { ROLES } from "../roles/roles.constants";
import customerService from "./customer.service";
import { ResponseHandler as Responses } from "../../utility/response-handler";
import { CUSTOMER_MESSAGE } from "./customer.constants";
import { customerValidator } from "./customer.validator";


export const CustomerRouter=Router();

CustomerRouter.get("/:pagenumber/:limit", permit([ROLES.admin, ROLES.clerk]), async (req, res, next) => {
    try {
        const filterParameter=req.body;
        const pagenumber=parseInt(req.params.pagenumber);
        const limit=parseInt(req.params.limit);
        const result = await customerService.get(pagenumber,limit,filterParameter);
        res.send(new Responses(result));
    }
    catch (e) {
        next(e);
    }
});

CustomerRouter.post("/",customerValidator, permit([ROLES.admin]), async (req:any, res:any, next:any) => {
    try {
        const customer = req.body;
        const result = await customerService.create(customer)
        res.send(CUSTOMER_MESSAGE.CUSTOMER_CREATED);
    }
    catch (e) {
        next(e)
    }
})
CustomerRouter.put("/", permit([ROLES.admin]), async (req, res, next) => {
    try {
        const customer = req.body;
        const result = await customerService.update(customer);
        res.send(CUSTOMER_MESSAGE.CUSTOMER_UPDATED);
    }
    catch (e) {
        next(e)
    }
})

CustomerRouter.delete("/:id", permit([ROLES.admin]), async (req, res, next) => {
    try {
        const { id } = req.params;
        await customerService.deleted(id)
        res.send(CUSTOMER_MESSAGE.CUSTOMER_DELETED)
    }
    catch (e) {
        next(e)
    }
})