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


module.exports = { getEmpresa, cadastroEmpresa, editar, minhas_vagas };