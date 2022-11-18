"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPasswordValidator = exports.forgotPasswordValidator = exports.registerValidator = void 0;
const express_validator_1 = require("express-validator");
const validate_1 = require("../../utility/validate");
exports.registerValidator = [
    (0, express_validator_1.body)('email').isEmail().withMessage('required email'),
    validate_1.validate
];
exports.forgotPasswordValidator = [
    (0, express_validator_1.body)('email').isEmail().withMessage('required email'),
    validate_1.validate
];
exports.resetPasswordValidator = [
    (0, express_validator_1.body)('newPassword').isString().notEmpty().withMessage("New password is required"),
    (0, express_validator_1.body)('confirmNewPassword').isString().notEmpty().withMessage("Confirm New Password is required"),
    validate_1.validate
];
//# sourceMappingURL=auth.validation.js.map