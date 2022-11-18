import { Router } from "express";
import { permit } from "../../utility/authorize";
import { ResponseHandler } from "../../utility/response-handler";
import { ROLES, USER_MESSAGE } from "./user.constants";
import userService from "./user.service";
import { IAssigned } from "./user.types";

export const UserRouter = Router();

UserRouter.get("/",permit([ROLES.ADMIN]), (req,res,next)=>{
    try{
        const workers=userService.getAllWorkers();
        res.status(200).send(new ResponseHandler(workers));
    }catch (error){
        next(error);
    }
})

UserRouter.get('/pendingRequest',permit([ROLES.ADMIN]), (req, res, next) => {
    try {
        const pendingRequest = userService.getAllPendingRequest();
        res.status(200).send(new ResponseHandler(pendingRequest));
    } catch (error) {
        next(error);
    }
});

UserRouter.post('/assignSchoolToWorker' , permit([ROLES.ADMIN]) ,(req, res, next)=>{
    try{
           const {id,schools}=req.body as IAssigned;
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

