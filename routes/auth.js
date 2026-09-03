const express = require('express');

const router = express.Router();

const {
    cadastro,
    login,
    recuperarSenha
} = require('../controllers/authController');

router.get('/cadastro', cadastro);
router.get('/login', login);
router.get('/recuperar-senha', recuperarSenha);

module.exports = router;