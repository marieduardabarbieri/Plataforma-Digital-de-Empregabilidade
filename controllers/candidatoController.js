const { Candidato, Curriculo } = require('../models');

const getCandidato = async function (req, res, next) {
    const candidato = await Candidato.findByPk(1, { //para buscar somente o usuario 1 enquanto não tem as verificações de login para mostrar somente no perfil o usuario 
        include: [
            {
                model: Curriculo,
                as: 'curriculo'
            },
        ],
    });

    res.render('candidatos/index', { candidato })
};

const cadastroCandidato = async function (req, res) {
    res.render('candidatos/cadastro-candidato');
};

const editar = async function (req, res) {
    res.render('candidatos/editar');
};


module.exports = { getCandidato, cadastroCandidato, editar };