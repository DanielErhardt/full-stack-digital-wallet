import { Router } from 'express';
import TransactionController from '../controller/TransactionController';

export const transactionsRouter = Router();

transactionsRouter.get('/', TransactionController.findAll);
