import { UserResponse } from "./user.types"

export const ROLES: { 
    [key: string]: string 
} = {
    "ADMIN": "0a85908d-6574-441f-8a88-a7d7ef4aa947",
    "WORKER": "a1fb54a0-659c-423d-81d5-1cda568459db"
}

export const USER_MESSAGE = {
    NOT_FOUND: new UserResponse(404, "USER NOT FOUND"),
    STATUS_UPDATED: new UserResponse(200, "STATUS UPDATED"),
    NO_PENDING_REQUEST: new UserResponse(403, "NO PENDING REQUEST"),
    ASSIGNED : new UserResponse(200,"SUCESSFULLY ASSIGNED SCHOOL")
}

