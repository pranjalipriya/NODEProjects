import { Router } from "express";
import { permit } from "../../utility/authorize";
import { ResponseHandler as Response } from "../../utility/response-handler";
import { ROLES } from "../roles/roles.constants";
import { FURNACE_MESSAGE } from "./furnace.constants";
import furnaceService from "./furnace.service";
import { furnaceValidator } from "./furnace.validator";

export const FurnaceRouter=Router();

FurnaceRouter.get("/", permit([ROLES.admin, ROLES.clerk]), async (req, res, next) => {
    try {
        const result = await furnaceService.get();
        res.send(new Response(result));
    }
    catch (e) {
        next(e);
    }
});

FurnaceRouter.post("/",furnaceValidator, permit([ROLES.admin]), async (req:any, res:any, next:any) => {
    try {
        const customer = req.body;
        const result = await furnaceService.create(customer)
        res.send(FURNACE_MESSAGE.FURNACE_CREATED);
    }
    catch (e) {
        next(e)
    }
})
FurnaceRouter.put("/", permit([ROLES.admin]), async (req, res, next) => {
    try {
        const customer = req.body;
        const result = await furnaceService.update(customer);
        res.send(FURNACE_MESSAGE.FURNACE_UPDATED);
    }
    catch (e) {
        next(e)
    }
})

FurnaceRouter.delete("/:id", permit([ROLES.admin]), async (req, res, next) => {
    try {
        const { id } = req.params;
        await furnaceService.deleted(id)
        res.send(FURNACE_MESSAGE.FURNACE_DELETED)
    }
    catch (e) {
        next(e)
    }
})