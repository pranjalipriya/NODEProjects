"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const password_1 = require("../../utility/password");
const user_constants_1 = require("./user.constants");
class UserSchema {
    get() {
        return UserSchema.userDb;
    }
    getRequest(requestStatus) {
        let Request = [];
        for (let index = 0; index < UserSchema.userDb.length; index++) {
            if (UserSchema.userDb[index].status === requestStatus)
                Request.push(Object.assign({}, UserSchema.userDb[index]));
        }
        return Request;
    }
    create(user) {
        UserSchema.userDb.push(Object.assign(Object.assign({}, user), { id: (0, uuid_1.v4)(), status: "pending", role: "worker" }));
        return true;
    }
    update(user) {
        const userIndex = UserSchema.userDb.findIndex(a => a.id === user.id);
        if (userIndex !== -1) {
            if (user.status === "1") {
                user.status = "approved";
                UserSchema.userDb[userIndex] = user;
                return true;
            }
            if (user.status === "0") {
                user.status = "rejected";
                UserSchema.userDb[userIndex] = user;
                return true;
            }
        }
        return false;
    }
}
UserSchema.userDb = [
    { id: "1", username: "aniruddha", password: (0, password_1.createHash)("123"), role: user_constants_1.ROLES.ADMIN, email: "xyz@gmail.com", status: "approved" }
];
const userSchema = new UserSchema();
exports.default = userSchema;
//# sourceMappingURL=user.schema.js.map