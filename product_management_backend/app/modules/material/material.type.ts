export interface IMaterial {
    material: string;
    unit:string
}
export class MaterialResponse {
    constructor(
        public statusCode: number,
        public message: string
    ) { }
}