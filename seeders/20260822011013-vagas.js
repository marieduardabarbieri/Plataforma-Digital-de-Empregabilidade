'use strict';

const { Empresa } = require('../models')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const empresa = await Empresa.findOne({
      where: {
        nome_empresa: 'Google Assistent',
      },
    });
    await queryInterface.bulkInsert('Vagas', [{
      titulo_vaga: 'Estágio',
      empresaId: empresa.id,
      quantidade_vagas: 2,
      salario: 1000,
      regime_contrato: 'Estágio',
      tipo_trabalho: 'Híbrido',
      localizacao: "Nova Andradina - MS",
      status_vaga: "Em andamento",
      data_inicio_candidatura: '2026-09-01',
      data_fim_candidatura: '2026-09-30',
      descricao_vaga: "Esta vaga está sujeita a..."
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Vagas', null, {})

  }
};
