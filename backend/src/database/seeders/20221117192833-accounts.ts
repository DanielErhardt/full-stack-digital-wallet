import { QueryInterface } from 'sequelize';

export default {
  up: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
    async () => {
      await queryInterface.bulkInsert('accounts', [
        {
          id: 'c9a82002-4780-43d4-9ccd-72a4604dd6d4', // owner: joao.das.neves
          balance: 1234,
        }, {
          id: '3673a886-38bd-4328-b2ec-f7a12b59381b', // owner: Gollum
          balance: 1.99,
        }, {
          id: '0f603bc7-662c-46ec-bf0b-66b4173d6f8e', // owner: Sauron
          balance: 500,
        }, {
          id: '1e983dfd-7804-4a2b-a991-4aa5e9a11aaf', // owner: Gandalf
          balance: 2500,
        }, {
          id: '373e0088-f7a8-4fcd-a299-a8755bdb0452', // owner: tia.dany
          balance: 50000,
        }, {
          id: '249f631e-2d0d-4f34-b905-1e790d6f0af4', // owner: Mr Tolkien
          balance: 1000000,
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
