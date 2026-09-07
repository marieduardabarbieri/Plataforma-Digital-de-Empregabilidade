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

    res.render('entrevistas/agendar-entrevista', { candidatura });
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

module.exports = {
    getEntrevistas, agendarEntrevista, salvarEntrevista
};