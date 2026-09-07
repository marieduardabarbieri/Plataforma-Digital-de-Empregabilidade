const { Candidato, Curriculo, Empresa, Candidatura, Vaga, Entrevista } = require('../models');

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

const getEntrevistasCandidato = async function (req, res, next) {
    try {
        const entrevistas = await Entrevista.findAll({
            include: [
                {
                    model: Candidatura,
                    as: 'candidatura',
                    include: [
                        {
                            model: Vaga,
                            as: 'vaga',
                            include: [
                                {
                                    model: Empresa,
                                    as: 'empresa'
                                }
                            ]
                        },
                        {
                            model: Candidato,
                            as: 'candidato'
                        }
                    ]
                }
            ]
        });

        res.render('candidatos/entrevistas', {
            entrevistas
        });

    } catch (error) {
        next(error);
    }
};

module.exports = { getCandidato, cadastroCandidato, editar, getEntrevistasCandidato };