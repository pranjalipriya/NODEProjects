import { Request, Response, NextFunction, Router } from 'express';
import { ResponseHandler } from '../../utility/response-handler';
import authService from './auth.service';
import { forgotPasswordValidator, registerValidator, resetPasswordValidator } from './auth.validator';

export const AuthRouter = Router();

AuthRouter.post("/login", async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await authService.login(req.body);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
});



AuthRouter.post("/register", registerValidator, async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await authService.register(req.body);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})

AuthRouter.post("/change-password", async(req: Request, res: Response, next: NextFunction) => {
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

