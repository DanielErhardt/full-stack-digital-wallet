import { Request, Response } from 'express';
import codes from 'http-status-codes';
import AccountService from '../services/AccountService';

class AccountController {
  static async findAll(_req: Request, res: Response) {
    const accounts = await AccountService.findAll();
    res.status(codes.OK).json(accounts);
  }
}

export default AccountController;
