import { body } from "express-validator";
import { validate } from "../../utility/validate";


export const SchoolValidator= [
    body('name').isString().notEmpty().withMessage("name is required"),
    body('academicYear').isString().notEmpty().withMessage("academicYear is required"),
    body("classFrom").isString().notEmpty().withMessage("class is required"),
    body("classTo").isString().notEmpty().withMessage("class is required"),
    body("subject").isArray().notEmpty().withMessage("subjects are required"),
    validate
]