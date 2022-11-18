import { v4 } from "uuid";
import { SCHOOL_MESSAGE } from "./school.constants";
import { IClass, ISchool, ISubject } from "./school.types";


class SchoolSchema {
    schools: ISchool[] = [];
    subjects: ISubject[] = [];


    createsubject(subject: ISubject) {
        this.subjects.push({ ...subject });
        return true;
    }

    getSubjects() {
        return this.subjects;
    }


    create(school: ISchool) {
        this.schools.push({ ...school, id: v4()});

        return true;
    }

    get() {
        return this.schools;
    }

    getOne(name: string) {
        const school = this.schools.find(x => x.name === name);

        return school;
    }
    deleteSubject(name:any){
        
            const subjectIndex = this.subjects.findIndex(a => a.name === name);
    
            if (subjectIndex !== -1) {
                this.subjects.splice(subjectIndex, 1);
                return true;
            }
    
            return false;
        
    
    }

    updateSchoolSubject(school: ISchool) {
        const schoolIndex = this.schools.findIndex(a => a.id === school.id);

        if (schoolIndex !== -1) {
            this.schools[schoolIndex].subject.push(school.subject as any);
            return true;
        }

        throw SCHOOL_MESSAGE.NOT_FOUND

    }

    deleteOne(id: string) {
        const schoolIndex = this.schools.findIndex(a => a.id === id);

        if (schoolIndex !== -1) {
            this.schools.splice(schoolIndex, 1);
            return true;
        }

        return false;
    }

    // createClass(classdata: IClass) {
    //     this.schools[classdata]= ({ ...classdata, id: v4()});

    //     return true;
    // } 


}

const schoolSchema = new SchoolSchema();

export default schoolSchema;
