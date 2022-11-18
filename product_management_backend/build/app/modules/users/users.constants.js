"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_MESSAGE = void 0;
const users_types_1 = require("./users.types");
exports.USER_MESSAGE = {
    NOT_FOUND: new users_types_1.UserResponse(404, "USER NOT FOUND"),
    USER_UPDATED: new users_types_1.UserResponse(200, "USER UPDATED"),
    USER_CREATED: new users_types_1.UserResponse(201, "USER CREATED"),
    USER_DELETED: new users_types_1.UserResponse(200, "USER DELETED")
};
//# sourceMappingURL=users.constants.js.map