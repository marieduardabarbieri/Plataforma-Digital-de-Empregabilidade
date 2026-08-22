const express = require('express');
const router = express.Router();
const { getVaga } = require('../controllers/vagaController')

router.get('/', getVaga);

module.exports = router;