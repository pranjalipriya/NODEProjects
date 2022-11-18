import { MeterResponse } from "./meter-types.types";


export const Meter_MESSAGE = {
    NOT_FOUND: new MeterResponse(404, "METER NOT FOUND"),
    METER_TYPE_UPDATED: new MeterResponse(200, "METER-TYPE UPDATED"),
    METER_TYPE_CREATED: new MeterResponse(201, "METER-TYPE CREATED"),
    METER_TYPE_DELETED: new MeterResponse(200, "METER-TYPE DELETED")
}
