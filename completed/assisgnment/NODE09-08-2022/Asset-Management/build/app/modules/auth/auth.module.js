"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/signup", (req, res, next) => {
    res.send("SIGN UP SUCCESSFUL");
});
router.post("/login", (req, res, next) => {
    res.send("LOGIN SUCCESSFUL");
});
exports.default = router;
//# sourceMappingURL=auth.module.js.map