import { v4 } from "uuid";
import { createHash } from "../../utility/password";
import { ROLES } from "./user.constants";
import { IStatus, IUser } from "./user.types";

class UserSchema {
  userDb: IUser[] = [
    {
      id: "1",
      username: "Arjun",
      password: createHash("123456789"),
      role: ROLES.ADMIN,
      email: "arjun@gmail.com",
      status: "approved",
    },
  ];

  get() {
    return this.userDb;
  }

  getWorkers() {
    return this.userDb.filter(
      (user) => user.status === "approved" && user.role != ROLES.ADMIN
    ).map((u)=>({id: u.id , username : u.username , assignedSchool : u.assignedSchool}));
  }

  create(user: IUser) {
    this.userDb.push({ ...user, id: v4(), role: "worker", status: "pending",assignedSchool:[] });
    return true;
  }

  getPendingRequest() {
    const details = this.userDb.filter((user) => user.status === "pending");
    return details;
  }


  assignSchoolToWorker(id: string,school:string[]){
    const workerDetails = userSchema.userDb.find((user) =>user.id===id);
    if (workerDetails) {
        workerDetails.assignedSchool=school;
        return true;
    }
    return false;
  }

  update(status: IStatus) {
    const user = this.userDb.find((u) => u.id === status.id);
    if (user) {
      user.status = status.status;
      return user;
    }
    return false;
  }

}

const userSchema = new UserSchema();

export default userSchema;
