import { Router } from 'express';
import TransactionController from '../controller/TransactionController';
import auth from '../middlewares/authentication';
import { validateTransaction } from '../middlewares/validations';

export const transactionsRouter = Router();

transactionsRouter.post('/', auth.any, validateTransaction, TransactionController.create);
