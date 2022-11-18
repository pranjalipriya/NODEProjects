"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const auth_routes_1 = __importDefault(require("./modules/auth/auth.routes"));
const asset_routes_1 = __importDefault(require("./modules/asset/asset.routes"));
const routes_types_1 = require("./routes.types");
exports.routes = [
    new routes_types_1.Route("/auth", auth_routes_1.default),
    new routes_types_1.Route("/assets", asset_routes_1.default)
    // {path:"/auth", router: AuthRouter},
    // { path: "/asset",router: AssetRouter}
];
//# sourceMappingURL=routes.data.js.map