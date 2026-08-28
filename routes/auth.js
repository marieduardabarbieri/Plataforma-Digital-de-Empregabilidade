const express = require('express');

const router = express.Router();

const {
    cadastro,
    cadastroCandidato,
    cadastroEmpresa,
    login
} = require('../controllers/authController');

router.get('/cadastro', cadastro);
router.get('/cadastro/candidato', cadastroCandidato);
router.get('/cadastro/empresa', cadastroEmpresa);
router.get('/login', login);

module.exports = router;