const express = require('express');
const router = express.Router();
const { getEmpresa, cadastroEmpresa, editar, minhas_vagas, vagas_encerradas, cadastro_vaga, detalhesVaga, editarVaga, candidatosDaVaga, reabrirVaga } = require('../controllers/empresaController')
const {
    getEntrevistas,
    //getDetalhesEntrevista,
    agendarEntrevista,
    salvarEntrevista
} = require('../controllers/entrevistaController');

router.get('/', getEmpresa);
router.get('/cadastro/empresa', cadastroEmpresa);
router.get('/editar', editar);
router.get('/minhas-vagas', minhas_vagas);
router.get('/cadastro-vaga', cadastro_vaga);
router.get('/minhas-vagas/:id', detalhesVaga);
router.get('/minhas-vagas/:id/editar-vaga', editarVaga);
router.get('/minhas-vagas/:id/candidatos', candidatosDaVaga);
router.get('/vagas-encerradas', vagas_encerradas);
router.get('/vagas-encerradas/:id/reabrir', reabrirVaga);

router.get('/entrevistas', getEntrevistas);
router.get('/entrevistas/agendar/:candidaturaId', agendarEntrevista);
router.post('/entrevistas/agendar', salvarEntrevista);
//router.get('/entrevistas/:id', getDetalhesEntrevista);

module.exports = router;