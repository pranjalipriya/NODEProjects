"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/", (req, res, next) => {
    res.send("ASSET CREATED");
});
router.get("/", (req, res, next) => {
    res.send("HERE IS THE ASSET LIST");
});
router.put("/", (req, res, next) => {
    res.send("ASSET UPDATED");
});
router.delete("/", (req, res, next) => {
    res.send("ASSET CREATED");
});
exports.default = router;
//# sourceMappingURL=asset.module.js.map