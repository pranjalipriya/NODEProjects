import { body } from "express-validator";
import { validate } from "../../utility/validate";


export const animeValidator = [
    body('name').isString().notEmpty().withMessage("name is required"),
    body('episodes').isNumeric().notEmpty().withMessage("episodes is required"),
    body('release').isString().notEmpty().withMessage("release month is required"),
    validate
 
]