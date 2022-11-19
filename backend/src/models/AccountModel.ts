import { AccountDTO } from '../@types/AccountDTO';
import Account from '../database/models/account';
import {
  cashInTransactions, cashOutTransactions, accountOwner,
} from './associations';
import Model from './Model';

class AccountModel extends Model<Account, AccountDTO> {
  protected _excludeAttributes = [];
  protected _associations = [
    accountOwner,
    cashOutTransactions,
    cashInTransactions,
  ];

  constructor() {
    super(Account);
  }
}

export default AccountModel;
