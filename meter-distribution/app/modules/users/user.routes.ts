import { Router } from "express";
import { permit } from "../../utility/authorize";
import { ResponseHandler as Response, ResponseHandler} from "../../utility/response-handler";
import { ROLES } from "../roles/roles.constants";
import { USER_MESSAGE } from "./user.constant";
import userService from "./user.service";



export const UserRouter=Router();

UserRouter.get("/:pagenumber/:pagesize", permit([ROLES.admin]), async (req, res, next) => {
    try {
        const searchParameter= req.query;
        const pagenumber=parseInt(req.params.pagenumber);
        const pagesize=parseInt(req.params.pagesize);
        const result = await userService.get(pagenumber,pagesize,searchParameter);
        res.send(result);
    }
    catch (e) {
        next(e);
    }
});


UserRouter.put("/:id", permit([ROLES.admin]), async (req, res, next) => {
    try {
        const customer = req.body;
        const {id}=req.params;
        const result = await userService.update(customer,id);
        res.send(USER_MESSAGE.USER_UPDATED);
    }
    catch (e) {
        next(e)
    }
})

UserRouter.delete("/:id", permit([ROLES.admin]), async (req, res, next) => {
    try {
        const { id } = req.params;
        await userService.deleted(id)
        res.send(USER_MESSAGE.USER_DELETED)
    }
    catch (e) {
        next(e)
    }
})

// UserRouter.put("/assign/:id", permit([ROLES.admin]), async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         const {}
//         const result = await userService.assign(id,);
//         res.send(result);
//     }
//     catch (e) {
//         next(e);
//     }
// });

UserRouter.get("/", permit([ROLES.admin]), async (req, res, next) => {
    try {
        const result = await userService.getAll();
        res.send(new ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
});