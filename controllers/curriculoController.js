const { Curriculo, Candidato } = require('../models');

const getCurriculo = async function (req, res, next) {
    const curriculos = await Curriculo.findAll({
        include: [
            {
                model: Candidato,
                as: 'candidato'
            },
        ],
    });

    res.render('curriculos', { curriculos })
};

module.exports = { getCurriculo };