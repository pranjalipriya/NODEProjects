"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const assets = [];
router.post("/", (req, res, next) => {
    const asset = req.body;
    assets.push(asset);
    res.send("ASSET CREATED");
});
router.get("/", (req, res, next) => {
    res.send(assets);
});
router.put("/", (req, res, next) => {
    res.send("ASSET UPDATED");
});
router.delete("/", (req, res, next) => {
    res.send("ASSET CREATED");
});
exports.default = router;
//# sourceMappingURL=asset.routes.js.map