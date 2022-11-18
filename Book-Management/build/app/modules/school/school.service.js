"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const school_constants_1 = require("./school.constants");
const school_schema_1 = require("./school.schema");
const uuid_1 = require("uuid");
const getSchool = () => {
    const schoolDatabase = school_schema_1.schoolSchema.getSchool();
    if (schoolDatabase) {
        return schoolDatabase;
    }
    else
        throw school_constants_1.SCHOOL_MESSAGE.NOT_FOUND;
};
const getSchoolById = (id) => {
    const schoolDatabase = school_schema_1.schoolSchema.getSchoolById(id);
    if (schoolDatabase) {
        return schoolDatabase;
    }
    else
        throw school_constants_1.SCHOOL_MESSAGE.NOT_FOUND;
};
const deleteSchoolById = (id) => {
    const result = school_schema_1.schoolSchema.deleteSchool(id);
    if (result) {
        return result;
    }
    else
        throw school_constants_1.SCHOOL_MESSAGE.NOT_FOUND;
};
const addSchool = (school) => {
    const classes = [];
    const subjects = [];
    for (let counter = +school.classFrom; counter <= +school.classTo; counter++) {
        classes.push({ className: counter, status: "none" });
    }
    for (let counter = 0; counter < +school.subject.length; counter++) {
        subjects.push({ subject: school.subject[counter], assignedClasses: [] });
    }
    const newSchool = {
        year: school.academicYear,
        schoolID: (0, uuid_1.v4)(),
        schoolName: school.name,
        classes: classes,
        subjects: subjects,
        status: "partial",
    };
    const createdSchool = school_schema_1.schoolSchema.addSchool(newSchool);
    if (createdSchool) {
        return true;
    }
    throw school_constants_1.SCHOOL_MESSAGE.NOT_ADDED;
};
const updateSchool = (updateDetail) => {
    const school = school_schema_1.schoolSchema.updateSchoolDetails(updateDetail);
    if (school) {
        const { classFrom, classTo, subjects } = updateDetail;
        const classesArray = [];
        for (let counter = +classFrom; counter <= +classTo; counter++) {
            classesArray.push({ className: counter });
        }
        for (let user of classesArray) {
            if (school === null || school === void 0 ? void 0 : school.classes.find((u) => u.className === user.className)) {
                continue;
            }
            else {
                school.classes.push(Object.assign(Object.assign({}, user), { status: "null" }));
            }
        }
        for (let subject of subjects) {
            if (school.subjects.find((s) => s.subject === subject)) {
                continue;
            }
            else {
                school.subjects.push({
                    subject: subject,
                    assignedClasses: [],
                });
            }
        }
        return school_constants_1.SCHOOL_MESSAGE.SCHOOL_UPDATED;
    }
    throw school_constants_1.SCHOOL_MESSAGE.NOT_FOUND;
};
exports.default = {
    addSchool,
    getSchool,
    getSchoolById,
    deleteSchoolById,
    updateSchool,
};
//# sourceMappingURL=school.service.js.map