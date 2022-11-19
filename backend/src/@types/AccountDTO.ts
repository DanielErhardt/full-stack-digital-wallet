import { Account, Transaction, User } from '.';

export type AccountDTO = Account & {
  owner?: User;
  cashOut?: Transaction[];
  cashIn?: Transaction[];
};
