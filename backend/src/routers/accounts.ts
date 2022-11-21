import { Router } from 'express';
import AccountController from '../controller/AccountController';
import auth from '../middlewares/authentication';

export const accountsRouter = Router();

accountsRouter.post('/transfer', auth.any, AccountController.transferCash);
