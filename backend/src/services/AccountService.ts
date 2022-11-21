import { AccountDTO } from '../@types/AccountDTO';
import RequestError from '../utils/RequestError';
import AccountModel from '../models/AccountModel';
import { CashTransferDTO } from '../@types/CashTransferDTO';
import TransactionService from './TransactionService';

class AccountService {
  private static _model = new AccountModel();

  /** Creates a NG Cash Account
   * @param account if not provided, new account will have balance value 0;
  */
  static async createOne(account: AccountDTO = { balance: 0 }): Promise<AccountDTO> {
    if (account.id) throw RequestError.conflict('Cannot provide ID in Account creation.');
    return this._model.createOne(account);
  }

  /** Transfers cash between 2 NG Cash accounts.
   * Creates a transaction in the database if no errors are found.
  */
  static async transferCash(username: string, cashTransfer: CashTransferDTO): Promise<void> {
    const { creditedUsername, value } = cashTransfer;

    const credited = await this._model.findByOwnerName(creditedUsername);
    if (!credited) throw RequestError.notFound(`${creditedUsername}'s account not found.`);

    const debited = await this._model.findByOwnerName(username);
    if (!debited) throw RequestError.notFound(`${username}'s account not found.`);

    if (debited.balance < value) throw RequestError.unprocessableEntity('Insuficient funds.');

    await Promise.all([
      this._model.updateOne(debited.id, { balance: +debited.balance - value }),
      this._model.updateOne(credited.id, { balance: +credited.balance - value }),
      TransactionService.createTransaction({
        value,
        creditedAccount: credited.id,
        debitedAccount: debited.id,
      }),
    ]);
  }
}

export default AccountService;
