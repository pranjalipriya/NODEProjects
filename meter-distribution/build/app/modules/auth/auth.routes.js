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
exports.AuthRouter = void 0;
const express_1 = require("express");
const authorize_1 = require("../../utility/authorize");
const response_handler_1 = require("../../utility/response-handler");
const roles_constants_1 = require("../roles/roles.constants");
const auth_service_1 = __importDefault(require("./auth.service"));
const auth_validation_1 = require("./auth.validation");
exports.AuthRouter = (0, express_1.Router)();
exports.AuthRouter.post("/login", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const result = yield auth_service_1.default.login(body);
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
}));
exports.AuthRouter.post("/register", auth_validation_1.registerValidator, (0, authorize_1.permit)([roles_constants_1.ROLES.admin]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield auth_service_1.default.register(req.body);
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
}));
exports.AuthRouter.post("/change-password", auth_validation_1.resetPasswordValidator, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield auth_service_1.default.changePassword(req.body);
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
}));
exports.AuthRouter.post("/forgot-password", auth_validation_1.forgotPasswordValidator, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        const result = yield auth_service_1.default.forgotPassword(email);
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
}));
exports.AuthRouter.post("/reset/:hashid", auth_validation_1.resetPasswordValidator, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { hashid } = req.params;
        const { newPassword, confirmNewPassword } = req.body;
        const result = yield auth_service_1.default.resetPassword(hashid, newPassword, confirmNewPassword);
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
}));
//# sourceMappingURL=auth.routes.js.map