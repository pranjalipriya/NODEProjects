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
const user_repo_1 = __importDefault(require("../users/user.repo"));
const user_service_1 = __importDefault(require("../users/user.service"));
const auth_constants_1 = require("./auth.constants");
const login = (credentials) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_service_1.default.getUser(credentials.email);
        if (!user)
            throw auth_constants_1.AUTH_ERRORS.NOT_FOUND;
        const isUser = yield (0, password_1.comparePassword)(credentials.password, user === null || user === void 0 ? void 0 : user.getDataValue("password"));
        if (!isUser) {
            throw auth_constants_1.AUTH_ERRORS.NOT_FOUND;
        }
        const role = user.getDataValue("role");
        const token = (0, authorize_1.createToken)({ id: user.getDataValue('id') });
        return {
            token,
            role
        };
    }
    catch (e) {
        throw e;
    }
});
const register = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const password = yield user_service_1.default.create(user);
        (0, email_1.sendEmail)(user.email, "Login Credentials", `
            Hi, ${user.username},

            Your account has been created.
            Please login using:

            username: ${user.username}
            password: ${password}
        
            
        `, "");
        return "Registered Successfully";
    }
    catch (e) {
        throw auth_constants_1.AUTH_ERRORS.INTERNAL;
    }
});
const forgotPassword = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_service_1.default.getUser(email);
        const hashid = (0, email_1.encrypt)(email);
        const name = user.getDataValue("username");
        (0, email_1.sendEmail)(email, "Reset Password link", `
         Hi, ${name},
    
         Please reset your password using this link
        
     `, `<a href=http://localhost:3000/auth/reset/${hashid}> Click here`);
        return "mail send successfully";
    }
    catch (e) {
        throw e;
    }
});
const resetPassword = (hashid, newPassword, confirmNewPassword) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (newPassword !== confirmNewPassword) {
            throw auth_constants_1.AUTH_ERRORS.NOT_MATCH;
        }
        else {
            const email = (0, email_1.decrypt)(hashid);
            const user = yield user_repo_1.default.getUser(email);
            const hashedPassword = yield (0, password_1.createHash)(newPassword);
            user.password = hashedPassword;
            yield user_repo_1.default.updatedUser(user.getDataValue("password"), email);
            (0, email_1.sendEmail)(email, "Changed Password", `
         Hi, ${user.getDataValue("username")},
    
         Your password has been changed.
         Please login using:
    
         username: ${user.getDataValue("username")}
         password: ${newPassword}
         
     `, "");
            return "Password has been reset";
        }
    }
    catch (e) {
        throw e;
    }
});
const changePassword = (changedData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (changedData.newPassword !== changedData.confirmNewPassword) {
            throw auth_constants_1.AUTH_ERRORS.NOT_MATCH;
        }
        const user = yield user_service_1.default.getUser(changedData.email);
        const sameUser = yield (0, password_1.comparePassword)(changedData.oldPassword, user.getDataValue("password"));
        if (!sameUser) {
            throw auth_constants_1.AUTH_ERRORS.NOT_FOUND;
        }
        else {
            const hashedPassword = yield (0, password_1.createHash)(changedData.newPassword);
            user.password = hashedPassword;
            console.log(user.password, changedData.newPassword);
            yield user_repo_1.default.updatedUser(user.getDataValue("password"), changedData.email);
            (0, email_1.sendEmail)(changedData.email, "Changed Password", `
         Hi, ${user.getDataValue("username")},
    
         Your password has been changed.
         Please login using:
    
         username: ${user.getDataValue("username")}
         password: ${changedData.newPassword}
         
     `, "");
            return "Password Changed";
        }
    }
    catch (e) {
        throw e;
    }
});
exports.default = {
    login,
    register,
    forgotPassword,
    resetPassword,
    changePassword
};
//# sourceMappingURL=auth.service.js.map