const express = require('express');
const router = express.Router();
const { getCurriculo } = require('../controllers/curriculoController')

router.get('/', getCurriculo);

module.exports = router;