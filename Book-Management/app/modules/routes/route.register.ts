import { Application, json, NextFunction, Request, Response } from "express";
import { excludedPaths, routes } from "./route.data";
import cors from "cors";
import { ResponseHandler } from "../../utility/response-handler";
import { authorize } from "../../utility/authorize";

export const registerRoutes=(app:Application)=>{

    app.use(json())
    app.use(cors())

    app.use(authorize(excludedPaths))
    
    for(let route of routes){
        app.use(route.path,route.router)
    }
    
    app.use((err: any, req:Request, res: Response, next: NextFunction) => {
        res.status(err.statusCode || 500).send(new ResponseHandler(null, err));
    })
}