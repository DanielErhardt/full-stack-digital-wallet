import { Request, Response } from 'express';
import codes from 'http-status-codes';
import { CashTransferDTO } from '../@types/CashTransferDTO';
import AccountService from '../services/AccountService';

class AccountController {
  static async transferCash(req: Request, res: Response): Promise<Response> {
    const { headers: { username } } = req;
    const transferData = req.body as CashTransferDTO;
    const { creditedUsername, value } = transferData;
    await AccountService.transferCash(username as string, transferData);
    return res.status(codes.OK).json({
      message: `${username} successfully sent R$${value} cash to ${creditedUsername}`,
    });
  }
}

export default AccountController;
