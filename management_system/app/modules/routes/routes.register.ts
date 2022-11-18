import { Application, NextFunction, Request, Response } from "express";
import { Response as ResponseHandler } from "../../utility/response-handler";
import { routes } from "./routes.data";

export const registerRoutes = (app: Application) => {
    for(let route of routes) {
        app.use(route.path, route.router);
    }

    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
        res.status(err.statusCode || 500).send(new ResponseHandler(null, err));
    })
}