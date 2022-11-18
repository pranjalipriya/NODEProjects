import AuthRouter from './modules/auth/auth.routes';
import AssetRouter from './modules/asset/asset.routes';
import {Route ,Routes} from './routes.types';

export const routes: Routes =[
    new Route("/auth", AuthRouter),
    new Route("/assets", AssetRouter)
]