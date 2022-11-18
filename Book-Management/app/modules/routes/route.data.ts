import { Route, Routes } from "./route.types";
import { AuthRouter } from "../auth/auth.route";
import { IExcludedPaths } from "../../utility/authorize";
import { UserRouter } from "../user/user.routes";
import { SchoolRouter} from "../school/school.routes";

export const routes:Routes=[
    new Route("/auth",AuthRouter),
    new Route('/user', UserRouter),
    new Route("/school",SchoolRouter)
];

export const excludedPaths: IExcludedPaths[] = [
    { path: '/auth/login', method: "POST" },
    { path: '/auth/signup', method: "POST" }
]