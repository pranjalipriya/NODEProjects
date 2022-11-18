import { body } from "express-validator";
import { validate } from "../../utility/validate";


export const readingValidator = [
    body('meterRating').isNumeric().notEmpty().withMessage("meter type is required"),
    validate
]
