import { IExcludedPaths } from "../../utility/authorize";
import { AnimeRouter } from "../anime/anime.routes";
import { AuthRouter } from "../auth/auth.routes";
//import { UserRouter } from "../users/users.routes";
import { Route, Routes } from "./routes.types";

export const routes: Routes = [
    new Route("/auth", AuthRouter),
    //new Route("/user",UserRouter),
    new Route("/anime",AnimeRouter),
];

export const excludedPaths: IExcludedPaths[] = [
    { path: '/auth/login', method: "POST" },
    { path: '/auth/reset/', method: "POST" }
]