'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Candidaturas', [
      {
        vagaId: 1,
        candidatoId: 1,
        status: 'Em análise'
      },
      {
        vagaId: 1,
        candidatoId: 2,
        status: 'Selecionado'
      },

      {
        vagaId: 1,
        candidatoId: 3,
        status: 'Em análise'
      },

      {
        vagaId: 1,
        candidatoId: 4,
        status: 'Recusado'
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Candidaturas', null, {});

  }
};
