"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchoolValidator = void 0;
const express_validator_1 = require("express-validator");
const validate_1 = require("../../utility/validate");
exports.SchoolValidator = [
    (0, express_validator_1.body)('name').isString().notEmpty().withMessage("name is required"),
    (0, express_validator_1.body)('academicYear').isString().notEmpty().withMessage("academicYear is required"),
    (0, express_validator_1.body)("classFrom").isString().notEmpty().withMessage("class is required"),
    (0, express_validator_1.body)("classTo").isString().notEmpty().withMessage("class is required"),
    (0, express_validator_1.body)("subject").isArray().notEmpty().withMessage("subjects are required"),
    validate_1.validate
];
//# sourceMappingURL=school.validation.js.map