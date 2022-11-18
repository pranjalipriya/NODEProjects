import { Router } from "express";
import { NextFunction, Request, Response as EResponse } from 'express';
import { ResponseHandler } from "../../utility/response-handler";
import { GIFT_MESSAGE } from "./gift.constants";
import giftService from "./gift.service";


export const GiftRouter=Router();

GiftRouter.get("/", async(req, res, next) => {
    try {
        const result = await giftService.getGifts();
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(GIFT_MESSAGE.NOT_FOUND);
    }
});

// GiftRouter.post("/", async(req, res, next) => {
//     try {
//         const result = await giftService.getGifts();
//         res.send(new ResponseHandler(result));
//     } catch (e) {
//         next(GIFT_MESSAGE.NOT_FOUND);
//     }
// });