import { QueryInterface, DataTypes } from 'sequelize';

export default {
  up: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
    async () => {
      await queryInterface.createTable('parents_children', {
        parent_id: {
          type: DataTypes.UUID,
          allowNull: false,
          primaryKey: true,
          references: { model: 'users', key: 'id' },
        },
        child_id: {
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
      await queryInterface.dropTable('parents_children');
    },
  ),
};
