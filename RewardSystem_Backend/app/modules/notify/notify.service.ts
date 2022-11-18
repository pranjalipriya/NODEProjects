import usersRepo from "../users/users.repo";
import { NOTIFY_MESSAGE } from "./notify.constants";
import notifyRepo from "./notify.repo";
import { INotify } from "./notify.type";

const create =async (message: INotify) => {
   if(await usersRepo.getOne(message.to))
    {
        await notifyRepo.create(message);
    }
    else
    throw NOTIFY_MESSAGE.NOT_FOUND;

}

const getOne=(name:string)=> notifyRepo.getOne(name);

export default {
    create,
    getOne
}