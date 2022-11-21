import { QueryInterface } from 'sequelize';

export default {
  up: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
    async () => {
      await queryInterface.bulkInsert('transactions', [
        {
          id: 'bcd24b84-a5cc-4e65-977c-e651394dad62',
          value: 1234,
          credited_account: '373e0088-f7a8-4fcd-a299-a8755bdb0452', // owner: tia.dany
          debited_account: 'c9a82002-4780-43d4-9ccd-72a4604dd6d4', // owner: joao.das.neves
          created_at: '2022-11-17T22:45:39.664Z',
        }, {
          id: '69bfe651-afe6-48a4-bf63-c50a2be2251b',
          value: 1.99,
          credited_account: '3673a886-38bd-4328-b2ec-f7a12b59381b', // owner: Gollum
          debited_account: '249f631e-2d0d-4f34-b905-1e790d6f0af4', // owner: Mr Tolkien
          created_at: '2022-10-15T21:17:11.101Z',
        },
        {
          id: '3eb43799-6ebc-4aa1-9dba-4c6e843db001',
          value: 2500,
          credited_account: '1e983dfd-7804-4a2b-a991-4aa5e9a11aaf', // owner: Gandalf
          debited_account: '249f631e-2d0d-4f34-b905-1e790d6f0af4', // owner: Mr Tolkien
          created_at: '2022-10-15T21:17:11.101Z',
        }, {
          id: '126cbe9b-766d-46df-af8f-a35400492860',
          value: 500,
          credited_account: '0f603bc7-662c-46ec-bf0b-66b4173d6f8e', // owner: Sauron
          debited_account: '249f631e-2d0d-4f34-b905-1e790d6f0af4', // owner: Mr Tolkien
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
