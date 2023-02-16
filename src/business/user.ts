import { encrypt } from 'app/utils/bcrypt.handle';
import { yyyMmDDHhMmSsMl } from 'app/utils/dateConverter';
import { User } from 'core/models/user';
import { createUserRepository, getUserByIdRepository, getUserByUsernameRepository } from 'dataAccess/repositories/userRepository';

export const getUserByIdService = async (id: string) => {
  const userResponse = await getUserByIdRepository(id);
  return userResponse;
};

export const createUserService = async (user: User) => {
  const usernameExist = await getUserByUsernameRepository(user.username.toLowerCase());
  if (usernameExist) return 'USERNAME_ALREADY_TAKEN';

  const hassPass = await encrypt(user.password);

  const userDto: User = {
    username: user.username.toLocaleLowerCase(),
    password: hassPass,
    email: user.email,
    phone: user.phone,
    created_datetime: yyyMmDDHhMmSsMl(),
    deleted_datetime: yyyMmDDHhMmSsMl()
  };
  const createUserResponse = await createUserRepository(userDto);

  return createUserResponse;
};
