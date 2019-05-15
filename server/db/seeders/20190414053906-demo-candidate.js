'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Candidates', [{
        name: 'Kamala Harris',
        seed: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bernie Sanders',
        seed: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Joe Biden',
        seed: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Andrew Yang',
        seed: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Candidates', null, {});
  }
};
