import { AccountDTO } from '../@types/AccountDTO';
import Account from '../database/models/account';
import User from '../database/models/user';
import RequestError from '../utils/RequestError';

class AccountService {
  static async createAccount(account: AccountDTO) {
    return Account.create(account);
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
