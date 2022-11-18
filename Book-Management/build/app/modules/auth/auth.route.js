"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const express_1 = require("express");
const authorize_1 = require("../../utility/authorize");
const response_handler_1 = require("../../utility/response-handler");
const user_constants_1 = require("../user/user.constants");
const user_service_1 = __importDefault(require("../user/user.service"));
const auth_service_1 = __importDefault(require("./auth.service"));
const auth_validations_1 = require("./auth.validations");
exports.AuthRouter = (0, express_1.Router)();
exports.AuthRouter.post("/login", auth_validations_1.LoginValidator, (req, res, next) => {
    try {
        const result = auth_service_1.default.login(req.body);
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
});
exports.AuthRouter.post("/signup", auth_validations_1.SignupValidator, (req, res, next) => {
    try {
        auth_service_1.default.signup(req.body);
        res.send(new response_handler_1.ResponseHandler("Signup Successful"));
    }
    catch (e) {
        next(e);
    }
});
// AuthRouter.get("/",permit([ROLES.ADMIN]), (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const result = authService.get();
//         res.send(new ResponseHandler(result));
//     } catch (e) {
//         next(e);
//     }
// })
exports.AuthRouter.put('/', (0, authorize_1.permit)([user_constants_1.ROLES.ADMIN]), (req, res, next) => {
    try {
        const upadtedStatus = user_service_1.default.updateStatus(req.body);
        if (upadtedStatus) {
            return res.send(new response_handler_1.ResponseHandler(user_constants_1.USER_MESSAGE.STATUS_UPDATED));
        }
        return res.send(new response_handler_1.ResponseHandler(user_constants_1.USER_MESSAGE.NOT_FOUND));
    }
    catch (error) {
        next(error);
    }
});
//# sourceMappingURL=auth.route.js.map