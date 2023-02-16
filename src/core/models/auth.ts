import { User } from 'core/models/user';
export interface Authentication extends User {
  username: string;
  password: string;
}
