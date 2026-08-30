const express = require('express');
const router = express.Router();
const { getEmpresa, cadastroEmpresa, editar } = require('../controllers/empresaController')

router.get('/', getEmpresa);
router.get('/cadastro/empresa', cadastroEmpresa);
router.get('/editar', editar);

module.exports = router;