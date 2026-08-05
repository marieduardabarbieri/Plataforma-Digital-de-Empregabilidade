const { usuario } = require('../models');

const getHome = async function(req, res, next) {
  let usuarios = await usuario.findAll();
  res.render('index', { usuarios });
};

module.exports = { getHome };