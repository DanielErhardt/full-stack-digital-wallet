import { AccountDTO } from '../@types/AccountDTO';
import Account from '../database/models/account';
import User from '../database/models/user';
import RequestError from '../utils/RequestError';

class AccountService {
  private static _model = new AccountModel();

  /** Creates a NG Cash Account
   * @param account if not provided, new account will have balance value 0;
  */
  static async createOne(account: AccountDTO = { balance: 0 }): Promise<AccountDTO> {
    if (account.id) throw RequestError.conflict('Cannot provide ID in Account creation.');
    return this._model.createOne(account);
  }

  static async findAll(): Promise<AccountDTO[]> {
    return Account.findAll({
      include: [
        { model: User, as: 'owner', attributes: { exclude: ['account_id', 'password'] } },
      ],
    });
  }

  static async findById(id: string): Promise<AccountDTO> {
    const account = await Account.findByPk(id);
    if (!account) throw RequestError.notFound('Account not found');
    return account;
  }
}

export default AccountService;
