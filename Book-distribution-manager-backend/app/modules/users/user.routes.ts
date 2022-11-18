import { Router } from "express";
import { permit } from "../../utility/authorize";
import { ResponseHandler } from "../../utility/response-handler";
import { ROLES } from "./user.constants";
import { Request, Response, NextFunction } from 'express';
import { USER_MESSAGE } from "./user.responses";
import userSchema from "./user.schema";
import { IAssignSchool, IUser } from "./user.types";
import userService from "./user.service";


export const UserRouter = Router();

UserRouter.get("/pending-requests", permit([ROLES.ADMIN]), (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = userService.getPendingRequests();
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})

UserRouter.get("/approved-requests", permit([ROLES.ADMIN]), (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = userService.getApprovedRequests();
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})
UserRouter.get("/rejected-requests", permit([ROLES.ADMIN]), (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = userService.getRejectedRequests();
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})

UserRouter.post('/assign-school-to-worker' , permit([ROLES.ADMIN]) ,(req, res, next)=>{
    try{
           const {id,schools}=req.body as IAssignSchool;
           const result=userService.assignSchool(id,schools);     
           if(result)
           {
           return res.send(new ResponseHandler(USER_MESSAGE.ASSIGNED))
           }  
           throw USER_MESSAGE.NOT_FOUND   
        }
        catch(e){
            next(e);
        }
})




