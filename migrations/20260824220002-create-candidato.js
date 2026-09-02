'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Candidatos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      senha: {
        type: Sequelize.STRING
      },
      perfil: {
        type: Sequelize.STRING
      },
      imagem_candidato: {
        type: Sequelize.STRING
      },
      telefone: {
        type: Sequelize.STRING
      },
      cidade_candidato: {
        type: Sequelize.STRING
      },
      uf_candidato: {
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
    await queryInterface.dropTable('Candidatos');
  }
};