"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginValidator = exports.SignupValidator = void 0;
const express_validator_1 = require("express-validator");
const validate_1 = require("../../utility/validate");
exports.SignupValidator = [
    (0, express_validator_1.body)('username').isString().notEmpty().withMessage("username is required"),
    (0, express_validator_1.body)('password').isString().notEmpty().isLength({ min: 6 }).withMessage("password is invalid"),
    (0, express_validator_1.body)('email').isEmail().withMessage('required email'),
    validate_1.validate
];
exports.LoginValidator = [
    (0, express_validator_1.body)('username').isString().notEmpty().withMessage("username is required"),
    (0, express_validator_1.body)('password').isString().notEmpty().withMessage("password is invalid"),
    validate_1.validate
];
//# sourceMappingURL=auth.validations.js.map