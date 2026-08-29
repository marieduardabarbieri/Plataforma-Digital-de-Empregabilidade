exports.cadastro = (req, res) => {
    res.render('auth/cadastro');
};

exports.cadastroEmpresa = (req, res) => {
    res.render('auth/cadastro-empresa');
};

exports.login = (req, res) => {
    const perfil = req.query.perfil;

    res.render('auth/login', {
        perfil: perfil
    });
};