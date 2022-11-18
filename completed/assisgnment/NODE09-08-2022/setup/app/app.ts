import express, { NextFunction,Request,Response } from 'express';

export const startServer=()=>{
const app=express();

app.get("/message",(req,res,next)=>{
    res.send("abcd");
    next();
})

app.post("/message",(req,res,next)=>{
    res.send("abcd");
    next();
})

app.use("/message",(req,res,next)=>{
    res.send("abcd");
    next();
})

//this is a global middleware
//any request that comes in , this function will be used since the request is not defined here 
app.use((req,res,next)=>{
 res.send("Server Working"); //this does not stop the execution of thefunction
 console.log("middleware works"); //this works
}); 

app.use((err:any,req:Request,res:Response,next:NextFunction)=>{
    res.send("Server Working"); //this does not stop the execution of thefunction
    console.log("middleware works"); //this works
   }); 
   


// app.use((req,res,next)=>{
//     res.send("Server Working");//cant send more than one response to a request
// }); this will never be used
//but console.log in this will work fine if next are used in previous function ie will get exectuted


const{PORT}=process.env;
app.listen(
    PORT,
    ()=>console.log(`SERVER STARTED ON PORT: ${PORT}`)
);
}