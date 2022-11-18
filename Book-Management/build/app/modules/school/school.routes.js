"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchoolRouter = void 0;
const express_1 = require("express");
const authorize_1 = require("../../utility/authorize");
const response_handler_1 = require("../../utility/response-handler");
const user_constants_1 = require("../user/user.constants");
const school_service_1 = __importDefault(require("./school.service"));
const school_constants_1 = require("./school.constants");
const school_validation_1 = require("./school.validation");
exports.SchoolRouter = (0, express_1.Router)();
exports.SchoolRouter.get('/getSchoolDatabase', (0, authorize_1.permit)([user_constants_1.ROLES.ADMIN, user_constants_1.ROLES.WORKER]), (req, res, next) => {
    try {
        const schoolDatabase = school_service_1.default.getSchool();
        res.send(new response_handler_1.ResponseHandler(schoolDatabase));
    }
    catch (e) {
        next(e);
    }
});
exports.SchoolRouter.post('/addSchool', school_validation_1.SchoolValidator, (0, authorize_1.permit)([user_constants_1.ROLES.ADMIN]), (req, res, next) => {
    try {
        const didCreateSchool = school_service_1.default.addSchool(req.body);
        if (didCreateSchool) {
            res.send(new response_handler_1.ResponseHandler(school_constants_1.SCHOOL_MESSAGE.SCHOOL_ADDED));
        }
    }
    catch (e) {
        next(e);
    }
});
exports.SchoolRouter.get('/:id', (0, authorize_1.permit)([user_constants_1.ROLES.ADMIN]), (req, res, next) => {
    try {
        const { id } = req.params;
        const schoolDetails = school_service_1.default.getSchoolById(id);
        if (schoolDetails) {
            res.send(new response_handler_1.ResponseHandler(schoolDetails));
        }
    }
    catch (e) {
        next(e);
    }
});
exports.SchoolRouter.delete('/:id', (0, authorize_1.permit)([user_constants_1.ROLES.ADMIN]), (req, res, next) => {
    try {
        const { id } = req.params;
        const schoolDetails = school_service_1.default.deleteSchoolById(id);
        if (schoolDetails) {
            res.send(new response_handler_1.ResponseHandler(school_constants_1.SCHOOL_MESSAGE.SCHOOL_DELETED));
        }
    }
    catch (e) {
        next(e);
    }
});
exports.SchoolRouter.put('/updateClass', (0, authorize_1.permit)([user_constants_1.ROLES.ADMIN]), (req, res, next) => {
    try {
        // const {id,classFrom,classTo,subjects}=req.body as IUpdateSchool;
        const result = school_service_1.default.updateSchool(req.body);
        if (result) {
            return res.send(new response_handler_1.ResponseHandler(school_constants_1.SCHOOL_MESSAGE.SCHOOL_UPDATED));
        }
        throw school_constants_1.SCHOOL_MESSAGE.NOT_FOUND;
    }
    catch (e) {
        next(e);
    }
});
//# sourceMappingURL=school.routes.js.map