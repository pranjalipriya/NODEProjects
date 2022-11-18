"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AUTH_ERRORS = void 0;
const auth_types_1 = require("./auth.types");
exports.AUTH_ERRORS = {
    NOT_FOUND: new auth_types_1.AuthResponses(404, "INVALID CREDENTIALS"),
    INTERNAL: new auth_types_1.AuthResponses(500, "User not created"),
};
//# sourceMappingURL=auth.responses.js.map