import { Transaction } from './Entities/Transaction';
import { Account } from './Entities/Account';
import { User } from './Entities/User';

export type TransactionDTO = Transaction & {
  cashInAccount?: Account & {
    owner?: User;
  };
  cashOutAccount?: Account & {
    owner?: User;
  };
};
