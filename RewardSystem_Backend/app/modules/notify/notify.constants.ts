import { NotifyResponse } from "./notify.type";


export const NOTIFY_MESSAGE = {
    SEND: new NotifyResponse(200, "MESSAGE SEND"),
    NOT_FOUND: new NotifyResponse(404,"USER NOT FOUND")
}