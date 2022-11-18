import { body } from "express-validator";
import { validate } from "../../utility/validate";

export const storageValidator = [
    body('building').isString().notEmpty().withMessage("building is required"),
    body('shelf').isString().notEmpty().withMessage("shelf is required"),
    body('row').isString().notEmpty().withMessage("row is required"),
    body('status').isString().notEmpty().withMessage("status is required"),
    validate
]