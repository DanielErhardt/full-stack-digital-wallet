import { Router } from 'express';
import UserController from '../controller/UserController';
import { validateUserForm } from '../middlewares/validations';

export const usersRouter = Router();

usersRouter.post('/', validateUserForm, UserController.createOne);

usersRouter.post('/login', validateUserForm, UserController.login);
