'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Empresas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome_empresa: {
        type: Sequelize.STRING
      },
      cnpj: {
        type: Sequelize.FLOAT
      },
      email: {
        type: Sequelize.STRING
      },
      telefone: {
        type: Sequelize.NUMBER
      },
      area_atuacao: {
        type: Sequelize.STRING
      },
      perfil: {
        type: Sequelize.STRING
      },
      cidade: {
        type: Sequelize.STRING
      },
      uf: {
        type: Sequelize.STRING
      },
      localizacao: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal
          ('CURRENT_TIMESTAMP') // Para sqlite

      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        // defaultValue: Sequelize. fn( 'NOW'),
        defaultValue: Sequelize.literal
          ('CURRENT_TIMESTAMP') // Para sqlite
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Empresas');
  }
};