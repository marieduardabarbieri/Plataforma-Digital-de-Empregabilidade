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
        ], order: [
            ['data', 'ASC'],
            ['horario', 'ASC']
        ]
    });

    res.render('empresas/entrevistas', { entrevistas });
};

const agendarEntrevista = async function (req, res, next) {
    //Recebe o ID da candidatura => Busca candidatura => Busca candidato => Busca vaga => Abre o formulário
    const candidatura = await Candidatura.findByPk(req.params.candidaturaId, {
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
    });

    if (!candidatura) {
        return res.status(404).send('Candidatura não encontrada');
    }

    res.render('empresas/agendar-entrevista', { candidatura });
};

const salvarEntrevista = async function (req, res, next) {
    //Recebe formulário Cria Entrevista => status_entrevista = Agendada, resultado = Pendente /entrevistas => /entrevistas
    const {
        candidatura_id,
        data,
        horario,
        tipo,
        endereco,
        link,
        observacoes
    } = req.body;

    await Entrevista.create({
        candidatura_id,
        data,
        horario,
        tipo,
        endereco: endereco || null,
        link: link || null,
        observacoes: observacoes || null,
        status_entrevista: 'Agendada',
        resultado: 'Pendente'
    });

    res.redirect('/entrevistas');
};

const getDetalhesEntrevista = async function (req, res, next) {
    try {
        const entrevista = await Entrevista.findByPk(req.params.id, {
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
            ]
        });

        if (!entrevista) {
            return res.status(404).send('Entrevista não encontrada');
        }

        res.render('empresas/detalhes-entrevista', {
            entrevista
        });

    } catch (error) {
        next(error);
    }
};

const aprovarCandidato = async function (req, res, next) {
    try {
        const entrevista = await Entrevista.findByPk(req.params.id, {
            include: [
                {
                    model: Candidatura,
                    as: 'candidatura',
                    include: [
                        { model: Vaga, as: 'vaga' },
                        { model: Candidato, as: 'candidato' }
                    ]
                }
            ]
        });

        if (!entrevista) {
            return res.status(404).send('Entrevista não encontrada');
        }

        res.render('empresas/aprovar-candidato', { entrevista });

    } catch (error) {
        next(error);
    }
};


const salvarAprovacao = async function (req, res, next) {
    try {
        const { data_rh, orientacoes_rh } = req.body;

        const entrevista = await Entrevista.findByPk(req.params.id, {
            include: [
                {
                    model: Candidatura,
                    as: 'candidatura'
                }
            ]
        });

        if (!entrevista) {
            return res.status(404).send('Entrevista não encontrada');
        }

        await entrevista.update({
            resultado: 'Aprovado',
            data_rh,
            orientacoes_rh
        });

        await entrevista.candidatura.update({
            status: 'Aprovado'
        });

        res.redirect(`/empresas/entrevistas/${entrevista.id}`);

    } catch (error) {
        next(error);
    }
};

module.exports = {
    getEntrevistas, agendarEntrevista, salvarEntrevista, getDetalhesEntrevista, aprovarCandidato, salvarAprovacao
};