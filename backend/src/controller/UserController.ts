import { Request, Response } from 'express';
import codes from 'http-status-codes';
import UserService from '../services/UserService';

class UserController {
  static async findAll(_req: Request, res: Response) {
    const users = await UserService.findAll();
    res.status(codes.OK).json(users);
  }

  static async createOne(req: Request, res: Response) {
    const { body } = req;
    const user = await UserService.createOne(body);
    res.status(codes.CREATED).json(user);
  }
}

export default UserController;
