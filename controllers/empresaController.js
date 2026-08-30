const { Empresa, Vaga } = require('../models');

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


module.exports = { getEmpresa, cadastroEmpresa, editar };