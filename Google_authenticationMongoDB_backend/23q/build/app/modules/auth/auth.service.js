"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authorize_1 = require("../../utility/authorize");
const email_1 = require("../../utility/email");
const password_1 = require("../../utility/password");
const users_service_1 = __importDefault(require("../users/users.service"));
const auth_responses_1 = require("./auth.responses");
const login = (credentials) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield users_service_1.default.getUser(credentials);
        if (!user)
            throw auth_responses_1.AUTH_ERRORS.NOT_FOUND;
        const isUser = yield (0, password_1.comparePassword)(credentials.password, user.password);
        if (!isUser) {
            throw auth_responses_1.AUTH_ERRORS.NOT_FOUND;
        }
        const token = (0, authorize_1.createToken)({ id: user._id, role: user.role });
        return {
            token,
            role: user.role
        };
    }
    catch (e) {
        throw e;
    }
});
const register = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const password = yield users_service_1.default.create(user);
        console.log("auth service", password);
        (0, email_1.sendEmail)(user.email, "Login Credentials", `
            Hi, ${user.username},

            Your account has been created.
            Please login using:

            username: ${user.username}
            password: ${password}
            
        `);
        return "Registered Successfully";
    }
    catch (e) {
        throw auth_responses_1.AUTH_ERRORS.INTERNAL;
    }
});
exports.default = {
    login,
    register
};
//# sourceMappingURL=auth.service.js.map