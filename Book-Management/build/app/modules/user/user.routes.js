"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = require("express");
const authorize_1 = require("../../utility/authorize");
const response_handler_1 = require("../../utility/response-handler");
const user_constants_1 = require("./user.constants");
const user_service_1 = __importDefault(require("./user.service"));
exports.UserRouter = (0, express_1.Router)();
exports.UserRouter.get("/", (0, authorize_1.permit)([user_constants_1.ROLES.ADMIN]), (req, res, next) => {
    try {
        const workers = user_service_1.default.getAllWorkers();
        res.status(200).send(new response_handler_1.ResponseHandler(workers));
    }
    catch (error) {
        next(error);
    }
});
exports.UserRouter.get('/pendingRequest', (0, authorize_1.permit)([user_constants_1.ROLES.ADMIN]), (req, res, next) => {
    try {
        const pendingRequest = user_service_1.default.getAllPendingRequest();
        res.status(200).send(new response_handler_1.ResponseHandler(pendingRequest));
    }
    catch (error) {
        next(error);
    }
});
exports.UserRouter.post('/assignSchoolToWorker', (0, authorize_1.permit)([user_constants_1.ROLES.ADMIN]), (req, res, next) => {
    try {
        const { id, schools } = req.body;
        const result = user_service_1.default.assignSchool(id, schools);
        if (result) {
            return res.send(new response_handler_1.ResponseHandler(user_constants_1.USER_MESSAGE.ASSIGNED));
        }
        throw user_constants_1.USER_MESSAGE.NOT_FOUND;
    }
    catch (e) {
        next(e);
    }
});
//# sourceMappingURL=user.routes.js.map