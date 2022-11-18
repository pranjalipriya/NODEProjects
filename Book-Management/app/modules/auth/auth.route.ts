import  {Request, Response, NextFunction, Router} from 'express';
import { permit } from '../../utility/authorize';
import { ResponseHandler } from "../../utility/response-handler";
import { ROLES, USER_MESSAGE } from '../user/user.constants';
import userService from '../user/user.service';
import { IStatus } from '../user/user.types';
import authService from './auth.service';
import { LoginValidator, SignupValidator } from './auth.validations';

export const AuthRouter = Router();

AuthRouter.post("/login",LoginValidator, (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = authService.login(req.body);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})

AuthRouter.post("/signup", SignupValidator, (req: Request, res: Response, next: NextFunction) => {
    try {
        authService.signup(req.body);
        res.send(new ResponseHandler("Signup Successful"));
    } catch (e) {
        next(e);
    }
})

// AuthRouter.get("/",permit([ROLES.ADMIN]), (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const result = authService.get();
//         res.send(new ResponseHandler(result));
//     } catch (e) {
//         next(e);
//     }
// })

AuthRouter.put('/',permit([ROLES.ADMIN]),(req,res,next)=>{
    try{
        const upadtedStatus=userService.updateStatus(req.body as IStatus)
        if(upadtedStatus){
            return res.send(new ResponseHandler(USER_MESSAGE.STATUS_UPDATED))
        }
        return res.send(new ResponseHandler(USER_MESSAGE.NOT_FOUND))
        
    }catch(error) {
        next(error);
    }
})
