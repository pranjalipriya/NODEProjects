import { NextFunction, Response, Request} from "express";




 const validateFactoryFunction=(source: 'body'|'params'|'query' , key:string) => {
    return (req: Request, res: Response, next: NextFunction) => {
     const value=(req[source] as any)[key];
     const error=`${key} Not Valid`

     if(!value){
        res.locals={...res.locals , [key]: error};
     }
                                                      
    }
}

export const body=(key: string) =>{
    validateFactoryFunction('body',key);}
export const params=(key: string) => {
    validateFactoryFunction('params',key)};
export const query=(key: string) => {
    validateFactoryFunction('query',key)};

export const validate =(req: Request,res: Response,next: NextFunction)=>{
   
 if(Object.keys(req.params).length)
    {
        next('error');
    }
    next();
}


