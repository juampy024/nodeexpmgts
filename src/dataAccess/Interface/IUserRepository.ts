import { User } from 'core/models/user';

export interface IUserRepository {
  //getAllUsersRepository: () => Promise<User[] | null>
  IgetUserByIdRepository: (id: string) => Promise<User | null>;
  //createUserRepository: (user: User) => Promise<User>
  //updateUserRepository: (id: string) => Promise<User | null>
  //deleteUserRepository: (id: string) => Promise<User | null>
}
