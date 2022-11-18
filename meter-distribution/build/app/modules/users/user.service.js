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
const password_1 = require("../../utility/password");
const user_repo_1 = __importDefault(require("./user.repo"));
const user_repo_2 = __importDefault(require("./user.repo"));
const getUser = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield user_repo_2.default.getUser(email);
    }
    catch (e) {
        throw e;
    }
});
const create = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hashedPassword = yield (0, password_1.createHash)(user.password);
        user.password = hashedPassword;
        const result = yield user_repo_1.default.create(user);
        return user.password;
    }
    catch (e) {
        throw e;
    }
});
//user
const getAll = (pagenumber, limit, filterParameter) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield user_repo_1.default.get(pagenumber, limit, filterParameter);
    }
    catch (e) {
        throw e;
    }
});
const update = (updated, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield user_repo_1.default.update(Object.keys(updated)[0], Object.values(updated)[0], id);
    }
    catch (e) {
        throw e;
    }
});
const deleted = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield user_repo_1.default.deleted(id);
    }
    catch (e) {
        throw e;
    }
});
exports.default = {
    getUser,
    getAll,
    create,
    update,
    deleted
};
//# sourceMappingURL=user.service.js.map