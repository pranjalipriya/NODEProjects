import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import schoolSchema from '../modules/school/school.schema';


export const checkDuplicateSubject = (req: Request, res: Response, next: NextFunction) => {
    for (let school of schoolSchema.subjects) {
        if (school.name === req.body.name) {
            return next({ message: "Duplicate subject can't be added" });
        }
    }
    next();
};

export const checkDuplicateSchool = (req: Request, res: Response, next: NextFunction) => {
    for (let school of schoolSchema.schools) {
        if (school.name === req.body.name) {
            return next({ message: "Duplicate school can't be added" });
        }
    }
    next();
};


export const validate = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        return next();
    }

    next(errors);
}