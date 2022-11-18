export interface ICustomer {
    name: string;
    email:string;
    address: string;
    state: string;
}
export class CustomerResponse {
    constructor(
        public statusCode: number,
        public message: string
    ) { }
}