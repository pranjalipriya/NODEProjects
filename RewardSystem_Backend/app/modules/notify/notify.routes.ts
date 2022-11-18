import { Router } from "express";
import { NextFunction, Request, Response as EResponse } from 'express';
import { ResponseHandler as Response } from "../../utility/response-handler";
import { NOTIFY_MESSAGE } from "./notify.constants";
import notifyService from "./notify.service";
import { INotify } from "./notify.type";


export const NotifyRouter = Router();
NotifyRouter.post("/",  async(req: Request, res: EResponse, next: NextFunction) => {
    try {
        await notifyService.create(req.body as INotify);
        res.send(new Response(NOTIFY_MESSAGE.SEND));
    } catch (e) {
        next(e);
    }
});

NotifyRouter.get("/:name", async(req: Request, res: EResponse, next: NextFunction) => {
    try {
        
        const result = await notifyService.getOne(req.params.name);
        res.send(new Response(result));
    } catch (e) {
        next(NOTIFY_MESSAGE.NOT_FOUND);
    }
});