import { Transaction, User, Account } from '.';

export type UserDTO = User & {
  account?: Account & {
    cashIn?: Transaction;
    cashOut?: Transaction;
  }
};
