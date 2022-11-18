"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HSN_MESSAGE = void 0;
const hsn_type_1 = require("./hsn.type");
exports.HSN_MESSAGE = {
    NOT_FOUND: new hsn_type_1.HsnResponse(404, "HSN NOT FOUND"),
    HSN_UPDATED: new hsn_type_1.HsnResponse(200, "HSN UPDATED"),
    HSN_CREATED: new hsn_type_1.HsnResponse(201, "HSN CREATED"),
    HSN_DELETED: new hsn_type_1.HsnResponse(200, "HSN DELETED")
};
//# sourceMappingURL=hsn.constants.js.map