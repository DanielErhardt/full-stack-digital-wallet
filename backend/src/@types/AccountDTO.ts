import { Account, Transaction, User } from '.';

export type AccountDTO = Account & {
  owner?: User;
  cashOutTransaction?: Transaction[];
  cashInTransaction?: Transaction[];
};
