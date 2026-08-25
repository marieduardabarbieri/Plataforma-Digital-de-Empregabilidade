'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Candidaturas', [
      {
        vagaId: 1,
        candidatoId: 1,
        status: 'Em análise'
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Candidaturas', null, {});

  }
};
