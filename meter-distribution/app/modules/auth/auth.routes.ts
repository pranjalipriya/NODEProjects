import { Router } from "express";
import { Request, Response, NextFunction } from 'express';
import { permit } from "../../utility/authorize";
import { ResponseHandler } from "../../utility/response-handler";
import { ROLES } from "../roles/roles.constants";
import authService from "./auth.service";
import { forgotPasswordValidator, loginValidator, registerValidator, resetPasswordValidator } from "./auth.validation";

export const AuthRouter=Router();

AuthRouter.post("/login",loginValidator, async(req:Request,res:Response,next:NextFunction)=>{
  try{const body=req.body;
  const result=await authService.login(body);
  res.send(new ResponseHandler(result));}
  catch(e)
  {
    next(e)
  }
})



AuthRouter.post("/register",registerValidator, permit([ROLES.admin]),async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await authService.register(req.body);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})

AuthRouter.post("/change-password",resetPasswordValidator, async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await authService.changePassword(req.body);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})


AuthRouter.post("/forgot-password",forgotPasswordValidator, async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {email}=req.body;
        const result = await authService.forgotPassword(email);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})

AuthRouter.post("/reset/:hashid",resetPasswordValidator, async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {hashid}=req.params;
        const {newPassword,confirmNewPassword}=req.body;
        const result = await authService.resetPassword(hashid,newPassword,confirmNewPassword);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})


