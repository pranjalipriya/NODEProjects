"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerModel = exports.customerSchema = void 0;
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../../utility/base.schema");
exports.customerSchema = new base_schema_1.BaseSchema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false,
        required: true
    }
});
exports.CustomerModel = (0, mongoose_1.model)("Customer", exports.customerSchema);
exports.default = exports.CustomerModel;
//# sourceMappingURL=customer.schema.js.map