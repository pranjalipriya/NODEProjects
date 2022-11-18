"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class SchoolSchema {
    constructor() {
        this.schools = [];
    }
    create(school) {
        this.schools.push(Object.assign(Object.assign({}, school), { id: (0, uuid_1.v4)() }));
        return true;
    }
    get() {
        return this.schools;
    }
    getOne(id) {
        const school = this.schools.find(x => x.id === id);
        return school;
    }
    update(school) {
        const schoolIndex = this.schools.findIndex(a => a.id === school.id);
        if (schoolIndex !== -1) {
            this.schools[schoolIndex] = school;
            return true;
        }
        return false;
    }
    deleteOne(id) {
        const schoolIndex = this.schools.findIndex(a => a.id === id);
        if (schoolIndex !== -1) {
            this.schools.splice(schoolIndex, 1);
            return true;
        }
        return false;
    }
}
const schoolSchema = new SchoolSchema();
exports.default = schoolSchema;
//# sourceMappingURL=school.schema.js.map