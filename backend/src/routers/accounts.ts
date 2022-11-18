import { Router } from 'express';
import { v4 as uuid } from 'uuid';
import Accounts from '../database/models/account';

export const accountsRouter = Router();

accountsRouter.get('/test', async (_req, res) => {
  const gen = await Accounts.create({ username: 'user', password: 'pass', accountId: uuid() });
  res.status(200).json(gen);
});
