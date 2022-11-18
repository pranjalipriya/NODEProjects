"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HSNModel = exports.HSNSchema = void 0;
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../../utility/base.schema");
const item_schema_1 = require("../item/item.schema");
exports.HSNSchema = new base_schema_1.BaseSchema({
    itemName: {
        type: String,
        required: true
    },
    itemSpecification: {
        type: item_schema_1.ItemSchema,
        required: true
    },
    CGST: {
        type: String,
        required: true
    },
    IGST: {
        type: String,
        required: true
    },
    SGST: {
        type: Boolean,
        default: false,
        required: true
    }
});
exports.HSNModel = (0, mongoose_1.model)("HSN", exports.HSNSchema);
exports.default = exports.HSNModel;
//# sourceMappingURL=hsn.schema.js.map