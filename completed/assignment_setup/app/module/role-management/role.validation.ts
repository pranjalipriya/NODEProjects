import {header, validate }from "../../utility/validators";


export const validateSuperAdminAccess=[
    header("superAdmin"),
    header("admin"),
    header("user"),
    validate
]
export const validateAdminAccess=[
    header("admin"),
    header("user"),
    validate
]
export const validateUserAccess=[
    header("user"),
    validate
]
