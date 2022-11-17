import { QueryInterface } from 'sequelize';

export default {
  up: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
    async () => {
      await queryInterface.bulkInsert('users', [
        {
          id: '2175332c-a410-4460-993b-f651f42de264',
          username: 'admin',
          password: 'admin-pass',
          account_id: 'c9a82002-4780-43d4-9ccd-72a4604dd6d4',
        },
        {
          id: '016d5e0f-fd47-4947-9fef-61f9a3eb1d97',
          username: 'user',
          password: 'user-pass',
          account_id: 'a4a5f18f-6daa-495a-b808-a38146a679f4',
        },
      ], {});
    },
  ),

  down: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
    async () => {
      await queryInterface.bulkDelete('users', {});
    },
  ),
};
