"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schoolSchema = void 0;
class SchoolSchema {
    constructor() {
        this.schoolDb = [
            {
                year: "2022",
                schoolID: "1",
                schoolName: "ST. THOMAS SCHOOL",
                classes: [
                    { className: 1, status: "none" },
                    { className: 2, status: "none" },
                ],
                subjects: [
                    {
                        subject: "English",
                        assignedClasses: [1, 2, 3, 4, 5],
                    },
                    {
                        subject: "Math",
                        assignedClasses: [1, 2, 3, 4, 5],
                    },
                ],
                status: "none",
                schoolStatus: "Active"
            },
        ];
    }
    addSchool(finalObject) {
        this.schoolDb.push(Object.assign(Object.assign({}, finalObject), { schoolStatus: "Active" }));
        return true;
    }
    getSchool() {
        return this.schoolDb.filter((school) => school.schoolStatus === "Active");
    }
    getSchoolById(id) {
        const details = this.schoolDb.find((s) => s.schoolID === id);
        {
            return details;
        }
    }
    deleteSchool(id) {
        const school = this.schoolDb.find((a) => a.schoolID === id);
        if (school) {
            school.schoolStatus = "Inactive";
            return true;
        }
        return false;
    }
    updateSchoolDetails(updateDetail) {
        const { id } = updateDetail;
        const school = this.schoolDb.find((a) => a.schoolID === id);
        if (school) {
            return school;
        }
        return false;
    }
}
exports.schoolSchema = new SchoolSchema();
//# sourceMappingURL=school.schema.js.map