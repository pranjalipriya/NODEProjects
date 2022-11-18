import { Request, Response, NextFunction, Router } from 'express';
import { ResponseHandler } from '../../utility/response-handler';
import authService from './auth.service';
import { registerValidator } from './auth.validator';

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

