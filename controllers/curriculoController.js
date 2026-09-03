const { Curriculo, Candidato } = require('../models');

const getCurriculo = async function (req, res, next) {
    const curriculo = await Curriculo.findOne({
        where: {
            candidatoId: 1
        },
        include: [
            {
                model: Candidato,
                as: 'candidato'
            },
        ],
    });

    res.render('candidatos/curriculo', { curriculo })
};

module.exports = { getCurriculo };