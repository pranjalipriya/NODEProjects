import { Router } from "express";
import { NextFunction, Request, Response as EResponse } from 'express';
import { USER_MESSAGE } from "./users.constants";
import { ResponseHandler as Response } from "../../utility/response-handler";
import { IUser } from "./users.types";
import usersService from "./users.service";
import {  upload } from "../../utility/file-upload";
import csv from "csvtojson"


export const UserRouter=Router();



UserRouter.get("/", async(req, res, next) => {
    try {
        const result = await usersService.getUsers();
        res.send(new Response(result));
    } catch (e) {
        next(USER_MESSAGE.NOT_FOUND);
    }
});

UserRouter.get("/:name", async(req: Request, res: EResponse, next: NextFunction) => {
    try {
        
        const result = await usersService.getOne(req.params.name);
        res.send(new Response(result));
    } catch (e) {
        next(USER_MESSAGE.NOT_FOUND);
    }
});

UserRouter.put("/:id", async(req, res, next) => {
    try{
       
        const updatedUser = req.body as IUser;
        const didUpdate = await usersService.updateUser(updatedUser, req.params.id);
        return res.send(new Response(USER_MESSAGE.USER_UPDATED));
    }
    catch(e){
    next(USER_MESSAGE.NOT_FOUND);
    }});


    UserRouter.delete("/:id", async(req, res, next) => {
        try{
            const didUpdate =await usersService.deleteUser(req.params.id);
            return res.send(new Response(USER_MESSAGE.USER_DELETED));
        }
        catch(e){
        next(USER_MESSAGE.NOT_FOUND);
        }
});


// csv
UserRouter.post('/readcsv', upload.single('file'), async (req, res, next) => {
    try {
        const resultArr = await csv().fromFile(req.file!.path); 
        const a= await usersService.pointCalculate(resultArr);
        res.send(new Response(resultArr));
    } catch (error) {
        next(error);
    }
});


//messages



