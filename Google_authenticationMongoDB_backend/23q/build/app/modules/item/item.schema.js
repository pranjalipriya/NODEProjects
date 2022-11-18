"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemModel = exports.ItemSchema = void 0;
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../../utility/base.schema");
exports.ItemSchema = new base_schema_1.BaseSchema({
    material: {
        type: String,
        required: true
    },
    length: {
        type: Number,
        required: true
    },
    width: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    }
});
exports.ItemModel = (0, mongoose_1.model)("Item", exports.ItemSchema);
exports.default = exports.ItemModel;
//# sourceMappingURL=item.schema.js.map