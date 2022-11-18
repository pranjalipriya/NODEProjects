export interface INotify {
    message: string;
    from:string
    to: string;
}

export class NotifyResponse {
    constructor(
        public statusCode: number,
        public message: string
    ) { }
}