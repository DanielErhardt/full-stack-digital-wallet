import { QueryInterface, DataTypes } from 'sequelize';

export default {
  up: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
    async () => {
      await queryInterface.createTable('transactions', {
        id: {
          type: DataTypes.UUID,
          allowNull: false,
          primaryKey: true,
        },
        value: {
          type: DataTypes.DECIMAL,
          allowNull: false,
        },
        credited_account: {
          type: DataTypes.UUID,
          allowNull: false,
          references: { model: 'accounts', key: 'id' },
        },
        debited_account: {
          type: DataTypes.UUID,
          allowNull: false,
          references: { model: 'accounts', key: 'id' },
        },
        created_at: {
          allowNull: false,
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
      });
    },
  ),

  down: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
    async () => {
      await queryInterface.dropTable('transactions');
    },
  ),
};
