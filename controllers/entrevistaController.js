const { Entrevista, Candidatura, Vaga, Candidato } = require('../models');

const getEntrevistas = async function (req, res, next) {
    const entrevistas = await Entrevista.findAll({
        include: [
            {
                model: Candidatura,
                as: 'candidatura',
                include: [
                    {
                        model: Vaga,
                        as: 'vaga'
                    },
                    {
                        model: Candidato,
                        as: 'candidato'
                    }
                ]
            }
        ],
    });

    res.render('entrevistas', { entrevistas });
};

module.exports = {
    getEntrevistas
};