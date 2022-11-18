

export interface IUser {
    username: string;
    password: string;
    email: string;
    role: string
}

export class UserResponse {
    constructor(
        public statusCode: number,
        public message: string
    ) { }
}

