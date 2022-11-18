"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const routes_data_1 = require("./routes.data");
const registerRoutes = (app) => {
    for (let route of routes_data_1.routes) {
        app.use(route.path, route.router);
    }
};
exports.registerRoutes = registerRoutes;
//# sourceMappingURL=routes.register.js.map