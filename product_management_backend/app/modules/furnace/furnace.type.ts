export interface IFurnace {
    name: string;
    status:string
}
export class FurnaceResponse {
    constructor(
        public statusCode: number,
        public message: string
    ) { }
}