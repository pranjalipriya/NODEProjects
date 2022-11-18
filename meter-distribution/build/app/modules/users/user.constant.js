"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_MESSAGE = void 0;
const user_type_1 = require("./user.type");
exports.USER_MESSAGE = {
    NOT_FOUND: new user_type_1.UserResponse(404, "USER NOT FOUND"),
    USER_UPDATED: new user_type_1.UserResponse(200, "USER UPDATED"),
    USER_CREATED: new user_type_1.UserResponse(201, "USER CREATED"),
    USER_DELETED: new user_type_1.UserResponse(200, "USER DELETED")
};
//# sourceMappingURL=user.constant.js.map