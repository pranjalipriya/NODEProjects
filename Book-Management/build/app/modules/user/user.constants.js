"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_MESSAGE = exports.ROLES = void 0;
const user_types_1 = require("./user.types");
exports.ROLES = {
    "ADMIN": "0a85908d-6574-441f-8a88-a7d7ef4aa947",
    "WORKER": "a1fb54a0-659c-423d-81d5-1cda568459db"
};
exports.USER_MESSAGE = {
    NOT_FOUND: new user_types_1.UserResponse(404, "USER NOT FOUND"),
    STATUS_UPDATED: new user_types_1.UserResponse(200, "STATUS UPDATED"),
    NO_PENDING_REQUEST: new user_types_1.UserResponse(403, "NO PENDING REQUEST"),
    ASSIGNED: new user_types_1.UserResponse(200, "SUCESSFULLY ASSIGNED SCHOOL")
};
//# sourceMappingURL=user.constants.js.map