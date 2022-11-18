"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const express_1 = require("express");
const route_data_1 = require("./route.data");
const cors_1 = __importDefault(require("cors"));
const response_handler_1 = require("../../utility/response-handler");
const authorize_1 = require("../../utility/authorize");
const registerRoutes = (app) => {
    app.use((0, express_1.json)());
    app.use((0, cors_1.default)());
    app.use((0, authorize_1.authorize)(route_data_1.excludedPaths));
    for (let route of route_data_1.routes) {
        app.use(route.path, route.router);
    }
    app.use((err, req, res, next) => {
        res.status(err.statusCode || 500).send(new response_handler_1.ResponseHandler(null, err));
    });
};
exports.registerRoutes = registerRoutes;
//# sourceMappingURL=route.register.js.map