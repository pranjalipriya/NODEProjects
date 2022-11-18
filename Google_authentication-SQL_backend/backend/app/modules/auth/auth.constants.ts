import { AuthResponses } from "./auth.types";


export const AUTH_ERRORS = {
    NOT_FOUND: new AuthResponses(404, "INVALID CREDENTIALS"),
    INTERNAL: new AuthResponses(500, " Not created"),
    NOT_MATCH: new AuthResponses(404,"New password doesn't match")
}

