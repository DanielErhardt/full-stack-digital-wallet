import { Router } from 'express';
import AccountController from '../controller/AccountController';
import authentication from '../middlewares/authenticate';

export const accountsRouter = Router();

accountsRouter.post('/transfer', authentication, AccountController.transferCash);
