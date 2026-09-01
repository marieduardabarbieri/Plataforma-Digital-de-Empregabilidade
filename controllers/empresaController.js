const { Empresa, Vaga, Candidatura } = require('../models');

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
    const vaga = await Vaga.findByPk(req.params.id);

    res.render('empresas/detalhes-vaga', { vaga });
};

const editarVaga = async function (req, res) {
    const vaga = await Vaga.findByPk(req.params.id);

    res.render('empresas/editar-vaga', { vaga });
};

module.exports = { getEmpresa, cadastroEmpresa, editar, minhas_vagas, cadastro_vaga, detalhesVaga, editarVaga };