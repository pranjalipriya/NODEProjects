import { body } from "express-validator";
import { validate } from "../../utility/validate";


export const hsnValidator = [
    body('HSNcode').isString().notEmpty().withMessage("HSN code is required"),
    body('itemName').isString().notEmpty().withMessage("item name is required"),
    body('CGST').isString().notEmpty().withMessage("CGST value is required"),
    body('IGST').isString().notEmpty().withMessage("IGST value is required"),
    body('SGST').isString().notEmpty().withMessage("SGST value is required"),
    validate
]