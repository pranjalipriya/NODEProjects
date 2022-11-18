export interface IStorage {
    building: string;
    shelf: string;
    row: string;
    status: string;
}
export class StorageResponse {
    constructor(
        public statusCode: number,
        public message: string
    ) { }
}