import { body } from "express-validator";
import { validate } from "../../utility/validate";

export const materialValidator = [
    body('material').isString().notEmpty().withMessage("material is required"),
    body('unit').isString().notEmpty().withMessage("unit is required"),
    validate
]