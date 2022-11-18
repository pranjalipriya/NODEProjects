import { StorageResponse } from "./storage.type";



export const STORAGE_MESSAGE = {
    NOT_FOUND: new StorageResponse(404, "STORAGE NOT FOUND"),
    STORAGE_UPDATED: new StorageResponse(200, "STORAGE UPDATED"),
    STORAGE_CREATED: new StorageResponse(201, "STORAGE CREATED"),
    STORAGE_DELETED: new StorageResponse(200, "STORAGE DELETED")
}
