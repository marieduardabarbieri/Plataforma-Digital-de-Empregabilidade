'use strict';

const { Empresa } = require('../models')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const empresa = await Empresa.findOne({
      where: {
        nome_empresa: 'Empresa da Maria',
      },
    });
    await queryInterface.bulkInsert('Vagas', [{
      titulo_vaga: 'Estágio',
      empresaId: empresa.id,
      quantidade_vagas: 2,
      salario: 1000,
      regime_contrato: 'hibrido',
      tipo_trabalho: 'Auxiliar',
      localizacao: "Nova Andradina - MS",
      descricao_vaga: "Esta vaga está sujeita a..."
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Vagas', null, {})

  }
};
