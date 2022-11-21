import { UserDTO } from '../@types/UserDTO';
import RequestError from '../utils/RequestError';
import UserModel from '../models/UserModel';
import BCrypt from '../utils/BCrypt';
import Token from '../utils/Token';
import AccountService from './AccountService';

class UserService {
  static async createOne(user: UserDTO): Promise<UserDTO> {
    const { username, password } = user;
    const found = await this._model.findByUsername(username);

    if (found) throw RequestError.conflict(`Username ${username} already in use.`);

    const hash = BCrypt.encrypt(password as string);

    const { id: accountId } = await AccountService.createOne();

    return this._model.createOne({ username, password: hash, accountId });
  }

  static async findById(id: string): Promise<UserDTO> {
    const user = await this._model.findById(id);
    if (!user) throw RequestError.notFound(`User with id ${id} was not found.`);
    return user;
  }

  static async findByUsername(username: string): Promise<UserDTO> {
    const user = await this._model.findByUsername(username);
    if (!user) throw RequestError.notFound(`Username ${username} was not found.`);
    return user;
  }
}

export default UserService;
