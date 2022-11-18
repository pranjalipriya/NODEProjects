import { Request, Response, NextFunction, Router } from 'express';
import { permit } from '../../utility/authorize';
import { ResponseHandler } from '../../utility/response-handler';
import { ROLES } from '../users/user.constants';
import { USER_MESSAGE } from '../users/user.responses';
import userSchema from '../users/user.schema';
import userService from '../users/user.service';
import { IUser } from '../users/user.types';
import authService from './auth.service';
import { registerValidator } from './auth.validations';

export const AuthRouter = Router();

AuthRouter.post("/login", (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = authService.login(req.body);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
});


AuthRouter.post("/register", registerValidator, (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = authService.register(req.body);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})


AuthRouter.put("/worker/change-status", permit([ROLES.ADMIN]), (req, res, next) => {
    const updatedStatus = req.body as IUser;

    const didUpdate = authService.updateStatus(updatedStatus);

    if (didUpdate) {
        return res.send(new ResponseHandler(USER_MESSAGE.USER_UPDATED));
    } 

    next(USER_MESSAGE.NOT_FOUND);
});


