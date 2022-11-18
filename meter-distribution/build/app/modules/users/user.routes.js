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
exports.UserRouter = void 0;
const express_1 = require("express");
const authorize_1 = require("../../utility/authorize");
const response_handler_1 = require("../../utility/response-handler");
const roles_constants_1 = require("../roles/roles.constants");
const user_constant_1 = require("./user.constant");
const user_service_1 = __importDefault(require("./user.service"));
exports.UserRouter = (0, express_1.Router)();
exports.UserRouter.get("/", (0, authorize_1.permit)([roles_constants_1.ROLES.admin]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const filterParameter= //req.body
        // const pagenumber=parseInt(req.params.pagenumber);
        // const limit=parseInt(req.params.limit);
        // const result = await userService.getAll(pagenumber,limit,filterParameter);
        const result = yield user_service_1.default.getAll(1, 1, {});
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
}));
exports.UserRouter.put("/:id", (0, authorize_1.permit)([roles_constants_1.ROLES.admin]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customer = req.body;
        const { id } = req.params;
        const result = yield user_service_1.default.update(customer, id);
        res.send(user_constant_1.USER_MESSAGE.USER_UPDATED);
    }
    catch (e) {
        next(e);
    }
}));
exports.UserRouter.delete("/:id", (0, authorize_1.permit)([roles_constants_1.ROLES.admin]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield user_service_1.default.deleted(id);
        res.send(user_constant_1.USER_MESSAGE.USER_DELETED);
    }
    catch (e) {
        next(e);
    }
}));
//# sourceMappingURL=user.routes.js.map