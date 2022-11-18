import { SchoolResponse } from "./school.types";

export const SCHOOL_MESSAGE = {
    NOT_FOUND: new SchoolResponse(404, "NOT FOUND"),
    SCHOOL_UPDATED: new SchoolResponse(200, "SCHOOL UPDATED"),
    SCHOOL_CREATED: new SchoolResponse(201, "SCHOOL CREATED"),
    SCHOOL_DELETED: new SchoolResponse(200, "SCHOOL DELETED"),
    SUBJECT_CREATED: new SchoolResponse(201, "SUBJECT CREATED"),
    SUBJECT_DELETED: new SchoolResponse(200, "SUBJECT DELETED"),
    SUBJECT_ASSIGNED: new SchoolResponse(200, "SUBJECT ASSIGNED")

}
