"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const express_1 = __importDefault(require("express"));
const route_register_1 = require("./modules/routes/route.register");
const startServer = () => {
    const app = (0, express_1.default)();
    const { PORT } = process.env;
    (0, route_register_1.registerRoutes)(app);
    app.listen(PORT, () => console.log(`SERVER IS LISTENING ON PORT ${PORT}`));
};
exports.startServer = startServer;
//# sourceMappingURL=app.js.map