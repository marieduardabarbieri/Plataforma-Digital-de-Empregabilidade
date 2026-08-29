const { Candidato, Curriculo } = require('../models');

const getCandidato = async function (req, res, next) {
    const candidatos = await Candidato.findAll({
        include: [
            {
                model: Curriculo,
                as: 'curriculo'
            },
        ],
    });

    res.render('candidatos', { candidatos })
};

const cadastroCandidato = async function (req, res) {
    res.render('candidatos/cadastro-candidato');
};

const editar = async function (req, res) {
    res.render('candidatos/editar');
};


module.exports = { getCandidato, cadastroCandidato, editar };