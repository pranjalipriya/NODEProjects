"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_MESSAGE = void 0;
const user_types_1 = require("./user.types");
exports.USER_MESSAGE = {
    NOT_FOUND: new user_types_1.UserResponses(404, "INVALID CREDENTIALS"),
    USER_UPDATED: new user_types_1.UserResponses(200, "user updated"),
    INTERNAL: new user_types_1.UserResponses(500, "User not created")
};
//# sourceMappingURL=user.responses.js.map