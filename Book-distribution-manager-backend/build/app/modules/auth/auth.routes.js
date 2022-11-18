"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const express_1 = require("express");
const authorize_1 = require("../../utility/authorize");
const response_handler_1 = require("../../utility/response-handler");
const user_constants_1 = require("../users/user.constants");
const user_service_1 = __importDefault(require("../users/user.service"));
// import { ROLES } from '../roles/roles.constants';
const auth_service_1 = __importDefault(require("./auth.service"));
const auth_validations_1 = require("./auth.validations");
exports.AuthRouter = (0, express_1.Router)();
exports.AuthRouter.post("/login", (req, res, next) => {
    try {
        const result = auth_service_1.default.login(req.body);
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
});
exports.AuthRouter.post("/register", auth_validations_1.registerValidator, (req, res, next) => {
    try {
        const result = auth_service_1.default.register(req.body);
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
    exports.AuthRouter.get("/pendingrequests", (0, authorize_1.permit)([user_constants_1.ROLES.ADMIN]), (req, res, next) => {
        const result = user_service_1.default.getPendingRequests();
        res.send(new response_handler_1.ResponseHandler(result));
    });
    exports.AuthRouter.get("/approvedrequests", (0, authorize_1.permit)([user_constants_1.ROLES.ADMIN]), (req, res, next) => {
        const result = user_service_1.default.getApprovedRequests();
        res.send(new response_handler_1.ResponseHandler(result));
    });
    exports.AuthRouter.get("/rejectedrequests", (0, authorize_1.permit)([user_constants_1.ROLES.ADMIN]), (req, res, next) => {
        const result = user_service_1.default.getRejectedRequests();
        res.send(new response_handler_1.ResponseHandler(result));
    });
});
//# sourceMappingURL=auth.routes.js.map