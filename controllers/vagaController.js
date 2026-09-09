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

    res.render('vagas', { vagas })
};

module.exports = { getVaga };