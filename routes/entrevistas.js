const express = require('express');
const router = express.Router();

const { getEntrevistas,
    agendarEntrevista,
    salvarEntrevista } = require('../controllers/entrevistaController');

router.get('/', getEntrevistas);
router.get('/agendar/:candidaturaId', agendarEntrevista);
router.post('/agendar', salvarEntrevista);

module.exports = router;