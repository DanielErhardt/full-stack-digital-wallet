type TransactionData = {
  createdAt: string;
  value: number;
};

type AssociatedAccount = {
  owner: {
    username: string;
  };
};

export type CashInTransactionData = TransactionData & {
  cashOutAccount: AssociatedAccount;
};

export type CashOutTransactionData = TransactionData & {
  cashInAccount: AssociatedAccount;
};
