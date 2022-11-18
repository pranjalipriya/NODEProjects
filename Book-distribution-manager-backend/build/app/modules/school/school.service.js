"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const school_constants_1 = require("./school.constants");
const school_schema_1 = __importDefault(require("./school.schema"));
const create = (asset) => school_schema_1.default.create(asset);
const getAll = () => school_schema_1.default.get();
const getOne = (id) => {
    const asset = school_schema_1.default.getOne(id);
    if (asset) {
        return asset;
    }
    throw school_constants_1.SCHOOL_MESSAGE.NOT_FOUND;
};
const update = () => { };
const deleteOne = () => { };
exports.default = {
    create,
    getAll,
    getOne,
    update,
    deleteOne
};
//# sourceMappingURL=school.service.js.map