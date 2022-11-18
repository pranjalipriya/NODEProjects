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
const users_constants_1 = require("./users.constants");
const response_handler_1 = require("../../utility/response-handler");
const users_service_1 = __importDefault(require("./users.service"));
const authorize_1 = require("../../utility/authorize");
const hsn_constants_1 = require("../HSN/hsn.constants");
exports.UserRouter = (0, express_1.Router)();
//get all users
exports.UserRouter.get("/", (0, authorize_1.permit)(["admin"]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield users_service_1.default.getUsers();
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(users_constants_1.USER_MESSAGE.NOT_FOUND);
    }
}));
//hsn
exports.UserRouter.get("/hsn", (0, authorize_1.permit)(["admin", "clerk"]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield users_service_1.default.getHSN();
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(hsn_constants_1.HSN_MESSAGE.NOT_FOUND);
    }
}));
exports.UserRouter.post("/", (0, authorize_1.permit)(["admin", "clerk"]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hsn = req.body;
        const result = yield users_service_1.default.createHsn(hsn);
        res.send(hsn_constants_1.HSN_MESSAGE.HSN_CREATED);
    }
    catch (e) {
        next(e);
    }
}));
//# sourceMappingURL=users.routes.js.map