import { Request, Response } from 'express';
import codes from 'http-status-codes';
import UserService from '../services/UserService';

class UserController {
  static async login(req: Request, res: Response): Promise<Response> {
    const { body: { username, password } } = req;
    const user = await UserService.login(username, password);
    return res.status(codes.OK).json(user);
  }

  static async createOne(req: Request, res: Response): Promise<Response> {
    const { body } = req;
    const user = await UserService.createOne(body);
    return res.status(codes.CREATED).json(user);
  }

  static async findDependents(req: Request, res: Response): Promise<Response> {
    const { headers: { userId: guardianId } } = req;
    const dependents = await UserService.findDependents(guardianId as string);
    return res.status(codes.OK).json(dependents);
  }
}

export default UserController;
