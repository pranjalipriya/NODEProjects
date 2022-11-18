"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/generateticket", (req, res, next) => {
    res.send("Ticket created Successfully");
});
exports.default = router;
//# sourceMappingURL=support.routes.js.map