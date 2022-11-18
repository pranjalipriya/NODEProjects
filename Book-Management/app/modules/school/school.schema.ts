import { v4 } from "uuid";
import userSchema from "../user/user.schema";
import { ISchool, IUpdateSchool } from "./school.type";
class SchoolSchema {
  schoolDb: ISchool[] = [
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
      schoolStatus : "Active"
    },
  ];

  addSchool(finalObject: ISchool) {
    this.schoolDb.push({...finalObject,schoolStatus:"Active"});
    return true;
  }

  getSchool() {
    return this.schoolDb.filter((school)=>school.schoolStatus==="Active");
  }

  getSchoolById(id: string) {
    const details = this.schoolDb.find((s) => s.schoolID === id);
    {
      return details;
    }
  }

  deleteSchool(id: string){
    const school = this.schoolDb.find((a) => a.schoolID === id);
    if (school) {
        school.schoolStatus="Inactive";
        return true;
    }
    return false;
  }

  updateSchoolDetails(updateDetail:IUpdateSchool) {
    const {id}=updateDetail
    const school = this.schoolDb.find((a) => a.schoolID === id);
    if(school){
      return school;
    }
    return false;
}
}

export const schoolSchema = new SchoolSchema();
