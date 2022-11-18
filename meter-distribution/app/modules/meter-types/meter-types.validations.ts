import { body } from "express-validator";
import { validate } from "../../utility/validate";


export const metertypeValidator = [
    body('meterType').isString().notEmpty().withMessage("meter type is required"),
    body('faultTolerance').isString().notEmpty().withMessage("fault tolerance is required"),
    body('ratePerUnit').isString().notEmpty().withMessage("rate per unit is required"),
    body('readingRequired').isString().notEmpty().withMessage("reading required is required"),
    validate
]
