import { createToken } from "../../utility/authorize";
 import { sendEmail } from "../../utility/email";
 import { comparePassword, createHash, createPassword, decrypt, encrypt } from "../../utility/password";
import { USER_MESSAGE } from "../users/users.constants";
import usersRepo from "../users/users.repo";
import userService from "../users/users.service";
import { IUser } from "../users/users.types";
import { AUTH_ERRORS } from "./auth.responses";
import { AuthResponses, ICredentials, IReset } from "./auth.types";


const login = async (credentials: ICredentials) => {
    try {
        const user: any = await userService.getUser(credentials);
        if(!user) throw AUTH_ERRORS.NOT_FOUND;
        const isUser = await comparePassword(credentials.password, user.password);

        if (!isUser) {
            throw AUTH_ERRORS.NOT_FOUND
        }
        const token = createToken({ id: user._id, role: user.role });

        return {
            token,
            role: user.role
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

            username: ${user.username}
            password: ${password}
        
            
        `,"")

        return "Registered Successfully";
    } catch (e) {
        throw AUTH_ERRORS.INTERNAL;
    }

}
 
const changePassword=async(changedData:IReset)=>{
    try{
        if(changedData.newPassword!==changedData.confirmNewPassword)
        {throw AUTH_ERRORS.NOT_MATCH;}

        const user:any=await userService.getUSER(changedData.username)
        const sameUser=await comparePassword(changedData.oldPassword,user.password);
   if(!sameUser)
   {throw AUTH_ERRORS.NOT_FOUND;}
   else
   {
    const hashedPassword  = await createHash(changedData.newPassword);
    user.password=hashedPassword;
     await usersRepo.updatedUser(user);
    
     sendEmail(user.email, "Changed Password", `
     Hi, ${user.username},

     Your password has been changed.
     Please login using:

     username: ${user.username}
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

const forgotPassword=async (email:string) => {try
{
 const user:any=await userService.emailget(email);
 const hashid=encrypt(email);

     sendEmail(user.email, "Reset Password link", `
     Hi, ${user.username},

     Please reset your password using this link
    
 `,`<a href=http://localhost:3000/auth/reset/${hashid}> Click here`)
    
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
        const user:any=await userService.emailget(email)
    const hashedPassword  = await createHash(newPassword);
    user.password=hashedPassword;
     await usersRepo.updatedUser(user);
         
     sendEmail(user.email, "Changed Password", `
     Hi, ${user.username},

     Your password has been changed.
     Please login using:

     username: ${user.username}
     password: ${newPassword}
     
 `,"")
   return "Password Changed";
    }
}catch(e){
    throw e
}
}







export default {
 changePassword,
    login,
register,
resetPassword,
forgotPassword
}
