"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.userSchema = void 0;
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../../utility/base.schema");
exports.userSchema = new base_schema_1.BaseSchema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    role: {
        type: String,
        required: true
    }
});
exports.UserModel = (0, mongoose_1.model)("User", exports.userSchema);
exports.default = exports.UserModel;
//# sourceMappingURL=users.schema.js.map