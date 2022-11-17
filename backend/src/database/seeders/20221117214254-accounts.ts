import { QueryInterface } from 'sequelize';

export default {
  up: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
    async () => {
      await queryInterface.bulkInsert('accounts', [
        {
          id: 'c9a82002-4780-43d4-9ccd-72a4604dd6d4',
          balance: 1000,
        },
        {
          id: 'a4a5f18f-6daa-495a-b808-a38146a679f4',
          balance: 2.5,
        },
      ], {});
    },
  ),

  down: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
    async () => {
      await queryInterface.bulkDelete('accounts', {});
    },
  ),
};
