import { QueryInterface } from 'sequelize';

export default {
  up: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
    async () => {
      await queryInterface.bulkInsert('guardians_dependents', [
        {
          guardian_id: '3c676f92-6a8c-48c0-ac72-49406784d394', // user: tia.dany
          dependent_id: '2175332c-a410-4460-993b-f651f42de264', // user: joao.das.neves
        }, {
          guardian_id: '3bd6bbb6-9cf1-4c46-b91e-e3794f104063', // user: Mr Tolkien
          dependent_id: '237d8a1b-0784-4cf8-ae20-8442742b44a3', // user: Gollum
        }, {
          guardian_id: '3bd6bbb6-9cf1-4c46-b91e-e3794f104063', // user: Mr Tolkien
          dependent_id: '75acdccc-d637-490e-9261-a914b7748662', // user: Sauron
        }, {
          guardian_id: '3bd6bbb6-9cf1-4c46-b91e-e3794f104063', // user: Mr Tolkien
          dependent_id: '902c1bbe-a5dc-432b-99fd-e846a800ca25', // user: Gandalf
        },
      ], {});
    },
  ),

  down: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
    async () => {
      await queryInterface.bulkDelete('guardians_dependents', {});
    },
  ),
};
