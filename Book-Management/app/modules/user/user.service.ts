import { sendEmail } from "../../utility/email";
import { createPassword } from "../../utility/password";
import { USER_MESSAGE } from "./user.constants";
import userSchema from "./user.schema";
import { IUser, IStatus } from "./user.types";

const getUsers = () => userSchema.get();

const getAllWorkers = () => userSchema.getWorkers();

const createUser = async (user: IUser) => {
  const password = await createPassword();

  userSchema.create({ ...user, password });
};

const updateStatus = (status: IStatus) => {
  const user = userSchema.update(status);
  if (user) {
    if (user.status === "approved") {
      sendEmail(
        user.email,
        "Login credentials",
        `Hii ${user.username},
                      your account has been successfully created, Please login with your credentials`
      );
    }
    return USER_MESSAGE.STATUS_UPDATED;
  }
  throw USER_MESSAGE.NOT_FOUND;
};

const assignSchool = (id: string, school: string[]) => {
  const assigned = userSchema.assignSchoolToWorker(id, school);
  if (assigned) {
    return assigned;
  } else {
    throw USER_MESSAGE.NOT_FOUND;
  }
};

const getAllPendingRequest = () => {
  const userDetails = [];
  const details = userSchema.getPendingRequest();
  if (details) {
    for (let user of details) {
      userDetails.push({
        userID: user.id,
        username: user.username,
        userEmail: user.email,
        userStatus: user.status,
      });
    }
    return userDetails;
  }
  throw USER_MESSAGE.NO_PENDING_REQUEST;
};

export default {
  getUsers,
  createUser,
  getAllPendingRequest,
  updateStatus,
  getAllWorkers,
  assignSchool,
};
