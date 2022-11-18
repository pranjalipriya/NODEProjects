import { createToken } from "../../utility/authorize";
// import { sendEmail } from "../../utility/email";
import { comparePassword, createHash } from "../../utility/password";
// import { comparePassword, createHash } from "../../utility/password";
import userService from "../users/users.service";
import { IUser } from "../users/users.types";
import { AUTH_ERRORS } from "./auth.responses";
import { AuthResponses, ICredentials } from "./auth.types";


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
        

        // sendEmail(user.email, "login credentials", `
        //     Hi, ${user.username},

        //     Your account for the reward portal has been created.
        //     Please login using:

        //     username: ${user.username}
        //     password: ${password}
        // `)

        return "Registered Successfully";
    } catch (e) {
        throw AUTH_ERRORS.INTERNAL;
    }

}





export default {
    login,
register
}
