exports.cadastro = (req, res) => {
    res.render('auth/cadastro');
};

exports.login = (req, res) => {
    const perfil = req.query.perfil;

    res.render('auth/login', {
        perfil: perfil
    });
};

exports.recuperarSenha = (req, res) => {
    res.render('auth/recuperar-senha');
};

exports.redefinirSenha = (req, res) => {
    res.render('auth/redefinir-senha');
};