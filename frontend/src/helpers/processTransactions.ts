import { UserData } from '../@types/API Data/UserData';
import { Transaction } from '../@types/Transaction';

export const processTransactions = (userData: UserData) => {
  const result: Transaction[] = [];

  const { account: { cashInTransactions, cashOutTransactions } } = userData;

  cashInTransactions.forEach((trn) => {
    const { value, createdAt, cashOutAccount: { owner: { username } } } = trn;
    result.push({
      type: 'cash in',
      otherUser: username,
      value,
      date: createdAt,
    });
  });

  cashOutTransactions.forEach((trn) => {
    const { value, createdAt, cashInAccount: { owner: { username } } } = trn;
    result.push({
      type: 'cash out',
      otherUser: username,
      value,
      date: createdAt,
    });
  });

  return result;
};
