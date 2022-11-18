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
const user_responses_1 = require("./user.responses");
const user_schema_1 = __importDefault(require("./user.schema"));
exports.UserRouter = (0, express_1.Router)();
exports.UserRouter.put("/request", (0, authorize_1.permit)([user_constants_1.ROLES.ADMIN]), (req, res, next) => {
    const updatedStatus = req.body;
    const didUpdate = user_schema_1.default.update(updatedStatus);
    if (didUpdate) {
        return res.send(new response_handler_1.ResponseHandler(user_responses_1.USER_MESSAGE.USER_UPDATED));
    }
    next(user_responses_1.USER_MESSAGE.NOT_FOUND);
});
//# sourceMappingURL=user.routes.js.map