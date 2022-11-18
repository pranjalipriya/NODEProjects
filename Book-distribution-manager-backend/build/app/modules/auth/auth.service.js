"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authorize_1 = require("../../utility/authorize");
const email_1 = require("../../utility/email");
const password_1 = require("../../utility/password");
const user_schema_1 = __importDefault(require("../users/user.schema"));
const user_service_1 = __importDefault(require("../users/user.service"));
// import userSchema from "../user/user.schema";
// import userService from "../user/user.service";
// import { IUser } from "../user/user.types";
const auth_responses_1 = require("./auth.responses");
const login = (credentials) => {
    const users = user_service_1.default.getUsers();
    const user = users.find(u => u.username === credentials.username &&
        (0, password_1.comparePassword)(credentials.password, u.password));
    if (!user) {
        throw auth_responses_1.AUTH_ERRORS.NOT_FOUND;
    }
    if (user.status !== 'approved') {
        throw auth_responses_1.AUTH_ERRORS.NOT_FOUND;
    }
    const token = (0, authorize_1.createToken)({ id: user.id, role: user.role });
    return {
        token,
        role: user.role
    };
};
const register = (user) => {
    try {
        const originalPassword = user.password;
        user.password = (0, password_1.createHash)(user.password);
        user_schema_1.default.create(user);
        (0, email_1.sendEmail)(user.email, "login credentials", `
            Hi, ${user.username},

            Your account for the book distributing portal has been created.
            Please login at: bookdistributing.portal.com

            username: ${user.username}
            password: ${originalPassword}
        `);
        return "Registered Successfully";
    }
    catch (e) {
        throw auth_responses_1.AUTH_ERRORS.INTERNAL;
    }
};
exports.default = {
    login,
    register
};
//# sourceMappingURL=auth.service.js.map