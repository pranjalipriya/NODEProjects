import { FurnaceResponse } from "./furnace.type";


export const FURNACE_MESSAGE = {
    NOT_FOUND: new FurnaceResponse(404, "FURNACE NOT FOUND"),
    FURNACE_UPDATED: new FurnaceResponse(200, "FURNACE UPDATED"),
    FURNACE_CREATED: new FurnaceResponse(201, "FURNACE CREATED"),
    FURNACE_DELETED: new FurnaceResponse(200, "FURNACE DELETED")
}
