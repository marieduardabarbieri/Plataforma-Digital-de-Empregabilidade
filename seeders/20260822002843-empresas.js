'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Empresas', [
      {
        nome_empresa: 'Google Assistent',
        cnpj: '20.182.807/0004-42',
        email: 'google.assistent@gmail.com',
        telefone: '(11) 3441-2020',
        area_atuacao: 'Tecnologia',
        perfil: 'Empresa',
        cidade: 'São Paulo',
        uf: 'SP',
        localizacao: 'Rua Antônio Mota, 981',
        descricao: 'O Google é uma grande empresa de tecnologia dos Estados Unidos que ficou famosa mundialmente pelo seu mecanismo de busca na internet'
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Empresas', null, {})
  }
};
