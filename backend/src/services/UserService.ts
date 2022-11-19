import { UserDTO } from '../@types/UserDTO';
import RequestError from '../utils/RequestError';
import User from '../database/models/user';
import Account from '../database/models/account';

class UserService {
  static async createOne(user: UserDTO): Promise<UserDTO> {
    const { username } = user;
    const found = await this.findByUsername(username);
    if (found) throw RequestError.conflict(`Username ${username} already in use.`);

    const created = await User.create(user);
    return created;
  }

  static async findAll(): Promise<UserDTO[]> {
    return User.findAll({
      include: [
        { model: Account, as: 'account' },
      ],
    });
  }

  static async findById(id: string): Promise<UserDTO> {
    const user = await User.findByPk(id);
    if (!user) throw RequestError.notFound(`User with id ${id} was not found.`);

    return user;
  }

  static async findByUsername(username: string): Promise<UserDTO> {
    const user = await User.findOne({ where: { username } });
    if (!user) throw RequestError.notFound(`Username ${username} was not found.`);
    return user;
  }
}

export default UserService;
