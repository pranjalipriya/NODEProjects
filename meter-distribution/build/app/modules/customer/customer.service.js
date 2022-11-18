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
const customer_repo_1 = __importDefault(require("./customer.repo"));
const get = (pagenumber, limit, filterParameter) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield customer_repo_1.default.get(pagenumber, limit, filterParameter);
    }
    catch (e) {
        throw e;
    }
});
const create = (customer) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield customer_repo_1.default.create(customer);
    }
    catch (e) {
        throw e;
    }
});
const update = (updated, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield customer_repo_1.default.update(Object.keys(updated)[0], Object.values(updated)[0], id);
    }
    catch (e) {
        throw e;
    }
});
const deleted = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield customer_repo_1.default.deleted(id);
    }
    catch (e) {
        throw e;
    }
});
exports.default = {
    get,
    create,
    update,
    deleted
};
//# sourceMappingURL=customer.service.js.map