import { body } from "express-validator";
import { validate } from "../../utility/validate";

export const registerValidator = [
    body('email').isEmail().withMessage('required email'),
    validate
]
