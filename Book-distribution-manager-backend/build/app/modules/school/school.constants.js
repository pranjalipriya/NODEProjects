"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SCHOOL_MESSAGE = void 0;
const school_types_1 = require("./school.types");
exports.SCHOOL_MESSAGE = {
    NOT_FOUND: new school_types_1.SchoolResponse(404, "SCHOOL NOT FOUND"),
    SCHOOL_UPDATED: new school_types_1.SchoolResponse(200, "SCHOOL UPDATED"),
    SCHOOL_CREATED: new school_types_1.SchoolResponse(201, "SCHOOL CREATED"),
    SCHOOL_DELETED: new school_types_1.SchoolResponse(200, "SCHOOL DELETED"),
};
//# sourceMappingURL=school.constants.js.map