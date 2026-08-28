exports.cadastro = (req, res) => {
    res.render('auth/cadastro');
};

exports.cadastroCandidato = (req, res) => {
    res.render('auth/cadastro-candidato');
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