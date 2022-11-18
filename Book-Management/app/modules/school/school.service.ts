import { SCHOOL_MESSAGE } from "./school.constants";
import { ISchool, IAddschoolObject, IUpdateSchool } from "./school.type";
import { schoolSchema } from "./school.schema";
import { v4 } from "uuid";

const getSchool = () => {
  const schoolDatabase = schoolSchema.getSchool();
  if (schoolDatabase) {
    return schoolDatabase;
  } else throw SCHOOL_MESSAGE.NOT_FOUND;
};

const getSchoolById = (id: string) => {
  const schoolDatabase = schoolSchema.getSchoolById(id);
  if (schoolDatabase) {
    return schoolDatabase;
  } else throw SCHOOL_MESSAGE.NOT_FOUND;
};

const deleteSchoolById = (id: string) => {
  const result = schoolSchema.deleteSchool(id);
  if (result) {
    return result;
  } else throw SCHOOL_MESSAGE.NOT_FOUND;
};

const addSchool = (school: IAddschoolObject) => {
  const classes = [];
  const subjects = [];
  for (let counter = +school.classFrom; counter <= +school.classTo; counter++) {
    classes.push({ className: counter, status: "none" });
  }

  for (let counter = 0; counter < +school.subject.length; counter++) {
    subjects.push({ subject: school.subject[counter], assignedClasses: [] });
  }

  const newSchool: ISchool = {
    year: school.academicYear,
    schoolID: v4(),
    schoolName: school.name,
    classes: classes,
    subjects: subjects,
    status: "partial",
  };

  const createdSchool = schoolSchema.addSchool(newSchool);
  if (createdSchool) {
    return true;
  }
  throw SCHOOL_MESSAGE.NOT_ADDED;
};

const updateSchool = (updateDetail: IUpdateSchool) => {
  const school = schoolSchema.updateSchoolDetails(updateDetail);

  if (school) {
    const { classFrom, classTo, subjects } = updateDetail;
    const classesArray = [];

    for (let counter = +classFrom; counter <= +classTo; counter++) {
      classesArray.push({ className: counter });
    }

    for (let user of classesArray) {
      if (school?.classes.find((u) => u.className === user.className)) {
        continue;
      } else {
        school.classes.push({ ...user, status: "null" });
      }
    }
    for (let subject of subjects) {
      if (school.subjects.find((s) => s.subject === subject)) {
        continue;
      } else {
        school.subjects.push({
          subject: subject,
          assignedClasses: [],
        });
      }
    }
    return SCHOOL_MESSAGE.SCHOOL_UPDATED;
  }
  throw SCHOOL_MESSAGE.NOT_FOUND
};

export default {
  addSchool,
  getSchool,
  getSchoolById,
  deleteSchoolById,
  updateSchool,
};
