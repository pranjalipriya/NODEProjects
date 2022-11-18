"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authorize_1 = require("../../utility/authorize");
const password_1 = require("../../utility/password");
const user_schema_1 = __importDefault(require("../user/user.schema"));
const user_service_1 = __importDefault(require("../user/user.service"));
const auth_responses_1 = require("./auth.responses");
const login = (credentials) => {
    const users = user_service_1.default.getUsers();
    const user = users.find((u) => u.username === credentials.username &&
        (0, password_1.comparePassword)(credentials.password, u.password) &&
        u.status === "approved");
    if (!user) {
        throw auth_responses_1.AUTH_ERRORS.NOT_FOUND;
    }
    const token = (0, authorize_1.createToken)({ id: user.id, role: user.role });
    return {
        token,
        role: user.role,
    };
};
const signup = (user) => {
    const existingUser = user_schema_1.default.userDb.find((u) => u.username === user.username);
    if (!existingUser) {
        try {
            user.password = (0, password_1.createHash)(user.password);
            user_schema_1.default.create(user);
        }
        catch (e) {
            throw auth_responses_1.AUTH_ERRORS.INTERNAL;
        }
    }
    else {
        throw auth_responses_1.AUTH_ERRORS.ALREADY_EXIST;
    }
};
const get = () => {
    return user_schema_1.default.get();
};
exports.default = {
    login,
    signup,
    get,
};
//# sourceMappingURL=auth.service.js.map