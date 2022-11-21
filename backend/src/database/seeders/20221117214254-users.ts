import { QueryInterface } from 'sequelize';

export default {
  up: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
    async () => {
      await queryInterface.bulkInsert('users', [
        {
          id: '2175332c-a410-4460-993b-f651f42de264',
          username: 'joao.das.neves',
          password: '$2a$10$xHtQtDy6qyRO.nCElqdgZuQZgpCvX9JBR0nkAbZOYk1oZ2Jr8RGcu', // password: sabeNada
          account_id: 'c9a82002-4780-43d4-9ccd-72a4604dd6d4',
          role: 'user',
        }, {
          id: '237d8a1b-0784-4cf8-ae20-8442742b44a3',
          username: 'Gollum',
          password: '$2a$10$ag/Vj.xsL9KTsR.ZRMCQOe/FfRlWFIWf8hR5p1AjKdkUxwMRn36Ke', // password: myPrecious
          account_id: '3673a886-38bd-4328-b2ec-f7a12b59381b',
          role: 'user',
        }, {
          id: '75acdccc-d637-490e-9261-a914b7748662',
          username: 'Sauron',
          password: '$2a$10$wsIAr2VhNmuiqHpHEd/EReL8AiUUoK4PzW6cMPx/4OpUm2IgAZQXq', // password: ruleThemAll
          account_id: '0f603bc7-662c-46ec-bf0b-66b4173d6f8e',
          role: 'user',
        }, {
          id: '902c1bbe-a5dc-432b-99fd-e846a800ca25',
          username: 'Gandalf',
          password: '$2a$10$NMo1CrfzuX7GT/QNUAWp1emnqnQ0Q9.k3Ofvyti7ChbEVAJoXtD5W', // password: youShallNotPass
          account_id: '1e983dfd-7804-4a2b-a991-4aa5e9a11aaf',
          role: 'user',
        }, {
          id: '3c676f92-6a8c-48c0-ac72-49406784d394',
          username: 'tia.dany',
          password: '$2a$10$HLnkFUiX3cLue9BMbqZ0RuIRawQ/cIaAIoiCUQLpQS0D0tiEPxfDi', // password: mySunAndStars
          account_id: '373e0088-f7a8-4fcd-a299-a8755bdb0452',
          role: 'guardian',
        }, {
          id: '3bd6bbb6-9cf1-4c46-b91e-e3794f104063',
          username: 'Mr Tolkien',
          password: '$2a$10$2DdcFFvqp9byqWGzNcLIOedQA5vRP5Tsu23GAzaIpYTfFR9JA8Ibm', // password: awesomeMind
          account_id: '249f631e-2d0d-4f34-b905-1e790d6f0af4',
          role: 'guardian',
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
