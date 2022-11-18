import express from "express";
import { registerRoutes } from "./modules/routes/route.register";

export const startServer=()=>{

    const app =express();
    const {PORT} =process.env;
    
    registerRoutes(app);


    app.listen(
        PORT,
        ()=>console.log(`SERVER IS LISTENING ON PORT ${PORT}`)
    )
}