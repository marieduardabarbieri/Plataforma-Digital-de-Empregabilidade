const express = require('express');

const router = express.Router();

const {
    cadastro,
    login
} = require('../controllers/authController');

router.get('/cadastro', cadastro);
router.get('/login', login);

module.exports = router;