import { IExcludedPaths } from "../../utility/authorize";
import { AuthRouter } from "../auth/auth.routes";
import { DummyRouter } from "../dummy/dummy.routes";
import SchoolRouter from "../school/school.routes";
import { UserRouter } from "../users/user.routes";
import { Route, Routes } from "./routes.types";

export const routes: Routes = [
    new Route("/dummy", DummyRouter),
    new Route("/auth", AuthRouter),
    new Route("/user", UserRouter),
    new Route("/school", SchoolRouter)
];

export const excludedPaths: IExcludedPaths[] = [
    { path: '/auth/login', method: "POST" },
    { path: '/auth/register', method: "POST" }
]