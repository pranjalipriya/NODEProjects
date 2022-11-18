import { Router } from "express";
import { permit } from "../../utility/authorize";
import { ResponseHandler } from "../../utility/response-handler";
import { ROLES } from "../roles/roles.constants";
import { METER_MESSAGE } from "./meter.constant";
import meterService from "./meter.service";
import { meterValidator } from "./meter.validation";



export const MeterRouter=Router();

MeterRouter.get("/:pagenumber/:pagelimit", permit([ROLES.admin, ROLES.clerk]), async (req, res, next) => {
    try {
        const searchParameter=req.query;
        const pagenumber=parseInt(req.params.pagenumber);
        const pagelimit=parseInt(req.params.pagelimit);
        const result = await meterService.get(pagenumber,pagelimit,searchParameter);
        res.send(result);
    }
    catch (e) {
        next(e);
    }
});

MeterRouter.post("/",meterValidator, permit([ROLES.admin]), async (req:any, res:any, next:any) => {
    try {
        const customer = req.body;
        const result = await meterService.create(customer)
        res.send(METER_MESSAGE.METER_CREATED);
    }
    catch (e) {
        next(e)
    }
})
MeterRouter.put("/:id", permit([ROLES.admin]), async (req, res, next) => {
    try {
        const meter = req.body;
        const {id}=req.params;
        const result = await meterService.update(meter,id);

        // needs to come from service
        res.send(METER_MESSAGE.METER_UPDATED);
    }
    catch (e) {
        next(e)
    }
})

MeterRouter.delete("/:id", permit([ROLES.admin]), async (req, res, next) => {
    try {
        const { id } = req.params;
        await meterService.deleted(id)
        res.send(METER_MESSAGE.METER_DELETED)
    }
    catch (e) {
        next(e)
    }
})

MeterRouter.get("/:id", permit([ROLES.admin,ROLES.agent]), async (req, res, next) => {
    try {
        const {id}=req.params;
        const result = await meterService.getbyid(id);
        res.send(new ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
});