"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerValidator = void 0;
const express_validator_1 = require("express-validator");
const validate_1 = require("../../utility/validate");
exports.customerValidator = [
    (0, express_validator_1.body)('name').isString().notEmpty().withMessage("name is required"),
    (0, express_validator_1.body)('email').isEmail().withMessage('required email'),
    (0, express_validator_1.body)('address').isString().notEmpty().withMessage("address is required"),
    (0, express_validator_1.body)('state').isString().notEmpty().withMessage("address is required"),
    validate_1.validate
];
//# sourceMappingURL=customer.validation.js.map