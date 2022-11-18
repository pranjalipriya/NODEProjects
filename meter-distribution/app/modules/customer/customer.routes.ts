import { Router } from "express";
import { permit } from "../../utility/authorize";
import { ROLES } from "../roles/roles.constants";
import customerService from "./customer.service";
import { ResponseHandler, ResponseHandler as Responses } from "../../utility/response-handler";
import { customerValidator } from "./customer.validation";
import { CUSTOMER_MESSAGE } from "./customer.constants";



export const CustomerRouter=Router();

CustomerRouter.get("/:pagenumber/:pagelimit/:filterParameter", permit([ROLES.admin, ROLES.clerk]), async (req, res, next) => {
    try {
        const filterParameter=req.params.filterParameter;
        const pagenumber=parseInt(req.params.pagenumber);
        const pagelimit=parseInt(req.params.pagelimit);
        const result = await customerService.get(pagenumber,pagelimit,filterParameter);
        res.send(result);
    }
    catch (e) {
        next(e);
    }
});

CustomerRouter.get("/:pagenumber/:pagelimit", permit([ROLES.admin, ROLES.clerk]), async (req, res, next) => {
    try {
        const filterParameter=req.query;
        const pagenumber=parseInt(req.params.pagenumber);
        const pagelimit=parseInt(req.params.pagelimit);
        const result = await customerService.getpage(pagenumber,pagelimit,filterParameter);
        res.send(result);
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
CustomerRouter.put("/:id", permit([ROLES.admin]), async (req, res, next) => {
    try {
        const customer = req.body;
        const {id}=req.params;
        const result = await customerService.update(customer,id);
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

CustomerRouter.get("/", permit([ROLES.admin]), async (req, res, next) => {
    try {
        const result = await customerService.getAll();
        res.send(new ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
});

CustomerRouter.get("/:userid", permit([ROLES.admin,ROLES.agent]), async (req, res, next) => {
    try {
        const {userid}=req.params;
        const result = await customerService.getbyid(userid);
        res.send(new ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
});

CustomerRouter.get("/sort", permit([ROLES.admin, ROLES.clerk]), async (req, res, next) => {
    try {
        const pagenumber=parseInt(req.params.pagenumber);
        const pagelimit=parseInt(req.params.pagelimit);
        const result = await customerService.sort(pagenumber,pagelimit);
        res.send(result);
    }
    catch (e) {
        next(e);
    }
});

