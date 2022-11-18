"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const express_1 = __importDefault(require("express"));
const routes_register_1 = require("./modules/routes/routes.register");
const startServer = () => {
    const app = (0, express_1.default)();
    (0, routes_register_1.registerRoutes)(app);
    //signup would be a post method since it sends the value 
    const { PORT } = process.env;
    app.listen(PORT, () => console.log(`Starting server on port ${PORT}`));
};
exports.startServer = startServer;
//create a module similar to auth = assests and support and use appropriate methods
//# sourceMappingURL=app.js.map