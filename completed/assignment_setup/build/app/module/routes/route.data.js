"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const role_routes_1 = __importDefault(require("../role-management/role.routes"));
const route_type_1 = require("../routes/route.type");
exports.routes = [
    new route_type_1.Route('/auth', role_routes_1.default),
];
//# sourceMappingURL=route.data.js.map