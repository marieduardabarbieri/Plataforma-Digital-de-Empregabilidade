
const getHome = async function (req, res, next) {
  res.render('index', {});
};

module.exports = { getHome };