import { body } from "express-validator";
import { validate } from "../../utility/validate";

export const usersValidator = [
    body('username').isString().notEmpty().withMessage("building is required"),
    body('password').isString().notEmpty().withMessage("shelf is required"),
    body('email').isEmail().withMessage('required email'),
    body('role').isString().notEmpty().withMessage("status is required"),
    validate
]