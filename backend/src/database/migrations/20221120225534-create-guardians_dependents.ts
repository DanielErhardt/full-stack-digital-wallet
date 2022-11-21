import { QueryInterface, DataTypes } from 'sequelize';

export default {
  up: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
    async () => {
      await queryInterface.createTable('guardians_dependents', {
        guardian_id: {
          type: DataTypes.UUID,
          allowNull: false,
          primaryKey: true,
          references: { model: 'users', key: 'id' },
        },
        dependent_id: {
          type: DataTypes.UUID,
          allowNull: false,
          primaryKey: true,
          references: { model: 'users', key: 'id' },
        },
      });
    },
  ),

  down: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
    async () => {
      await queryInterface.dropTable('guardians_dependents');
    },
  ),
};
