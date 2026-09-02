'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Candidatos', [
      {
        nome: 'Maria',
        email: "maria@gmail.com",
        senha: 123,
        perfil: "candidato",
        imagem_candidato: '/images/candidato.png',
        telefone: '(67) 99980-9654',
        cidade_candidato: 'São Paulo',
        uf_candidato: "SP"
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Candidatos', null, {})
  }
};
