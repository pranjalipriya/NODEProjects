import { Router } from "express";
import { permit } from "../../utility/authorize";
import { ResponseHandler } from "../../utility/response-handler";
import { ROLES } from "../roles/roles.constants";
import { Meter_MESSAGE } from "./meter-types.constants";
import meterTypesService from "./meter-types.service";
import { metertypeValidator } from "./meter-types.validations";


export const MeterTypeRouter=Router();

MeterTypeRouter.get("/:pagenumber/:pagelimit", permit([ROLES.admin, ROLES.clerk]), async (req, res, next) => {
    try {
        const filterParameter=req.query;
        const pagenumber=parseInt(req.params.pagenumber);
        const pagelimit=parseInt(req.params.pagelimit);
        const result = await meterTypesService.get(pagenumber,pagelimit,filterParameter);
        res.send(result);
    }
    catch (e) {
        next(e);
    }
});

MeterTypeRouter.post("/",metertypeValidator, permit([ROLES.admin]), async (req:any, res:any, next:any) => {
    try {
        const meter = req.body;
        const result = await meterTypesService.create(meter)
        res.send(Meter_MESSAGE.METER_TYPE_CREATED);
    }
    catch (e) {
        next(e)
    }
})
MeterTypeRouter.put("/:id", permit([ROLES.admin]), async (req, res, next) => {
    try {
        const customer = req.body;
        const {id}=req.params;
        const result = await meterTypesService.update(customer,id);
        res.send(Meter_MESSAGE.METER_TYPE_UPDATED);
    }
    catch (e) {
        next(e)
    }
})

MeterTypeRouter.delete("/:id", permit([ROLES.admin]), async (req, res, next) => {
    try {
        const { id } = req.params;
        await meterTypesService.deleted(id)
        res.send(Meter_MESSAGE.METER_TYPE_DELETED)
    }
    catch (e) {
        next(e)
    }
})


MeterTypeRouter.get("/", permit([ROLES.admin]), async (req, res, next) => {
    try {
        const result = await meterTypesService.getAll();
        res.send(new ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
});

MeterTypeRouter.get("/:id", permit([ROLES.admin,ROLES.agent]), async (req, res, next) => {
    try {
        const {id}=req.params;
        const result = await meterTypesService.getbyid(id);
        res.send(new ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
});