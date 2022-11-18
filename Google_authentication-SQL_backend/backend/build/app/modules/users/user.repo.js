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
const user_schema_1 = __importDefault(require("./user.schema"));
const getUser = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield user_schema_1.default.findOne({ where: { email: email } });
    }
    catch (e) {
        throw e;
    }
});
const create = (user) => __awaiter(void 0, void 0, void 0, function* () { return yield user_schema_1.default.create(Object.assign({}, user)); });
const updatedUser = (user, email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield user_schema_1.default.update({ password: user }, { where: { email: email } });
        console.log(data, user);
        return data;
    }
    catch (e) {
        throw e;
    }
});
const get = (pagenumber, limit, filterParameter) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield user_schema_1.default.findAll();
    }
    catch (e) {
        throw e;
    }
});
const update = (key, value, id) => __awaiter(void 0, void 0, void 0, function* () { return user_schema_1.default.update({ $set: { key: value } }, { where: { id: id } }); });
const deleted = (id) => user_schema_1.default.update({ $set: { isDeleted: true } }, { where: { id: id } });
exports.default = {
    getUser,
    create,
    updatedUser,
    get,
    update,
    deleted
};
//# sourceMappingURL=user.repo.js.map