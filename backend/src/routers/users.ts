import { Router } from 'express';
import UserController from '../controller/UserController';

export const usersRouter = Router();
const controller = new UserController();

usersRouter.get('/', controller.findAll);

usersRouter.post('/', controller.createOne);
