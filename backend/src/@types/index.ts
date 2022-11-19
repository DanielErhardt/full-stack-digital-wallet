type Entity = {
  id?: string;
};

export type User = Entity & {
  username: string;
  password: string;
  accountId: string;
};

export type Account = Entity & {
  balance: number;
};

export type Transaction = Entity & {
  value: number;
  debitedAccount: string;
  creditedAccount: string;
  createdAt?: string;
};
