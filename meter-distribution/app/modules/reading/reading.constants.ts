import { ReadingResponse } from "./reading.types";



export const READING_MESSAGE = {
    NOT_FOUND: new ReadingResponse(404, "READING NOT FOUND"),
    READING_UPDATED: new ReadingResponse(200, "READING UPDATED"),
    READING_CREATED: new ReadingResponse(201, "READING CREATED"),
    READING_DELETED: new ReadingResponse(200, "READING DELETED")
}
