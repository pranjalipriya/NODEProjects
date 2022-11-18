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
const password_1 = require("../../utility/password");
const hsn_service_1 = __importDefault(require("../HSN/hsn.service"));
const roles_constants_1 = require("../roles/roles.constants");
const users_repo_1 = __importDefault(require("./users.repo"));
const getUser = (credentials) => __awaiter(void 0, void 0, void 0, function* () { return yield users_repo_1.default.get(credentials); });
const create = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        user.username = user.email.split("@")[0] + Math.floor(Math.random() * 100);
        const { password, hashedPassword } = yield (0, password_1.createPassword)();
        user.password = hashedPassword;
        user.role = roles_constants_1.ROLES[user.role];
        console.log("user", user);
        const result = yield users_repo_1.default.create(user);
        console.log(result);
        return password;
    }
    catch (error) {
        throw error;
    }
});
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield users_repo_1.default.getUsers();
    if (user) {
        return user;
    }
});
const getHSN = () => __awaiter(void 0, void 0, void 0, function* () {
    const hsn = yield hsn_service_1.default.getHsn();
});
const createHsn = (hsn) => __awaiter(void 0, void 0, void 0, function* () {
    yield hsn_service_1.default.create(hsn);
});
exports.default = {
    getUsers,
    getUser,
    create,
    getHSN,
    createHsn
};
//# sourceMappingURL=users.service.js.map