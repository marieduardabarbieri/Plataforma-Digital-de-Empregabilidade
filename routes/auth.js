const express = require('express');

const router = express.Router();

const {
    cadastro,
    login,
    recuperarSenha,
    redefinirSenha
} = require('../controllers/authController');

router.get('/cadastro', cadastro);
router.get('/login', login);
router.get('/recuperar-senha', recuperarSenha);
router.get('/redefinir-senha', redefinirSenha);

module.exports = router;