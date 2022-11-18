"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SCHOOL_MESSAGE = void 0;
const school_type_1 = require("./school.type");
exports.SCHOOL_MESSAGE = {
    NOT_ADDED: new school_type_1.schoolResponses(404, "SCHOOL NOT ADDED"),
    NOT_FOUND: new school_type_1.schoolResponses(404, 'NOT FOUND'),
    SCHOOL_ADDED: new school_type_1.schoolResponses(201, "SCHOOL ADDED"),
    SCHOOL_DELETED: new school_type_1.schoolResponses(200, "SCHOOL DELETED"),
    SCHOOL_UPDATED: new school_type_1.schoolResponses(201, "SCHOOL UPDATED")
};
//# sourceMappingURL=school.constants.js.map