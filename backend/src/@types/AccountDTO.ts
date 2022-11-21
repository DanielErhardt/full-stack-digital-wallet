import { Transaction } from './Entities/Transaction';
import { Account } from './Entities/Account';
import { User } from './Entities/User';

export type AccountDTO = Account & {
  owner?: User;
  cashOutTransactions?: Transaction[];
  cashInTransactions?: Transaction[];
};
