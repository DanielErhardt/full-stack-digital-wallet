import { Router } from 'express';
import UserController from '../controller/UserController';
import { validateLogin } from '../middlewares/validations';

export const usersRouter = Router();

usersRouter.post('/', UserController.createOne);

usersRouter.post('/login', validateLogin, UserController.login);
