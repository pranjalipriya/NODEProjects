"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const email_1 = require("../../utility/email");
const password_1 = require("../../utility/password");
const user_constants_1 = require("./user.constants");
const user_schema_1 = __importDefault(require("./user.schema"));
const getUsers = () => user_schema_1.default.get();
const getAllWorkers = () => user_schema_1.default.getWorkers();
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const password = yield (0, password_1.createPassword)();
    user_schema_1.default.create(Object.assign(Object.assign({}, user), { password }));
});
const updateStatus = (status) => {
    const user = user_schema_1.default.update(status);
    if (user) {
        if (user.status === "approved") {
            (0, email_1.sendEmail)(user.email, "Login credentials", `Hii ${user.username},
                      your account has been successfully created, Please login with your credentials`);
        }
        return user_constants_1.USER_MESSAGE.STATUS_UPDATED;
    }
    throw user_constants_1.USER_MESSAGE.NOT_FOUND;
};
const assignSchool = (id, school) => {
    const assigned = user_schema_1.default.assignSchoolToWorker(id, school);
    if (assigned) {
        return assigned;
    }
    else {
        throw user_constants_1.USER_MESSAGE.NOT_FOUND;
    }
};
const getAllPendingRequest = () => {
    const userDetails = [];
    const details = user_schema_1.default.getPendingRequest();
    if (details) {
        for (let user of details) {
            userDetails.push({
                userID: user.id,
                username: user.username,
                userEmail: user.email,
                userStatus: user.status,
            });
        }
        return userDetails;
    }
    throw user_constants_1.USER_MESSAGE.NO_PENDING_REQUEST;
};
exports.default = {
    getUsers,
    createUser,
    getAllPendingRequest,
    updateStatus,
    getAllWorkers,
    assignSchool,
};
//# sourceMappingURL=user.service.js.map