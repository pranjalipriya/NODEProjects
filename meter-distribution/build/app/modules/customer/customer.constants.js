"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CUSTOMER_MESSAGE = void 0;
const customer_types_1 = require("./customer.types");
exports.CUSTOMER_MESSAGE = {
    NOT_FOUND: new customer_types_1.CustomerResponse(404, "CUSTOMER NOT FOUND"),
    CUSTOMER_UPDATED: new customer_types_1.CustomerResponse(200, "CUSTOMER UPDATED"),
    CUSTOMER_CREATED: new customer_types_1.CustomerResponse(201, "CUSTOMER CREATED"),
    CUSTOMER_DELETED: new customer_types_1.CustomerResponse(200, "CUSTOMER DELETED")
};
//# sourceMappingURL=customer.constants.js.map