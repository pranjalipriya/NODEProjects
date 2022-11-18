import { model } from "mongoose";
import { BaseSchema } from "../../utility/base.schema";
import { IFurnace } from "./furnace.type";

export const FurnaceSchema = new BaseSchema ({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});
export type IFurnaceDocument = Document & IFurnace;
export const FurnaceModel = model<IFurnaceDocument>("Furnace" , FurnaceSchema);

export default FurnaceModel;