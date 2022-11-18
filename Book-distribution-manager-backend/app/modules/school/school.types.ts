type status = "partial" | "all" | "none";

export interface ISubject {
    name: string[]
}

export interface IClass {
    class: string,
    subjectsGiven: string[],
    classStatus: status //calculateStatus
}

export interface ISchool {
    id: string,
    name: string,
    subject: string[],
    classData: IClass[],
    year: string;
    schoolSubjectStatus: status,
    schoolStatus?:"Active"|"Inactive"

}

//  function calculateStatus(){
//  if(subject.length===SubjectsGiven.length)
//  {
//     status="all";
//  }
//  else if(subject.length===0)
// {
//     status="none"
// }
//  }


export class SchoolResponse {
    constructor(
        public statusCode: number,
        public message: string
    ) { }
}
