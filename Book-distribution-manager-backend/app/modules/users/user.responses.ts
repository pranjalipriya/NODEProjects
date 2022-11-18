import { UserResponses } from "./user.types";

export const USER_MESSAGE = {
    NOT_FOUND: new UserResponses(404, "INVALID CREDENTIALS"),
    USER_UPDATED: new UserResponses(200, "User updated"),
    INTERNAL: new UserResponses(500, "User not created"),
    REQUEST_NOT_FOUND: new UserResponses(404,"No Request Found"),
    ASSIGNED : new UserResponses(200,"School Assigned")
}