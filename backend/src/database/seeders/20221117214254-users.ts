import { QueryInterface } from 'sequelize';

export default {
  up: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
    async () => {
      await queryInterface.bulkInsert('users', [
        {
          id: '2175332c-a410-4460-993b-f651f42de264',
          username: 'joao.das.neves',
          password: '$2a$10$1uxEAB7gpoofpN442aMa1uCcK76MTcY0bxutRVX7vsufDqjm87UMW', // password: sabenada
          account_id: 'c9a82002-4780-43d4-9ccd-72a4604dd6d4',
        },
        {
          id: '016d5e0f-fd47-4947-9fef-61f9a3eb1d97',
          username: 'Marciano Verdinho',
          password: '$2a$10$PBrHoxzJwRV1t2Zthbgji.i8D2GHo7faq8uOZyRO/4JvxDwU9vdqW', // password: dasAntenasLongas123
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
