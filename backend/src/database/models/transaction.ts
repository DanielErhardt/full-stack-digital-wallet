import { Model, DataTypes } from 'sequelize';
import sequelize from '.';

class Transaction extends Model {
  public id!: string;
  public value!: number;
  public debitedAccount!: string;
  public creditedAccount!: string;
  public createdAt!: string;
}

Transaction.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    autoIncrement: true,
    defaultValue: DataTypes.UUIDV4,
  },
  value: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  debitedAccount: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  creditedAccount: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  underscored: true,
  sequelize,
  timestamps: false,
});

export default Transaction;
