import {validate,checkDuplicateSchool } from "../../utility/validate";
import { body } from "express-validator";


export const schoolValidator=[
    body("name").notEmpty().isString(),
    body("subject").notEmpty(),
    checkDuplicateSchool,
    validate
]