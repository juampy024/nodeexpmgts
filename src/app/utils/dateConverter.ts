import { DateFromISOStringC } from 'io-ts-types';

export const yyyMmDDHhMmSsMl = (): string | DateFromISOStringC => {
  const date = new Date(Date.now()).toISOString().replace('T', ' ').replace('Z', '');
  return date;
};
