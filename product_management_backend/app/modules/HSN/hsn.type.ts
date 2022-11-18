import { IMaterial } from "../material/material.type";

export interface IHSN {
    HSNcode:string;
    itemName:string;
    itemSpecification:IMaterial;
    CGST: string;
    IGST: string;
    SGST: string;
}

export class HsnResponse {
    constructor(
        public statusCode: number,
        public message: string
    ) { }
}