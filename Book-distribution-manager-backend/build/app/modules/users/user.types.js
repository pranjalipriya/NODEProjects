"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResponses = exports.Role = void 0;
class Role {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
exports.Role = Role;
class UserResponses {
    constructor(statusCode, message) {
        this.statusCode = statusCode;
        this.message = message;
    }
}
exports.UserResponses = UserResponses;
//# sourceMappingURL=user.types.js.map