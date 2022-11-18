import { body } from "express-validator";
import { validate } from "../../utility/validate";

export const productValidator = [
    body('productName').isString().notEmpty().withMessage("Product Name is required"),
    body('productStatus').isString().notEmpty().withMessage("Product status is required"),
    body('productLength').isInt().notEmpty().withMessage("product length is required"),
    body('productWidth').isInt().notEmpty().withMessage("product width is required"),
    body('productHeight').isInt().notEmpty().withMessage("product height is required"),
    body('productLocation').isString().notEmpty().withMessage("product location is required"),
    body('pricePerProduct').isInt().notEmpty().withMessage("price per product is required"),
    validate
]