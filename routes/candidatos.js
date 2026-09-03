const express = require('express');
const router = express.Router();
const { getCurriculo } = require('../controllers/curriculoController');
const { getCandidato, cadastroCandidato, editar } = require('../controllers/candidatoController')


router.get('/', getCandidato);
router.get('/cadastro/candidato', cadastroCandidato);
router.get('/editar', editar);
router.get('/curriculo', getCurriculo);

module.exports = router;