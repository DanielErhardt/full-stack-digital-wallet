import { TransactionInput } from '../@types/Inputs/TransactionInput';
import TransactionModel from '../models/TransactionModel';
import RequestError from '../utils/RequestError';
import AccountService from './AccountService';

class TransactionService {
  private static _model = new TransactionModel();

  static async createTransaction(transactionData: TransactionInput) {
    const { debitedUsername, creditedUsername, value } = transactionData;

    if (!debitedUsername) throw RequestError.badRequest('Sender username can\'t be null');

    const credited = await AccountService.findByOwnerName(creditedUsername);
    if (!credited) throw RequestError.notFound(`${creditedUsername}'s account not found.`);

    const debited = await AccountService.findByOwnerName(debitedUsername);
    if (!debited) throw RequestError.notFound(`${debitedUsername}'s account not found.`);

    if (debited.balance < value) throw RequestError.unprocessableEntity('Insuficient funds.');

    await Promise.all([
      AccountService.updateOne(debited.id as string, { balance: +debited.balance - value }),
      AccountService.updateOne(credited.id as string, { balance: +credited.balance - value }),
      this._model.createOne({
        value,
        creditedAccount: credited.id as string,
        debitedAccount: debited.id as string,
      }),
    ]);
  }
}

export default TransactionService;
