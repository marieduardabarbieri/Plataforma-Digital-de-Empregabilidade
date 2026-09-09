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
      descricao_vaga: "Esta vaga está sujeita a...",
      requisitos_vaga: "Cursando Análise e Desenvolvimento de Sistemas, conhecimento básico em HTML, CSS e JavaScript e disponibilidade para trabalhar no período da tarde.",
      informacoes_adicionais: "Vale-transporte, auxílio alimentação, possibilidade de efetivação e ambiente de trabalho híbrido."
    }, {
      titulo_vaga: 'Analista de Sistemas',
      empresaId: empresa.id,
      quantidade_vagas: 22,
      salario: 3000,
      regime_contrato: 'CLT',
      tipo_trabalho: 'Presencial',
      localizacao: "São Paulo - SP",
      status_vaga: "Encerrada",
      data_inicio_candidatura: '2026-09-01',
      data_fim_candidatura: '2026-09-30',
      descricao_vaga: "Buscamos um Analista de Sistemas para integrar o nosso time de Tecnologia da Informação. O profissional será responsável por analisar os processos da empresa, mapear fluxos e transformar regras de negócio em especificações técnicas eficientes para o desenvolvimento de software.",
      requisitos_vaga: "Cursando Análise e Desenvolvimento de Sistemas, conhecimento básico em HTML, CSS e JavaScript e disponibilidade para trabalhar no período da tarde.",
      informacoes_adicionais: "Vale-transporte, auxílio alimentação, possibilidade de efetivação e ambiente de trabalho híbrido."
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Vagas', null, {})

  }
};
