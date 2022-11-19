import { Request, Response } from 'express';
import codes from 'http-status-codes';
import TransactionService from '../services/TransactionService';

class TransactionController {
  static async findAll(_req: Request, res: Response) {
    const transactions = await TransactionService.findAll();
    res.status(codes.OK).json(transactions);
  }
}

export default TransactionController;
