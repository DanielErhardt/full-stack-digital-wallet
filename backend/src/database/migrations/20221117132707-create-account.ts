import { QueryInterface, DataTypes } from 'sequelize';

export default {
  up: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
    async () => {
      await queryInterface.createTable('accounts', {
        id: {
          type: DataTypes.UUID,
          allowNull: false,
          primaryKey: true,
        },
        balance: {
          type: DataTypes.DECIMAL,
          allowNull: false,
        },
      });
    },
  ),

  down: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
    async () => {
      await queryInterface.dropTable('accounts');
    },
  ),
};
