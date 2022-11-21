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

  async findByOwnerName(username: string): Promise<Account | null> {
    return this.findByOwnerAttribute('username', username);
  }

  async findByOwnerId(id: string): Promise<Account | null> {
    return this.findByOwnerAttribute('id', id);
  }

  private async findByOwnerAttribute(attName: string, attValue: string): Promise<Account | null> {
    const account = await Account.findOne({
      include: [
        { ...accountOwner, where: { [attName]: attValue } },
        cashOutTransactions,
        cashInTransactions,
      ],
      attributes: { exclude: this._excludeAttributes },
    });
    return account;
  }
}

export default AccountModel;
