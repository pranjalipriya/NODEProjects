import express from 'express';
import { conectToDb, sequelize } from './connections/postgre.connect';
import { registerRoutes } from './modules/routes/routes.register';

export const startServer = async () => {
    try {
        const app = express();
        await conectToDb();
           
        registerRoutes(app);
        

        const { PORT } = process.env;
        app.listen(
            PORT,
            () => console.log(`SERVER STARTED ON PORT: ${PORT}`)
        )
    } catch (e) {
        console.error(e);
        console.error('COULD NOT START SERVER');
        process.exit(1);
    }
}