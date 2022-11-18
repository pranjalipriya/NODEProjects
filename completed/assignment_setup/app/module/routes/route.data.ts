import authRouter from '../role-management/role.routes';
import {Route,Routes} from '../routes/route.type';

export const routes: Routes =[
    new Route('/auth', authRouter),
]