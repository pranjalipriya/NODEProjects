export interface IAnime{
    name:string;
    release:number;
    production:string;
    episodes:number;
    genre:string;
    isDeleted:boolean
    }

    export class AnimeResponse {
        constructor(
            public statusCode: number,
            public message: string
        ) { }
    }