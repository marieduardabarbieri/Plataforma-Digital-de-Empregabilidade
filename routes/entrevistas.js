const express = require('express');
const router = express.Router();

const { getEntrevistas } = require('../controllers/entrevistaController');

router.get('/', getEntrevistas);

module.exports = router;