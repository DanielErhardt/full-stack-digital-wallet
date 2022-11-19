import { Model, DataTypes } from 'sequelize';
import sequelize from '.';
import Account from './account';

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
  sequelize,
  underscored: true,
  timestamps: false,
});

Transaction.belongsTo(Account, { foreignKey: 'debitedAccount', as: 'debitedAcc' });
Transaction.belongsTo(Account, { foreignKey: 'creditedAccount', as: 'creditedAcc' });
Account.hasMany(Transaction, { foreignKey: 'debitedAccount', as: 'debitTransactions' });
Account.hasMany(Transaction, { foreignKey: 'creditedAccount', as: 'creditTransactions' });

export default Transaction;
