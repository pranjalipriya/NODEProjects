import { Application, NextFunction, Request, response, Response } from "express";
import { Response as ResponseHandler } from "../../utility/response-handler";
import { routes } from "./route.data";

export const registerRoutes = (app: Application) => {
    for(let route of routes) {
        app.use(route.path, route.router);
    }

const validUser  =["admin", "superAdmin" , "user"]; 
    app.use('/',(req: Request ,res: Response,next: NextFunction)=>{
        for(const role in validUser){
        if(req.headers["role"] === role) {
        res.send("global middleware");
        }
    }
    })

    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
        res.status(err.statusCode || 500).send(new ResponseHandler(null, err));
    })
}