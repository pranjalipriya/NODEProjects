import { UserResponse } from "./users.types";

export const USER_MESSAGE = {
    NOT_FOUND: new UserResponse(404, "USER NOT FOUND"),
    USER_UPDATED: new UserResponse(200, "USER UPDATED"),
    USER_CREATED: new UserResponse(201, "USER CREATED"),
    USER_DELETED: new UserResponse(200, "USER DELETED")
}
