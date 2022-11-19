import { Account, Transaction, User } from '.';

export type TransactionDTO = Transaction & {
  cashIn?: Account & {
    owner?: User;
  };
  cashOut?: Account & {
    owner?: User;
  };
};
