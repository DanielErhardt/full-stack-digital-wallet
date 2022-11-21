import { UserDTO } from '../@types/UserDTO';
import User from '../database/models/user';
import { cashInTransactions, cashOutTransactions, userAccount } from './associations';
import Model from './Model';

class UserModel extends Model<User, UserDTO> {
  protected _excludeAttributes = ['accountId', 'password'];
  protected _associations = [
    {
      ...userAccount,
      include: [
        cashOutTransactions,
        cashInTransactions,
      ],
    },
  ];

  constructor() {
    super(User);
  }

  async login(username: string): Promise<UserDTO | null> {
    return this._model.findOne({ where: { username }, raw: true });
  }

  async findByUsername(username: string): Promise<UserDTO | null> {
    return this._model.findOne({
      where: { username },
      include: this._associations,
      attributes: { exclude: this._excludeAttributes },
    });
  }
}

export default UserModel;
