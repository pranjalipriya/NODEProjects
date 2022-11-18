
export type RoleName = "ADMIN" | "WORKER";

export interface IUser {
    id: string;
    username: string;
    password: string;
    role: string;
    email: string
    status: string;
    assignedSchool?: string[]
}

export class Role {
    constructor(
        public id: string,
        public name: RoleName
    ) { }
}

export class UserResponses {
    constructor(
        public statusCode: number,
        public message: string
    ) { }
}

export interface IAssignSchool{
    id : string;
    schools:string[];
}