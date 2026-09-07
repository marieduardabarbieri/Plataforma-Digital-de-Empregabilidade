'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Entrevistas', [
      {
        candidatura_id: 2,
        data: '2026-10-05',
        horario: '14:00',
        tipo: 'Online',
        endereco: null,
        link: 'https://meet.google.com/exemplo',
        observacoes: 'Entrevista para a vaga de Estágio.',
        status_entrevista: 'Agendada',
        resultado: 'Pendente',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Entrevistas', null, {});
  }
};
