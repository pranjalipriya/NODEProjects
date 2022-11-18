import { Router } from "express";
import { NextFunction, Request, Response as EResponse } from 'express';
import { permit } from "../../utility/authorize";
import { ResponseHandler as Response } from "../../utility/response-handler";
import { checkDuplicateSubject } from "../../utility/validate";
import { ROLES } from "../users/user.constants";
import { SCHOOL_MESSAGE } from "./school.constants";
import schoolSchema from "./school.schema";
import schoolService from "./school.service";
import { schoolValidator } from "./school.validations";
import { IClass, ISchool, ISubject } from "./school.types";



const SchoolRouter = Router();

SchoolRouter.post("/subject", permit([ROLES.ADMIN]),checkDuplicateSubject, (req: Request, res: EResponse, next: NextFunction) => {
    try {
        schoolService.createsubject(req.body as ISubject);
        res.send(new Response(SCHOOL_MESSAGE.SUBJECT_CREATED));
    } catch (e) {
        next(e);
    }
});
SchoolRouter.get("/subjects", permit([ROLES.ADMIN]), (req, res, next) => {
    try {
        const result = schoolService.getAllSubjects();
        res.send(new Response(result))
        
    } catch (e) {
        next(e);
    }
});

SchoolRouter.delete("/subject/:name", (req, res, next) => {
    const { name} = req.params;
   try{
    const result = schoolService.deleteSubject(name);
    // has to be in service
        return res.status(404).send(new Response(result));
    }
    catch(e){
    next(e);
    }
});



//School

SchoolRouter.post("/", schoolValidator , (req: Request, res: EResponse, next: NextFunction) => {
    try {
        schoolService.create(req.body as ISchool);
        res.send(new Response(SCHOOL_MESSAGE.SCHOOL_CREATED));
    } catch (e) {
        next(e);
    }
});

SchoolRouter.get("/", (req, res, next) => {
    try {
        const result = schoolService.getAll();
        res.send(new Response(result));
    } catch (e) {
        next(e);
    }
});

SchoolRouter.get("/:id", (req: Request, res: EResponse, next: NextFunction) => {
    try {
        const result = schoolService.getOne(req.params.id);
        res.send(new Response(result));
    } catch (e) {
        next(e);
    }
})

SchoolRouter.put("/school-subject", (req, res, next) => {
    try{
        const updatedSchoolSubject = req.body as ISchool;
        const didUpdate = schoolSchema.updateSchoolSubject(updatedSchoolSubject);
        if (didUpdate) {
        return res.send(new Response(SCHOOL_MESSAGE.SUBJECT_ASSIGNED));
    }}
    catch(e){
    next(SCHOOL_MESSAGE.NOT_FOUND);
    }
});

// SchoolRouter.post("/class", (req, res, next) => {
//     try{
//         const classdata = req.body as IClass ;
//         const didUpdate = schoolSchema.updateClass(classdata);
//         if (didUpdate) {
//         return res.send(new Response(SCHOOL_MESSAGE.SUBJECT_CREATED));
//     }}
//     catch(e){
//     next(SCHOOL_MESSAGE.NOT_FOUND);
//     }
// });

SchoolRouter.delete("/:id", (req, res, next) => {
    const { id } = req.params;

    const didDelete = schoolSchema.deleteOne(id);

    if (didDelete) {
        return res.status(404).send(new Response(SCHOOL_MESSAGE.SCHOOL_DELETED));
    }

    next(SCHOOL_MESSAGE.NOT_FOUND);
});

export default SchoolRouter;





