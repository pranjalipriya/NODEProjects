import express from 'express';
import { registerRoutes } from './modules/routes/routes.register';

export const startServer=()=>{
    const app=express();

    registerRoutes(app);

//signup would be a post method since it sends the value 


    const {PORT}=process.env;
    app.listen(PORT,()=>console.log(`Starting server on port ${PORT}`));

}


//create a module similar to auth = assests and support and use appropriate methods