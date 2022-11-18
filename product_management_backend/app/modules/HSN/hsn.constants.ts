import { HsnResponse } from "./hsn.type";


export const HSN_MESSAGE = {
    NOT_FOUND: new HsnResponse(404, "HSN NOT FOUND"),
    HSN_UPDATED: new HsnResponse(200, "HSN UPDATED"),
    HSN_CREATED: new HsnResponse(201, "HSN CREATED"),
    HSN_DELETED: new HsnResponse(200, "HSN DELETED")
}
