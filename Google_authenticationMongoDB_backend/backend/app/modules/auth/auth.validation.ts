import { body } from "express-validator";
import { validate } from "../../utility/validate";


export const loginValidator = [
    body('email').isEmail().withMessage('required email'),
    body('password').isString().notEmpty().withMessage("password is required"),
    validate
]

export const registerValidator = [
    body('email').isEmail().withMessage('required email'),
    validate
]

export const forgotPasswordValidator = [
    body('email').isEmail().withMessage('required email'),
    validate
]

export const resetPasswordValidator = [
    body('newPassword').isString().notEmpty().withMessage("New password is required"),
    body('confirmNewPassword').isString().notEmpty().withMessage("Confirm New Password is required"),
    validate
]

