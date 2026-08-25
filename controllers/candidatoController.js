const { Candidato, Curriculo } = require('../models');

const getCandidato = async function (req, res, next) {
    const candidatos = await Candidato.findAll({
        include: [
            {
                model: Curriculo,
                as: 'curriculos'
            },
        ],
    });

    res.render('candidatos', { candidatos })
};

module.exports = { getCandidato };