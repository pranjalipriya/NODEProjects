import { body } from "express-validator";
import { validate } from "../../utility/validate";


export const orderValidator = [
    body('orderNumber').isString().notEmpty().withMessage("Order Number is required"),
    body('orderStatus').isString().notEmpty().withMessage("Order status is required"),
    body('approvalStatus').isString().notEmpty().withMessage("approval status is required"),
    validate
]