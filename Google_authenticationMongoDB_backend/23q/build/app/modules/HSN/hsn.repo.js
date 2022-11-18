"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hsn_schema_1 = __importDefault(require("./hsn.schema"));
const getHsn = () => hsn_schema_1.default.find({ isDeleted: false });
const create = (hsn) => hsn_schema_1.default.insertMany({ hsn });
exports.default = {
    getHsn,
    create
};
//# sourceMappingURL=hsn.repo.js.map