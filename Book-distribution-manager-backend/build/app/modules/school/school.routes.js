"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const response_handler_1 = require("../../utility/response-handler");
const school_constants_1 = require("./school.constants");
const school_schema_1 = __importDefault(require("./school.schema"));
const school_service_1 = __importDefault(require("./school.service"));
const router = (0, express_1.Router)();
router.post("/", (req, res, next) => {
    console.log(req.body);
    school_service_1.default.create(req.body);
    res.send(new response_handler_1.ResponseHandler(school_constants_1.SCHOOL_MESSAGE.SCHOOL_CREATED));
});
router.get("/", (req, res, next) => {
    const result = school_service_1.default.getAll();
    res.send(new response_handler_1.ResponseHandler(result));
});
router.get("/:id", (req, res, next) => {
    try {
        const result = school_service_1.default.getOne(req.params.id);
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
});
router.put("/", (req, res, next) => {
    const updatedSchool = req.body;
    const didUpdate = school_schema_1.default.update(updatedSchool);
    if (didUpdate) {
        return res.send(new response_handler_1.ResponseHandler(school_constants_1.SCHOOL_MESSAGE.SCHOOL_UPDATED));
    }
    next(school_constants_1.SCHOOL_MESSAGE.NOT_FOUND);
});
router.delete("/:id", (req, res, next) => {
    const { id } = req.params;
    const didDelete = school_schema_1.default.deleteOne(id);
    if (didDelete) {
        return res.status(404).send(new response_handler_1.ResponseHandler(school_constants_1.SCHOOL_MESSAGE.SCHOOL_DELETED));
    }
    next(school_constants_1.SCHOOL_MESSAGE.NOT_FOUND);
});
exports.default = router;
//# sourceMappingURL=school.routes.js.map