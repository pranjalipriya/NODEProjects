//it is a fuzzy module which means it is for developers environment but not for users
import { Application } from "express";

import {routes} from "./routes.data"

export const registerRoutes= (app: Application) => {
 for(let route of routes){
    app.use(route.path,route.router);
 }
}
