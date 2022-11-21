import { UserDTO } from '../@types/UserDTO';
import User from '../database/models/user';
import {
  cashInTransactions, cashOutTransactions, userAccount, dependents,
} from './associations';
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

  async findDependents(guardianId: string): Promise<UserDTO[]> {
    const guardian = await this._model.findByPk(guardianId, { include: [dependents] }) as UserDTO;

    if (!guardian) return [];

    const foundDependents = guardian.dependents as UserDTO[];

    // This removes an unwanted property that I could not remove through the association.
    return foundDependents.map(({
      id, username, accountId, role, account,
    }) => ({
      id, username, accountId, role, account,
    }));
  }
}

export default UserModel;
