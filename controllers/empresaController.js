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

    const vagasAndamento = vagas.filter(
        vaga => vaga.status === 'Em andamento'
    );

    const totalVagas = vagas.length;

    const totalVagasAndamento = vagasAndamento.length;

    const totalVagasEncerradas = vagas.filter(
        vaga => vaga.status === 'Encerrada'
    ).length;

    const totalCandidaturas = await Candidatura.count();

    res.render('empresas/minhas-vagas', {
        vagas: vagasAndamento,
        totalVagas,
        totalVagasAndamento,
        totalVagasEncerradas,
        totalCandidaturas
    });
};

const vagas_encerradas = async function (req, res) {
    const vagas = await Vaga.findAll({
        where: {
            status: 'Encerrada'
        }
    });

    res.render('empresas/vagas-encerradas', {
        vagas
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

module.exports = { getEmpresa, cadastroEmpresa, editar, minhas_vagas, vagas_encerradas, cadastro_vaga, detalhesVaga, editarVaga, candidatosDaVaga };