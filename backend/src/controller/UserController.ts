import { Request, Response } from 'express';
import codes from 'http-status-codes';
import UserService from '../services/UserService';

class UserController {
  static async login(req: Request, res: Response): Promise<Response> {
    const { body } = req;
    const token = await UserService.login(body);
    return res.status(codes.OK).json({ token });
  }

  static async createOne(req: Request, res: Response): Promise<Response> {
    const { body } = req;
    const token = await UserService.createOne(body);
    return res.status(codes.CREATED).json({ token });
  }

  static async findById(req: Request, res: Response): Promise<Response> {
    const { params: { id } } = req;
    const user = await UserService.findById(id, true);
    return res.status(codes.OK).json(user);
  }

  static async findSelf(req: Request, res: Response): Promise<Response> {
    const { headers: { userId } } = req;
    const user = await UserService.findById(userId as string, true);
    return res.status(codes.OK).json(user);
  }

  static async findDependents(req: Request, res: Response): Promise<Response> {
    const { headers: { userId: guardianId } } = req;
    const dependents = await UserService.findDependents(guardianId as string);
    return res.status(codes.OK).json(dependents);
  }
}

export default UserController;
