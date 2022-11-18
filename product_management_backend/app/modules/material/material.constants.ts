import { MaterialResponse } from "./material.type";


export const MATERIAL_MESSAGE = {
    NOT_FOUND: new MaterialResponse(404, "MATERIAL NOT FOUND"),
    MATERIAL_UPDATED: new MaterialResponse(200, "MATERIAL UPDATED"),
    MATERIAL_CREATED: new MaterialResponse(201, "MATERIAL CREATED"),
    MATERIAL_DELETED: new MaterialResponse(200, "MATERIAL DELETED")
}
