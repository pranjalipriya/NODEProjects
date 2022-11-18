import { IExcludedPaths } from "../../utility/authorize";
import { AuthRouter } from "../auth/auth.routes";
import { CustomerRouter } from "../customer/customer.routes";
import { HSNRouter } from "../HSN/hsn.routes";
import { MaterialRouter } from "../material/material.routes";
import { StorageRouter } from "../storage/storage.routes";
import { UserRouter } from "../users/users.routes";
import { Route, Routes } from "./routes.types";

export const routes: Routes = [
    new Route("/auth", AuthRouter),
    new Route("/user",UserRouter),
    new Route("/customer",CustomerRouter),
    new Route("/hsn",HSNRouter),
    // new Route("/furnace",FurnaceRouter),
    new Route("/material",MaterialRouter),
    // new Route("/order",OrderRouter),
    // new Route("/product",ProductRouter),
    new Route("/storage",StorageRouter)
];

export const excludedPaths: IExcludedPaths[] = [
    { path: '/auth/login', method: "POST" },
    { path: '/auth/reset/', method: "POST" }
]