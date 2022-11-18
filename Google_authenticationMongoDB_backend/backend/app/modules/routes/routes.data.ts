import { IExcludedPaths } from "../../utility/authorize";
import { AuthRouter } from "../auth/auth.routes";
import { AnimeRouter } from "../anime-list/anime.routes";

// import { UserRouter } from "../users/user.routes";
import { Route, Routes } from "./routes.types";


export const routes: Routes = [
     new Route("/auth", AuthRouter),
    //  new Route("/user", UserRouter),
     new Route("/anime",AnimeRouter),
];

export const excludedPaths: IExcludedPaths[] = [
    { path: '/auth/login', method: "POST" },
    {path: "/auth/forgot-password",method:'POST'},
    {path:'/auth/reset',method: 'POST'}
]