import { CashInTransactionData, CashOutTransactionData } from './TransactionData';

export type AccountData = {
  balance: number;
  cashInTransactions: CashInTransactionData[];
  cashOutTransactions: CashOutTransactionData[];
};
