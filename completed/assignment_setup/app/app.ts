import {registerRoutes} from './module/routes/route.register';

import  express from 'express';

export const startServer=()=>{
    const app=express();

    registerRoutes(app);

    const {PORT}=process.env;
    app.listen(PORT, () => console.log(`listening on port ${PORT}`)
    )
}