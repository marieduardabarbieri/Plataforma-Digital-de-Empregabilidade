const express = require('express');
const router = express.Router();
const { getCandidato } = require('../controllers/candidatoController')

router.get('/', getCandidato);

module.exports = router;