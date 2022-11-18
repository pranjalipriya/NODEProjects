// import { Router } from "express";
// import { NextFunction, Request, Response as EResponse } from 'express';
// import { USER_MESSAGE } from "./users.constants";
// import { ResponseHandler as Response } from "../../utility/response-handler";
// import { IUser } from "./users.types";
// import usersService from "./users.service";
// import { permit } from "../../utility/authorize";
// import { HSN_MESSAGE } from "../HSN/hsn.constants";
// import { ROLES } from "../roles/roles.constants";
// import { MATERIAL_MESSAGE } from "../material/material.constants";
// import { CUSTOMER_MESSAGE } from "../customer/customer.constants";
// import { STORAGE_MESSAGE } from "../storage/storage.constants";
// import { ORDER_MESSAGE } from "../order/order.constants";



// export const UserRouter = Router();


// //get all users
// UserRouter.get("/", permit([ROLES.admin]), async (req, res, next) => {
//     try {
//         const result = await usersService.getUsers();
//         res.send(new Response(result));
//     } catch (e) {
//         next(USER_MESSAGE.NOT_FOUND);
//     }
// });

// UserRouter.put("/", permit([ROLES.admin]), async (req, res, next) => {
//     try {
//         const user = req.body;
//         const result = await usersService.updateUser(user);
//         res.send(USER_MESSAGE.USER_UPDATED);
//     }
//     catch (e) {
//         next(e)
//     }
// })
// UserRouter.delete("/:id", permit([ROLES.admin]), async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         await usersService.deleteUser(id)
//         res.send(USER_MESSAGE.USER_DELETED)
//     }
//     catch (e) {
//         next(e)
//     }
// })







