import { Model, DataTypes } from 'sequelize';
import sequelize from '.';

class User extends Model {
  public id!: string;
  public username!: string;
  public password!: string;
  public accountId!: string;
}

User.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  accountId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize,
  timestamps: false,
});

export default User;
