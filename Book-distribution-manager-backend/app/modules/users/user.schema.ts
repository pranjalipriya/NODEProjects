import { request } from "express";
import { v4 } from "uuid";
import { createHash } from "../../utility/password";
import { ResponseHandler } from "../../utility/response-handler";
import { ROLES } from "./user.constants";
import { USER_MESSAGE } from "./user.responses";
import userService from "./user.service";
import { IUser, Role } from "./user.types";


class UserSchema {
    public static userDb: IUser[] = [
        { id: "1", username: "aniruddha", password: createHash("123"), role: ROLES.ADMIN, email: "xyz@gmail.com", status: "approved" }
    ];

    get() {
        return UserSchema.userDb;
    }

    getRequest(requestStatus: string) {
        return UserSchema.userDb.filter(u => u.status === requestStatus && u.role !== ROLES.ADMIN);
    }

    create(user: IUser) {
        // status and role has to be assigned in service
        UserSchema.userDb.push({ ...user, id: v4(), status: "pending", role: "a1fb54a0-659c-423d-81d5-1cda568459db" });

        return true;
    }

    updateStatus(user: IUser) {
        const userIndex = UserSchema.userDb.findIndex(a => a.id === user.id);
        
       // has to be in service
        if (userIndex !== -1) {
            if (user.status === "approved") {
                UserSchema.userDb[userIndex].status = "approved";
                return true;
            }
            if (user.status === "rejected") {
                UserSchema.userDb[userIndex].status = "rejected";
                return true;
            }
        }

        return false;

    }
    assignSchoolToWorker(id: string,school:string[]){
        const workerDetails = UserSchema.userDb.find((user) =>user.id===id);
        if (workerDetails) {
            workerDetails.assignedSchool=school;
            return true;
        }
        return false;
      }
}

const userSchema = new UserSchema();

export default userSchema;