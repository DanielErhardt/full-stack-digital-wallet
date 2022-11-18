import { EntityDTO } from './EntityDTO';

export type TransactionDTO = EntityDTO & {
  value: number;
  debitedAccount: string;
  creditedAccount: string;
  createdAt?: string;
};
