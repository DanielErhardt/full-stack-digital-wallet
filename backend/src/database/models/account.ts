import { Model, DataTypes } from 'sequelize';
import sequelize from '.';

class Account extends Model {
  public id!: string;
  public balance!: number;
}

Account.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  balance: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
}, {
  sequelize,
  timestamps: false,
  tableName: 'accounts',
});

export default Account;
