import { TransactionDTO } from '../@types/TransactionDTO';
import Transaction from '../database/models/transaction';
import RequestError from '../utils/RequestError';

class TransactionService {
  static async createTransaction(transaction: TransactionDTO) {
    return Transaction.create(transaction);
  }

  static async findAll(): Promise<TransactionDTO[]> {
    return Transaction.findAll();
  }

  static async findById(id: string): Promise<TransactionDTO> {
    const account = await Transaction.findByPk(id);
    if (!account) throw RequestError.notFound('Transaction not found');
    return account;
  }
}

export default TransactionService;
