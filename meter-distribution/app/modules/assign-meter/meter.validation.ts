import { body } from "express-validator";
import { validate } from "../../utility/validate";


export const meterValidator = [
    body('customerId').isNumeric().notEmpty().withMessage("customer  is required"),
    body('metertypeId').isNumeric().notEmpty().withMessage("assign a meter type is required"),
    body('id').isNumeric().notEmpty().withMessage("Please give this meter an id is required"),
    validate
]

