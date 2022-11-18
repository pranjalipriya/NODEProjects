import { IExcludedPaths } from "../../utility/authorize";
import { AuthRouter } from "../auth/auth.routes";
import { CustomerRouter } from "../customer/customer.routes";
import { MeterTypeRouter } from "../meter-types/meter-types.routes";
import { MeterRouter } from "../assign-meter/meter.routes";
import { UserRouter } from "../users/user.routes";
import { Route, Routes } from "./routes.types";
import { ReadingRouter } from "../reading/reading.routes";

export const routes: Routes = [
     new Route("/auth", AuthRouter),
     new Route("/user", UserRouter),
     new Route("/customer",CustomerRouter),
     new Route("/meter-type",MeterTypeRouter),
     new Route("/meter", MeterRouter),
     new Route("/reading", ReadingRouter)
];

export const excludedPaths: IExcludedPaths[] = [
    { path: '/auth/login', method: "POST" },
    {path: "/auth/forgot-password",method:'POST'},
    {path:'/auth/reset',method: 'POST'}
]