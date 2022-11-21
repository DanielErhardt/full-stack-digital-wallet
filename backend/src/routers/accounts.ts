import { Router } from 'express';
import AccountController from '../controller/AccountController';
import auth from '../middlewares/authentication';

export const accountsRouter = Router();

accountsRouter.get('/transactions', auth.any, AccountController.findUserTransactions);

accountsRouter.get('/transactions/dependent/:accountId', auth.guardian, AccountController.findTransactionsByAccountId);
