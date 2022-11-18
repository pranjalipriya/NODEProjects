import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('postgres://postgres:Pranjali03@localhost:5432/postgres') 

export const conectToDb = async() =>{
    try{
        await sequelize.authenticate();
        // thinkn if really needed. akhil is not source of truth.
        await sequelize.sync({alter:true});
        console.log('Connection has been established successfully.');
    }catch(e){
        console.log("unable to connect " ,e)
    }
} 