import { Router } from "express";
import { Request, Response, NextFunction } from 'express';
import { userProfile } from "../../utility/googleAuth";
import { googleAuthentication, googleAuthorization } from "../../utility/passport";
import { ResponseHandler } from "../../utility/response-handler";
import authService from "./auth.service";
import { forgotPasswordValidator, loginValidator, registerValidator, resetPasswordValidator } from "./auth.validation";

export const AuthRouter = Router();


AuthRouter.get("/google",googleAuthentication);
AuthRouter.get("/google/callback",googleAuthorization);
AuthRouter.get("/success",async(req,res,next)=>{
    try {
        res.send(userProfile)
    } catch (error) {
        next(error);
    }
})


AuthRouter.post("/login", loginValidator, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = req.body;
        const result = await authService.login(body);
        res.send(new ResponseHandler(result));
    }
    catch (e) {
        next(e)
    }
})



AuthRouter.post("/sign-up",registerValidator,async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await authService.register(req.body);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})

AuthRouter.post("/change-password", resetPasswordValidator, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await authService.changePassword(req.body);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})


AuthRouter.post("/forgot-password", forgotPasswordValidator, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email } = req.body;
        const result = await authService.forgotPassword(email);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})

AuthRouter.post("/reset/:hashid", resetPasswordValidator, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { hashid } = req.params;
        const { newPassword, confirmNewPassword } = req.body;
        const result = await authService.resetPassword(hashid, newPassword, confirmNewPassword);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})
