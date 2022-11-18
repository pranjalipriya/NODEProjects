import { body } from "express-validator";
import { validate } from "../../utility/validate";


export const customerValidator = [
    body('name').isString().notEmpty().withMessage("name is required"),
    body('email').isEmail().withMessage('required email'),
    body('userId').isNumeric().withMessage('Please assign a agent'),
    validate
]