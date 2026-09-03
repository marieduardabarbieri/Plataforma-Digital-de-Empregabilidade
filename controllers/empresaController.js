const { Empresa, Vaga, Candidatura, Candidato } = require('../models');

const getEmpresa = async function (req, res, next) {
    const empresas = await Empresa.findAll({
        include: [
            {
                model: Vaga,
                as: 'vagas'
            },
        ],
    });

    res.render('empresas', { empresas })
};

const cadastroEmpresa = async function (req, res) {
    res.render('empresas/cadastro-empresa');
};

const editar = async function (req, res) {
    res.render('empresas/editar');
};

const minhas_vagas = async function (req, res) {
    const vagas = await Vaga.findAll();

    const totalVagas = vagas.length;
    const totalCandidaturas = await Candidatura.count();

    res.render('empresas/minhas-vagas', {
        vagas,
        totalVagas,
        totalCandidaturas
    });
};

const cadastro_vaga = async function (req, res) {
    res.render('empresas/cadastro-vaga');
};

const detalhesVaga = async function (req, res) {
    const vaga = await Vaga.findByPk(req.params.id, {
        include: [
            {
                model: Empresa,
                as: 'empresa'
            }
        ]
    });

    res.render('empresas/detalhes-vaga', { vaga });
};

const editarVaga = async function (req, res) {
    const vaga = await Vaga.findByPk(req.params.id);

    res.render('empresas/editar-vaga', { vaga });
};

const candidatosDaVaga = async function (req, res) {
    const vaga = await Vaga.findByPk(req.params.id, {
        include: [
            {
                model: Candidatura,
                as: 'candidaturas',
                include: [
                    {
                        model: Candidato,
                        as: 'candidato'
                    }
                ]
            }
        ]
    });

    if (!vaga) {
        return res.status(404).send('Vaga não encontrada');
    }

    res.render('empresas/candidatos-vaga', {
        vaga,
        candidaturas: vaga.candidaturas
    });
};

module.exports = { getEmpresa, cadastroEmpresa, editar, minhas_vagas, cadastro_vaga, detalhesVaga, editarVaga, candidatosDaVaga };