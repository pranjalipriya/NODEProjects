type status= "pending" | "approved" | "rejected"

export interface IUser {
    id: string;
    username: string;
    password: string;
    role: string;
    email: string;
    status:status;
    assignedSchool?:string[]
}

export interface IStatus {
    id: string;
    status : status
}

export interface IAssigned{
    id : string;
    schools:string[];
}

export class UserResponse{
    constructor(
        public statusCode: number,
        public message: string
    ) { }
}