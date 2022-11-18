"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserAccess = exports.validateAdminAccess = exports.validateSuperAdminAccess = void 0;
const validators_1 = require("../../utility/validators");
exports.validateSuperAdminAccess = [
    (0, validators_1.header)("superAdmin"),
    (0, validators_1.header)("admin"),
    (0, validators_1.header)("user"),
    validators_1.validate
];
exports.validateAdminAccess = [
    (0, validators_1.header)("admin"),
    (0, validators_1.header)("user"),
    validators_1.validate
];
exports.validateUserAccess = [
    (0, validators_1.header)("user"),
    validators_1.validate
];
//# sourceMappingURL=role.validation.js.map