import express from 'express';
import registerRoute from './route.register.ts';

export const startServer=()=> {
    const app=express();
    registerRoute(app);
    const {PORT}=process.env;
    app.listen(PORT,
         ()=> console.log('listening on port '+PORT));
}