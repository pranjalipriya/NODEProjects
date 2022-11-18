export interface ICredentials {
    username: string;
    password: string;
    email:string
}
export interface IReset {
    username: string;
    oldPassword: string;
    newPassword: string;
    confirmNewPassword: string;
}

export class AuthResponses {
    constructor(
        public statusCode: number,
        public message: string
    ) { }
}
