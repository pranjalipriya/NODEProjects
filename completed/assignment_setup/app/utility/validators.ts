import { NextFunction, Response, Request} from "express";

 const validateFactoryFunction=(source: 'headers' , key:string) => {
    return (req: Request, res: Response, next: NextFunction) => {
     const value=(req[source])[key];
     if(value==='superAdmin')
     {
        console.log("SuperAdmin");
     }
     if(value==='admin')
     {
        console.log("Admin");
     }

     if(value==='user')
     {
        console.log("user");
     }


    //  if(!value){
    //     const error=`${key} Not Valid`
    //     res.locals={...res.locals , [key]: error};
    //  }
                                                      
    }
}

export const header=(key: string) =>{
    validateFactoryFunction('headers',key);}


export const validate =(req: Request,res: Response,next: NextFunction)=>{
   
 if(Object.keys(req.params).length)
    {
        next('error');
    }
    next();
}
