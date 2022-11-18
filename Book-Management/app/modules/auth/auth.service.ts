import { createToken } from "../../utility/authorize";
import { comparePassword, createHash } from "../../utility/password";
import userSchema from "../user/user.schema";
import userService from "../user/user.service";
import { IUser } from "../user/user.types";
import { AUTH_ERRORS } from "./auth.responses";
import { ICredentials } from "./auth.types";

const login = (credentials: ICredentials) => {
  const users = userService.getUsers();

  const user = users.find(
    (u) =>
      u.username === credentials.username &&
      comparePassword(credentials.password, u.password) &&
      u.status==="approved"
  );

  if (!user) {
    throw AUTH_ERRORS.NOT_FOUND;
  }

  const token = createToken({ id: user.id, role: user.role });

  return {
    token,
    role: user.role,
  };
};

const signup = (user: IUser) => {
  const existingUser = userSchema.userDb.find(
    (u) => u.username === user.username
  );
  if (!existingUser) {
    try {
      user.password = createHash(user.password);

      userSchema.create(user);
    } catch (e) {
      throw AUTH_ERRORS.INTERNAL;
    }
  } else {
    throw AUTH_ERRORS.ALREADY_EXIST;
  }
};

const get = () => {
  return userSchema.get();
};

export default {
  login,
  signup,
  get,
};
