export interface IGifts {
    pointsRequired: number;
    name: string;
}

export class GiftResponse {
    constructor(
        public statusCode: number,
        public message: string
    ) { }
}