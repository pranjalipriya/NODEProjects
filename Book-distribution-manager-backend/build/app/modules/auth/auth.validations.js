"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerValidator = void 0;
const express_validator_1 = require("express-validator");
const validate_1 = require("../../utility/validate");
exports.registerValidator = [
    (0, express_validator_1.body)('username').isString().notEmpty().withMessage("username is required"),
    (0, express_validator_1.body)('password').isString().notEmpty().isLength({ min: 6 }).withMessage("password is invalid"),
    // body('role').custom((value) => {
    //     // complete this function
    //     return true;
    // }),
    (0, express_validator_1.body)('email').isEmail().withMessage('required email'),
    validate_1.validate
];
//# sourceMappingURL=auth.validations.js.map