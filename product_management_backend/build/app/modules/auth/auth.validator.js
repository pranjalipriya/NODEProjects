"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerValidator = void 0;
const express_validator_1 = require("express-validator");
const validate_1 = require("../../utility/validate");
exports.registerValidator = [
    (0, express_validator_1.body)('email').isEmail().withMessage('required email'),
    validate_1.validate
];
//# sourceMappingURL=auth.validator.js.map