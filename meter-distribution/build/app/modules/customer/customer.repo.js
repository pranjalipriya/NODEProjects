"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customer_schema_1 = __importDefault(require("./customer.schema"));
const get = (pagenumber, limit, filterParameter) => customer_schema_1.default.findOne({ where: { isDeleted: false } });
const create = (customer) => customer_schema_1.default.create(Object.assign({}, customer));
const update = (key, value, id) => customer_schema_1.default.update({ $set: { key: value } }, { where: { id: id } });
const deleted = (id) => customer_schema_1.default.update({ $set: { isDeleted: true } }, { where: { id: id } });
exports.default = {
    get,
    create,
    update,
    deleted
};
//# sourceMappingURL=customer.repo.js.map