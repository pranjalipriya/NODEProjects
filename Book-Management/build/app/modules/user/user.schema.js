"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const password_1 = require("../../utility/password");
const user_constants_1 = require("./user.constants");
class UserSchema {
    constructor() {
        this.userDb = [
            {
                id: "1",
                username: "Arjun",
                password: (0, password_1.createHash)("123456789"),
                role: user_constants_1.ROLES.ADMIN,
                email: "arjun@gmail.com",
                status: "approved",
            },
        ];
    }
    get() {
        return this.userDb;
    }
    getWorkers() {
        return this.userDb.filter((user) => user.status === "approved" && user.role != user_constants_1.ROLES.ADMIN).map((u) => ({ id: u.id, username: u.username, assignedSchool: u.assignedSchool }));
    }
    create(user) {
        this.userDb.push(Object.assign(Object.assign({}, user), { id: (0, uuid_1.v4)(), role: "worker", status: "pending", assignedSchool: [] }));
        return true;
    }
    getPendingRequest() {
        const details = this.userDb.filter((user) => user.status === "pending");
        return details;
    }
    assignSchoolToWorker(id, school) {
        const workerDetails = userSchema.userDb.find((user) => user.id === id);
        if (workerDetails) {
            workerDetails.assignedSchool = school;
            return true;
        }
        return false;
    }
    update(status) {
        const user = this.userDb.find((u) => u.id === status.id);
        if (user) {
            user.status = status.status;
            return user;
        }
        return false;
    }
}
const userSchema = new UserSchema();
exports.default = userSchema;
//# sourceMappingURL=user.schema.js.map