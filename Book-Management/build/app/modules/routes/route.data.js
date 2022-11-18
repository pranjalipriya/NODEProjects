"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excludedPaths = exports.routes = void 0;
const route_types_1 = require("./route.types");
const auth_route_1 = require("../auth/auth.route");
const user_routes_1 = require("../user/user.routes");
const school_routes_1 = require("../school/school.routes");
exports.routes = [
    new route_types_1.Route("/auth", auth_route_1.AuthRouter),
    new route_types_1.Route('/user', user_routes_1.UserRouter),
    new route_types_1.Route("/school", school_routes_1.SchoolRouter)
];
exports.excludedPaths = [
    { path: '/auth/login', method: "POST" },
    { path: '/auth/signup', method: "POST" }
];
//# sourceMappingURL=route.data.js.map