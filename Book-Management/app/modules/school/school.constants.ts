import { schoolResponses } from "./school.type";

export const SCHOOL_MESSAGE = {
    NOT_ADDED : new schoolResponses(404, "SCHOOL NOT ADDED"),
    NOT_FOUND : new schoolResponses(404, 'NOT FOUND'),
    SCHOOL_ADDED : new schoolResponses(201,"SCHOOL ADDED"),
    SCHOOL_DELETED : new schoolResponses(200,"SCHOOL DELETED"),
    SCHOOL_UPDATED : new schoolResponses(201,"SCHOOL UPDATED")
  };

