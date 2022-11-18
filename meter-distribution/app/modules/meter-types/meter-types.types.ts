export interface IMeterTypes{
    picturesRequired:string;
    meterType:string;
    faultTolerance:string;
    ratePerUnit:string;
    readingRequired:string;
    isDeleted:boolean
    }

    export class MeterResponse {
        constructor(
            public statusCode: number,
            public message: string
        ) { }
    }