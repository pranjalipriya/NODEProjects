import { Router } from "express";
import { permit } from "../../utility/authorize";
import { ResponseHandler as Response } from "../../utility/response-handler";
import { ROLES } from "../roles/roles.constants";
import { MATERIAL_MESSAGE } from "./material.constants";
import materialService from "./material.service";

export const MaterialRouter=Router();

MaterialRouter.get("/", permit([ROLES.admin, ROLES.clerk]), async (req, res, next) => {
    try {
        const result = await materialService.get();
        res.send(new Response(result));
    }
    catch (e) {
        next(e);
    }
});

MaterialRouter.post("/", permit([ROLES.admin]), async (req, res, next) => {
    try {
        const material = req.body;
        const result = await materialService.create(material)
        res.send(MATERIAL_MESSAGE.MATERIAL_CREATED);
    }
    catch (e) {
        next(e)
    }
})
MaterialRouter.put("/", permit([ROLES.admin]), async (req, res, next) => {
    try {
        const material = req.body;
        const result = await materialService.update(material);
        res.send(MATERIAL_MESSAGE.MATERIAL_UPDATED);
    }
    catch (e) {
        next(e)
    }
})
MaterialRouter.delete("/:id", permit([ROLES.admin]), async (req, res, next) => {
    try {
        const { id } = req.params;
        await materialService.deleted(id)
        res.send(MATERIAL_MESSAGE.MATERIAL_DELETED)
    }
    catch (e) {
        next(e)
    }
})