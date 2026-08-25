'use strict';
const { Candidato } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const candidato = await Candidato.findOne({
      where: {
        nome: 'Maria',
      },
    });
    await queryInterface.bulkInsert('Curriculos', [{
      curriculo_pdf: 'curriculo.pdf',
      candidatoId: candidato.id,
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Curriculos', null, {})

  }
};
