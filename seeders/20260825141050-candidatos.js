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
      },
      {
        nome: 'João Silva',
        email: 'joao@gmail.com',
        senha: '123',
        perfil: 'candidato',
        imagem_candidato: '/images/candidato.png',
        telefone: '(67) 99872-4512',
        cidade_candidato: 'Nova Andradina',
        uf_candidato: 'MS'
      },
      {
        nome: 'Ana Carolina',
        email: 'ana@gmail.com',
        senha: '123',
        perfil: 'candidato',
        imagem_candidato: '/images/candidato.png',
        telefone: '(67) 99125-7834',
        cidade_candidato: 'Dourados',
        uf_candidato: 'MS'
      },
      {
        nome: 'Carlos Henrique',
        email: 'carlos@gmail.com',
        senha: '123',
        perfil: 'candidato',
        imagem_candidato: '/images/candidato.png',
        telefone: '(67) 99741-3268',
        cidade_candidato: 'Campo Grande',
        uf_candidato: 'MS'
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Candidatos', null, {})
  }
};
