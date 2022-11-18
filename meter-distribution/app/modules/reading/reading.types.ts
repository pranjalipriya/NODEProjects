export interface IReading{
    id:number;
    meterId:string;
    meterRating:number[];
    meterPicture:string;
    comments:string;
    meterType:string;
    isFaulty:boolean;
    isDeleted:boolean
    }
    export class ReadingResponse {
        constructor(
            public statusCode: number,
            public message: string
        ) { }
    }