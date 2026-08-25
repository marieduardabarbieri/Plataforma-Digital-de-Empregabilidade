const { Candidatura, Vaga, Candidato } = require('../models');

const getCandidatura = async function (req, res, next) {
    const candidaturas = await Candidatura.findAll({
        include: [
            {
                model: Vaga,
                as: 'vaga'
            },
            {
                model: Candidato,
                as: 'candidato'
            }
        ],
    });
    res.render('candidaturas', { candidaturas });
};

module.exports = { getCandidatura };