'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Vagas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo_vaga: {
        type: Sequelize.STRING
      },
      empresaId: {
        type: Sequelize.INTEGER
      },
      quantidade_vagas: {
        type: Sequelize.NUMBER
      },
      salario: {
        type: Sequelize.FLOAT
      },
      regime_contrato: {
        type: Sequelize.STRING
      },
      tipo_trabalho: {
        type: Sequelize.STRING
      },
      localizacao: {
        type: Sequelize.STRING
      },
      descricao_vaga: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Vagas');
  }
};