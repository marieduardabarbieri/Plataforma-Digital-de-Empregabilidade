const express = require('express');
const router = express.Router();
const { getCandidatura } = require('../controllers/candidaturaController')

router.get('/', getCandidatura);

module.exports = router;