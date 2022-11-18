"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const route_data_1 = require("./route.data");
const registerRoutes = (app) => {
    for (let route of route_data_1.routes) {
        app.use(route.path, route.router);
    }
    const validUser = ["admin", "superAdmin", "user"];
    app.use('/', (req, res, next) => {
        for (const role in validUser) {
            if (req.headers["role"] === role) {
                res.send("global middleware");
            }
        }
    });
    // app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    //     res.status(err.statusCode || 500).send(new ResponseHandler(null, err));
    // })
};
exports.registerRoutes = registerRoutes;
//# sourceMappingURL=route.register.js.map