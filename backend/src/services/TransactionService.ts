import { TransactionDTO } from '../@types/TransactionDTO';
import TransactionModel from '../models/TransactionModel';
import RequestError from '../utils/RequestError';

class TransactionService {
  private static _model = new TransactionModel();

  static async createTransaction(transactionData: TransactionDTO): Promise<TransactionDTO> {
    if (transactionData.id) throw RequestError.conflict('Cannot provide ID in Transaction creation.');
    const created = await this._model.createOne(transactionData);
    return created;
  }
}

export default TransactionService;
