import { QueryInterface } from 'sequelize';

export default {
  up: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
    async () => {
      await queryInterface.bulkInsert('transactions', [
        {
          id: 'bcd24b84-a5cc-4e65-977c-e651394dad62',
          value: 1.99,
          credited_account: 'a4a5f18f-6daa-495a-b808-a38146a679f4',
          debited_account: 'c9a82002-4780-43d4-9ccd-72a4604dd6d4',
          created_at: '2022-11-17T22:45:39.664Z',
        },
        {
          id: '69bfe651-afe6-48a4-bf63-c50a2be2251b',
          value: 1234,
          credited_account: 'c9a82002-4780-43d4-9ccd-72a4604dd6d4',
          debited_account: 'a4a5f18f-6daa-495a-b808-a38146a679f4',
          created_at: '2022-10-15T21:17:11.101Z',
        },
      ], {});
    },
  ),

  down: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
    async () => {
      await queryInterface.bulkDelete('transactions', {});
    },
  ),
};
