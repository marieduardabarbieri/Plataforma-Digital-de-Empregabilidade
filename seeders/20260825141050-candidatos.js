'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Candidatos', [
      {
        nome: 'Maria',
        email: "maria@gmail.com",
        senha: 123,
        perfil: "candidato"
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Candidatos', null, {})
  }
};
