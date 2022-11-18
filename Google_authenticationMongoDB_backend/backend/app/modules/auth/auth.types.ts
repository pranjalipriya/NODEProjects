export interface ICredential{
    email:string;
    password:string;
}
export class AuthResponses{
    constructor(
    public statusCode:number,
    public message:string){}

}

export interface IReset {
    id: string;
    oldPassword: string;
    newPassword: string;
    confirmNewPassword: string;
}