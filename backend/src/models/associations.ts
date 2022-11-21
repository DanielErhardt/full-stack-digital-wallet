import Account from '../database/models/account';
import Transaction from '../database/models/transaction';
import User from '../database/models/user';

export const userAccount = {
  model: Account,
  as: 'account',
};

export const accountOwner = {
  model: User,
  as: 'owner',
  attributes: { exclude: ['accountId', 'password', 'role'] },
};

export const cashInAccount = {
  model: Account,
  as: 'cashInAccount',
  include: [
    { ...accountOwner },
  ],
  attributes: { exclude: ['balance'] },
};

export const cashOutAccount = {
  model: Account,
  as: 'cashOutAccount',
  include: [
    { ...accountOwner },
  ],
  attributes: { exclude: ['balance'] },
};

export const cashInTransactions = {
  model: Transaction,
  as: 'cashInTransactions',
  attributes: { exclude: ['creditedAccount', 'debitedAccount'] },
  include: [
    { ...cashOutAccount },
  ],
};

export const cashOutTransactions = {
  model: Transaction,
  as: 'cashOutTransactions',
  attributes: { exclude: ['debitedAccount', 'creditedAccount'] },
  include: [
    { ...cashInAccount },
  ],
};

export const dependents = {
  model: User,
  as: 'dependents',
  attributes: { exclude: ['password', 'role'] },
};
