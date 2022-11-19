import { Router } from 'express';
import UserController from '../controller/UserController';

export const usersRouter = Router();

usersRouter.get('/', UserController.findAll);

usersRouter.post('/', UserController.createOne);
