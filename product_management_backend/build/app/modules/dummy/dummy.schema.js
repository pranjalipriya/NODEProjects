"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../../utility/base.schema");
const dummySchema = new base_schema_1.BaseSchema({
    dummyName: {
        type: String,
        required: true
    },
    dummyAge: {
        type: Number,
        required: true
    }
});
const DummyModel = (0, mongoose_1.model)("Dummy", dummySchema);
exports.default = DummyModel;
// class DummySchema extends Schema {
//     public static dummyDb: any[] = [];
//     get() {
//         return DummySchema.dummyDb;
//     }
// }
// const dummySchema = new DummySchema();
// export default dummySchema;
// ADD a product
// name
// product code
// MRP
// discount %
// location
// see a list of all products
// except the deleted products
// update a product
// delete a product
// isDeleted: true
// GENERIC way of creating the schema
// where the Schema class is extended
// class ProductSchema extends Schema {
// }
//# sourceMappingURL=dummy.schema.js.map