const express = require('express');
const router = express.Router();
const { getEmpresa, cadastroEmpresa, editar, minhas_vagas } = require('../controllers/empresaController')

router.get('/', getEmpresa);
router.get('/cadastro/empresa', cadastroEmpresa);
router.get('/editar', editar);
router.get('/minhas-vagas', minhas_vagas);

module.exports = router;