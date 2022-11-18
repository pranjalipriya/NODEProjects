import { MeterResponse } from "../meter-types/meter-types.types";


export const METER_MESSAGE = {
    NOT_FOUND: new MeterResponse(404, "METER NOT FOUND"),
    METER_UPDATED: new MeterResponse(200, "METER UPDATED"),
    METER_CREATED: new MeterResponse(201, "METER CREATED"),
    METER_DELETED: new MeterResponse(200, "METER DELETED")
}
