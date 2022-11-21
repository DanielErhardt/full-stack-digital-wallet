import { Request, Response } from 'express';
import codes from 'http-status-codes';
import { TransactionInput } from '../@types/Inputs/TransactionInput';
import TransactionService from '../services/TransactionService';

class TransactionController {
  static async create(req: Request, res: Response): Promise<Response> {
    const { headers: { username } } = req;
    const transferData = req.body as TransactionInput;
    const { creditedUsername, value } = transferData;
    await TransactionService.createTransaction({
      debitedUsername: username as string,
      creditedUsername,
      value,
    });
    return res.status(codes.OK).json({
      message: `You successfully sent $${value} cash to ${creditedUsername}`,
    });
  }
}

export default TransactionController;
