export interface ICredentials {
    username: string;
    password: string;
    email:string
}

export class AuthResponses {
    constructor(
        public statusCode: number,
        public message: string
    ) { }
}
