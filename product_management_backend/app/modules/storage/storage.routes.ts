import { Router } from "express";
import { permit } from "../../utility/authorize";
import { ResponseHandler as Response } from "../../utility/response-handler";
import { ROLES } from "../roles/roles.constants";
import { STORAGE_MESSAGE } from "./storage.constants";
import storageService from "./storage.service";



 export const StorageRouter=Router();

StorageRouter.get("/", permit([ROLES.admin, ROLES.clerk]), async (req, res, next) => {
    try {
        const result = await storageService.get();
        res.send(new Response(result));
    }
    catch (e) {
        next(e);
    }
});

StorageRouter.post("/", permit([ROLES.admin]), async (req, res, next) => {
    try {
        const storage = req.body;
        const result = await storageService.create(storage)
        res.send(STORAGE_MESSAGE.STORAGE_CREATED);
    }
    catch (e) {
        next(e)
    }
})
StorageRouter.put("/", permit([ROLES.admin]), async (req, res, next) => {
    try {
        const storage = req.body;
        const result = await storageService.update(storage);
        res.send(STORAGE_MESSAGE.STORAGE_UPDATED);
    }
    catch (e) {
        next(e)
    }
})
StorageRouter.delete("/:id", permit([ROLES.admin]), async (req, res, next) => {
    try {
        const { id } = req.params;
        await storageService.deleted(id)
        res.send(STORAGE_MESSAGE.STORAGE_DELETED)
    }
    catch (e) {
        next(e)
    }
})