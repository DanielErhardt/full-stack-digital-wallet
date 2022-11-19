import { TransactionDTO } from '../@types/TransactionDTO';
import Transaction from '../database/models/transaction';
import { cashInAccount, cashOutAccount } from './associations';
import Model from './Model';

class TransactionModel extends Model<Transaction, TransactionDTO> {
  protected _excludeAttributes = [];
  protected _associations = [
    cashOutAccount,
    cashInAccount,
  ];

  constructor() {
    super(Transaction);
  }
}

export default TransactionModel;
