import { Transaction } from './Entities/Transaction';
import { Account } from './Entities/Account';
import { User } from './Entities/User';

export type UserDTO = User & {
  account?: Account & {
    cashInTransaction?: Transaction;
    cashOutTransaction?: Transaction;
  }
  dependents?: User[];
};
