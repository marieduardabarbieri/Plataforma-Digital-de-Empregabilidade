const express = require('express');
const router = express.Router();
const { getEmpresa, cadastroEmpresa, editar, minhas_vagas, cadastro_vaga, detalhesVaga, editarVaga, candidatosDaVaga } = require('../controllers/empresaController')

router.get('/', getEmpresa);
router.get('/cadastro/empresa', cadastroEmpresa);
router.get('/editar', editar);
router.get('/minhas-vagas', minhas_vagas);
router.get('/cadastro-vaga', cadastro_vaga);
router.get('/minhas-vagas/:id', detalhesVaga);
router.get('/minhas-vagas/:id/editar-vaga', editarVaga);
router.get(
    '/minhas-vagas/:id/candidatos',
    candidatosDaVaga
);
module.exports = router;