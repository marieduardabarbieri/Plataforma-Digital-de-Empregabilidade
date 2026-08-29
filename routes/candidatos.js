const express = require('express');
const router = express.Router();
const { getCandidato, cadastroCandidato, editar } = require('../controllers/candidatoController')

router.get('/', getCandidato);
router.get('/cadastro/candidato', cadastroCandidato);
router.get('/editar', editar);

module.exports = router;