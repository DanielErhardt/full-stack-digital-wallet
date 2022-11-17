import { Router } from 'express';
import { v4 as uuid } from 'uuid';
import User from '../database/models/user';

export const router = Router();

router.get('/test', async (_req, res) => {
  const user = await User.create({ username: 'user', password: 'pass', accountId: uuid() });
  res.status(200).json(user);
});

export default router;
