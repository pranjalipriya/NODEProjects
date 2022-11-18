"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_schema_1 = __importDefault(require("./users.schema"));
const get = (credentials) => users_schema_1.default.findOne({ username: credentials.username });
const getOne = (name) => users_schema_1.default.findOne({ username: name });
const create = (user) => users_schema_1.default.insertMany(Object.assign({}, user));
const deleteUser = (id) => users_schema_1.default.updateOne({ _id: id }, { $set: { isDeleted: true } });
const getUsers = () => users_schema_1.default.find({ isDeleted: false });
const updatedUser = (user, id) => users_schema_1.default.updateOne({ _id: id }, { $set: { username: user.username, email: user.email } });
exports.default = {
    get,
    create,
    deleteUser,
    getOne,
    getUsers,
    updatedUser
};
//# sourceMappingURL=users.repo.js.map