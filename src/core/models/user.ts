import { DateFromISOStringC } from "io-ts-types";

export interface User {
  id?: number;
  username: string;
  password: string;
  email: string;
  phone: number;
  tid?: string;
  created_datetime: DateFromISOStringC | string;
  deleted_datetime: DateFromISOStringC | string;
  deleted?: boolean;
}
