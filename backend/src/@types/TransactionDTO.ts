import { Account, Transaction, User } from '.';

export type TransactionDTO = Transaction & {
  cashInAccount?: Account & {
    owner?: User;
  };
  cashOutAccount?: Account & {
    owner?: User;
  };
};
