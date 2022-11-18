import { createToken } from "../../utility/authorize";
import { sendEmail } from "../../utility/email";
import { comparePassword, createHash } from "../../utility/password";
import userSchema from "../users/user.schema";
import userService from "../users/user.service";
import { IUser } from "../users/user.types";
import { AUTH_ERRORS } from "./auth.responses";
import { AuthResponses, ICredentials } from "./auth.types";


const login = (credentials: ICredentials) => {
    const users = userService.getUsers();

    const user = users.find(
        u =>
            u.username === credentials.username &&
            comparePassword(credentials.password, u.password)
    );

    if (!user) {
        throw AUTH_ERRORS.NOT_FOUND
    }
    if (user.status !== 'approved') {
        throw AUTH_ERRORS.NOT_FOUND
    }

    const token = createToken({ id: user.id, role: user.role });

    return {
        token,
        role: user.role
    };
}

const register = (user: IUser) => {
    try {
        const originalPassword = user.password;
        user.password = createHash(user.password);

        userSchema.create(user);


        sendEmail(user.email, "login credentials", `
            Hi, ${user.username},

            Your account for the book distributing portal has been created.
            Please login at: bookdistributing.portal.com

            username: ${user.username}
            password: ${originalPassword}
        `)

        return "Registered Successfully";
    } catch (e) {
        throw AUTH_ERRORS.INTERNAL;
    }

}

const updateStatus =(updatedStatus: IUser)=> {
    const result = userSchema.updateStatus(updatedStatus);
    return result;
}

export default {
    login,
    register,
    updateStatus
}