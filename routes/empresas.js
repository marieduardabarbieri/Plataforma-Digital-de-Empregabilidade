const express = require('express');
const router = express.Router();
const { getEmpresa, cadastroEmpresa } = require('../controllers/empresaController')

router.get('/', getEmpresa);
router.get('/cadastro/empresa', cadastroEmpresa);

module.exports = router;