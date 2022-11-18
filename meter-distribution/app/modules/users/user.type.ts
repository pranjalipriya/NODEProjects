export interface IUser{
username:string;
password:string;
email:string;
customer:string[];
role:string;
isDeleted:boolean
}
export class UserResponse {
    constructor(
        public statusCode: number,
        public message: string
    ) { }
}

