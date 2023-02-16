import { generateToken } from 'app/utils/jwt.handle';
import { verified } from 'app/utils/bcrypt.handle';
import { encrypt } from 'app/utils/bcrypt.handle';
import { Authentication } from 'core/models/auth';
import { User } from 'core/models/user';
import { getUserByUsernameRepository } from 'dataAccess/repositories/userRepository';
import { Request } from 'express';
import { createUserService, getUserByIdService } from './user';

export const registerNewUser = async ({ username, password }: Authentication) => {
  /*     if (!user) return "NOT_FOUND_USER";

    const passHash = await encrypt(user.password);
    const registerNewUser = await createUserService(auth); */
};

export const logingUserService = async ({ username, password }: Authentication) => {
  const user: User | null = await getUserByUsernameRepository(username.toLowerCase());

  if (!user) return 'NOT_FOUND_USER';
  const isPassCorrect = await verified(password, user.password);
  if (!isPassCorrect) return 'PASSWORD_NOT_VALID';

  const token = await generateToken(user);
  const data = {
    token,
    username: user.username
  };
  return data;
};
