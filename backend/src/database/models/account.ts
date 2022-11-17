import { Model, DataTypes } from 'sequelize';
import db from '.';

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
  sequelize: db,
  timestamps: false,
});

export default Account;
