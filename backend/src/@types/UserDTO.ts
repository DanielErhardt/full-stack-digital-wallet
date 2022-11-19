import { Transaction, User, Account } from '.';

export type UserDTO = User & {
  account?: Account & {
    cashInTransaction?: Transaction;
    cashOutTransaction?: Transaction;
  }
};
