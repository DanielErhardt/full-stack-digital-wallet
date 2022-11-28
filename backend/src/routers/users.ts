import { Router } from 'express';
import UserController from '../controller/UserController';
import auth from '../middlewares/authentication';
import { validateUserForm } from '../middlewares/validations';

export const usersRouter = Router();

usersRouter.post('/', validateUserForm, UserController.createOne);

usersRouter.post('/login', validateUserForm, UserController.login);

usersRouter.get('/self', auth.any, UserController.findSelf);

usersRouter.get('/dependents', auth.guardian, UserController.findDependents);

usersRouter.get('/:id', auth.guardian, UserController.findById);
