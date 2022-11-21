import { UserDTO } from '../@types/UserDTO';
import RequestError from '../utils/RequestError';
import UserModel from '../models/UserModel';
import BCrypt from '../utils/BCrypt';
import Token from '../utils/Token';
import AccountService from './AccountService';

class UserService {
  private static _model = new UserModel();

  /** Checks if username exists, then validates password.
   * @returns A JWT token with user info as payload. */
  static async login(username: string, password: string) {
    const user = await this._model.login(username);
    if (!user) throw RequestError.notFound('User not found.');

    const { password: hash } = user;

    if (!BCrypt.validate(password, hash as string)) {
      throw RequestError.unauthorized('Invalid password.');
    }
    delete user.password;
    const token = Token.create(user);
    return { token, user };
  }

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
