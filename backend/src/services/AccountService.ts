import { AccountDTO } from '../@types/AccountDTO';
import RequestError from '../utils/RequestError';
import AccountModel from '../models/AccountModel';

class AccountService {
  private static _model = new AccountModel();

  /** Creates a NG Cash Account
   * @param account If account.balance is not provided, new account will have balance value of 0;
  */
  static async createOne(account: AccountDTO = { balance: 0 }): Promise<AccountDTO> {
    if (account.id) throw RequestError.conflict('Cannot provide ID in Account creation.');
    return this._model.createOne(account);
  }

  static async findByOwnerName(username: string): Promise<AccountDTO> {
    const account = await this._model.findByOwnerName(username);
    if (!account) throw RequestError.notFound(`${username}'s account not found.`);
    return account;
  }

  static async findByOwnerId(userId: string): Promise<AccountDTO> {
    const account = await this._model.findByOwnerId(userId);
    if (!account) throw RequestError.notFound(`Account with owner id ${userId} not found.`);
    return account;
  }

  static async updateOne(accountId: string, attributes: Partial<AccountDTO>) {
    return this._model.updateOne(accountId, attributes);
  }

  static async findTransactionsByAccountId(accountId: string) {
    const account = await this._model.findById(accountId, true) as AccountDTO;
    if (!account) throw RequestError.notFound(`Account with id ${accountId} not found.`);

    const { cashInTransactions, cashOutTransactions } = account;
    return {
      cashInTransactions: cashInTransactions || [],
      cashOutTransactions: cashOutTransactions || [],
    };
  }
}

export default AccountService;
