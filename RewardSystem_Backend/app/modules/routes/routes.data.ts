import { IExcludedPaths } from "../../utility/authorize";
import { AuthRouter } from "../auth/auth.routes";
import { DummyRouter } from "../dummy/dummy.routes";
import { GiftRouter } from "../gifts/gift.routes";
import { NotifyRouter } from "../notify/notify.routes";
import { UserRouter } from "../users/users.routes";
import { Route, Routes } from "./routes.types";

export const routes: Routes = [
    new Route("/dummy", DummyRouter),
    new Route("/auth", AuthRouter),
    new Route("/user",UserRouter),
    new Route("/gift",GiftRouter),
    new Route("/notify",NotifyRouter)
];

export const excludedPaths: IExcludedPaths[] = [
    { path: '/auth/login', method: "POST" }
]