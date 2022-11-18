import { body } from "express-validator";
import { validate } from "../../utility/validate";

export const furnaceValidator = [
    body('name').isString().notEmpty().withMessage("name is required"),
    body('status').isString().notEmpty().withMessage("status is required"),
    validate
]