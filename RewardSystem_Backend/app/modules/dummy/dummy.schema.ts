import { Schema, model } from 'mongoose';

const dummySchema = new Schema({
    dummyName: {
        type: String,
        required: true
    },
    dummyAge: {
        type: Number,
        required: true
    }
});

const DummyModel = model("Dummy", dummySchema);

export default DummyModel;

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