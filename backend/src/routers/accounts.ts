import { Router } from 'express';
import AccountController from '../controller/AccountController';

export const accountsRouter = Router();

accountsRouter.get('/', AccountController.findAll);
