import { NextFunction, Request, Response, Router } from "express";
import { permit } from "../../utility/authorize";
import { ResponseHandler } from "../../utility/response-handler";
import { ROLES } from "../user/user.constants";
import schoolService from "./school.service";
import { IAddschoolObject, IUpdateSchool } from "./school.type";
import { SCHOOL_MESSAGE} from "./school.constants";
import { SchoolValidator } from "./school.validation";

export const SchoolRouter = Router();

SchoolRouter.get('/getSchoolDatabase' , permit([ROLES.ADMIN , ROLES.WORKER]) , (req:Request , res : Response , next: NextFunction)=>{
try{
    const schoolDatabase = schoolService.getSchool();
    res.send(new ResponseHandler(schoolDatabase));
}
catch(e){
    next(e)
}
})

SchoolRouter.post('/addSchool',SchoolValidator, permit([ROLES.ADMIN]) , (req:Request , res : Response , next : NextFunction)=>{
    try{
        const didCreateSchool = schoolService.addSchool(req.body as IAddschoolObject);
        if(didCreateSchool){
            res.send(new ResponseHandler(SCHOOL_MESSAGE.SCHOOL_ADDED));
        }
        }
        catch(e){
            next(e);
        }
})

SchoolRouter.get('/:id' , permit([ROLES.ADMIN]) , (req:Request , res : Response , next : NextFunction)=>{
    try{
        const { id } = req.params;

        const schoolDetails = schoolService.getSchoolById(id);
        if(schoolDetails){
            res.send(new ResponseHandler(schoolDetails));
        }
        }
        catch(e){
            next(e);
        }
})

SchoolRouter.delete('/:id' , permit([ROLES.ADMIN]) , (req:Request , res : Response , next : NextFunction)=>{
    try{
        const { id } = req.params;

        const schoolDetails = schoolService.deleteSchoolById(id);
        if(schoolDetails){
            res.send(new ResponseHandler(SCHOOL_MESSAGE.SCHOOL_DELETED));
        }
        }
        catch(e){
            next(e);
        }
})

SchoolRouter.put('/updateClass' , permit([ROLES.ADMIN]) , (req:Request , res : Response , next : NextFunction)=>{
    try{
           const result=schoolService.updateSchool(req.body as IUpdateSchool);
           if(result)
           {
           return res.send(new ResponseHandler(SCHOOL_MESSAGE.SCHOOL_UPDATED))
           }
           throw SCHOOL_MESSAGE.NOT_FOUND
        }
        catch(e){
            next(e);
        }
})


