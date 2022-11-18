export type status = "partial" | "full" | "none";

export interface ISchool {
  year: string;
  schoolID: string;
  schoolName: string;
  classes: classes[];
  subjects: subjects[];
  status: status;
  schoolStatus?: "Active" | "Inactive";
}
type classes = {
  className: number;
  status: string;
};

type subjects = {
  subject: string;
  assignedClasses: number[];
};

export interface IAddschoolObject {
  name: string;
  academicYear: string;
  classFrom: string;
  classTo: string;
  subject: string[];
}

export class schoolResponses {
  constructor(public statusCode: number, public message: string) {}
}

export interface IUpdateSchool{
  id: string;
  classFrom: string;
  classTo: string;
  subjects:string[];
}
