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
// import { createPassword } from "../../utility/password";
const user_schema_1 = __importDefault(require("./user.schema"));
const getUsers = () => user_schema_1.default.get();
const getPendingRequests = () => user_schema_1.default.getRequest("pending");
const getApprovedRequests = () => user_schema_1.default.getRequest("approved");
const getRejectedRequests = () => user_schema_1.default.getRequest("rejected");
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    user_schema_1.default.create(Object.assign({}, user));
});
exports.default = {
    getUsers,
    getPendingRequests,
    getRejectedRequests,
    getApprovedRequests,
    createUser
};
//# sourceMappingURL=user.service.js.map