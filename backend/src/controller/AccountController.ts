import { Request, Response } from 'express';
import codes from 'http-status-codes';
import AccountService from '../services/AccountService';

class AccountController {
  static async findUserTransactions(req: Request, res: Response) {
    const { headers: { accountId } } = req;
    const transactions = await AccountService.findTransactionsByAccountId(accountId as string);
    res.status(codes.OK).json(transactions);
  }

  static async findTransactionsByAccountId(req: Request, res: Response) {
    const { params: { accountId } } = req;
    const transactions = await AccountService.findTransactionsByAccountId(accountId);
    res.status(codes.OK).json(transactions);
  }
}

export default AccountController;
