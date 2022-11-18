type departmentType= "hr" | "manager" |"recruitment";

export interface employees{
    name: string;
    department: departmentType;
    salary: number;
    logindetails:{
     email: string;
     password: string;
    }
}