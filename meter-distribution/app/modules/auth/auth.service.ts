import { createToken } from "../../utility/authorize";
import { decrypt, encrypt, sendEmail } from "../../utility/email";
import { comparePassword, createHash } from "../../utility/password";
import { USER_MESSAGE } from "../users/user.constant";
import userRepo from "../users/user.repo";
import userService from "../users/user.service";
import { IUser } from "../users/user.type";
import { AUTH_ERRORS } from "./auth.constants";
import { ICredential, IReset } from "./auth.types";

const login=async(credentials:ICredential)=>{
    try {
        const user = await userService.getUser(credentials.email);
        if(!user) throw AUTH_ERRORS.NOT_FOUND;
        const isUser = await comparePassword(credentials.password, user?.getDataValue("password"));
        if (!isUser) {
            throw AUTH_ERRORS.NOT_FOUND
        }
        const role=user.getDataValue("role")
        const id=user.getDataValue('id');
        const token = createToken({ id: user.getDataValue('id') , role: role});
        return {
            token,
            role,
            id
        }

    }
    catch (e) {
        throw e;
    }

}
const register = async(user: IUser) => {
    try {

        const password=await userService.create(user);

        sendEmail(user.email, "Login Credentials", `
            Hi, ${user.username},

            Your account has been created.
            Please login using:

            username: ${user.email}
            password: ${password}
        
            
        `,"")

        return USER_MESSAGE.USER_CREATED;
    } catch (e) {
        throw AUTH_ERRORS.INTERNAL;
    }

}


const forgotPassword=async (email:string) => {try
    {
     const user:any=await userService.getUser(email);
     const hashid=encrypt(email);
    const name= user.getDataValue("username");
         sendEmail(email, "Reset Password link", `
         Hi, ${name},
    
         Please reset your password using this link
        
     `,`<a href=http://localhost:3000/auth/reset/${hashid}> Click here`)
     return "mail send successfully";
        
    }catch(e){
       throw e
    }
    }
    const resetPassword=async(hashid:string,newPassword:string, confirmNewPassword:string)=>{
        try{
            if(newPassword!==confirmNewPassword)
            {throw AUTH_ERRORS.NOT_MATCH;}
             
       else
       {
        const email:string= decrypt(hashid)
            const user:any=await userRepo.getUser(email)
        const hashedPassword  = await createHash(newPassword);
        user.password=hashedPassword;
         await userRepo.updatedUser(user.getDataValue("password"),email);
             
         sendEmail(email, "Changed Password", `
         Hi, ${user.getDataValue("username")},
    
         Your password has been changed.
         Please login using:
    
         username: ${user.email}
         password: ${newPassword}
         
     `,"")
       return "Password has been reset";
        }
    }catch(e){
        throw e
    }
    }


    const changePassword=async(changedData:IReset)=>{
        try{
            if(changedData.newPassword!==changedData.confirmNewPassword)
            {throw AUTH_ERRORS.NOT_MATCH;}
    
            const user:any=await userService.getUser(changedData.email)
            const sameUser=await comparePassword(changedData.oldPassword,user.getDataValue("password"));
       if(!sameUser)
       {throw AUTH_ERRORS.NOT_FOUND;}
       else
       {
        const hashedPassword  = await createHash(changedData.newPassword);
        user.password=hashedPassword;
        console.log(user.password,changedData.newPassword);

         await userRepo.updatedUser(user.getDataValue("password"),changedData.email);
        
         sendEmail(changedData.email, "Changed Password", `
         Hi, ${user.getDataValue("username")},
    
         Your password has been changed.
         Please login using:
    
         username: ${user.getDataValue("email")}
         password: ${changedData.newPassword}
         
     `,"")
       return "Password Changed";
       }
    }
    catch(e)
    {
        throw e;
    }
    }


export default{
    login,
    register,
    forgotPassword,
    resetPassword,
    changePassword
}