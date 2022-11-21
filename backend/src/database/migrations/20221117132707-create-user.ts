import { QueryInterface, DataTypes } from 'sequelize';

export default {
  up: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
    async () => {
      await queryInterface.createTable('users', {
        id: {
          type: DataTypes.UUID,
          allowNull: false,
          primaryKey: true,
        },
        account_id: {
          type: DataTypes.UUID,
          allowNull: false,
          references: { model: 'accounts', key: 'id' },
        },
        username: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        role: {
          type: DataTypes.STRING(10),
          allowNull: false,
          values: ['user', 'parent'],
          defaultValue: 'user',
        },
      });
    },
  ),

  down: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
    async () => {
      await queryInterface.dropTable('users');
    },
  ),
};
