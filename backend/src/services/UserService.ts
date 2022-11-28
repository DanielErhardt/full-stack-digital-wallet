import { UserDTO } from '../@types/UserDTO';
import RequestError from '../utils/RequestError';
import UserModel from '../models/UserModel';
import BCrypt from '../utils/BCrypt';
import Token from '../utils/Token';
import AccountService from './AccountService';
import { UserFormInput } from '../@types/Inputs/UserFormInput';

class UserService {
  private static _model = new UserModel();

  /** Checks if username exists, then validates password.
   * @returns A JWT token with user info as payload. */
  static async login(formInput: UserFormInput): Promise<string> {
    const { username, password } = formInput;
    const user = await this._model.login(username);

    if (!user) throw RequestError.notFound('User not found.');

    const { password: hash } = user;

    if (!BCrypt.validate(password, hash as string)) {
      throw RequestError.unauthorized('Invalid password.');
    }

    return Token.create(user);
  }

  /** Checks if username exists, then creates a new user and account.
   * @returns A JWT token with user info as payload. */
  static async createOne(formInput: UserFormInput): Promise<string> {
    const { username, password } = formInput;
    const found = await this._model.findByUsername(username);

    if (found) throw RequestError.conflict(`Username ${username} is already taken.`);

    const hash = BCrypt.encrypt(password);

    const { id } = await AccountService.createOne();
    const user = await this._model.createOne({ username, password: hash, accountId: id as string });

    return Token.create(user.get({ plain: true }));
  }

  static async findById(id: string, associate = false): Promise<UserDTO> {
    const user = await this._model.findById(id, associate);
    if (!user) throw RequestError.notFound(`User with id ${id} was not found.`);
    return user;
  }

  static async findDependents(guardianId: string): Promise<Record<string, string>> {
    const dependents = await this._model.findDependents(guardianId);
    return dependents
      .reduce((acc: Record<string, string>, dep) => {
        const { username, id } = dep;
        acc[username] = id as string;
        return acc;
      }, {});
  }
}

export default UserService;
