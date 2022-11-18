import { Router } from "express";
import { permit } from "../../utility/authorize";
import { ResponseHandler as Response } from "../../utility/response-handler";
import { ROLES } from "../roles/roles.constants";
import { HSN_MESSAGE } from "./hsn.constants";
import hsnService from "./hsn.service";

export const HSNRouter=Router();

HSNRouter.get("/", permit([ROLES.admin, ROLES.clerk]), async (req, res, next) => {
    try {
        const result = await hsnService.getHsn();
        res.send(new Response(result));
    }
    catch (e) {
        next(e);
    }
});


HSNRouter.post("/", permit([ROLES.admin]), async (req, res, next) => {
    try {
        const hsn = req.body;
        const result = await hsnService.create(hsn)
        res.send(HSN_MESSAGE.HSN_CREATED);
    }
    catch (e) {
        next(e)
    }
})

HSNRouter.put("/", permit([ROLES.admin]), async (req, res, next) => {
    try {
        const hsn = req.body;
        const result = await hsnService.update(hsn);
        res.send(HSN_MESSAGE.HSN_UPDATED);
    }
    catch (e) {
        next(e)
    }
})


HSNRouter.delete("/:id", permit([ROLES.admin]), async (req, res, next) => {
    try {
        const { id } = req.params;
        await hsnService.deleted(id)
        res.send(HSN_MESSAGE.HSN_DELETED)
    }
    catch (e) {
        next(e)
    }
})