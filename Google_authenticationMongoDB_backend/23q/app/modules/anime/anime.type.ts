export interface IAnime {
        name:string;
        release:string;
        production:string;
        episodes:string;
        genre:string;
        isDeleted:boolean
}
export class AnimeResponse {
    constructor(
        public statusCode: number,
        public message: string
    ) { }
}