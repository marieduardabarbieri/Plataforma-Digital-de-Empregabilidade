const { Vaga, Empresa } = require('../models');

const getVaga = async function (req, res, next) {
    const vagas = await Vaga.findAll({
        include: [
            {
                model: Empresa,
                as: 'empresa'
            },
        ],
    });
    vagas.forEach((vaga) => {
        vaga.dataInicioFormatada = new Date(
            vaga.data_inicio_candidatura
        ).toLocaleDateString('pt-BR');

        vaga.dataFimFormatada = new Date(
            vaga.data_fim_candidatura
        ).toLocaleDateString('pt-BR');
    });

    res.render('vagas', { vagas })
};

module.exports = { getVaga };