import { Router } from 'express';
import Transaction from '../database/models/transaction';

export const router = Router();

router.get('/test', async (_req, res) => {
  const created = await Transaction.create({
    value: 10,
    debitedAccount: 'c9a82002-4780-43d4-9ccd-72a4604dd6d4',
    creditedAccount: 'a4a5f18f-6daa-495a-b808-a38146a679f4',
  });
  res.status(200).json(created);
});
