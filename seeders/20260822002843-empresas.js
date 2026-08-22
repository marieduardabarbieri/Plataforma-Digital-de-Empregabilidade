'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Empresas', [
      {
        nome_empresa: 'Empresa da Maria'
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Empresas', null, {})
  }
};
