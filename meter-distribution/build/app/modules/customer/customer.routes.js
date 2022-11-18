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
exports.CustomerRouter = void 0;
const express_1 = require("express");
const authorize_1 = require("../../utility/authorize");
const roles_constants_1 = require("../roles/roles.constants");
const customer_service_1 = __importDefault(require("./customer.service"));
const response_handler_1 = require("../../utility/response-handler");
const customer_validation_1 = require("./customer.validation");
const customer_constants_1 = require("./customer.constants");
exports.CustomerRouter = (0, express_1.Router)();
exports.CustomerRouter.get("/:pagenumber/:limit", (0, authorize_1.permit)([roles_constants_1.ROLES.admin, roles_constants_1.ROLES.clerk]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filterParameter = req.body;
        const pagenumber = parseInt(req.params.pagenumber);
        const limit = parseInt(req.params.limit);
        const result = yield customer_service_1.default.get(pagenumber, limit, filterParameter);
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
}));
exports.CustomerRouter.post("/", customer_validation_1.customerValidator, (0, authorize_1.permit)([roles_constants_1.ROLES.admin]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customer = req.body;
        const result = yield customer_service_1.default.create(customer);
        res.send(customer_constants_1.CUSTOMER_MESSAGE.CUSTOMER_CREATED);
    }
    catch (e) {
        next(e);
    }
}));
exports.CustomerRouter.put("/:id", (0, authorize_1.permit)([roles_constants_1.ROLES.admin]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customer = req.body;
        const { id } = req.params;
        const result = yield customer_service_1.default.update(customer, id);
        res.send(customer_constants_1.CUSTOMER_MESSAGE.CUSTOMER_UPDATED);
    }
    catch (e) {
        next(e);
    }
}));
exports.CustomerRouter.delete("/:id", (0, authorize_1.permit)([roles_constants_1.ROLES.admin]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield customer_service_1.default.deleted(id);
        res.send(customer_constants_1.CUSTOMER_MESSAGE.CUSTOMER_DELETED);
    }
    catch (e) {
        next(e);
    }
}));
//# sourceMappingURL=customer.routes.js.map