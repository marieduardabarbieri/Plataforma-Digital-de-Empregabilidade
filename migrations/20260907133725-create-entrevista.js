'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Entrevistas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      candidatura_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Candidaturas',
          key: 'id'
        },
        onUpdate: 'RESTRICT',
        onDelete: 'RESTRICT'
      },
      data: {
        type: Sequelize.DATEONLY
      },
      horario: {
        type: Sequelize.STRING
      },
      tipo: {
        type: Sequelize.STRING
      },
      endereco: {
        type: Sequelize.STRING
      },
      link: {
        type: Sequelize.STRING
      },
      observacoes: {
        type: Sequelize.TEXT
      },
      status_entrevista: {
        type: Sequelize.STRING,
        defaultValue: 'Agendada'
      },
      resultado: {
        type: Sequelize.STRING,
        defaultValue: 'Pendente'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Entrevistas');
  }
};