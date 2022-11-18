export interface ICustomer{
    name:string;
    email:string;
    userId:number;
    isDeleted:boolean
    }

    export class CustomerResponse {
        constructor(
            public statusCode: number,
            public message: string
        ) { }
    }