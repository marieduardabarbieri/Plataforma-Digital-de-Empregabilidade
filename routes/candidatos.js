const express = require('express');
const router = express.Router();
const { getCandidato, editar } = require('../controllers/candidatoController')

router.get('/', getCandidato);
router.get('/editar', editar);

module.exports = router;