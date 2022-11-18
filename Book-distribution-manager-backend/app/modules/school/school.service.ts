import { SCHOOL_MESSAGE } from "./school.constants";
import schoolSchema from "./school.schema";
import { ISchool, ISubject } from "./school.types";



const create = (asset: ISchool) => schoolSchema.create(asset);
const createsubject = (subject: ISubject) => schoolSchema.createsubject(subject);
const getAllSubjects = () => {
    const result=schoolSchema.getSubjects();
    if(result.length!=0)
    return result; 
else
throw SCHOOL_MESSAGE.NOT_FOUND; 
}
const deleteSubject=(name:string)=>{
    const didDelete=schoolSchema.deleteSubject(name);
    if (didDelete) {
        return SCHOOL_MESSAGE.SUBJECT_DELETED;
    }

    throw SCHOOL_MESSAGE.NOT_FOUND;
}
const getAll = () => {
    const result=schoolSchema.get();
    if(result.length!=0)
    return result; 
else
throw SCHOOL_MESSAGE.NOT_FOUND;
}

const getOne = (name: string) => {
    const school = schoolSchema.getOne(name);

    if (school) {
        return school;
    }

    throw SCHOOL_MESSAGE.NOT_FOUND;
}

//  const update = () => {schoolSchema.update(school)}



export default {
    create,
    getAll,
    getOne,
    createsubject,
    getAllSubjects,
    deleteSubject
}
